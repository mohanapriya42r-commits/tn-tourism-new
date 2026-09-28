import React from 'react';
import StarRating from './StarRating';

// Smart food image matcher based on cuisine type
function getFoodImage(foodType = '', name = '') {
  const text = `${foodType} ${name}`.toLowerCase();
  if (text.includes('seafood') || text.includes('fish') || text.includes('crab') || text.includes('prawn')) {
    return 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('non-veg') || text.includes('biryani') || text.includes('chettinad') || text.includes('mutton') || text.includes('chicken')) {
    return 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('jigarthanda') || text.includes('sweet') || text.includes('dessert') || text.includes('halwa')) {
    return 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80';
  }
  if (text.includes('idli') || text.includes('dosa') || text.includes('tiffin')) {
    return 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80';
  }
  // Default traditional South Indian banana leaf feast
  return 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=600&q=80';
}

export function RestaurantCard({ restaurant }) {
  const isVeg = restaurant.foodType?.toLowerCase().includes('veg') && !restaurant.foodType?.toLowerCase().includes('non-veg');
  const foodImg = getFoodImage(restaurant.foodType, restaurant.name);
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurant.name} ${restaurant.district || ''} Tamil Nadu`)}`;

  return (
    <div
      className="restaurant-card-item"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dark)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 16px 32px rgba(124, 58, 237, 0.15)';
        e.currentTarget.style.borderColor = '#7c3aed';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = 'var(--border-dark)';
      }}
    >
      {/* Food Photo Banner */}
      <div style={{ position: 'relative', height: '175px', overflow: 'hidden', background: '#0f172a' }}>
        <img
          src={foodImg}
          alt={restaurant.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 50%, rgba(15, 23, 42, 0.8) 100%)' }} />

        {/* Veg / Non-Veg Diet Indicator Badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(6px)',
            borderRadius: '8px',
            padding: '4px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.76rem',
            fontWeight: 700,
            color: isVeg ? '#15803d' : '#b91c1c',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: isVeg ? '#16a34a' : '#dc2626',
            display: 'inline-block'
          }} />
          {isVeg ? 'Pure Veg' : 'Non-Veg / Mess'}
        </div>

        {/* Price Tag Pill */}
        {restaurant.price && (
          <div
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fef08a',
              padding: '4px 12px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
            }}
          >
            {restaurant.price}
          </div>
        )}

        {/* Location Badge Over Image */}
        {(restaurant.placeName || restaurant.district) && (
          <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
            <span
              style={{
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 600,
                textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              📍 {restaurant.placeName ? `${restaurant.placeName} • ${restaurant.district}` : restaurant.district}
            </span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
        <div>
          {/* Restaurant Title - High Contrast & Clearly Legible */}
          <h4
            style={{
              fontSize: '1.22rem',
              fontWeight: 800,
              color: 'var(--text-heading, #1e1b4b)',
              margin: '0 0 0.35rem 0',
              lineHeight: 1.3
            }}
          >
            {restaurant.name}
          </h4>

          {/* Cuisine Pill */}
          <div style={{ display: 'inline-block', background: 'rgba(124, 58, 237, 0.08)', color: '#7c3aed', padding: '0.2rem 0.65rem', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.8rem' }}>
            🍽️ {restaurant.foodType}
          </div>

          {/* Rating & Distance */}
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '0.6rem', fontSize: '0.86rem' }}>
            <StarRating rating={restaurant.rating} />
            <span style={{ fontWeight: 700, color: 'var(--text-heading)' }}>{restaurant.rating}</span>
            {restaurant.dist && (
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', background: 'var(--bg-body, #f8fafc)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--border-dark)' }}>
                🚗 {restaurant.dist} away
              </span>
            )}
          </div>

          {/* Address */}
          {restaurant.address && (
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
              🏠 {restaurant.address}, {restaurant.district}
            </p>
          )}
        </div>

        {/* Action Link Footer */}
        <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)', display: 'flex', gap: '0.6rem' }}>
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
            style={{
              flex: 1,
              padding: '0.45rem 0.8rem',
              fontSize: '0.82rem',
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              fontWeight: 600
            }}
          >
            🗺️ View on Map
          </a>
          <span
            style={{
              padding: '0.45rem 0.8rem',
              fontSize: '0.82rem',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.1)',
              color: '#059669',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            ● Open Now
          </span>
        </div>

      </div>
    </div>
  );
}

export default RestaurantCard;
