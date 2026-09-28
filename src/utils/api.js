/**
 * API Client Helper
 * Resolves the backend base URL from the Vite environment variable
 * (VITE_API_URL) with a safe fallback to localhost for local development.
 *
 * When deployed on Vercel, set VITE_API_URL to your public backend URL
 * (e.g. https://tn-tourism-backend.onrender.com) in the Vercel project
 * Settings -> Environment Variables and rebuild the project.
 */

// Fallback used only in local development when VITE_API_URL is not set.
const LOCAL_FALLBACK = 'http://localhost:5000';

/**
 * Returns the base URL for backend API calls.
 * @returns {string}
 */
export function getApiUrl() {
  const envUrl =
    typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.VITE_API_URL
      ? String(import.meta.env.VITE_API_URL).replace(/\/$/, '')
      : '';

  return envUrl || LOCAL_FALLBACK;
}

/**
 * Convenience constant for use inside components.
 * @type {string}
 */
export const API_URL = getApiUrl();

/**
 * Build a full endpoint URL by appending a path to the API base.
 * @param {string} path
 * @returns {string}
 */
export function apiPath(path) {
  const base = getApiUrl();
  const cleanPath = String(path).replace(/^\//, '');
  return `${base}/${cleanPath}`;
}

/**
 * Wrap fetch so callers can pass a relative path and get the full URL,
 * plus sensible default headers.
 * @param {string} path
 * @param {object} options
 * @returns {Promise<Response>}
 */
export async function apiFetch(path, options = {}) {
  const url = path.startsWith('http')
    ? path
    : apiPath(path);
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };
  return fetch(url, { ...options, headers });
}