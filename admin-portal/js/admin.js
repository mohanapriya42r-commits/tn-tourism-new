/* ==========================================================================
   Tamil Nadu Tourism - Admin Portal Shared JavaScript Module
   ========================================================================== */

// API base URL. The admin portal is served by the Node.js backend itself
// (Express serves it statically at /admin), so it is always same-origin.
// Using a relative URL means it works identically on localhost:5000 and on
// the production backend (e.g. https://tn-tourism-backend.onrender.com).
const API_BASE = '';

// 1. Check Admin Auth on non-login pages
function checkAdminAuth() {
  const path = window.location.pathname;
  const isLoginPage = path.endsWith('index.html') || path.endsWith('/admin/') || path.endsWith('/admin');
  
  const token = sessionStorage.getItem('adminToken') || localStorage.getItem('adminToken');
  const adminUser = sessionStorage.getItem('adminUser') || localStorage.getItem('adminUser');

  if (!isLoginPage && (!token || !adminUser)) {
    window.location.href = 'index.html';
    return null;
  }

  if (isLoginPage && token && adminUser) {
    window.location.href = 'dashboard.html';
    return JSON.parse(adminUser);
  }

  return adminUser ? JSON.parse(adminUser) : null;
}

// 2. Admin Logout
function adminLogout() {
  if (confirm('Are you sure you want to logout from Tamil Nadu Tourism Admin Portal?')) {
    sessionStorage.removeItem('adminToken');
    sessionStorage.removeItem('adminUser');
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    window.location.href = 'index.html';
  }
}

// 3. Highlight Active Navigation Sidebar Link
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const menuItems = document.querySelectorAll('.menu-item');

  menuItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href && currentPath.includes(href)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    }
  });

  // Display Admin User Info in Topbar if available
  const adminPill = document.getElementById('topbar-admin-email');
  const user = checkAdminAuth();
  if (adminPill && user) {
    adminPill.textContent = user.email || 'admin@tourism.com';
  }
});

// 4. Notification Toast Helper
function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('admin-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'admin-toast-container';
    toastContainer.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 10000; display: flex; flex-direction: column; gap: 10px;';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgColor = type === 'success' ? '#10b981' : type === 'danger' ? '#ef4444' : '#7c3aed';
  toast.style.cssText = `padding: 12px 20px; background: ${bgColor}; color: #ffffff; font-weight: 600; font-size: 0.9rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease;`;
  toast.innerHTML = (type === 'success' ? '✅ ' : type === 'danger' ? '⚠️ ' : 'ℹ️ ') + message;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
