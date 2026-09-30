import React from 'react';
import StarRating from './StarRating';

export function HotelCard({ hotel }) {
  return (
    <div className="hotel-card" style={{
      display: 'flex', 
      gap: '1.2rem', 
      background: 'var(--bg-card)', 
      border: '1px solid var(--border-dark)', 
      borderRadius: 'var(--radius-md)', 
      padding: '1.2rem', 
      overflow: 'hidden',
      transition: 'var(--transition)'
    }}>
      {/* Thumbnail Image */}
      <div style={{ width: '140px', height: '110px', flexShrink: 0, borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
        <img 
          src={hotel.image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80'} 
          alt={hotel.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Hotel Info Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        
        {/* Destination / Location Tag */}
        {(hotel.placeName || hotel.district) && (
          <div style={{ marginBottom: '0.1rem' }}>
            <span className="badge badge-secondary" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              📍 {hotel.placeName ? `${hotel.placeName} (${hotel.district})` : hotel.district}
            </span>
          </div>
        )}

        {/* Title and Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-heading, #1e1b4b)', margin: 0 }}>{hotel.name}</h4>
          <span style={{ fontWeight: 800, color: '#fbbf24', fontSize: '1.05rem', whiteSpace: 'nowrap' }}>{hotel.price}</span>
        </div>

        {/* Rating and Distance */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '0.85rem' }}>
          <StarRating rating={hotel.rating} />
          {hotel.dist && <span style={{ color: 'var(--text-muted)' }}>📍 {hotel.dist} away</span>}
        </div>

        {/* Phone Button */}
        {hotel.phone && (
          <div style={{ marginTop: '0.4rem', fontSize: '0.85rem' }}>
            <a href={`tel:${hotel.phone}`} className="btn btn-outline btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.7rem' }}>
              📞 Call: {hotel.phone}
            </a>
          </div>
        )}

      </div>
    </div>
  );
}

export default HotelCard;
