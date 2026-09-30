const fs = require('fs');
const path = require('path');

const newChengalpattuPlaces = [
  {
    id: "tn_pancha_rathas",
    name: "Pancha Rathas (Five Rathas)",
    district: "Chengalpattu",
    category: "historical",
    categoryName: "Historical & Heritage",
    rating: 4.8,
    ratingCount: 5200,
    entryFee: "₹40 (Combined ASI Ticket)",
    openTime: "06:00 AM",
    closeTime: "06:00 PM",
    holiday: "None",
    bestTime: "October to March",
    shortDesc: "UNESCO World Heritage monolithic rock-cut temples shaped like ceremonial chariots carved out of pink granite during the 7th-century Pallava dynasty.",
    longDesc: "Pancha Rathas is a monument complex at Mahabalipuram on the Coromandel Coast. Dating from the late 7th century, the five structures named after the Pandavas and Draupadi are carved from single monolithic granite boulders with life-size elephant and lion stone sculptures.",
    attractions: [
      "Dharmaraja Ratha",
      "Bhima Ratha",
      "Arjuna Ratha",
      "Draupadi Ratha",
      "Nakula Sahadeva Ratha",
      "Monolithic Elephant Sculpture"
    ],
    history: "Carved during the reign of King Narasimhavarman I (Mahamalla) of the Pallava dynasty between 630 and 668 AD.",
    lat: 12.6152,
    lng: 80.1927,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pancha_Rathas%2C_Mamallapuram_01.jpg/800px-Pancha_Rathas%2C_Mamallapuram_01.jpg",
    transport: {
      bus: { available: "Regular buses from Chennai & Chengalpattu", station: "Mahabalipuram Bus Stand", distance: "1 km" },
      train: { station: "Chengalpattu Junction (CGL)", distance: "29 km" },
      taxi: { options: "Local Taxis, Autos & ECR Cabs" }
    }
  },
  {
    id: "tn_arjunas_penance",
    name: "Arjuna's Penance & Krishna's Butter Ball",
    district: "Chengalpattu",
    category: "historical",
    categoryName: "Historical & Heritage",
    rating: 4.8,
    ratingCount: 6800,
    entryFee: "Free (Grounds View)",
    openTime: "06:00 AM",
    closeTime: "06:00 PM",
    holiday: "None",
    bestTime: "October to March",
    shortDesc: "World's largest open-air stone bas-relief depicting the Descent of the Ganges and the iconic 250-ton gravity-defying boulder Krishna's Butter Ball.",
    longDesc: "Arjuna's Penance is an immense open-air bas-relief carved on two monolithic rock boulders measuring 96 by 43 feet. Beside it sits Krishna's Butter Ball, a colossal 250-ton granite boulder perched on a 45-degree slippery rock slope where it has stood unmoved for over 1,200 years.",
    attractions: [
      "Descent of the Ganges Relief",
      "Krishna's Butter Ball",
      "Panchapandava Cave",
      "Ganesha Ratha",
      "Lighthouse View"
    ],
    history: "Created in the mid-7th century under the Pallava ruler Narasimhavarman I.",
    lat: 12.6186,
    lng: 80.1925,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Krishna%27s_Butterball_2019.jpg/800px-Krishna%27s_Butterball_2019.jpg",
    transport: {
      bus: { available: "Buses from Chennai CMBT & Chengalpattu", station: "Mahabalipuram Stand", distance: "0.5 km" },
      train: { station: "Chengalpattu Junction", distance: "29 km" },
      taxi: { options: "Uber, Ola, Local Taxis" }
    }
  },
  {
    id: "tn_dakshinachitra",
    name: "DakshinaChitra Living Heritage Museum",
    district: "Chengalpattu",
    category: "cultural",
    categoryName: "Cultural & Heritage",
    rating: 4.7,
    ratingCount: 4500,
    entryFee: "₹175 (Adults)",
    openTime: "10:00 AM",
    closeTime: "06:00 PM",
    holiday: "Tuesday",
    bestTime: "Year Round",
    shortDesc: "Renowned open-air living history museum showcasing the authentic architecture, crafts, performing arts, and lifestyle of South India on the ECR coast.",
    longDesc: "DakshinaChitra is an exciting cross-cultural living museum that houses 18 authentic heritage houses from Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, with working artisans, glassblowers, folk performers, and traditional weavers.",
    attractions: [
      "Traditional South Indian Heritage Homes",
      "Folk Dance & Music Performances",
      "Artisan Workshops & Pottery",
      "Textile Weaving Center",
      "South Indian Cuisine Cafe"
    ],
    history: "Founded in 1996 by the Madras Craft Foundation led by Deborah Thiagarajan.",
    lat: 12.8222,
    lng: 80.2415,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dakshinachitra_chennai.jpg/800px-Dakshinachitra_chennai.jpg",
    transport: {
      bus: { available: "MTC buses along ECR (109, 588, 599)", station: "Muttukadu / DakshinaChitra Stop", distance: "0.1 km" },
      train: { station: "Tambaram Station", distance: "25 km" },
      taxi: { options: "ECR Cabs, Autos & Rental Cars" }
    }
  },
  {
    id: "tn_mgm_dizzee_world",
    name: "MGM Dizzee World",
    district: "Chengalpattu",
    category: "adventure",
    categoryName: "Theme Parks & Adventure",
    rating: 4.5,
    ratingCount: 6100,
    entryFee: "₹699 (Unlimited Rides)",
    openTime: "10:30 AM",
    closeTime: "06:30 PM",
    holiday: "None",
    bestTime: "September to March",
    shortDesc: "One of Tamil Nadu's most popular amusement and water theme parks, offering exciting family rides, water slides, and recreational activities.",
    longDesc: "MGM Dizzee World on the East Coast Road is a landmark theme park offering world-class roller coasters, water log flumes, wave pools, carousel rides, and musical family attractions set amidst landscaped gardens.",
    attractions: [
      "Roller Coasters & Big Wheel",
      "Water World Wave Pool",
      "Jurong's Bird Show & Aviary",
      "Family Thrill Rides",
      "Carnival Games & Food Courts"
    ],
    history: "Established in 1993 as one of Tamil Nadu's pioneer theme parks on the ECR corridor.",
    lat: 12.8290,
    lng: 80.2405,
    image: "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=600&q=80",
    transport: {
      bus: { available: "ECR route buses from Chennai & Kovalam", station: "MGM Stop", distance: "0.2 km" },
      train: { station: "Chengalpattu Junction", distance: "32 km" },
      taxi: { options: "Call Taxis, ECR Cabs" }
    }
  },
  {
    id: "tn_croc_bank",
    name: "Madras Crocodile Bank Trust",
    district: "Chengalpattu",
    category: "wildlife",
    categoryName: "Wildlife & Nature",
    rating: 4.6,
    ratingCount: 5800,
    entryFee: "₹100 (Adults)",
    openTime: "09:00 AM",
    closeTime: "05:30 PM",
    holiday: "Monday",
    bestTime: "October to March",
    shortDesc: "Leading reptile zoo and herpetology research center housing endangered crocodiles, alligators, turtles, and venomous snakes.",
    longDesc: "Founded by herpetologist Romulus Whitaker in 1976 to protect India's three endangered crocodile species: the Mugger, Saltwater Crocodile, and Gharial. Today it is one of the world's largest reptile zoological parks with night safaris and underwater gharial viewing.",
    attractions: [
      "Mugger & Saltwater Crocodiles",
      "Endangered Gharial Breeding Center",
      "Komodo Dragon Enclosure",
      "Irula Snake Venom Extraction Show",
      "Underwater Crocodile Viewing Gallery"
    ],
    history: "Established in 1976 by Romulus Whitaker and Zai Whitaker.",
    lat: 12.7547,
    lng: 80.2392,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Crocodile_Bank_Chennai.jpg/800px-Crocodile_Bank_Chennai.jpg",
    transport: {
      bus: { available: "All ECR buses between Chennai and Mahabalipuram", station: "Crocodile Bank Stop", distance: "0.1 km" },
      train: { station: "Chengalpattu Junction", distance: "28 km" },
      taxi: { options: "ECR Taxis & Auto Rickshaws" }
    }
  },
  {
    id: "tn_sadras_fort",
    name: "Sadras Dutch Fort",
    district: "Chengalpattu",
    category: "historical",
    categoryName: "Historical & Heritage",
    rating: 4.4,
    ratingCount: 1900,
    entryFee: "Free",
    openTime: "08:00 AM",
    closeTime: "05:30 PM",
    holiday: "None",
    bestTime: "November to February",
    shortDesc: "Historic 17th-century fortress established by the Dutch East India Company on the Coromandel coast near Kalpakkam.",
    longDesc: "Sadras Fort is a 17th-century coastal fortress built by the Dutch for muslin weaving trade. The archaeological site features defensive brick ramparts, an ancient granary, canons, and a cemetery with beautifully carved Dutch coat of arms epitaphs.",
    attractions: [
      "17th-century Dutch Ramparts & Bastions",
      "Ancient Granary & Watchtowers",
      "Dutch Cemetery with Carved Epitaphs",
      "Historic Cannons",
      "Quiet Coromandel Beachfront"
    ],
    history: "Built by the Dutch East India Company in 1612 AD for commercial textile trade.",
    lat: 12.5186,
    lng: 80.1601,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sadras_Fort_Ruins.jpg/800px-Sadras_Fort_Ruins.jpg",
    transport: {
      bus: { available: "Buses from Kalpakkam & Mahabalipuram", station: "Sadras Bus Stop", distance: "0.5 km" },
      train: { station: "Chengalpattu Junction", distance: "34 km" },
      taxi: { options: "Local Taxis & Autos" }
    }
  },
  {
    id: "tn_thiruneermalai",
    name: "Thiruneermalai Ranganatha Perumal Temple",
    district: "Chengalpattu",
    category: "temples",
    categoryName: "Temples & Religious Places",
    rating: 4.7,
    ratingCount: 3800,
    entryFee: "Free",
    openTime: "06:30 AM",
    closeTime: "08:00 PM",
    holiday: "None",
    bestTime: "October to March",
    shortDesc: "Famous 108 Divya Desam temple situated atop a rocky hillock, dedicated to Lord Vishnu in four distinct postures.",
    longDesc: "Thiruneermalai Ranganatha Perumal Temple is a celebrated Vaishnavite shrine situated on a prominent hill. The temple is unique as it enshrines Lord Vishnu in standing, sitting, reclining, and walking postures across hill-base and hilltop shrines.",
    attractions: [
      "108 Divya Desam Hilltop Shrine",
      "Neervanna Perumal Base Temple",
      "Panoramic Views of Pallavaram Hills",
      "Sacred Temple Tank (Ksheera Pushkarini)",
      "Ancient Dravidian Gopuram"
    ],
    history: "Associated with 8th-century Alvar saints Bhoothathalvar and Thirumangai Alvar.",
    lat: 12.9592,
    lng: 80.1147,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thiruneermalai_Temple_Hill.jpg/800px-Thiruneermalai_Temple_Hill.jpg",
    transport: {
      bus: { available: "Frequent buses from Pallavaram & Tambaram", station: "Thiruneermalai Stand", distance: "0.3 km" },
      train: { station: "Pallavaram Suburban Railway Station", distance: "4 km" },
      taxi: { options: "City Taxis, Autos & Ride Shares" }
    }
  }
];

const newCoimbatorePlaces = [
  {
    id: "tn_perur_temple",
    name: "Perur Pateeswarar Temple",
    district: "Coimbatore",
    category: "temples",
    categoryName: "Temples & Religious Places",
    rating: 4.8,
    ratingCount: 6400,
    entryFee: "Free",
    openTime: "06:00 AM",
    closeTime: "08:30 PM",
    holiday: "None",
    bestTime: "Year Round",
    shortDesc: "Ancient 2nd-century Shaivite temple built by Karikala Chola with magnificent golden hall (Kanaka Sabha) and stone filigree carvings.",
    longDesc: "Perur Pateeswarar Temple on the banks of Noyyal River is one of the most venerable Shiva temples in Kongu Nadu. It is renowned for its Kanaka Sabha (Golden Hall) featuring exquisite stone pillars carved with intricate figures of Nataraja, soldiers, and celestial dancers.",
    attractions: [
      "Kanaka Sabha (Golden Hall of Sculptures)",
      "Ancient 2nd-Century Chola Architecture",
      "Noyyal River Sacred Ghat",
      "Sacred Bilva Tree & Temple Car",
      "Patti Vinayagar Shrine"
    ],
    history: "Originally constructed by King Karikala Chola in the 2nd century AD, with expansions by Hoysala and Vijayanagara kings.",
    lat: 10.9734,
    lng: 76.9189,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Perur_Pateeswarar_Temple.jpg/800px-Perur_Pateeswarar_Temple.jpg",
    transport: {
      bus: { available: "City bus routes 3, 3B, 3C from Gandhipuram & Railway Station", station: "Perur Temple Bus Stop", distance: "0.2 km" },
      train: { station: "Coimbatore Junction (CBE)", distance: "8 km" },
      taxi: { options: "Ola, Uber, City Autos" }
    }
  },
  {
    id: "tn_adiyogi_statue",
    name: "Adiyogi 112-ft Shiva Statue & Dhyanalinga",
    district: "Coimbatore",
    category: "cultural",
    categoryName: "Cultural & Spiritual",
    rating: 4.9,
    ratingCount: 15200,
    entryFee: "Free",
    openTime: "06:00 AM",
    closeTime: "08:00 PM",
    holiday: "None",
    bestTime: "October to March",
    shortDesc: "Guinness World Record largest bust sculpture in the world dedicated to Adiyogi (First Yogi), with the serene Dhyanalinga meditation dome at Velliangiri foothills.",
    longDesc: "The 112-foot Adiyogi statue recognized by Guinness World Records stands majestically against the Velliangiri mountain range. Visitors experience the profound silence of Dhyanalinga, energized Theerthakund water bodies, and the evening 3D laser sound and light projection show.",
    attractions: [
      "112-ft Adiyogi Steel Bust Sculpture",
      "Divya Sparsham 3D Laser Projection Show",
      "Dhyanalinga Meditation Dome",
      "Suryakund & Chandrakund Theerthakunds",
      "Linga Bhairavi Temple"
    ],
    history: "Inaugurated in 2017 to inspire humanity towards inner wellbeing and yoga.",
    lat: 10.9731,
    lng: 76.7404,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Adiyogi_Shiva_Statue_Isha_Coimbatore.jpg/800px-Adiyogi_Shiva_Statue_Isha_Coimbatore.jpg",
    transport: {
      bus: { available: "Direct bus route 14D from Gandhipuram Bus Stand", station: "Isha Adiyogi Gate", distance: "0.1 km" },
      train: { station: "Coimbatore Junction", distance: "30 km" },
      taxi: { options: "Prepaid Cabs, Ola, Uber" }
    }
  },
  {
    id: "tn_siruvani_waterfalls",
    name: "Siruvani Waterfalls & Dam",
    district: "Coimbatore",
    category: "waterfalls",
    categoryName: "Cascading Waterfalls",
    rating: 4.7,
    ratingCount: 4200,
    entryFee: "₹50",
    openTime: "09:00 AM",
    closeTime: "04:00 PM",
    holiday: "Forest Department Closure on heavy rains",
    bestTime: "October to February",
    shortDesc: "Scenic cascading waterfalls in the Western Ghats known for possessing the world's second sweetest, mineral-rich mountain water.",
    longDesc: "Surrounded by dense virgin forests of the Nilgiri Biosphere, Siruvani Waterfalls cascades down rocky cliffs offering refreshing natural pools. The water is celebrated for its purity and mineral sweetness, supplying clean drinking water to Coimbatore city.",
    attractions: [
      "Siruvani Mineral Waterfalls",
      "Western Ghats Forest Drive & Safaris",
      "Dam Reservoir Viewpoint",
      "Canopy Watch Tower",
      "Flora & Fauna Photography"
    ],
    history: "Constructed by the Government of Tamil Nadu with Kerala in 1927 for pristine drinking water.",
    lat: 10.9419,
    lng: 76.6853,
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
    transport: {
      bus: { available: "Route 59 from Gandhipuram Bus Stand", station: "Sadivayal Checkpost", distance: "3 km" },
      train: { station: "Coimbatore Junction", distance: "37 km" },
      taxi: { options: "Private Tour Cabs & Rental Vehicles" }
    }
  },
  {
    id: "tn_gedee_car_museum",
    name: "Gedee Car Museum & GD Naidu Science Museum",
    district: "Coimbatore",
    category: "museums",
    categoryName: "Museums & Galleries",
    rating: 4.8,
    ratingCount: 7100,
    entryFee: "₹100 (Adults)",
    openTime: "09:00 AM",
    closeTime: "06:30 PM",
    holiday: "Monday",
    bestTime: "Year Round",
    shortDesc: "India's premier vintage automobile museum featuring over 100 classic cars from Germany, UK, USA, and rare technological inventions by GD Naidu.",
    longDesc: "Gedee Car Museum is a treasure trove for automobile aficionados, showcasing rare vehicles spanning over a century. From an exact replica of the 1886 Benz Patent-Motorwagen to classic Rolls Royce, Cadillacs, Morris, and microcars, alongside GD Naidu's innovative mechanical patents.",
    attractions: [
      "1886 Benz Patent Motorwagen Replica",
      "Vintage Rolls Royce, Jaguar & Cadillac Fleet",
      "Rare Microcars & Bubble Cars",
      "GD Naidu Technological Inventions Gallery",
      "Interactive Automotive Science Exhibits"
    ],
    history: "Established in memory of inventor and industrialist G.D. Naidu by his son G.D. Gopal.",
    lat: 11.0069,
    lng: 76.9747,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gedee_Car_Museum_Exterior.jpg/800px-Gedee_Car_Museum_Exterior.jpg",
    transport: {
      bus: { available: "City buses towards Avinashi Road", station: "President Hall / GD Museum Stop", distance: "0.1 km" },
      train: { station: "Coimbatore Junction", distance: "2.5 km" },
      taxi: { options: "Autos, Ola, Uber" }
    }
  },
  {
    id: "tn_kovai_kutralam",
    name: "Kovai Kutralam Waterfalls",
    district: "Coimbatore",
    category: "waterfalls",
    categoryName: "Cascading Waterfalls",
    rating: 4.6,
    ratingCount: 3900,
    entryFee: "₹60",
    openTime: "09:30 AM",
    closeTime: "03:30 PM",
    holiday: "Monday & heavy rain periods",
    bestTime: "September to February",
    shortDesc: "Pristine waterfall located inside the protected Siruvani forest range, offering natural herbal showers surrounded by lush Western Ghats hills.",
    longDesc: "Kovai Kutralam is an invigorating scenic waterfall managed by the Tamil Nadu Forest Department. Visitors ride eco-safari vehicles from the forest checkpost to reach the natural herbal cascades flowing through undisturbed mountain valleys.",
    attractions: [
      "Natural Herbal Shower Cascades",
      "Eco-Safari Forest Van Ride",
      "Mountain Stream Bathing Pools",
      "Lush Western Ghats Wilderness",
      "Bird & Butterfly Watching"
    ],
    history: "Protected and maintained by Coimbatore Forest Division as an eco-tourism sanctuary.",
    lat: 10.9388,
    lng: 76.7118,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
    transport: {
      bus: { available: "Regular buses from Gandhipuram to Chadivayal", station: "Chadivayal Forest Gate", distance: "1.5 km" },
      train: { station: "Coimbatore Junction", distance: "35 km" },
      taxi: { options: "Sightseeing Taxis & Private Cabs" }
    }
  },
  {
    id: "tn_voc_park_zoo",
    name: "VOC Park and Zoological Garden",
    district: "Coimbatore",
    category: "parks",
    categoryName: "Parks & Gardens",
    rating: 4.4,
    ratingCount: 5300,
    entryFee: "₹20",
    openTime: "08:00 AM",
    closeTime: "07:30 PM",
    holiday: "Tuesday",
    bestTime: "Year Round",
    shortDesc: "Centrally located amusement and recreational park honoring freedom fighter V.O. Chidambaram Pillai, ideal for relaxing walks and family outings.",
    longDesc: "VOC Park is a cherished recreational sanctuary in the heart of Coimbatore. The premises feature landscaped botanical gardens, a working toy train, children's play arena, mini zoo, and tranquil walking trails under shady trees.",
    attractions: [
      "Children's Toy Train Ride",
      "Botanical Lawns & Shady Pergolas",
      "Mini Zoological Garden",
      "Evening Musical Fountain",
      "Memorial to Freedom Fighter VOC"
    ],
    history: "Developed by Coimbatore City Corporation in the mid-20th century.",
    lat: 11.0039,
    lng: 76.9691,
    image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=600&q=80",
    transport: {
      bus: { available: "All Gandhipuram and Town Hall buses", station: "VOC Park Stop", distance: "0.1 km" },
      train: { station: "Coimbatore Junction", distance: "2 km" },
      taxi: { options: "Autos, Ola, Uber" }
    }
  },
  {
    id: "tn_monkey_falls_aliyar",
    name: "Monkey Falls & Aliyar Dam Park",
    district: "Coimbatore",
    category: "waterfalls",
    categoryName: "Cascading Waterfalls",
    rating: 4.6,
    ratingCount: 6800,
    entryFee: "₹30",
    openTime: "08:00 AM",
    closeTime: "05:00 PM",
    holiday: "None",
    bestTime: "September to March",
    shortDesc: "Picturesque natural waterfall on Pollachi-Valparai road alongside the expansive Aliyar Dam landscaped gardens and boating.",
    longDesc: "Monkey Falls is a picturesque natural waterfall nestled on the upward ghat road to Valparai in the Anamalai Hills. Combined with the nearby Aliyar Dam reservoir with boat rides, canal parks, and aquarium, it offers a refreshing day trip from Coimbatore.",
    attractions: [
      "Monkey Falls Rocky Mountain Cascade",
      "Aliyar Dam Reservoir & Boating",
      "Landscaped Canal Gardens & Aquarium",
      "Ghat Road Viewpoint towards Anamalai Hills",
      "Forest Checkpost Nature Walk"
    ],
    history: "A celebrated eco-tourism stop on the historic Pollachi-Valparai tea plantation corridor.",
    lat: 10.4907,
    lng: 76.9678,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Monkey_falls_pollachi.jpg/800px-Monkey_falls_pollachi.jpg",
    transport: {
      bus: { available: "Frequent buses from Pollachi to Valparai", station: "Monkey Falls / Aliyar Dam Stop", distance: "0.1 km" },
      train: { station: "Pollachi Junction", distance: "25 km" },
      taxi: { options: "Pollachi & Coimbatore Day Rental Cabs" }
    }
  }
];

function updateFile(filePath, isESM = true) {
  let content = fs.readFileSync(filePath, 'utf8');
  let placesMatch = content.match(/places:\s*\[([\s\S]*?)\]\s*[,;]?\s*(\n\s*\}\s*;?\s*$)/);
  if (!placesMatch) {
    console.error('Could not find places array in', filePath);
    return;
  }

  // Check if already added
  if (content.includes('tn_pancha_rathas') && content.includes('tn_perur_temple')) {
    console.log('Places already present in', filePath);
    return;
  }

  const existingIds = new Set();
  const idRegex = /"id":\s*"([^"]+)"|id:\s*'([^']+)'/g;
  let m;
  while ((m = idRegex.exec(content)) !== null) {
    existingIds.add(m[1] || m[2]);
  }

  const toAdd = [...newChengalpattuPlaces, ...newCoimbatorePlaces].filter(p => !existingIds.has(p.id));
  console.log(`Adding ${toAdd.length} places to ${filePath}...`);

  if (toAdd.length === 0) return;

  const toAddStr = toAdd.map(p => '    ' + JSON.stringify(p, null, 6).trim()).join(',\n');

  // Insert before the closing bracket of places
  const lastBracketIndex = content.lastIndexOf(']');
  const updatedContent = content.slice(0, lastBracketIndex).trimEnd() + ',\n' + toAddStr + '\n  ]' + content.slice(lastBracketIndex + 1);

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  console.log(`Successfully updated ${filePath}`);
}

updateFile(path.join(__dirname, '../src/data/tourismData.js'), true);
updateFile(path.join(__dirname, '../js/data.js'), false);
