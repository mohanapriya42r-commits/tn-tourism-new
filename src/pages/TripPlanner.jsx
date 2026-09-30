import React, { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { apiPath } from '../utils/api';
import { generateSmartTripPlan, saveTripPlan } from '../utils/plannerEngine';
import { useAuth } from '../context/AuthContext';
import { TN_DATA } from '../data/tourismData';

export function TripPlanner() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, token, isAuthenticated, showToast } = useAuth();

  // 1. Starting District (Initial value empty, no preselected default)
  const [source, setSource] = useState('');
  
  // 2. Multi-select Destination Districts (Initial value from URL or empty array)
  const [selectedDestinations, setSelectedDestinations] = useState(() => {
    const destParam = searchParams.get('destination');
    return destParam ? [destParam] : [];
  });

  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(3);
  const [startDate, setStartDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [travelType, setTravelType] = useState('family');
  const [accommodationPref, setAccommodationPref] = useState('budget');
  const [foodPref, setFoodPref] = useState('local_mess');
  const [budgetLevel, setBudgetLevel] = useState('low');
  const [budget, setBudget] = useState(7500);
  const [categories, setCategories] = useState(['temples', 'beaches', 'hillstations']);

  // Validation Error States & DB Persistence States
  const [formErrorMsg, setFormErrorMsg] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedTripId, setSavedTripId] = useState(null);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  const [generatedPlan, setGeneratedPlan] = useState(null);

  const handleAddDestination = (district) => {
    if (district && !selectedDestinations.includes(district)) {
      setSelectedDestinations([...selectedDestinations, district]);
      setFormErrorMsg('');
    }
  };

  const handleRemoveDestination = (districtToRemove) => {
    setSelectedDestinations(selectedDestinations.filter(d => d !== districtToRemove));
  };

  const handleCategoryToggle = (catId) => {
    setCategories(prev => 
      prev.includes(catId) ? prev.filter(c => c !== catId) : [...prev, catId]
    );
  };

  const handlePlannerSubmit = async (e) => {
    e.preventDefault();
    setFormErrorMsg('');
    setSaveSuccessMsg('');

    // 1. Validate Starting District
    if (!source || source.trim() === '') {
      setFormErrorMsg('Please select your starting district.');
      if (showToast) showToast('Please select your starting district.', 'error');
      return;
    }

    // 2. Validate Destination Districts
    if (!selectedDestinations || selectedDestinations.length === 0) {
      setFormErrorMsg('Please select at least one destination district.');
      if (showToast) showToast('Please select at least one destination district.', 'error');
      return;
    }

    // 3. Authenticate User (Requirement 4: Associate plan with logged-in user)
    if (!user || !isAuthenticated) {
      const authErr = 'Please log in to your account to generate and save your trip plan in the database.';
      setFormErrorMsg(authErr);
      if (showToast) showToast(authErr, 'error');
      return;
    }

    setIsGenerating(true);

    try {
      const formData = {
        source: source.trim(),
        destinations: selectedDestinations,
        travelers: parseInt(travelers) || 1,
        days: parseInt(days) || 1,
        startDate,
        budget: parseFloat(budget) || 7500,
        budgetLevel,
        travelType,
        accommodationPref,
        foodPref,
        categories
      };

      // 4. Generate the travel plan
      const plan = generateSmartTripPlan(formData);

      // Extract places and hotels from itinerary
      const extractedPlaces = [];
      const extractedHotels = [];
      if (plan.itinerary) {
        plan.itinerary.forEach(day => {
          if (day.schedule?.morning?.placeName) extractedPlaces.push(day.schedule.morning.placeName);
          if (day.schedule?.afternoon?.placeName) extractedPlaces.push(day.schedule.afternoon.placeName);
          if (day.schedule?.evening?.placeName) extractedPlaces.push(day.schedule.evening.placeName);
          if (day.schedule?.night?.hotelName) {
            extractedHotels.push({
              day: day.dayNumber,
              district: day.district,
              name: day.schedule.night.hotelName,
              rate: day.schedule.night.hotelRate || ''
            });
          }
        });
      }

      // 5. Send inputs and generated plan to Backend API
      const tripPayload = {
        userId: user.id || user._id,
        userName: user.name,
        userEmail: user.email,
        source: source.trim(),
        destination: plan.destination,
        destinations: selectedDestinations,
        travelers: parseInt(travelers) || 1,
        days: parseInt(days) || 1,
        startDate,
        budget: parseFloat(budget) || 7500,
        budgetLevel,
        travelType,
        accommodationPref,
        foodPref,
        categories,
        transportMode: plan.costs.transportLabel,
        totalEstimatedCost: `₹${plan.costs.total.toLocaleString()}`,
        costs: plan.costs,
        itinerary: plan.itinerary,
        places: [...new Set(extractedPlaces)],
        hotels: extractedHotels,
        suggestions: plan.costs.budgetTips || [],
        generatedPlan: plan,
        status: 'Generated'
      };

      const response = await fetch(apiPath('api/trips'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify(tripPayload)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Server error while saving trip to database.');
      }

      // 6. Display generated plan to user ONLY after successful saving
      plan._id = data.trip._id;
      plan.status = data.trip.status || 'Generated';
      setGeneratedPlan(plan);
      setSavedTripId(data.trip._id);
      setSaveSuccessMsg(`Trip plan saved to database successfully! Trip ID: #${data.trip._id.slice(-6).toUpperCase()}`);

      // Sync offline copy
      saveTripPlan(plan);

      if (showToast) {
        showToast(`Trip plan generated & saved to database! ID: #${data.trip._id.slice(-6).toUpperCase()}`, 'success');
      }
    } catch (err) {
      console.error('Trip Planner Save Error:', err);
      // Requirement 3: If saving fails, display clear error message and do NOT display fake or unsaved plan
      setGeneratedPlan(null);
      setSavedTripId(null);
      const errMsg = err.message || 'Database connection error. Could not save trip plan.';
      setFormErrorMsg(errMsg);
      if (showToast) showToast(errMsg, 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSavePlan = () => {
    if (!generatedPlan) return;
    saveTripPlan(generatedPlan);
    if (showToast) {
      showToast(`Trip Plan #${savedTripId ? savedTripId.slice(-6).toUpperCase() : ''} is permanently saved in the database!`, 'success');
    }
  };

  const handlePrintPlan = () => {
    window.print();
  };

  return (
    <main className="main-content" style={{ background: 'var(--bg-body)', color: 'var(--text-main)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🗺️</div>
            <div>
              <h1 className="page-header-title">Personalized Trip Planner</h1>
              <p className="page-header-subtitle">Select your starting district and destination districts to generate a day-by-day itinerary with verified cost breakdowns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          
          <div className="planner-grid" style={{ display: 'grid', gridTemplateColumns: generatedPlan ? '1fr 1.6fr' : '1fr', gap: '2rem' }}>
            
            {/* Left Column: Input Form Card */}
            <div>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.8rem',
                  boxShadow: 'var(--glass-shadow)'
                }}
              >
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '1.2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📝 Enter Travel Requirements
                </h3>

                {formErrorMsg && (
                  <div style={{ padding: '0.85rem 1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.88rem', fontWeight: 600 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>⚠️</span>
                      <span>{formErrorMsg}</span>
                    </div>
                    {(!user || !isAuthenticated) && (
                      <div style={{ marginTop: '0.6rem' }}>
                        <Link to="/login" className="btn btn-primary btn-sm" style={{ padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}>
                          🔑 Log In to Save Plan
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {saveSuccessMsg && (
                  <div style={{ padding: '0.85rem 1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', borderRadius: 'var(--radius-md)', marginBottom: '1.2rem', fontSize: '0.88rem', fontWeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span>✅ {saveSuccessMsg}</span>
                    <Link to="/profile" style={{ color: '#10b981', textDecoration: 'underline', fontSize: '0.82rem', fontWeight: 700 }}>
                      View in Profile →
                    </Link>
                  </div>
                )}

                <form onSubmit={handlePlannerSubmit}>
                  
                  {/* 1. Starting District Field */}
                  <div className="form-group" style={{ marginBottom: '1.1rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.35rem' }}>
                      Starting District *
                    </label>
                    <select
                      className="form-select"
                      value={source}
                      onChange={(e) => {
                        setSource(e.target.value);
                        setFormErrorMsg('');
                      }}
                      style={{ width: '100%', padding: '0.7rem 0.85rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)', fontSize: '0.9rem' }}
                    >
                      <option value="">Select Starting District</option>
                      {TN_DATA.districts.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Destination Districts Multi-Select Field */}
                  <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.35rem' }}>
                      Destination Districts *
                    </label>
                    
                    <select
                      className="form-select"
                      value=""
                      onChange={(e) => handleAddDestination(e.target.value)}
                      style={{ width: '100%', padding: '0.7rem 0.85rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)', fontSize: '0.9rem' }}
                    >
                      <option value="">Select one or more destination districts ▼</option>
                      {TN_DATA.districts
                        .filter(d => !selectedDestinations.includes(d))
                        .map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                    </select>

                    {/* Selected Districts Chips */}
                    {selectedDestinations.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.75rem' }}>
                        {selectedDestinations.map((district) => (
                          <span
                            key={district}
                            style={{
                              background: 'var(--primary-light)',
                              color: 'var(--primary)',
                              border: '1px solid var(--primary)',
                              borderRadius: '20px',
                              padding: '0.3rem 0.75rem',
                              fontSize: '0.82rem',
                              fontWeight: 700,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                          >
                            {district}
                            <button
                              type="button"
                              onClick={() => handleRemoveDestination(district)}
                              style={{
                                background: 'rgba(255, 255, 255, 0.2)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                color: 'var(--primary)',
                                cursor: 'pointer',
                                fontWeight: 900,
                                fontSize: '0.85rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                lineHeight: 1
                              }}
                              title={`Remove ${district}`}
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Travelers & Days & Date */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginBottom: '1.1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Travelers
                      </label>
                      <input
                        type="number"
                        className="form-input"
                        min="1"
                        max="25"
                        value={travelers}
                        onChange={(e) => setTravelers(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Duration (Days)
                      </label>
                      <input
                        type="number"
                        className="form-input"
                        min="1"
                        max="14"
                        value={days}
                        onChange={(e) => setDays(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Start Date
                      </label>
                      <input
                        type="date"
                        className="form-input"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                        required
                      />
                    </div>
                  </div>

                  {/* Trip Type & Budget */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1.1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Trip Type
                      </label>
                      <select
                        className="form-select"
                        value={travelType}
                        onChange={(e) => setTravelType(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                      >
                        <option value="solo">Solo Backpacking</option>
                        <option value="couple">Couple / Honeymoon</option>
                        <option value="family">Family Trip</option>
                        <option value="friends">Friends Group</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Target Budget (₹)
                      </label>
                      <input
                        type="number"
                        className="form-input"
                        placeholder="e.g. 7500"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        step="500"
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                        required
                      />
                    </div>
                  </div>

                  {/* Accommodation Preference & Food Preference */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem', marginBottom: '1.1rem' }}>
                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Stay Preference
                      </label>
                      <select
                        className="form-select"
                        value={accommodationPref}
                        onChange={(e) => setAccommodationPref(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                      >
                        <option value="budget">Homestay / Budget Lodge</option>
                        <option value="temple">Temple Devasthanam Rooms</option>
                        <option value="standard">TTDC / 2-3 Star Hotel</option>
                        <option value="luxury">Luxury Heritage Resort</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Food Preference
                      </label>
                      <select
                        className="form-select"
                        value={foodPref}
                        onChange={(e) => setFoodPref(e.target.value)}
                        style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                      >
                        <option value="local_mess">Economical Local Mess</option>
                        <option value="veg">Pure South Indian Veg</option>
                        <option value="non_veg">Chettinad Non-Veg</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Priority */}
                  <div style={{ marginBottom: '1.1rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                      Budget Priority
                    </label>
                    <select
                      className="form-select"
                      value={budgetLevel}
                      onChange={(e) => setBudgetLevel(e.target.value)}
                      style={{ width: '100%', padding: '0.65rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', color: 'var(--text-heading)' }}
                    >
                      <option value="low">Economy / Strict Budget</option>
                      <option value="medium">Standard Balance</option>
                      <option value="high">Comfort Premium</option>
                    </select>
                  </div>

                  {/* Preferred Categories */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.4rem' }}>
                      Places & Interests to Visit
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                      {[
                        { id: 'temples', name: '🛕 Temples' },
                        { id: 'beaches', name: '🏖️ Beaches' },
                        { id: 'hillstations', name: '⛰️ Hills' },
                        { id: 'waterfalls', name: '💧 Waterfalls' },
                        { id: 'historical', name: '🏛️ Historical' },
                        { id: 'wildlife', name: '🦁 Wildlife' }
                      ].map((cat) => (
                        <label key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', background: 'var(--input-bg)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-dark)', cursor: 'pointer' }}>
                          <input
                            type="checkbox"
                            checked={categories.includes(cat.id)}
                            onChange={() => handleCategoryToggle(cat.id)}
                          />
                          {cat.name}
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.85rem',
                      fontSize: '1rem',
                      fontWeight: 700,
                      opacity: isGenerating ? 0.75 : 1,
                      cursor: isGenerating ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    {isGenerating ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ width: '1rem', height: '1rem', border: '2px solid #fff', borderRightColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.75s linear infinite' }}></span>
                        <span>Saving Plan to Database...</span>
                      </>
                    ) : (
                      generatedPlan ? '🔄 Regenerate & Save Plan ✨' : '🚀 Generate Trip Plan ✨'
                    )}
                  </button>

                </form>
              </div>
            </div>

            {/* Right Column: Output Dashboard Layout */}
            <div>
              {generatedPlan ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Destination Overview Banner */}
                  <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', boxShadow: 'var(--glass-shadow)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          ITINERARY DASHBOARD • {generatedPlan.travelers} TRAVELERS • {generatedPlan.days} DAYS
                        </span>
                        {savedTripId && (
                          <span style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', padding: '0.15rem 0.55rem', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 800 }}>
                            ✅ PERSISTED IN DB • ID: #{savedTripId.slice(-6).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heading)', margin: '0.2rem 0 0', fontWeight: 800 }}>
                        {generatedPlan.destination} Trip Plan
                      </h2>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        From {generatedPlan.source} starting on {generatedPlan.startDate}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                      <button onClick={handleSavePlan} className="btn btn-primary btn-sm" style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem' }}>
                        💾 Saved in DB
                      </button>
                      <button onClick={handlePrintPlan} className="btn btn-secondary btn-sm" style={{ padding: '0.5rem 0.9rem', fontSize: '0.82rem' }}>
                        🖨️ Print / PDF
                      </button>
                    </div>
                  </div>

                  {/* Budget Advisory Status Card */}
                  <div
                    style={{
                      background: generatedPlan.costs.fitsBudget ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                      border: `1px solid ${generatedPlan.costs.fitsBudget ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                      borderRadius: 'var(--radius-md)',
                      padding: '1.2rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>{generatedPlan.costs.fitsBudget ? '✅' : '⚠️'}</span>
                    <div style={{ flex: 1 }}>
                      <strong style={{ color: generatedPlan.costs.fitsBudget ? '#059669' : '#dc2626', fontSize: '1.05rem', display: 'block' }}>
                        {generatedPlan.costs.fitsBudget ? 'This plan fits cleanly within your budget!' : 'Estimated total exceeds target budget'}
                      </strong>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginTop: '0.3rem' }}>
                        Total Estimated Expense: <strong>₹{generatedPlan.costs.total.toLocaleString()}</strong> (Target: ₹{generatedPlan.costs.targetBudget.toLocaleString()})
                      </p>

                      {!generatedPlan.costs.fitsBudget && generatedPlan.costs.budgetTips.length > 0 && (
                        <div style={{ marginTop: '0.8rem', paddingTop: '0.6rem', borderTop: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '0.82rem' }}>
                          <strong style={{ color: '#dc2626' }}>💡 Recommended Lower-Cost Alternatives:</strong>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', marginTop: '0.3rem', color: 'var(--text-muted)' }}>
                            {generatedPlan.costs.budgetTips.map((tip, idx) => (
                              <li key={idx}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary Cost Breakdown Cards */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem' }}>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Per Person Cost</span>
                      <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontWeight: 800 }}>₹{generatedPlan.costs.perPerson.toLocaleString()}</strong>
                    </div>

                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Local Transfers</span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--text-heading)' }}>₹{generatedPlan.costs.transport.toLocaleString()}</strong>
                    </div>

                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Accommodation</span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--text-heading)' }}>₹{generatedPlan.costs.hotel.toLocaleString()}</strong>
                    </div>

                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Food & Dining</span>
                      <strong style={{ fontSize: '1.1rem', color: 'var(--text-heading)' }}>₹{generatedPlan.costs.food.toLocaleString()}</strong>
                    </div>

                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>Total Estimated</span>
                      <strong style={{ fontSize: '1.3rem', color: 'var(--primary)', fontWeight: 800 }}>₹{generatedPlan.costs.total.toLocaleString()}</strong>
                    </div>
                  </div>

                  {/* Day-by-Day Sightseeing Itinerary Cards */}
                  <div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', marginBottom: '1rem', fontWeight: 800 }}>
                      🗓️ Day-by-Day Tour Schedule
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                      {generatedPlan.itinerary.map((day) => (
                        <div
                          key={day.dayNumber}
                          style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-dark)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '1.5rem',
                            boxShadow: 'var(--glass-shadow)'
                          }}
                        >
                          <div style={{ marginBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-dark)' }}>
                              <div>
                                <h4 style={{ fontSize: '1.15rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                                  {day.title}
                                </h4>
                                {day.theme && (
                                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem' }}>
                                    ✨ Focus: {day.theme}
                                  </span>
                                )}
                              </div>
                              <span style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.75rem', fontWeight: 700 }}>
                                Day {day.dayNumber}
                              </span>
                            </div>

                            {/* Suggested Visit Order & Distinct Tourist Places for Day */}
                            {day.suggestedVisitOrder && (
                              <div style={{ background: 'rgba(217, 119, 6, 0.08)', border: '1px solid rgba(217, 119, 6, 0.25)', borderRadius: 'var(--radius-sm)', padding: '0.5rem 0.8rem', marginBottom: '0.8rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <strong style={{ color: 'var(--primary)' }}>🚶‍♂️ Suggested Visit Order:</strong>
                                <span style={{ color: 'var(--text-heading)', fontWeight: 600 }}>{day.suggestedVisitOrder}</span>
                              </div>
                            )}
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                            {/* Morning Slot */}
                            <div style={{ background: 'var(--input-bg)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                              <span style={{ fontSize: '0.75rem', color: '#d97706', fontWeight: 700, textTransform: 'uppercase' }}>
                                🌅 Morning ({day.schedule.morning.time})
                              </span>
                              <h5 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', margin: '0.2rem 0 0.3rem', fontWeight: 700 }}>
                                {day.schedule.morning.placeName}
                              </h5>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                {day.schedule.morning.activity}
                              </p>
                              <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span>📍 Est. Distance: {day.schedule.morning.distance}</span>
                                <span>🎟️ Fee: {day.schedule.morning.entryFee}</span>
                              </div>
                            </div>

                            {/* Afternoon Slot */}
                            <div style={{ background: 'var(--input-bg)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                              <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase' }}>
                                ☀️ Afternoon ({day.schedule.afternoon.time})
                              </span>
                              <h5 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', margin: '0.2rem 0 0.3rem', fontWeight: 700 }}>
                                {day.schedule.afternoon.placeName}
                              </h5>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                {day.schedule.afternoon.activity}
                              </p>
                              <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span>🍴 Meal Spot: {day.schedule.afternoon.lunchSpot}</span>
                                <span>⏱️ Travel Time: {day.schedule.afternoon.estimatedTravelTime}</span>
                              </div>
                            </div>

                            {/* Evening Slot */}
                            <div style={{ background: 'var(--input-bg)', padding: '0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                              <span style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 700, textTransform: 'uppercase' }}>
                                🌆 Evening ({day.schedule.evening.time})
                              </span>
                              <h5 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', margin: '0.2rem 0 0.3rem', fontWeight: 700 }}>
                                {day.schedule.evening.placeName}
                              </h5>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                                {day.schedule.evening.activity}
                              </p>
                              <div style={{ marginTop: '0.4rem', fontSize: '0.78rem', color: 'var(--text-main)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <span>⏱️ Travel Time: {day.schedule.evening.estimatedTravelTime || '15-20 mins'}</span>
                                <span>🎟️ Fee: {day.schedule.evening.entryFee || 'Free Entry'}</span>
                              </div>
                            </div>

                            {/* Night Slot */}
                            <div style={{ background: 'var(--primary-light)', padding: '0.75rem 0.9rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', fontSize: '0.85rem' }}>
                              <strong style={{ color: 'var(--primary)' }}>🌙 Night Stay & Dining: </strong>
                              <span style={{ color: 'var(--text-heading)' }}>{day.schedule.night.dinner} ({day.schedule.night.hotelRate})</span>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '5rem 2rem', background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>🗺️</span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)', fontWeight: 700 }}>Your Optimized Trip Itinerary Will Appear Here</h3>
                  <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', maxWidth: '450px', margin: '0.5rem auto 0' }}>
                    Select your starting district, destination districts, and travel preferences on the left form and click "Generate Trip Plan".
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default TripPlanner;
