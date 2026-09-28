import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import StarRating from '../components/StarRating';
import HotelCard from '../components/HotelCard';
import RestaurantCard from '../components/RestaurantCard';
import L from 'leaflet';
import { getPlaceImageFallback } from '../utils/imageFallbacks';

export function PlaceDetails() {
  const { id } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { showToast } = useAuth();
  
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const place = TN_DATA.places.find((p) => p.id === id) || TN_DATA.places[0];
  const favActive = isFavorite(place.id);

  const [reviews, setReviews] = useState(() => {
    const existing = TN_DATA.initialReviews ? TN_DATA.initialReviews.filter(r => r.placeId === place.id) : [];
    return existing;
  });

  const [newRating, setNewRating] = useState('5');
  const [newComment, setNewComment] = useState('');

  // Leaflet Map Initialization
  useEffect(() => {
    if (mapRef.current && place.lat && place.lng) {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      const map = L.map(mapRef.current).setView([place.lat, place.lng], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(`<b>${place.name}</b><br>${place.district}`)
        .openPopup();

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [place]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const reviewObj = {
      id: Date.now(),
      placeId: place.id,
      userName: 'Current Visitor',
      rating: parseInt(newRating),
      date: new Date().toISOString().split('T')[0],
      comment: newComment.trim()
    };

    setReviews([reviewObj, ...reviews]);
    setNewComment('');
    showToast('Thank you! Your review has been submitted.', 'success');
  };

  return (
    <main className="main-content">
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>
        
        {/* Place Hero Banner */}
        <div className="detail-hero">
          <img
            src={place.image}
            alt={place.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = getPlaceImageFallback(place.category);
            }}
          />
          <div className="detail-hero-overlay">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span className="badge badge-secondary">{place.district}</span>
                  <span className="badge badge-primary">{place.categoryName || place.category}</span>
                </div>
                <h1 style={{ fontSize: '2.8rem' }}>{place.name}</h1>
                <div style={{ fontSize: '1.1rem', marginTop: '0.3rem' }}>
                  <StarRating rating={place.rating} /> ({place.ratingCount ? place.ratingCount.toLocaleString() : 500}+ ratings)
                </div>
              </div>

              <div>
                <button
                  className={`btn ${favActive ? 'btn-primary' : 'btn-outline'}`}
                  onClick={(e) => toggleFavorite(place.id, e)}
                >
                  {favActive ? '❤️ Saved in Favorites' : '♡ Save to Favorites'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Detail Grid Layout */}
        <div className="detail-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '2rem' }}>
          
          {/* Left Main Content Column */}
          <div>
            
            {/* Overview Box */}
            <div className="info-card-box">
              <h3>📖 About Destination</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {place.longDesc || place.shortDesc}
              </p>

              {place.attractions && place.attractions.length > 0 && (
                <>
                  <h4 style={{ marginBottom: '0.8rem', fontSize: '1.1rem', color: '#ffffff' }}>✨ Main Attractions</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.8rem' }}>
                    {place.attractions.map((attr, i) => (
                      <span key={i} className="badge badge-primary" style={{ fontSize: '0.85rem' }}>
                        📍 {attr}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {place.history && (
                <>
                  <h4 style={{ marginBottom: '0.6rem', fontSize: '1.1rem', color: '#ffffff' }}>🏛️ History & Cultural Importance</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {place.history}
                  </p>
                </>
              )}
            </div>

            {/* Transportation Box */}
            <div className="info-card-box">
              <h3>🚌 Transportation & Accessibility</h3>
              <div className="transport-grid">
                <div className="transport-card">
                  <div className="transport-icon">🚌</div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Bus Availability</h4>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.3rem' }}>
                    {place.transport?.bus?.station || 'Central Bus Stand'} ({place.transport?.bus?.distance || '2 km'})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {place.transport?.bus?.available || 'Frequent government & private buses'}
                  </div>
                  <Link to="/transport/bus" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--primary)' }}>
                    Bus Route Guide →
                  </Link>
                </div>

                <div className="transport-card">
                  <div className="transport-icon">🚆</div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Train Availability</h4>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.3rem' }}>
                    {place.transport?.train?.station || 'Railway Junction'} ({place.transport?.train?.distance || '3 km'})
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {place.transport?.train?.frequency || 'Direct train connectivity across South India'}
                  </div>
                  <Link to="/transport/train" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--secondary)' }}>
                    Train Schedule Guide →
                  </Link>
                </div>

                <div className="transport-card">
                  <div className="transport-icon">🚕</div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>Local Taxi & Autos</h4>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                    {place.transport?.taxi?.options || 'Ola, Uber, Auto Rickshaws, pre-paid station cabs available 24x7.'}
                  </div>
                  <Link to="/transport/taxi" style={{ display: 'inline-block', marginTop: '0.5rem', fontSize: '0.8rem', color: '#60a5fa' }}>
                    Taxi Rates Guide →
                  </Link>
                </div>
              </div>
            </div>

            {/* Interactive Leaflet Map */}
            <div className="info-card-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ marginBottom: 0, borderBottom: 'none', paddingBottom: 0 }}>🗺️ Location & Route Map</h3>
                {place.lat && place.lng && (
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Get Directions 📍
                  </a>
                )}
              </div>
              <div ref={mapRef} style={{ width: '100%', height: '320px', borderRadius: 'var(--radius-md)', zIndex: 1 }} />
            </div>

            {/* Emergency Services */}
            {place.emergency && (
              <div className="info-card-box">
                <h3>🚨 Nearby Emergency Services</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  {place.emergency.hospitals && place.emergency.hospitals.map((h, idx) => (
                    <div key={idx} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-sm)', padding: '0.8rem' }}>
                      <strong style={{ color: '#f87171', display: 'block' }}>🏥 {h.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dist: {h.distance} | 📞 {h.phone}</span>
                    </div>
                  ))}
                  {place.emergency.police && place.emergency.police.map((p, idx) => (
                    <div key={idx} style={{ background: 'rgba(13,148,136,0.1)', border: '1px solid rgba(13,148,136,0.3)', borderRadius: 'var(--radius-sm)', padding: '0.8rem' }}>
                      <strong style={{ color: '#2dd4bf', display: 'block' }}>🚓 {p.name}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dist: {p.distance} | 📞 {p.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Hotels */}
            {place.hotels && place.hotels.length > 0 && (
              <div className="info-card-box">
                <h3>🏨 Nearby Hotels & Accommodations</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {place.hotels.map((hotel, idx) => (
                    <HotelCard key={idx} hotel={hotel} />
                  ))}
                </div>
              </div>
            )}

            {/* Nearby Restaurants */}
            {place.restaurants && place.restaurants.length > 0 && (
              <div className="info-card-box">
                <h3>🍽️ Recommended Nearby Restaurants</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {place.restaurants.map((rest, idx) => (
                    <RestaurantCard key={idx} restaurant={rest} />
                  ))}
                </div>
              </div>
            )}

            {/* User Reviews */}
            <div className="info-card-box">
              <h3>⭐ Visitor Reviews & Feedback</h3>

              <form onSubmit={handleAddReview} style={{ background: 'rgba(0,0,0,0.3)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-dark)', marginBottom: '1.8rem' }}>
                <h4 style={{ marginBottom: '0.8rem', fontSize: '1rem' }}>Write Your Review</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="review-rating">Rating</label>
                    <select
                      id="review-rating"
                      className="form-select"
                      value={newRating}
                      onChange={(e) => setNewRating(e.target.value)}
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
                      <option value="4">⭐⭐⭐⭐ (4/5)</option>
                      <option value="3">⭐⭐⭐ (3/5)</option>
                      <option value="2">⭐⭐ (2/5)</option>
                      <option value="1">⭐ (1/5)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="review-comment">Your Review / Experience</label>
                    <input
                      type="text"
                      id="review-comment"
                      className="form-input"
                      placeholder="Share tips or your experience..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Submit Review</button>
              </form>

              <div className="reviews-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {reviews.length > 0 ? (
                  reviews.map((r) => (
                    <div key={r.id} style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-dark)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <strong style={{ color: '#fff' }}>👤 {r.userName}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{r.date}</span>
                      </div>
                      <div style={{ marginBottom: '0.4rem' }}>
                        <StarRating rating={r.rating} />
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{r.comment}</p>
                    </div>
                  ))
                ) : (
                  <p style={{ color: 'var(--text-muted)' }}>Be the first to leave a review for {place.name}!</p>
                )}
              </div>
            </div>

          </div>

          {/* Right Quick Info Sidebar */}
          <div>
            <div className="info-card-box" style={{ position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem' }}>⏱️ Key Timings & Entry</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Opening Time</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{place.openTime}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Closing Time</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{place.closeTime}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Weekly Holiday</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>{place.holiday || 'None (Open Daily)'}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Entry Fee</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fbbf24' }}>{place.entryFee}</div>
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Best Time to Visit</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2dd4bf' }}>{place.bestTime}</div>
                </div>
              </div>

              <div style={{ marginTop: '1.8rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-dark)', textAlign: 'center' }}>
                <Link to={`/trip-planner?destination=${encodeURIComponent(place.district)}`} className="btn btn-primary" style={{ width: '100%' }}>
                  Plan Trip to This Destination ✨
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default PlaceDetails;
