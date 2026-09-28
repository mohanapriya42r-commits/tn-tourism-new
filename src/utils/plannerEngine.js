import { TN_DATA } from '../data/tourismData.js';

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

  // Determine active list of selected destination districts
  let destList = Array.isArray(destinations) && destinations.length > 0 
    ? destinations 
    : (destination ? [destination] : []);

  let allPlaces = TN_DATA ? TN_DATA.places : [];

  // Filter places based on selected destination district(s) & category preferences
  let filteredPlaces = allPlaces.filter(p => {
    const matchDistrict = destList.length === 0 || destList.some(d => p.district.toLowerCase() === d.toLowerCase());
    const matchCategory = !categories || categories.length === 0 || categories.includes(p.category);
    return matchDistrict && matchCategory;
  });

  if (filteredPlaces.length === 0 && destList.length > 0) {
    filteredPlaces = allPlaces.filter(p => destList.some(d => p.district.toLowerCase() === d.toLowerCase()));
  }
  if (filteredPlaces.length === 0) {
    filteredPlaces = allPlaces;
  }

  const usedPlaceIds = new Set();
  
  // Helper to pick unique place for a given target district
  function pickPlaceForDistrict(targetDistrict) {
    let pool = filteredPlaces;
    if (targetDistrict) {
      pool = filteredPlaces.filter(p => p.district.toLowerCase() === targetDistrict.toLowerCase());
      if (pool.length === 0) {
        pool = allPlaces.filter(p => p.district.toLowerCase() === targetDistrict.toLowerCase());
      }
    }
    if (pool.length === 0) pool = filteredPlaces;

    const unused = pool.filter(p => !usedPlaceIds.has(p.id));
    if (unused.length > 0) {
      const selected = unused[0];
      usedPlaceIds.add(selected.id);
      return selected;
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    const selected = pool[randomIndex] || pool[0];
    return selected;
  }

  const itinerary = [];

  for (let day = 1; day <= days; day++) {
    // If multiple destination districts are selected, rotate/distribute them across days
    const currentDistrict = destList.length > 0 
      ? destList[(day - 1) % destList.length] 
      : null;

    const morningPlace = pickPlaceForDistrict(currentDistrict);
    const afternoonPlace = pickPlaceForDistrict(currentDistrict);
    const eveningPlace = pickPlaceForDistrict(currentDistrict);

    // Select lodging option based on preference
    let hotelName = 'TN Tourism Budget Lodge / Homestay';
    let hotelRate = '₹900/night';
    if (accommodationPref === 'temple') {
      hotelName = 'Temple Devasthanam Cottage / Lodge';
      hotelRate = '₹600/night';
    } else if (accommodationPref === 'standard') {
      hotelName = 'TN Tourism TTDC Hotel';
      hotelRate = '₹1,800/night';
    } else if (accommodationPref === 'luxury') {
      hotelName = 'Heritage Hill Resort';
      hotelRate = '₹3,500/night';
    }

    // Select dining option based on food preference
    let foodSpot = 'Authentic Tamil Nadu Local Mess & Dining';
    if (foodPref === 'veg') {
      foodSpot = 'Traditional South Indian Pure Veg Mess (Idli, Dosa & Meals)';
    } else if (foodPref === 'non_veg') {
      foodSpot = 'Famous Local Chettinad & Pepper Spice Mess';
    } else if (foodPref === 'local_mess') {
      foodSpot = 'Economical Local Mess & Banana Leaf Dining';
    }

    const dayDistrictLabel = currentDistrict || morningPlace.district || 'Tamil Nadu';

    itinerary.push({
      dayNumber: day,
      title: `Day ${day} – ${dayDistrictLabel} Tour`,
      district: dayDistrictLabel,
      schedule: {
        morning: {
          time: '08:30 AM - 12:00 PM',
          placeName: morningPlace.name,
          category: morningPlace.categoryName || morningPlace.category || 'Sightseeing',
          activity: `Explore ${morningPlace.name}. Key highlights: ${morningPlace.attractions ? morningPlace.attractions.slice(0, 2).join(', ') : morningPlace.shortDesc}`,
          distance: `${4 + (day * 2)} km from ${day === 1 ? (source || 'city center') : 'lodging'}`,
          estimatedTravelTime: '15-25 mins',
          entryFee: morningPlace.entryFee || 'Free Entry',
          image: morningPlace.image || ''
        },
        afternoon: {
          time: '12:30 PM - 04:30 PM',
          lunchSpot: foodSpot,
          placeName: afternoonPlace.name,
          category: afternoonPlace.categoryName || afternoonPlace.category || 'Heritage & Nature',
          activity: `Lunch at ${foodSpot}, followed by visit to ${afternoonPlace.name}. Enjoy local scenery.`,
          estimatedTravelTime: '20 mins from morning spot',
          entryFee: afternoonPlace.entryFee || 'Free Entry',
          image: afternoonPlace.image || ''
        },
        evening: {
          time: '05:00 PM - 07:30 PM',
          placeName: eveningPlace.name,
          category: eveningPlace.categoryName || eveningPlace.category || 'Shopping & Leisure',
          activity: `Evening walk & leisure at ${eveningPlace.name}. Enjoy local tea stalls & sunset views.`,
          estimatedTravelTime: '15 mins',
          entryFee: eveningPlace.entryFee || 'Free Entry',
          image: eveningPlace.image || ''
        },
        night: {
          time: '08:00 PM Onwards',
          dinner: `Dinner & night stay at ${hotelName}.`,
          hotelName: hotelName,
          hotelRate: hotelRate
        }
      }
    });
  }

  // Cost calculations (Simplified local sightseeing & transfers without asking user for transport details)
  const ratePerPersonPerDay = budgetLevel === 'low' ? 150 : (budgetLevel === 'high' ? 350 : 220);
  const totalTransportCost = Math.round(ratePerPersonPerDay * travelers * days);
  const transportLabel = '🚕 Local Sightseeing & District Transfers';

  const roomsNeeded = Math.ceil(travelers / 2);
  let roomRatePerNight = 900;
  if (accommodationPref === 'temple') roomRatePerNight = 600;
  if (accommodationPref === 'standard') roomRatePerNight = 1800;
  if (accommodationPref === 'luxury') roomRatePerNight = 3500;
  const totalHotelCost = Math.round(roomRatePerNight * roomsNeeded * days);

  let foodPerPersonPerDay = 220; // affordable local mess
  if (foodPref === 'veg') foodPerPersonPerDay = 200;
  if (foodPref === 'non_veg') foodPerPersonPerDay = 300;
  if (budgetLevel === 'high') foodPerPersonPerDay = 600;
  const totalFoodCost = Math.round(foodPerPersonPerDay * travelers * days);

  const ticketPerPersonPerDay = budgetLevel === 'low' ? 30 : (budgetLevel === 'high' ? 120 : 50);
  const totalTicketCost = Math.round(ticketPerPersonPerDay * travelers * days);

  const miscExpenses = Math.round(80 * days * travelers);

  const totalEstimatedCost = totalTransportCost + totalHotelCost + totalFoodCost + totalTicketCost + miscExpenses;
  const perPersonCost = Math.round(totalEstimatedCost / travelers);

  const targetBudget = parseFloat(budget) || 8000;
  const fitsBudget = totalEstimatedCost <= targetBudget;

  // Budget suggestion advisory if total exceeds budget
  let budgetTips = [];
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
    travelers: Number(travelers),
    days: Number(days),
    startDate,
    travelType,
    accommodationPref,
    foodPref,
    itinerary,
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
