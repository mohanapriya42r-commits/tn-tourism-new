import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { apiPath } from '../utils/api';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Forgot Password Modal State
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [forgotMessage, setForgotMessage] = useState({ text: '', type: '' });
  const [forgotLoading, setForgotLoading] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Destination path (redirect after login)
  const from = location.state?.from?.pathname
    ? `${location.state.from.pathname}${location.state.from.search || ''}${location.state.from.hash || ''}`
    : '/';

  // If already logged in, redirect
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
    if (path.includes('districts')) return 'District Information';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setErrorMessage('Please enter both your email address and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiPath('api/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.message || 'Invalid email address or password. Please verify your credentials.');
        setLoading(false);
        return;
      }

      // Success: Save user in Auth Context state & localStorage
      const loggedInUser = data.user;
      const authToken = data.token;
      login(loggedInUser, authToken);

      // Redirect to the originally requested module or profile
      navigate(from, { replace: true });

    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Backend connection failed. Please ensure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setForgotMessage({ text: '', type: '' });

    if (!forgotEmail.trim() || !newPassword) {
      setForgotMessage({ text: 'Please fill in all fields.', type: 'danger' });
      return;
    }

    if (newPassword.length < 6) {
      setForgotMessage({ text: 'Password must be at least 6 characters.', type: 'danger' });
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setForgotMessage({ text: 'Passwords do not match.', type: 'danger' });
      return;
    }

    setForgotLoading(true);

    try {
      const res = await fetch(apiPath('api/reset-password'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: forgotEmail.trim(),
          newPassword,
          confirmPassword: confirmNewPassword
        })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setForgotMessage({ text: data.message || 'Failed to reset password.', type: 'danger' });
      } else {
        setForgotMessage({ text: data.message, type: 'success' });
        setTimeout(() => {
          setForgotModalOpen(false);
          setEmail(forgotEmail.trim());
          setPassword('');
          setForgotMessage({ text: '', type: '' });
        }, 2000);
      }
    } catch (err) {
      setForgotMessage({ text: 'Failed to connect to server.', type: 'danger' });
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh', padding: '3rem 1rem' }}>
      <div className="container" style={{ maxWidth: '460px' }}>
        <div className="glass-card" style={{ padding: '2.5rem 2.2rem', borderRadius: 'var(--radius-lg)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.2), rgba(245, 158, 11, 0.1))', border: '1px solid rgba(217, 119, 6, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.8rem' }}>
              🔐
            </div>
            <h2 style={{ fontSize: '1.85rem', color: '#fff', fontWeight: 700, margin: 0 }}>Welcome Back</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.4rem' }}>
              Sign in to explore Tamil Nadu, plan trips & save favorites
            </p>
          </div>

          {/* Context Notice for Protected Module Access */}
          {destName && (
            <div style={{ background: 'rgba(217, 119, 6, 0.12)', border: '1px solid rgba(217, 119, 6, 0.35)', color: '#fbbf24', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', marginBottom: '1.4rem', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🔒</span>
              <div>
                Please log in to access <strong>{destName}</strong>. You'll be automatically redirected after sign in.
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
            
            {/* Email Address */}
            <div className="form-group" style={{ marginBottom: '1.2rem' }}>
              <label htmlFor="login-email" style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.9rem', fontWeight: 600 }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  id="login-email"
                  className="form-input"
                  placeholder="e.g. senthil@example.com"
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

            {/* Password */}
            <div className="form-group" style={{ marginBottom: '1.2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label htmlFor="login-password" style={{ fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => { setForgotModalOpen(true); setForgotEmail(email); }}
                  style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 600, padding: 0 }}
                  id="forgot-password-trigger"
                >
                  Forgot Password?
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="login-password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (errorMessage) setErrorMessage(''); }}
                  required
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

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', fontWeight: 700, borderRadius: 'var(--radius-md)', marginTop: '0.5rem' }}
              disabled={loading}
              id="login-submit-btn"
            >
              {loading ? 'Logging In...' : '🔑 Sign In'}
            </button>
          </form>

          <div style={{ marginTop: '1.8rem', textAlign: 'center', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
            Don't have an account?{' '}
            <Link
              to="/register"
              state={{ from: location.state?.from }}
              style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none' }}
              id="goto-register-link"
            >
              Create New Account →
            </Link>
          </div>

        </div>
      </div>

      {/* Forgot / Reset Password Modal */}
      {forgotModalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(5px)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div className="glass-card" style={{ maxWidth: '420px', width: '100%', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#fff' }}>Reset Your Password</h3>
              <button
                onClick={() => setForgotModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' }}
              >
                ✕
              </button>
            </div>

            {forgotMessage.text && (
              <div style={{
                background: forgotMessage.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                border: forgotMessage.type === 'success' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(239, 68, 68, 0.4)',
                color: forgotMessage.type === 'success' ? '#34d399' : '#f87171',
                padding: '0.75rem',
                borderRadius: '8px',
                marginBottom: '1rem',
                fontSize: '0.86rem'
              }}>
                {forgotMessage.text}
              </div>
            )}

            <form onSubmit={handleResetPassword}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem' }}>Registered Email</label>
                <input
                  type="email"
                  className="form-input"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem' }}>New Password (min. 6 chars)</label>
                <input
                  type="password"
                  className="form-input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '1.2rem' }}>
                <label style={{ fontSize: '0.85rem' }}>Confirm New Password</label>
                <input
                  type="password"
                  className="form-input"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '0.8rem' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setForgotModalOpen(false)}
                  style={{ flex: 1, padding: '0.65rem' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '0.65rem' }}
                  disabled={forgotLoading}
                >
                  {forgotLoading ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default Login;
