import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="new-landing-footer">
      <div className="container footer-landing-flex">
        
        {/* Left Brand */}
        <div className="footer-brand-wrap">
          <img src="/images/logo.jpg" alt="TN Tourism Logo" className="footer-logo-img" />
          <div>
            <div className="footer-brand-title">TN Tourism</div>
            <div className="footer-brand-sub">Explore • Experience • Discover</div>
          </div>
        </div>

        {/* Center Links */}
        <div className="footer-center-links">
          <Link to="/">About Us</Link>
          <span className="divider">|</span>
          <Link to="/privacy">Privacy Policy</Link>
          <span className="divider">|</span>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Right Social & Back to Top */}
        <div className="footer-right-actions">
          <div className="social-icon-btn">f</div>
          <div className="social-icon-btn">📸</div>
          <div className="social-icon-btn">▶</div>
          <div className="social-icon-btn">𝕏</div>
          <button className="back-to-top-btn" onClick={scrollToTop} title="Back to Top">
            ↑
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
