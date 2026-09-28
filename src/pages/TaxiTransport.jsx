import React from 'react';
import { Link } from 'react-router-dom';

export function TaxiTransport() {
  return (
    <main className="main-content">
      <section style={{ padding: '2.5rem 0 1rem' }}>
        <div className="container">
          <div className="page-header-banner">
            <div className="page-header-icon">🚕</div>
            <div>
              <h1 className="page-header-title">Taxi & Car Travels</h1>
              <p className="page-header-subtitle">Private cabs, tempo travelers, auto rickshaws, and outstation taxi packages for flexible door-to-door sightseeing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            
            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.6rem' }}>🚕 Hatchback & Sedan Cabs</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Ideal for 1 – 4 travelers. Rates average ₹12 – ₹16 per km for outstation multi-day tours.
              </p>
              <div style={{ color: '#fbbf24', fontSize: '0.9rem', fontWeight: 600 }}>Estimated: ₹2,200 – ₹2,800 / day</div>
            </div>

            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.6rem' }}>🚙 SUV & Innova Cabs</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Ideal for families & hill station climbing. Rates average ₹18 – ₹22 per km.
              </p>
              <div style={{ color: '#2dd4bf', fontSize: '0.9rem', fontWeight: 600 }}>Estimated: ₹3,200 – ₹4,000 / day</div>
            </div>

            <div className="glass-card" style={{ padding: '1.8rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.6rem' }}>🚐 Tempo Traveler & Vans</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Ideal for group trips of 9 – 16 passengers. Comfortable pushback seating & pushback luggage.
              </p>
              <div style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 600 }}>Estimated: ₹4,500 – ₹6,000 / day</div>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/trip-planner" className="btn btn-primary btn-lg">
              Calculate Taxi Costs in Trip Planner ✨
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default TaxiTransport;
