import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import StarRating from './StarRating';
import { getPlaceImageFallback } from '../utils/imageFallbacks';

export function PlaceCard({ place }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favActive = isFavorite(place.id);

  return (
    <div className="place-card">
      <div className="place-img-wrap">
        <img
          src={place.image}
          alt={place.name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = getPlaceImageFallback(place.category);
          }}
        />
        <button
          className={`place-fav-btn fav-btn-${place.id} ${favActive ? 'active' : ''}`}
          onClick={(e) => toggleFavorite(place.id, e)}
          title={favActive ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          {favActive ? '❤️' : '♡'}
        </button>
        <span className="place-district-tag">{place.district}</span>
      </div>

      <div className="place-card-body">
        <div className="place-category">{place.categoryName || place.category}</div>
        <h3 className="place-title">{place.name}</h3>

        <div className="place-rating">
          <StarRating rating={place.rating} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            ({place.ratingCount ? place.ratingCount.toLocaleString() : 100}+ reviews)
          </span>
        </div>

        <p className="place-desc">{place.shortDesc}</p>

        <div className="place-meta">
          <span>🕒 {place.openTime} - {place.closeTime}</span>
          <span>🎟️ {place.entryFee}</span>
        </div>

        <div style={{ marginTop: '1.2rem' }}>
          <Link to={`/places/${place.id}`} className="btn btn-outline btn-sm" style={{ width: '100%', textAlign: 'center' }}>
            View Details & Guide →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
