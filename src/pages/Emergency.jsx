import React, { useState, useMemo } from 'react';
import { TN_DATA } from '../data/tourismData';

export function Emergency() {
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all emergency items across places
  const allEmergencyItems = useMemo(() => {
    const items = [];
    TN_DATA.places.forEach((place) => {
      if (place.emergency) {
        if (place.emergency.hospitals) {
          place.emergency.hospitals.forEach((h) =>
            items.push({ type: 'hospital', district: place.district, placeName: place.name, ...h })
          );
        }
        if (place.emergency.police) {
          place.emergency.police.forEach((p) =>
            items.push({ type: 'police', district: place.district, placeName: place.name, ...p })
          );
        }
        if (place.emergency.pharmacies) {
          place.emergency.pharmacies.forEach((ph) =>
            items.push({ type: 'pharmacy', district: place.district, placeName: place.name, ...ph })
          );
        }
      }
    });
    return items;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    return allEmergencyItems.filter((item) => {
      const matchDistrict = !selectedDistrict || item.district.toLowerCase() === selectedDistrict.toLowerCase();
      const matchType = selectedType === 'All' || item.type === selectedType;
      const matchQuery = !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.placeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.phone && item.phone.includes(searchQuery));

      return matchDistrict && matchType && matchQuery;
    });
  }, [allEmergencyItems, selectedDistrict, selectedType, searchQuery]);

  const hospitalsCount = allEmergencyItems.filter(i => i.type === 'hospital').length;
  const policeCount = allEmergencyItems.filter(i => i.type === 'police').length;
  const pharmaciesCount = allEmergencyItems.filter(i => i.type === 'pharmacy').length;

  return (
    <main className="main-content" style={{ backgroundColor: 'var(--bg-body)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.09) 0%, rgba(220, 38, 38, 0.05) 100%)',
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
                background: 'rgba(239, 68, 68, 0.12)',
                color: '#dc2626',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                border: '1px solid rgba(239, 68, 68, 0.25)'
              }}
            >
              🚨 24/7 ACTIVE TOURIST HELPLINE
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
              Emergency &amp; Tourist Helpline
            </h1>
            <p
              style={{
                color: 'var(--text-muted, #64748b)',
                fontSize: '1.08rem',
                lineHeight: 1.6,
                margin: '0 auto 1.5rem',
                maxWidth: '680px'
              }}
            >
              Immediate one-touch emergency access to state ambulance services, police patrols, tourist protection desks, and 24-hour pharmacies across Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SPEED DIAL HOTLINE CARDS */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ⚡ Instant Speed-Dial Hotlines (Free Calls)
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* 108 Ambulance */}
            <a
              href="tel:108"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem 1.2rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(239, 68, 68, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#ef4444'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'; }}
            >
              <div>
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '0.4rem' }}>🚑</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#dc2626', display: 'block' }}>108</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginTop: '0.2rem' }}>Ambulance SOS</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', marginBottom: '1rem' }}>Emergency Medical Services</p>
              </div>
              <span className="btn btn-danger btn-sm" style={{ width: '100%', borderRadius: '10px', fontWeight: 700 }}>
                📞 Call 108
              </span>
            </a>

            {/* 100 Police */}
            <a
              href="tel:100"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid rgba(2, 132, 199, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem 1.2rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(2, 132, 199, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#0284c7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)'; }}
            >
              <div>
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '0.4rem' }}>🚓</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0284c7', display: 'block' }}>100</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginTop: '0.2rem' }}>Police Control</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', marginBottom: '1rem' }}>Law &amp; Order Patrol Desk</p>
              </div>
              <span style={{ width: '100%', borderRadius: '10px', fontWeight: 700, background: 'linear-gradient(135deg, #0284c7, #0369a1)', color: '#fff', padding: '0.4rem 0.9rem', fontSize: '0.85rem', display: 'inline-block' }}>
                📞 Call 100
              </span>
            </a>

            {/* 101 Fire */}
            <a
              href="tel:101"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid rgba(234, 88, 12, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem 1.2rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(234, 88, 12, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#ea580c'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(234, 88, 12, 0.3)'; }}
            >
              <div>
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '0.4rem' }}>🚒</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ea580c', display: 'block' }}>101</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginTop: '0.2rem' }}>Fire &amp; Rescue</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', marginBottom: '1rem' }}>Disaster &amp; Fire Services</p>
              </div>
              <span style={{ width: '100%', borderRadius: '10px', fontWeight: 700, background: 'linear-gradient(135deg, #ea580c, #c2410c)', color: '#fff', padding: '0.4rem 0.9rem', fontSize: '0.85rem', display: 'inline-block' }}>
                📞 Call 101
              </span>
            </a>

            {/* 181 Women Helpline */}
            <a
              href="tel:181"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid rgba(147, 51, 234, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem 1.2rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(147, 51, 234, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#9333ea'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.3)'; }}
            >
              <div>
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '0.4rem' }}>👩</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#9333ea', display: 'block' }}>181</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginTop: '0.2rem' }}>Women Helpline</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', marginBottom: '1rem' }}>24/7 Safety &amp; Legal Support</p>
              </div>
              <span style={{ width: '100%', borderRadius: '10px', fontWeight: 700, background: 'linear-gradient(135deg, #9333ea, #7e22ce)', color: '#fff', padding: '0.4rem 0.9rem', fontSize: '0.85rem', display: 'inline-block' }}>
                📞 Call 181
              </span>
            </a>

            {/* 1363 Tourist Helpline */}
            <a
              href="tel:1363"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid rgba(13, 148, 136, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem 1.2rem',
                textAlign: 'center',
                textDecoration: 'none',
                boxShadow: '0 4px 16px rgba(13, 148, 136, 0.08)',
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#0d9488'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(13, 148, 136, 0.3)'; }}
            >
              <div>
                <span style={{ fontSize: '2.4rem', display: 'block', marginBottom: '0.4rem' }}>ℹ️</span>
                <span style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0d9488', display: 'block' }}>1363</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginTop: '0.2rem' }}>Tourist Helpline</strong>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', marginBottom: '1rem' }}>Incredible India &amp; TN Desk</p>
              </div>
              <span style={{ width: '100%', borderRadius: '10px', fontWeight: 700, background: 'linear-gradient(135deg, #0d9488, #0f766e)', color: '#fff', padding: '0.4rem 0.9rem', fontSize: '0.85rem', display: 'inline-block' }}>
                📞 Call 1363
              </span>
            </a>
          </div>

          {/* 3. DISTRICT EMERGENCY DIRECTORY */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dark)',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-heading)', margin: 0 }}>
                  🏥 District Emergency Directory
                </h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.2rem', margin: 0 }}>
                  Verified local hospitals, emergency police stations, and 24x7 pharmacies near tourist spots.
                </p>
              </div>
              <span className="badge badge-secondary" style={{ fontSize: '0.82rem', padding: '0.35rem 0.85rem' }}>
                {filteredItems.length} Verified Facilities
              </span>
            </div>

            {/* Filter Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
                marginBottom: '1.5rem',
                padding: '1.2rem',
                background: 'var(--bg-body, #f8fafc)',
                borderRadius: '16px',
                border: '1px solid var(--border-dark)'
              }}
            >
              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.3rem', display: 'block' }}>
                  Filter by District
                </label>
                <select
                  className="form-select"
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-dark)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-heading)'
                  }}
                >
                  <option value="">All Districts ({TN_DATA.districts.length})</option>
                  {TN_DATA.districts.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.3rem', display: 'block' }}>
                  Search Facility or Place
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Apollo, Government Hospital, Meenakshi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: '10px',
                    border: '1.5px solid var(--border-dark)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-heading)'
                  }}
                />
              </div>
            </div>

            {/* Type Filter Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.8rem' }}>
              {[
                { id: 'All', label: `All Facilities (${allEmergencyItems.length})`, icon: '🏢' },
                { id: 'hospital', label: `Hospitals (${hospitalsCount})`, icon: '🏥' },
                { id: 'police', label: `Police Stations (${policeCount})`, icon: '🚓' },
                { id: 'pharmacy', label: `Pharmacies (${pharmaciesCount})`, icon: '💊' }
              ].map((chip) => {
                const isActive = selectedType === chip.id;
                return (
                  <button
                    key={chip.id}
                    onClick={() => setSelectedType(chip.id)}
                    style={{
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? '#dc2626' : 'var(--border-dark)',
                      background: isActive ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'var(--bg-body)',
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      boxShadow: isActive ? '0 4px 12px rgba(220, 38, 38, 0.25)' : 'none',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span>{chip.icon}</span>
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 4. EMERGENCY CARDS GRID */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, idx) => {
                  const isHosp = item.type === 'hospital';
                  const isPol = item.type === 'police';
                  
                  const accentColor = isHosp ? '#ef4444' : (isPol ? '#0284c7' : '#10b981');
                  const bgTint = isHosp ? 'rgba(239, 68, 68, 0.04)' : (isPol ? 'rgba(2, 132, 199, 0.04)' : 'rgba(16, 185, 129, 0.04)');
                  const icon = isHosp ? '🏥' : (isPol ? '🚓' : '💊');
                  const typeLabel = isHosp ? 'Hospital' : (isPol ? 'Police Desk' : '24x7 Pharmacy');

                  return (
                    <div
                      key={idx}
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-dark)',
                        borderLeft: `5px solid ${accentColor}`,
                        borderRadius: '16px',
                        padding: '1.25rem',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                        transition: 'all 0.25s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 10px 24px ${accentColor}25`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)';
                      }}
                    >
                      <div>
                        {/* Top Badge Row */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              color: accentColor,
                              background: bgTint,
                              padding: '2px 8px',
                              borderRadius: '6px',
                              border: `1px solid ${accentColor}30`,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <span>{icon}</span>
                            <span>{typeLabel}</span>
                          </span>
                          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', background: 'var(--bg-body)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--border-dark)' }}>
                            {item.district}
                          </span>
                        </div>

                        {/* Facility Name - Crystal Clear & High Contrast */}
                        <h4
                          style={{
                            color: 'var(--text-heading, #1e1b4b)',
                            fontSize: '1.15rem',
                            fontWeight: 800,
                            margin: '0 0 0.4rem 0',
                            lineHeight: 1.3
                          }}
                        >
                          {item.name}
                        </h4>

                        {/* Distance & Tourist Spot */}
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.8rem 0', lineHeight: 1.4 }}>
                          📍 Near <strong>{item.placeName}</strong> {item.distance ? `(${item.distance})` : ''}
                        </p>
                      </div>

                      {/* Call Action Button */}
                      {item.phone && (
                        <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)' }}>
                          <a
                            href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              width: '100%',
                              padding: '0.55rem 1rem',
                              borderRadius: '10px',
                              background: accentColor,
                              color: '#ffffff',
                              fontWeight: 700,
                              fontSize: '0.88rem',
                              textDecoration: 'none',
                              boxShadow: `0 4px 12px ${accentColor}40`,
                              transition: 'opacity 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                          >
                            <span>📞</span>
                            <span>Call: {item.phone}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem 1rem' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    No specific emergency records found for the selected filter.
                  </p>
                  <button
                    onClick={() => { setSelectedDistrict(''); setSelectedType('All'); setSearchQuery(''); }}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: '0.8rem' }}
                  >
                    Reset Emergency Filters
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Emergency;
