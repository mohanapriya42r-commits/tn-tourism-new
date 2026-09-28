import React, { useState, useMemo } from 'react';
import { TN_DATA } from '../data/tourismData';
import RestaurantCard from '../components/RestaurantCard';

export function Restaurants() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('All');

  // Extract all restaurants across all destinations
  const allRestaurants = useMemo(() => {
    const list = [];
    TN_DATA.places.forEach((place) => {
      if (place.restaurants && place.restaurants.length > 0) {
        place.restaurants.forEach((r) => {
          list.push({
            ...r,
            district: place.district,
            placeName: place.name
          });
        });
      }
    });
    return list;
  }, []);

  // Filter restaurants
  const filteredRestaurants = useMemo(() => {
    return allRestaurants.filter((r) => {
      const matchDistrict = !selectedDistrict || r.district.toLowerCase() === selectedDistrict.toLowerCase();
      const matchQuery = !searchQuery ||
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.foodType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.placeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (r.address && r.address.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchCuisine = true;
      if (cuisineFilter === 'Pure Veg') {
        matchCuisine = r.foodType.toLowerCase().includes('veg') && !r.foodType.toLowerCase().includes('non-veg');
      } else if (cuisineFilter === 'Non-Veg') {
        matchCuisine = r.foodType.toLowerCase().includes('non-veg') || r.foodType.toLowerCase().includes('chettinad');
      } else if (cuisineFilter === 'Seafood') {
        matchCuisine = r.foodType.toLowerCase().includes('sea') || r.foodType.toLowerCase().includes('fish');
      } else if (cuisineFilter === 'Sweets') {
        matchCuisine = r.name.toLowerCase().includes('jigarthanda') || r.foodType.toLowerCase().includes('sweet') || r.foodType.toLowerCase().includes('dessert');
      }

      return matchDistrict && matchQuery && matchCuisine;
    });
  }, [allRestaurants, selectedDistrict, searchQuery, cuisineFilter]);

  // Cuisine category counts
  const pureVegCount = allRestaurants.filter(r => r.foodType.toLowerCase().includes('veg') && !r.foodType.toLowerCase().includes('non-veg')).length;
  const nonVegCount = allRestaurants.filter(r => r.foodType.toLowerCase().includes('non-veg') || r.foodType.toLowerCase().includes('chettinad')).length;

  return (
    <main className="main-content" style={{ backgroundColor: 'var(--bg-body)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.08) 0%, rgba(217, 119, 6, 0.06) 100%)',
        borderBottom: '1px solid var(--border-dark)',
        padding: '3rem 0 2rem'
      }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(234, 88, 12, 0.12)',
                color: '#ea580c',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                border: '1px solid rgba(234, 88, 12, 0.25)'
              }}
            >
              🍴 CULINARY HERITAGE OF TAMIL NADU
            </span>
            <h1
              style={{
                fontSize: '2.6rem',
                fontWeight: 800,
                color: 'var(--text-heading, #1e1b4b)',
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
                marginBottom: '0.8rem'
              }}
            >
              Authentic Tamil Nadu Restaurants
            </h1>
            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '1.08rem',
                lineHeight: 1.6,
                margin: '0 auto 2rem',
                maxWidth: '680px'
              }}
            >
              Taste iconic South Indian pure veg tiffins, legendary Chettinad spicy messes, refreshing Madurai Jigarthanda, and coastal seafood delicacies.
            </p>

            {/* Quick Food Theme Badges */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 1rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span>🍽️</span>
                <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.88rem' }}>{allRestaurants.length} Verified Eateries</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 1rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ color: '#16a34a' }}>🟢</span>
                <span style={{ fontWeight: 700, color: '#15803d', fontSize: '0.88rem' }}>{pureVegCount} Pure Vegetarian</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 1rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ color: '#dc2626' }}>🔴</span>
                <span style={{ fontWeight: 700, color: '#b91c1c', fontSize: '0.88rem' }}>{nonVegCount} Chettinad & Non-Veg</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SEARCH & FILTER CONTROL BAR */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dark)',
              borderRadius: '20px',
              padding: '1.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              marginBottom: '2rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', alignItems: 'flex-end' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.4rem', display: 'block' }}>
                  🔍 Search Dish or Restaurant
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Murugan Idli, Chettinad, Dosa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1.5px solid var(--border-dark)',
                    background: 'var(--input-bg)',
                    color: 'var(--text-heading)'
                  }}
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.4rem', display: 'block' }}>
                  📍 District Filter
                </label>
                <select
                  className="form-select"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1.5px solid var(--border-dark)',
                    background: 'var(--input-bg)',
                    color: 'var(--text-heading)'
                  }}
                >
                  <option value="">All Districts ({TN_DATA.districts.length})</option>
                  {TN_DATA.districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Cuisine Filter Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.2rem', paddingTop: '1.2rem', borderTop: '1px solid var(--border-dark)' }}>
              {[
                { id: 'All', label: 'All Cuisines 🍽️' },
                { id: 'Pure Veg', label: 'Pure Veg 🟢' },
                { id: 'Non-Veg', label: 'Chettinad & Non-Veg 🍗' },
                { id: 'Seafood', label: 'Seafood 🐟' },
                { id: 'Sweets', label: 'Desserts & Jigarthanda 🍧' }
              ].map((chip) => {
                const isActive = cuisineFilter === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setCuisineFilter(chip.id)}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? '#ea580c' : 'var(--border-dark)',
                      background: isActive ? 'linear-gradient(135deg, #ea580c, #c2410c)' : 'var(--bg-body)',
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      boxShadow: isActive ? '0 4px 12px rgba(234, 88, 12, 0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary Counter */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Showing {filteredRestaurants.length} Restaurants
            </h2>
            {(searchQuery || selectedDistrict || cuisineFilter !== 'All') && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedDistrict(''); setCuisineFilter('All'); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#7c3aed',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* 3. RESTAURANT CARDS GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.8rem' }}>
            {filteredRestaurants.map((restaurant, idx) => (
              <RestaurantCard key={idx} restaurant={restaurant} />
            ))}
          </div>

          {/* Empty State */}
          {filteredRestaurants.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px dashed var(--border-dark)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🍽️</div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                No restaurants found matching your criteria
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                Try selecting "All Districts" or search for popular dishes like "Dosa", "Chettinad", or "Biryani".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedDistrict(''); setCuisineFilter('All'); }}
                className="btn btn-primary btn-sm"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Restaurants;
