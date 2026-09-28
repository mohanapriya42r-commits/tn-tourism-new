import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [chatOpen, setChatOpen] = useState(true);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/places?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/places');
    }
  };

  const categoryList = [
    { id: 'temples', name: 'Temples', icon: '🛕', color: '#d97706', image: 'https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=500&q=80' },
    { id: 'beaches', name: 'Beaches', icon: '🏖️', color: '#0284c7', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80' },
    { id: 'hillstations', name: 'Hills', icon: '⛰️', color: '#059669', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80' },
    { id: 'waterfalls', name: 'Waterfalls', icon: '💧', color: '#0d9488', image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=500&q=80' },
    { id: 'historical', name: 'Historical', icon: '🏛️', color: '#7c3aed', image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=500&q=80' },
    { id: 'museums', name: 'Museums', icon: '🏛️', color: '#db2777', image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=500&q=80' },
    { id: 'wildlife', name: 'Wildlife', icon: '🦁', color: '#65a30d', image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=500&q=80' },
    { id: 'parks', name: 'Parks', icon: '🌳', color: '#16a34a', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=500&q=80' },
    { id: 'forts', name: 'Forts', icon: '🏰', color: '#dc2626', image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=500&q=80' },
    { id: 'lakes', name: 'Lakes', icon: '🌊', color: '#2563eb', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80' },
    { id: 'shopping', name: 'Shopping', icon: '🛍️', color: '#9333ea', image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=500&q=80' },
    { id: 'cultural', name: 'Cultural', icon: '🎭', color: '#ea580c', image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&w=500&q=80' },
    { id: 'adventure', name: 'Adventure', icon: '🎢', color: '#0891b2', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80' }
  ];

  return (
    <div className="landing-home-page">
      
      {/* 1. HERO BANNER SECTION WITH FLOATING MODULE CONTAINER */}
      <section className="landing-hero">
        <div className="landing-hero-bg">
          <img src="/images/hero_banner.jpg" alt="Tamil Nadu Tourism Banner" />
          <div className="landing-hero-overlay"></div>
        </div>

        {/* Top Right Handwritten Tagline Badge */}
        <div className="emotion-badge-wrap">
          <span className="emotion-text">Not just a trip...<br />It's an emotion!</span>
          <svg className="tn-outline-svg" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <path d="M20,30 Q40,10 70,20 Q90,40 80,70 Q60,90 30,80 Q10,60 20,30 Z" strokeWidth="2" strokeDasharray="4 2" />
          </svg>
        </div>

        <div className="container landing-hero-content">
          <div className="hero-typography-box" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}>
            <span className="sub-header-tag">ROOTS • CULTURE • HERITAGE</span>
            <h1 className="landing-hero-title">Tamil Nadu</h1>
            <h2
              className="landing-hero-subtitle"
              style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                margin: '0.4rem 0 0.5rem',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.85)'
              }}
            >
              LAND OF TRADITIONS &amp; TIMELESS BEAUTY
            </h2>
            <p
              className="landing-hero-desc font-cursive"
              style={{
                color: '#fef08a',
                fontSize: '1.35rem',
                fontWeight: 700,
                fontStyle: 'italic',
                margin: '0 auto 1.8rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 0 16px rgba(0, 0, 0, 0.8)'
              }}
            >
              Not only southern, all side of Tamil Nadu
            </p>
          </div>

          {/* Pill Search Bar */}
          <div className="landing-search-wrap" style={{ marginBottom: '2rem' }}>
            <form onSubmit={handleSearchSubmit} className="pill-search-form">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                className="pill-search-input"
                placeholder="Search for places, districts, categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="pill-search-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE TAMIL NADU BY CATEGORY SECTION */}
      <section className="landing-section bg-light-tint">
        <div className="container">
          <div className="landing-section-header">
            <div>
              <h2 className="landing-section-title">Explore Tamil Nadu by Category</h2>
              <div className="section-title-line"></div>
            </div>
            <div className="section-subtitle-tag">13 Categories • Endless Experiences</div>
          </div>

          <div className="category-grid-14">
            {categoryList.map((cat) => (
              <Link key={cat.id} to={`/places?category=${cat.id}`} className="cat-photo-card">
                <img src={cat.image} alt={cat.name} loading="lazy" />
                <div className="cat-pill-badge">
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{cat.name}</span>
                </div>
              </Link>
            ))}

            {/* 14th Special CTA Card */}
            <div className="cat-cta-card">
              <div className="cta-card-content">
                <span className="cta-airplane">✈️</span>
                <h3>Let's Plan Your Next Trip!</h3>
                <Link to="/trip-planner" className="btn btn-primary btn-sm" style={{ marginTop: '0.8rem' }}>
                  Start Planner ✨
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY CONTRIBUTION SECTION */}
      <section className="landing-section" style={{ background: 'var(--bg-body)', paddingTop: '3rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-subtitle-tag" style={{ background: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, padding: '0.35rem 0.9rem', borderRadius: '20px', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              COMMUNITY CONTRIBUTION
            </span>
            <h2 className="landing-section-title" style={{ marginTop: '0.6rem', fontSize: '2.2rem', fontWeight: 800 }}>
              Help Grow Our Tourism Community
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Card 1: Add a Hotel */}
            <div 
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--glass-shadow)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(168, 85, 247, 0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.2rem', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                  🏨
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', fontWeight: 700, marginBottom: '0.7rem' }}>
                  Add a Hotel
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Own a Hotel, Resort, Lodge or Homestay? Add your business to our platform. You can also recommend a genuine Hotel that you know.
                </p>
              </div>
              <div>
                <Link 
                  to="/hotels?action=add" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.8rem', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', display: 'block' }}
                >
                  🏨 Add Hotel
                </Link>
              </div>
            </div>

            {/* Card 2: Add a Travel Service */}
            <div 
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dark)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                boxShadow: 'var(--glass-shadow)',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(52, 211, 153, 0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', marginBottom: '1.2rem', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  🚌
                </div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)', fontWeight: 700, marginBottom: '0.7rem' }}>
                  Add a Travel Service
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Own a Travel Agency or Travel Service? Add your business to our platform. You can also recommend a trusted Travel Service that you know.
                </p>
              </div>
              <div>
                <Link 
                  to="/transport/bus?action=add" 
                  className="btn btn-primary" 
                  style={{ width: '100%', padding: '0.8rem', textAlign: 'center', fontWeight: 700, fontSize: '0.95rem', display: 'block', background: 'linear-gradient(135deg, #059669, #10b981)', borderColor: '#059669' }}
                >
                  🚌 Add Travel Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS & TAMIL NADU SKETCH BAR */}
      <section className="landing-stats-bar">
        <div className="container stats-flex-container">
          <div className="stat-item">
            <span className="stat-icon">🗺️</span>
            <div>
              <strong className="stat-num">38</strong>
              <span className="stat-label">Districts</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">📍</span>
            <div>
              <strong className="stat-num">100+</strong>
              <span className="stat-label">Tourist Places</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">🏛️</span>
            <div>
              <strong className="stat-num">13</strong>
              <span className="stat-label">Categories</span>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <div>
              <strong className="stat-num">1000+</strong>
              <span className="stat-label">Happy Travelers</span>
            </div>
          </div>

          <div className="stat-tagline">
            <span className="cursive-heart">Tamil Nadu ♡ Forever</span>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
