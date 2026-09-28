import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { TN_DATA } from '../data/tourismData';
import { apiPath } from '../utils/api';

export function Profile() {
  const { user, token, logout } = useAuth();
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const [savedTrips, setSavedTrips] = useState([]);
  const [loadingTrips, setLoadingTrips] = useState(false);
  const [expandedTripId, setExpandedTripId] = useState(null);

  // Fetch logged-in user's trips from MongoDB backend API
  useEffect(() => {
    if (!user) return;

    setLoadingTrips(true);
    const userQuery = user.id || user._id ? `userId=${user.id || user._id}` : `email=${encodeURIComponent(user.email)}`;

    fetch(`${apiPath('api/trips/my-trips')}?${userQuery}`, {
      headers: {
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.trips) && data.trips.length > 0) {
          setSavedTrips(data.trips);
        } else {
          // Fallback to localStorage if no backend trips found
          const local = localStorage.getItem('tn_saved_trips');
          if (local) {
            setSavedTrips(JSON.parse(local));
          }
        }
      })
      .catch(err => {
        console.warn('Backend fetch trips failed, using local storage fallback:', err);
        const local = localStorage.getItem('tn_saved_trips');
        if (local) {
          setSavedTrips(JSON.parse(local));
        }
      })
      .finally(() => {
        setLoadingTrips(false);
      });
  }, [user, token]);

  if (!user) {
    return (
      <main className="main-content" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '3rem', maxWidth: '500px', margin: '0 auto' }}>
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>👤</span>
            <h2>User Profile</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Please log in to view your saved trip plans and profile details.</p>
            <Link to="/login" className="btn btn-primary">Log In Now</Link>
          </div>
        </div>
      </main>
    );
  }

  const favoritePlaces = TN_DATA.places.filter(p => favorites.includes(p.id));

  return (
    <main className="main-content">
      <section style={{ padding: '3rem 0 1.5rem', background: 'linear-gradient(to bottom, rgba(217, 119, 6, 0.15), transparent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', fontSize: '2.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
            {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
          </div>
          <h1 style={{ fontSize: '2.4rem' }}>{user.name}</h1>
          <p style={{ color: 'var(--text-muted)' }}>{user.email}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
            
            {/* Left Sidebar */}
            <div>
              <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>Account Summary</h3>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <div><strong>Member Type:</strong> Registered Traveler</div>
                  <div><strong>Saved Favorites:</strong> {favorites.length} Places</div>
                  <div><strong>Saved Trip Plans:</strong> {savedTrips.length} Plans</div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-dark)' }}>
                  <button onClick={() => { logout(); navigate('/'); }} className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                    Log Out of Account
                  </button>
                </div>
              </div>
            </div>

            {/* Right Main Column */}
            <div>
              
              {/* Saved Trip Plans Section */}
              <div className="glass-card" style={{ padding: '1.8rem', marginBottom: '2rem', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  🗺️ Saved Trip Plans ({savedTrips.length})
                </h3>

                {loadingTrips ? (
                  <p style={{ color: 'var(--text-muted)' }}>⏳ Loading your saved trips from database...</p>
                ) : savedTrips.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {savedTrips.map((trip) => {
                      const tripKey = trip._id || trip.id || Math.random().toString();
                      const tripIdShort = (trip._id || trip.id || 'PLAN').slice(-6).toUpperCase();
                      const isExpanded = expandedTripId === tripKey;

                      return (
                        <div key={tripKey} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <span style={{ fontFamily: 'monospace', fontWeight: 700, color: 'var(--primary)', fontSize: '0.85rem' }}>
                                #TRIP-{tripIdShort}
                              </span>
                              <h4 style={{ color: '#fff', fontSize: '1.1rem', margin: 0 }}>{trip.destination} ({trip.days} Days)</h4>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                              <span style={{ padding: '0.2rem 0.55rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 700, background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid #10b981' }}>
                                {trip.status || 'Generated'}
                              </span>
                              <span className="badge badge-primary">
                                {trip.totalEstimatedCost || (trip.costs?.total ? `₹${trip.costs.total.toLocaleString()}` : '₹7,500')}
                              </span>
                            </div>
                          </div>
                          
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                            Starting: <strong>{trip.source}</strong> | Travelers: {trip.travelers} | Date: {trip.startDate || 'Upcoming'}
                          </p>

                          {trip.itinerary && trip.itinerary.length > 0 && (
                            <div>
                              <button
                                onClick={() => setExpandedTripId(isExpanded ? null : tripKey)}
                                className="btn btn-outline btn-sm"
                                style={{ padding: '0.3rem 0.7rem', fontSize: '0.75rem' }}
                              >
                                {isExpanded ? 'Hide Itinerary ▲' : 'View Day-wise Itinerary ▼'}
                              </button>

                              {isExpanded && (
                                <div style={{ marginTop: '0.8rem', paddingTop: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                  {trip.itinerary.map((day, idx) => (
                                    <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', fontSize: '0.82rem' }}>
                                      <strong style={{ color: 'var(--primary)' }}>Day {day.dayNumber || idx + 1}: {day.title || day.district}</strong>
                                      <div style={{ display: 'flex', gap: '1rem', marginTop: '0.3rem', color: 'var(--text-muted)', flexWrap: 'wrap' }}>
                                        {day.schedule?.morning?.placeName && <span>🌅 {day.schedule.morning.placeName}</span>}
                                        {day.schedule?.afternoon?.placeName && <span>☀️ {day.schedule.afternoon.placeName}</span>}
                                        {day.schedule?.evening?.placeName && <span>🌇 {day.schedule.evening.placeName}</span>}
                                        {day.schedule?.night?.hotelName && <span>🌙 {day.schedule.night.hotelName}</span>}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No saved trip plans yet. Use our Smart Trip Planner to generate and save custom itineraries to the database!</p>
                )}
              </div>

              {/* Wishlist Favorites Section */}
              <div className="glass-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ❤️ My Saved Wishlist ({favoritePlaces.length})
                </h3>

                {favoritePlaces.length > 0 ? (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                    {favoritePlaces.map((p) => (
                      <Link key={p.id} to={`/places/${p.id}`} style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.04)', borderRadius: 'var(--radius-sm)', padding: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                        <img src={p.image} alt={p.name} style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                        <div>
                          <strong style={{ color: '#fff', fontSize: '0.9rem', display: 'block' }}>{p.name}</strong>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.district}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>No favorite destinations saved yet.</p>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Profile;
