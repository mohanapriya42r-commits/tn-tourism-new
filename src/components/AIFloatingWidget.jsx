import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AITravelAssistant from './AITravelAssistant';

export function AIFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleToggle = () => {
    if (!user) {
      navigate('/login', { state: { from: { pathname: '/ai-assistant' } } });
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="global-ai-widget-container" style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div
          className="floating-ai-drawer animate-pop-in"
          style={{
            position: 'absolute',
            bottom: '75px',
            right: '0',
            width: '400px',
            maxWidth: 'calc(100vw - 28px)',
            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.5), 0 0 25px rgba(124, 58, 237, 0.35)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(124, 58, 237, 0.4)',
            background: 'var(--bg-card)'
          }}
        >
          {/* Unified Polished Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
              color: '#ffffff',
              padding: '0.85rem 1.15rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0, flex: 1 }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              >
                🤖
              </div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', lineHeight: 1.2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  TN-Tourism AI Assistant
                </div>
                <div style={{ fontSize: '0.72rem', color: '#6ee7b7', display: 'flex', alignItems: 'center', gap: '5px', marginTop: '3px', fontWeight: 600 }}>
                  <span style={{ width: '7px', height: '7px', backgroundColor: '#10b981', borderRadius: '50%', display: 'inline-block' }} />
                  Online • Verified Database
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Assistant"
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#fff',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.95rem',
                fontWeight: 700,
                flexShrink: 0,
                transition: 'background 0.2s',
                marginLeft: 'auto'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.35)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              ✕
            </button>
          </div>
          <AITravelAssistant inline={false} />
        </div>
      )}

      {/* Floating Launcher Action Button */}
      <button
        onClick={handleToggle}
        className="global-ai-fab-btn"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
          color: '#ffffff',
          border: '2px solid rgba(255,255,255,0.3)',
          boxShadow: '0 8px 25px rgba(124, 58, 237, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative'
        }}
        title="Ask TN Tourism AI Assistant"
      >
        {isOpen ? '✕' : '🤖'}
        {!isOpen && (
          <span
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              border: '2px solid #090d16'
            }}
          />
        )}
      </button>
    </div>
  );
}

export default AIFloatingWidget;
