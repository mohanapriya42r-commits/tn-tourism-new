import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute Guard
 * Restricts access to authenticated users.
 * Automatically saves the attempted location in navigation state
 * and redirects unauthenticated users to the Login / Registration page.
 */
export function ProtectedRoute({ children }) {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && !user) {
    // Redirect to login while preserving the full original destination path, query, and hash
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default ProtectedRoute;
