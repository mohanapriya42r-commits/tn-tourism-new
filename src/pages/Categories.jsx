import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';

// Visual metadata for each category: authentic imagery, accent themes, and tags
const CATEGORY_META = {
  temples: {
    image: 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=700&q=80',
    color: '#d97706',
    tag: 'Spiritual & Heritage',
    group: 'Spiritual'
  },
  beaches: {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    color: '#0284c7',
    tag: 'Coastline & Sunsets',
    group: 'Nature'
  },
  hillstations: {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
    color: '#059669',
    tag: 'Misty Peaks & Tea Gardens',
    group: 'Nature'
  },
  waterfalls: {
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80',
    color: '#0d9488',
    tag: 'Herbal & Cascading Falls',
    group: 'Nature'
  },
  historical: {
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=700&q=80',
    color: '#7c3aed',
    tag: 'UNESCO World Heritage',
    group: 'Heritage'
  },
  wildlife: {
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=700&q=80',
    color: '#65a30d',
    tag: 'Tiger & Elephant Sanctuaries',
    group: 'Nature'
  },
  forts: {
    image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=700&q=80',
    color: '#dc2626',
    tag: 'Palaces & Royal Citadels',
    group: 'Heritage'
  },
  museums: {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=700&q=80',
    color: '#db2777',
    tag: 'Arts, Bronzes & Antiquities',
    group: 'Heritage'
  },
  parks: {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=700&q=80',
    color: '#16a34a',
    tag: 'Botanical Gardens & Flora',
    group: 'Nature'
  },
  lakes: {
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=700&q=80',
    color: '#2563eb',
    tag: 'Boating & Scenic Valleys',
    group: 'Nature'
  },
  shopping: {
    image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=700&q=80',
    color: '#9333ea',
    tag: 'Kanchi Silks & Handicrafts',
    group: 'Leisure'
  },
  cultural: {
    image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&w=700&q=80',
    color: '#ea580c',
    tag: 'Living Traditions & Arts',
    group: 'Heritage'
  },
  adventure: {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80',
    color: '#0891b2',
    tag: 'Treks & Forest Safaris',
    group: 'Leisure'
  }
};

export function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGroup, setActiveGroup] = useState('All');

  // Filter categories by search term and group filter
  const filteredCategories = useMemo(() => {
    return TN_DATA.categories.filter((cat) => {
      const meta = CATEGORY_META[cat.id] || {};
      const matchesSearch =
        !searchTerm.trim() ||
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (meta.tag && meta.tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesGroup =
        activeGroup === 'All' || meta.group === activeGroup;

      return matchesSearch && matchesGroup;
    });
  }, [searchTerm, activeGroup]);

  // Overall quick stats
  const totalPlaces = TN_DATA.places.length;
  const templesCount = TN_DATA.places.filter(p => p.category === 'temples').length;
  const waterfallsCount = TN_DATA.places.filter(p => p.category === 'waterfalls').length;
  const beachesCount = TN_DATA.places.filter(p => p.category === 'beaches').length;
  const hillsCount = TN_DATA.places.filter(p => p.category === 'hillstations').length;

  return (
    <main className="main-content" style={{ backgroundColor: 'var(--bg-body)', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(2, 132, 199, 0.06) 100%)',
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
                background: 'rgba(124, 58, 237, 0.12)',
                color: '#7c3aed',
                fontSize: '0.82rem',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                border: '1px solid rgba(124, 58, 237, 0.25)'
              }}
            >
              🌈 13 DIVERSE TRAVEL THEMES
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
              Explore Tamil Nadu by Category
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
              From towering Dravidian gopurams and tranquil coastal shorelines to mist-laden hill stations and vibrant bazaars — find places tailored to your passion.
            </p>

            {/* Quick Stats Pill Strip */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.8rem',
                marginBottom: '2rem'
              }}
            >
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '1.1rem' }}>📍</span>
                <span style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.88rem' }}>{totalPlaces} Places</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '1.1rem' }}>🛕</span>
                <span style={{ fontWeight: 700, color: '#d97706', fontSize: '0.88rem' }}>{templesCount} Temples</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '1.1rem' }}>🏖️</span>
                <span style={{ fontWeight: 700, color: '#0284c7', fontSize: '0.88rem' }}>{beachesCount} Beaches</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '1.1rem' }}>⛰️</span>
                <span style={{ fontWeight: 700, color: '#059669', fontSize: '0.88rem' }}>{hillsCount} Hills</span>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.45rem 0.95rem', borderRadius: '12px', border: '1px solid var(--border-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <span style={{ fontSize: '1.1rem' }}>💧</span>
                <span style={{ fontWeight: 700, color: '#0d9488', fontSize: '0.88rem' }}>{waterfallsCount} Falls</span>
              </div>
            </div>

            {/* Search Input Bar */}
            <div
              style={{
                position: 'relative',
                maxWidth: '560px',
                margin: '0 auto',
                boxShadow: '0 8px 30px rgba(124, 58, 237, 0.12)'
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.15rem',
                  color: 'var(--text-muted)'
                }}
              >
                🔍
              </span>
              <input
                type="text"
                placeholder="Search categories (e.g. temples, waterfalls, hills)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 3rem 0.9rem 3.2rem',
                  borderRadius: '9999px',
                  border: '1.5px solid var(--border-dark)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-heading)',
                  fontSize: '0.98rem',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}
                onFocus={(e) => e.target.style.borderColor = '#7c3aed'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-dark)'}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                >
                  ✕
                </button>
              )}
            </div>

            {/* Group Filter Chips */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1.5rem'
              }}
            >
              {['All', 'Spiritual', 'Nature', 'Heritage', 'Leisure'].map((group) => {
                const isActive = activeGroup === group;
                return (
                  <button
                    key={group}
                    onClick={() => setActiveGroup(group)}
                    style={{
                      padding: '0.4rem 1.1rem',
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: '1px solid',
                      borderColor: isActive ? '#7c3aed' : 'var(--border-dark)',
                      background: isActive ? 'linear-gradient(135deg, #7c3aed, #6d28d9)' : 'var(--bg-card)',
                      color: isActive ? '#ffffff' : 'var(--text-main)',
                      boxShadow: isActive ? '0 4px 12px rgba(124, 58, 237, 0.3)' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {group}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 2. CATEGORY CARDS GRID */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-heading)' }}>
              Showing {filteredCategories.length} Categories
            </h2>
            {searchTerm && (
              <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Matching "<strong>{searchTerm}</strong>"
              </span>
            )}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredCategories.map((cat) => {
              const meta = CATEGORY_META[cat.id] || {
                image: 'https://images.unsplash.com/photo-1600100397608-f090742f4fa4?auto=format&fit=crop&w=700&q=80',
                color: '#7c3aed',
                tag: 'Explore'
              };

              const categoryPlaces = TN_DATA.places.filter(p => p.category === cat.id);
              const placeCount = categoryPlaces.length;
              
              // Top 3 sample destinations in this category
              const topSamplePlaces = categoryPlaces
                .slice(0, 3)
                .map(p => p.name.replace(/Temple|Fort|Beach|Falls|Sanctuary|Lake/gi, '').trim());

              return (
                <Link
                  key={cat.id}
                  to={`/places?category=${cat.id}`}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-dark)',
                    borderRadius: '22px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.05)',
                    position: 'relative'
                  }}
                  className="cat-card-hover"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(124, 58, 237, 0.18)';
                    e.currentTarget.style.borderColor = meta.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.borderColor = 'var(--border-dark)';
                  }}
                >
                  {/* Photo Header Container */}
                  <div
                    style={{
                      position: 'relative',
                      height: '210px',
                      overflow: 'hidden',
                      backgroundColor: '#0f172a'
                    }}
                  >
                    <img
                      src={meta.image}
                      alt={cat.name}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.6s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(15, 23, 42, 0.85) 100%)'
                      }}
                    />

                    {/* Top Left Floating Emoji Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      {cat.icon}
                    </div>

                    {/* Top Right Places Count Pill */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: '#ffffff',
                        padding: '0.35rem 0.85rem',
                        borderRadius: '9999px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>📍</span>
                      <span>{placeCount} Places</span>
                    </div>

                    {/* Bottom Floating Title & Category Tag */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '14px',
                        left: '16px',
                        right: '16px'
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          color: '#fef08a',
                          marginBottom: '4px',
                          textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                        }}
                      >
                        {meta.tag}
                      </span>
                      <h3
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          margin: 0,
                          lineHeight: 1.25,
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        {cat.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div
                    style={{
                      padding: '1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: 1,
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: '0.92rem',
                          color: 'var(--text-muted, #64748b)',
                          lineHeight: '1.55',
                          marginBottom: '1rem'
                        }}
                      >
                        {cat.desc}
                      </p>

                      {/* Top Sample Places Pill Tags */}
                      {topSamplePlaces.length > 0 && (
                        <div style={{ marginBottom: '1.2rem' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '0.4rem' }}>
                            Popular Highlights:
                          </span>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                            {topSamplePlaces.map((name, i) => (
                              <span
                                key={i}
                                style={{
                                  background: 'var(--bg-body, #f8fafc)',
                                  border: '1px solid var(--border-dark)',
                                  color: 'var(--text-main)',
                                  fontSize: '0.76rem',
                                  fontWeight: 600,
                                  padding: '0.2rem 0.6rem',
                                  borderRadius: '6px'
                                }}
                              >
                                {name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Action Link Strip */}
                    <div
                      style={{
                        paddingTop: '0.9rem',
                        borderTop: '1px solid var(--border-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: meta.color
                        }}
                      >
                        Explore Category
                      </span>
                      <span
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: `${meta.color}15`,
                          color: meta.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: 700,
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        →
                      </span>
                    </div>

                  </div>
                </Link>
              );
            })}
          </div>

          {filteredCategories.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px dashed var(--border-dark)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
                No categories found matching "{searchTerm}"
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.2rem' }}>
                Try searching for temples, waterfalls, hill stations, beaches, or forts.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveGroup('All'); }}
                className="btn btn-primary btn-sm"
              >
                Reset Search
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  );
}

export default Categories;
