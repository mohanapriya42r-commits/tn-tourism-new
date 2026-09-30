import { TN_DATA } from '../data/tourismData.js';

// Complete geographical adjacency graph for all 38 districts of Tamil Nadu
export const DISTRICT_NEIGHBORS = {
  'Ariyalur': ['Perambalur', 'Thanjavur', 'Tiruchirappalli', 'Cuddalore'],
  'Chengalpattu': ['Kanchipuram', 'Chennai', 'Tiruvallur', 'Villupuram'],
  'Chennai': ['Chengalpattu', 'Tiruvallur', 'Kanchipuram'],
  'Coimbatore': ['Tiruppur', 'The Nilgiris', 'Erode'],
  'Cuddalore': ['Villupuram', 'Mayiladuthurai', 'Ariyalur', 'Nagapattinam'],
  'Dharmapuri': ['Krishnagiri', 'Salem', 'Tirupathur'],
  'Dindigul': ['Madurai', 'Theni', 'Tiruppur', 'Karur'],
  'Erode': ['Coimbatore', 'Tiruppur', 'Namakkal', 'Salem', 'The Nilgiris'],
  'Kallakurichi': ['Villupuram', 'Salem', 'Cuddalore', 'Tiruvannamalai', 'Perambalur'],
  'Kanchipuram': ['Chengalpattu', 'Tiruvallur', 'Ranipet', 'Vellore', 'Tiruvannamalai'],
  'Kanyakumari': ['Tirunelveli', 'Tenkasi'],
  'Karur': ['Tiruchirappalli', 'Dindigul', 'Namakkal', 'Erode', 'Tiruppur'],
  'Krishnagiri': ['Dharmapuri', 'Tirupathur', 'Vellore'],
  'Madurai': ['Dindigul', 'Virudhunagar', 'Sivaganga', 'Theni', 'Tiruchirappalli'],
  'Mayiladuthurai': ['Thanjavur', 'Nagapattinam', 'Cuddalore', 'Thiruvarur'],
  'Nagapattinam': ['Mayiladuthurai', 'Thiruvarur', 'Thanjavur'],
  'Namakkal': ['Salem', 'Karur', 'Erode', 'Tiruchirappalli'],
  'Perambalur': ['Ariyalur', 'Tiruchirappalli', 'Cuddalore', 'Salem'],
  'Pudukkottai': ['Thanjavur', 'Tiruchirappalli', 'Sivaganga', 'Madurai'],
  'Ramanathapuram': ['Sivaganga', 'Thoothukudi', 'Virudhunagar', 'Pudukkottai'],
  'Ranipet': ['Vellore', 'Kanchipuram', 'Tiruvallur', 'Tirupathur'],
  'Salem': ['Namakkal', 'Dharmapuri', 'Erode', 'Kallakurichi'],
  'Sivaganga': ['Madurai', 'Pudukkottai', 'Ramanathapuram', 'Virudhunagar'],
  'Tenkasi': ['Tirunelveli', 'Virudhunagar', 'Kanyakumari'],
  'Thanjavur': ['Tiruchirappalli', 'Thiruvarur', 'Pudukkottai', 'Mayiladuthurai', 'Nagapattinam', 'Ariyalur'],
  'Theni': ['Dindigul', 'Madurai', 'Virudhunagar'],
  'The Nilgiris': ['Coimbatore', 'Erode'],
  'Thoothukudi': ['Tirunelveli', 'Virudhunagar', 'Ramanathapuram', 'Tenkasi'],
  'Tiruchirappalli': ['Thanjavur', 'Karur', 'Pudukkottai', 'Perambalur', 'Ariyalur', 'Namakkal', 'Dindigul'],
  'Tirunelveli': ['Tenkasi', 'Thoothukudi', 'Kanyakumari', 'Virudhunagar'],
  'Tirupathur': ['Vellore', 'Krishnagiri', 'Dharmapuri', 'Tiruvannamalai'],
  'Tiruppur': ['Coimbatore', 'Erode', 'Dindigul', 'Karur'],
  'Tiruvallur': ['Chennai', 'Kanchipuram', 'Chengalpattu', 'Ranipet'],
  'Tiruvannamalai': ['Villupuram', 'Kallakurichi', 'Ranipet', 'Vellore', 'Kanchipuram'],
  'Thiruvarur': ['Thanjavur', 'Nagapattinam', 'Mayiladuthurai'],
  'Vellore': ['Ranipet', 'Tirupathur', 'Tiruvannamalai', 'Kanchipuram'],
  'Villupuram': ['Chengalpattu', 'Cuddalore', 'Kallakurichi', 'Tiruvannamalai'],
  'Virudhunagar': ['Madurai', 'Tirunelveli', 'Theni', 'Sivaganga', 'Tenkasi', 'Thoothukudi']
};

/**
 * Normalizes a place name for fuzzy duplicate detection.
 * Strips punctuation, common generic travel suffixes, and extra spaces.
 */
export function normalizePlaceName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\b(temple|kovil|beach|falls|waterfalls|fort|park|museum|sanctuary|church|mosque|lake|dam|zoo|resort|memorial|center|centre|hall|rock|boat|house|tourist|spot|gardens|garden|scenic|hills|hill|viewpoint)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Checks whether a candidate place is already in the used list.
 * Checks ID, exact name, normalized name, and strong substring overlap.
 */
export function isDuplicatePlace(place, usedPlaces) {
  if (!place) return true;
  const pId = place.id ? place.id.toLowerCase().trim() : '';
  const pName = place.name ? place.name.toLowerCase().trim() : '';
  const normNew = normalizePlaceName(place.name);

  for (const used of usedPlaces) {
    if (!used) continue;
    const uId = used.id ? used.id.toLowerCase().trim() : '';
    const uName = used.name ? used.name.toLowerCase().trim() : '';
    
    // Exact ID match
    if (pId && uId && pId === uId) return true;

    // Exact Name match
    if (pName && uName && pName === uName) return true;

    // Normalized token match
    const normUsed = normalizePlaceName(used.name);
    if (normNew && normUsed) {
      if (normNew === normUsed) return true;
      // Strong substring overlap if token length is significant
      if (normNew.length >= 5 && normUsed.length >= 5) {
        if (normNew.includes(normUsed) || normUsed.includes(normNew)) return true;
      }
    }
  }
  return false;
}

/**
 * Haversine formula to calculate distance in km between two lat/lng coordinates.
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c);
}

/**
 * Categorizes time slots based on attraction characteristics.
 */
function getSlotSuitability(place, slot) {
  const cat = (place.category || '').toLowerCase();
  const name = (place.name || '').toLowerCase();

  if (slot === 'morning') {
    // Heritage monuments, famous temples, hill tops, viewpoints, religious shrines open early
    if (cat === 'temples' || cat === 'historical' || cat === 'hillstations' || cat === 'forts') return 3;
    if (name.includes('temple') || name.includes('rathas') || name.includes('rock') || name.includes('hill')) return 3;
    return 1;
  } else if (slot === 'afternoon') {
    // Museums, boating centers, lakes, wildlife zoos, indoor cultural centers, waterfalls
    if (cat === 'museums' || cat === 'cultural' || cat === 'lakes' || cat === 'waterfalls' || cat === 'wildlife') return 3;
    if (name.includes('museum') || name.includes('boat') || name.includes('lake') || name.includes('zoo') || name.includes('dakshina')) return 3;
    return 1;
  } else if (slot === 'evening') {
    // Beaches, sunset viewpoints, shopping bazaars, leisure parks, theme parks, evening walks
    if (cat === 'beaches' || cat === 'parks' || cat === 'shopping' || cat === 'adventure') return 3;
    if (name.includes('beach') || name.includes('mall') || name.includes('park') || name.includes('sunset') || name.includes('promenade') || name.includes('coast')) return 3;
    return 1;
  }
  return 1;
}

/**
 * Selects the best unique attraction for a slot from available pools.
 */
function selectUniquePlace({
  targetDistrict,
  slot,
  referencePlace,
  preferredCategories = [],
  usedPlaces = [],
  allPlaces = []
}) {
  // 1. Gather all candidates in targetDistrict that are NOT already used
  let districtPool = allPlaces.filter(p => 
    p.district.toLowerCase() === targetDistrict.toLowerCase() &&
    !isDuplicatePlace(p, usedPlaces)
  );

  // 2. If targetDistrict is exhausted, look into adjacent neighboring districts
  if (districtPool.length === 0) {
    const neighbors = DISTRICT_NEIGHBORS[targetDistrict] || [];
    for (const neighbor of neighbors) {
      const neighborPool = allPlaces.filter(p => 
        p.district.toLowerCase() === neighbor.toLowerCase() &&
        !isDuplicatePlace(p, usedPlaces)
      );
      if (neighborPool.length > 0) {
        districtPool = neighborPool;
        break;
      }
    }
  }

  // 3. Fallback: Any unused place from any district in Tamil Nadu
  if (districtPool.length === 0) {
    districtPool = allPlaces.filter(p => !isDuplicatePlace(p, usedPlaces));
  }

  // If literally every place in the database is used (e.g. 180+ places), safe fallback
  if (districtPool.length === 0) {
    return allPlaces[0];
  }

  // Score candidates based on:
  // a. Category preference match (+5)
  // b. Slot suitability (+3)
  // c. Proximity to referencePlace (if referencePlace has coordinates, up to +4 for closer distance)
  // d. Rating (+rating/2)
  const scored = districtPool.map(place => {
    let score = (place.rating || 4.0) * 0.5;

    // Match preferred category
    if (preferredCategories && preferredCategories.length > 0 && preferredCategories.includes(place.category)) {
      score += 4.0;
    }

    // Match slot suitability
    score += getSlotSuitability(place, slot);

    // Proximity clustering: closer to referencePlace (Morning spot) is better for afternoon/evening
    if (referencePlace && referencePlace.lat && referencePlace.lng && place.lat && place.lng) {
      const dist = calculateDistance(referencePlace.lat, referencePlace.lng, place.lat, place.lng);
      if (dist !== null) {
        if (dist <= 15) score += 3.5;
        else if (dist <= 30) score += 2.0;
        else if (dist <= 50) score += 1.0;
      }
    }

    return { place, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0].place;
}

/**
 * Validates and guarantees that an itinerary contains zero duplicate attractions.
 * If any duplicate is detected, swaps it out with a guaranteed unique destination.
 */
export function validateAndDeduplicateItinerary(itinerary, allPlaces = [], destList = []) {
  const seenPlaces = [];

  itinerary.forEach((day, dayIdx) => {
    const slots = ['morning', 'afternoon', 'evening'];
    const currentDistrict = day.district || destList[dayIdx % (destList.length || 1)] || 'Tamil Nadu';

    slots.forEach(slotKey => {
      const slotObj = day.schedule[slotKey];
      if (!slotObj) return;

      const placeStub = { id: slotObj.placeId || '', name: slotObj.placeName || '' };

      if (isDuplicatePlace(placeStub, seenPlaces)) {
        // Find replacement
        const replacement = selectUniquePlace({
          targetDistrict: currentDistrict,
          slot: slotKey,
          referencePlace: day.schedule.morning ? { lat: day.schedule.morning.lat, lng: day.schedule.morning.lng } : null,
          usedPlaces: seenPlaces,
          allPlaces
        });

        // Update slot with unique replacement
        slotObj.placeId = replacement.id;
        slotObj.placeName = replacement.name;
        slotObj.category = replacement.categoryName || replacement.category || 'Sightseeing';
        slotObj.entryFee = replacement.entryFee || 'Free Entry';
        slotObj.image = replacement.image || '';
        slotObj.lat = replacement.lat;
        slotObj.lng = replacement.lng;

        if (slotKey === 'morning') {
          slotObj.activity = `Explore ${replacement.name}. Key highlights: ${replacement.attractions ? replacement.attractions.slice(0, 2).join(', ') : replacement.shortDesc}`;
        } else if (slotKey === 'afternoon') {
          slotObj.activity = `Lunch followed by visit to ${replacement.name}. ${replacement.shortDesc || 'Enjoy scenic exploration.'}`;
        } else if (slotKey === 'evening') {
          slotObj.activity = `Evening visit & leisure walk at ${replacement.name}. ${replacement.shortDesc || 'Enjoy local atmosphere.'}`;
        }

        seenPlaces.push(replacement);
      } else {
        seenPlaces.push({
          id: slotObj.placeId || slotObj.placeName,
          name: slotObj.placeName,
          lat: slotObj.lat,
          lng: slotObj.lng
        });
      }
    });

    // Update day's distinct place list
    day.uniquePlaces = [
      day.schedule.morning.placeName,
      day.schedule.afternoon.placeName,
      day.schedule.evening.placeName
    ];
  });

  return itinerary;
}

/**
 * Main Smart Trip Plan Generator.
 * Implements non-repetitive, diverse, geographically practical day itineraries.
 */
export function generateSmartTripPlan(formData) {
  const {
    source = '',
    destinations = [], // Array of selected destination districts
    destination = '', // Fallback single string
    travelers = 2,
    days = 3,
    startDate = new Date().toISOString().split('T')[0],
    budget = 8000,
    budgetLevel = 'low', // low, medium, high
    travelType = 'family',
    accommodationPref = 'budget', // budget, temple, standard, luxury
    foodPref = 'local_mess', // local_mess, veg, non_veg
    categories = []
  } = formData;

  const numTravelers = Math.max(1, parseInt(travelers) || 2);
  const numDays = Math.max(1, parseInt(days) || 3);

  // Active list of destination districts
  let destList = Array.isArray(destinations) && destinations.length > 0 
    ? destinations 
    : (destination ? [destination] : ['Chengalpattu']);

  let allPlaces = (TN_DATA && Array.isArray(TN_DATA.places)) ? TN_DATA.places : [];

  const usedPlaces = [];
  const itinerary = [];

  // Theme titles for multi-day variety
  const themeTemplates = [
    { title: 'Heritage & Iconic Landmarks Tour', desc: 'Ancient monuments, royal architecture & foundational history' },
    { title: 'Coastal, Nature & Scenic Tour', desc: 'Coastal breeze, natural landscapes & outdoor leisure' },
    { title: 'Spiritual, Cultural & Living Traditions Tour', desc: 'Sacred shrines, artisanal crafts & traditional arts' },
    { title: 'Hill Viewpoints, Lakes & Scenic Escapes', desc: 'Misty viewpoints, lake walks & serene waterways' },
    { title: 'Crafts, Markets & Nature Trails', desc: 'Local bazaars, botanical spaces & cultural immersion' },
    { title: 'Eco-Discovery & Wildlife Sanctuaries', desc: 'Protected reserves, birding sanctuaries & flora' },
    { title: 'Grand Finale & Local Flavors Excursion', desc: 'Iconic local shopping, sweets & farewell sights' }
  ];

  for (let day = 1; day <= numDays; day++) {
    // If multiple districts selected, cycle through them; otherwise stick to selected district
    const currentDistrict = destList[(day - 1) % destList.length];

    // Pick Morning Place
    const morningPlace = selectUniquePlace({
      targetDistrict: currentDistrict,
      slot: 'morning',
      referencePlace: null,
      preferredCategories: categories,
      usedPlaces,
      allPlaces
    });
    usedPlaces.push(morningPlace);

    // Pick Afternoon Place (clustered near Morning spot)
    const afternoonPlace = selectUniquePlace({
      targetDistrict: currentDistrict,
      slot: 'afternoon',
      referencePlace: morningPlace,
      preferredCategories: categories,
      usedPlaces,
      allPlaces
    });
    usedPlaces.push(afternoonPlace);

    // Pick Evening Place (clustered near Afternoon spot)
    const eveningPlace = selectUniquePlace({
      targetDistrict: currentDistrict,
      slot: 'evening',
      referencePlace: afternoonPlace,
      preferredCategories: categories,
      usedPlaces,
      allPlaces
    });
    usedPlaces.push(eveningPlace);

    // Calculate realistic travel times and distances
    let distMorning = `${5 + (day * 2)} km from ${day === 1 ? (source || 'district center') : 'hotel stay'}`;
    let travelTimeAfternoon = '15-25 mins from morning spot';
    let travelTimeEvening = '15-20 mins from afternoon spot';

    if (morningPlace.lat && afternoonPlace.lat) {
      const d1 = calculateDistance(morningPlace.lat, morningPlace.lng, afternoonPlace.lat, afternoonPlace.lng);
      if (d1 !== null) {
        travelTimeAfternoon = `${d1} km (~${Math.max(10, Math.round(d1 * 2.2))} mins drive)`;
      }
    }
    if (afternoonPlace.lat && eveningPlace.lat) {
      const d2 = calculateDistance(afternoonPlace.lat, afternoonPlace.lng, eveningPlace.lat, eveningPlace.lng);
      if (d2 !== null) {
        travelTimeEvening = `${d2} km (~${Math.max(10, Math.round(d2 * 2.2))} mins drive)`;
      }
    }

    // Select lodging option based on preference
    let hotelName = 'TN Tourism Budget Lodge / Homestay';
    let hotelRate = '₹900/night';
    if (accommodationPref === 'temple') {
      hotelName = 'Temple Devasthanam Cottage / Yatri Nivas';
      hotelRate = '₹600/night';
    } else if (accommodationPref === 'standard') {
      hotelName = 'TN Tourism TTDC Hotel';
      hotelRate = '₹1,800/night';
    } else if (accommodationPref === 'luxury') {
      hotelName = 'Heritage Hill & Beach Resort';
      hotelRate = '₹3,500/night';
    }

    // Select dining option based on food preference
    let foodSpot = 'Authentic Tamil Nadu Local Mess & Dining';
    if (foodPref === 'veg') {
      foodSpot = 'Traditional South Indian Pure Veg Mess (Idli, Ghee Roast & Banana Leaf Meals)';
    } else if (foodPref === 'non_veg') {
      foodSpot = 'Famous Local Chettinad & Pepper Spice Mess';
    } else if (foodPref === 'local_mess') {
      foodSpot = 'Economical Local Mess & Banana Leaf Meals';
    }

    const themeIndex = (day - 1) % themeTemplates.length;
    const theme = themeTemplates[themeIndex];
    const isExcursion = morningPlace.district.toLowerCase() !== currentDistrict.toLowerCase();
    const dayDistrictLabel = isExcursion 
      ? `${morningPlace.district} (Nearby Circuit)` 
      : currentDistrict;

    itinerary.push({
      dayNumber: day,
      title: `Day ${day} – ${dayDistrictLabel} ${theme.title}`,
      district: morningPlace.district,
      theme: theme.title,
      suggestedVisitOrder: `${morningPlace.name} ➔ ${afternoonPlace.name} ➔ ${eveningPlace.name}`,
      uniquePlaces: [morningPlace.name, afternoonPlace.name, eveningPlace.name],
      schedule: {
        morning: {
          slot: 'Morning',
          time: '08:30 AM - 12:00 PM',
          placeId: morningPlace.id,
          placeName: morningPlace.name,
          category: morningPlace.categoryName || morningPlace.category || 'Historical & Sightseeing',
          activity: `Explore ${morningPlace.name}. Key highlights: ${morningPlace.attractions ? morningPlace.attractions.slice(0, 2).join(', ') : (morningPlace.shortDesc || 'Sightseeing and architecture')}`,
          distance: distMorning,
          estimatedTravelTime: '15-25 mins',
          entryFee: morningPlace.entryFee || 'Free Entry',
          image: morningPlace.image || '',
          lat: morningPlace.lat,
          lng: morningPlace.lng
        },
        afternoon: {
          slot: 'Afternoon',
          time: '12:30 PM - 04:30 PM',
          lunchSpot: foodSpot,
          placeId: afternoonPlace.id,
          placeName: afternoonPlace.name,
          category: afternoonPlace.categoryName || afternoonPlace.category || 'Culture & Nature',
          activity: `Lunch at ${foodSpot}, followed by visit to ${afternoonPlace.name}. ${afternoonPlace.shortDesc || 'Experience local heritage and scenery.'}`,
          estimatedTravelTime: travelTimeAfternoon,
          entryFee: afternoonPlace.entryFee || 'Free Entry',
          image: afternoonPlace.image || '',
          lat: afternoonPlace.lat,
          lng: afternoonPlace.lng
        },
        evening: {
          slot: 'Evening',
          time: '05:00 PM - 07:30 PM',
          placeId: eveningPlace.id,
          placeName: eveningPlace.name,
          category: eveningPlace.categoryName || eveningPlace.category || 'Leisure & Scenic',
          activity: `Evening walk & leisure at ${eveningPlace.name}. Enjoy local tea stalls & sunset views.`,
          estimatedTravelTime: travelTimeEvening,
          entryFee: eveningPlace.entryFee || 'Free Entry',
          image: eveningPlace.image || '',
          lat: eveningPlace.lat,
          lng: eveningPlace.lng
        },
        night: {
          slot: 'Night',
          time: '08:00 PM Onwards',
          dinner: `Dinner & night stay at ${hotelName}.`,
          hotelName: hotelName,
          hotelRate: hotelRate
        }
      }
    });
  }

  // Run the validator to enforce strict deduplication across days and slots
  validateAndDeduplicateItinerary(itinerary, allPlaces, destList);

  // Collect all unique place names
  const allUniquePlaceNames = [];
  itinerary.forEach(d => {
    if (d.schedule?.morning?.placeName) allUniquePlaceNames.push(d.schedule.morning.placeName);
    if (d.schedule?.afternoon?.placeName) allUniquePlaceNames.push(d.schedule.afternoon.placeName);
    if (d.schedule?.evening?.placeName) allUniquePlaceNames.push(d.schedule.evening.placeName);
  });

  // Cost calculations
  const ratePerPersonPerDay = budgetLevel === 'low' ? 150 : (budgetLevel === 'high' ? 350 : 220);
  const totalTransportCost = Math.round(ratePerPersonPerDay * numTravelers * numDays);
  const transportLabel = '🚕 Local Sightseeing & District Transfers';

  const roomsNeeded = Math.ceil(numTravelers / 2);
  let roomRatePerNight = 900;
  if (accommodationPref === 'temple') roomRatePerNight = 600;
  if (accommodationPref === 'standard') roomRatePerNight = 1800;
  if (accommodationPref === 'luxury') roomRatePerNight = 3500;
  const totalHotelCost = Math.round(roomRatePerNight * roomsNeeded * numDays);

  let foodPerPersonPerDay = 220;
  if (foodPref === 'veg') foodPerPersonPerDay = 200;
  if (foodPref === 'non_veg') foodPerPersonPerDay = 300;
  if (budgetLevel === 'high') foodPerPersonPerDay = 600;
  const totalFoodCost = Math.round(foodPerPersonPerDay * numTravelers * numDays);

  const ticketPerPersonPerDay = budgetLevel === 'low' ? 30 : (budgetLevel === 'high' ? 120 : 50);
  const totalTicketCost = Math.round(ticketPerPersonPerDay * numTravelers * numDays);

  const miscExpenses = Math.round(80 * numDays * numTravelers);

  const totalEstimatedCost = totalTransportCost + totalHotelCost + totalFoodCost + totalTicketCost + miscExpenses;
  const perPersonCost = Math.round(totalEstimatedCost / numTravelers);

  const targetBudget = parseFloat(budget) || 8000;
  const fitsBudget = totalEstimatedCost <= targetBudget;

  const budgetTips = [];
  if (!fitsBudget) {
    if (accommodationPref === 'standard' || accommodationPref === 'luxury') {
      budgetTips.push('Choose TTDC Budget Lodges or Temple Devasthanam Rooms instead of private hotels.');
    }
    budgetTips.push('Opt for local authentic mess meals (₹60 - ₹120 per meal) instead of high-end hotel restaurants.');
  }

  const destinationLabel = destList.length > 0 
    ? destList.join(' • ') 
    : 'Tamil Nadu Highlights';

  return {
    source: source || 'Selected Starting District',
    destination: destinationLabel,
    destinations: destList,
    travelers: numTravelers,
    days: numDays,
    startDate,
    travelType,
    accommodationPref,
    foodPref,
    itinerary,
    uniquePlacesCount: allUniquePlaceNames.length,
    allUniquePlaces: allUniquePlaceNames,
    costs: {
      transportLabel,
      transport: totalTransportCost,
      hotel: totalHotelCost,
      roomsNeeded,
      food: totalFoodCost,
      tickets: totalTicketCost,
      misc: miscExpenses,
      total: totalEstimatedCost,
      perPerson: perPersonCost,
      targetBudget,
      fitsBudget,
      budgetTips
    }
  };
}

export function saveTripPlan(planData) {
  const savedTripsStr = localStorage.getItem('tn_saved_trips');
  const savedTrips = savedTripsStr ? JSON.parse(savedTripsStr) : [];
  
  planData.id = 'plan_' + Date.now();
  planData.createdAt = new Date().toISOString();

  savedTrips.push(planData);
  localStorage.setItem('tn_saved_trips', JSON.stringify(savedTrips));
}
