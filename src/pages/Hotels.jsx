import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import HotelCard from '../components/HotelCard';
import { apiPath } from '../utils/api';

export function Hotels() {
  const [searchParams] = useSearchParams();
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Hotel Owner Prompt & Submission State
  const [userChoice, setUserChoice] = useState(null); // null, 'yes', 'no'
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState('');
  const [submitErrorMsg, setSubmitErrorMsg] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    userConnection: 'Owner', // 'Owner' or 'Recommendation'
    hotelName: '',
    ownerName: '',
    mobile: '',
    email: '',
    address: '',
    cityDistrict: 'Madurai',
    googleMapsUrl: '',
    description: '',
    category: 'Budget Stay',
    priceRange: '₹1,500 - ₹3,000 / night',
    amenities: [],
    imageUrls: '',
    websiteUrl: ''
  });

  // Approved Submitted Hotels from Backend
  const [approvedHotels, setApprovedHotels] = useState([]);

  // Auto open add hotel form if ?action=add present in URL
  useEffect(() => {
    if (searchParams.get('action') === 'add') {
      setUserChoice('yes');
      setShowAddForm(true);
    }
  }, [searchParams]);

  // Fetch Approved Hotels from Backend on Mount
  useEffect(() => {
    fetchApprovedHotels();
  }, []);

  const fetchApprovedHotels = async () => {
    try {
      const res = await fetch(apiPath('api/hotels/approved'));
      if (res.ok) {
        const data = await res.json();
        if (data.hotels) {
          setApprovedHotels(data.hotels);
        }
      }
    } catch (err) {
      console.log('Backend not reachable for approved hotels list, displaying static list only.', err);
    }
  };

  const handleChoiceSelect = (choice) => {
    setUserChoice(choice);
    if (choice === 'yes') {
      setShowAddForm(true);
      setSubmitSuccessMsg('');
      setSubmitErrorMsg('');
    } else {
      setShowAddForm(false);
    }
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => {
      const exists = prev.amenities.includes(amenity);
      return {
        ...prev,
        amenities: exists 
          ? prev.amenities.filter(a => a !== amenity)
          : [...prev.amenities, amenity]
      };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccessMsg('');
    setSubmitErrorMsg('');

    // Required fields check
    if (!formData.hotelName || !formData.ownerName || !formData.mobile || !formData.email || !formData.address || !formData.cityDistrict || !formData.description) {
      setSubmitErrorMsg('Please complete all required fields.');
      return;
    }

    // Client-side duplicate check
    const isDuplicate = allCombinedHotels.some(h => 
      h.name && h.district && 
      h.name.toLowerCase().trim() === formData.hotelName.toLowerCase().trim() &&
      h.district.toLowerCase().trim() === formData.cityDistrict.toLowerCase().trim()
    );
    if (isDuplicate) {
      setSubmitErrorMsg('This business may already be listed. Please check the existing listings before submitting.');
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(apiPath('api/hotels/submit'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitSuccessMsg(data.message || 'Hotel submitted successfully for review!');
        setFormData({
          userConnection: 'Owner',
          hotelName: '',
          ownerName: '',
          mobile: '',
          email: '',
          address: '',
          cityDistrict: 'Madurai',
          googleMapsUrl: '',
          description: '',
          category: 'Budget Stay',
          priceRange: '₹1,500 - ₹3,000 / night',
          amenities: [],
          imageUrls: '',
          websiteUrl: ''
        });
      } else {
        setSubmitErrorMsg(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setSubmitErrorMsg('Backend connection failed. Please ensure the Node.js backend server is running.');
    } finally {
      setSubmitting(false);
    }
  };

  // 1. Static nearby hotels from tourismData
  const staticHotels = [];
  TN_DATA.places.forEach((place) => {
    if (place.hotels && place.hotels.length > 0) {
      place.hotels.forEach((h) => {
        staticHotels.push({
          ...h,
          district: place.district,
          placeName: place.name
        });
      });
    }
  });

  // 2. Formatted approved submitted hotels
  const formattedApprovedHotels = approvedHotels.map(h => ({
    id: h._id,
    name: h.hotelName,
    district: h.cityDistrict,
    placeName: h.category,
    price: h.priceRange,
    rating: 4.8,
    phone: h.mobile,
    image: (h.imageUrls && h.imageUrls.length > 0 && h.imageUrls[0]) 
      ? h.imageUrls[0] 
      : 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    dist: 'Verified Partner',
    isApprovedSubmission: true
  }));

  const allCombinedHotels = [...formattedApprovedHotels, ...staticHotels];

  const filteredHotels = allCombinedHotels.filter((h) => {
    const matchDistrict = !selectedDistrict || h.district.toLowerCase().includes(selectedDistrict.toLowerCase());
    const matchQuery = !searchQuery || 
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (h.placeName && h.placeName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchDistrict && matchQuery;
  });

  const availableAmenitiesList = [
    'WiFi', 'Swimming Pool', 'Free Parking', 'AC Rooms', 'In-house Restaurant', 
    'Spa & Wellness', '24/7 Room Service', 'Complimentary Breakfast', 'Pet Friendly'
  ];

  return (
    <main className="main-content">
      {/* Page Header Banner */}
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🏨</div>
            <div>
              <h1 className="page-header-title">Hotels & Resorts</h1>
              <p className="page-header-subtitle">Find heritage resorts, budget stays, luxury hotels, and hill station bungalows near prime tourist places.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          {/* OPTIONAL HOTEL OWNER BANNER SECTION */}
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
                  HOTEL OWNER / PARTNER PORTAL
                </span>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: '0.3rem 0 0.2rem', fontWeight: 700 }}>
                  Are you a hotel owner, or do you know a hotel that you would like to add to our website?
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', margin: 0 }}>
                  List your accommodation on Tamil Nadu Tourism directory. Submissions are reviewed and verified by our management team.
                </p>
              </div>

              {/* Action Buttons */}
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
                  ✨ Yes, I want to add a hotel
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
                  📍 No, just show me nearby hotels
                </button>
              </div>
            </div>

            {/* FORM CONTAINER (Only rendered when userChoice === 'yes') */}
            {showAddForm && (
              <div style={{ marginTop: '2rem', paddingTop: '1.8rem', borderTop: '1px solid var(--border-dark)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-heading)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📝 Submit New Hotel Details
                  </h4>
                  <button 
                    onClick={() => setShowAddForm(false)} 
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
                      What is your connection to this Hotel? *
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
                        🏢 I am the Owner
                      </label>
                      <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-heading)', fontWeight: formData.userConnection === 'Recommendation' ? 700 : 500 }}>
                        <input
                          type="radio"
                          name="userConnection"
                          value="Recommendation"
                          checked={formData.userConnection === 'Recommendation'}
                          onChange={() => setFormData({ ...formData, userConnection: 'Recommendation' })}
                        />
                        💡 I know / Recommend this Hotel
                      </label>
                    </div>
                  </div>

                  {/* Row 1: Hotel Name & Owner / Recommender Name */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Hotel / Resort Name *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. Royal Heritage Resort"
                        value={formData.hotelName}
                        onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
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
                        placeholder={formData.userConnection === 'Owner' ? 'e.g. Ramesh Kumar' : 'e.g. Priya (Visitor/Guest)'}
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
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="e.g. contact@royalheritage.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  {/* Row 3: Address & City/District */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Full Hotel Address *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. 12, West Tower Street, Near Temple"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        City / District Location *
                      </label>
                      <select
                        className="form-select"
                        value={formData.cityDistrict}
                        onChange={(e) => setFormData({ ...formData, cityDistrict: e.target.value })}
                        required
                      >
                        {TN_DATA.districts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Category, Price Range, Google Maps */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Hotel Category / Type *
                      </label>
                      <select
                        className="form-select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                      >
                        <option value="Heritage Resort">Heritage Resort</option>
                        <option value="Luxury Hotel">Luxury Hotel</option>
                        <option value="Budget Stay">Budget Stay</option>
                        <option value="Hill Station Bungalow">Hill Station Bungalow</option>
                        <option value="Beachfront Resort">Beachfront Resort</option>
                        <option value="Executive Inn">Executive Inn</option>
                        <option value="Homestay & Villa">Homestay & Villa</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Price Range *
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="e.g. ₹2,500 - ₹4,500 / night"
                        value={formData.priceRange}
                        onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Google Maps Location URL
                      </label>
                      <input
                        type="url"
                        className="form-input"
                        placeholder="https://maps.google.com/..."
                        value={formData.googleMapsUrl}
                        onChange={(e) => setFormData({ ...formData, googleMapsUrl: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 5: Amenities Checkboxes */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.5rem' }}>
                      Available Facilities & Amenities
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {availableAmenitiesList.map((amenity) => {
                        const isChecked = formData.amenities.includes(amenity);
                        return (
                          <button
                            type="button"
                            key={amenity}
                            onClick={() => handleAmenityToggle(amenity)}
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
                            {isChecked ? '✓ ' : '+ '}{amenity}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 6: Images & Website */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Hotel Image URL
                      </label>
                      <input
                        type="url"
                        className="form-input"
                        placeholder="https://images.unsplash.com/..."
                        value={formData.imageUrls}
                        onChange={(e) => setFormData({ ...formData, imageUrls: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                        Website or Booking Link (Optional)
                      </label>
                      <input
                        type="url"
                        className="form-input"
                        placeholder="https://myhotel.com"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Row 7: Description */}
                  <div className="form-group">
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-heading)', display: 'block', marginBottom: '0.3rem' }}>
                      Hotel Description *
                    </label>
                    <textarea
                      className="form-input"
                      rows="3"
                      placeholder="Describe your hotel facilities, nearby attractions, room ambiance..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary"
                      style={{ padding: '0.8rem 2rem', fontWeight: 700, fontSize: '0.95rem' }}
                    >
                      {submitting ? 'Submitting...' : '🏨 Submit Hotel for Approval →'}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowAddForm(false)}
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

          {/* SEARCH & DISTRICT FILTER BAR */}
          <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div className="form-group">
                <label>Search Hotel Name or Destination</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Heritage Madurai, Sinclair's..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>District Filter</label>
                <select
                  className="form-select"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  <option value="">All Districts</option>
                  {TN_DATA.districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* HOTELS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
            {filteredHotels.length > 0 ? (
              filteredHotels.map((hotel, idx) => (
                <HotelCard key={hotel.id || idx} hotel={hotel} />
              ))
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem' }} className="glass-card">
                <p style={{ color: 'var(--text-muted)' }}>No hotels found matching your search criteria.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Hotels;
