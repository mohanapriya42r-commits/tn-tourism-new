import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiPath } from '../utils/api';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine attempted destination (if redirected by ProtectedRoute)
  const from = location.state?.from?.pathname
    ? `${location.state.from.pathname}${location.state.from.search || ''}${location.state.from.hash || ''}`
    : '/';

  // If already authenticated, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  // Format destination name for friendly display
  const getDestinationName = () => {
    if (!location.state?.from?.pathname) return null;
    const path = location.state.from.pathname;
    if (path.includes('trip-planner')) return 'Trip Planner';
    if (path.includes('hotels')) return 'Hotels & Accommodations';
    if (path.includes('places')) return 'Tourist Places';
    if (path.includes('districts')) return 'District Guide';
    if (path.includes('categories')) return 'Destination Categories';
    if (path.includes('festival-calendar')) return 'Festival Calendar';
    if (path.includes('restaurants')) return 'Restaurants & Cuisine';
    if (path.includes('transport')) return 'Travel & Transport';
    if (path.includes('emergency')) return 'Emergency Help';
    if (path.includes('ai-assistant')) return 'AI Travel Assistant';
    if (path.includes('favorites')) return 'Wishlist & Favorites';
    if (path.includes('profile')) return 'Traveler Profile';
    if (path.includes('manager-dashboard')) return 'Manager Dashboard';
    return 'Protected Tourism Module';
  };

  const destName = getDestinationName();

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return false;
    }
    if (name.trim().length < 2) {
      setErrorMessage('Full name must be at least 2 characters long.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage('Please enter a valid email address (e.g. yourname@example.com).');
      return false;
    }

    const cleanMobile = mobile.replace(/[^0-9]/g, '');
    if (!cleanMobile || cleanMobile.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (!password) {
      setErrorMessage('Please enter a password.');
      return false;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }

    if (!confirmPassword) {
      setErrorMessage('Please confirm your password.');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match! Please verify both password fields.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiPath('api/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          mobile: mobile.replace(/[^0-9]/g, ''),
          password,
          confirmPassword,
          role: 'traveler',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.message || 'Registration failed. Please try again.');
        setLoading(false);
        return;
      }

      // Success: Save user in Auth Context state & localStorage
      const registeredUser = data.user;
      const authToken = data.token;
      register(registeredUser, authToken);

      // Redirect immediately to originally requested module
      navigate(from, { replace: true });

    } catch (error) {
      console.error('Registration error:', error);
      setErrorMessage('Cannot connect to authentication service. Please verify that the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh', padding: '3rem 1rem' }}>
      <div className="container" style={{ maxWidth: '500px' }}>
        <div className="glass-card" style={{ padding: '2.5rem 2.2rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(245, 158, 11, 0.1))', border: '1px solid rgba(217, 119, 6, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.8rem' }}>
              🛕
            </div>
            <h2 style={{ fontSize: '1.85rem', color: '#fff', fontWeight: 700, margin: 0 }}>Create Traveler Account</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
              Join Tamil Nadu Tourism to access smart trip planning, hotels, and tourist guides
            </p>
          </div>

          {/* Contextual notice if redirected from a protected module */}
          {destName && (
            <div style={{ background: 'rgba(217, 119, 6, 0.12)', border: '1px solid rgba(217, 119, 6, 0.35)', color: '#fbbf24', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.4rem', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🔒</span>
              <div>
                Registration required to access <strong>{destName}</strong>. You'll be redirected there right after signing up!
              </div>
            </div>
          )}

          {errorMessage && (
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#f87171', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.4rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⚠️</span>
              <div>{errorMessage}</div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            
            {/* Full Name */}
            <div className="form-group" style={{ marginBottom: '1.1rem' }}>
              <label htmlFor="reg-name" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Full Name <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="reg-name"
                  className="form-input"
                  placeholder="e.g. Karthik Sundaram"
                  value={name}
                  onChange={(e) => { setName(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  👤
                </span>
              </div>
            </div>

            {/* Email Address */}
            <div className="form-group" style={{ marginBottom: '1.1rem' }}>
              <label htmlFor="reg-email" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Email Address <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  id="reg-email"
                  className="form-input"
                  placeholder="e.g. karthik@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  ✉️
                </span>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="form-group" style={{ marginBottom: '1.1rem' }}>
              <label htmlFor="reg-mobile" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Mobile Number <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="tel"
                  id="reg-mobile"
                  className="form-input"
                  placeholder="e.g. 9876543210"
                  value={mobile}
                  onChange={(e) => { setMobile(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
                  maxLength={14}
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  📞
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="form-group" style={{ marginBottom: '1.1rem' }}>
              <label htmlFor="reg-password" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Password (min. 6 characters) <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="reg-password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
                  minLength={6}
                  style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  🔑
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'var(--text-muted)' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="form-group" style={{ marginBottom: '1.8rem' }}>
              <label htmlFor="reg-confirm-password" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Confirm Password <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="reg-confirm-password"
                  className="form-input"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
                  minLength={6}
                  style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                />
                <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>
                  🔒
                </span>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: 'var(--text-muted)' }}
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 700, borderRadius: 'var(--radius-md)' }}
              disabled={loading}
              id="register-submit-btn"
            >
              {loading ? 'Creating Your Account...' : '✨ Create Traveler Account'}
            </button>
          </form>

          <div style={{ marginTop: '1.6rem', textAlign: 'center', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <Link
              to="/login"
              state={{ from: location.state?.from }}
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}
              id="goto-login-link"
            >
              Log in here →
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Register;
