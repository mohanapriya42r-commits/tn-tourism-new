import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Navbar({ onOpenEmergency }) {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`new-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="new-navbar-container">
        
        {/* Logo */}
        <Link to="/" className="new-logo">
          <img src="/images/logo.jpg" alt="TN Tourism" className="new-logo-img" />
          <div className="new-logo-text">
            <span className="brand-title">TN Tourism</span>
            <span className="brand-subtitle">Explore • Experience • Discover</span>
          </div>
        </Link>

        {/* Navigation Items with Top Icons - Hidden on Login & Register Pages */}
        {!isAuthPage && (
          <nav className={`new-nav-links ${mobileOpen ? 'active' : ''}`}>
            {/* 1. Home */}
            <NavLink to="/" end className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon">🟢</span>
              <span className="nav-text">Home</span>
            </NavLink>

            {/* 2. Tourist Places */}
            <NavLink to="/places" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#059669' }}>📍</span>
              <span className="nav-text">Tourist Places</span>
            </NavLink>

            {/* 3. Categories */}
            <NavLink to="/categories" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#0284c7' }}>🩵</span>
              <span className="nav-text">Categories</span>
            </NavLink>

            {/* 4. Festival Calendar */}
            <NavLink to="/festival-calendar" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#0d9488' }}>📅</span>
              <span className="nav-text">Festival Calendar</span>
            </NavLink>

            {/* 5. Trip Planner */}
            <NavLink to="/trip-planner" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#7c3aed' }}>🔮</span>
              <span className="nav-text">Trip Planner</span>
            </NavLink>

            {/* 6. Travel & Transport */}
            <NavLink to="/transport/bus" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#2563eb' }}>🚌</span>
              <span className="nav-text">Travel & Transport</span>
            </NavLink>

            {/* 7. Hotels */}
            <NavLink to="/hotels" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#d97706' }}>🛌</span>
              <span className="nav-text">Hotels</span>
            </NavLink>

            {/* 8. Restaurants */}
            <NavLink to="/restaurants" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#dc2626' }}>🍴</span>
              <span className="nav-text">Restaurants</span>
            </NavLink>

            {/* 9. Emergency Help */}
            <NavLink to="/emergency" className={({ isActive }) => `new-nav-item ${isActive ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              <span className="nav-icon" style={{ color: '#ef4444' }}>🚑</span>
              <span className="nav-text">Emergency Help</span>
            </NavLink>
          </nav>
        )}

        {/* Header Right Actions */}
        <div className="new-nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {isAuthPage ? (
            /* Clean Back to Home on Login/Register pages */
            <Link
              to="/"
              className="btn btn-outline btn-sm"
              style={{
                borderRadius: '20px',
                padding: '0.45rem 1rem',
                fontSize: '0.86rem',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              ← Back to Home
            </Link>
          ) : (
            /* Standard Pages: Search, Profile/Logout or single Login/Register */
            <>
              <Link to="/places" className="header-icon-btn" title="Search Destinations" id="nav-search-icon-btn">
                🔍
              </Link>

              {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Link
                    to="/profile"
                    className="user-profile-pill"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                    title={`Profile: ${user.name}`}
                    id="nav-user-profile-badge"
                  >
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #d97706, #f59e0b)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800 }}>
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span>{user.name.split(' ')[0]}</span>
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      navigate('/login');
                    }}
                    className="btn btn-outline btn-sm nav-logout-btn"
                    style={{
                      padding: '0.35rem 0.75rem',
                      fontSize: '0.82rem',
                      borderRadius: '20px',
                      borderColor: 'rgba(239, 68, 68, 0.4)',
                      color: '#f87171',
                      background: 'rgba(239, 68, 68, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                    title="Sign Out"
                    id="header-logout-btn"
                  >
                    <span>🚪</span>
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-primary btn-sm nav-login-btn"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    borderRadius: '20px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                  id="header-login-btn"
                >
                  <span>🔐</span>
                  <span>Login / Register</span>
                </Link>
              )}

              <button className="mobile-menu-btn" aria-label="Toggle mobile menu" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? '✕' : '☰'}
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  );
}

export default Navbar;
