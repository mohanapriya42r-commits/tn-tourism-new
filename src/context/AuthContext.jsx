import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiPath } from '../utils/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('tn_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('tn_token') || null;
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = 'info') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Verify active token on application boot
  useEffect(() => {
    if (token) {
      fetch(apiPath('api/auth/me'), {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem('tn_user', JSON.stringify(data.user));
        } else if (data.status === 401 || data.message?.includes('token')) {
          // Token is expired or invalid
          setUser(null);
          setToken(null);
          localStorage.removeItem('tn_user');
          localStorage.removeItem('tn_token');
        }
      })
      .catch(() => {
        // Backend offline or local network error; keep persisted local session
      });
    }
  }, [token]);

  const login = (userData, authToken) => {
    setUser(userData);
    localStorage.setItem('tn_user', JSON.stringify(userData));
    if (authToken) {
      setToken(authToken);
      localStorage.setItem('tn_token', authToken);
    }
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  const register = (userData, authToken) => {
    setUser(userData);
    localStorage.setItem('tn_user', JSON.stringify(userData));
    if (authToken) {
      setToken(authToken);
      localStorage.setItem('tn_token', authToken);
    }
    showToast(`Welcome to Tamil Nadu Tourism, ${userData.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('tn_user');
    localStorage.removeItem('tn_token');
    showToast('Logged out successfully', 'info');
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout, register, showToast, toastMessage }}>
      {children}
      {toastMessage && (
        <div id="toast-container" className="toast-container" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999999 }}>
          <div
            className={`toast ${toastMessage.type}`}
            style={{
              background: '#0f172a',
              color: '#ffffff',
              padding: '14px 22px',
              borderRadius: '12px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.6), 0 0 15px rgba(217, 119, 6, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: toastMessage.type === 'success' ? '1px solid rgba(16, 185, 129, 0.4)' : toastMessage.type === 'danger' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(59, 130, 246, 0.4)',
              fontSize: '0.95rem',
              fontWeight: 500,
              maxWidth: '380px',
              lineHeight: 1.4
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>
              {toastMessage.type === 'success' ? '✅' : toastMessage.type === 'danger' ? '⚠️' : 'ℹ️'}
            </span>
            <div>{toastMessage.message}</div>
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthContext;
