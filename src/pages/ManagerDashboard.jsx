import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import { apiPath } from '../utils/api';

export function ManagerDashboard() {
  const [activePage, setActivePage] = useState('welcome'); // welcome, manager-login, manager-register, admin-login, manager-portal, admin-portal
  const [managerRole, setManagerRole] = useState('hotel'); // hotel or restaurant
  const [activeTab, setActiveTab] = useState('overview'); // overview, listings, bookings, reviews, submitted-hotels

  // Real backend submitted hotels state
  const [submittedHotels, setSubmittedHotels] = useState([]);
  const [loadingHotels, setLoadingHotels] = useState(false);
  const [actionStatusMsg, setActionStatusMsg] = useState('');

  // Real backend submitted travel services state
  const [submittedTravels, setSubmittedTravels] = useState([]);
  const [loadingTravels, setLoadingTravels] = useState(false);

  // Real backend saved trip plans state (Trip Planner Management)
  const [adminTrips, setAdminTrips] = useState([]);
  const [loadingTrips, setLoadingTrips] = useState(false);
  const [selectedTripModal, setSelectedTripModal] = useState(null);
  const [adminPortalTab, setAdminPortalTab] = useState('trips'); // 'trips', 'hotels', 'travels'
  const [tripSearchTerm, setTripSearchTerm] = useState('');
  const [tripStatusFilter, setTripStatusFilter] = useState('All');

  // Fetch Submitted Hotels from MongoDB Backend
  const fetchSubmittedHotels = async () => {
    setLoadingHotels(true);
    try {
      const res = await fetch(apiPath('api/hotels/all'));
      if (res.ok) {
        const data = await res.json();
        if (data.hotels) {
          setSubmittedHotels(data.hotels);
        }
      }
    } catch (err) {
      console.log('Error fetching submitted hotels:', err);
    } finally {
      setLoadingHotels(false);
    }
  };

  // Fetch Submitted Travel Services from MongoDB Backend
  const fetchSubmittedTravels = async () => {
    setLoadingTravels(true);
    try {
      const res = await fetch(apiPath('api/travel-services/all'));
      if (res.ok) {
        const data = await res.json();
        if (data.travelServices) {
          setSubmittedTravels(data.travelServices);
        }
      }
    } catch (err) {
      console.log('Error fetching submitted travel services:', err);
    } finally {
      setLoadingTravels(false);
    }
  };

  // Fetch All Saved Trip Plans from MongoDB Backend (Admin Module)
  const fetchAdminTrips = async () => {
    setLoadingTrips(true);
    try {
      const res = await fetch(apiPath('api/admin/trips'));
      if (res.ok) {
        const data = await res.json();
        if (data.trips) {
          setAdminTrips(data.trips);
        }
      }
    } catch (err) {
      console.log('Error fetching admin trips from MongoDB:', err);
    } finally {
      setLoadingTrips(false);
    }
  };

  // Update Trip Plan Status (Admin)
  const handleTripStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(apiPath(`api/admin/trips/${id}/status`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (res.ok) {
        setActionStatusMsg(`Trip #${id.slice(-6).toUpperCase()} marked as ${newStatus}!`);
        if (selectedTripModal && selectedTripModal._id === id) {
          setSelectedTripModal(prev => ({ ...prev, status: newStatus }));
        }
        fetchAdminTrips();
        setTimeout(() => setActionStatusMsg(''), 4000);
      } else {
        alert(data.message || 'Failed to update trip status');
      }
    } catch (err) {
      alert('Backend connection error: ' + err.message);
    }
  };

  // Delete Trip Plan Record (Admin)
  const handleTripDelete = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this trip plan record?')) return;
    try {
      const res = await fetch(apiPath(`api/admin/trips/${id}`), {
        method: 'DELETE'
      });
      const data = await res.json();
      if (res.ok) {
        setActionStatusMsg('Trip plan deleted successfully');
        if (selectedTripModal && selectedTripModal._id === id) {
          setSelectedTripModal(null);
        }
        fetchAdminTrips();
        setTimeout(() => setActionStatusMsg(''), 4000);
      } else {
        alert(data.message || 'Delete failed');
      }
    } catch (err) {
      alert('Backend connection error: ' + err.message);
    }
  };

  useEffect(() => {
    fetchSubmittedHotels();
    fetchSubmittedTravels();
    fetchAdminTrips();
  }, [activePage, activeTab]);

  // Auto-refresh when in admin-portal
  useEffect(() => {
    let interval = null;
    if (activePage === 'admin-portal') {
      interval = setInterval(() => {
        fetchAdminTrips();
        fetchSubmittedHotels();
      }, 15000); // 15s auto-refresh
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activePage]);

  const handleTravelStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(apiPath(`api/travel-services/${id}/status`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await res.json();
      if (res.ok) {
        setActionStatusMsg(`Travel Service "${data.travelService?.companyName}" marked as ${newStatus}!`);
        fetchSubmittedTravels();
        setTimeout(() => setActionStatusMsg(''), 4000);
      } else {
        alert(data.message || 'Failed to update status');
      }
    } catch (err) {
      alert('Backend connection error: ' + err.message);
    }
  };

  const handleTravelDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this travel service listing?')) return;
    try {
      const res = await fetch(apiPath(`api/travel-services/${id}`), {
        method: 'DELETE'
      });
      const data = await res.json();
      if (res.ok) {
        setActionStatusMsg('Travel service deleted successfully');
        fetchSubmittedTravels();
        setTimeout(() => setActionStatusMsg(''), 4000);
      } else {
        alert(data.message || 'Delete failed');
      }
    } catch (err) {
      alert('Backend connection error: ' + err.message);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(apiPath(`api/hotels/${id}/status`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await res.json();
      if (res.ok) {
        setActionStatusMsg(`Hotel "${data.hotel?.hotelName}" marked as ${newStatus}!`);
        fetchSubmittedHotels();
        setTimeout(() => setActionStatusMsg(''), 4000);
      } else {
        alert(data.message || 'Failed to update hotel status');
      }
    } catch (err) {
      alert('Backend connection error: ' + err.message);
    }
  };

  // Demo state for listings
  const [hotelListings, setHotelListings] = useState([
    { id: 1, name: 'Heritage Madurai Resort', district: 'Madurai', price: '₹4,500/night', rating: 4.8, status: 'Approved', type: 'Luxury Heritage', bookingsCount: 34, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Hotel Supreme Deluxe', district: 'Madurai', price: '₹1,800/night', rating: 4.3, status: 'Approved', type: 'City Executive', bookingsCount: 18, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Nilgiri Mist Residency', district: 'The Nilgiris', price: '₹3,200/night', rating: 4.6, status: 'Pending Review', type: 'Hill View Suite', bookingsCount: 7, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=400&q=80' }
  ]);

  const [restaurantListings, setRestaurantListings] = useState([
    { id: 1, name: 'Murugan Idli Shop', district: 'Madurai', type: 'South Indian Veg', price: '₹150 for two', rating: 4.7, status: 'Approved', ordersCount: 120, image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=400&q=80' },
    { id: 2, name: 'Amma Mess Chettinad', district: 'Madurai', type: 'Traditional Non-Veg', price: '₹400 for two', rating: 4.6, status: 'Approved', ordersCount: 95, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80' }
  ]);

  const [newProperty, setNewProperty] = useState({ name: '', district: 'Madurai', price: '', type: '', desc: '' });

  const handleManagerLogin = (e) => {
    e.preventDefault();
    setActivePage('manager-portal');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setActivePage('admin-portal');
  };

  const handleAddPropertySubmit = (e) => {
    e.preventDefault();
    if (!newProperty.name) return;

    const newItem = {
      id: Date.now(),
      name: newProperty.name,
      district: newProperty.district,
      price: newProperty.price || '₹2,500/night',
      rating: 5.0,
      status: 'Pending Review',
      type: newProperty.type || 'Standard',
      bookingsCount: 0,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'
    };

    if (managerRole === 'hotel') {
      setHotelListings([...hotelListings, newItem]);
    } else {
      setRestaurantListings([...restaurantListings, newItem]);
    }

    setNewProperty({ name: '', district: 'Madurai', price: '', type: '', desc: '' });
    setActiveTab('overview');
    alert('✅ Property listing submitted successfully for approval!');
  };

  return (
    <main className="main-content" style={{ minHeight: '90vh', background: 'var(--bg-body)', color: 'var(--text-main)' }}>

      {/* Header Banner */}
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-primary" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
            OFFICIAL PARTNER NETWORK
          </span>
          <h1>TN Tourism Manager Portal</h1>
          <p>Manage your hotel accommodations, dining places, guest bookings, and enterprise analytics.</p>
        </div>
      </div>

      {/* 1. WELCOME ROLE SELECTOR PAGE */}
      {activePage === 'welcome' && (
        <div className="container" style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '520px', width: '100%', padding: '2.5rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
            <img src="/images/logo.jpg" alt="TN Tourism Logo" style={{ width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.2rem', border: '3px solid var(--primary)' }} />
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
              Welcome Partner! 👋
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '2rem' }}>
              Select your authorization portal to manage your business properties on TN Tourism.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button
                onClick={() => setActivePage('manager-login')}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.98rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
              >
                👔 Hotel & Restaurant Manager Sign In
              </button>

              <button
                onClick={() => setActivePage('manager-register')}
                className="btn btn-outline"
                style={{ width: '100%', padding: '0.9rem', fontSize: '0.98rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
              >
                ➕ Register New Business Property
              </button>

              <button
                onClick={() => setActivePage('admin-login')}
                style={{ width: '100%', padding: '0.9rem', background: 'rgba(124, 58, 237, 0.15)', color: '#c084fc', border: '1px solid rgba(124, 58, 237, 0.4)', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600, fontSize: '0.98rem' }}
              >
                🛡️ Super Admin Control Center
              </button>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-dark)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <strong>Demo Portal Access:</strong> Manager: <em>manager@tourism.com</em> / <em>manager123</em>
            </div>
          </div>
        </div>
      )}

      {/* 2. MANAGER LOGIN PAGE */}
      {activePage === 'manager-login' && (
        <div className="container" style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '460px', width: '100%', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>Manager Sign In</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>Enter credentials to access your management dashboard.</p>

            <form onSubmit={handleManagerLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>SELECT PROPERTY TYPE</label>
                <select
                  value={managerRole}
                  onChange={(e) => setManagerRole(e.target.value)}
                  className="form-input"
                  style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }}
                >
                  <option value="hotel">🏨 Hotel & Accommodation Partner</option>
                  <option value="restaurant">🍽️ Dining & Restaurant Partner</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>EMAIL ADDRESS</label>
                <input type="email" defaultValue="manager@tourism.com" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }} required />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.4rem' }}>PASSWORD</label>
                <input type="password" defaultValue="manager123" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }} required />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setActivePage('welcome')} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Enter Portal →</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. MANAGER REGISTER PAGE */}
      {activePage === 'manager-register' && (
        <div className="container" style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '540px', width: '100%', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>Register New Property</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>Apply to list your hotel or restaurant on TN Tourism Portal.</p>

            <form onSubmit={handleManagerLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>BUSINESS NAME</label>
                  <input type="text" placeholder="e.g. Royal Heritage Hotel" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }} required />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>PROPERTY CATEGORY</label>
                  <select value={managerRole} onChange={(e) => setManagerRole(e.target.value)} className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                    <option value="hotel">Hotel / Resort</option>
                    <option value="restaurant">Restaurant / Eatery</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>DISTRICT</label>
                  <select className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }}>
                    {TN_DATA.districts.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>PHONE NUMBER</label>
                  <input type="tel" placeholder="+91 98765 43210" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }} required />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>BUSINESS EMAIL</label>
                <input type="email" placeholder="contact@property.com" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.65rem', borderRadius: 'var(--radius-md)' }} required />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setActivePage('welcome')} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                <button type="submit" className="btn btn-primary" style={{ flex: 2 }}>Submit Registration →</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. SUPER ADMIN LOGIN PAGE */}
      {activePage === 'admin-login' && (
        <div className="container" style={{ padding: '3rem 1rem', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-card" style={{ maxWidth: '460px', width: '100%', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(124, 58, 237, 0.4)' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🛡️</span>
              <h2 style={{ fontSize: '1.5rem', color: '#c084fc', marginTop: '0.5rem' }}>Super Admin Authorization</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>State Tourism Board Oversight Portal</p>
            </div>

            <form onSubmit={handleAdminLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>ADMIN ID</label>
                <input type="email" defaultValue="admin@tourism.com" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }} required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>SECURITY PIN</label>
                <input type="password" defaultValue="admin123" className="form-input" style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }} required />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setActivePage('welcome')} className="btn btn-outline" style={{ flex: 1 }}>Back</button>
                <button type="submit" style={{ flex: 2, background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', padding: '0.7rem', fontWeight: 600, cursor: 'pointer' }}>Authorize Portal →</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. HOTEL / RESTAURANT MANAGER DASHBOARD PORTAL */}
      {activePage === 'manager-portal' && (
        <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
          {/* Top Control Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-dark)', marginBottom: '2rem' }}>
            <div>
              <span className="badge badge-primary" style={{ fontSize: '0.72rem' }}>LIVE PROPERTY DASHBOARD</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-heading)', marginTop: '0.2rem' }}>
                {managerRole === 'hotel' ? '🏨 Hotel Property Management Center' : '🍽️ Dining & Restaurant Management Center'}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>LoggedIn: <strong>manager@tourism.com</strong></span>
              <button onClick={() => setActivePage('welcome')} className="btn btn-outline btn-sm">
                Logout 🚪
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.6rem', borderBottom: '1px solid var(--border-dark)', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
            {[
              { id: 'overview', label: '📊 Dashboard Overview' },
              { id: 'submitted-hotels', label: '🏨 Submitted Hotels Approvals' },
              { id: 'submitted-travels', label: '🚐 Travel Service Approvals' },
              { id: 'listings', label: '➕ Add Listing' },
              { id: 'bookings', label: '📅 Guest Bookings' },
              { id: 'reviews', label: '⭐ Customer Reviews' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                style={{
                  padding: '0.7rem 1.2rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  borderRadius: 'var(--radius-md) var(--radius-md) 0 0',
                  background: activeTab === t.id ? 'var(--primary)' : 'transparent',
                  color: activeTab === t.id ? '#ffffff' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Stat KPI Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
                <div className="glass-card" style={{ padding: '1.4rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Active Properties</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-heading)', marginTop: '0.3rem' }}>
                    {(managerRole === 'hotel' ? hotelListings : restaurantListings).length} Listed
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.4rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Monthly Reservations</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.3rem' }}>
                    48 Bookings
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.4rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Guest Rating Score</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', marginTop: '0.3rem' }}>
                    4.7 / 5.0 ⭐
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '1.4rem', borderRadius: 'var(--radius-md)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Est. Revenue</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', marginTop: '0.3rem' }}>
                    ₹1,84,000
                  </div>
                </div>
              </div>

              {/* Property Directory */}
              <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>Managed Properties Directory</h3>
                  <button onClick={() => setActiveTab('listings')} className="btn btn-primary btn-sm">
                    + Add New Property
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {(managerRole === 'hotel' ? hotelListings : restaurantListings).map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        padding: '1.2rem',
                        background: 'rgba(0,0,0,0.2)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-dark)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
                        <div>
                          <h4 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', margin: 0 }}>{item.name}</h4>
                          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>📍 {item.district} District • {item.type}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ display: 'block', fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>{item.price}</span>
                          <span style={{ fontSize: '0.78rem', color: '#10b981' }}>⭐ {item.rating} Rating</span>
                        </div>

                        <span
                          style={{
                            padding: '0.35rem 0.8rem',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            background: item.status === 'Approved' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)',
                            color: item.status === 'Approved' ? '#10b981' : '#f59e0b',
                            border: item.status === 'Approved' ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(245, 158, 11, 0.3)'
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Add Listing Tab */}
          {activeTab === 'listings' && (
            <div className="glass-card" style={{ maxWidth: '650px', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>List a New Property</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem' }}>Add your property details for Super Admin review and publication on TN Tourism.</p>

              <form onSubmit={handleAddPropertySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>PROPERTY NAME</label>
                  <input
                    type="text"
                    placeholder="e.g. Spice Route Heritage Resort"
                    value={newProperty.name}
                    onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
                    className="form-input"
                    style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>DISTRICT LOCATION</label>
                    <select
                      value={newProperty.district}
                      onChange={(e) => setNewProperty({ ...newProperty, district: e.target.value })}
                      className="form-input"
                      style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }}
                    >
                      {TN_DATA.districts.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>PRICING INFO</label>
                    <input
                      type="text"
                      placeholder="e.g. ₹2,500/night or ₹400 for two"
                      value={newProperty.price}
                      onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
                      className="form-input"
                      style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.3rem' }}>PROPERTY TYPE / DESCRIPTION</label>
                  <input
                    type="text"
                    placeholder="e.g. Traditional Chettinad Dining / Hill View Suite"
                    value={newProperty.type}
                    onChange={(e) => setNewProperty({ ...newProperty, type: e.target.value })}
                    className="form-input"
                    style={{ width: '100%', background: 'var(--input-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-dark)', padding: '0.7rem', borderRadius: 'var(--radius-md)' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '0.8rem', fontWeight: 600, marginTop: '0.5rem' }}>
                  Submit Property Listing →
                </button>
              </form>
            </div>
          )}

          {/* SUBMITTED HOTELS APPROVAL TAB */}
          {activeTab === 'submitted-hotels' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                    🏨 Public Submitted Hotels Review & Approval
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '0.2rem 0 0' }}>
                    Review user/owner submitted hotels. Approved hotels will instantly appear in the public Hotels directory.
                  </p>
                </div>
                <button onClick={fetchSubmittedHotels} className="btn btn-outline btn-sm">
                  🔄 Refresh List
                </button>
              </div>

              {actionStatusMsg && (
                <div style={{ padding: '0.9rem 1.2rem', background: 'rgba(124, 58, 237, 0.15)', border: '1px solid var(--primary)', color: '#c084fc', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                  ✨ {actionStatusMsg}
                </div>
              )}

              {loadingHotels ? (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-muted)' }}>Loading submitted hotels from backend database...</p>
                </div>
              ) : submittedHotels.length === 0 ? (
                <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.8rem' }}>🏨</span>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>No Hotel Submissions Found</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                    No public hotel submissions have been received yet. Go to the public <strong>Hotels Page</strong> to test submitting a hotel.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {submittedHotels.map((h) => {
                    const statusColor = h.status === 'Approved' ? '#10b981' : h.status === 'Rejected' ? '#ef4444' : '#f59e0b';
                    const statusBg = h.status === 'Approved' ? 'rgba(16, 185, 129, 0.15)' : h.status === 'Rejected' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.15)';
                    const statusBorder = h.status === 'Approved' ? 'rgba(16, 185, 129, 0.3)' : h.status === 'Rejected' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)';

                    return (
                      <div
                        key={h._id}
                        className="glass-card"
                        style={{
                          padding: '1.5rem',
                          borderRadius: 'var(--radius-lg)',
                          border: `1px solid ${statusBorder}`,
                          background: 'var(--bg-card)'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                              <span className="badge badge-primary">{h.category || 'Hotel'}</span>
                              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, background: statusBg, color: statusColor, border: `1px solid ${statusBorder}` }}>
                                Status: {h.status}
                              </span>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                              🏨 {h.hotelName}
                            </h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
                              📍 {h.address}, <strong>{h.cityDistrict}</strong>
                            </p>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fbbf24' }}>
                              {h.priceRange}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                              Submitted: {new Date(h.createdAt || h.submittedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {/* Owner Contact Specs */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.85rem' }}>
                          <div>👤 <strong>Owner/Manager:</strong> {h.ownerName}</div>
                          <div>📞 <strong>Mobile:</strong> <a href={`tel:${h.mobile}`} style={{ color: 'var(--primary)' }}>{h.mobile}</a></div>
                          <div>✉️ <strong>Email:</strong> <a href={`mailto:${h.email}`} style={{ color: 'var(--primary)' }}>{h.email}</a></div>
                          {h.googleMapsUrl && (
                            <div>📍 <strong>Map Link:</strong> <a href={h.googleMapsUrl} target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>View Location ↗</a></div>
                          )}
                        </div>

                        {/* Description & Amenities */}
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {h.description}
                        </p>

                        {h.amenities && h.amenities.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                            {h.amenities.map((a, i) => (
                              <span key={i} style={{ background: 'rgba(124, 58, 237, 0.15)', color: '#c084fc', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                                ✓ {a}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Manager Approval Control Buttons */}
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)' }}>
                          {h.status !== 'Approved' && (
                            <button
                              onClick={() => handleStatusUpdate(h._id, 'Approved')}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '0.5rem 1.2rem', background: '#10b981', borderColor: '#10b981', color: '#ffffff', fontWeight: 700 }}
                            >
                              ✅ Approve Hotel
                            </button>
                          )}

                          {h.status !== 'Rejected' && (
                            <button
                              onClick={() => handleStatusUpdate(h._id, 'Rejected')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.5rem 1.2rem', borderColor: '#ef4444', color: '#ef4444', fontWeight: 700 }}
                            >
                              ❌ Reject Hotel
                            </button>
                          )}

                          {h.status !== 'Pending Approval' && (
                            <button
                              onClick={() => handleStatusUpdate(h._id, 'Pending Approval')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}
                            >
                              ⏳ Reset to Pending
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* SUBMITTED TRAVEL SERVICES APPROVAL TAB */}
          {activeTab === 'submitted-travels' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                    🚐 Travel Services Review & Approval
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '0.2rem 0 0' }}>
                    Review owner/public submitted bus, van, and taxi services across all 38 districts. Approved listings instantly display publicly on the Travels page.
                  </p>
                </div>
                <button onClick={fetchSubmittedTravels} className="btn btn-outline btn-sm">
                  🔄 Refresh List
                </button>
              </div>

              {actionStatusMsg && (
                <div style={{ padding: '0.9rem 1.2rem', background: 'rgba(124, 58, 237, 0.15)', border: '1px solid var(--primary)', color: '#c084fc', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
                  ✨ {actionStatusMsg}
                </div>
              )}

              {loadingTravels ? (
                <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <p style={{ color: 'var(--text-muted)' }}>Loading submitted travel services from database...</p>
                </div>
              ) : submittedTravels.length === 0 ? (
                <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
                  <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.8rem' }}>🚐</span>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>No Travel Service Submissions Found</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                    No travel service submissions received yet. Test submitting a service from the public <strong>Travels & Transport Page</strong>.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {submittedTravels.map((ts) => {
                    const statusColor = ts.status === 'Approved' ? '#10b981' : ts.status === 'Rejected' ? '#ef4444' : '#f59e0b';
                    const statusBg = ts.status === 'Approved' ? 'rgba(16, 185, 129, 0.15)' : ts.status === 'Rejected' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.15)';
                    const statusBorder = ts.status === 'Approved' ? 'rgba(16, 185, 129, 0.3)' : ts.status === 'Rejected' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)';

                    return (
                      <div
                        key={ts._id}
                        className="glass-card"
                        style={{
                          padding: '1.5rem',
                          borderRadius: 'var(--radius-lg)',
                          border: `1px solid ${statusBorder}`,
                          background: 'var(--bg-card)'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
                              <span className="badge badge-primary">{ts.transportType || 'Taxi'} Service</span>
                              <span style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, background: statusBg, color: statusColor, border: `1px solid ${statusBorder}` }}>
                                Status: {ts.status}
                              </span>
                            </div>
                            <h4 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                              🚍 {ts.companyName}
                            </h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.2rem 0 0' }}>
                              📍 Address: {ts.address}, <strong>{ts.district} District</strong>
                            </p>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#10b981' }}>
                              {ts.priceRange || 'Price on Call'}
                            </div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                              Submitted: {new Date(ts.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>

                        {/* Owner Contact Specs */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', marginBottom: '1rem', fontSize: '0.85rem' }}>
                          <div>👤 <strong>Owner/Contact:</strong> {ts.ownerName}</div>
                          <div>📞 <strong>Mobile:</strong> <a href={`tel:${ts.mobile}`} style={{ color: 'var(--primary)' }}>{ts.mobile}</a></div>
                          {ts.email && <div>✉️ <strong>Email:</strong> <a href={`mailto:${ts.email}`} style={{ color: 'var(--primary)' }}>{ts.email}</a></div>}
                          {ts.location && (
                            <div>📍 <strong>Maps:</strong> <a href={ts.location} target="_blank" rel="noreferrer" style={{ color: '#60a5fa' }}>Location Link ↗</a></div>
                          )}
                        </div>

                        {/* Description & Offered Services */}
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.5', marginBottom: '1rem' }}>
                          {ts.description}
                        </p>

                        {ts.services && ts.services.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                            {ts.services.map((s, i) => (
                              <span key={i} style={{ background: 'rgba(124, 58, 237, 0.15)', color: '#c084fc', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                                ✓ {s}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Manager Approval Control Buttons */}
                        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)' }}>
                          {ts.status !== 'Approved' && (
                            <button
                              onClick={() => handleTravelStatusUpdate(ts._id, 'Approved')}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '0.5rem 1.2rem', background: '#10b981', borderColor: '#10b981', color: '#ffffff', fontWeight: 700 }}
                            >
                              ✅ Approve Service
                            </button>
                          )}

                          {ts.status !== 'Rejected' && (
                            <button
                              onClick={() => handleTravelStatusUpdate(ts._id, 'Rejected')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.5rem 1.2rem', borderColor: '#ef4444', color: '#ef4444', fontWeight: 700 }}
                            >
                              ❌ Reject Service
                            </button>
                          )}

                          {ts.status !== 'Pending' && (
                            <button
                              onClick={() => handleTravelStatusUpdate(ts._id, 'Pending')}
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}
                            >
                              ⏳ Reset to Pending
                            </button>
                          )}

                          <button
                            onClick={() => handleTravelDelete(ts._id)}
                            className="btn btn-outline btn-sm"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', color: '#ef4444', marginLeft: 'auto' }}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Bookings & Reviews Tabs */}
          {(activeTab === 'bookings' || activeTab === 'reviews') && (
            <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', borderRadius: 'var(--radius-lg)' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.8rem' }}>📌</span>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>Live {activeTab.toUpperCase()} Data Stream</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                18 active tourist reservations and guest reviews synced for this month.
              </p>
            </div>
          )}
        </div>
      )}

      {/* 6. SUPER ADMIN DASHBOARD */}
      {activePage === 'admin-portal' && (
        <div className="container" style={{ padding: '2rem 1.5rem 4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(124, 58, 237, 0.4)', marginBottom: '2rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 700, letterSpacing: '1px' }}>STATE GOVERNANCE PORTAL</span>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginTop: '0.2rem' }}>🛡️ TN Tourism State Operations Control</h2>
            </div>
            <button onClick={() => setActivePage('welcome')} className="btn btn-outline btn-sm">
              Logout Admin
            </button>
          </div>

          {actionStatusMsg && (
            <div style={{ padding: '0.85rem 1.2rem', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontWeight: 600 }}>
              ✅ {actionStatusMsg}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
            <div className="glass-card" style={{ padding: '1.3rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Registered Places</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '0.2rem' }}>{TN_DATA.places.length} Destinations</div>
            </div>

            <div className="glass-card" style={{ padding: '1.3rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>User Trip Plans (DB)</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.2rem' }}>{adminTrips.length} Saved Plans</div>
            </div>

            <div className="glass-card" style={{ padding: '1.3rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hotel Submissions</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#60a5fa', marginTop: '0.2rem' }}>{submittedHotels.length} Total</div>
            </div>

            <div className="glass-card" style={{ padding: '1.3rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Approved Stays</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>{submittedHotels.filter(h => h.status === 'Approved').length} Approved</div>
            </div>
          </div>

          {/* ADMIN PORTAL NAVIGATION TABS */}
          <div style={{ display: 'flex', gap: '0.8rem', borderBottom: '1px solid var(--border-dark)', marginBottom: '1.8rem', paddingBottom: '0.6rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setAdminPortalTab('trips')}
              style={{
                background: adminPortalTab === 'trips' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: adminPortalTab === 'trips' ? '1px solid var(--primary)' : '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem 1.2rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: adminPortalTab === 'trips' ? '0 4px 12px rgba(217, 119, 6, 0.3)' : 'none'
              }}
            >
              <span>🗺️</span> Trip Planner Management ({adminTrips.length})
            </button>

            <button
              onClick={() => setAdminPortalTab('hotels')}
              style={{
                background: adminPortalTab === 'hotels' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: adminPortalTab === 'hotels' ? '1px solid var(--primary)' : '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem 1.2rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: adminPortalTab === 'hotels' ? '0 4px 12px rgba(217, 119, 6, 0.3)' : 'none'
              }}
            >
              <span>🏨</span> Hotel Submissions ({submittedHotels.length})
            </button>

            <button
              onClick={() => setAdminPortalTab('travels')}
              style={{
                background: adminPortalTab === 'travels' ? 'var(--primary)' : 'rgba(255,255,255,0.06)',
                color: '#fff',
                border: adminPortalTab === 'travels' ? '1px solid var(--primary)' : '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-md)',
                padding: '0.65rem 1.2rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: adminPortalTab === 'travels' ? '0 4px 12px rgba(217, 119, 6, 0.3)' : 'none'
              }}
            >
              <span>🚌</span> Travel Services ({submittedTravels.length})
            </button>
          </div>

          {/* TAB 1: TRIP PLANNER MANAGEMENT */}
          {adminPortalTab === 'trips' && (
            <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    🗺️ Trip Planner Management
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                    Real-time user itineraries permanently stored in MongoDB database.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={fetchAdminTrips}
                    disabled={loadingTrips}
                    className="btn btn-outline btn-sm"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}
                  >
                    <span style={{ display: 'inline-block', transform: loadingTrips ? 'rotate(180deg)' : 'none', transition: 'transform 0.4s' }}>🔄</span>
                    {loadingTrips ? 'Refreshing...' : 'Refresh Trips'}
                  </button>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.8rem', marginBottom: '1.4rem', background: 'rgba(0,0,0,0.2)', padding: '0.9rem', borderRadius: 'var(--radius-md)' }}>
                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>SEARCH TRIPS</label>
                  <input
                    type="text"
                    placeholder="Search by User, Email, District, or Trip ID..."
                    value={tripSearchTerm}
                    onChange={(e) => setTripSearchTerm(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', color: '#fff', fontSize: '0.85rem' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem', fontWeight: 600 }}>FILTER BY STATUS</label>
                  <select
                    value={tripStatusFilter}
                    onChange={(e) => setTripStatusFilter(e.target.value)}
                    style={{ width: '100%', padding: '0.55rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', color: '#fff', fontSize: '0.85rem' }}
                  >
                    <option value="All">All Trip Statuses ({adminTrips.length})</option>
                    <option value="Generated">Generated</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Trips Table */}
              {loadingTrips && adminTrips.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏳</div>
                  <p>Loading trip plans from database...</p>
                </div>
              ) : (
                (() => {
                  const filteredTrips = adminTrips.filter(trip => {
                    const matchesStatus = tripStatusFilter === 'All' || (trip.status || 'Generated') === tripStatusFilter;
                    const q = tripSearchTerm.toLowerCase();
                    const matchesSearch = !q ||
                      (trip.userName && trip.userName.toLowerCase().includes(q)) ||
                      (trip.userEmail && trip.userEmail.toLowerCase().includes(q)) ||
                      (trip.source && trip.source.toLowerCase().includes(q)) ||
                      (trip.destination && trip.destination.toLowerCase().includes(q)) ||
                      (trip._id && trip._id.toLowerCase().includes(q));
                    return matchesStatus && matchesSearch;
                  });

                  if (filteredTrips.length === 0) {
                    return (
                      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', background: 'rgba(0,0,0,0.15)', borderRadius: 'var(--radius-md)' }}>
                        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>🗺️</span>
                        <h4 style={{ color: '#fff', marginBottom: '0.3rem' }}>No Trip Plans Found</h4>
                        <p style={{ fontSize: '0.85rem' }}>No user-generated travel plans match the active filters.</p>
                      </div>
                    );
                  }

                  return (
                    <div style={{ overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                        <thead>
                          <tr style={{ borderBottom: '2px solid var(--border-dark)', color: 'var(--text-muted)' }}>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Trip ID</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>User Name</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>User Email</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Starting District</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Destination</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Travel Date</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Duration</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Travellers</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Created At</th>
                            <th style={{ padding: '0.75rem 0.6rem' }}>Status</th>
                            <th style={{ padding: '0.75rem 0.6rem', textAlign: 'center' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredTrips.map((trip) => {
                            const statusColor = 
                              trip.status === 'Confirmed' ? '#60a5fa' :
                              trip.status === 'Completed' ? '#10b981' :
                              trip.status === 'In Progress' ? '#c084fc' :
                              trip.status === 'Cancelled' ? '#ef4444' : '#f59e0b';

                            const statusBg = 
                              trip.status === 'Confirmed' ? 'rgba(96, 165, 250, 0.15)' :
                              trip.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' :
                              trip.status === 'In Progress' ? 'rgba(192, 132, 252, 0.15)' :
                              trip.status === 'Cancelled' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(245, 158, 11, 0.15)';

                            return (
                              <tr
                                key={trip._id}
                                style={{
                                  borderBottom: '1px solid var(--border-dark)',
                                  transition: 'background 0.2s',
                                  background: 'rgba(0,0,0,0.1)'
                                }}
                              >
                                <td style={{ padding: '0.85rem 0.6rem', fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)' }}>
                                  #{trip._id.slice(-6).toUpperCase()}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', fontWeight: 600, color: '#fff' }}>
                                  {trip.userName || 'Guest Traveler'}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', color: 'var(--text-muted)' }}>
                                  {trip.userEmail}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', color: '#fff' }}>
                                  {trip.source}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', color: 'var(--text-heading)', maxWidth: '180px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} title={trip.destination}>
                                  {trip.destination}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                                  {trip.startDate || 'Upcoming'}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', whiteSpace: 'nowrap' }}>
                                  {trip.days} Days
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', whiteSpace: 'nowrap' }}>
                                  {trip.travelers} Guests
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', fontSize: '0.8rem' }}>
                                  {trip.createdAt ? new Date(trip.createdAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A'}
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', whiteSpace: 'nowrap' }}>
                                  <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, color: statusColor, background: statusBg, border: `1px solid ${statusColor}` }}>
                                    {trip.status || 'Generated'}
                                  </span>
                                </td>
                                <td style={{ padding: '0.85rem 0.6rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
                                  <div style={{ display: 'inline-flex', gap: '0.4rem', alignItems: 'center' }}>
                                    <button
                                      onClick={() => setSelectedTripModal(trip)}
                                      className="btn btn-primary btn-sm"
                                      style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                                      title="Inspect Complete Generated Itinerary & Details"
                                    >
                                      <span>👁️</span> View Details
                                    </button>
                                    <button
                                      onClick={() => handleTripDelete(trip._id)}
                                      className="btn btn-outline btn-sm"
                                      style={{ padding: '0.35rem 0.55rem', fontSize: '0.78rem', color: '#ef4444', borderColor: '#ef4444' }}
                                      title="Delete Plan Record"
                                    >
                                      🗑️
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                })()
              )}

            </div>
          )}

          {/* TAB 2: HOTEL SUBMISSIONS OVERSIGHT */}
          {adminPortalTab === 'hotels' && (
            <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                    🏨 Admin Hotel Submissions Oversight
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                    Review, approve, or reject property listings submitted by hoteliers.
                  </p>
                </div>
                <button onClick={fetchSubmittedHotels} className="btn btn-outline btn-sm">
                  🔄 Refresh Hotels
                </button>
              </div>

              {submittedHotels.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>No submitted hotels pending review.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {submittedHotels.map((h) => (
                    <div key={h._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#fff' }}>{h.hotelName} ({h.cityDistrict})</h4>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Owner: {h.ownerName} ({h.mobile}) • {h.priceRange}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: h.status === 'Approved' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: h.status === 'Approved' ? '#10b981' : '#f59e0b' }}>
                          {h.status}
                        </span>
                        {h.status !== 'Approved' && (
                          <button onClick={() => handleStatusUpdate(h._id, 'Approved')} className="btn btn-primary btn-sm">Approve</button>
                        )}
                        {h.status !== 'Rejected' && (
                          <button onClick={() => handleStatusUpdate(h._id, 'Rejected')} className="btn btn-outline btn-sm" style={{ color: '#ef4444', borderColor: '#ef4444' }}>Reject</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TRAVEL SERVICES OVERSIGHT */}
          {adminPortalTab === 'travels' && (
            <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', margin: 0 }}>
                    🚌 Admin Travel Services Oversight
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>
                    Review and verify taxi, bus, and tour operators registered across districts.
                  </p>
                </div>
                <button onClick={fetchSubmittedTravels} className="btn btn-outline btn-sm">
                  🔄 Refresh Travel Services
                </button>
              </div>

              {submittedTravels.length === 0 ? (
                <p style={{ color: 'var(--text-muted)' }}>No travel services registered yet.</p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {submittedTravels.map((t) => (
                    <div key={t._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', flexWrap: 'wrap', gap: '1rem' }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#fff' }}>{t.companyName} ({t.cityDistrict})</h4>
                        <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Contact: {t.contactPerson} ({t.mobile}) • Service: {t.serviceType}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                        <span style={{ padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: t.status === 'Approved' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: t.status === 'Approved' ? '#10b981' : '#f59e0b' }}>
                          {t.status || 'Approved'}
                        </span>
                        {t.status !== 'Approved' && (
                          <button onClick={() => handleTravelStatusUpdate(t._id, 'Approved')} className="btn btn-primary btn-sm">Approve</button>
                        )}
                        <button onClick={() => handleTravelDelete(t._id)} className="btn btn-outline btn-sm" style={{ color: '#ef4444', borderColor: '#ef4444' }}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 7. COMPLETE TRIP DETAILS MODAL */}
          {selectedTripModal && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(8px)',
                zIndex: 99999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem'
              }}
              onClick={() => setSelectedTripModal(null)}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: 'var(--radius-lg)',
                  maxWidth: '960px',
                  width: '100%',
                  maxHeight: '92vh',
                  overflowY: 'auto',
                  padding: '2rem',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                  color: 'var(--text-main)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-dark)', paddingBottom: '1.2rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>
                        ADMIN DETAILED TRIP VIEW
                      </span>
                      <span style={{ background: 'rgba(217, 119, 6, 0.2)', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '0.15rem 0.6rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800 }}>
                        #TRIP-{selectedTripModal._id.slice(-6).toUpperCase()}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.7rem', color: '#fff', margin: '0.3rem 0 0', fontWeight: 800 }}>
                      {selectedTripModal.destination} ({selectedTripModal.days} Days Itinerary)
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                      Generated on {selectedTripModal.createdAt ? new Date(selectedTripModal.createdAt).toLocaleString('en-IN') : 'N/A'}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                    <button
                      onClick={() => window.print()}
                      className="btn btn-outline btn-sm"
                      style={{ padding: '0.45rem 0.8rem', fontSize: '0.8rem' }}
                    >
                      🖨️ Print
                    </button>
                    <button
                      onClick={() => setSelectedTripModal(null)}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: '#fff',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      title="Close Modal"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Section 1: User & Trip Submission Details Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
                  
                  {/* User Profile Info Card */}
                  <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
                    <h4 style={{ color: 'var(--primary)', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      👤 Traveler Profile Details
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                      <div><strong style={{ color: '#fff' }}>Name:</strong> {selectedTripModal.userName || 'N/A'}</div>
                      <div><strong style={{ color: '#fff' }}>Email:</strong> {selectedTripModal.userEmail}</div>
                      <div><strong style={{ color: '#fff' }}>User Database ID:</strong> <span style={{ fontFamily: 'monospace', color: 'var(--text-muted)' }}>{selectedTripModal.userId || 'Guest User'}</span></div>
                      <div><strong style={{ color: '#fff' }}>Created Timestamp:</strong> {selectedTripModal.createdAt ? new Date(selectedTripModal.createdAt).toLocaleString('en-IN') : 'N/A'}</div>
                    </div>
                  </div>

                  {/* Trip Parameters Card */}
                  <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
                    <h4 style={{ color: '#60a5fa', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      📋 Travel Parameters
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
                      <div><strong style={{ color: '#fff' }}>Starting District:</strong> {selectedTripModal.source}</div>
                      <div><strong style={{ color: '#fff' }}>Travel Date:</strong> {selectedTripModal.startDate || 'N/A'}</div>
                      <div><strong style={{ color: '#fff' }}>Duration:</strong> {selectedTripModal.days} Days</div>
                      <div><strong style={{ color: '#fff' }}>Travelers:</strong> {selectedTripModal.travelers} Guests</div>
                      <div><strong style={{ color: '#fff' }}>Trip Type:</strong> {selectedTripModal.travelType}</div>
                      <div><strong style={{ color: '#fff' }}>Stay Type:</strong> {selectedTripModal.accommodationPref}</div>
                      <div><strong style={{ color: '#fff' }}>Dining:</strong> {selectedTripModal.foodPref}</div>
                      <div><strong style={{ color: '#fff' }}>Est. Cost:</strong> <span style={{ color: '#10b981', fontWeight: 700 }}>{selectedTripModal.totalEstimatedCost}</span></div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Trip Status Administration */}
                <div style={{ background: 'rgba(124, 58, 237, 0.1)', border: '1px solid rgba(124, 58, 237, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem 1.2rem', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <strong style={{ color: '#fff', fontSize: '0.9rem', display: 'block' }}>Update Trip Status</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Status: <strong style={{ color: '#c084fc' }}>{selectedTripModal.status || 'Generated'}</strong></span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <select
                      value={selectedTripModal.status || 'Generated'}
                      onChange={(e) => handleTripStatusUpdate(selectedTripModal._id, e.target.value)}
                      style={{ padding: '0.45rem 0.8rem', background: 'var(--input-bg)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-sm)', color: '#fff', fontSize: '0.85rem' }}
                    >
                      <option value="Generated">Generated</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                {/* Section 3: Day-Wise Tourist Places & Recommended Hotels Overview */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
                  
                  {/* Tourist Places Chips */}
                  <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.6rem', fontWeight: 700 }}>
                      🛕 Tourist Places Included ({selectedTripModal.places ? selectedTripModal.places.length : 0})
                    </h4>
                    {selectedTripModal.places && selectedTripModal.places.length > 0 ? (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {selectedTripModal.places.map((place, idx) => (
                          <span key={idx} style={{ background: 'rgba(217, 119, 6, 0.15)', color: 'var(--primary)', border: '1px solid var(--primary)', borderRadius: '15px', padding: '0.2rem 0.6rem', fontSize: '0.78rem', fontWeight: 600 }}>
                            📍 {place}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Places are distributed across the day-wise itinerary below.</p>
                    )}
                  </div>

                  {/* Recommended Hotels */}
                  <div style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.6rem', fontWeight: 700 }}>
                      🏨 Recommended Hotels & Stays
                    </h4>
                    {selectedTripModal.hotels && selectedTripModal.hotels.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {selectedTripModal.hotels.map((hotel, idx) => (
                          <div key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-heading)', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.2rem' }}>
                            <span>Day {hotel.day || idx + 1}: {hotel.name || hotel}</span>
                            {hotel.rate && <strong style={{ color: 'var(--primary)' }}>{hotel.rate}</strong>}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Hotel recommendations included within night schedules.</p>
                    )}
                  </div>
                </div>

                {/* Section 4: Full Day-Wise Itinerary (Complete & Non-truncated) */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    📅 Complete Day-Wise Generated Itinerary ({selectedTripModal.itinerary ? selectedTripModal.itinerary.length : selectedTripModal.days} Days)
                  </h3>

                  {selectedTripModal.itinerary && selectedTripModal.itinerary.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {selectedTripModal.itinerary.map((dayItem, dIdx) => (
                        <div
                          key={dIdx}
                          style={{
                            background: 'rgba(0,0,0,0.3)',
                            border: '1px solid var(--border-dark)',
                            borderRadius: 'var(--radius-md)',
                            padding: '1.2rem'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
                            <h4 style={{ margin: 0, color: 'var(--primary)', fontSize: '1.05rem', fontWeight: 700 }}>
                              {dayItem.title || `Day ${dayItem.dayNumber || dIdx + 1} Tour`}
                            </h4>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                              District: <strong style={{ color: '#fff' }}>{dayItem.district || selectedTripModal.destination}</strong>
                            </span>
                          </div>

                          {/* 4 Time Slots: Morning, Afternoon, Evening, Night */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
                            
                            {/* Morning Slot */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <span style={{ fontSize: '0.72rem', color: '#f59e0b', fontWeight: 700, textTransform: 'uppercase' }}>
                                🌅 Morning (08:30 AM - 12:00 PM)
                              </span>
                              <h5 style={{ margin: '0.3rem 0', color: '#fff', fontSize: '0.9rem' }}>
                                {dayItem.schedule?.morning?.placeName || 'Morning Exploration'}
                              </h5>
                              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                {dayItem.schedule?.morning?.activity || 'Sightseeing & heritage exploration.'}
                              </p>
                              {dayItem.schedule?.morning?.entryFee && (
                                <span style={{ display: 'inline-block', marginTop: '0.3rem', fontSize: '0.72rem', color: '#10b981' }}>
                                  Fee: {dayItem.schedule.morning.entryFee}
                                </span>
                              )}
                            </div>

                            {/* Afternoon Slot */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <span style={{ fontSize: '0.72rem', color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase' }}>
                                ☀️ Afternoon (12:30 PM - 04:30 PM)
                              </span>
                              <h5 style={{ margin: '0.3rem 0', color: '#fff', fontSize: '0.9rem' }}>
                                {dayItem.schedule?.afternoon?.placeName || 'Afternoon Sightseeing'}
                              </h5>
                              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                {dayItem.schedule?.afternoon?.activity || 'Local lunch & visit.'}
                              </p>
                              {dayItem.schedule?.afternoon?.lunchSpot && (
                                <span style={{ display: 'inline-block', marginTop: '0.3rem', fontSize: '0.72rem', color: '#f59e0b' }}>
                                  Lunch: {dayItem.schedule.afternoon.lunchSpot}
                                </span>
                              )}
                            </div>

                            {/* Evening Slot */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <span style={{ fontSize: '0.72rem', color: '#c084fc', fontWeight: 700, textTransform: 'uppercase' }}>
                                🌇 Evening (05:00 PM - 07:30 PM)
                              </span>
                              <h5 style={{ margin: '0.3rem 0', color: '#fff', fontSize: '0.9rem' }}>
                                {dayItem.schedule?.evening?.placeName || 'Sunset & Leisure'}
                              </h5>
                              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                {dayItem.schedule?.evening?.activity || 'Evening market walk & local food stalls.'}
                              </p>
                            </div>

                            {/* Night Slot */}
                            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.05)' }}>
                              <span style={{ fontSize: '0.72rem', color: '#10b981', fontWeight: 700, textTransform: 'uppercase' }}>
                                🌙 Night & Lodging
                              </span>
                              <h5 style={{ margin: '0.3rem 0', color: '#fff', fontSize: '0.9rem' }}>
                                {dayItem.schedule?.night?.hotelName || 'Comfort Stay'}
                              </h5>
                              <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                {dayItem.schedule?.night?.dinner || 'Dinner & overnight stay.'}
                              </p>
                              {dayItem.schedule?.night?.hotelRate && (
                                <span style={{ display: 'inline-block', marginTop: '0.3rem', fontSize: '0.72rem', color: 'var(--primary)' }}>
                                  Rate: {dayItem.schedule.night.hotelRate}
                                </span>
                              )}
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '1.2rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)' }}>
                      <p>Custom {selectedTripModal.days}-day tour covering {selectedTripModal.destination} from starting district {selectedTripModal.source}. Travel mode: {selectedTripModal.transportMode || 'Cab / Taxi'}.</p>
                    </div>
                  )}
                </div>

                {/* Section 5: Estimated Cost Breakdown */}
                {selectedTripModal.costs && selectedTripModal.costs.total && (
                  <div style={{ background: 'rgba(0,0,0,0.25)', border: '1px solid var(--border-dark)', borderRadius: 'var(--radius-md)', padding: '1.2rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: '0.8rem', fontWeight: 700 }}>
                      💰 Estimated Expense Breakdown
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.8rem', textAlign: 'center' }}>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Transfers</span>
                        <strong style={{ color: '#fff', fontSize: '1rem' }}>₹{selectedTripModal.costs.transport?.toLocaleString()}</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Hotel Stay</span>
                        <strong style={{ color: '#fff', fontSize: '1rem' }}>₹{selectedTripModal.costs.hotel?.toLocaleString()}</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Food & Dining</span>
                        <strong style={{ color: '#fff', fontSize: '1rem' }}>₹{selectedTripModal.costs.food?.toLocaleString()}</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Entry Tickets</span>
                        <strong style={{ color: '#fff', fontSize: '1rem' }}>₹{selectedTripModal.costs.tickets?.toLocaleString()}</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Total Estimated</span>
                        <strong style={{ color: '#10b981', fontSize: '1.1rem' }}>₹{selectedTripModal.costs.total?.toLocaleString()}</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.02)', padding: '0.6rem', borderRadius: 'var(--radius-sm)' }}>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>Per Person</span>
                        <strong style={{ color: 'var(--primary)', fontSize: '1.1rem' }}>₹{selectedTripModal.costs.perPerson?.toLocaleString()}</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* Section 6: Travel Suggestions & Tips */}
                {selectedTripModal.suggestions && selectedTripModal.suggestions.length > 0 && (
                  <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: 'var(--radius-md)', padding: '1rem 1.2rem', marginBottom: '1.5rem' }}>
                    <strong style={{ color: '#f59e0b', fontSize: '0.9rem', display: 'block', marginBottom: '0.4rem' }}>
                      💡 Recommended Travel Suggestions & Advisory:
                    </strong>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-heading)', fontSize: '0.82rem' }}>
                      {selectedTripModal.suggestions.map((tip, idx) => (
                        <li key={idx} style={{ marginBottom: '0.2rem' }}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Modal Footer Actions */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', borderTop: '1px solid var(--border-dark)', paddingTop: '1.2rem' }}>
                  <button onClick={() => setSelectedTripModal(null)} className="btn btn-outline" style={{ padding: '0.6rem 1.4rem' }}>
                    Close Details
                  </button>
                  <button onClick={() => window.print()} className="btn btn-primary" style={{ padding: '0.6rem 1.4rem' }}>
                    🖨️ Print Complete Plan
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      )}

    </main>
  );
}

export default ManagerDashboard;
