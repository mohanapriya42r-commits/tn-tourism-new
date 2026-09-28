import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FESTIVAL_DATA } from '../data/festivalData';
import { TN_DATA } from '../data/tourismData';

// Month icons for quick visual navigation
const MONTH_ICONS = ['🌾', '🌺', '☀️', '🌸', '🥭', '🌿', '🌧️', '🦚', '🍁', '🪔', '🌊', '🎄'];

export function FestivalCalendar() {
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(0); // January default

  const currentMonth = FESTIVAL_DATA.months[selectedMonthIdx];

  // Helper to find place by ID
  const getPlaceById = (placeId) => {
    return TN_DATA.places.find(p => p.id === placeId);
  };

  return (
    <main className="main-content" style={{ backgroundColor: 'var(--bg-body)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.08) 0%, rgba(2, 132, 199, 0.06) 100%)',
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
                background: 'rgba(13, 148, 136, 0.12)',
                color: '#0d9488',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                border: '1px solid rgba(13, 148, 136, 0.25)'
              }}
            >
              📅 12-MONTH CULTURAL &amp; SEASONAL CALENDAR
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
              Tamil Nadu Festival Calendar
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
              Discover month-by-month temple chariot processions, classical beach dance festivals, seasonal hill carnivals, and ideal months to visit every district.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MONTH SELECTOR PILL STRIP */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          
          <div
            style={{
              display: 'flex',
              gap: '0.6rem',
              overflowX: 'auto',
              paddingBottom: '0.8rem',
              marginBottom: '2rem',
              scrollbarWidth: 'thin'
            }}
          >
            {FESTIVAL_DATA.months.map((m, idx) => {
              const isSelected = m.index === selectedMonthIdx;
              return (
                <button
                  key={m.index}
                  onClick={() => setSelectedMonthIdx(m.index)}
                  style={{
                    flexShrink: 0,
                    padding: '0.65rem 1.25rem',
                    borderRadius: '16px',
                    border: '1.5px solid',
                    borderColor: isSelected ? '#7c3aed' : 'var(--border-dark)',
                    background: isSelected ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : 'var(--bg-card)',
                    color: isSelected ? '#ffffff' : 'var(--text-main)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 6px 20px rgba(124, 58, 237, 0.35)' : '0 2px 6px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{MONTH_ICONS[idx]}</span>
                  <span>{m.name}</span>
                </button>
              );
            })}
          </div>

          {/* 3. SELECTED MONTH SPOTLIGHT BANNER */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-dark)',
              borderLeft: '5px solid #7c3aed',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              marginBottom: '2.5rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', alignItems: 'center' }}>
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(124, 58, 237, 0.1)',
                    color: '#7c3aed',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    marginBottom: '0.6rem',
                    border: '1px solid rgba(124, 58, 237, 0.2)'
                  }}
                >
                  {currentMonth.seasonTag}
                </span>

                {/* High Contrast Month Title */}
                <h2
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--text-heading, #1e1b4b)',
                    margin: '0 0 0.4rem 0',
                    lineHeight: 1.2
                  }}
                >
                  {currentMonth.name} Tourism &amp; Festivities
                </h2>

                <p style={{ color: '#b45309', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 0.8rem 0' }}>
                  ✨ {currentMonth.tagline}
                </p>
              </div>

              {/* Climate Card */}
              <div
                style={{
                  background: 'var(--bg-body, #f8fafc)',
                  border: '1px solid var(--border-dark)',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.8rem'
                }}
              >
                <span style={{ fontSize: '1.8rem' }}>🌡️</span>
                <div>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-heading, #1e1b4b)', display: 'block', marginBottom: '0.2rem' }}>
                    Seasonal Weather &amp; Climate
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted, #64748b)', lineHeight: 1.5 }}>
                    {currentMonth.climate}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. MAJOR FESTIVALS GRID */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-heading)', margin: 0 }}>
                🎉 Major Festivals in {currentMonth.name} ({currentMonth.festivals.length})
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
                gap: '1.8rem'
              }}
            >
              {currentMonth.festivals.map((fest) => {
                const associatedPlace = getPlaceById(fest.associatedPlaceId);
                const coverImg = fest.image || associatedPlace?.image || 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=800&q=80';

                return (
                  <div
                    key={fest.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-dark)',
                      borderRadius: '22px',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 36px rgba(124, 58, 237, 0.15)';
                      e.currentTarget.style.borderColor = '#7c3aed';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = 'var(--border-dark)';
                    }}
                  >
                    {/* Festival Cover Photo Banner */}
                    <div style={{ position: 'relative', height: '185px', overflow: 'hidden', background: '#0f172a' }}>
                      <img
                        src={coverImg}
                        alt={fest.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=800&q=80';
                        }}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(15, 23, 42, 0.85) 100%)' }} />

                      {/* Top Badges */}
                      <div style={{ position: 'absolute', top: '12px', left: '12px', right: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span
                          style={{
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(6px)',
                            color: '#7c3aed',
                            padding: '3px 10px',
                            borderRadius: '8px',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                          }}
                        >
                          {fest.badgeText || '🎉 FESTIVAL'}
                        </span>
                        <span
                          style={{
                            background: 'rgba(15, 23, 42, 0.85)',
                            backdropFilter: 'blur(6px)',
                            color: '#fef08a',
                            border: '1px solid rgba(255,255,255,0.2)',
                            padding: '3px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.76rem',
                            fontWeight: 700
                          }}
                        >
                          📍 {fest.district} District
                        </span>
                      </div>

                      {/* Date Badge over Image */}
                      <div style={{ position: 'absolute', bottom: '10px', left: '14px', right: '14px' }}>
                        <span style={{ color: '#ffffff', fontSize: '0.82rem', fontWeight: 700, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                          📅 {fest.dates}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                      <div>
                        {/* High Contrast Festival Name */}
                        <h4
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: 'var(--text-heading, #1e1b4b)',
                            margin: '0 0 0.6rem 0',
                            lineHeight: 1.3
                          }}
                        >
                          {fest.name}
                        </h4>

                        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted, #64748b)', lineHeight: '1.55', marginBottom: '1rem' }}>
                          {fest.description}
                        </p>

                        {/* Key Highlights Checklist */}
                        {fest.highlights && (
                          <div style={{ marginBottom: '1.2rem', background: 'var(--bg-body, #f8fafc)', padding: '0.8rem 1rem', borderRadius: '12px', border: '1px solid var(--border-dark)' }}>
                            <strong style={{ fontSize: '0.78rem', color: 'var(--text-heading, #1e1b4b)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.35rem' }}>
                              🌟 Festival Highlights:
                            </strong>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              {fest.highlights.map((h, hIdx) => (
                                <div key={hIdx} style={{ fontSize: '0.82rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span style={{ color: '#10b981', fontWeight: 800 }}>✓</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Associated Destination Button */}
                      {fest.associatedPlaceId && associatedPlace && (
                        <div style={{ paddingTop: '0.8rem', borderTop: '1px solid var(--border-dark)' }}>
                          <Link
                            to={`/places/${fest.associatedPlaceId}`}
                            className="btn btn-outline btn-sm"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              borderRadius: '10px',
                              textAlign: 'center',
                              fontWeight: 700,
                              fontSize: '0.85rem'
                            }}
                          >
                            Explore {associatedPlace.name} →
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. RECOMMENDED DESTINATIONS FOR THIS MONTH */}
          {currentMonth.recommendedPlaceIds && currentMonth.recommendedPlaceIds.length > 0 && (
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dark)',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-heading)', marginBottom: '0.3rem' }}>
                ⭐ Best Destinations to Visit in {currentMonth.name}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', margin: '0 0 1.5rem 0' }}>
                Top-rated tourist attractions with ideal seasonal weather during this month.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {currentMonth.recommendedPlaceIds.map((pid) => {
                  const p = getPlaceById(pid);
                  if (!p) return null;
                  return (
                    <Link
                      key={pid}
                      to={`/places/${p.id}`}
                      style={{
                        padding: '0.9rem',
                        textDecoration: 'none',
                        borderRadius: '16px',
                        background: 'var(--bg-body, #f8fafc)',
                        border: '1px solid var(--border-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.borderColor = '#7c3aed';
                        e.currentTarget.style.background = 'var(--bg-card)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border-dark)';
                        e.currentTarget.style.background = 'var(--bg-body, #f8fafc)';
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=400&q=80';
                        }}
                        style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }}
                      />
                      <div style={{ minWidth: 0, flex: 1 }}>
                        {/* High Contrast Destination Title */}
                        <h5
                          style={{
                            color: 'var(--text-heading, #1e1b4b)',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            margin: '0 0 0.2rem 0',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {p.name}
                        </h5>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          📍 {p.district} • ⭐ {p.rating}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default FestivalCalendar;
