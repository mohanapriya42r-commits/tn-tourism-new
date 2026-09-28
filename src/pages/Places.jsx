import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import PlaceCard from '../components/PlaceCard';
import SearchFilter from '../components/SearchFilter';

export function Places() {
  const [searchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedDistrict, setSelectedDistrict] = useState(searchParams.get('district') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedRating, setSelectedRating] = useState('');
  const [sortBy, setSortBy] = useState('rating');

  useEffect(() => {
    if (searchParams.get('q')) setSearchQuery(searchParams.get('q'));
    if (searchParams.get('district')) setSelectedDistrict(searchParams.get('district'));
    if (searchParams.get('category')) setSelectedCategory(searchParams.get('category'));
  }, [searchParams]);

  // Filter & Sort Logic
  const filteredPlaces = TN_DATA.places.filter((place) => {
    const matchQuery = !searchQuery || 
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      place.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchDistrict = !selectedDistrict || place.district.toLowerCase().includes(selectedDistrict.toLowerCase());
    const matchCategory = !selectedCategory || place.category === selectedCategory || (place.categoryName && place.categoryName.toLowerCase().includes(selectedCategory.toLowerCase()));
    const matchRating = !selectedRating || place.rating >= parseFloat(selectedRating);

    return matchQuery && matchDistrict && matchCategory && matchRating;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'reviews') return (b.ratingCount || 0) - (a.ratingCount || 0);
    return 0;
  });

  return (
    <main className="main-content">
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🏛️</div>
            <div>
              <h1 className="page-header-title">Tourist Places</h1>
              <p className="page-header-subtitle">Explore the beauty of Tamil Nadu across all 38 districts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <SearchFilter
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedDistrict={selectedDistrict}
            setSelectedDistrict={setSelectedDistrict}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.4rem' }}>
              Showing {filteredPlaces.length} Destinations
            </h2>
            {(searchQuery || selectedDistrict || selectedCategory || selectedRating) && (
              <button
                className="btn btn-outline btn-sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDistrict('');
                  setSelectedCategory('');
                  setSelectedRating('');
                }}
              >
                Clear All Filters ✕
              </button>
            )}
          </div>

          {filteredPlaces.length > 0 ? (
            <div className="places-grid">
              {filteredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🔍</span>
              <h3>No Destinations Match Your Filter Criteria</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Try clearing or adjusting your search parameters.</p>
              <button
                className="btn btn-primary"
                style={{ marginTop: '1.5rem' }}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDistrict('');
                  setSelectedCategory('');
                  setSelectedRating('');
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Places;
