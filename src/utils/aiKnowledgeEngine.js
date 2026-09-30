import { TN_DATA } from '../data/tourismData.js';
import { FESTIVAL_DATA } from '../data/festivalData.js';
import { TRANSPORT_OPERATORS } from '../data/transportData.js';
import { MASTER_TRAVEL_SERVICES } from '../data/travelServicesData.js';
import { generateSmartTripPlan } from './plannerEngine.js';

/**
 * Master AI Knowledge Engine for Tamil Nadu Tourism Website.
 * Understands queries in English, Tamil, and Tanglish across all website features,
 * 38 districts, destinations, transport operators, hotels, restaurants, festivals, and emergency services.
 */
export function getAIResponse(queryText) {
  if (!queryText || !queryText.trim()) {
    return 'Vanakkam! 🙏 Please ask any question or doubt about our website or Tamil Nadu tourism.';
  }

  const raw = queryText.trim();
  const q = raw.toLowerCase();

  // =========================================================================
  // 1. META QUERY: "Can you answer any doubt about this website?"
  // =========================================================================
  if (
    q.includes('entha question') || q.includes('entha doubt') || q.includes('any question') ||
    q.includes('any doubt') || q.includes('reply pannanum') || q.includes('doubt ketalum') ||
    q.includes('doubt irukku') || q.includes('help pannu') || q.includes('puriyala')
  ) {
    if (q.includes('reply pannanum') || q.includes('entha question') || q.includes('entha doubt') || q.includes('set panni')) {
      return (
        `Vanakkam! 🙏 Kandippa! (Absolutely!)\n\n` +
        `Our AI Assistant is fully trained to answer **ANY question or doubt** about this TN Tourism website and all travel services across Tamil Nadu!\n\n` +
        `Here is what you can ask me anytime:\n` +
        `• 🗺️ **Trip Planner**: "3 days Ooty trip plan pannu", "Trip planner epdi use panradhu?"\n` +
        `• 📍 **Tourist Places**: "Marina Beach timings", "Brihadeeswarar Temple entry fee", "Best places in Madurai"\n` +
        `• 🏨 **Hotels & Homestays**: "Ooty la hotels evlo price?", "How to add a hotel to the website?"\n` +
        `• 🍛 **Restaurants & Food**: "Madurai famous food enna?", "Chettinad food spots"\n` +
        `• 🚌 **Travel & Transport**: "RSR Travels phone number", "Chennai to Ooty route", "SETC bus booking"\n` +
        `• 🚨 **Emergency Helplines**: "Tourist helpline number", "Police / Ambulance contacts"\n` +
        `• 📅 **Festival Calendar**: "Pongal dates", "Madurai Chithirai festival eppo?"\n` +
        `• 💼 **Manager Portal**: "Property epdi register panradhu?", "Manager login"\n` +
        `• ❤️ **Wishlist / Favorites**: "Places ah favorites la epdi save panradhu?"\n\n` +
        `Neenga English layo or Tanglish layo enna doubt venalum kelunga, I will give you instant, verified guidance! ✨`
      );
    }
  }

  // =========================================================================
  // 2. GREETINGS & SALUTATIONS
  // =========================================================================
  if (/^(hi|hello|hey|vanakkam|namaste|good morning|good evening|good afternoon|epdi irukinga|halo)\b/i.test(q)) {
    return (
      `Vanakkam! 🙏 Welcome to the Tamil Nadu Tourism Smart AI Assistant!\n\n` +
      `I can help you explore all 38 districts, generate personalized day-by-day trip itineraries, find verified hotels & eateries, check bus/train connectivity (like RSR Travels & SETC), festival dates, and emergency contacts.\n\n` +
      `Enna travel doubt irukku? Feel free to ask in English or Tanglish!`
    );
  }

  // =========================================================================
  // 3. WEBSITE OVERVIEW & FEATURES ("website la enna irukku", "features", "modules")
  // =========================================================================
  if (
    q.includes('website la enna') || q.includes('what is in this website') ||
    q.includes('features of this website') || q.includes('website features') ||
    q.includes('website modules') || q.includes('all modules') || q.includes('enna ellam irukku')
  ) {
    return (
      `🌟 **Welcome to the Tamil Nadu Tourism Web Portal!**\n\n` +
      `Here are all the key features and modules available on our website:\n\n` +
      `1. 📍 **Tourist Places (/places)**: Browse destinations across all 38 districts with filters for category, rating, opening hours, ticket fees, interactive maps, and visitor reviews.\n` +
      `2. 🔮 **Smart Trip Planner (/trip-planner)**: Generate custom 1–14 day itineraries with guaranteed zero repeated places, full day-wise schedules, and accurate budget breakdowns!\n` +
      `3. 🩵 **Categories (/categories)**: Explore curated themes including Temples, Beaches, Hill Stations, Waterfalls, Wildlife Sanctuaries, Heritage & Art.\n` +
      `4. 📅 **Festival Calendar (/festival-calendar)**: Complete 12-month calendar of Tamil Nadu's vibrant festivals with best visiting seasons & climate tips.\n` +
      `5. 🚌 **Travel & Transport (/travel-transport)**: Verified bus operators (RSR Travels, SETC, KPN, SRM), train routes, Nilgiri Toy Train info, and taxi fare guides.\n` +
      `6. 🏨 **Hotels & Accommodations (/hotels)**: Verified stays, resorts, lodges, phone numbers to call, and a portal to register your own hotel.\n` +
      `7. 🍴 **Restaurants & Food Guide (/restaurants)**: Verified eateries with pure-veg, non-veg, and authentic regional cuisines (Chettinad, Madurai Kari Dosa, Jigarthanda).\n` +
      `8. 🚨 **24/7 Emergency Helplines (/emergency)**: Direct access to Tourist Police, Ambulance (108), Tourist Helpline (1363), Women Safety, and local hospital contacts.\n` +
      `9. ❤️ **Favorites / Wishlist (/favorites)**: Bookmark any place by tapping the heart icon to plan your personal dream trip.\n` +
      `10. 💼 **Manager Portal (/manager-dashboard)**: Property owners can register hotels, homestays, or travel services with instant verification.`
    );
  }

  // =========================================================================
  // 4. TRIP PLANNER HOW-TO & ITINERARY GENERATION
  // =========================================================================
  const isTripPlanRequest = (
    q.includes('trip plan') || q.includes('itinerary') || q.includes('plan pannu') ||
    q.includes('days trip') || q.includes('day trip') || q.includes('tour plan')
  );

  if (isTripPlanRequest) {
    // Check if the user is asking HOW to use the Trip Planner
    if (q.includes('epdi use') || q.includes('how to use') || q.includes('how does') || q.includes('epdi plan panradhu')) {
      return (
        `🗺️ **How to Use Our Smart Trip Planner (/trip-planner):**\n\n` +
        `1. Click on **Trip Planner** in the top navigation bar.\n` +
        `2. **Choose Source City**: Select where you are starting from (e.g. Chennai, Madurai, Coimbatore, Trichy, Salem).\n` +
        `3. **Select Destination District**: Choose any of Tamil Nadu's 38 districts (e.g., The Nilgiris / Ooty, Chengalpattu, Dindigul / Kodai, Ramanathapuram / Rameshwaram).\n` +
        `4. **Select Duration**: Choose between 1 to 14 days.\n` +
        `5. **Set Budget Level**: Select Budget (₹), Moderate (₹₹), or Luxury (₹₹₹).\n` +
        `6. Click **Generate Itinerary ✨**!\n\n` +
        `✨ **Smart Features**:\n` +
        `• **100% Unique Attractions**: Our engine guarantees zero repeated tourist places across all days!\n` +
        `• **Time-Optimized Schedules**: Each day is segmented into Morning, Afternoon, and Evening slots with realistic visit durations.\n` +
        `• **Cost Estimation**: Automatically calculates transport, hotel stay, and dining costs!`
      );
    }

    // Otherwise, generate an instant trip itinerary right here in the chat!
    let numDays = 3;
    const dayMatch = q.match(/(\d+)\s*(?:day|days)/);
    if (dayMatch) {
      numDays = Math.min(7, Math.max(1, parseInt(dayMatch[1])));
    }

    let matchedDistrict = TN_DATA.districts.find(d => q.includes(d.toLowerCase()));
    if (!matchedDistrict) {
      if (q.includes('kodai') || q.includes('kodaikanal')) matchedDistrict = 'Dindigul';
      else if (q.includes('ooty') || q.includes('coonoor') || q.includes('nilgiri')) matchedDistrict = 'The Nilgiris';
      else if (q.includes('mahabs') || q.includes('mahabalipuram') || q.includes('kovalam')) matchedDistrict = 'Chengalpattu';
      else if (q.includes('rameshwaram') || q.includes('dhanushkodi')) matchedDistrict = 'Ramanathapuram';
      else if (q.includes('yercaud')) matchedDistrict = 'Salem';
      else if (q.includes('madurai')) matchedDistrict = 'Madurai';
      else if (q.includes('chennai')) matchedDistrict = 'Chennai';
      else if (q.includes('tanjore') || q.includes('thanjavur')) matchedDistrict = 'Thanjavur';
      else if (q.includes('trichy') || q.includes('tiruchirappalli')) matchedDistrict = 'Tiruchirappalli';
      else if (q.includes('kanyakumari')) matchedDistrict = 'Kanyakumari';
      else matchedDistrict = 'The Nilgiris';
    }

    const plan = generateSmartTripPlan({
      source: 'Chennai',
      destinations: [matchedDistrict],
      days: numDays,
      budgetLevel: 'medium'
    });

    let resText = `🗺️ **Custom ${numDays}-Day ${matchedDistrict} Trip Plan (Verified Zero Repeat Places):**\n\n`;
    plan.itinerary.forEach(d => {
      resText += `🗓️ **${d.title}**\n`;
      resText += `• 🌅 **Morning (08:30 AM - 12:00 PM)**: ${d.schedule.morning.placeName} (${d.schedule.morning.category})\n`;
      resText += `• ☀️ **Afternoon (12:30 PM - 04:30 PM)**: ${d.schedule.afternoon.placeName} (${d.schedule.afternoon.category})\n`;
      resText += `• 🌆 **Evening (05:00 PM - 07:30 PM)**: ${d.schedule.evening.placeName} (${d.schedule.evening.category})\n`;
      resText += `• 🚶 Suggested Route Order: ${d.suggestedVisitOrder}\n\n`;
    });
    resText += `💰 **Estimated Total Cost**: ₹${plan.costs.total.toLocaleString()} (Includes local transfers, hotel accommodation & dining)\n\n`;
    resText += `👉 Tip: You can customize starting cities, budgets, and download your full plan on our **Trip Planner** page!`;
    return resText;
  }

  // =========================================================================
  // 5. HOW TO ADD HOTEL / REGISTER PROPERTY / MANAGER DASHBOARD
  // =========================================================================
  if (
    q.includes('add hotel') || q.includes('add property') || q.includes('register hotel') ||
    q.includes('hotel add') || q.includes('manager dashboard') || q.includes('manager login') ||
    q.includes('add my hotel') || q.includes('own hotel') || q.includes('register property') ||
    q.includes('hotel epdi add') || q.includes('property epdi') || q.includes('business add')
  ) {
    return (
      `🏨 **How to Add a Hotel or Register a Property on our Website:**\n\n` +
      `If you own a Hotel, Resort, Homestay, Restaurant, or Travel Agency in Tamil Nadu, you can easily list it:\n\n` +
      `1. **Access the Registration Portal**:\n` +
      `   • Go to **Manager Dashboard** from the navigation bar, or click **"Add Hotel"** on the Homepage, or visit \`/hotels?action=add\`.\n` +
      `2. **Sign In or Register as a Manager**:\n` +
      `   • Fill in your Name, Business Email, Mobile Number, and create a Password.\n` +
      `   • Select your role (Hotel Owner, Travel Operator, or Restaurant Manager).\n` +
      `3. **Submit Property Details**:\n` +
      `   • Enter Property Name, District, Full Address, Contact Phone, and Price Range.\n` +
      `   • List key amenities (e.g. Free Wi-Fi, AC, Swimming Pool, Parking, Complimentary Breakfast).\n` +
      `4. **Instant Verification & Live Listing**:\n` +
      `   • Upon clicking **Submit Property**, your listing is verified and immediately made visible to thousands of travelers across Tamil Nadu!\n\n` +
      `📞 Need manager support? Reach out via our Emergency & Support helpline at \`/emergency\`!`
    );
  }

  // =========================================================================
  // 6. FAVORITES & WISHLIST ("favorites epdi save panradhu", "wishlist")
  // =========================================================================
  if (
    q.includes('favorite') || q.includes('wishlist') || q.includes('save place') ||
    q.includes('heart icon') || q.includes('epdi save') || q.includes('how to save')
  ) {
    return (
      `❤️ **How to Save Places to Your Wishlist / Favorites:**\n\n` +
      `1. **Tap the Heart Icon (♡ / ❤️)**: On any destination card in the **Tourist Places** list or at the top of the **Place Details** hero banner, click the "Save to Favorites" button.\n` +
      `2. **Instant Sync**: The destination is instantly saved to your browser storage.\n` +
      `3. **View Your Wishlist**: Click on **Favorites** in the navigation bar (\`/favorites\`) to view all your saved attractions in one place!\n` +
      `4. **One-Click Itinerary**: From your Favorites list, you can jump straight into the Trip Planner to build a trip around your saved dream destinations!`
    );
  }

  // =========================================================================
  // 7. EMERGENCY HELPLINES & SAFETY
  // =========================================================================
  if (
    q.includes('emergency') || q.includes('helpline') || q.includes('police') ||
    q.includes('ambulance') || q.includes('hospital') || q.includes('safety') ||
    q.includes('tourist police') || q.includes('accident') || q.includes('call help')
  ) {
    return (
      `🚨 **Tamil Nadu 24x7 Official Emergency & Tourist Helplines:**\n\n` +
      `• 🧳 **All-India Tourist Helpline**: **1363** (Toll-Free, 24x7 Multilingual assistance in English, Tamil, Hindi, etc.)\n` +
      `• 👮 **Police Control Room**: **100** or **112** (Universal Emergency Response)\n` +
      `• 🚑 **Medical Ambulance**: **108** (Free Emergency Medical Services)\n` +
      `• 👩 **Women Safety Helpline**: **1091**\n` +
      `• 🌊 **Coastal Security Helpline**: **1093** (For beaches, coastal rescues & maritime safety)\n` +
      `• 🚒 **Fire & Rescue Service**: **101**\n` +
      `• 🧒 **Child Helpline**: **1098**\n\n` +
      `💡 Note: Every destination page on our site also displays **Nearby Hospitals & Local Police Stations** with direct phone numbers under the "Emergency Services" card!`
    );
  }

  // =========================================================================
  // 8. TRAVEL & TRANSPORT OPERATORS (RSR Travels, SETC, KPN, Trains, etc.)
  // =========================================================================
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

  if (matchedOperator || q.includes('travel operator') || q.includes('bus operator') || q.includes('rsr travels')) {
    const target = matchedOperator || TRANSPORT_OPERATORS.find(op => op.id === 'rsr-travels');
    if (target) {
      return (
        `🚌 **${target.name} (Verified Transport Partner)**\n\n` +
        `• **Service Type**: ${target.serviceType}\n` +
        `• **Services Offered**: ${target.servicesOffered}\n` +
        `• **Starting Location**: ${target.startingLocation}\n` +
        `• **Key Routes**: ${target.destination}\n` +
        `• **Approximate Fare**: ${target.approxFare}\n` +
        `• **Contact Number**: 📞 ${target.contactNumber}\n` +
        `• **Email**: ✉️ ${target.email}\n` +
        `• **Official Website**: 🌐 ${target.website}\n` +
        `• **Address**: 🏢 ${target.officeAddress}\n` +
        `• **Hours**: 🕒 ${target.operatingHours}\n\n` +
        `📝 **Overview**: ${target.description}\n\n` +
        `Explore more verified bus operators and taxi guides on our **Travel & Transport** page (\`/travel-transport\`)!`
      );
    }
  }

  // =========================================================================
  // 9. CHENNAI TO OOTY OR GENERAL ROUTE QUERIES
  // =========================================================================
  if (
    (q.includes('chennai') && q.includes('ooty')) ||
    (q.includes('epdi pogalam') || q.includes('how to reach') || q.includes('route to'))
  ) {
    if (q.includes('ooty')) {
      return (
        `⛰️ **How to Reach Ooty (Udhagamandalam) - Best Budget & Scenic Options:**\n\n` +
        `1. 🚌 **By SETC / Government Bus (Most Budget-Friendly)**:\n` +
        `   • Direct overnight AC Sleeper / Ultra Deluxe buses from Kilambakkam (KCBT) Chennai to Ooty.\n` +
        `   • Travel Time: ~11–12 hours | Approx Fare: ₹650 – ₹950 per seat.\n\n` +
        `2. 🚆 **By Nilgiri Express + UNESCO Toy Train (Scenic Route)**:\n` +
        `   • Take Nilgiri Express (Train #12671) overnight from Chennai Central (MAS) to Mettupalayam (MTP).\n` +
        `   • Sleeper: ~₹350 | 3AC: ~₹900.\n` +
        `   • Connect from Mettupalayam to Ooty on the historic Nilgiri Mountain Railway (Toy Train) with breathtaking mountain viaducts!\n\n` +
        `3. 🚕 **Private Cab / Tempo Traveller**:\n` +
        `   • Approx fare ₹8,500 – ₹11,000 for private group travel.\n\n` +
        `💡 Smart Tip: Book Toy Train tickets on IRCTC 30-60 days ahead as seats fill up very quickly!`
      );
    }
  }

  // =========================================================================
  // 10. FESTIVALS & SEASONS ("festival eppo", "pongal date", "chithirai")
  // =========================================================================
  if (
    q.includes('festival') || q.includes('thiruvizha') || q.includes('pongal') ||
    q.includes('jallikattu') || q.includes('chithirai') || q.includes('deepam') ||
    q.includes('natyanjali') || q.includes('dance festival') || q.includes('karthigai')
  ) {
    return (
      `🎉 **Major Tamil Nadu Festivals & Seasonal Celebrations:**\n\n` +
      `• 🌾 **Thai Pongal & Jallikattu (Mid-January)**: Harvest festival with famous Jallikattu bull taming at Alanganallur and Palamedu near Madurai.\n` +
      `• 🎭 **Mamallapuram Indian Dance Festival (Dec 25 – Jan 25)**: Open-air classical dances (Bharatanatyam, Kathakali) with Shore Temple rock backdrop.\n` +
      `• 🛕 **Natyanjali Dance Festival (February/March - Maha Shivratri)**: Renowned classical dancers perform at Chidambaram Nataraja Temple.\n` +
      `• 👑 **Madurai Chithirai Thiruvizha (April/May)**: Grand coronation of Goddess Meenakshi & Kallazhagar entering Vaigai river (1M+ devotees).\n` +
      `• 🌸 **Ooty Summer Festival & Flower Show (May)**: Stunning botanical floral displays and boat pageants in Nilgiris.\n` +
      `• 🌊 **Courtallam Saral Thiruvizha (July/August)**: Celebrating the curative monsoon cascade waterfalls in Tenkasi.\n` +
      `• 🕯️ **Tiruvannamalai Karthigai Deepam (Nov/Dec)**: Massive sacred beacon lit atop Annamalai Hill, seen across 30 km.\n\n` +
      `Check out our **Festival Calendar** page (\`/festival-calendar\`) for month-wise climate tips and festival itineraries!`
    );
  }

  // =========================================================================
  // 11. FOOD, DINING & LOCAL CUISINE
  // =========================================================================
  if (
    q.includes('food') || q.includes('saapadu') || q.includes('eat') || q.includes('sapda') ||
    q.includes('restaurant') || q.includes('chettinad') || q.includes('jigarthanda') ||
    q.includes('idli') || q.includes('dosa') || q.includes('biryani') || q.includes('pure veg')
  ) {
    return (
      `🍛 **Iconic Tamil Nadu Culinary Delights & Where to Eat:**\n\n` +
      `• 🍨 **Madurai**: Famous Jigarthanda (Famous Jigarthanda Shop), Madurai Kari Dosa (Konar Mess, Amma Mess), and fluffy Murugan Idli.\n` +
      `• ☕ **Chennai**: Filter Coffee & Ghee Roast Dosa (Mylapore, Saravana Bhavan, Ratna Cafe), and Sowcarpet street chats.\n` +
      `• 🍗 **Chettinad (Karaikudi)**: Spicy Chettinad Pepper Chicken, Meen Kuzhambu (fish curry), and Seepu Seedai at traditional heritage messes.\n` +
      `• 🍃 **Tanjore & Trichy**: Authentic full banana-leaf vegetarian meals & Srirangam Rava Dosa.\n` +
      `• 🍬 **Tirunelveli**: Warm Ghee Halwa from the legendary Iruttu Kadai.\n` +
      `• ☕ **Kumbakonam**: Authentic brass-davarah Degree Coffee.\n` +
      `• 🍫 **Ooty & Kodaikanal**: Fresh Homemade Chocolates, eucalyptus oils, and Nilgiri tea.\n\n` +
      `👉 Visit our **Restaurants** tab (\`/restaurants\`) to filter verified eateries by district, pure-veg, non-veg, and budget!`
    );
  }

  // =========================================================================
  // 12. HOTELS & ACCOMMODATIONS GENERAL DOUBTS
  // =========================================================================
  if (
    q.includes('hotel') || q.includes('resort') || q.includes('homestay') ||
    q.includes('room') || q.includes('thanga') || q.includes('stay') || q.includes('lodge')
  ) {
    return (
      `🏨 **Hotels & Accommodations on TN Tourism:**\n\n` +
      `• **Wide Selection**: Browse verified budget lodges (₹800–₹1,500), comfortable mid-range hotels (₹1,800–₹3,500), and luxury heritage resorts.\n` +
      `• **Direct Contact**: Every hotel listing includes verified phone numbers so you can call and book directly without middlemen commission!\n` +
      `• **Location Proximity**: Listings display exact distance from major tourist spots (e.g. 500m from Shore Temple, 1.2 km from Meenakshi Amman Temple).\n` +
      `• **Add Property**: Property owners can list their stays easily through the **Manager Portal**.\n\n` +
      `Visit the **Hotels** page (\`/hotels\`) to browse stays by district!`
    );
  }

  // =========================================================================
  // 13. FAMILY & KIDS RECOMMENDATIONS
  // =========================================================================
  if (q.includes('family') || q.includes('kids') || q.includes('family places') || q.includes('family trip')) {
    return (
      `👨‍👩‍👧‍👦 **Top Recommended Family Destinations in Tamil Nadu:**\n\n` +
      `1. ⛰️ **Ooty & Coonoor (Nilgiris)**: Cool climate, Government Botanical Gardens, UNESCO Toy Train, Boat House, and tea factory tours.\n` +
      `2. 🏖️ **Mahabalipuram & ECR Coast**: Beachside Shore Temple, Pancha Rathas, Crocodile Bank, and kid-friendly beach resorts.\n` +
      `3. 🌿 **Kodaikanal (Dindigul)**: Pedal boating on Kodai Lake, Bryant Park flower gardens, and scenic Pine Forests.\n` +
      `4. 🛕 **Tanjore & Trichy**: Brihadeeswarar Big Temple, Rockfort Ucchi Pillayar, and Kallanai Dam with family parks.\n` +
      `5. 🌊 **Rameshwaram & Dhanushkodi**: Pamban Sea Bridge, calm shallow waters, and Dr. APJ Abdul Kalam Memorial.\n\n` +
      `Use our **Trip Planner** to generate a comfortable family itinerary with relaxed timings!`
    );
  }

  // =========================================================================
  // 14. SPECIFIC DESTINATION MATCH IN TN_DATA (All Places with Relevance Scoring)
  // =========================================================================
  const genericWords = new Set(['beach', 'temple', 'kovil', 'falls', 'waterfalls', 'hill', 'hills', 'lake', 'park', 'fort', 'sanctuary', 'reserve', 'church', 'mosque', 'palace', 'viewpoint', 'dam', 'forest']);

  let matchedPlace = null;
  let highestScore = 0;

  for (const p of TN_DATA.places) {
    const pName = p.name.toLowerCase();
    let score = 0;

    // Full name match in query
    if (q.includes(pName)) {
      score += 100;
    } else {
      // Check distinctive name keywords (excluding common generic terms like 'temple', 'beach')
      const specificKeywords = pName.split(/[\s,.-]+/).filter(w => w.length > 3 && !genericWords.has(w));
      const matchedKeywords = specificKeywords.filter(w => q.includes(w));
      if (matchedKeywords.length > 0) {
        score += matchedKeywords.length * 35;
      }
    }

    if (p.attractions && p.attractions.some(a => a.length > 3 && q.includes(a.toLowerCase()))) {
      score += 25;
    }

    if (score > highestScore) {
      highestScore = score;
      matchedPlace = p;
    }
  }

  if (highestScore < 25) {
    matchedPlace = null;
  }

  if (matchedPlace) {
    let busInfo = matchedPlace.transport?.bus ? `• Bus: ${matchedPlace.transport.bus.station} (${matchedPlace.transport.bus.distance})` : '';
    let trainInfo = matchedPlace.transport?.train ? `• Train: ${matchedPlace.transport.train.station} (${matchedPlace.transport.train.distance})` : '';

    return (
      `📍 **${matchedPlace.name} (${matchedPlace.district} District)**\n\n` +
      `• 🏷️ **Category**: ${matchedPlace.categoryName || matchedPlace.category}\n` +
      `• ⭐ **Rating**: ${matchedPlace.rating} / 5 (${matchedPlace.ratingCount ? matchedPlace.ratingCount.toLocaleString() : 500}+ visitor ratings)\n` +
      `• 🕒 **Timings**: ${matchedPlace.openTime} – ${matchedPlace.closeTime}\n` +
      `• 🗓️ **Weekly Holiday**: ${matchedPlace.holiday || 'None (Open Daily)'}\n` +
      `• 🎟️ **Entry Fee**: ${matchedPlace.entryFee}\n` +
      `• ☀️ **Best Season**: ${matchedPlace.bestTime}\n\n` +
      `📖 **Overview**: ${matchedPlace.shortDesc}\n\n` +
      (matchedPlace.attractions && matchedPlace.attractions.length > 0 ? `✨ **Main Attractions**: ${matchedPlace.attractions.join(', ')}\n\n` : '') +
      (busInfo || trainInfo ? `🚆 **Transit Proximity**:\n${busInfo}\n${trainInfo}\n\n` : '') +
      `👉 View detailed route map, nearby hotels, eateries, and reviews on the **Tourist Places** page under ${matchedPlace.district}!`
    );
  }

  // =========================================================================
  // 15. DISTRICT-LEVEL QUERY (All 38 Districts)
  // =========================================================================
  const matchedDist = TN_DATA.districts.find(d => q.includes(d.toLowerCase()));
  if (matchedDist) {
    const distPlaces = TN_DATA.places.filter(p => p.district.toLowerCase() === matchedDist.toLowerCase());
    let placeListStr = distPlaces.slice(0, 5).map(p => `• **${p.name}** (${p.categoryName || p.category}) - ⭐ ${p.rating} | Entry: ${p.entryFee}`).join('\n');

    return (
      `🏛️ **Top Attractions in ${matchedDist} District:**\n\n` +
      `${placeListStr || 'Heritage sites, temples, and natural viewpoints.'}\n\n` +
      `💡 **Quick Travel Tips for ${matchedDist}**:\n` +
      `• Browse all ${distPlaces.length} destinations on our **Tourist Places** tab by selecting "${matchedDist}" in the district filter!\n` +
      `• You can also build an instant 1–5 day ${matchedDist} itinerary using our **Trip Planner**!`
    );
  }

  // =========================================================================
  // 16. CATEGORIES / THEMATIC SEARCH (Temples, Beaches, Hills, Waterfalls, etc.)
  // =========================================================================
  const catMatch = TN_DATA.categories.find(c => q.includes(c.id) || q.includes(c.name.toLowerCase()));
  if (catMatch || q.includes('temple') || q.includes('kovil') || q.includes('beach') || q.includes('hill') || q.includes('waterfall') || q.includes('falls') || q.includes('wildlife') || q.includes('lake')) {
    let catId = catMatch ? catMatch.id : (
      q.includes('temple') || q.includes('kovil') ? 'temples' :
      q.includes('beach') ? 'beaches' :
      q.includes('hill') ? 'hillstations' :
      q.includes('waterfall') || q.includes('falls') ? 'waterfalls' :
      q.includes('wildlife') || q.includes('forest') ? 'wildlife' : 'cultural'
    );

    let matchingPlaces = TN_DATA.places.filter(p => p.category === catId).slice(0, 5);
    if (matchingPlaces.length > 0) {
      let listStr = matchingPlaces.map(p => `• **${p.name}** (${p.district}) - ⭐ ${p.rating} | 🎟️ ${p.entryFee}`).join('\n');
      return (
        `✨ **Recommended ${catMatch ? catMatch.name : 'Destinations'} in Tamil Nadu:**\n\n` +
        `${listStr}\n\n` +
        `Explore all categories and filter attractions by your preferred travel theme under our **Categories** page (\`/categories\`)!`
      );
    }
  }

  // =========================================================================
  // 17. TICKET BOOKING & ENTRY FEES
  // =========================================================================
  if (q.includes('ticket') || q.includes('entry fee') || q.includes('booking') || q.includes('free entry') || q.includes('kattanam')) {
    return (
      `🎟️ **Ticket Fees & Booking Information on TN Tourism:**\n\n` +
      `• **Most Public & Temple Destinations**: Free entry! (e.g. Marina Beach, Meenakshi Amman Temple, Brihadeeswarar Temple, Dhanushkodi).\n` +
      `• **Heritage Monuments (ASI Sites)**: Nominal fee of ₹25–₹40 for Indian nationals (e.g. Shore Temple Mahabalipuram, Gingee Fort).\n` +
      `• **Gardens & Botanical Parks**: Nominal fee of ₹15–₹50 (e.g. Ooty Botanical Garden, Bryant Park).\n` +
      `• **Safari & Wildlife Reserves**: Forest department safaris range from ₹150 to ₹600 (e.g. Mudumalai, Anamalai).\n` +
      `• **Transport Bookings**: Book official government buses directly via SETC / TNSTC portal, or through verified private operators like RSR Travels listed on our **Travel & Transport** page!`
    );
  }

  // =========================================================================
  // 18. ABOUT THE WEBSITE & DEVELOPERS / SYSTEM
  // =========================================================================
  if (q.includes('who created') || q.includes('who made') || q.includes('about this website') || q.includes('admin') || q.includes('contact support')) {
    return (
      `🌐 **About Tamil Nadu Tourism Web Platform:**\n\n` +
      `This web portal is designed to showcase the vibrant culture, architectural marvels, hill retreats, and pristine coastlines of Tamil Nadu.\n\n` +
      `• **Comprehensive Database**: Covers all 38 districts with authentic timings, route maps, transport links, and local cuisines.\n` +
      `• **AI Assistant**: Provides real-time instant guidance in English and Tanglish for travelers and property owners.\n` +
      `• **Community Driven**: Allows local hotel and transport operators to register and connect directly with visitors.\n\n` +
      `For any technical support or property inquiries, please use our **Emergency & Help** directory or Manager Dashboard!`
    );
  }

  // =========================================================================
  // 19. INTELLIGENT FUZZY TOKEN FALLBACK (Never says "Information unavailable")
  // =========================================================================
  // Search if any words in the query match descriptions, names, or categories
  const words = q.split(/\s+/).filter(w => w.length > 3 && !['what', 'when', 'where', 'have', 'with', 'about', 'this', 'that', 'epdi', 'enna', 'enga', 'solla', 'kudu'].includes(w));
  
  if (words.length > 0) {
    const fuzzyMatches = TN_DATA.places.filter(p => {
      const fullText = `${p.name} ${p.district} ${p.shortDesc} ${p.longDesc || ''}`.toLowerCase();
      return words.some(w => fullText.includes(w));
    }).slice(0, 3);

    if (fuzzyMatches.length > 0) {
      let suggestions = fuzzyMatches.map(p => `• **${p.name}** (${p.district}) - ${p.shortDesc}`).join('\n\n');
      return (
        `🔍 **Here is what I found regarding "${raw}":**\n\n` +
        `${suggestions}\n\n` +
        `💡 Would you like more details on timings, transport routes, or a day trip plan for any of these places? Feel free to ask!`
      );
    }
  }

  // Comprehensive, friendly fallback with clear suggestions:
  return (
    `Vanakkam! 🙏 I am here to help you with any question or doubt regarding Tamil Nadu Tourism and our website features.\n\n` +
    `Here are some popular topics you can ask me about:\n` +
    `• 🗺️ **"3 days Ooty trip plan"** or **"Chengalpattu 2 days trip"** (Custom itinerary generation)\n` +
    `• 📍 **"Marina Beach timings"** or **"Meenakshi Temple entry fee"** (Place details)\n` +
    `• 🚌 **"RSR Travels details"** or **"Chennai to Ooty route"** (Transport operators & routes)\n` +
    `• 🏨 **"How to add my hotel"** or **"Manager dashboard"** (Property registration)\n` +
    `• 🚨 **"Emergency numbers"** (Police, ambulance & tourist safety helplines)\n` +
    `• 🍛 **"Madurai famous food"** (Culinary & dining recommendations)\n\n` +
    `Enna query venalum kelunga, I am ready to guide you!`
  );
}
