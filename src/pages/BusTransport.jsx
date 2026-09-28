import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import { MASTER_TRAVEL_SERVICES } from '../data/travelServicesData';
import { apiPath } from '../utils/api';

export function BusTransport() {
  const [searchParams] = useSearchParams();
  
  // Filter States
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedTransportType, setSelectedTransportType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Pre-populated Travel Services (~100 items dataset)
  const [travelServices, setTravelServices] = useState(MASTER_TRAVEL_SERVICES);
  const [loading, setLoading] = useState(false);

  // Optional Owner Prompt & Form State
  const [userChoice, setUserChoice] = useState(null); // null, 'yes', 'no'
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState('');
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');

  // Selected Service for "View Details" Modal
  const [selectedDetail, setSelectedDetail] = useState(null);

  // Submission Form Fields State
  const [formData, setFormData] = useState({
    userConnection: 'Owner', // 'Owner' or 'Recommendation'
    companyName: '',
    ownerName: '',
    mobile: '',
    email: '',
    district: 'Madurai',
    address: '',
    transportType: 'Taxi',
    description: '',
    services: [],
    priceRange: '₹15 - ₹25 / km',
    location: '',
    website: '',
    images: ''
  });

  const availableServiceOptions = [
    'AC Sleeper', 'Non-AC Seater', 'Tempo Traveller', 'Outstation Packages', 
    'Airport Transfer', '24/7 Service', 'Local Sightseeing', 'Hill Station Drive'
  ];

  // Auto open form if ?action=add present in URL
  useEffect(() => {
    if (searchParams.get('action') === 'add') {
      setUserChoice('yes');
      setShowForm(true);
    }
  }, [searchParams]);

  // Fetch Approved Travel Services from Backend & Merge with Master Dataset
  useEffect(() => {
    fetchApprovedTravelServices();
  }, []);

  const fetchApprovedTravelServices = async () => {
    try {
      const res = await fetch(apiPath('api/travel-services'));
      if (res.ok) {
        const data = await res.json();
        if (data.travelServices && data.travelServices.length > 0) {
          const backendItems = data.travelServices;
          const backendIds = new Set(backendItems.map(b => b._id || b.id || b.companyName));
          const localOnly = MASTER_TRAVEL_SERVICES.filter(m => !backendIds.has(m.id) && !backendIds.has(m.companyName));
          setTravelServices([...backendItems, ...localOnly]);
        }
      }
    } catch (err) {
      console.log('Backend connection note: Displaying pre-populated 100+ travel services dataset.', err);
    }
  };

  const handleChoiceSelect = (choice) => {
    setUserChoice(choice);
    if (choice === 'yes') {
      setShowForm(true);
      setSubmitSuccessMsg('');
      setSubmitErrorMsg('');
    } else {
      setShowForm(false);
    }
  };

  const handleServiceChipToggle = (serviceName) => {
    setFormData(prev => {
      const exists = prev.services.includes(serviceName);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== serviceName)
          : [...prev.services, serviceName]
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccessMsg('');
    setSubmitErrorMsg('');

    // Required fields check
    if (!formData.companyName || !formData.ownerName || !formData.mobile || !formData.district || !formData.address || !formData.transportType || !formData.description) {
      setSubmitErrorMsg('Please complete all required fields.');
      return;
    }

    // Client-side duplicate check
    const isDuplicate = travelServices.some(s => {
      const nameMatch = (s.companyName || s.name || '').toLowerCase().trim() === formData.companyName.toLowerCase().trim();
      const districtMatch = (s.district || '').toLowerCase().trim() === formData.district.toLowerCase().trim();
      return nameMatch && districtMatch;
    });

    if (isDuplicate) {
      setSubmitErrorMsg('This business may already be listed. Please check the existing listings before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(apiPath('api/travel-services'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitSuccessMsg(data.message || 'Travel service submitted successfully for review!');
        setFormData({
          userConnection: 'Owner',
          companyName: '',
          ownerName: '',
          mobile: '',
          email: '',
          district: 'Madurai',
          address: '',
          transportType: 'Taxi',
          description: '',
          services: [],
          priceRange: '₹15 - ₹25 / km',
          location: '',
          website: '',
          images: ''
        });
      } else {
        setSubmitErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setSubmitErrorMsg('Backend connection failed. Please ensure the Node.js server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleClearFilters = () => {
    setSelectedDistrict('');
    setSelectedTransportType('');
    setSearchQuery('');
  };

  // Filter travel services based on Selected District + Transport Type + Search Query
  const filteredServices = travelServices.filter(s => {
    // 1. District Filter
    if (selectedDistrict && selectedDistrict !== '' && selectedDistrict !== 'All') {
      if (s.district !== selectedDistrict) return false;
    }

    // 2. Transport Type Filter
    if (selectedTransportType && selectedTransportType !== '' && selectedTransportType !== 'All') {
      if (s.transportType !== selectedTransportType) return false;
    }

    // 3. Search Query Filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const match = (
        (s.companyName && s.companyName.toLowerCase().includes(q)) ||
        (s.district && s.district.toLowerCase().includes(q)) ||
        (s.address && s.address.toLowerCase().includes(q)) ||
        (s.description && s.description.toLowerCase().includes(q))
      );
      if (!match) return false;
    }

    return true;
  });

  return (
    <main className="main-content" style={{ background: 'var(--bg-body)', color: 'var(--text-main)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* Header Banner */}
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🚌</div>
            <div>
              <h1 className="page-header-title">Travels & Transport Directory</h1>
              <p className="page-header-subtitle">Discover verified bus, van, and taxi services across all 38 districts of Tamil Nadu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          {/* 1. OPTIONAL TRAVEL OWNER BANNER SECTION */}
          <div 
            className="glass-card" 
            style={{ 
              padding: '1.8rem', 
              marginBottom: '2rem', 
              borderRadius: 'var(--radius-lg)', 
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.12), rgba(168, 85, 247, 0.05))',
              border: '1px solid rgba(124, 58, 237, 0.3)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.2rem' }}>
              <div>
                <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.75rem', fontWeight: 700 }}>
                  TRAVEL OPERATOR / PARTNER PORTAL
                </span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: '0.3rem 0 0.2rem', fontWeight: 700 }}>
                  Are you a travel service owner, or do you know a travel service that you would like to add to our website?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
                  List your travel agency, bus line, cab rental, or tour vans on Tamil Nadu Tourism directory. Submissions are reviewed and verified by our management team.
                </p>
              </div>

              {/* Choice Action Buttons */}
              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleChoiceSelect('yes')}
                  className="btn btn-primary"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontWeight: 700,
                    boxShadow: userChoice === 'yes' ? '0 0 15px rgba(124, 58, 237, 0.5)' : 'none'
                  }}
                >
                  ✨ Yes, I want to add a travel service
                </button>

                <button
                  onClick={() => handleChoiceSelect('no')}
                  className="btn btn-outline"
                  style={{
                    padding: '0.75rem 1.4rem',
                    fontWeight: 600,
                    borderColor: userChoice === 'no' ? 'var(--primary)' : 'var(--border-dark)',
                    color: userChoice === 'no' ? 'var(--primary)' : 'var(--text-heading)'
                  }}
                >
                  📍 No, just show me travel services
                </button>
              </div>
            </div>

            {/* TRAVEL SUBMISSION FORM (Only when userChoice === 'yes') */}
            {showForm && (
              <div style={{ marginTop: '2rem', paddingTop: '1.8rem', borderTop: '1px solid var(--border-dark)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📝 Submit New Travel Service Details
                  </h4>
                  <button 
                    onClick={() => setShowForm(false)} 
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.9rem' }}
                  >
                    ✖ Close Form
                  </button>
                </div>

                {submitSuccessMsg && (
                  <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', color: '#10b981', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 600 }}>
                    ✅ {submitSuccessMsg}
                  </div>
                )}

                {submitErrorMsg && (
                  <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 600 }}>
                    ⚠️ {submitErrorMsg}
                  </div>
                )}

                <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  
                  {/* Connection Selector: Owner vs Recommendation */}
                  <div className="form-group" style={{ padding: '1rem', background: 'var(--input-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                    <label style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-heading)', display: 'block', marginBottom: '0.6rem' }}>
                      What is your connection to this Travel Service? *
                    </label>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-heading)', fontWeight: formData.userConnection === 'Owner' ? 700 : 500 }}>
                        <input
                          type="radio"
                          name="userConnection"
                          value="Owner"
                          checked={formData.userConnection === 'Owner'}
                          onChange={() => setFormData({ ...formData, userConnection: 'Owner' })}
                        />
                        🚌 I am the Owner
                      </label>
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-heading)', fontWeight: formData.userConnection === 'Recommendation' ? 700 : 500 }}>
                        <input
                          type="radio"
                          name="userConnection"
                          value="Recommendation"
                          checked={formData.userConnection === 'Recommendation'}
                          onChange={() => setFormData({ ...formData, userConnection: 'Recommendation' })}
                        />
                        💡 I know / Recommend this Travel Service
                      </label>
                    </div>
                  </div>

                  {/* Row 1: Company Name & Owner / Recommender Name */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Travel / Company Name *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Meenakshi Travels & Cabs"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        {formData.userConnection === 'Owner' ? 'Owner / Manager Name *' : 'Your Name (Recommender) *'}
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder={formData.userConnection === 'Owner' ? 'e.g. R. Sundaram' : 'e.g. Anand (Traveler)'}
                        value={formData.ownerName}
                        onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: Mobile & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Contact Mobile Number *
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. contact@meenakshicabs.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 3: District & Transport Type */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        District Location *
                      </label>
                      <select
                        className="form-select"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        required
                      >
                        {TN_DATA.districts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Transport Type *
                      </label>
                      <select
                        className="form-select"
                        value={formData.transportType}
                        onChange={(e) => setFormData({ ...formData, transportType: e.target.value })}
                        required
                      >
                        <option value="Bus">🚌 Bus Service</option>
                        <option value="Van">🚐 Van / Tempo Traveller</option>
                        <option value="Taxi">🚕 Taxi / Cab Service</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Starting Price / Price Range *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. ₹15 / km or ₹3,500 / day"
                        value={formData.priceRange}
                        onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 4: Full Address */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                      Full Office Address *
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. 12, West Tower Street, Near Temple, Madurai"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      required
                    />
                  </div>

                  {/* Row 5: Services Offered Checkboxes */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>
                      Available Services Offered
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {availableServiceOptions.map((service) => {
                        const isChecked = formData.services.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => handleServiceChipToggle(service)}
                            style={{
                              padding: '0.4rem 0.8rem',
                              borderRadius: '9999px',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              border: isChecked ? '1px solid var(--primary)' : '1px solid var(--border-dark)',
                              background: isChecked ? 'var(--primary)' : 'rgba(0,0,0,0.2)',
                              color: isChecked ? '#ffffff' : 'var(--text-muted)',
                              transition: 'var(--transition)'
                            }}
                          >
                            {isChecked ? '✓ ' : '+ '}{service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Google Maps & Website */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Google Maps Location Link
                      </label>
                      <input
                        type="url"
                        className="form-input"
                        placeholder="https://maps.google.com/..."
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Website or Booking Link (Optional)
                      </label>
                      <input
                        type="url"
                        className="form-input"
                        placeholder="https://mytravels.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 7: Images */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                      Travel Service Image URL
                    </label>
                    <input
                      type="url"
                      className="form-input"
                      placeholder="https://images.unsplash.com/..."
                      value={formData.images}
                      onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                    />
                  </div>

                  {/* Row 8: Description */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                      Service Description & Vehicle Details *
                    </label>
                    <textarea
                      className="form-input"
                      rows="3"
                      placeholder="Describe routes served, vehicle features, driver experience, AC/non-AC options..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  {/* Form Submit Button */}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary"
                      style={{ padding: '0.8rem 2rem', fontWeight: 700, fontSize: '0.95rem' }}
                    >
                      {submitting ? 'Submitting...' : '🚐 Submit Travel Service for Approval →'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="btn btn-outline"
                      style={{ padding: '0.8rem 1.5rem' }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
            
            {/* Search Input & Filter Controls */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderRadius: 'var(--radius-lg)' }}>
              
              {/* 1. DISTRICT SELECTION DROPDOWN */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                  📍 Which district are you travelling to?
                </label>
                <select
                  className="form-select"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid var(--primary-light)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-heading)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">-- All 38 Districts of Tamil Nadu --</option>
                  {TN_DATA.districts.map((d) => (
                    <option key={d} value={d}>{d} District</option>
                  ))}
                </select>
              </div>

              {/* 2. TRANSPORT TYPE FILTER BUTTONS */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '0.6rem' }}>
                  🚍 Filter by Transport Type:
                </label>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {[
                    { label: 'All Types', value: '' },
                    { label: '🚌 Bus', value: 'Bus' },
                    { label: '🚐 Van', value: 'Van' },
                    { label: '🚕 Taxi', value: 'Taxi' }
                  ].map((typeObj) => {
                    const isActive = selectedTransportType === typeObj.value;
                    return (
                      <button
                        key={typeObj.label}
                        type="button"
                        onClick={() => setSelectedTransportType(typeObj.value)}
                        style={{
                          padding: '0.6rem 1.2rem',
                          borderRadius: '9999px',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          transition: 'var(--transition)',
                          border: isActive ? '2px solid var(--primary)' : '1px solid var(--border-dark)',
                          background: isActive ? 'var(--primary)' : 'var(--bg-card)',
                          color: isActive ? '#ffffff' : 'var(--text-heading)',
                          boxShadow: isActive ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none'
                        }}
                      >
                        {typeObj.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. SEARCH INPUT */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="🔍 Search travel operator name, address, or route..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', fontSize: '0.95rem', color: 'var(--text-heading)' }}
                  />
                </div>
                {(selectedDistrict || selectedTransportType || searchQuery) && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.75rem 1.2rem', color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.4)' }}
                  >
                    Reset Filters ✕
                  </button>
                )}
              </div>

            </div>

            {/* Loading Indicator */}
            {loading && (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div className="spinner" style={{ margin: '0 auto 1rem', border: '3px solid rgba(124, 58, 237, 0.2)', borderTop: '3px solid var(--primary)', width: '36px', height: '36px', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                <p style={{ color: 'var(--text-muted)' }}>Loading verified travel services...</p>
              </div>
            )}

            {/* Travel Services Cards Grid */}
            {!loading && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                    {selectedDistrict ? `${selectedDistrict} Travel Services` : 'All Travel Services in Tamil Nadu'}
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '0.6rem' }}>
                      ({filteredServices.length} available)
                    </span>
                  </h3>
                </div>

                {filteredServices.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '3.5rem 1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🚐</span>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)' }}>No travel services found</h3>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem', maxWidth: '500px', margin: '0.4rem auto 1.5rem' }}>
                      We couldn't find any travel operators matching your filters in {selectedDistrict || 'this area'}. Be the first to list a service!
                    </p>
                    <button onClick={() => handleChoiceSelect('yes')} className="btn btn-primary btn-sm">
                      + Add a Travel Service
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.8rem', marginBottom: '3.5rem' }}>
                    {filteredServices.map((service) => (
                      <div
                        key={service._id || service.id}
                        className="glass-card"
                        style={{
                          padding: '1.6rem',
                          borderRadius: 'var(--radius-lg)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          border: '1px solid var(--border-dark)',
                          boxShadow: 'var(--glass-shadow)',
                          transition: 'var(--transition)',
                          position: 'relative'
                        }}
                      >
                        <div>
                          {/* Card Top: Transport Type Badge & District */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                            <span 
                              style={{ 
                                padding: '0.3rem 0.7rem', 
                                borderRadius: '9999px', 
                                fontSize: '0.75rem', 
                                fontWeight: 700, 
                                background: service.transportType === 'Bus' ? 'rgba(124, 58, 237, 0.15)' : service.transportType === 'Van' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                                color: service.transportType === 'Bus' ? 'var(--primary)' : service.transportType === 'Van' ? '#10b981' : '#f59e0b',
                                border: `1px solid ${service.transportType === 'Bus' ? 'rgba(124, 58, 237, 0.3)' : service.transportType === 'Van' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`
                              }}
                            >
                              {service.transportType === 'Bus' ? '🚌 Bus Service' : service.transportType === 'Van' ? '🚐 Van / Tempo' : '🚕 Taxi / Cab'}
                            </span>

                            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                              📍 {service.district}
                            </span>
                          </div>

                          {/* Company Name */}
                          <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', margin: '0.2rem 0 0.4rem', fontWeight: 700 }}>
                            {service.companyName}
                          </h3>

                          {/* Rating & Price */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.88rem' }}>
                            <span style={{ color: '#f59e0b', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                              ⭐ {service.rating || '4.8'} / 5.0
                            </span>
                            <span style={{ fontWeight: 700, color: 'var(--primary-dark)', background: 'var(--primary-light)', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem' }}>
                              💰 {service.priceRange || 'Contact for Quote'}
                            </span>
                          </div>

                          {/* Address & Contact Details */}
                          <div style={{ background: 'var(--bg-body)', borderRadius: 'var(--radius-md)', padding: '0.9rem', fontSize: '0.84rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', border: '1px solid var(--border-dark)' }}>
                            <div style={{ color: 'var(--text-heading)' }}>
                              <strong>📍 Address: </strong>
                              <span style={{ color: 'var(--text-main)' }}>{service.address}</span>
                            </div>
                            {service.mobile && (
                              <div style={{ color: 'var(--text-heading)' }}>
                                <strong>📞 Mobile: </strong>
                                <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{service.mobile}</span>
                              </div>
                            )}
                            {service.email && (
                              <div style={{ color: 'var(--text-heading)' }}>
                                <strong>✉️ Email: </strong>
                                <span style={{ color: 'var(--text-main)' }}>{service.email}</span>
                              </div>
                            )}
                          </div>

                          {/* Services Chips */}
                          {service.services && service.services.length > 0 && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                              {service.services.map((chip, idx) => (
                                <span
                                  key={idx}
                                  style={{
                                    fontSize: '0.72rem',
                                    padding: '0.2rem 0.5rem',
                                    borderRadius: '9999px',
                                    background: 'var(--primary-light)',
                                    color: 'var(--primary)',
                                    fontWeight: 600
                                  }}
                                >
                                  ✓ {chip}
                                </span>
                              ))}
                            </div>
                          )}

                          <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '1.2rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {service.description}
                          </p>
                        </div>

                        {/* Card Footer Actions */}
                        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-dark)', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                          <a
                            href={`tel:${service.mobile}`}
                            className="btn btn-primary btn-sm"
                            style={{ flex: 1, padding: '0.65rem 0.8rem', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', textDecoration: 'none' }}
                          >
                            📞 Call
                          </a>

                          <button
                            type="button"
                            onClick={() => setSelectedDetail(service)}
                            className="btn btn-outline btn-sm"
                            style={{ flex: 1, padding: '0.65rem 0.8rem', fontSize: '0.85rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            👁️ View Details
                          </button>

                          {service.location && (
                            <a
                              href={service.location}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary btn-sm"
                              style={{ padding: '0.65rem 0.8rem', fontSize: '0.85rem', textDecoration: 'none' }}
                              title="Open in Google Maps"
                            >
                              🗺️ Maps
                            </a>
                          )}
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* DETAILS MODAL */}
            {selectedDetail && (
              <div 
                style={{ 
                  position: 'fixed', 
                  top: 0, 
                  left: 0, 
                  right: 0, 
                  bottom: 0, 
                  background: 'rgba(0, 0, 0, 0.6)', 
                  backdropFilter: 'blur(4px)', 
                  zIndex: 9999, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '1.5rem' 
                }}
                onClick={() => setSelectedDetail(null)}
              >
                <div 
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-dark)', 
                    borderRadius: 'var(--radius-lg)', 
                    maxWidth: '650px', 
                    width: '100%', 
                    maxHeight: '90vh', 
                    overflowY: 'auto', 
                    padding: '2rem', 
                    boxShadow: 'var(--glass-shadow)',
                    position: 'relative'
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Modal Button */}
                  <button
                    onClick={() => setSelectedDetail(null)}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0,0,0,0.1)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '32px',
                      height: '32px',
                      cursor: 'pointer',
                      fontSize: '1.1rem',
                      color: 'var(--text-heading)'
                    }}
                  >
                    ✕
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <span className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700 }}>
                      {selectedDetail.transportType} Service
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      📍 {selectedDetail.district} District
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.75rem', color: 'var(--text-heading)', margin: '0 0 0.8rem', fontWeight: 800 }}>
                    {selectedDetail.companyName}
                  </h2>

                  {/* Owner & Contact info */}
                  <div style={{ background: 'var(--bg-body)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', marginBottom: '1.2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem', fontSize: '0.9rem' }}>
                    {selectedDetail.ownerName && (
                      <div>
                        <strong style={{ color: 'var(--text-heading)' }}>👤 Owner / Contact Person: </strong>
                        <div>{selectedDetail.ownerName}</div>
                      </div>
                    )}
                    <div>
                      <strong style={{ color: 'var(--text-heading)' }}>📞 Phone Number: </strong>
                      <div><a href={`tel:${selectedDetail.mobile}`} style={{ color: 'var(--primary)', fontWeight: 700 }}>{selectedDetail.mobile}</a></div>
                    </div>
                    {selectedDetail.email && (
                      <div>
                        <strong style={{ color: 'var(--text-heading)' }}>✉️ Email: </strong>
                        <div>{selectedDetail.email}</div>
                      </div>
                    )}
                    <div>
                      <strong style={{ color: 'var(--text-heading)' }}>💰 Fares & Rates: </strong>
                      <div style={{ color: '#10b981', fontWeight: 700 }}>{selectedDetail.priceRange || 'Call for rates'}</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.2rem' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '0.4rem', fontWeight: 700 }}>
                      📍 Full Office Address
                    </h4>
                    <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', margin: 0 }}>
                      {selectedDetail.address}
                    </p>
                  </div>

                  {selectedDetail.services && selectedDetail.services.length > 0 && (
                    <div style={{ marginBottom: '1.2rem' }}>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '0.5rem', fontWeight: 700 }}>
                        ✨ Features & Services Offered
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selectedDetail.services.map((srv, idx) => (
                          <span key={idx} style={{ padding: '0.3rem 0.8rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '9999px', fontSize: '0.8rem', fontWeight: 600 }}>
                            ✓ {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '0.4rem', fontWeight: 700 }}>
                      📝 About Service
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', whiteSpace: 'pre-line' }}>
                      {selectedDetail.description}
                    </p>
                  </div>

                  {/* Modal Action Buttons */}
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)' }}>
                    <a
                      href={`tel:${selectedDetail.mobile}`}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: '0.8rem', textAlign: 'center', justifyContent: 'center', textDecoration: 'none' }}
                    >
                      📞 Call Now ({selectedDetail.mobile})
                    </a>
                    {selectedDetail.location && (
                      <a
                        href={selectedDetail.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ padding: '0.8rem 1.2rem', textDecoration: 'none' }}
                      >
                        🗺️ Open in Google Maps ↗
                      </a>
                    )}
                    {selectedDetail.website && (
                      <a
                        href={selectedDetail.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ padding: '0.8rem 1.2rem', textDecoration: 'none' }}
                      >
                        🌐 Visit Website ↗
                      </a>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* Major Transit Hubs Section */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--glass-shadow)' }}>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '1.2rem', fontWeight: 800 }}>
                📍 Major Tamil Nadu Transit Terminals & Junctions
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
                {[
                  { city: 'Chennai', type: 'Bus Terminal', name: 'CMBT Koyambedu', description: 'One of Asia\'s largest bus stations linking Chennai to all 38 districts & interstate routes.', facilities: '24/7 Restrooms, Food Courts, Prepaid Taxis, Cloakroom' },
                  { city: 'Madurai', type: 'Bus Terminal', name: 'Mattuthavani (MIBT)', description: 'Central hub connecting South Tamil Nadu including Kanyakumari, Rameswaram & Tirunelveli.', facilities: 'AC Waiting Hall, ATM, Auto Stand, Multi-level Parking' },
                  { city: 'Coimbatore', type: 'Bus Terminal', name: 'Gandhipuram Central Bus Terminus', description: 'Major hub serving Western TN, Nilgiris (Ooty), Kerala & Karnataka routes.', facilities: 'Dormitories, Information Desk, City Bus Connectivity' },
                  { city: 'Trichy', type: 'Bus Terminal', name: 'Central Bus Stand (Prabhat)', description: 'Strategic geographic heart of Tamil Nadu connecting Delta region & Southern districts.', facilities: 'Cloakroom, Wheelchair access, Direct Railway link' }
                ].map((hub, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-body)', border: '1px solid var(--border-dark)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>
                      {hub.city} • {hub.type}
                    </span>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-heading)', margin: '0.3rem 0' }}>{hub.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>{hub.description}</p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-main)', background: 'var(--primary-light)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)' }}>
                      💡 Facilities: {hub.facilities}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
    );
  }

  export default BusTransport;
