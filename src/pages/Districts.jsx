import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';

export function Districts() {
  const [filterQuery, setFilterQuery] = useState('');

  // Count destinations per district
  const districtCounts = {};
  TN_DATA.districts.forEach(d => { districtCounts[d] = 0; });
  TN_DATA.places.forEach(p => {
    if (districtCounts[p.district] !== undefined) {
      districtCounts[p.district]++;
    } else {
      // Find partial match
      const matched = TN_DATA.districts.find(d => p.district.includes(d));
      if (matched) districtCounts[matched]++;
    }
  });

  const filteredDistricts = TN_DATA.districts.filter(d =>
    d.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <main className="main-content">
      <section style={{ padding: '3rem 0 1.5rem', background: 'linear-gradient(to bottom, rgba(13, 148, 136, 0.15), transparent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-secondary" style={{ marginBottom: '0.6rem' }}>REGIONAL DIRECTORY</span>
          <h1 style={{ fontSize: '2.6rem' }}>Explore Tamil Nadu by Districts</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.4rem auto 0' }}>
            All 38 districts of Tamil Nadu offering unique temples, beaches, hill stations, wildlife reserves, and culinary heritage.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          <div style={{ maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            <input
              type="text"
              className="form-input"
              placeholder="Search district (e.g. Madurai, Nilgiris, Thanjavur)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              style={{ fontSize: '1.05rem', padding: '0.9rem 1.2rem' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {filteredDistricts.map((district) => {
              const count = districtCounts[district] || 0;
              return (
                <Link
                  key={district}
                  to={`/places?district=${encodeURIComponent(district)}`}
                  className="glass-card"
                  style={{
                    padding: '1.8rem 1.5rem',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-md)',
                    transition: 'var(--transition)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    border: '1px solid var(--border-dark)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>🏛️</div>
                    <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.3rem' }}>{district}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Tamil Nadu District</p>
                  </div>
                  <div style={{ marginTop: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)' }}>
                    <span className="badge badge-primary">{count} Destinations</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>Explore →</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Districts;
