import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAIResponse } from '../utils/aiKnowledgeEngine';

export function AITravelAssistant({ inline = false }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Vanakkam! 🙏 I am your TN Tourism AI Assistant. Ask me ANY question or doubt about our website features (Trip Planner, Tourist Places, Hotels, Restaurants, Transport, Emergency, Festivals, Manager Portal) or Tamil Nadu travel in English or Tanglish!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    '🗺️ 3 days Kodai trip plan',
    '✨ Website features enna?',
    '🏨 How to add my hotel?',
    '🚨 Emergency helplines',
    '🚌 RSR Travels contact',
    '⛰️ Chennai to Ooty route',
    '🍛 Madurai food spots',
    '❤️ Favorites epdi save panradhu?'
  ];

  const handleSendQuery = (queryText) => {
    if (!queryText.trim()) return;

    const userQuery = queryText.trim();
    const newMessages = [...messages, { sender: 'user', text: userQuery }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = getAIResponse(userQuery);
      setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
      setIsTyping(false);
    }, 400);
  };

  const handleSend = (e) => {
    e.preventDefault();
    handleSendQuery(input);
  };

  return (
    <div
      className={`ai-assistant-card ${inline ? 'inline-card' : ''}`}
      style={{
        background: 'var(--bg-card)',
        border: inline ? '1px solid var(--border-dark)' : 'none',
        borderRadius: inline ? 'var(--radius-lg)' : '0',
        padding: inline ? '1.25rem' : '1rem',
        display: 'flex',
        flexDirection: 'column',
        height: inline ? '520px' : '450px',
        boxShadow: inline ? 'var(--glass-shadow)' : 'none',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Header - Only rendered in standalone inline mode */}
      {inline && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            paddingBottom: '0.8rem',
            borderBottom: '1px solid var(--border-dark)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
                display: 'flex',
                alignItems: 'center',
                justify: 'center',
                fontSize: '1.3rem',
                color: '#ffffff',
                boxShadow: '0 0 12px rgba(124, 58, 237, 0.4)'
              }}
            >
              🤖
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-heading)', margin: 0, fontWeight: 700 }}>
                TN-Tourism AI Assistant
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>
                ● Online • Verified Website Database
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Messages Scroll View */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0.8rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}
      >
        {messages.map((m, idx) => (
          <div
            key={idx}
            style={{
              alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '88%',
              background:
                m.sender === 'user'
                  ? 'linear-gradient(135deg, var(--primary), var(--primary-hover))'
                  : 'var(--input-bg)',
              color: m.sender === 'user' ? '#ffffff' : 'var(--text-heading)',
              border: m.sender === 'user' ? 'none' : '1px solid var(--border-dark)',
              padding: '0.75rem 1rem',
              borderRadius: m.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
              fontSize: '0.88rem',
              lineHeight: '1.5',
              whiteSpace: 'pre-line',
              boxShadow: m.sender === 'user' ? '0 4px 12px rgba(124, 58, 237, 0.2)' : 'none'
            }}
          >
            {m.text}
          </div>
        ))}
        {isTyping && (
          <div style={{ alignSelf: 'flex-start', color: 'var(--text-muted)', fontSize: '0.82rem', fontStyle: 'italic' }}>
            TN-Tourism AI Assistant is finding verified response...
          </div>
        )}
      </div>

      {/* Quick Prompts Bar */}
      <div
        style={{
          display: 'flex',
          gap: '0.4rem',
          overflowX: 'auto',
          paddingBottom: '0.6rem',
          scrollbarWidth: 'none'
        }}
      >
        {quickPrompts.map((promptText, i) => (
          <button
            key={i}
            onClick={() => handleSendQuery(promptText)}
            style={{
              whiteSpace: 'nowrap',
              background: 'var(--primary-light)',
              border: '1px solid var(--border-dark)',
              color: 'var(--primary)',
              borderRadius: '9999px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.75rem',
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'var(--transition)'
            }}
          >
            {promptText}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={handleSend}
        style={{
          display: 'flex',
          gap: '0.5rem',
          paddingTop: '0.6rem',
          borderTop: '1px solid var(--border-dark)'
        }}
      >
        <input
          type="text"
          className="form-input"
          placeholder="Ask in English or Tanglish (e.g. RSR Travels details, Ooty trip)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: 'var(--input-bg)',
            border: '1px solid var(--border-dark)',
            color: 'var(--text-heading)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem 0.9rem',
            fontSize: '0.88rem'
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            padding: '0 1.2rem',
            borderRadius: 'var(--radius-md)',
            fontWeight: 600
          }}
        >
          Send 🚀
        </button>
      </form>
    </div>
  );
}

export default AITravelAssistant;
