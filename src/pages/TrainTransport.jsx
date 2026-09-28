import React from 'react';
import { Link } from 'react-router-dom';

export function TrainTransport() {
  return (
    <main className="main-content">
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🚂</div>
            <div>
              <h1 className="page-header-title">Train Travels & Heritage Rail</h1>
              <p className="page-header-subtitle">Explore Southern Railway Express routes, Vande Bharat High-Speed trains, and the UNESCO Heritage Nilgiri Mountain Toy Train.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🚂</div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.4rem' }}>Nilgiri Mountain Toy Train (UNESCO)</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Steam locomotive operating from Mettupalayam to Ooty via Coonoor, climbing through 16 tunnels and 250 bridges.
              </p>
              <span className="badge badge-primary">Must-Experience Journey</span>
            </div>

            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>⚡</div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.4rem' }}>Vande Bharat Express Routes</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                High-speed premium trains running Chennai – Coimbatore, Chennai – Madurai – Nagercoil, and Chennai – Vijayawada.
              </p>
              <span className="badge badge-secondary">Fast & Comfortable</span>
            </div>

            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>🌊</div>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.4rem' }}>Pamban Sea Bridge Route</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                Iconic railway bridge crossing the Indian Ocean to Rameswaram Island offering breathtaking sea views.
              </p>
              <span className="badge badge-primary">Ocean Rail Circuit</span>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/trip-planner" className="btn btn-primary btn-lg">
              Include Train Transit in Smart Trip Plan ✨
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default TrainTransport;
