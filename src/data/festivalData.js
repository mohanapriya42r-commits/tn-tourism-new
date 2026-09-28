/* ==========================================================================
   Tamil Nadu Tourism - Master Festival & Seasonal Recommendation Dataset
   ========================================================================= */

export const FESTIVAL_DATA = {
  months: [
    {
      index: 0,
      name: 'January',
      seasonTag: '🌾 Harvest & Heritage Season',
      climate: 'Cool, pleasant breeze with sunny clear skies (18°C – 28°C). Ideal for temple visits and heritage tours.',
      tagline: 'Experience Pongal celebrations, ancient bull-taming, and beachfront dance festivals.',
      festivals: [
        {
          id: 'fest_pongal',
          name: 'Thai Pongal & Jallikattu Festival',
          district: 'Madurai',
          associatedPlaceId: 'tn_meenakshi',
          image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
          dates: 'Mid-January (Jan 14 – 17)',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'January is the best time to visit Madurai as the state celebrates Thai Pongal with colorful kolams, sweet pongal cooking, and world-famous Jallikattu at Alanganallur and Palamedu near Madurai.',
          highlights: ['Jallikattu bull taming event', 'Sugarcane & Pongal feasts', 'Special temple pujas', 'Traditional bullock cart parades']
        },
        {
          id: 'fest_mamallapuram_dance',
          name: 'Mamallapuram Indian Dance Festival',
          district: 'Chengalpattu',
          associatedPlaceId: 'tn_mahabalipuram',
          image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&w=800&q=80',
          dates: 'Dec 25 – Jan 25 (Month-long)',
          badgeText: '🎭 CULTURAL HIGHLIGHT',
          description: 'Set against the backdrop of 7th-century Shore Temple rock carvings, dancers perform Bharatanatyam, Kathakali, Kuchipudi, and Mohiniyattam under the open starry sky.',
          highlights: ['Open-air beach stage', 'Classical & folk dance troupes', 'Illuminated Shore Temple backdrop']
        },
        {
          id: 'fest_kite_festival',
          name: 'International Kite Festival',
          district: 'Chengalpattu',
          associatedPlaceId: 'tn_mahabalipuram',
          image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
          dates: 'Early January',
          badgeText: '🪁 BEACH SPECIAL',
          description: 'Giant colorful kites from international flyers fill the sky above Mamallapuram and ECR beaches.'
        }
      ],
      recommendedPlaceIds: ['tn_meenakshi', 'tn_mahabalipuram', 'tn_brihadeeswarar', 'tn_kanyakumari', 'tn_ooty_botanical_garden', 'tn_rameswaram']
    },
    {
      index: 1,
      name: 'February',
      seasonTag: '🌺 Pleasant Spring & Classical Arts',
      climate: 'Mild and sunny weather (20°C – 30°C). Perfect for hill station walks and classical dance festivals.',
      tagline: 'Enjoy temple dance festivals, pleasant hill weather, and sacred coastal pilgrimages.',
      festivals: [
        {
          id: 'fest_natyanjali',
          name: 'Natyanjali Dance Festival',
          district: 'Cuddalore',
          associatedPlaceId: 'tn_chidambaram_nataraja',
          image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&w=800&q=80',
          dates: 'Maha Shivaratri (Feb – March)',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'A 5-day classical dance tribute to Lord Nataraja (the Cosmic Dancer) at the historic Chidambaram Nataraja Temple, featuring India’s top Bharatanatyam exponents.',
          highlights: ['Continuous 5-night dance tribute', 'Temple golden sabha illumination', 'Spiritual atmosphere']
        },
        {
          id: 'fest_thaipusam',
          name: 'Thaipusam Festival',
          district: 'Dindigul',
          associatedPlaceId: 'tn_palani_hills',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
          dates: 'Full Moon in Thai (Late Jan / Feb)',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'Millions of devotees carry decorated Kavadi and walk barefoot to Lord Murugan hill shrines in Palani and Swamimalai.',
          highlights: ['Kavadi Aattam folk dance', 'Chariot procession', 'Piercing & vows offerings']
        }
      ],
      recommendedPlaceIds: ['tn_chidambaram_nataraja', 'tn_palani_hills', 'tn_kodaikanal', 'tn_thanjavur_palace', 'tn_marudamalai', 'tn_guindy_national_park']
    },
    {
      index: 2,
      name: 'March',
      seasonTag: '☀️ Sunshine & Temple Chariot Festivities',
      climate: 'Warm and dry with clear blue skies (24°C – 33°C). Great for early morning temple visits and evening beach strolls.',
      tagline: 'Witness grand temple chariot festivals and classical musical tributes.',
      festivals: [
        {
          id: 'fest_panguni_uthiram',
          name: 'Panguni Uthiram Chariot Festival',
          district: 'Chennai',
          associatedPlaceId: 'tn_kapaleeswarar',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
          dates: 'March – April',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'The ancient Mylapore Kapaleeshwarar Temple comes alive with a massive wooden Ther (chariot) procession through historic Mylapore streets.',
          highlights: ['63 Nayanmars procession (Aruvathumoovar)', 'Massive wooden chariot pulling', 'Traditional Carnatic Nadaswaram music']
        },
        {
          id: 'fest_thyagaraja',
          name: 'Thiruvaiyaru Thyagaraja Aradhana',
          district: 'Thanjavur',
          associatedPlaceId: 'tn_brihadeeswarar',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
          dates: 'Jan – March',
          badgeText: '🎵 MUSIC SPECIAL',
          description: 'Thousands of Carnatic musicians gather on the banks of Cauvery river to render Pancharatna Kritis in unison.'
        }
      ],
      recommendedPlaceIds: ['tn_kapaleeswarar', 'tn_brihadeeswarar', 'tn_yercaud', 'tn_padmanabhapuram_palace', 'tn_courtallam', 'tn_marudamalai']
    },
    {
      index: 3,
      name: 'April',
      seasonTag: '🛕 Grand Temple Car Festivals & Chithirai',
      climate: 'Warm summer weather (26°C – 36°C). High altitude hill stations begin cooling down for visitors.',
      tagline: 'Experience Tamil New Year and the legendary 10-day Madurai Chithirai Thiruvizha.',
      festivals: [
        {
          id: 'fest_chithirai',
          name: 'Madurai Chithirai Thiruvizha',
          district: 'Madurai',
          associatedPlaceId: 'tn_meenakshi',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
          dates: 'April – May (Tamil Month Chithirai)',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'April is an extraordinary time to visit Madurai because the world-renowned Chithirai Festival takes place, attracting over 1 million devotees for the divine wedding of Goddess Meenakshi and Lord Kallazhagar entering Vaigai River.',
          highlights: ['Celestial Wedding (Meenakshi Tirukalyanam)', 'Kallazhagar entry into Vaigai River', 'Golden Chariot procession', 'City-wide cultural fair']
        },
        {
          id: 'fest_varusha_pirappu',
          name: 'Tamil New Year (Puthandu)',
          district: 'All Districts',
          associatedPlaceId: 'tn_meenakshi',
          image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80',
          dates: 'April 14',
          badgeText: '🌺 NEW YEAR SPECIAL',
          description: 'Celebrated across Tamil Nadu with Mangani / Kani viewing, fresh neem-flower pachadi, and special grand temple darshans.'
        }
      ],
      recommendedPlaceIds: ['tn_meenakshi', 'tn_kodaikanal', 'tn_ooty', 'tn_brihadeeswarar', 'tn_thiruchendur_murugan', 'tn_valparai']
    },
    {
      index: 4,
      name: 'May',
      seasonTag: '⛰️ Summer Hill Station Festival Season',
      climate: 'Warm in plains (28°C – 39°C), pleasant & refreshing in Nilgiris and Palani Hills (12°C – 22°C).',
      tagline: 'Escape the heat to Ooty & Kodaikanal for Flower Shows, Fruit Shows, and Boating Festivals.',
      festivals: [
        {
          id: 'fest_ooty_flower',
          name: 'Ooty Annual Flower Show & Summer Festival',
          district: 'The Nilgiris',
          associatedPlaceId: 'tn_ooty_botanical_garden',
          image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
          dates: 'Mid-May (Annual 5-day show)',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'May is peak season for Ooty! The Government Botanical Garden displays over 100,000 potted plants, intricate flower sculptures, rose gardens, and dog shows.',
          highlights: ['Giant flower sculptures', 'Vintage Car rally', 'Nilgiri Mountain Railway rides', 'Rose Garden festival']
        },
        {
          id: 'fest_kodai_summer',
          name: 'Kodaikanal Fruit & Summer Carnival',
          district: 'Dindigul',
          associatedPlaceId: 'tn_kodaikanal',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
          dates: 'May',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'Featuring floral boat pageants on Kodai Lake, fruit displays, dog shows, and cultural music performances in Bryant Park.',
          highlights: ['Floral boat parade', 'Bryant Park flower display', 'Coaker’s Walk mist views']
        }
      ],
      recommendedPlaceIds: ['tn_ooty_botanical_garden', 'tn_kodaikanal', 'tn_ooty', 'tn_yercaud', 'tn_valparai', 'tn_mudumalai']
    },
    {
      index: 5,
      name: 'June',
      seasonTag: '🌧️ Monsoon Arrival & Orchard Harvest',
      climate: 'Monsoon showers hit Western Ghats (22°C – 32°C). Waterfalls start swelling and hills turn lush green.',
      tagline: 'Enjoy sweet Krishnagiri mangoes, misty hill drives, and early waterfall inflows.',
      festivals: [
        {
          id: 'fest_mango_festival',
          name: 'Krishnagiri International Mango Exhibition',
          district: 'Krishnagiri',
          associatedPlaceId: 'tn_hogenakkal',
          image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
          dates: 'June (3-week exhibition)',
          badgeText: '🥭 HARVEST SPECIAL',
          description: 'Krishnagiri and Dharmapuri host India’s largest mango exhibition with over 150 varieties of juicy Alphonsos, Malgovas, and Totapuris.',
          highlights: ['Tasting 150+ mango varieties', 'Hogenakkal coracle rides nearby', 'Orchard tours']
        },
        {
          id: 'fest_kurinji_blooms',
          name: 'Nilgiri Mountain Monsoon Mist Season',
          district: 'The Nilgiris',
          associatedPlaceId: 'tn_ooty',
          image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
          dates: 'June – July',
          badgeText: '🌿 NATURE HIGHLIGHT',
          description: 'Experience South-West monsoon clouds rolling over tea gardens and pine forests in Ooty and Coonoor.'
        }
      ],
      recommendedPlaceIds: ['tn_hogenakkal', 'tn_ooty', 'tn_kodaikanal', 'tn_courtallam', 'tn_mudumalai', 'tn_marudamalai']
    },
    {
      index: 6,
      name: 'July',
      seasonTag: '🌊 Cascading Waterfalls & River Worship',
      climate: 'Cool monsoon climate (22°C – 30°C). Waterfalls in Tenkasi and Nilgiris flow at full herbal capacity.',
      tagline: 'Experience Courtallam herbal waterfall baths and Aadi river worshipping festivals.',
      festivals: [
        {
          id: 'fest_courtallam_season',
          name: 'Courtallam Waterfall Spa Season',
          district: 'Tenkasi',
          associatedPlaceId: 'tn_courtallam',
          image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
          dates: 'July – August',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'July is the absolute best month for Courtallam! Heavy monsoons in Western Ghats cause Main Falls, Five Falls, and Old Courtallam Falls to cascade over medicinal forest herbs, giving a rejuvenating natural herbal bath.',
          highlights: ['Five Falls natural massage bath', 'Herbal oil massage therapy', 'Fresh hot banana fritters & fish fry']
        },
        {
          id: 'fest_aadi_perukku',
          name: 'Aadi Perukku (River Cauvery Festival)',
          district: 'Thanjavur',
          associatedPlaceId: 'tn_brihadeeswarar',
          image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
          dates: 'Late July / Early August (Aadi 18th)',
          badgeText: '🌊 RIVER FESTIVAL',
          description: 'Devotees gather along banks of Cauvery river at Hogenakkal, Trichy, and Thanjavur to pay homage to water as the giver of life.'
        }
      ],
      recommendedPlaceIds: ['tn_courtallam', 'tn_hogenakkal', 'tn_brihadeeswarar', 'tn_kodaikanal', 'tn_suruli_falls', 'tn_valparai']
    },
    {
      index: 7,
      name: 'August',
      seasonTag: '⛪ Coastal Feasts & Wildlife Safaris',
      climate: 'Lush monsoon green (24°C – 32°C). Lakes, waterfalls, and national parks are at peak scenic beauty.',
      tagline: 'Attend the grand Velankanni Church feast and explore lush green wildlife sanctuaries.',
      festivals: [
        {
          id: 'fest_velankanni',
          name: 'Annual Feast of Our Lady of Good Health',
          district: 'Nagapattinam',
          associatedPlaceId: 'tn_velankanni',
          image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
          dates: 'August 29 – September 8',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'Millions of pilgrims from across the globe walk to the sacred Basilica of Our Lady of Health in Velankanni for flag hoisting, car processions, and seaside prayers.',
          highlights: ['Illuminated grand flag hoisting', 'Chariot procession', 'Bay of Bengal beach walk']
        },
        {
          id: 'fest_gokulashtami',
          name: 'Sri Krishna Jayanti & Uri Adi',
          district: 'Chennai',
          associatedPlaceId: 'tn_kapaleeswarar',
          image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&w=800&q=80',
          dates: 'August',
          badgeText: '🎉 CULTURAL SPECIAL',
          description: 'Pot-breaking (Uri Adi) contests and butter offerings celebrated in neighborhood streets and temples across Tamil Nadu.'
        }
      ],
      recommendedPlaceIds: ['tn_velankanni', 'tn_courtallam', 'tn_mudumalai', 'tn_hogenakkal', 'tn_rameswaram', 'tn_kanyakumari']
    },
    {
      index: 8,
      name: 'September',
      seasonTag: '🐘 Ganesha Festivities & Navarathri Golu',
      climate: 'Pleasant pre-winter breeze (23°C – 31°C). Ideal for sightseeing, heritage walks, and wildlife tours.',
      tagline: 'Witness grand Vinayakar idol immersions and intricate Navarathri doll displays.',
      festivals: [
        {
          id: 'fest_vinayakar',
          name: 'Vinayakar Chaturthi & Immersion Procession',
          district: 'Coimbatore',
          associatedPlaceId: 'tn_eachanari',
          image: 'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?auto=format&fit=crop&w=800&q=80',
          dates: 'September',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'September features grand Vinayakar Chaturthi celebrations with colorful Ganesha idols erected across cities, culminating in massive beach immersion processions at Marina Beach and Eachanari Vinayagar Temple.',
          highlights: ['Eachanari Vinayagar Temple special darshan', 'Marina Beach immersion rally', 'Modak sweets feasts']
        },
        {
          id: 'fest_navarathri_prep',
          name: 'Navarathri Golu Doll Exhibition',
          district: 'Madurai',
          associatedPlaceId: 'tn_meenakshi',
          image: 'https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?auto=format&fit=crop&w=800&q=80',
          dates: 'September – October',
          badgeText: '🧸 ART SPECIAL',
          description: 'Intricate 9-tier doll steps (Golu) displayed inside temples and homes, depicting mythological stories in clay figurines.'
        }
      ],
      recommendedPlaceIds: ['tn_meenakshi', 'tn_marudamalai', 'tn_kapaleeswarar', 'tn_mudumalai', 'tn_thanjavur_palace', 'tn_yercaud']
    },
    {
      index: 9,
      name: 'October',
      seasonTag: '🦅 Bird Migration & Dussehra Festivities',
      climate: 'Cooling autumn breeze (22°C – 30°C). Migratory birds start arriving at bird sanctuaries.',
      tagline: 'Spot thousands of migratory birds and celebrate Vijayadasami temple processions.',
      festivals: [
        {
          id: 'fest_navarathri_vijaya',
          name: 'Navarathri & Vijayadasami Festival',
          district: 'Madurai',
          associatedPlaceId: 'tn_meenakshi',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
          dates: 'October',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'October is brilliant for visiting Madurai Meenakshi Temple and Kulasekharapatnam Dasara, where devotees dress up as Goddess Kali and ancient gods in dramatic folk dance trance.',
          highlights: ['Kulasekharapatnam Dasara beach festival', 'Meenakshi Amman floral decorations', 'Ayudha Pooja vehicle blessings']
        },
        {
          id: 'fest_bird_migration',
          name: 'Vedanthangal Bird Sanctuary Migration Arrival',
          district: 'Chengalpattu',
          associatedPlaceId: 'tn_vedanthangal',
          image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',
          dates: 'October – March',
          badgeText: '🦅 WILDLIFE SPECIAL',
          description: 'Over 40,000 migratory birds from Siberia, Australia, and Pakistan fly in to nest at Vedanthangal and Point Calimere.'
        }
      ],
      recommendedPlaceIds: ['tn_meenakshi', 'tn_vedanthangal', 'tn_brihadeeswarar', 'tn_kanyakumari', 'tn_ooty_botanical_garden', 'tn_mahabalipuram']
    },
    {
      index: 10,
      name: 'November',
      seasonTag: '🪔 Karthigai Deepam & Golden Temple Lights',
      climate: 'Refreshing mild winter monsoons (20°C – 28°C). Green landscapes and misty mornings.',
      tagline: 'Witness the giant Annamalaiyar Mahadeepam flame atop the holy hill of Tiruvannamalai.',
      festivals: [
        {
          id: 'fest_karthigai_deepam',
          name: 'Tiruvannamalai Karthigai Deepam',
          district: 'Tiruvannamalai',
          associatedPlaceId: 'tn_arunachaleswarar_temple',
          image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
          dates: 'November – December',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'November is unforgettable in Tiruvannamalai! A massive beacon light (Mahadeepam) fed with tons of ghee is lit at the peak of 2,600-ft Annamalai Hill, visible for 35 km around, attracting 2 million spiritual seekers.',
          highlights: ['2600-ft Hilltop Ghee Flame', 'Girivalam 14km holy hill walk', 'Silver chariot temple procession']
        },
        {
          id: 'fest_soorasamharam',
          name: 'Thiruchendur Kanda Sashti Soorasamharam',
          district: 'Thoothukudi',
          associatedPlaceId: 'tn_thiruchendur_murugan',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
          dates: 'November',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'Enactment of Lord Murugan vanquishing the demon Soorapadman right on the seashore of Thiruchendur temple.'
        }
      ],
      recommendedPlaceIds: ['tn_arunachaleswarar_temple', 'tn_thiruchendur_murugan', 'tn_rameswaram', 'tn_vedanthangal', 'tn_kanyakumari', 'tn_padmanabhapuram_palace']
    },
    {
      index: 11,
      name: 'December',
      seasonTag: '🎶 Margazhi Music Season & Coastal Breeze',
      climate: 'Best weather of the year! Cool, crisp, and comfortable (18°C – 26°C). Zero humidity, perfect for travel.',
      tagline: 'Enjoy world-class Carnatic music concerts, Vaikunta Ekadasi, and cool winter beaches.',
      festivals: [
        {
          id: 'fest_margazhi_music',
          name: 'December Chennai Margazhi Music & Dance Festival',
          district: 'Chennai',
          associatedPlaceId: 'tn_kapaleeswarar',
          image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
          dates: 'Dec 15 – Jan 15',
          badgeText: '🎉 FESTIVAL SPECIAL',
          description: 'December is UNESCO-recognized Margazhi season! Chennai hosts the world’s largest cultural festival with over 2,000 Carnatic vocal, Veena, and Bharatanatyam performances across Music Academy and Sabhas.',
          highlights: ['2000+ classical concerts', 'Authentic Sabha canteen tiffin feasts', 'Mylapore Heritage Walking Tours']
        },
        {
          id: 'fest_vaikunta_ekadasi',
          name: 'Srirangam Vaikunta Ekadasi (Paramapada Vasal)',
          district: 'Tiruchirappalli',
          associatedPlaceId: 'tn_srirangam_ranganathaswamy',
          image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
          dates: 'December – January',
          badgeText: '🛕 SPIRITUAL HIGHLIGHT',
          description: 'Opening of the sacred Gateway to Heaven (Paramapada Vasal) at Sri Ranganathaswamy Temple, the world’s largest functioning Hindu temple complex.'
        }
      ],
      recommendedPlaceIds: ['tn_kapaleeswarar', 'tn_srirangam_ranganathaswamy', 'tn_kanyakumari', 'tn_rameswaram', 'tn_mahabalipuram', 'tn_guindy_national_park']
    }
  ]
};

export default FESTIVAL_DATA;
