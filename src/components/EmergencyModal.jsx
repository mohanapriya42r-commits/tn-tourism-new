import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function EmergencyModal({ isOpen, onClose, onOpen }) {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = isOpen !== undefined ? isOpen : modalVisible;
  const closeModal = onClose || (() => setModalVisible(false));
  const openModal = onOpen || (() => setModalVisible(true));

  return (
    <>
      {/* SOS Modal */}
      {showModal && (
        <div id="emergency-modal-overlay" className="modal-overlay active" style={{ display: 'flex' }}>
          <div className="modal-card">
            <button className="modal-close-btn" onClick={closeModal}>✕</button>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>🚨</span>
              <h2 style={{ fontSize: '1.8rem' }}>Tourist Emergency SOS Hub</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Immediate emergency assistance across Tamil Nadu</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <a href="tel:108" className="btn btn-danger" style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem', alignItems: 'center', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>🚑</span>
                <strong>108 Ambulance</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Medical Emergency</span>
              </a>

              <a href="tel:100" className="btn btn-primary" style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem', alignItems: 'center', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>🚓</span>
                <strong>100 Police</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Crime & Safety</span>
              </a>

              <a href="tel:181" className="btn btn-secondary" style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem', alignItems: 'center', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>👩</span>
                <strong>181 Women Helpline</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Women Safety</span>
              </a>

              <a href="tel:1077" className="btn btn-outline" style={{ display: 'flex', flexDirection: 'column', padding: '1.2rem', alignItems: 'center', borderColor: 'var(--border-dark)', textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem' }}>🌧️</span>
                <strong>1077 Disaster</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Disaster Control</span>
              </a>
            </div>

            <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-dark)', paddingTop: '1.2rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Need hospital, police station or pharmacy details for your destination?
              </p>
              <Link to="/emergency" className="btn btn-outline btn-sm" onClick={closeModal}>
                View Full Emergency Directory →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EmergencyModal;
