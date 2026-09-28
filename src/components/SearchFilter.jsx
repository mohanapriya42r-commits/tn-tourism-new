import React from 'react';
import { TN_DATA } from '../data/tourismData';

export function SearchFilter({
  searchQuery, setSearchQuery,
  selectedDistrict, setSelectedDistrict,
  selectedCategory, setSelectedCategory,
  selectedRating, setSelectedRating,
  sortBy, setSortBy
}) {
  return (
    <div className="search-filter-card" style={{
      background: 'var(--glass-bg)', backdropFilter: 'blur(12px)',
      border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)',
      padding: '1.5rem', marginBottom: '2rem'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', alignItems: 'end' }}>
        
        {/* Search Query */}
        <div className="form-group">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Search Destination / Landmark
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="e.g. Meenakshi, Ooty, Shore Temple..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* District Selector */}
        <div className="form-group">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            District
          </label>
          <select
            className="form-select"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">All Districts ({TN_DATA.districts.length})</option>
            {TN_DATA.districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Category Selector */}
        <div className="form-group">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Category
          </label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {TN_DATA.categories.map((c) => (
              <option key={c.id} value={c.id}>{c.icon} {c.name}</option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div className="form-group">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Minimum Rating
          </label>
          <select
            className="form-select"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4.8">4.8+ Stars (Top Rated)</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="form-group">
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>
            Sort By
          </label>
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="rating">Highest Rated</option>
            <option value="name">Name (A-Z)</option>
            <option value="reviews">Most Reviewed</option>
          </select>
        </div>

      </div>
    </div>
  );
}

export default SearchFilter;
