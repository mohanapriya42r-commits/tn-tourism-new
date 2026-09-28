import React from 'react';
import AITravelAssistant from '../components/AITravelAssistant';

export function AIAssistantPage() {
  return (
    <main className="main-content">
      <section style={{ padding: '3rem 0 1.5rem', background: 'linear-gradient(to bottom, rgba(2, 132, 199, 0.15), transparent)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-primary" style={{ marginBottom: '0.6rem' }}>AI SMART ASSISTANT</span>
          <h1 style={{ fontSize: '2.6rem' }}>Tamil Nadu AI Travel Assistant</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0.4rem auto 0' }}>
            Instant answers for temple timings, best visiting months, local cuisine, transport routes, and custom itinerary tips.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <AITravelAssistant inline={true} />
        </div>
      </section>
    </main>
  );
}

export default AIAssistantPage;
