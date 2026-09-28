import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { TN_DATA } from '../data/tourismData';
import PlaceCard from '../components/PlaceCard';

export function Favorites() {
  const { favorites } = useFavorites();

  const favoritePlaces = TN_DATA.places.filter((p) => favorites.includes(p.id));

  return (
    <main className="main-content">
      <section style={{ padding: '3rem 0 1.5rem', background: 'linear-gradient(to bottom, rgba(239, 68, 68, 0.15), transparent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.6rem' }}>SAVED DESTINATIONS</span>
          <h1 style={{ fontSize: '2.6rem' }}>My Favorites & Wishlist</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.4rem auto 0' }}>
            Your saved travel destinations across Tamil Nadu for quick access and trip planning.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          {favoritePlaces.length > 0 ? (
            <div className="places-grid">
              {favoritePlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '1rem' }}>❤️</span>
              <h3>No Favorites Saved Yet</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Browse destinations and click the heart icon (♡) to add them to your wishlist.</p>
              <Link to="/places" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                Explore Tourist Places 🗺️
              </Link>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Favorites;
