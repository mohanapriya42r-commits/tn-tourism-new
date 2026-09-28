import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TN_DATA } from '../data/tourismData';
import { FESTIVAL_DATA } from '../data/festivalData';
import { TRANSPORT_OPERATORS } from '../data/transportData';

export function AITravelAssistant({ inline = false }) {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Vanakkam! 🙏 I am your TN Tourism AI Travel Assistant. Ask me anything in English or Tanglish (e.g. "RSR Travels details kudu", "Chennai la irundhu Ooty ku affordable ah epdi pogalam?", "3 days Kodaikanal trip plan pannu")!'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    '🚌 RSR Travels details',
    '⛰️ Chennai to Ooty route',
    '🌿 3 days Kodai trip plan',
    '👨‍👩‍👧 Family places in TN',
    '🍛 Madurai food spots'
  ];

  const handleSendQuery = (queryText) => {
    if (!queryText.trim()) return;

    const userQuery = queryText.trim();
    const newMessages = [...messages, { sender: 'user', text: userQuery }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let response = generateAIResponse(userQuery);
      setMessages((prev) => [...prev, { sender: 'ai', text: response }]);
      setIsTyping(false);
    }, 500);
  };

  const handleSend = (e) => {
    e.preventDefault();
    handleSendQuery(input);
  };

  const generateAIResponse = (query) => {
    const q = query.toLowerCase();

    // 1. Travel Operator Direct Search (e.g., "RSR Travels", "SETC", "KPN", "SRM", "Parveen")
    const matchedOperator = TRANSPORT_OPERATORS.find(op => 
      q.includes(op.id.toLowerCase()) || 
      q.includes(op.name.toLowerCase()) ||
      (q.includes('rsr') && op.id === 'rsr-travels') ||
      (q.includes('setc') && op.id === 'setc-tnstc') ||
      (q.includes('kpn') && op.id === 'kpn-travels') ||
      (q.includes('srm') && op.id === 'srm-transports') ||
      (q.includes('parveen') && op.id === 'parveen-travels') ||
      (q.includes('rathimeena') && op.id === 'rathimeena-travels')
    );

    if (matchedOperator || q.includes('travel agency') || q.includes('travel operator') || q.includes('tour operator')) {
      if (matchedOperator) {
        return `🚌 ${matchedOperator.name}\n\n` +
          `• Service Type: ${matchedOperator.serviceType}\n` +
          `• Services Offered: ${matchedOperator.servicesOffered}\n` +
          `• Starting Location: ${matchedOperator.startingLocation}\n` +
          `• Destinations: ${matchedOperator.destination}\n` +
          `• Approximate Fare: ${matchedOperator.approxFare}\n` +
          `• Contact Number: ${matchedOperator.contactNumber}\n` +
          `• Email: ${matchedOperator.email}\n` +
          `• Website: ${matchedOperator.website}\n` +
          `• Office Address: ${matchedOperator.officeAddress}\n` +
          `• Operating Hours: ${matchedOperator.operatingHours}\n\n` +
          `📝 Description: ${matchedOperator.description}`;
      } else if (q.includes('rsr')) {
        const rsr = TRANSPORT_OPERATORS.find(op => op.id === 'rsr-travels');
        if (rsr) {
          return `🚌 ${rsr.name}\n\n` +
            `• Service Type: ${rsr.serviceType}\n` +
            `• Services Offered: ${rsr.servicesOffered}\n` +
            `• Starting Location: ${rsr.startingLocation}\n` +
            `• Destinations: ${rsr.destination}\n` +
            `• Approximate Fare: ${rsr.approxFare}\n` +
            `• Contact Number: ${rsr.contactNumber}\n` +
            `• Email: ${rsr.email}\n` +
            `• Website: ${rsr.website}\n` +
            `• Address: ${rsr.officeAddress}\n\n` +
            `📝 Description: ${rsr.description}`;
        }
      }
    }

    // 2. Specific Route & Affordable Transit Queries (e.g. "Chennai la irundhu Ooty ku affordable ah epdi pogalam?")
    if (
      (q.includes('chennai') && q.includes('ooty')) ||
      (q.includes('epdi pogalam') || q.includes('how to reach') || q.includes('affordable transport') || q.includes('route'))
    ) {
      if (q.includes('chennai') && q.includes('ooty')) {
        return `⛰️ Affordable Route from Chennai to Ooty:\n\n` +
          `1. 🚌 By SETC / TNSTC Bus (Most Budget-Friendly):\n` +
          `   • Direct overnight SETC Ultra Deluxe AC / Sleeper from Kilambakkam (KCBT) to Ooty.\n` +
          `   • Travel Time: ~11 - 12 hours | Approx Fare: ₹650 – ₹950 per person.\n\n` +
          `2. 🚆 By Train + Toy Train (Scenic Route):\n` +
          `   • Take Nilgiri Express (Train #12671) overnight from Chennai Central (MAS) to Mettupalayam (MTP).\n` +
          `   • Sleeper Fare: ~₹350 | 3AC: ~₹900.\n` +
          `   • Connect from Mettupalayam to Ooty via UNESCO Heritage Nilgiri Mountain Railway (Toy Train) or local bus (~₹35 - ₹150).\n\n` +
          `3. 🚕 Private Cab / Taxi:\n` +
          `   • Approx fare ₹8,500 – ₹11,000 for full vehicle.\n\n` +
          `💡 Smart Tip: Book SETC bus or Nilgiri Express 15-30 days in advance for peak weekend travel!`;
      }
    }

    // 3. Trip Plan & Itinerary Generation (e.g. "3 days Kodaikanal trip plan pannu" or "plan trip for 3 days")
    if (q.includes('trip plan') || q.includes('itinerary') || q.includes('plan pannu') || q.includes('days trip')) {
      if (q.includes('kodai') || q.includes('kodaikanal')) {
        return `🌿 3-Day Kodaikanal Budget Trip Itinerary:\n\n` +
          `🗓️ Day 1: Lake & Local Sights\n` +
          `   • Morning: Arrive & check-in. Visit Kodaikanal Lake (Boating ₹150) & Coaker's Walk (Viewpoint).\n` +
          `   • Afternoon: Bryant Park floral gardens.\n` +
          `   • Evening: Shopping at Seven Roads Junction for handmade chocolates & essential oils.\n\n` +
          `🗓️ Day 2: Pine Forests & Viewpoints\n` +
          `   • Morning: Pillar Rocks, Pine Forest & Moir Point.\n` +
          `   • Afternoon: Guna Caves & Green Valley View.\n` +
          `   • Evening: Mannavanur Lake & Sheep Farm (Quiet nature spot).\n\n` +
          `🗓️ Day 3: Waterfalls & Return\n` +
          `   • Morning: Silver Cascade Waterfalls & Bear Shola Falls.\n` +
          `   • Afternoon: Local lunch mess & souvenir shopping before departure.\n\n` +
          `💰 Estimated Cost (per person): ₹3,500 – ₹5,200 (Includes SETC bus, budget homestay & meals).\n\n` +
          `✨ You can also generate custom day plans using our interactive Trip Planner module!`;
      }
    }

    // 4. Family Destination Suggestions (e.g. "Tamil Nadu la family ku best tourist places enna?")
    if (q.includes('family') || q.includes('kids') || q.includes('family places') || q.includes('family trip')) {
      return `👨‍👩‍👧‍👦 Top Recommended Family Tourist Destinations in Tamil Nadu:\n\n` +
        `1. ⛰️ Ooty & Coonoor (Nilgiris): Cool climate, Botanical Gardens, Toy Train ride, and tea estate walks.\n` +
        `2. 🏖️ Mahabalipuram & ECR Coast: Shore Temple, Pancha Rathas, beach resorts, and crocodile bank.\n` +
        `3. 🛕 Tanjore & Trichy: Grand Brihadeeswarar Temple, Srirangam, and heritage culture.\n` +
        `4. 🌊 Rameshwaram & Dhanushkodi: Pamban Sea Bridge, APJ Abdul Kalam Memorial, and calm holy beaches.\n` +
        `5. 🌿 Kodaikanal: Lake boating, Pine Forests, and kid-friendly parks.\n\n` +
        `Visit our Tourist Places or Categories page to filter destinations by family interests!`;
    }

    // 5. Greetings & Tanglish Salutations
    if (q.includes('vanakkam') || q.includes('hello') || q.includes('hi') || q.includes('namaste') || q.includes('epdi') || q.includes('good morning')) {
      return 'Vanakkam! 🙏 Welcome to TN Tourism! How can I assist your travel today? You can ask about places, RSR Travels details, bus/train routes, family destinations, or 3-day trip plans!';
    }

    // 6. Food, Dining & Local Cuisine
    if (q.includes('food') || q.includes('eat') || q.includes('saapadu') || q.includes('chettinad') || q.includes('idli') || q.includes('dosa') || q.includes('jigarthanda') || q.includes('restaurant')) {
      return '🍛 Iconic Tamil Nadu Food Specialties:\n\n' +
        '• Madurai: Famous Jigarthanda, Kari Dosa, Murugan Idli Shop & Amma Mess.\n' +
        '• Chennai: Filter Coffee, Mylapore Ghee Roast Dosa, Sowcarpet street food.\n' +
        '• Tanjore & Trichy: Traditional Banana Leaf South Indian Meals & Srirangam Rava Dosa.\n' +
        '• Chettinad (Karaikudi): Spicy Pepper Chicken, Meen Kuzhambu, and Seepu Seedai.\n\n' +
        'Check out our Restaurants module to explore curated dining spots!';
    }

    // 7. Direct Destination Match in TN_DATA
    const placeMatch = TN_DATA.places.find(p =>
      q.includes(p.name.toLowerCase()) ||
      q.includes(p.district.toLowerCase()) ||
      (p.attractions && p.attractions.some(a => q.includes(a.toLowerCase())))
    );

    if (placeMatch) {
      return `📍 ${placeMatch.name} (${placeMatch.district} District)\n\n` +
        `⭐ Rating: ${placeMatch.rating} / 5 (${placeMatch.ratingCount} reviews)\n` +
        `🎟️ Entry Fee: ${placeMatch.entryFee}\n` +
        `🕒 Timings: ${placeMatch.openTime} - ${placeMatch.closeTime}\n` +
        `🗓️ Best Season to Visit: ${placeMatch.bestTime}\n\n` +
        `📝 Overview: ${placeMatch.shortDesc}\n\n` +
        `✨ Top Attractions: ${placeMatch.attractions ? placeMatch.attractions.slice(0, 3).join(', ') : 'Heritage & Scenery'}`;
    }

    // 8. Categories Matching
    const catMatch = TN_DATA.categories.find(c => q.includes(c.id) || q.includes(c.name.toLowerCase()));
    if (catMatch || q.includes('temple') || q.includes('kovil') || q.includes('beach') || q.includes('hill') || q.includes('waterfall')) {
      let catId = catMatch ? catMatch.id : (q.includes('temple') || q.includes('kovil') ? 'temples' : (q.includes('beach') ? 'beaches' : (q.includes('hill') ? 'hillstations' : 'historical')));
      let matchingPlaces = TN_DATA.places.filter(p => p.category === catId).slice(0, 4);
      if (matchingPlaces.length > 0) {
        let listStr = matchingPlaces.map(p => `• ${p.name} (${p.district}) - ⭐ ${p.rating}`).join('\n');
        return `🌟 Recommended Tamil Nadu Destinations:\n\n${listStr}\n\nExplore our Tourist Places tab for complete district details!`;
      }
    }

    // 9. Website Modules Inquiry
    if (q.includes('module') || q.includes('feature') || q.includes('website') || q.includes('services')) {
      return `📱 Available TN Tourism Website Modules:\n\n` +
        `1. 📍 Tourist Places (38 Districts & Detailed Attractions)\n` +
        `2. 🩵 Categories (Temples, Beaches, Hills, Waterfalls & Heritage)\n` +
        `3. 🔮 Smart Trip Planner (Personalized itineraries & budget breakdown)\n` +
        `4. 🚌 Travel & Transport Directory (Verified operators like RSR Travels, SETC, fares & schedules)\n` +
        `5. 🛌 Hotels & Accommodation\n` +
        `6. 🍴 Restaurants & Cuisine\n` +
        `7. 📅 Festival Calendar`;
    }

    // 10. Accurate Unavailable Fallback (No Hallucinations)
    return `Information for "${query}" is currently unavailable in the website database.\n\n` +
      `Try asking about verified operators like "RSR Travels" or "SETC", routes like "Chennai to Ooty", "3 days Kodaikanal trip plan", or specific districts like Madurai, Tanjore, Rameshwaram, or Kanyakumari! 🙏`;
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
                TN Travel AI Assistant
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
            TN AI Travel Assistant is finding verified response...
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
