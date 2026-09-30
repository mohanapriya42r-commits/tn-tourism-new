/* ==========================================================================
   Tamil Nadu Tourism & Smart Trip Planner - Comprehensive Master Dataset
   ========================================================================== */

export const TN_DATA = {
  categories: [
    { id: 'temples', name: 'Temples & Religious Places', icon: '🛕', desc: 'Dravidian architecture, ancient temples, sacred shrines' },
    { id: 'beaches', name: 'Beaches & Oceans', icon: '🏖️', desc: 'Golden sands, vibrant sunsets, coastal heritage' },
    { id: 'hillstations', name: 'Hill Stations', icon: '⛰️', desc: 'Mist-covered peaks, tea plantations, cool mountain breeze' },
    { id: 'waterfalls', name: 'Cascading Waterfalls', icon: '💧', desc: 'Refreshing mineral falls, natural herbal spa waters' },
    { id: 'historical', name: 'Historical Sites', icon: '🏛️', desc: 'UNESCO world heritage, ancient monuments, stone carvings' },
    { id: 'wildlife', name: 'Wildlife & Reserves', icon: '🦁', desc: 'Tiger reserves, elephant sanctuaries, marine biosphires' },
    { id: 'forts', name: 'Forts & Royal Palaces', icon: '🏰', desc: 'Majestic forts, royal courtrooms, architectural marvels' },
    { id: 'museums', name: 'Museums & Galleries', icon: '🏛️', desc: 'Bronze sculptures, royal artifacts, rich archaeology' },
    { id: 'parks', name: 'Parks & Gardens', icon: '🌳', desc: 'Botanical collections, exotic floral displays, quiet greenery' },
    { id: 'lakes', name: 'Lakes & Dams', icon: '🌊', desc: 'Serene boating spots, reservoirs, picturesque valleys' },
    { id: 'shopping', name: 'Shopping & Malls', icon: '🛍️', desc: 'Kanchipuram silk sarees, handicraft bazaars, modern malls' },
    { id: 'cultural', name: 'Cultural & Heritage', icon: '🎭', desc: 'Bharatanatyam arts, living heritage villages, festivals' },
    { id: 'adventure', name: 'Adventure & Theme Parks', icon: '🎢', desc: 'Trekking routes, water theme parks, forest safaris' }
  ],

  districts: [
    'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'The Nilgiris', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Thiruvarur', 'Vellore', 'Villupuram', 'Virudhunagar'
  ],
  places: [
    {
          "id": "tn_elakurichi_church",
          "name": "Elakurichi Adaikala Matha Church",
          "district": "Ariyalur",
          "category": "cultural",
          "categoryName": "Cultural & Heritage",
          "rating": 4.6,
          "ratingCount": 3200,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A famous 18th-century Catholic shrine built by the renowned Italian missionary Veeramamunivar (Constanzo Beschi).",
          "longDesc": "Elakurichi Adaikala Matha Church is a historic pilgrimage site in Ariyalur district. Built in 1711 by Constanzo Beschi (Veeramamunivar), who composed the famous Tamil epic Thembavani, the church attracts thousands of devotees during annual festivals.",
          "attractions": [
                "Shrine of Our Lady of Refuge",
                "Historic 18th Century Architecture",
                "Annual Adaikala Matha Festival"
          ],
          "history": "Constructed under the patronage of the local ruler Ariyalur Poligar in 1711 AD.",
          "lat": 10.9782,
          "lng": 79.1245,
                              "image": "https://vailankanni.info/wp-content/uploads/2022/12/1-2.jpg",
          "transport": {
                "bus": {
                      "available": "Buses from Ariyalur & Thanjavur",
                      "station": "Ariyalur Bus Stand",
                      "distance": "28 km"
                }
          },
          "emergency": {
                "hospitals": [
                      {
                            "name": "Government Hospital Ariyalur",
                            "distance": "28 km",
                            "phone": "04329-222100"
                      }
                ]
          }
    },
    {
          "id": "tn_karaivetti_bird_sanctuary",
          "name": "Karaivetti Bird Sanctuary",
          "district": "Ariyalur",
          "category": "wildlife",
          "categoryName": "Wildlife & Nature",
          "rating": 4.5,
          "ratingCount": 2400,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "November to February",
          "shortDesc": "One of the largest freshwater wetlands in Tamil Nadu, hosting thousands of migratory waterfowl species.",
          "longDesc": "Karaivetti Bird Sanctuary covers an area of over 453 hectares and is a vital sanctuary for migratory birds such as bar-headed geese, spot-billed pelicans, and painted storks visiting during winter months.",
          "attractions": [
                "Bird Watching Towers",
                "Freshwater Lake Ecosystem",
                "Winter Migratory Birds"
          ],
          "history": "Declared a protected bird sanctuary by Tamil Nadu Forest Department in 1999.",
          "lat": 10.9711,
          "lng": 79.0433,
                              "image": "https://tamilnadutourisminfo.com/wp-content/uploads/2023/10/vettangudi.webp",
          "transport": {
                "bus": {
                      "available": "Buses available from Tanjore & Ariyalur",
                      "station": "Ariyalur Station",
                      "distance": "35 km"
                }
          }
    },
    {
          "id": "tn_chidambaram_nataraja",
          "name": "Chidambaram Nataraja Temple",
          "district": "Cuddalore",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.9,
          "ratingCount": 18500,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "10:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "The cosmic temple of Lord Shiva as Nataraja representing the Akash (Ether) element among the Pancha Bhoota Stalam.",
          "longDesc": "Chidambaram Thillai Nataraja Temple is one of the most ancient and celebrated shrines in South India. Famous for its gold-plated roof, Akasha Rahasyam, and intricate Bharatanatyam dance postures carved into its gopurams.",
          "attractions": [
                "Chit Sabha with Golden Roof",
                "Chidambara Rahasyam",
                "108 Karana Dance Reliefs",
                "Ananda Tandava Shrine"
          ],
          "history": "Expanded by Chola, Pallava, Pandya, and Vijayanagara kings over two millennia.",
          "lat": 11.3992,
          "lng": 79.6932,
                              "image": "/images/places/tn_chidambaram_nataraja.jpg",
          "transport": {
                "train": {
                      "station": "Chidambaram Railway Station (CDM)",
                      "distance": "1.2 km"
                }
          }
    },
    {
          "id": "tn_silver_beach_cuddalore",
          "name": "Silver Beach Cuddalore",
          "district": "Cuddalore",
          "category": "beaches",
          "categoryName": "Beaches & Oceans",
          "rating": 4.4,
          "ratingCount": 6800,
          "entryFee": "Free",
          "openTime": "05:00 AM",
          "closeTime": "09:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "The second longest beach on the Coromandel coast, featuring scenic sea views, water sports, and quiet sands.",
          "longDesc": "Silver Beach is located 2 km from Cuddalore town center. It offers unbroken stretches of golden sand, boat rides on the nearby backwaters, horseback rides, and sea sunset vistas.",
          "attractions": [
                "Long Unbroken Shoreline",
                "Boating in Backwaters",
                "Sunset Promenade",
                "Horse Riding"
          ],
          "history": "Historic coastal area near Fort St. David where East India Company once traded.",
          "lat": 11.7456,
          "lng": 79.7823,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAjmkXhD2dRlCD_dtwLsqdzvhQc193qnlrF9XXt2KzbbGXDHONcq2hpo&s=10",
    },
    {
          "id": "tn_theerthamalai_temple",
          "name": "Theerthamalai Mallikarjuna Swamy Temple",
          "district": "Dharmapuri",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.6,
          "ratingCount": 3900,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "07:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A sacred hill temple associated with the Ramayana, known for holy natural springs (Theerthams) flowing from rock cliffs.",
          "longDesc": "Theerthamalai is a sacred mountain in Harur taluk of Dharmapuri district. Legend says Lord Rama offered prayers to Shiva here after defeating Ravana. Five sacred waterfalls/springs flow year-round down the hill cliffs.",
          "attractions": [
                "Rama Theertham Spring",
                "Hilltop Shiva Temple",
                "Panoramic Valley Views",
                "Sacred Natural Baths"
          ],
          "history": "Mentioned in ancient Chola inscriptions and Chola king Rajendra Chola inscriptions.",
          "lat": 12.1154,
          "lng": 78.5843,
                                        "image": "/images/places/murugan_hill_temple.jpg",
    },
    {
          "id": "tn_adhiyamankottai_fort",
          "name": "Adhiyamankottai Fort & Temple",
          "district": "Dharmapuri",
          "category": "historical",
          "categoryName": "Historical Sites",
          "rating": 4.3,
          "ratingCount": 1800,
          "entryFee": "Free",
          "openTime": "07:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Ancient oval fort built by the Sangam-era ruler King Adhiyaman Neduman Anji, famous for Tamil literature patrons.",
          "longDesc": "Adhiyamankottai was the capital of the ancient Tagadur kingdom ruled by Adhiyaman. The ruined fort walls and the nearby Chenraya Perumal Temple feature intricate 16th-century Nayak ceiling frescoes.",
          "attractions": [
                "Circular Fort Remnants",
                "Chenraya Perumal Temple Frescoes",
                "Heritage Sangam Artifacts"
          ],
          "history": "Capital of Tagadur in Sangam Tamil literature, home of Avvaiyar and Adhiyaman.",
          "lat": 12.0833,
          "lng": 78.1333,
                                        "image": "/images/places/tamilnadu_fort.jpg",
    },
    {
          "id": "tn_bhavani_sangameswarar",
          "name": "Sangameswarar Temple, Bhavani (Kooduthurai)",
          "district": "Erode",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.7,
          "ratingCount": 9200,
          "entryFee": "Free",
          "openTime": "05:30 AM",
          "closeTime": "08:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Famous pilgrimage center located at the holy confluence (Triveni Sangam) of Cauvery, Bhavani, and invisible Amudha rivers.",
          "longDesc": "Known as the Dakshina Triveni Sangam, Bhavani Kooduthurai is a revered pilgrimage site in Erode. Devotees take holy dips at the confluence of rivers before worshipping Lord Sangameswarar and Vedanayaki Amman.",
          "attractions": [
                "River Confluence (Kooduthurai)",
                "Holy Bathing Ghats",
                "Vedanayaki Amman Shrine",
                "Ivory Cradle Gifted by British Collector William Garrow"
          ],
          "history": "Revered in Tevaram hymns by Tamil Nayanars; expanded by Hoysalas and Pandyas.",
          "lat": 11.4442,
          "lng": 77.6811,
                              "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_chennimalai_murugan",
          "name": "Chennimalai Murugan Temple",
          "district": "Erode",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 8100,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A celebrated hill temple of Lord Murugan famous for its 1320 steps, weaving culture, and Siragiri Puranam.",
          "longDesc": "Chennimalai is a famous hill temple dedicated to Lord Subramanya in Erode district. Standing at a height of 1740 feet, the temple commands sweeping views of Kongu countryside and is famous for twin bullock cart hill climb miracles.",
          "attractions": [
                "1320 Hill Steps",
                "Valli Kuttai Pond",
                "Twin Bullock Track",
                "Panoramic Kongu Valley Views"
          ],
          "history": "Sanctified by Saint Arunagirinathar in Kandar Anubhuti.",
          "lat": 11.1683,
          "lng": 77.6078,
                                        "image": "/images/places/murugan_hill_temple.jpg",
    },
    {
          "id": "tn_gomukhi_dam_kallakurichi",
          "name": "Gomukhi Dam & Park",
          "district": "Kallakurichi",
          "category": "lakes",
          "categoryName": "Lakes & Dams",
          "rating": 4.5,
          "ratingCount": 3100,
          "entryFee": "Free (Park ₹10)",
          "openTime": "08:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "September to February",
          "shortDesc": "A serene reservoir located at the foot of Kalvarayan Hills with lush gardens and picnic spots.",
          "longDesc": "Gomukhi Dam is constructed across the Gomukhi River at the base of the scenic Kalvarayan mountain range. It serves as a popular eco-tourism picnic spot for families featuring lush gardens, children play area, and mountain backdrops.",
          "attractions": [
                "Dam Crest View",
                "Foot-of-Hills Eco Park",
                "Children Play Zone",
                "Picnic Spot"
          ],
          "history": "Built in 1965 to harness hill streams for irrigating Kallakurichi agricultural plains.",
          "lat": 11.785,
          "lng": 78.85,
                              "image": "/images/places/tn_mettur_dam_salem.jpg",
    },
    {
          "id": "tn_megam_falls_kalvarayan",
          "name": "Megam Waterfalls, Kalvarayan Hills",
          "district": "Kallakurichi",
          "category": "waterfalls",
          "categoryName": "Cascading Waterfalls",
          "rating": 4.6,
          "ratingCount": 2900,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "September to December",
          "shortDesc": "A spectacular 500-foot waterfall cascades down dense forested cliffs of the Kalvarayan mountain range.",
          "longDesc": "Megam Falls (also known as Periyar Falls) is nestled inside the pristine tribal forests of Kalvarayan Hills in Kallakurichi. Visitors can trek through teak and herbal forests to reach the refreshing natural plunge pool.",
          "attractions": [
                "500-ft Forest Waterfall",
                "Forest Trekking Path",
                "Natural Rock Pool Bathing"
          ],
          "history": "Ancestral home of Malayali tribal communities of the Eastern Ghats.",
          "lat": 11.89,
          "lng": 78.75,
                              "image": "https://ramyashotels.com/wp-content/uploads/2021/06/puliyancholai-falls-trichy-best-view.jpg",
    },
    {
          "id": "tn_mayanoor_barrage",
          "name": "Mayanoor Barrage & Eco Park",
          "district": "Karur",
          "category": "parks",
          "categoryName": "Parks & Gardens",
          "rating": 4.4,
          "ratingCount": 3400,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "06:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A scenic river regulator barrage across Cauvery River surrounded by green gardens, boating, and walking tracks.",
          "longDesc": "Mayanoor Barrage is a major water regulation structure across the Cauvery River in Karur district. The site has been developed into an attractive recreational park with children play equipment, flower beds, and riverside walkways.",
          "attractions": [
                "Wide Cauvery River View",
                "Recreational Eco Park",
                "Boating & Walkways"
          ],
          "history": "Constructed to divert irrigation waters to southern agricultural districts.",
          "lat": 10.9633,
          "lng": 78.2344,
                              "image": "https://touristplacestamilnadu.com/images/history/mukkombu-upper-anaicut.webp",
    },
    {
          "id": "tn_nerur_sadasiva_brahmendra",
          "name": "Nerur Sadasiva Brahmendra Adhisthanam",
          "district": "Karur",
          "category": "cultural",
          "categoryName": "Cultural & Heritage",
          "rating": 4.8,
          "ratingCount": 4200,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "The peaceful Jeeva Samadhi shrine of the legendary 18th-century Avadhuta saint Sri Sadasiva Brahmendra.",
          "longDesc": "Situated on the banks of Cauvery River in Nerur near Karur, this serene Jeeva Samadhi is surrounded by lush Bilva and Banyan trees. It is a world-famous meditation retreat for spiritual seekers.",
          "attractions": [
                "Jeeva Samadhi Shrine",
                "Cauvery Riverside Meditation",
                "Sacred Bilva Grove"
          ],
          "history": "Sri Sadasiva Brahmendra attained Jeeva Samadhi here under a Vilvam tree in 18th century AD.",
          "lat": 10.9856,
          "lng": 78.1822,
                                        "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_krishnagiri_fort",
          "name": "Krishnagiri Fort & Sayeed Basha Hill",
          "district": "Krishnagiri",
          "category": "forts",
          "categoryName": "Forts & Royal Palaces",
          "rating": 4.5,
          "ratingCount": 4600,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "05:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Historic hilltop fort built by King Krishnadevaraya and later fortified by Hyder Ali and Tipu Sultan.",
          "longDesc": "Krishnagiri Fort perches atop a granite hill overlooking Krishnagiri town. Built in the 16th century by Vijayanagara Emperor Krishnadevaraya, the fort houses ancient granaries, armories, and offers commanding 360-degree views of the Eastern Ghats.",
          "attractions": [
                "Hilltop Fort Granaries",
                "Sayeed Basha Dargah",
                "Panoramic Town View",
                "Rock-cut Stairs"
          ],
          "history": "Fought over during the Anglo-Mysore Wars between British forces and Tipu Sultan.",
          "lat": 12.5292,
          "lng": 78.2139,
                                        "image": "/images/places/tamilnadu_fort.jpg",
    },
    {
          "id": "tn_rayakottai_fort",
          "name": "Rayakottai Fort",
          "district": "Krishnagiri",
          "category": "forts",
          "categoryName": "Forts & Royal Palaces",
          "rating": 4.4,
          "ratingCount": 3100,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A massive military hill fort constructed by Tipu Sultan, now a popular trekking destination.",
          "longDesc": "Rayakottai is a strategic rampart hill fort located in Krishnagiri district. Its massive stone walls, secret tunnels, and watchtowers attract history buffs and hill trekkers.",
          "attractions": [
                "Trekking Trails",
                "Stone Rampart Walls",
                "Watchtowers & Cave Chambers"
          ],
          "history": "Surrendered to Major Gowdie of British East India Company in 1791 during Third Mysore War.",
          "lat": 12.5167,
          "lng": 78.0333,
                              "image": "/images/places/tamilnadu_fort.jpg",
    },
    {
          "id": "tn_tranquebar_danish_fort",
          "name": "Tarangambadi Danish Fort & Beach (Tranquebar)",
          "district": "Mayiladuthurai",
          "category": "forts",
          "categoryName": "Forts & Royal Palaces",
          "rating": 4.7,
          "ratingCount": 7800,
          "entryFee": "₹10 (Museum)",
          "openTime": "09:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "Friday",
          "bestTime": "October to March",
          "shortDesc": "A unique 17th-century Danish fortress built by Denmark East India Company on the singing waves coast.",
          "longDesc": "Tarangambadi (Tranquebar) means \"land of singing waves\". Fort Dansborg was built in 1620 AD by Danish Captain Ove Gjedde. Featuring Scandinavian architecture, an archaeological museum, and colonial churches by the sea.",
          "attractions": [
                "Fort Dansborg",
                "Zion Church (1701 AD)",
                "Danish Governor Bungalow",
                "Maritime Museum"
          ],
          "history": "Leased by Tanjore Nayak King Raghunatha Nayak to King Christian IV of Denmark in 1620 AD.",
          "lat": 11.0267,
          "lng": 79.8533,
                              "image": "/images/places/tn_tranquebar_danish_fort.jpg",
    },
    {
          "id": "tn_vaitheeswaran_koil",
          "name": "Vaitheeswaran Koil (Navagraha Chevvai Temple)",
          "district": "Mayiladuthurai",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 14500,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "09:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Renowned temple dedicated to Lord Shiva as Vaidyanathar (God of Medicine) and Mars (Angarakan).",
          "longDesc": "Vaitheeswaran Koil is one of the nine Navagraha temples located in Tamil Nadu, dedicated to Lord Mars (Chevvai/Angarakan). Lord Shiva is worshipped here as the divine healer who cures diseases with holy medicinal soil (Siddhamirtham). Famous also for Nadi Astrology palm leaf reading tradition.",
          "attractions": [
                "Siddhamirtham Holy Tank",
                "Angarakan (Mars) Shrine",
                "Thaiyalnayaki Amman Shrine",
                "Nadi Palm Leaf Tradition"
          ],
          "history": "Praised in Tevaram hymns by Sambandar and Appar; expanded by Chola dynasty.",
          "lat": 11.2,
          "lng": 79.7167,
                              "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_nagore_dargah",
          "name": "Nagore Dargah (Shahul Hamid Dargah)",
          "district": "Nagapattinam",
          "category": "cultural",
          "categoryName": "Cultural & Heritage",
          "rating": 4.7,
          "ratingCount": 11200,
          "entryFee": "Free",
          "openTime": "05:00 AM",
          "closeTime": "10:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A world-famous 16th-century Sufi Islamic shrine built over the tomb of Sufi saint Shahul Hamid.",
          "longDesc": "Nagore Dargah features five tall minarets (the tallest being Periya Minara at 131 feet). It is a symbol of interfaith harmony, visited by devotees of all religions seeking blessings and spiritual peace.",
          "attractions": [
                "131-foot Periya Minara Minaret",
                "Holy Water Tank (Shifa Gunta)",
                "Kandoori Festival Procession"
          ],
          "history": "Land gifted by Hindu Tanjore Nayak king Achuthappa Nayak; minarets funded by Thanjavur Maratha rulers.",
          "lat": 10.8167,
          "lng": 79.85,
                              "image": "/images/places/tn_nagore_dargah.jpg",
    },
    {
          "id": "tn_point_calimere_sanctuary",
          "name": "Point Calimere Wildlife & Bird Sanctuary (Kodiakarai)",
          "district": "Nagapattinam",
          "category": "wildlife",
          "categoryName": "Wildlife & Nature",
          "rating": 4.6,
          "ratingCount": 4100,
          "entryFee": "₹20",
          "openTime": "06:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "November to February",
          "shortDesc": "A coastal Ramsar wetland site famous for Blackbuck antelopes, flamingos, and mangrove tidal creeks.",
          "longDesc": "Point Calimere (Kodiakarai) sanctuary encompasses dry evergreen forests, salt pans, and coastal backwaters. Home to thousands of migratory greater flamingos, blackbuck antelopes, wild ponies, and dolphins.",
          "attractions": [
                "Blackbuck Antelope Safari",
                "Flamingo Bird Watching",
                "Chola Lighthouse Ruins",
                "Modi Mandapam"
          ],
          "history": "Mentioned in Kalki Krishnamurthy’s epic historical novel Ponniyin Selvan.",
          "lat": 10.3,
          "lng": 79.8667,
                              "image": "https://tamilnadutourisminfo.com/wp-content/uploads/2023/10/vettangudi.webp",
    },
    {
          "id": "tn_ranjankudi_fort",
          "name": "Ranjankudi Fort",
          "district": "Perambalur",
          "category": "forts",
          "categoryName": "Forts & Royal Palaces",
          "rating": 4.4,
          "ratingCount": 2800,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "05:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "An impressive 17th-century rock fort built by the Nawab of the Carnatic with double moat walls.",
          "longDesc": "Ranjankudi Fort is located 17 km from Perambalur. Built in 1713 AD by Jagat Raya, a vassal of Carnatic Nawab, the fort played a pivotal role during the Battle of Volconda between French and British forces in 1751.",
          "attractions": [
                "Oblique Moat Walls",
                "Flagstaff Tower",
                "Chamber Granaries",
                "Palace Ruins"
          ],
          "history": "Site of the historic Battle of Volconda in 1751 AD during the Carnatic Wars.",
          "lat": 11.3833,
          "lng": 78.9667,
                              "image": "/images/places/tamilnadu_fort.jpg",
    },
    {
          "id": "tn_siruvachur_madhurakaliamman",
          "name": "Siruvachur Mathura Kaliamman Temple",
          "district": "Perambalur",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.7,
          "ratingCount": 6500,
          "entryFee": "Free",
          "openTime": "06:30 AM",
          "closeTime": "08:00 PM",
          "holiday": "Open Monday & Friday",
          "bestTime": "October to March",
          "shortDesc": "A powerful historic Amman temple associated with Kannagi, open specially on Mondays and Fridays.",
          "longDesc": "Siruvachur Mathura Kaliamman Temple is one of the most venerated shrines in Perambalur district. According to tradition, Goddess Kali granted refuge to Kannagi after she arrived from burning Madurai.",
          "attractions": [
                "Golden Chariot (Thangathaer)",
                "Car festival",
                "Sacred Herbal Garden"
          ],
          "history": "Associated with the post-epic period of Silappatikaram.",
          "lat": 11.1833,
          "lng": 78.8833,
                              "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_sholinghur_narasimha",
          "name": "Sholinghur Yoga Narasimha Swamy Temple",
          "district": "Ranipet",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 9800,
          "entryFee": "Free (Ropeway available)",
          "openTime": "06:00 AM",
          "closeTime": "05:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A famous 108 Divya Desam hill shrine of Lord Narasimha situated atop a 750-step granite hill peak.",
          "longDesc": "Sholinghur (Cholasimhapuram) is renowned for its twin hill shrines. The larger hill houses Lord Yoga Narasimha Swamy (750 steps) while the smaller hill houses Yoga Anjaneyar (406 steps). Modern ropeway cable car facilities are now available.",
          "attractions": [
                "750 Hill Steps & Passenger Ropeway",
                "Yoga Anjaneyar Hill Shrine",
                "Divya Desam Heritage"
          ],
          "history": "Consecrated by Vishwamitra Rishi; praised by Thirumangai Alvar and Peyalvar in Divya Prabandham.",
          "lat": 13.1125,
          "lng": 79.4239,
                                        "image": "/images/places/murugan_hill_temple.jpg",
    },
    {
          "id": "tn_arcot_nawab_clocktower",
          "name": "Arcot Delhi Gate & Clock Tower",
          "district": "Ranipet",
          "category": "historical",
          "categoryName": "Historical Sites",
          "rating": 4.3,
          "ratingCount": 2100,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Historical gate built by Robert Clive after the Siege of Arcot in 1751, symbolizing colonial history.",
          "longDesc": "The Delhi Gate in Arcot formed part of the fortifications of the Palaces of Carnatic Nawabs. The room above the gate was used by Robert Clive during his famous defense during the Siege of Arcot.",
          "attractions": [
                "Colonial Delhi Gate Arch",
                "Clive’s Room Monument",
                "Palanar Riverbank Promenade"
          ],
          "history": "Marked Robert Clive’s victory in the 1751 Siege of Arcot.",
          "lat": 12.9,
          "lng": 79.3333,
                              "image": "/images/places/tamilnadu_fort.jpg",
    },
    {
          "id": "tn_mettur_dam_salem",
          "name": "Mettur Dam & Muniyappan Park",
          "district": "Salem",
          "category": "lakes",
          "categoryName": "Lakes & Dams",
          "rating": 4.6,
          "ratingCount": 12800,
          "entryFee": "₹10 (Park)",
          "openTime": "09:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "September to February",
          "shortDesc": "One of the largest dams in India built across Cauvery River, with expansive reservoir lakes and landscaped parks.",
          "longDesc": "Mettur Dam is a massive engineering marvel constructed in 1934. It holds Stanley Reservoir, storing water for agricultural irrigation across 12 delta districts. Features Ellis Park, fountain displays, and fish delicacies.",
          "attractions": [
                "Stanley Reservoir Lake",
                "Ellis Spillway Park",
                "Bridge View Point",
                "Local Fresh Cauvery Fish Stalls"
          ],
          "history": "Built by British Chief Engineer Sir Colonel W.M. Ellis in 1934 AD.",
          "lat": 11.8,
          "lng": 77.8,
                              "image": "/images/places/tn_mettur_dam_salem.jpg",
    },
    {
          "id": "tn_salem_1008_lingam",
          "name": "1008 Lingam Temple, Ariyanoor",
          "district": "Salem",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.7,
          "ratingCount": 7400,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A unique temple complex housing 1,008 Shiva Lingams surrounding a gigantic central 82-foot Shiva statue.",
          "longDesc": "Situated in Ariyanoor on Salem-Coimbatore highway, this spiritual complex features 1008 miniature stone Lingams arranged neatly on terraces encircling a colossal main Shiva Lingam statue.",
          "attractions": [
                "Colossal 82-ft Shiva Statue",
                "1008 Terraced Lingam Shrines",
                "Vinayagar & Murugan Sanctuaries"
          ],
          "history": "Managed by Vinayaka Mission Trust since its inauguration in 2005.",
          "lat": 11.6,
          "lng": 78.0667,
                              "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_chettinad_palace_kanadukathan",
          "name": "Chettinad Palace & Heritage Mansions, Kanadukathan",
          "district": "Sivaganga",
          "category": "forts",
          "categoryName": "Forts & Royal Palaces",
          "rating": 4.8,
          "ratingCount": 8900,
          "entryFee": "₹100 (Entry inside palace grounds)",
          "openTime": "09:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Opulent 19th-century Chettiar palatial mansions featuring Burmese teakwood, Italian marble, and Belgian glass.",
          "longDesc": "Kanadukathan in Sivaganga district is the heart of Chettinad heritage. The grand Chettinad Palace was built in 1912 by Dr. Annamalai Chettiar. Famous for thousand-windowed architecture, Athangudi handmade tiles, and authentic Chettinad cuisine.",
          "attractions": [
                "Chettinad Palace Courtyards",
                "Burmese Teakwood Columns",
                "Athangudi Tile Factories",
                "Authentic Chettinad Mess"
          ],
          "history": "Home to the Nattukottai Chettiars, legendary merchant prince bankers of South-East Asia.",
          "lat": 10.1667,
          "lng": 78.7833,
                              "image": "/images/places/tn_chettinad_palace_kanadukathan.jpg",
    },
    {
          "id": "tn_pillayarpatti_vinayagar",
          "name": "Pillayarpatti Karpaga Vinayagar Temple",
          "district": "Sivaganga",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.9,
          "ratingCount": 16200,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A famous rock-cut cave temple housing a 6-foot bas-relief idol of Lord Ganesha (Karpaga Vinayagar).",
          "longDesc": "Pillayarpatti is one of the oldest rock-cut cave temples in Tamil Nadu, dating back over 1,600 years. Lord Ganesha here is depicted with two arms holding a Modakam, carved directly out of a granite cave wall.",
          "attractions": [
                "1600-Year-Old Rock-Cut Ganesha",
                "Golden Chariot",
                "Holy Temple Pond"
          ],
          "history": "Inscriptions date the cave carving to 4th-5th century AD Early Pandyan architecture.",
          "lat": 10.1167,
          "lng": 78.6833,
                              "image": "/images/places/tn_pillayarpatti_vinayagar.jpg",
    },
    {
          "id": "tn_meghamalai_highwavys",
          "name": "Meghamalai (Highwavys) Hill Station",
          "district": "Theni",
          "category": "hillstations",
          "categoryName": "Hill Stations",
          "rating": 4.8,
          "ratingCount": 7600,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "September to May",
          "shortDesc": "The \"High Wavy Mountains\" filled with misty tea gardens, cardamom estates, wild elephants, and mountain lakes.",
          "longDesc": "Meghamalai is an unspoiled paradise located in the Western Ghats of Theni district at an elevation of 1,500m. Known for Ceylon tea plantations, Highwavys Dam, Cloudland Falls, and rich wildlife in Srivilliputhur-Megamalai Tiger Reserve.",
          "attractions": [
                "Highwavys Lake & Dam",
                "Vattaparai Falls",
                "Veneer Teak Estates",
                "Elephant Corridor Viewpoint"
          ],
          "history": "Developed as tea plantation retreats by British planters in 1930s.",
          "lat": 9.6833,
          "lng": 77.4,
                              "image": "https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg",
    },
    {
          "id": "tn_vaigai_dam_theni",
          "name": "Vaigai Dam & Little Brindavan Garden",
          "district": "Theni",
          "category": "lakes",
          "categoryName": "Lakes & Dams",
          "rating": 4.5,
          "ratingCount": 9400,
          "entryFee": "₹10",
          "openTime": "08:00 AM",
          "closeTime": "06:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A major reservoir across Vaigai River featuring a illuminated garden, musical fountain, and children park.",
          "longDesc": "Built across the Vaigai River near Andipatti, Vaigai Dam supplies irrigation water to Madurai and Dindigul districts. Below the dam wall lies \"Little Brindavan Garden\", a manicured park with colorful lights and dancing fountains.",
          "attractions": [
                "Dam Top Walkway",
                "Little Brindavan Gardens",
                "Children Play Train",
                "Illuminated Fountains"
          ],
          "history": "Inaugurated by Chief Minister K. Kamaraj in 1959 AD.",
          "lat": 10.05,
          "lng": 77.5833,
                              "image": "/images/places/tn_mettur_dam_salem.jpg",
    },
    {
          "id": "tn_jalagamparai_falls",
          "name": "Jalagamparai Waterfalls",
          "district": "Tirupathur",
          "category": "waterfalls",
          "categoryName": "Cascading Waterfalls",
          "rating": 4.5,
          "ratingCount": 3800,
          "entryFee": "Free",
          "openTime": "08:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "None",
          "bestTime": "November to February",
          "shortDesc": "A picturesque waterfall created by the Attaru river dropping down a rocky gorge in Yelagiri foothills.",
          "longDesc": "Located 14 km from Tirupathur town at the foothills of Yelagiri, Jalagamparai Falls drops down from a height of 15 meters. The herbal properties of the forest waters are believed to have natural bathing benefits.",
          "attractions": [
                "Herbal Waterfall Bath",
                "Foothills Trek Route",
                "Murugan Temple nearby"
          ],
          "history": "Sacred mountain stream flowing from Yelagiri plateau.",
          "lat": 12.5667,
          "lng": 78.6167,
                              "image": "https://ramyashotels.com/wp-content/uploads/2021/06/puliyancholai-falls-trichy-best-view.jpg",
    },
    {
          "id": "tn_kavalur_telescope",
          "name": "Vainu Bappu Observatory, Kavalur",
          "district": "Tirupathur",
          "category": "museums",
          "categoryName": "Museums & Galleries",
          "rating": 4.7,
          "ratingCount": 3200,
          "entryFee": "Free (Prior permission for visitors on Saturdays)",
          "openTime": "02:00 PM",
          "closeTime": "05:00 PM (Saturdays)",
          "holiday": "Closed Sun-Fri for science ops",
          "bestTime": "October to March",
          "shortDesc": "Asia’s premier optical astronomical observatory housing the 2.3-meter Vainu Bappu Telescope.",
          "longDesc": "Located in the dark skies of Javadi Hills near Alangayam, Kavalur Observatory is operated by the Indian Institute of Astrophysics. It was here that Uranus rings and atmosphere of Ganymede were studied.",
          "attractions": [
                "2.3m Vainu Bappu Telescope",
                "Stargazing Visitors Gallery",
                "Javadi Hills Pine Forests"
          ],
          "history": "Established in 1968 by pioneer Indian astronomer Dr. M.K. Vainu Bappu.",
          "lat": 12.5744,
          "lng": 78.8272,
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9tHO3c--_JrFm_CJkyLdC4mG0Zb4soPBs-z1jo4YKQ&s=10",
    },
    {
          "id": "tn_thirumoorthy_dam_falls",
          "name": "Thirumoorthy Dam, Falls & Amanalingeshwarar Temple",
          "district": "Tiruppur",
          "category": "waterfalls",
          "categoryName": "Cascading Waterfalls",
          "rating": 4.7,
          "ratingCount": 8400,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "06:00 PM",
          "holiday": "None",
          "bestTime": "September to March",
          "shortDesc": "A picturesque hill spot combining Panchalingam waterfalls, Thirumoorthy Dam reservoir, and ancient Trimurti temple.",
          "longDesc": "Situated at the foot of Anamalai Hills near Udumalpet in Tiruppur district, Thirumoorthy Hills is famous for the Amanalingeshwarar Temple where Brahma, Vishnu, and Shiva are worshipped together. A 2-km stream trek leads to Panchalingam Falls.",
          "attractions": [
                "Panchalingam Waterfalls Trek",
                "Amanalingeshwarar Temple",
                "Thirumoorthy Dam Boating",
                "Film Shooting Location"
          ],
          "history": "Ancient sacred hill associated with Sage Agastya and Anusuya Devi.",
          "lat": 10.4667,
          "lng": 77.1667,
                              "image": "https://ramyashotels.com/wp-content/uploads/2021/06/puliyancholai-falls-trichy-best-view.jpg",
    },
    {
          "id": "tn_sivanmalai_murugan",
          "name": "Sivanmalai Murugan Temple, Kangeyam",
          "district": "Tiruppur",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 7100,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "Famous hill shrine of Lord Murugan known for its unique \"Aandavan Uthiravu\" divine oracle box tradition.",
          "longDesc": "Sivanmalai is a hilltop Murugan temple in Kangeyam taluk of Tiruppur district. The temple is nationally famous for its \"Aandavan Uthiravu Box\" where items seen in devotees dreams are placed to divine future events.",
          "attractions": [
                "Aandavan Uthiravu Miracle Box",
                "Hill Stairs & Driveway",
                "Kangeyam Bull Heritage Spot"
          ],
          "history": "Praised by Arunagirinathar in Thiruppugazh hymns.",
          "lat": 11.05,
          "lng": 77.5667,
                              "image": "/images/places/murugan_hill_temple.jpg",
    },
    {
          "id": "tn_arunachaleswarar_temple",
          "name": "Arunachaleswarar Temple (Annamalaiyar Temple)",
          "district": "Tiruvannamalai",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.9,
          "ratingCount": 28400,
          "entryFee": "Free (Special Darshan ₹50)",
          "openTime": "05:00 AM",
          "closeTime": "09:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "One of the largest temple complexes in India representing Agni (Fire) element among Pancha Bhoota Stalam.",
          "longDesc": "Arunachaleswarar Temple spans over 25 acres at the foot of the sacred Annamalai hill. Featuring four massive gopurams (the eastern Raja Gopuram stands 217 feet high). Millions perform the 14-km Girivalam barefoot walk on full moon nights.",
          "attractions": [
                "217-ft Raja Gopuram",
                "1000-Pillared Hall",
                "14-km Girivalam Barefoot Path",
                "Karthigai Deepam Flame"
          ],
          "history": "Expanded by Cholas, Hoysalas, Vijayanagara monarchs, and Tanjore Nayaks over 1,200 years.",
          "lat": 12.2319,
          "lng": 79.0672,
                              "image": "/images/places/tn_arunachaleswarar_temple.jpg",
    },
    {
          "id": "tn_ramana_ashram_virupaksha",
          "name": "Sri Ramana Ashram & Virupaksha Cave",
          "district": "Tiruvannamalai",
          "category": "cultural",
          "categoryName": "Cultural & Heritage",
          "rating": 4.9,
          "ratingCount": 14200,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "World-famous spiritual ashram of Advaita sage Bhagavan Sri Ramana Maharshi at the base of Arunachala Hill.",
          "longDesc": "Sri Ramanasramam is a sanctuary of peace where Sri Ramana Maharshi lived and taught self-inquiry (\"Who am I?\"). Visitors can meditate in the Samadhi hall, visit Skandashramam, and Virupaksha Cave on the hill trail.",
          "attractions": [
                "Ramana Samadhi Meditation Hall",
                "Virupaksha Cave Trail",
                "Skandashramam",
                "Peacock Gardens"
          ],
          "history": "Established in 1922 around the mother’s samadhi by devotees of Bhagavan Ramana Maharshi.",
          "lat": 12.2225,
          "lng": 79.0628,
                              "image": "/images/places/shiva_river_temple.jpg",
    },
    {
          "id": "tn_sripuram_golden_temple",
          "name": "Sripuram Sri Lakshmi Narayani Golden Temple",
          "district": "Vellore",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 22100,
          "entryFee": "Free (Express Darshan available)",
          "openTime": "04:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A magnificent spiritual sanctuary coated with 1,500 kg of pure gold foil located inside a star-shaped path.",
          "longDesc": "Sripuram Golden Temple is dedicated to Goddess Sri Lakshmi Narayani. Set amidst 100 acres of green landscape in Malaikodi near Vellore, the entire temple structure is covered in gold leafing hand-engraved by Vedic artisans.",
          "attractions": [
                "1500 kg Gold Coated Vimanam",
                "Star-Shaped 1.8km Green Pathway",
                "Illuminated Night View",
                "Sri Narayani Peedam"
          ],
          "history": "Conceived and inaugurated in 2007 by spiritual leader Sri Sakthi Amma.",
          "lat": 12.8717,
          "lng": 79.0883,
                              "image": "/images/places/tn_sripuram_golden_temple.jpg",
    },
    {
          "id": "tn_amirthi_zoo_falls",
          "name": "Amirthi Zoological Park & Waterfalls",
          "district": "Vellore",
          "category": "parks",
          "categoryName": "Parks & Gardens",
          "rating": 4.3,
          "ratingCount": 5200,
          "entryFee": "₹10",
          "openTime": "08:00 AM",
          "closeTime": "05:00 PM",
          "holiday": "Tuesday",
          "bestTime": "October to March",
          "shortDesc": "A popular eco-tourism park spanning 25 hectares inside Javadi Hills with wildlife and natural waterfalls.",
          "longDesc": "Amirthi Zoo is located 25 km south of Vellore in Javadi Hills. Half of the park is developed as a mini zoo housing spotted deer, peacocks, crocodiles, and herbal gardens while the other half leads to Amirthi seasonal waterfalls.",
          "attractions": [
                "Mini Zoo & Deer Park",
                "Forest Trail Waterfall",
                "Herbal Garden & Picnic Area"
          ],
          "history": "Established in 1967 by Tamil Nadu Forest Department.",
          "lat": 12.7167,
          "lng": 79.0667,
                              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePoEWQfQLl9ZqljHWVYQP33BaiwiJxI3Ux8QTozUraA&s=10",
    },
    {
          "id": "tn_thirukoilur_ulagalantha_perumal",
          "name": "Thirukoilur Ulagalantha Perumal Temple",
          "district": "Villupuram",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 7800,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A famous Divya Desam shrine dedicated to Lord Vamana (Trivikrama) with a colossal wooden deity measuring 20 feet.",
          "longDesc": "Thirukoilur is one of the 108 Divya Desams. The main deity, Lord Trivikrama, is depicted with one foot raised measuring the heavens. It is the holy birthplace where the first three Alvars (Poigai, Bhoothath, Peyalvar) met.",
          "attractions": [
                "20-ft Wooden Trivikrama Deity",
                "Third Tallest Gopuram (192 ft)",
                "Birthplace of Divya Prabandham"
          ],
          "history": "Inscriptions record patronage from Chola, Pallava, and Vijayanagara emperors.",
          "lat": 11.9667,
          "lng": 79.2,
                              "image": "/images/places/tn_srivilliputhur_andal_temple.jpg",
    },
    {
          "id": "tn_auroville_matrimandir",
          "name": "Auroville Visitor Centre & Matrimandir",
          "district": "Villupuram",
          "category": "cultural",
          "categoryName": "Cultural & Heritage",
          "rating": 4.6,
          "ratingCount": 16900,
          "entryFee": "Free (Passes for Matrimandir viewing at Visitor Centre)",
          "openTime": "09:00 AM",
          "closeTime": "05:30 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "An international universal township dedicated to human unity, featuring the iconic golden globe Matrimandir.",
          "longDesc": "Located near Villupuram-Puducherry border, Auroville was founded in 1968 by Mirra Alfassa (\"The Mother\"). At the center of the township stands Matrimandir, a giant golden globe containing an inner crystal globe meditation hall.",
          "attractions": [
                "Matrimandir Golden Dome",
                "Visitor Centre Exhibitions",
                "Banyan Tree Amphitheatre",
                "Organic Cafes & Handicrafts"
          ],
          "history": "Inaugurated in 1968 with soil brought from 124 nations.",
          "lat": 11.9986,
          "lng": 79.8097,
                              "image": "/images/places/tn_auroville_matrimandir.jpg",
    },
    {
          "id": "tn_srivilliputhur_andal_temple",
          "name": "Srivilliputhur Andal Temple & Rajagopuram",
          "district": "Virudhunagar",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.9,
          "ratingCount": 18900,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "09:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "The birthplace of Goddess Andal & Periyalvar; its 192-foot Rajagopuram is the official Emblem of Tamil Nadu.",
          "longDesc": "Srivilliputhur Divya Desam temple is celebrated for its towering 192-foot, 11-tiered Rajagopuram featured in the official Seal of Tamil Nadu Government. Famous for the grand Car Festival (Aadi Pooram) and delicious Srivilliputhur Palkova sweet.",
          "attractions": [
                "192-ft TN Emblem Rajagopuram",
                "Vatapatrasayi & Andal Shrines",
                "Car Festival (Aadi Pooram)",
                "Srivilliputhur Palkova Stalls"
          ],
          "history": "Built by King Villu and Pandyan rulers; home of Andal’s Thiruppavai.",
          "lat": 9.5083,
          "lng": 77.6317,
                                        "image": "/images/places/tn_srivilliputhur_andal_temple.jpg",
    },
    {
          "id": "tn_irukkankudi_mariamman",
          "name": "Irukkankudi Mariamman Temple",
          "district": "Virudhunagar",
          "category": "temples",
          "categoryName": "Temples & Religious Places",
          "rating": 4.8,
          "ratingCount": 11400,
          "entryFee": "Free",
          "openTime": "06:00 AM",
          "closeTime": "08:00 PM",
          "holiday": "None",
          "bestTime": "October to March",
          "shortDesc": "A renowned shrine of Goddess Mariamman situated at the junction of Arjun River and Vaippar River.",
          "longDesc": "Irukkankudi Mariamman Temple is located at the confluence of Arjun and Vaippar rivers in Sattur taluk. Devotees visit to pray for health and offer prayers by carrying Agni Chatti (fire pots).",
          "attractions": [
                "River Confluence Temple",
                "Annual Panguni & Aadi Festivals",
                "Sacred Bathing Ghats"
          ],
          "history": "Over 300-year-old popular folk shrine built by local villagers.",
          "lat": 9.35,
          "lng": 77.9167,
                                        "image": "/images/places/shiva_river_temple.jpg",
    },
    {
      id: 'tn_meenakshi',
      name: 'Meenakshi Amman Temple',
      district: 'Madurai',
      category: 'temples',
      categoryName: 'Temples & Religious Places',
      rating: 4.9,
      ratingCount: 14200,
      entryFee: 'Free (Special Darshan ₹50 - ₹100)',
      openTime: '05:00 AM',
      closeTime: '09:30 PM',
      holiday: 'None (Open daily)',
      bestTime: 'October to March',
      shortDesc: 'A historic Dravidian masterpiece with 14 colorful gopurams and 33,000 intricate sculptures.',
      longDesc: 'The Meenakshi Sundareshwarar Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai. It is dedicated to Goddess Meenakshi (a form of Parvati) and her consort Sundareshwarar (a form of Shiva). Renowned worldwide for its staggering 14 towers ranging from 45 to 50 meters, the Hall of 1000 Pillars, and golden lotus pond.',
      attractions: ['Hall of 1000 Pillars', 'Golden Lotus Tank (Pottramarai Kulam)', 'Musical Pillars', 'Night Temple Procession'],
      history: 'Built originally by Kulasekara Pandya, rebuilt extensively by Nayak rulers in 16th–17th century. It forms the center and lifeline of the 2,500-year-old city of Madurai.',
      lat: 9.9195,
      lng: 78.1193,
      image: 'https://m.media-amazon.com/images/S/pv-target-images/b3073d7cf3711749a1e962055fa72c8aac3716244c4a6bed240692980e65c7a7.jpg',
      transport: {
        bus: { available: 'Frequent City & Intercity Buses', station: 'Madurai Periyar Bus Stand', distance: '1.5 km' },
        train: { station: 'Madurai Junction Railway Station (MDU)', distance: '1.8 km', frequency: 'Direct trains daily from Chennai, Bangalore, Mumbai' },
        taxi: { options: 'Ola, Uber, Auto Rickshaws, Pre-paid Taxis at station' }
      },
      emergency: {
        hospitals: [
          { name: 'Apollo Speciality Hospitals Madurai', distance: '4.2 km', phone: '0452-2580000', address: 'KK Nagar, Madurai' },
          { name: 'Government Rajaji Hospital', distance: '2.5 km', phone: '0452-2532535', address: 'Panagal Road, Madurai' }
        ],
        police: [
          { name: 'Temple Police Station (B1)', distance: '0.3 km', phone: '0452-2338300', address: 'West Chitrai St, Madurai' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy 24x7', distance: '0.4 km', location: 'East Veli Street' }
        ]
      },
      hotels: [
        { name: 'Heritage Madurai', price: '₹4,500/night', rating: 4.7, dist: '3.5 km', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MB7owAUBPoQQscknUBYGw-aHRd0t5sp5UaAUraEpvw&s=10', phone: '+91 452 2388500' },
        { name: 'Hotel Supreme', price: '₹1,800/night', rating: 4.2, dist: '1.1 km', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWTiyFd8UbTaivGBIAkp-CTVdykJQJWSQboJZ_zwR5JQ842sBLYDWQ-o&s=10', phone: '+91 452 2343151' }
      ],
      restaurants: [
        { name: 'Murugan Idli Shop', foodType: 'South Indian Veg', price: '₹150 for two', rating: 4.6, dist: '0.5 km', address: 'West Tower St' },
        { name: 'Amma Mess', foodType: 'Traditional Non-Veg Chettinad', price: '₹400 for two', rating: 4.5, dist: '2.0 km', address: 'Alagar Kovil Main Rd' }
      ]
    },
    {
  id: 'tn_gandhi_memorial_museum_madurai',
  name: 'Gandhi Memorial Museum',
  district: 'Madurai',
  category: 'museums',
  categoryName: 'Museums',

  rating: 4.5,
  ratingCount: 11500,

  entryFee: 'Free',
  openTime: '10:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A historic museum dedicated to Mahatma Gandhi, showcasing India’s freedom struggle, Gandhi’s life, photographs, documents and personal belongings.',

  longDesc:
    'The Gandhi Memorial Museum in Madurai is one of the important Gandhi museums in India. Established in 1959, the museum is located in the historic Tamukkam Palace. It preserves photographs, letters, documents, paintings and exhibits related to Mahatma Gandhi and the Indian freedom movement. One of its notable exhibits is associated with the blood-stained cloth worn by Mahatma Gandhi at the time of his assassination.',

  attractions: [
    'Blood-stained cloth associated with Mahatma Gandhi',
    'Freedom Struggle Gallery',
    'Photographs and Historical Documents',
    'Gandhi Life and Philosophy Exhibits',
    'Historic Tamukkam Palace Building',
    'Library and Research Collections'
  ],

  history:
    'The museum was established in 1959 as a memorial to Mahatma Gandhi. It is housed in the historic Tamukkam Palace, a palace associated with the Nayak period. The museum was developed to preserve and present the history of Mahatma Gandhi and India’s freedom struggle.',

  lat: 9.9417,
  lng: 78.1380,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28-SvOXbrVPLjUhQw_8BIX-7ZCF_CyG3lsaWxXP2g1Q&s=10',

  transport: {
    bus: {
      available: 'Frequent City Buses and Auto Rickshaws',
      station: 'Mattuthavani Bus Stand / Periyar Bus Stand',
      distance: 'Approximately 4 km from Periyar Bus Stand'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 4 km',
      frequency:
        'Direct trains available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 3 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 5 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'Tallakulam Police Station',
        distance: 'Approximately 1 km',
        phone: '100',
        address: 'Tallakulam, Madurai'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Tallakulam, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 5 km',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDKaPpddiLOUu8juYdSXhSHeCNUJdU4fdnq0BtcdfPw&s=10',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 2 km',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELlxs9S36Tm-Nevm6dcI3V9swaUDWr3VBOzFMzX9VZg&s=10',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 3 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 2 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_vandiyur_mariamman_teppakulam',
  name: 'Vandiyur Mariamman Teppakulam',
  district: 'Madurai',
  category: 'lakes',
  categoryName: 'Dams & Lakes',

  rating: 4.5,
  ratingCount: 8500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A विशाल historic temple tank in Madurai, famous for its central island temple and the grand annual Teppam Float Festival.',

  longDesc:
    'Vandiyur Mariamman Teppakulam is one of the largest temple tanks in Tamil Nadu and a popular attraction in Madurai. The tank is located near the Vandiyur Mariamman Temple and has a small temple dedicated to Lord Vinayagar at its center. It is especially famous for the annual Teppam Float Festival, during which decorated temple idols are placed on illuminated floats and taken around the tank, attracting thousands of devotees and visitors.',

  attractions: [
    'Historic Temple Tank',
    'Central Island with Vinayagar Temple',
    'Annual Teppam Float Festival',
    'Beautiful Evening Views',
    'Illuminated Festival Decorations',
    'Photography and Scenic Surroundings'
  ],

  history:
    'Vandiyur Mariamman Teppakulam was constructed during the reign of King Thirumalai Nayak in the 17th century. According to local tradition, soil excavated from this area was used for the construction of the nearby Thirumalai Nayakkar Palace. The tank later became an important religious and cultural landmark of Madurai and is closely associated with the annual Teppam festival.',

  lat: 9.9095,
  lng: 78.1399,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDeF00PoKcIzh6qv9NGWtc-FUzxiWKr_MjlRwA73N3A&s=10',

  transport: {
    bus: {
      available: 'Frequent City Buses, Auto Rickshaws and Local Transport',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 4 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 5 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 5 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 4 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'B2 Jaihindpuram Police Station',
        distance: 'Approximately 3 km',
        phone: '100',
        address: 'Madurai City, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Vandiyur, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 4 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 3 km',
      image:
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 4 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 3 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_samanar_hills',
  name: 'Samanar Hills',
  district: 'Madurai',
  category: 'historical',
  categoryName: 'Historical & Cultural Places',

  rating: 4.5,
  ratingCount: 6200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'An ancient Jain heritage site near Madurai, famous for its rock-cut sculptures, Tamil-Brahmi inscriptions, Jain caves and scenic hill views.',

  longDesc:
    'Samanar Hills, located at Keelakuyilkudi near Madurai, is an important Jain heritage and archaeological site. The hills contain ancient Jain beds, rock-cut sculptures, caves and inscriptions dating back many centuries. The site reflects the presence and influence of Jainism in the Madurai region. Visitors can explore the historic carvings while enjoying panoramic views of the surrounding countryside.',

  attractions: [
    'Ancient Jain Rock-Cut Sculptures',
    'Jain Caves and Stone Beds',
    'Tamil-Brahmi Inscriptions',
    'Settipodavu Jain Sculptures',
    'Ancient Archaeological Remains',
    'Panoramic Hill Views',
    'Photography and Trekking'
  ],

  history:
    'Samanar Hills is associated with the ancient Jain community that lived in the Madurai region. The site contains stone beds, inscriptions and sculptures believed to date from the early historic period through the later centuries of Jain influence. Tamil-Brahmi inscriptions and Jain carvings found here provide important evidence of the religious and cultural history of ancient Tamil Nadu.',

  lat: 9.8689,
  lng: 78.0646,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_E7kGlej9Rej9wbtmZhSPwo5z5k0PMYTjkaQdU-FlQ&s=10',

  transport: {
    bus: {
      available: 'City Buses and Local Buses are available towards Keelakuyilkudi. Auto Rickshaws and Taxis are also available from Madurai.',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 12 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 14 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available from Madurai city'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 14 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 16 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'Nagamalai Pudukottai Police Station',
        distance: 'Approximately 6 km',
        phone: '100',
        address: 'Nagamalai Pudukottai, Madurai'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 6 km',
        location: 'Nagamalai Pudukottai, Madurai'
      }
    ]
  },

  hotels: [
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 12 km',
      image:
        'https://gos3.ibcdn.com/9ddd2988705111e7886e0a4cef95d023.jpg',
      phone: '+91 452 2388500'
    },
    {
      name: 'Fortune Pandiyan Hotel',
      price: '₹4,000/night',
      rating: 4.4,
      dist: 'Approximately 14 km',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMhfBELWWWwRO-ARjje8w402JqtDYniv7Deh1LGSLGRw&s=10',
      phone: '+91 452 4356789'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 13 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 14 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
{
  id: 'tn_thirumalai_nayakkar_palace',
  name: 'Thirumalai Nayakkar Palace',
  district: 'Madurai',
  category: 'palaces',
  categoryName: 'Forts & Palaces',

  rating: 4.5,
  ratingCount: 19000,

  entryFee: 'Adult ₹10, Child ₹5 (Additional charges may apply for camera and light & sound show)',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Open daily)',

  bestTime: 'October to March',

  shortDesc:
    'A magnificent 17th-century palace famous for its grand Indo-Saracenic architecture, massive pillars and evening light and sound show.',

  longDesc:
    'Thirumalai Nayakkar Palace is one of the most famous historical landmarks in Madurai. Built in 1636 by King Thirumalai Nayak, the palace is known for its enormous pillars, high ceilings, impressive arches and beautiful architectural design. Originally, the palace complex was much larger than what remains today. The main attraction is the central courtyard surrounded by massive pillars, and visitors can also enjoy the light and sound show that narrates the history of Madurai and the Nayak dynasty.',

  attractions: [
    'Grand Central Courtyard',
    'Massive Stone Pillars',
    'Beautiful Arches and Domes',
    'Nayak Period Architecture',
    'Light and Sound Show',
    'Historic Palace Interior'
  ],

  history:
    'The palace was built in 1636 by King Thirumalai Nayak, one of the prominent rulers of the Madurai Nayak dynasty. It originally served as the royal residence and administrative center of the kingdom. The palace was constructed using a blend of Dravidian and Islamic architectural influences. Although only a part of the original palace survives today, it remains an important symbol of Madurai’s cultural and historical heritage.',

  lat: 9.9156,
  lng: 78.1210,

  image:
    'https://www.laurewanders.com/wp-content/uploads/2023/09/Thirumalai-Nayakar-Palace-00002-scaled.jpg',

  transport: {
    bus: {
      available: 'Frequent City Buses, Auto Rickshaws and Local Transport',
      station: 'Madurai Periyar Bus Stand',
      distance: 'Approximately 1.5 km'
    },

    train: {
      station: 'Madurai Junction Railway Station (MDU)',
      distance: 'Approximately 2 km',
      frequency:
        'Direct trains are available daily from Chennai, Bangalore, Mumbai and other major cities'
    },

    taxi: {
      options:
        'Ola, Uber, Auto Rickshaws and Private Taxis are available throughout Madurai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Rajaji Hospital',
        distance: 'Approximately 3 km',
        phone: '0452-2532535',
        address: 'Panagal Road, Madurai'
      },
      {
        name: 'Apollo Speciality Hospitals Madurai',
        distance: 'Approximately 5 km',
        phone: '0452-2580000',
        address: 'KK Nagar, Madurai'
      }
    ],

    police: [
      {
        name: 'B1 Vilakkuthoon Police Station',
        distance: 'Approximately 1 km',
        phone: '100',
        address: 'Madurai City, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: 'Approximately 1 km',
        location: 'Madurai City'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotel Supreme',
      price: '₹2,000/night',
      rating: 4.2,
      dist: 'Approximately 1 km',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuUKAUErMJ3crxpj2sOFPMUlOzNeIbS63CBDKmq9z7dA&s=10',
      phone: '+91 452 2343151'
    },
    {
      name: 'Heritage Madurai',
      price: '₹4,500/night',
      rating: 4.7,
      dist: 'Approximately 4 km',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtcpjJVAYhup5lbSoDx-V4DzZ1EhKsO6qcCVjNhFtzw&s=10',
      phone: '+91 452 2388500'
    }
  ],

  restaurants: [
    {
      name: 'Murugan Idli Shop',
      foodType: 'South Indian Vegetarian',
      price: '₹150 for two',
      rating: 4.6,
      dist: 'Approximately 1 km',
      address: 'West Masi Street, Madurai'
    },
    {
      name: 'Amma Mess',
      foodType: 'Traditional South Indian Non-Vegetarian',
      price: '₹400 for two',
      rating: 4.5,
      dist: 'Approximately 2 km',
      address: 'Alagar Kovil Main Road, Madurai'
    }
  ]
},
    {
      id: 'tn_brihadeeswarar',
      name: 'Brihadeeswarar Temple (Big Temple)',
      district: 'Thanjavur',
      category: 'historical',
      categoryName: 'Historical Sites & Temples',
      rating: 4.9,
      ratingCount: 11800,
      entryFee: 'Free (Camera: ₹30)',
      openTime: '06:00 AM',
      closeTime: '08:30 PM',
      holiday: 'None',
      bestTime: 'November to February',
      shortDesc: '1,000-year-old Chola engineering wonder carved entirely out of granite, a UNESCO World Heritage site.',
      longDesc: 'Built by Emperor Raja Raja Chola I between 1003 and 1010 AD, Brihadeeswarar Temple is a towering example of Dravidian architecture. The temple tower (Vimana) is 66 meters high and capped with a monolithic 80-tonne granite dome. The monolithic Nandi statue weighs over 20 tonnes.',
      attractions: ['66m Granite Tower (Vimana)', '20-Ton Monolithic Nandi', 'Ancient Chola Frescoes', 'Sivaganga Tank'],
      history: 'Commissioned by Chola King Raja Raja I in 1010 AD. Celebrated 1,000 years of existence in 2010.',
      lat: 10.7828,
      lng: 79.1318,
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'Thanjavur Old & New Bus Stands', station: 'Old Bus Stand', distance: '1.2 km' },
        train: { station: 'Thanjavur Junction (TJ)', distance: '1.5 km', frequency: 'Direct trains from Chennai, Trichy, Madurai' },
        taxi: { options: 'Auto rickshaws, Cabs available near temple gate' }
      },
      emergency: {
        hospitals: [
          { name: 'Thanjavur Medical College Hospital', distance: '4.0 km', phone: '04362-240024', address: 'MC Road, Thanjavur' }
        ],
        police: [
          { name: 'Thanjavur West Police Station', distance: '0.8 km', phone: '04362-230300', address: 'South Rampart' }
        ],
        pharmacies: [
          { name: 'MedPlus Pharmacy', distance: '0.5 km', location: 'South Street' }
        ]
      },
      hotels: [
        { name: 'Svatma Thanjavur', price: '₹5,500/night', rating: 4.8, dist: '2.8 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 4362 273222' }
      ],
      restaurants: [
        { name: 'Sree Ariya Bhavan', foodType: 'Pure Vegetarian South Indian', price: '₹200 for two', rating: 4.4, dist: '0.6 km', address: 'Old Bus Stand Road' }
      ]
    },
    {
  id: 'tn_thanjavur_palace',
  name: 'Thanjavur Maratha Palace & Royal Museum',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Museums',
  rating: 4.6,
  ratingCount: 6800,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'Check locally',
  bestTime: 'November to February',
  shortDesc: 'Historic royal palace complex featuring ancient architecture, museums, royal artifacts and the Saraswathi Mahal Library.',
  longDesc: 'Thanjavur Maratha Palace is an important heritage complex associated with the Nayak and Maratha rulers of Thanjavur. The complex includes royal courtyards, museums, art collections, historic weapons and the famous Saraswathi Mahal Library.',
  attractions: [
    'Royal Palace Complex',
    'Saraswathi Mahal Library',
    'Royal Museum',
    'Art Gallery',
    'Durbar Hall',
    'Ancient Sculptures'
  ],
  history: 'The palace complex was developed under the Nayak rulers and later expanded and used by the Maratha rulers of Thanjavur.',
  lat: 10.7867,
  lng: 79.1378,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_lYvVrDqEcsTmSQ0ST4AVVh9YsF5uxzsKjHS80yo7w&s=10',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur Bus Stand',
      station: 'Thanjavur Old Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '2.5 km',
      frequency: 'Regular trains from Chennai, Trichy and Madurai'
    },
    taxi: {
      options: 'Auto Rickshaws, Cabs & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '4 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Thanjavur West Police Station',
        distance: '1.5 km',
        phone: '04362-230300',
        address: 'Thanjavur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thanjavur Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '2.5 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Thanjavur Town'
    }
  ]
},

{
  id: 'tn_gangaikonda_cholapuram',
  name: 'Gangaikonda Cholapuram Brihadisvara Temple',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Temples',
  rating: 4.8,
  ratingCount: 7200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Magnificent Chola-era temple built by Rajendra Chola I and part of the UNESCO Great Living Chola Temples.',
  longDesc: 'Gangaikonda Cholapuram Brihadisvara Temple is a magnificent Chola temple commissioned by Rajendra Chola I. The temple is celebrated for its Dravidian architecture, detailed sculptures and connection with the imperial Chola capital.',
  attractions: [
    'Brihadisvara Temple',
    'Chola Sculptures',
    'Temple Architecture',
    'Stone Inscriptions',
    'Historic Temple Complex'
  ],
  history: 'Built by Rajendra Chola I in the 11th century as the centerpiece of his new capital, Gangaikonda Cholapuram.',
  lat: 11.2001,
  lng: 79.4510,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38HkvZefadjKLtxYPTszK8vmxMyIHbKpS7K3jH2AXYA&s=10',
  transport: {
    bus: {
      available: 'Buses from Thanjavur, Kumbakonam and Jayankondam',
      station: 'Gangaikonda Cholapuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Kumbakonam Railway Station',
      distance: '35 km',
      frequency: 'Road transport required from Kumbakonam'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government Hospital',
        distance: '10–15 km',
        phone: 'Verify current number',
        address: 'Nearby Town'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Gangaikonda Cholapuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–5 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kumbakonam',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '30–40 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.1,
      dist: '1–5 km',
      address: 'Gangaikonda Cholapuram Area'
    }
  ]
},

{
  id: 'tn_darasuram_airavatesvara',
  name: 'Airavatesvara Temple, Darasuram',
  district: 'Thanjavur',
  category: 'historical',
  categoryName: 'Historical Sites & Temples',
  rating: 4.8,
  ratingCount: 6100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Beautiful 12th-century Chola temple famous for its intricate stone carvings and architectural details.',
  longDesc: 'Airavatesvara Temple at Darasuram is one of the finest examples of later Chola architecture. The temple is known for its detailed sculptures, stone craftsmanship, musical steps and elegant architectural design.',
  attractions: [
    'Stone Carvings',
    'Musical Steps',
    'Chola Architecture',
    'Temple Sculptures',
    'UNESCO Great Living Chola Temples'
  ],
  history: 'Built by Chola King Rajaraja II in the 12th century and recognized as part of the UNESCO Great Living Chola Temples.',
  lat: 10.9488,
  lng: 79.3550,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYfu7d2_-UJcxMu5G4DTgjqNRnWfJeOkI1covJQgkpg&s=10',
  transport: {
    bus: {
      available: 'Buses from Kumbakonam and Thanjavur',
      station: 'Darasuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Kumbakonam Railway Station',
      distance: '5 km',
      frequency: 'Regular passenger and express trains'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kumbakonam',
        distance: '6 km',
        phone: 'Verify current number',
        address: 'Kumbakonam'
      }
    ],
    police: [
      {
        name: 'Darasuram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Darasuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Darasuram / Kumbakonam'
      }
    ]
  },
  hotels: [
    {
      name: 'Quality Inn Viha, Kumbakonam',
      price: '₹2,500–₹5,000/night',
      rating: 4.2,
      dist: '5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kumbakonam Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '5 km',
      address: 'Kumbakonam'
    }
  ]
},

{
  id: 'tn_punnainallur_mariamman',
  name: 'Punnainallur Mariamman Temple',
  district: 'Thanjavur',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.7,
  ratingCount: 5400,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',
  shortDesc: 'Famous Mariamman temple near Thanjavur known for its spiritual significance and traditional festivals.',
  longDesc: 'Punnainallur Mariamman Temple is a popular pilgrimage destination near Thanjavur dedicated to Goddess Mariamman. The temple attracts devotees throughout the year and is especially vibrant during important festivals.',
  attractions: [
    'Mariamman Shrine',
    'Temple Architecture',
    'Religious Festivals',
    'Temple Tank',
    'Traditional Rituals'
  ],
  history: 'The temple has a long association with local traditions and devotion to Goddess Mariamman.',
  lat: 10.7860,
  lng: 79.1850,
  image: 'https://thanjavur.info/wp-content/uploads/2019/05/punnainallur-mariamman-temple.jpg',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur',
      station: 'Punnainallur Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '7 km',
      frequency: 'Local buses and taxis available'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '8 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Punnainallur Area'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Punnainallur'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '8 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '5–8 km',
      address: 'Thanjavur'
    }
  ]
},

{
  id: 'tn_sivaganga_park_thanjavur',
  name: 'Sivaganga Park',
  district: 'Thanjavur',
  category: 'parks',
  categoryName: 'Parks & Recreation',
  rating: 4.2,
  ratingCount: 3200,
  entryFee: 'Entry charges may apply',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular green recreational space near the Big Temple with gardens, walking areas and family attractions.',
  longDesc: 'Sivaganga Park is a popular recreational area in Thanjavur located close to the Brihadeeswarar Temple. The park provides gardens, walking spaces and a relaxed environment for families and visitors.',
  attractions: [
    'Gardens',
    'Walking Areas',
    'Children’s Recreation',
    'Green Spaces',
    'Nearby Big Temple'
  ],
  history: 'Developed as a public recreational space in the historic Thanjavur city area.',
  lat: 10.7785,
  lng: 79.1325,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1599DOlOnwP0igMCxAA_hLmX8LY6fZlHfH3nyTuobjQ&s=10',
  transport: {
    bus: {
      available: 'Local buses from Thanjavur',
      station: 'Thanjavur Old Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '2 km',
      frequency: 'Regular trains and buses available'
    },
    taxi: {
      options: 'Auto Rickshaws, Cabs & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Thanjavur Medical College Hospital',
        distance: '4 km',
        phone: '04362-240024',
        address: 'MC Road, Thanjavur'
      }
    ],
    police: [
      {
        name: 'Thanjavur West Police Station',
        distance: '1 km',
        phone: '04362-230300',
        address: 'Thanjavur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5 km',
        location: 'Thanjavur'
      }
    ]
  },
  hotels: [
    {
      name: 'Svatma Thanjavur',
      price: '₹5,500/night',
      rating: 4.8,
      dist: '3 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4362 273222'
    }
  ],
  restaurants: [
    {
      name: 'Thanjavur Restaurants',
      foodType: 'South Indian & Traditional Tamil Cuisine',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1–2 km',
      address: 'Thanjavur Town'
    }
  ]
},

{
  id: 'tn_thiruvaiyaru',
  name: 'Thiruvaiyaru',
  district: 'Thanjavur',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.5,
  ratingCount: 3900,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'January to February',
  shortDesc: 'Historic Cauvery-side town famous for Carnatic music heritage and the annual Thyagaraja Aradhana.',
  longDesc: 'Thiruvaiyaru is a culturally important town on the banks of the Cauvery River. It is closely associated with Saint-composer Thyagaraja and is famous for the annual Thyagaraja Aradhana music festival.',
  attractions: [
    'Thyagaraja Samadhi',
    'Cauvery River',
    'Thyagaraja Aradhana',
    'Traditional Temples',
    'Cultural Heritage'
  ],
  history: 'Thiruvaiyaru has a long association with Carnatic music and the life and legacy of Saint Thyagaraja.',
  lat: 10.8815,
  lng: 79.1020,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGNh8VocIngel9TAsOMJ2J6liF1_JZuLYGLjp2jmaBQ&s=10',
  transport: {
    bus: {
      available: 'Buses from Thanjavur and nearby towns',
      station: 'Thiruvaiyaru Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Thanjavur Junction (TJ)',
      distance: '15 km',
      frequency: 'Buses and taxis connect Thanjavur'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruvaiyaru',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Thiruvaiyaru'
      }
    ],
    police: [
      {
        name: 'Thiruvaiyaru Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thiruvaiyaru'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5 km',
        location: 'Thiruvaiyaru'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Thanjavur',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thiruvaiyaru Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Thiruvaiyaru'
    }
  ]
},
    {
      id: 'tn_ooty',
      name: 'Ooty (Udhagamandalam) Hill Station',
      district: 'The Nilgiris',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.8,
      ratingCount: 18500,
      entryFee: 'Free (Park entries ₹30 - ₹100)',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'October to June',
      shortDesc: 'The Queen of Hill Stations featuring lush tea gardens, mist-capped Nilgiri hills, and heritage toy train.',
      longDesc: 'Ooty is Tamil Nadu’s premier hill station located at an altitude of 2,240 meters in the Nilgiri Hills. Famous for its Government Botanical Gardens, Ooty Lake boating, Doddabetta Peak, tea factory tours, and the UNESCO Heritage Nilgiri Mountain Railway toy train.',
      attractions: ['Nilgiri Toy Train', 'Ooty Lake & Boating', 'Government Botanical Garden', 'Doddabetta Peak (2,637m)', 'Tea Factory & Museum'],
      history: 'Developed during the British Raj as the summer capital of the Madras Presidency.',
      lat: 11.4102,
      lng: 76.6950,
      image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1000&q=80',
      transport: {
        bus: { available: 'TNSTC & KSRTC buses from Coimbatore, Mysore, Bangalore', station: 'Ooty Central Bus Stand', distance: '1.0 km' },
        train: { station: 'Udagamandalam Railway Station (UAM)', distance: '0.5 km', frequency: 'Heritage Toy Train from Mettupalayam' },
        taxi: { options: 'Local sight-seeing cabs, Jeeps for Doddabetta' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Head Quarters Hospital Ooty', distance: '1.5 km', phone: '0423-2442212', address: 'Hospital Road, Ooty' }
        ],
        police: [
          { name: 'Ooty Town Police Station', distance: '1.0 km', phone: '0423-2444004', address: 'Commercial Road' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Ooty', distance: '0.7 km', location: 'Charing Cross' }
        ]
      },
      hotels: [
        { name: 'Savoy - IHCL SeleQtions Ooty', price: '₹9,000/night', rating: 4.8, dist: '1.8 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 423 2225500' },
        { name: 'Sterling Ooty Fern Hill', price: '₹4,200/night', rating: 4.4, dist: '3.0 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 423 2444150' }
      ],
      restaurants: [
        { name: 'Place To Bee', foodType: 'Italian & Organic European', price: '₹600 for two', rating: 4.5, dist: '1.2 km', address: 'Club Road' },
        { name: 'Shinkows Chinese Restaurant', foodType: 'Indo-Chinese Heritage', price: '₹450 for two', rating: 4.6, dist: '0.8 km', address: 'Commissioners Road' }
      ]
    },
    {
  id: 'tn_ooty_botanical_garden',
  name: 'Government Botanical Garden, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Gardens & Nature',
  rating: 4.7,
  ratingCount: 12500,
  entryFee: '₹50 (Adults)',
  openTime: '07:00 AM',
  closeTime: '06:30 PM',
  holiday: 'None',
  bestTime: 'April to June',
  shortDesc: 'Beautiful 55-acre botanical garden featuring rare plants, colorful flowers, lawns, and ancient trees.',
  longDesc: 'The Government Botanical Garden in Ooty is one of the most popular attractions in the Nilgiris. Spread across around 55 acres, the garden features a wide variety of exotic and indigenous plants, colorful flower beds, fern houses, and a famous fossilized tree trunk believed to be millions of years old.',
  attractions: [
    'Lower Garden',
    'New Garden',
    'Italian Garden',
    'Fern House',
    'Fossil Tree',
    'Flower Shows'
  ],
  history: 'Established in 1848 and maintained by the Government of Tamil Nadu to promote horticulture and preserve plant species.',
  lat: 11.4146,
  lng: 76.7115,
  image: 'https://www.tourdeooty.com/images/botanical-garden-ooty-19.webp',
  transport: {
    bus: {
      available: 'Local buses from Ooty town',
      station: 'Ooty Bus Stand',
      distance: '2.5 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '3.0 km',
      frequency: 'Regular heritage train services'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '3.0 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '3.0 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Savoy - IHCL SeleQtions Ooty',
      price: '₹9,000/night',
      rating: 4.8,
      dist: '3.0 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2225500'
    }
  ],
  restaurants: [
    {
      name: 'Ooty Local Restaurants',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '2–3 km',
      address: 'Ooty Town'
    }
  ]
},

{
  id: 'tn_ooty_rosegarden',
  name: 'Government Rose Garden, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Gardens & Nature',
  rating: 4.6,
  ratingCount: 7800,
  entryFee: '₹50 (Adults)',
  openTime: '07:30 AM',
  closeTime: '06:30 PM',
  holiday: 'None',
  bestTime: 'April to June',
  shortDesc: 'Terraced hillside garden famous for thousands of rose varieties and colorful floral displays.',
  longDesc: 'The Government Rose Garden is located on the slopes of Elk Hill in Ooty. The garden is known for its large collection of roses arranged across beautifully landscaped terraces and is one of the most attractive flower gardens in the Nilgiris.',
  attractions: [
    'Rose Collections',
    'Terraced Gardens',
    'Elk Hill View',
    'Flower Photography',
    'Seasonal Blooms'
  ],
  history: 'Established in 1995 and developed as an important horticultural attraction in Ooty.',
  lat: 11.4025,
  lng: 76.7050,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnk10-J2u5UIv25JQ1Jtr1_XorDEdkG76chG5xoRaxw&s=10',
  transport: {
    bus: {
      available: 'Local buses and town buses',
      station: 'Ooty Bus Stand',
      distance: '2.0 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '2.0 km',
      frequency: 'Heritage train services'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '2.5 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '2.0 km',
        phone: '0423-2444004',
        address: 'Commercial Road'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–2 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sterling Ooty Fern Hill',
      price: '₹4,200/night',
      rating: 4.4,
      dist: '3.5 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2444150'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants near Rose Garden',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹450 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Elk Hill Road, Ooty'
    }
  ]
},

{
  id: 'tn_ooty_pykara',
  name: 'Pykara Lake & Waterfalls',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Waterfalls',
  rating: 4.7,
  ratingCount: 9600,
  entryFee: 'Boat ride charges apply',
  openTime: '08:30 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'October to June',
  shortDesc: 'Scenic Nilgiri destination featuring a beautiful lake, boat rides, waterfalls, and forest landscapes.',
  longDesc: 'Pykara is a popular tourist destination located near Ooty. The Pykara River flows through the Nilgiri hills and forms a scenic lake and waterfalls. Visitors can enjoy boating, viewpoints, and peaceful forest scenery.',
  attractions: [
    'Pykara Lake',
    'Pykara Waterfalls',
    'Boat House',
    'Pykara River',
    'Forest Scenery',
    'Viewpoints'
  ],
  history: 'Pykara is associated with the natural landscape and hydroelectric development of the Nilgiri region.',
  lat: 11.4478,
  lng: 76.6250,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy1e8g0_qBGbPh1n7YzCudMZKKf4PsqchPp6bTiAI95UwMYnriKT54noet&s=10',
  transport: {
    bus: {
      available: 'Buses and tourist vehicles from Ooty',
      station: 'Ooty Central Bus Stand',
      distance: '23 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '23 km',
      frequency: 'Road transport required from Ooty'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Sightseeing Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '25 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '23 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '23 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sterling Ooty Fern Hill',
      price: '₹4,200/night',
      rating: 4.4,
      dist: '24 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 423 2444150'
    }
  ],
  restaurants: [
    {
      name: 'Pykara Tourist Restaurants',
      foodType: 'South Indian & Snacks',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1 km',
      address: 'Pykara Tourist Area'
    }
  ]
},

{
  id: 'tn_ooty_avalanche',
  name: 'Avalanche Lake & Eco Tourism',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Eco Tourism',
  rating: 4.7,
  ratingCount: 5200,
  entryFee: 'Eco-tourism package charges apply',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to June',
  shortDesc: 'Peaceful high-altitude lake surrounded by forests, mountains, and pristine Nilgiri landscapes.',
  longDesc: 'Avalanche Lake is a scenic natural attraction near Ooty surrounded by dense forests and mountain landscapes. The area is known for its peaceful atmosphere, trekking opportunities, camping and eco-tourism activities.',
  attractions: [
    'Avalanche Lake',
    'Mountain Views',
    'Forest Trails',
    'Trekking',
    'Eco Tourism',
    'Nature Photography'
  ],
  history: 'The Avalanche region is known for its natural forests, mountain ecosystem and important water resources of the Nilgiris.',
  lat: 11.3070,
  lng: 76.5860,
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/dd/4d/c6/glacier-national-park.jpg?w=1200&h=1200&s=1',
  transport: {
    bus: {
      available: 'Eco-tourism vehicles and local transport from Ooty',
      station: 'Ooty Bus Stand',
      distance: '28 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '28 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Eco-tourism Vehicles & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '30 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '28 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '28 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ooty',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '28–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Restaurants in Ooty',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '28 km',
      address: 'Ooty Town'
    }
  ]
},

{
  id: 'tn_ooty_emarald_lake',
  name: 'Emerald Lake, Ooty',
  district: 'The Nilgiris',
  category: 'nature',
  categoryName: 'Lakes & Nature',
  rating: 4.6,
  ratingCount: 4100,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to June',
  shortDesc: 'Serene mountain lake surrounded by tea plantations, rolling hills, and peaceful countryside.',
  longDesc: 'Emerald Lake is located in the Silent Valley area of the Nilgiris near Ooty. The lake is surrounded by green hills, tea estates and natural landscapes, making it a peaceful destination for nature lovers and photographers.',
  attractions: [
    'Emerald Lake',
    'Tea Estates',
    'Mountain Views',
    'Bird Watching',
    'Nature Photography',
    'Sunrise & Sunset'
  ],
  history: 'The Emerald region forms part of the important high-altitude water and forest ecosystem of the Nilgiris.',
  lat: 11.3265,
  lng: 76.6100,
  image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/e1/7e/73/img-20151223-104621-largejpg.jpg?w=1200&h=-1&s=1',
  transport: {
    bus: {
      available: 'Local buses and tourist vehicles from Ooty',
      station: 'Ooty Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Udagamandalam Railway Station (UAM)',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Sightseeing Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Head Quarters Hospital Ooty',
        distance: '27 km',
        phone: '0423-2442212',
        address: 'Hospital Road, Ooty'
      }
    ],
    police: [
      {
        name: 'Ooty Town Police Station',
        distance: '25 km',
        phone: '0423-2444004',
        address: 'Commercial Road, Ooty'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Ooty',
        distance: '25 km',
        location: 'Ooty Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Ooty',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '25–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants in Ooty',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.2,
      dist: '25 km',
      address: 'Ooty Town'
    }
  ]
},
    {
      id: 'tn_marina',
      name: 'Marina Beach Chennai',
      district: 'Chennai',
      category: 'beaches',
      categoryName: 'Beaches & Oceans',
      rating: 4.6,
      ratingCount: 22000,
      entryFee: 'Free',
      openTime: '05:00 AM',
      closeTime: '11:00 PM',
      holiday: 'None',
      bestTime: 'November to February (Evening sunset)',
      shortDesc: 'The second longest natural urban beach in the world stretching 13 km along the Bay of Bengal.',
      longDesc: 'Marina Beach is Chennai’s iconic beach running from Fort St. George in the north to Besant Nagar in the south. Famous for its vibrant evening atmosphere, street food stalls (sundal, crispy fish, bajji), heritage statues of Tamil scholars, and Chennai Lighthouse offering panoramic views.',
      attractions: ['Chennai Lighthouse', 'MGR & Anna Memorials', 'Local Street Food Stalls', 'Sunrise & Sunset Views'],
      history: 'Promenaded and built by Governor Mountstuart Elphinstone Grant Duff in the 1880s.',
      lat: 13.0499,
      lng: 80.2824,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAjmkXhD2dRlCD_dtwLsqdzvhQc193qnlrF9XXt2KzbbGXDHONcq2hpo&s=10',
      transport: {
        bus: { available: 'MTC Buses connecting across Chennai', station: 'Marina Beach Bus Stop', distance: '0.1 km' },
        train: { station: 'Chepauk / Light House MRTS Station', distance: '0.4 km', frequency: 'MRTS trains every 15 mins' },
        taxi: { options: 'Uber, Ola, Autos plentiful along Kamarajar Salai' }
      },
      emergency: {
        hospitals: [
          { name: 'Rajiv Gandhi Government General Hospital', distance: '3.5 km', phone: '044-25305000', address: 'EVR Periyar Salai, Park Town' }
        ],
        police: [
          { name: 'Marina Police Station (D5)', distance: '0.2 km', phone: '044-23452445', address: 'Kamarajar Salai' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Triplicane', distance: '0.6 km', location: 'Triplicane High Road' }
        ]
      },
      hotels: [
        { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3.5 km', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNHamxtrMUlQXxhNqLD3LAzzu_xMM0xdoeGrg83uaJg&s=10', phone: '+91 44 33661234' }
      ],
      restaurants: [
        { name: 'Nair Mess', foodType: 'South Indian Meals & Seafood', price: '₹300 for two', rating: 4.5, dist: '0.8 km', address: 'Triplicane' }
      ]
    },
    {
  id: 'ch_phoenix_marketcity',
  name: 'Phoenix Marketcity',
  district: 'Chennai',
  category: 'shopping',
  categoryName: 'Shopping Malls & Entertainment',
  rating: 4.5,
  ratingCount: 116889,
  entryFee: 'Free Entry',
  openTime: '10:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'November to February',

  shortDesc: 'One of Chennai’s largest shopping and entertainment destinations with premium brands, restaurants, cinema and family entertainment.',

  longDesc: 'Phoenix Marketcity is a major shopping and entertainment destination located on Velachery Main Road, Chennai. The mall offers a wide range of fashion, lifestyle, electronics and luxury brands along with restaurants, cafes, food court, cinema and entertainment facilities. It is a popular destination for shopping, dining and leisure activities.',

  attractions: [
    'Premium Fashion & Lifestyle Brands',
    'Food Court & Restaurants',
    'Multiplex Cinema',
    'Family Entertainment',
    'Luxury Shopping',
    'Cafes & Fine Dining'
  ],

  history: 'Phoenix Marketcity Chennai was developed as a major destination mall in Velachery, combining shopping, dining, entertainment and leisure facilities in one location.',

  lat: 12.9913,
  lng: 80.2167,

  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeMa5qrD4nsK5MvGNwyQ19Bfe5Yl8MP3953rmL0v9pQ&s=10',

  transport: {
    bus: {
      available: 'Frequent City & Local Buses',
      station: 'Velachery Bus Stand',
      distance: '2.0 km'
    },
    train: {
      station: 'Velachery MRTS Railway Station',
      distance: '2.5 km',
      frequency: 'Frequent suburban/MRTS services within Chennai'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Sri Ramachandra Medical Centre - Porur',
        distance: '8.5 km',
        phone: '044-45928500',
        address: 'Porur, Chennai'
      },
      {
        name: 'Apollo Hospitals - Vanagaram',
        distance: '10.0 km',
        phone: '044-48960000',
        address: 'Vanagaram, Chennai'
      }
    ],

    police: [
      {
        name: 'Velachery Police Station',
        distance: '2.0 km',
        phone: '044-22551800',
        address: 'Velachery, Chennai'
      }
    ],

    pharmacies: [
      {
        name: 'Croma / Pharmacy Services',
        distance: '0.2 km',
        location: 'Phoenix Marketcity, Velachery'
      }
    ]
  },

  hotels: [
    {
      name: 'Turyaa Chennai',
      price: '₹4,500/night',
      rating: 4.3,
      dist: '5.0 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQZ_0tpMmOymrQ64tMWXdQkmSuKTTQSYTkhYcGQ7S3A&s=10',
      phone: '+91 44 7100 0000'
    },
    {
      name: 'Holiday Inn Express Chennai OMR',
      price: '₹4,000/night',
      rating: 4.2,
      dist: '6.0 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyrn7OWEg4gWqqAn54exWTDYbaIXc-K5mRqsGD2C-uAQ&s=10',
      phone: '+91 44 7111 2222'
    }
  ],

  restaurants: [
    {
      name: 'Absolute Barbecues',
      foodType: 'Indian & Barbecue',
      price: '₹1,200 for two',
      rating: 4.4,
      dist: '0.5 km',
      address: 'Velachery, Chennai'
    },
    {
      name: 'The Pasta Bar Veneto',
      foodType: 'Italian',
      price: '₹1,000 for two',
      rating: 4.3,
      dist: '0.5 km',
      address: 'Phoenix Marketcity, Velachery'
    }
  ]
},
{
  id: 'ch_marina_mall',
  name: 'The Marina Mall',
  district: 'Chennai',
  category: 'shopping',
  categoryName: 'Shopping Malls & Entertainment',
  rating: 4.4,
  ratingCount: 31920,
  entryFee: 'Free Entry',
  openTime: '10:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'November to February',

  shortDesc: 'A popular shopping and leisure destination on OMR featuring shopping, dining, cinema, entertainment and family activities.',

  longDesc: 'The Marina Mall is a major shopping and leisure destination located on Old Mahabalipuram Road in Egattur, Chennai. The mall features a wide selection of retail brands, restaurants and food outlets, an amusement centre, kids zone, entertainment areas, hypermarket and an eight-screen digital multiplex. It is a convenient destination for families, tourists and local visitors.',

  attractions: [
    '150+ Shopping Brands',
    'Food Court & Restaurants',
    'Eight-Screen Digital Multiplex',
    'Kids Zone',
    'Amusement Centre',
    'Entertainment Zones',
    'Hypermarket'
  ],

  history: 'The Marina Mall was developed as an all-encompassing shopping and leisure destination on Chennai’s OMR corridor, bringing shopping, dining and entertainment together under one roof.',

  lat: 12.8338,
  lng: 80.2280,

  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DPY9ZDryS4PgN9AO1Ej39UY9AXUTeDL3N67clT0wFw&s=10',

  transport: {
    bus: {
      available: 'Frequent City & OMR Route Buses',
      station: 'Navalur Bus Stop',
      distance: '2.0 km'
    },
    train: {
      station: 'Chennai Central Railway Station',
      distance: 'Approximately 30 km',
      frequency: 'Regular trains and suburban services from Chennai'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Chettinad Hospital and Research Institute',
        distance: '7.0 km',
        phone: '044-47411000',
        address: 'Kelambakkam, Chennai'
      },
      {
        name: 'Hindustan Hospital',
        distance: '5.0 km',
        phone: '044-27474000',
        address: 'Kelambakkam, Chennai'
      }
    ],

    police: [
      {
        name: 'Navalur Police Station',
        distance: '2.5 km',
        phone: '044-27452300',
        address: 'Navalur, Chennai'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '0.5 km',
        location: 'Near The Marina Mall, OMR'
      }
    ]
  },

  hotels: [
    {
      name: 'Novotel Chennai Sipcot',
      price: '₹5,500/night',
      rating: 4.4,
      dist: '5.5 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0eo_yGAaImdGXeS-8b-xyOlHJxn7k3m5mNie122t_MQ&s=10',
      phone: '+91 44 6654 4444'
    },
    {
      name: 'Ibis Chennai Sipcot',
      price: '₹4,000/night',
      rating: 4.2,
      dist: '5.5 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSphFOg8OnQiJGhTE_glqZV_Oey3xizjUoabNdEM4Mfcg&s=10',
      phone: '+91 44 6644 4444'
    }
  ],

  restaurants: [
    {
      name: 'Burger King',
      foodType: 'Fast Food',
      price: '₹500 for two',
      rating: 4.2,
      dist: '0.2 km',
      address: 'The Marina Mall, OMR, Chennai'
    },
    {
      name: 'Domino’s Pizza',
      foodType: 'Pizza & Fast Food',
      price: '₹600 for two',
      rating: 4.2,
      dist: '0.2 km',
      address: 'The Marina Mall, OMR, Chennai'
    }
  ]
},
    {
      id: 'tn_mahabalipuram',
      name: 'Mahabalipuram Shore Temple & Rock Reliefs',
      district: 'Chengalpattu',
      category: 'historical',
      categoryName: 'Historical Sites & Monuments',
      rating: 4.8,
      ratingCount: 15400,
      entryFee: '₹40 (Indians), ₹600 (Foreigners)',
      openTime: '06:00 AM',
      closeTime: '06:00 PM',
      holiday: 'None',
      bestTime: 'October to March',
      shortDesc: '7th-century UNESCO Pallava coastal temple complex with rock-cut rathas and open-air bas-reliefs.',
      longDesc: 'Mahabalipuram (Mamallapuram) is a renowned UNESCO World Heritage site known for its 7th and 8th-century Pallava architectural monuments. Key attractions include the Shore Temple overlooking the Bay of Bengal, Pancha Rathas (monolithic chariots), Krishna’s Butter Ball, and Descent of the Ganges bas-relief.',
      attractions: ['Shore Temple', 'Pancha Rathas', 'Descent of the Ganges', 'Krishna’s Butterball', 'Mahabalipuram Lighthouse'],
      history: 'Flourished as a major port city under King Narasimhavarman I (Mamalla) in 7th century AD.',
      lat: 12.6169,
      lng: 80.1992,
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
      transport: {
        bus: { available: 'ECR Express Buses from Chennai ECR/CMBT', station: 'Mahabalipuram Bus Stand', distance: '0.5 km' },
        train: { station: 'Chengalpattu Junction (CGL)', distance: '29 km', frequency: 'Frequent buses connect to Mahabalipuram' },
        taxi: { options: 'ECR Tourist Taxis, Rental Bikes & Scooters' }
      },
      emergency: {
        hospitals: [
          { name: 'Mahabalipuram Government Hospital', distance: '1.0 km', phone: '044-27442227', address: 'E Raja St' }
        ],
        police: [
          { name: 'Mahabalipuram Tourist Police', distance: '0.4 km', phone: '044-27442229', address: 'Kovalam Road' }
        ],
        pharmacies: [
          { name: 'MedPlus Mahabalipuram', distance: '0.3 km', location: 'East Raja Street' }
        ]
      },
      hotels: [
        { name: 'InterContinental Chennai Mahabalipuram Resort', price: '₹9,500/night', rating: 4.7, dist: '8.0 km', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmh94AadVvDvKcwopxt71frcVwwMfolWqBiuCjQaxvg&s=10' }
      ],
      restaurants: [
        { name: 'Moonrakers Restaurant', foodType: 'Fresh Coastal Seafood', price: '₹700 for two', rating: 4.4, dist: '0.4 km', address: 'Othavadai Street' }
      ]
    },
    {
  id: 'tn_muttukadu_boat_house',
  name: 'Muttukadu Boat House',
  district: 'Chengalpattu',
  category: 'waterfalls',
  categoryName: 'Water Activities & Recreation',
  rating: 4.4,
  ratingCount: 6800,
  entryFee: 'Boat ride charges apply',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular backwater destination on ECR offering boating, water activities and scenic coastal views.',
  longDesc: 'Muttukadu Boat House is a popular recreational destination along the East Coast Road. The backwaters provide opportunities for boating and water-based activities while the surrounding coastal landscape makes it a popular weekend destination from Chennai.',
  attractions: [
    'Boat Rides',
    'Backwaters',
    'Speed Boats',
    'Water Activities',
    'ECR Scenic Drive'
  ],
  history: 'Developed as an important boating and recreation destination along the East Coast Road.',
  lat: 12.8282,
  lng: 80.2500,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRu9AZZH5Zl-tJjHz3rZhceGUVjWqz6Y8WegVdOV3Ig&s=10',
  transport: {
    bus: {
      available: 'ECR buses from Chennai and nearby towns',
      station: 'Muttukadu Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '35 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'ECR Taxis, Rental Cars & Bikes'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government / Private Hospital',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'ECR Area'
      }
    ],
    police: [
      {
        name: 'Kelambakkam Police Station',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Kelambakkam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '3–5 km',
        location: 'ECR Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'ECR Beach Resorts',
      price: '₹4,000–₹12,000/night',
      rating: 4.3,
      dist: '2–8 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpiqEK_ImRwnhIb6HJ0VsoR9T4yZfmuexSiQIJ7wFd2v8w6GbLAlv_bY&s=10',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'ECR Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹800 for two',
      rating: 4.2,
      dist: '1–5 km',
      address: 'East Coast Road'
    }
  ]
},

{
  id: 'tn_kovalam_chengalpattu',
  name: 'Kovalam Beach',
  district: 'Chengalpattu',
  category: 'beaches',
  categoryName: 'Beaches & Oceans',
  rating: 4.5,
  ratingCount: 5200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Scenic coastal destination known for its beach, fishing village atmosphere and water activities.',
  longDesc: 'Kovalam is a popular coastal destination along the East Coast Road in Chengalpattu district. The area combines a scenic beach, traditional fishing village atmosphere and recreational water activities.',
  attractions: [
    'Kovalam Beach',
    'Fishing Village',
    'Coastal Views',
    'Surfing',
    'Beach Walks'
  ],
  history: 'A traditional coastal fishing settlement that has developed into a popular ECR tourist destination.',
  lat: 12.7956,
  lng: 80.2500,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR-PwHJBRaqamosXcIM0ALNFUch5zhBcAsNmcCCd0XXg&s=10',
  transport: {
    bus: {
      available: 'Regular ECR buses from Chennai',
      station: 'Kovalam Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '35 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'ECR Taxis, Rental Cars & Bikes'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Nearby Government / Private Hospital',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Kovalam / Kelambakkam Area'
      }
    ],
    police: [
      {
        name: 'Kovalam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kovalam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Kovalam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Kovalam Beach Resorts',
      price: '₹3,000–₹10,000/night',
      rating: 4.3,
      dist: '1–5 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPi3fvgP3c6Vf9CDGRGA5wyNAfa0iPe38yfF8mTwtAA&s',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kovalam Seafood Restaurants',
      foodType: 'Fresh Seafood & South Indian',
      price: '₹700 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Kovalam Beach Road'
    }
  ]
},

{
  id: 'tn_vandalur_zoo',
  name: 'Arignar Anna Zoological Park (Vandalur Zoo)',
  district: 'Chengalpattu',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',
  rating: 4.5,
  ratingCount: 18000,
  entryFee: 'Entry charges vary by visitor category',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'November to February',
  shortDesc: 'Major zoological park near Chennai featuring a wide variety of mammals, birds, reptiles and safari experiences.',
  longDesc: 'Arignar Anna Zoological Park at Vandalur is one of the major wildlife attractions near Chennai. The large park provides visitors with opportunities to see lions, tigers, elephants, deer, birds, reptiles and many other species.',
  attractions: [
    'Lion Safari',
    'Tiger Enclosure',
    'Elephants',
    'Birds',
    'Reptiles',
    'Butterfly Garden'
  ],
  history: 'The zoo was originally established in Madras in 1855 and was later relocated to its present Vandalur location.',
  lat: 12.8797,
  lng: 80.0810,
  image: 'https://images.staybook.in/arignar-anna-zoological-park/0.jpg',
  transport: {
    bus: {
      available: 'MTC buses from Chennai and Tambaram',
      station: 'Vandalur Zoo Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Vandalur Railway Station',
      distance: '2 km',
      frequency: 'Suburban trains and buses available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tambaram',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Tambaram'
      }
    ],
    police: [
      {
        name: 'Vandalur Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Vandalur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2 km',
        location: 'Vandalur Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Tambaram & Vandalur',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '2–8 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQK9R1klLPGoDX03ebxDMfGjRJPjfle0HAqlCjETDLnw&s=10',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Vandalur Restaurants',
      foodType: 'South Indian & Multi Cuisine',
      price: '₹500 for two',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Vandalur'
    }
  ]
},

{
  id: 'tn_thirukalukundram',
  name: 'Vedagiriswarar Temple, Thirukalukundram',
  district: 'Chengalpattu',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.7,
  ratingCount: 3200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Ancient hill temple dedicated to Lord Shiva, located on Vedagiri Hill with scenic views of the surrounding region.',
  longDesc: 'Vedagiriswarar Temple at Thirukalukundram is an important Shiva temple located on Vedagiri Hill. Visitors can experience the historic temple architecture and enjoy panoramic views from the hilltop.',
  attractions: [
    'Vedagiriswarar Temple',
    'Vedagiri Hill',
    'Hilltop Viewpoint',
    'Temple Tank',
    'Traditional Architecture'
  ],
  history: 'An ancient Shaivite temple associated with the religious traditions and legends of Thirukalukundram.',
  lat: 12.6083,
  lng: 80.0667,
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vedhagireeswarar_temple_with_the_tank.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  transport: {
    bus: {
      available: 'Regular buses from Chengalpattu and Mahabalipuram',
      station: 'Thirukalukundram Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '15 km',
      frequency: 'Regular buses and taxis available'
    },
    taxi: {
      options: 'Local Taxis, Rental Cars & Auto Rickshaws'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thirukalukundram',
        distance: '1.2 km',
        phone: 'Verify current number',
        address: 'Thirukalukundram'
      }
    ],
    police: [
      {
        name: 'Thirukalukundram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thirukalukundram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1 km',
        location: 'Thirukalukundram Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels & Lodges in Thirukalukundram',
      price: '₹1,000–₹3,000/night',
      rating: 4.0,
      dist: '1–3 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwFvVzof1cNq7Pq7XmmLcvTIhrHsVPeyE5zCMT8OZ0A&s=10',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thirukalukundram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.0,
      dist: '1 km',
      address: 'Thirukalukundram'
    }
  ]
},

{
  id: 'tn_madurantakam_lake',
  name: 'Madurantakam Lake',
  district: 'Chengalpattu',
  category: 'lakes',
  categoryName: 'Lakes & Nature',
  rating: 4.3,
  ratingCount: 2100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Historic irrigation lake offering peaceful views, greenery and seasonal bird-watching opportunities.',
  longDesc: 'Madurantakam Lake is one of the notable water bodies in Chengalpattu district. The reservoir is important for irrigation and provides a peaceful natural setting, particularly after the monsoon season.',
  attractions: [
    'Lake View',
    'Bird Watching',
    'Sunrise Views',
    'Nature Photography',
    'Green Landscapes'
  ],
  history: 'A historic irrigation reservoir that has played an important role in the agricultural development of the region.',
  lat: 12.5106,
  lng: 79.8844,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w0YXZBd57efwf6BwRwcnZHO7VAwlii2NKq72WyEBWg&s=10',
  transport: {
    bus: {
      available: 'Buses from Chengalpattu and Chennai',
      station: 'Madurantakam Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Madurantakam Railway Station',
      distance: '3 km',
      frequency: 'Regular passenger trains and buses'
    },
    taxi: {
      options: 'Local Taxis & Auto Rickshaws'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Madurantakam',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    police: [
      {
        name: 'Madurantakam Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Madurantakam Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Madurantakam',
      price: '₹1,000–₹3,000/night',
      rating: 4.0,
      dist: '2–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Madurantakam Local Restaurants',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.0,
      dist: '2–4 km',
      address: 'Madurantakam Town'
    }
  ]
},

{
  id: 'tn_kelambakkam',
  name: 'Kelambakkam & ECR Coastal Area',
  district: 'Chengalpattu',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',
  rating: 4.3,
  ratingCount: 2900,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Growing coastal destination near Chennai featuring ECR scenery, beaches, resorts and nearby recreational attractions.',
  longDesc: 'Kelambakkam is an important gateway to the ECR coastal belt in Chengalpattu district. The surrounding area is known for scenic roads, coastal landscapes, resorts and access to several nearby tourist attractions.',
  attractions: [
    'ECR Scenic Drive',
    'Coastal Views',
    'Nearby Beaches',
    'Beach Resorts',
    'Water Activities'
  ],
  history: 'Kelambakkam developed as an important junction connecting Chennai with the ECR coastal tourism belt.',
  lat: 12.7955,
  lng: 80.2280,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0KjHq8CgRJv_QGsANhIVqCVwRNY05YDdp0KxIU31YCA&s=10',
  transport: {
    bus: {
      available: 'MTC and private buses from Chennai',
      station: 'Kelambakkam Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Chengalpattu Junction (CGL)',
      distance: '30 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'Uber, Ola, ECR Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Chettinad Hospital',
        distance: '5–8 km',
        phone: 'Verify current number',
        address: 'Kelambakkam Area'
      }
    ],
    police: [
      {
        name: 'Kelambakkam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kelambakkam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kelambakkam'
      }
    ]
  },
  hotels: [
    {
      name: 'ECR Beach Resorts',
      price: '₹3,000–₹10,000/night',
      rating: 4.2,
      dist: '2–8 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kelambakkam Restaurants',
      foodType: 'South Indian & Seafood',
      price: '₹600 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Kelambakkam'
    }
  ]
},
    {
  id: 'tn_kapaleeswarar',
  name: 'Kapaleeshwarar Temple, Mylapore',
  district: 'Chennai',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.8,
  ratingCount: 16800,
  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic Dravidian-style Shiva temple in Mylapore, famous for its colorful gopuram and traditional architecture.',
  longDesc: 'Kapaleeshwarar Temple is one of Chennai’s most famous temples, located in the historic Mylapore neighborhood. Dedicated to Lord Shiva and Goddess Parvati, the temple is known for its impressive Rajagopuram, detailed sculptures, traditional rituals and vibrant festivals.',
  attractions: [
    'Rajagopuram',
    'Kapaleeshwarar Shrine',
    'Karpagambal Shrine',
    'Temple Tank',
    'Traditional Sculptures',
    'Panguni Festival'
  ],
  history: 'An ancient Shaivite temple associated with the historic Mylapore region and Tamil devotional traditions.',
  lat: 13.0338,
  lng: 80.2697,
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Kapaleeswarar1.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  transport: {
    bus: {
      available: 'MTC buses from major parts of Chennai',
      station: 'Mylapore Bus Terminus',
      distance: '0.5 km'
    },
    train: {
      station: 'Mylapore MRTS / Light House area',
      distance: '1.5 km',
      frequency: 'Regular suburban/MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Royapettah Hospital', distance: '3.5 km', phone: 'Verify current number', address: 'Royapettah, Chennai' }
    ],
    police: [
      { name: 'Mylapore Police Station', distance: '1.0 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'Mylapore' }
    ]
  },
  hotels: [
    { name: 'Raintree, St. Mary’s Road', price: '₹6,000–₹10,000/night', rating: 4.4, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Mylapore Restaurants', foodType: 'South Indian Vegetarian', price: '₹500 for two', rating: 4.3, dist: '0.5 km', address: 'Mylapore' }
  ]
},

{
  id: 'tn_fort_st_george',
  name: 'Fort St. George',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Historical Sites & Museums',
  rating: 4.5,
  ratingCount: 9200,
  entryFee: 'Entry charges may apply',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Sunday',
  bestTime: 'November to February',
  shortDesc: 'Historic colonial fort complex and one of the most important landmarks in Chennai.',
  longDesc: 'Fort St. George is a historic British-era fort complex located near the Marina coastline. The complex includes St. Mary’s Church, the Fort Museum and important colonial-era buildings. It played a major role in the development of Madras during the colonial period.',
  attractions: [
    'Fort Museum',
    'St. Mary’s Church',
    'Secretariat Buildings',
    'Colonial Architecture',
    'Historic Artifacts'
  ],
  history: 'Established by the English East India Company in 1640 and became an important center of British administration in South India.',
  lat: 13.0795,
  lng: 80.2870,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKO8R4RWGinADvJqx7gdM2UzsLZBjgyXTI03iEQbM2Q&s=10',
  transport: {
    bus: {
      available: 'MTC buses from across Chennai',
      station: 'Fort St. George Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chennai Beach Railway Station',
      distance: '1.5 km',
      frequency: 'Frequent suburban train services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '2.5 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Fort Police Station', distance: '1.0 km', phone: 'Verify current number', address: 'Fort St. George' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1–2 km', location: 'Parrys / George Town' }
    ]
  },
  hotels: [
    { name: 'Taj Connemara', price: '₹8,000–₹15,000/night', rating: 4.5, dist: '4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'George Town Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹400 for two', rating: 4.1, dist: '1–2 km', address: 'George Town, Chennai' }
  ]
},

{
  id: 'tn_san_thome_basilica',
  name: 'San Thome Basilica',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Churches & Heritage Sites',
  rating: 4.7,
  ratingCount: 8600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Historic neo-Gothic basilica and important Christian pilgrimage site overlooking the Chennai coast.',
  longDesc: 'San Thome Basilica is a historic church located in Mylapore, Chennai. It is traditionally associated with the tomb of Saint Thomas the Apostle and is known for its distinctive white neo-Gothic architecture.',
  attractions: [
    'Main Basilica',
    'Tomb Chapel',
    'Museum',
    'Neo-Gothic Architecture',
    'Prayer Hall'
  ],
  history: 'The basilica is traditionally associated with Saint Thomas the Apostle and has been rebuilt in different architectural forms over the centuries.',
  lat: 13.0339,
  lng: 80.2770,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGsmNtjc7bEflo4LlR3KzUlow6Hjz4xwzp4OiWaMnrnDiuivH8Vpzn78w&s=10',
  transport: {
    bus: {
      available: 'MTC buses from major Chennai areas',
      station: 'San Thome Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Mylapore MRTS Station',
      distance: '2 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'St. Isabel’s Hospital', distance: '2 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    police: [
      { name: 'Mylapore Police Station', distance: '1.5 km', phone: 'Verify current number', address: 'Mylapore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'San Thome' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'San Thome Restaurants', foodType: 'South Indian & Continental', price: '₹700 for two', rating: 4.2, dist: '0.5–1 km', address: 'San Thome, Chennai' }
  ]
},

{
  id: 'tn_valluvar_kottam',
  name: 'Valluvar Kottam',
  district: 'Chennai',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Sites',
  rating: 4.5,
  ratingCount: 7300,
  entryFee: 'Entry charges may apply',
  openTime: '08:30 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Monument dedicated to Tamil poet Thiruvalluvar, featuring a large stone chariot and Kural inscriptions.',
  longDesc: 'Valluvar Kottam is an important cultural landmark in Chennai dedicated to the Tamil poet and philosopher Thiruvalluvar. The monument is known for its impressive stone chariot, large auditorium and inscriptions of verses from the Thirukkural.',
  attractions: [
    'Stone Chariot',
    'Thirukkural Inscriptions',
    'Auditorium',
    'Thiruvalluvar Monument',
    'Tamil Cultural Exhibits'
  ],
  history: 'Constructed in the 1970s as a memorial to Thiruvalluvar and his contribution to Tamil literature.',
  lat: 13.0524,
  lng: 80.2425,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShID90A6D3macSNvW7CG3oJNfTWqeNCaWtxwwT5ANxw&s=10',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Valluvar Kottam Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Nungambakkam Railway Station',
      distance: '2 km',
      frequency: 'Regular suburban train services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Hospital, Chennai', distance: '3 km', phone: 'Verify current number', address: 'Chennai' }
    ],
    police: [
      { name: 'Nungambakkam Police Station', distance: '2 km', phone: 'Verify current number', address: 'Nungambakkam, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5–1 km', location: 'Nungambakkam' }
    ]
  },
  hotels: [
    { name: 'The Residency Towers', price: '₹5,000–₹9,000/night', rating: 4.4, dist: '2 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'T. Nagar Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹600 for two', rating: 4.3, dist: '2 km', address: 'T. Nagar, Chennai' }
  ]
},

{
  id: 'tn_guindy_national_park',
  name: 'Guindy National Park',
  district: 'Chennai',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',
  rating: 4.4,
  ratingCount: 6800,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'November to February',
  shortDesc: 'Urban national park protecting blackbuck, spotted deer, birds, reptiles and native dry evergreen vegetation.',
  longDesc: 'Guindy National Park is a protected green space located within Chennai city. It is home to blackbuck, spotted deer, jackals, reptiles and many species of birds. The park provides a unique opportunity to experience wildlife within an urban environment.',
  attractions: [
    'Blackbuck',
    'Spotted Deer',
    'Bird Watching',
    'Nature Trails',
    'Dry Evergreen Forest'
  ],
  history: 'The protected area evolved from the Guindy forest reserve and became a national park in 1978.',
  lat: 13.0068,
  lng: 80.2206,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRJ5qpPyL9Y4_eNDQVu1A0TJiFkQRYkhexLZmcYlejg&s',
  transport: {
    bus: {
      available: 'MTC buses from major parts of Chennai',
      station: 'Guindy National Park Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Guindy Railway Station',
      distance: '2 km',
      frequency: 'Frequent suburban trains'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Government Hospital Guindy', distance: '3 km', phone: 'Verify current number', address: 'Guindy, Chennai' }
    ],
    police: [
      { name: 'Guindy Police Station', distance: '2 km', phone: 'Verify current number', address: 'Guindy, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1–2 km', location: 'Guindy' }
    ]
  },
  hotels: [
    { name: 'ITC Grand Chola', price: '₹10,000–₹18,000/night', rating: 4.7, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Guindy Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹700 for two', rating: 4.3, dist: '2–3 km', address: 'Guindy, Chennai' }
  ]
},

{
  id: 'tn_birla_planetarium',
  name: 'Birla Planetarium Chennai',
  district: 'Chennai',
  category: 'science',
  categoryName: 'Science & Education',
  rating: 4.5,
  ratingCount: 5900,
  entryFee: 'Ticket charges apply',
  openTime: '10:00 AM',
  closeTime: '05:45 PM',
  holiday: 'Check locally',
  bestTime: 'Throughout the year',
  shortDesc: 'Popular science centre and planetarium offering astronomy shows, exhibitions and educational experiences.',
  longDesc: 'B. M. Birla Planetarium in Chennai is part of the Periyar Science and Technology Centre. It features an advanced planetarium, astronomy shows, science exhibits and educational displays designed for students, families and science enthusiasts.',
  attractions: [
    'Planetarium Shows',
    'Science Exhibitions',
    'Astronomy Displays',
    'Technology Exhibits',
    'Educational Programs'
  ],
  history: 'Established in 1988 as part of the science and technology education initiatives in Chennai.',
  lat: 13.0067,
  lng: 80.2497,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF3EivmonipyrtZTbAV3fHpXUDgwV97XqgYCqxvfQSZw&s=10',
  transport: {
    bus: {
      available: 'MTC buses from across Chennai',
      station: 'Kotturpuram Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Kotturpuram MRTS Station',
      distance: '1.5 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Adyar Government Hospital', distance: '3 km', phone: 'Verify current number', address: 'Adyar, Chennai' }
    ],
    police: [
      { name: 'Kotturpuram Police Station', distance: '2 km', phone: 'Verify current number', address: 'Kotturpuram, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1 km', location: 'Kotturpuram' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '5 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Adyar Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹600 for two', rating: 4.3, dist: '2–3 km', address: 'Adyar, Chennai' }
  ]
},

{
  id: 'tn_besant_nagar_beach',
  name: 'Besant Nagar Beach (Elliot’s Beach)',
  district: 'Chennai',
  category: 'beaches',
  categoryName: 'Beaches & Oceans',
  rating: 4.5,
  ratingCount: 11200,
  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Popular Chennai beach known for its relaxed atmosphere, seaside promenade and evening food spots.',
  longDesc: 'Besant Nagar Beach, popularly known as Elliot’s Beach, is a well-known coastal destination in south Chennai. It is less crowded than Marina Beach and is popular for evening walks, sea views, local food and nearby attractions.',
  attractions: [
    'Beach Walk',
    'Karl Schmidt Memorial',
    'Ashtalakshmi Temple',
    'Sunrise Views',
    'Seaside Food Stalls'
  ],
  history: 'Named after Annie Besant and developed as an important recreational coastal area of Chennai.',
  lat: 13.0005,
  lng: 80.2667,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLIY3jFAizeVqdZWOpJjgMdirn0i2wu_b_Hf-RemcEKQ&s=10',
  transport: {
    bus: {
      available: 'MTC buses from central and south Chennai',
      station: 'Besant Nagar Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Chennai MRTS Stations',
      distance: '3–5 km',
      frequency: 'Regular suburban/MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Adyar Government Hospital', distance: '3 km', phone: 'Verify current number', address: 'Adyar, Chennai' }
    ],
    police: [
      { name: 'Besant Nagar Police Station', distance: '1.5 km', phone: 'Verify current number', address: 'Besant Nagar, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5–1 km', location: 'Besant Nagar' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '3 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Besant Nagar Restaurants', foodType: 'South Indian, Seafood & Cafe Food', price: '₹700 for two', rating: 4.3, dist: '0.5 km', address: 'Besant Nagar' }
  ]
},

{
  id: 'tn_madras_museum',
  name: 'Government Museum, Chennai',
  district: 'Chennai',
  category: 'historical',
  categoryName: 'Museums & Heritage',
  rating: 4.6,
  ratingCount: 10400,
  entryFee: 'Entry charges apply',
  openTime: '09:30 AM',
  closeTime: '05:30 PM',
  holiday: 'Friday',
  bestTime: 'November to February',
  shortDesc: 'Major museum complex housing archaeology, bronze sculptures, art, natural history and cultural collections.',
  longDesc: 'The Government Museum in Egmore is one of India’s oldest museums. Its extensive collections include Chola bronzes, archaeological artifacts, Amaravati sculptures, coins, manuscripts, natural history specimens and galleries covering Tamil cultural heritage.',
  attractions: [
    'Bronze Gallery',
    'Archaeology Gallery',
    'Amaravati Sculptures',
    'Natural History Gallery',
    'Contemporary Art Gallery',
    'Museum Buildings'
  ],
  history: 'Established in 1851 and expanded over time into one of the most important museum complexes in India.',
  lat: 13.0694,
  lng: 80.2548,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7Mx11gODxdpv7hSpnO4CtWe0cx-hHG91oVzUA1Taag&s',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Egmore Museum Bus Stop',
      distance: '0.3 km'
    },
    train: {
      station: 'Chennai Egmore Railway Station',
      distance: '1.5 km',
      frequency: 'Frequent suburban and long-distance trains'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '3 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Egmore Police Station', distance: '1 km', phone: 'Verify current number', address: 'Egmore, Chennai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '0.5 km', location: 'Egmore' }
    ]
  },
  hotels: [
    { name: 'Taj Connemara', price: '₹8,000–₹15,000/night', rating: 4.5, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: 'Verify current contact details' }
  ],
  restaurants: [
    { name: 'Egmore Restaurants', foodType: 'South Indian & Multi Cuisine', price: '₹500 for two', rating: 4.2, dist: '0.5–1 km', address: 'Egmore, Chennai' }
  ]
},

{
  id: 'tn_mgr_memorial',
  name: 'MGR Memorial & Anna Memorial',
  district: 'Chennai',
  category: 'memorial',
  categoryName: 'Memorials & Landmarks',
  rating: 4.6,
  ratingCount: 8700,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None',
  bestTime: 'November to February',
  shortDesc: 'Iconic memorial complex on Marina Beach dedicated to former Tamil Nadu leaders M. G. Ramachandran and C. N. Annadurai.',
  longDesc: 'The MGR Memorial and Anna Memorial are located along the Marina Beach promenade. The landscaped memorial grounds are popular with visitors interested in Tamil Nadu history, public life and Chennai landmarks.',
  attractions: [
    'MGR Memorial',
    'Anna Memorial',
    'Memorial Gardens',
    'Marina Promenade',
    'Night Illumination'
  ],
  history: 'The memorials were established to honor two major political leaders and former Chief Ministers of Tamil Nadu.',
  lat: 13.0648,
  lng: 80.2807,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3q1D-QLUPIazKzLysUrPzqbF_kqoghjkMt3NwIblkw&s=10',
  transport: {
    bus: {
      available: 'MTC buses from all major Chennai areas',
      station: 'Marina Memorial Bus Stop',
      distance: '0.2 km'
    },
    train: {
      station: 'Chepauk MRTS Station',
      distance: '1.5 km',
      frequency: 'Regular MRTS services'
    },
    taxi: {
      options: 'Uber, Ola, Autos & Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      { name: 'Rajiv Gandhi Government General Hospital', distance: '3 km', phone: '044-25305000', address: 'Park Town, Chennai' }
    ],
    police: [
      { name: 'Marina Police Station', distance: '0.5 km', phone: 'Verify current number', address: 'Kamarajar Salai' }
    ],
    pharmacies: [
      { name: 'Local Pharmacies', distance: '1 km', location: 'Triplicane' }
    ]
  },
  hotels: [
    { name: 'The Leela Palace Chennai', price: '₹11,000/night', rating: 4.9, dist: '4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 44 33661234' }
  ],
  restaurants: [
    { name: 'Marina Area Restaurants', foodType: 'South Indian & Seafood', price: '₹500 for two', rating: 4.2, dist: '0.5–1 km', address: 'Marina Beach' }
  ]
},
    {
      id: 'tn_kodaikanal',
      name: 'Kodaikanal Hill Station',
      district: 'Dindigul',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.8,
      ratingCount: 16900,
      entryFee: 'Free',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'September to May',
      shortDesc: 'The Princess of Hill Stations nestled around a star-shaped lake surrounded by pine forests.',
      longDesc: 'Kodaikanal sits at 2,133 meters in the Palani Hills of Western Ghats. Known for its star-shaped Kodai Lake, Coakers Walk with cliff views, Pillar Rocks, Bryant Park botanical garden, and dense Pine Forest.',
      attractions: ['Kodai Lake & Pedal Boating', 'Coaker’s Walk', 'Pillar Rocks', 'Pine Forest', 'Silver Cascade Waterfalls'],
      history: 'Established in 1845 as a refuge from summer heat by American missionaries and British bureaucrats.',
      lat: 10.2381,
      lng: 77.4892,
      image: 'https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg',
      transport: {
        bus: { available: 'Buses from Madurai, Dindigul, Coimbatore, Chennai', station: 'Kodaikanal Central Bus Stand', distance: '0.8 km' },
        train: { station: 'Kodai Road Railway Station (KQN)', distance: '80 km', frequency: 'Taxis & express buses connect uphill' },
        taxi: { options: 'Sightseeing tour taxis, Vans available at bus stand' }
      },
      emergency: {
        hospitals: [
          { name: 'VAN Allen Hospital Kodaikanal', distance: '1.2 km', phone: '04542-241273', address: 'Coaker’s Walk Road' }
        ],
        police: [
          { name: 'Kodaikanal Police Station', distance: '0.5 km', phone: '04542-241026', address: 'Post Office Road' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Kodai', distance: '0.4 km', location: 'Seven Road Junction' }
        ]
      },
      hotels: [
        { name: 'The Carlton Kodaikanal', price: '₹8,500/night', rating: 4.8, dist: '0.5 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4542 240056' }
      ],
      restaurants: [
        { name: 'Cloud Street Bakery & Cafe', foodType: 'Woodfired Pizza & Desserts', price: '₹500 for two', rating: 4.6, dist: '0.6 km', address: 'PT Road' }
      ]
    },
    {
      id: 'tn_courtallam',
      name: 'Courtallam (Kuttalam) Waterfalls',
      district: 'Tenkasi',
      category: 'waterfalls',
      categoryName: 'Cascading Waterfalls',
      rating: 4.7,
      ratingCount: 9400,
      entryFee: 'Free',
      openTime: '06:00 AM',
      closeTime: '07:00 PM',
      holiday: 'None',
      bestTime: 'June to September (Monsoon Season)',
      shortDesc: 'The Spa of South India featuring 9 cascading waterfalls renowned for therapeutic herbal waters.',
      longDesc: 'Courtallam is located in the Western Ghats of Tenkasi district. The waters flow through forest herbal lands before tumbling down rock faces, giving them therapeutic and rejuvenating properties. Major falls include Main Falls, Shenbaga Falls, Five Falls (Aintharuvi), and Honey Falls.',
      attractions: ['Main Falls (Peraruvi)', 'Five Falls (Aintharuvi)', 'Old Courtallam Falls', 'Shenbaga Devi Temple'],
      history: 'Mentioned in ancient Tamil Sangam literature as a sacred herbal bathing destination.',
      lat: 8.9304,
      lng: 77.2689,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfdhWA6f_i6qgjZE3PIjO663kIe_eoOmTLh9EIbF0KY0DGxN2oTIFhVzp&s=10',
      transport: {
        bus: { available: 'Buses from Tenkasi (6km) & Tirunelveli', station: 'Courtallam Bus Stand', distance: '0.5 km' },
        train: { station: 'Tenkasi Junction (TSI)', distance: '6.0 km', frequency: 'Express trains from Chennai & Madurai' },
        taxi: { options: 'Auto rickshaws and private taxis to all 9 falls' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Hospital Courtallam', distance: '1.0 km', phone: '04633-283254', address: 'Main Falls Road' }
        ],
        police: [
          { name: 'Courtallam Police Station', distance: '0.3 km', phone: '04633-283233', address: 'Bus Stand Road' }
        ],
        pharmacies: [
          { name: 'Sri Ram Pharmacy', distance: '0.4 km', location: 'Main Road Tenkasi' }
        ]
      },
      hotels: [
        { name: 'Saaral Resort Courtallam', price: '₹3,500/night', rating: 4.3, dist: '1.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4633 283100' }
      ],
      restaurants: [
        { name: 'Border Rahmath Kadai', foodType: 'Legendary Parotta & Chicken Fry', price: '₹350 for two', rating: 4.7, dist: '4.0 km', address: 'Tenkasi-Shenkottai Road' }
      ]
    },
    {
  id: 'tn_papanasam',
  name: 'Papanasam',
  district: 'Tenkasi',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.7,
  ratingCount: 7200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'June to January',
  shortDesc: 'A scenic Western Ghats destination known for Papanasam Falls, lush forests and the Tamiraparani River.',
  longDesc: 'Papanasam is a beautiful nature destination situated at the foothills of the Western Ghats. The area is famous for Papanasam Falls, the Tamiraparani River and the surrounding forests. It is also an important pilgrimage destination associated with the Papanasanathar Temple.',
  attractions: [
    'Papanasam Falls',
    'Tamiraparani River',
    'Papanasanathar Temple',
    'Agasthiyar Falls',
    'Western Ghats'
  ],
  history: 'Papanasam has long been associated with Hindu traditions and is believed to be connected with Sage Agasthya. The Papanasanathar Temple is an important ancient Shaivite temple in the region.',
  lat: 8.7047,
  lng: 77.3486,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRz5qW1-qo6mfcg3-MknOTN8BV-J7DxZUj0-g9zYaeqQ&s=10',
  transport: {
    bus: {
      available: 'Regular buses from Tenkasi, Ambasamudram and Tirunelveli',
      station: 'Papanasam Bus Stand',
      distance: '1.0 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '15 km',
      frequency: 'Regular passenger and express services from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws and Private Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Papanasam',
        distance: '2.0 km',
        phone: '04634-230222',
        address: 'Papanasam, Tenkasi District'
      }
    ],
    police: [
      {
        name: 'Papanasam Police Station',
        distance: '1.0 km',
        phone: '04634-230100',
        address: 'Papanasam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '1.0 km',
        location: 'Papanasam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Papanasam Guest House',
      price: '₹1,500/night',
      rating: 4.0,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4634 230222'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.2,
      dist: '1.5 km',
      address: 'Papanasam Main Road'
    }
  ]
},

{
  id: 'tn_manjolai',
  name: 'Manjolai Hills',
  district: 'Tenkasi',
  category: 'hills',
  categoryName: 'Hill Stations & Nature',
  rating: 4.8,
  ratingCount: 6100,
  entryFee: 'Forest Entry / Permit Applicable',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Subject to Forest Department Restrictions',
  bestTime: 'October to March',
  shortDesc: 'A peaceful hill destination surrounded by tea estates, dense forests and spectacular Western Ghats scenery.',
  longDesc: 'Manjolai Hills is a beautiful high-altitude region of the Western Ghats known for its tea plantations, mist-covered mountains and dense forests. The area offers scenic viewpoints and a peaceful escape from the busy towns.',
  attractions: [
    'Manjolai Tea Estates',
    'Kakkachi',
    'Kothaiyar',
    'View Points',
    'Western Ghats Forests'
  ],
  history: 'Manjolai developed as a plantation region in the Western Ghats and is known for its tea estates and biodiversity. The region forms part of the Kalakkad-Mundanthurai landscape.',
  lat: 8.6524,
  lng: 77.3776,
  image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'Limited buses and local transport',
      station: 'Ambasamudram Bus Stand',
      distance: '45 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '45 km',
      frequency: 'Regular trains to nearby towns'
    },
    taxi: {
      options: 'Private Cars and Taxis; Forest permission may be required'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ambasamudram',
        distance: '45 km',
        phone: '04634-250222',
        address: 'Ambasamudram'
      }
    ],
    police: [
      {
        name: 'Manimuthar Police Station',
        distance: '30 km',
        phone: '04634-255222',
        address: 'Manimuthar'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '30 km',
        location: 'Manimuthar'
      }
    ]
  },
  hotels: [
    {
      name: 'Manjolai Forest Guest Accommodation',
      price: '₹2,000/night',
      rating: 4.1,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Forest Department Booking'
    }
  ],
  restaurants: [
    {
      name: 'Local Tea Estate Canteen',
      foodType: 'South Indian',
      price: '₹250 for two',
      rating: 4.1,
      dist: '2 km',
      address: 'Manjolai Hills'
    }
  ]
},

{
  id: 'tn_shenbaga_devi',
  name: 'Shenbaga Devi Falls',
  district: 'Tenkasi',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.6,
  ratingCount: 4800,
  entryFee: 'Free / Forest Entry Rules Apply',
  openTime: '06:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Subject to Weather & Forest Conditions',
  bestTime: 'June to September',
  shortDesc: 'A beautiful forest waterfall near Courtallam surrounded by dense greenery and the Western Ghats.',
  longDesc: 'Shenbaga Devi Falls is located in the forested hills above Courtallam. The waterfall is surrounded by lush vegetation and is associated with the Shenbaga Devi Temple. Visitors can enjoy the natural beauty of the Western Ghats while following forest safety regulations.',
  attractions: [
    'Shenbaga Devi Falls',
    'Shenbaga Devi Temple',
    'Forest Trail',
    'Western Ghats Scenery'
  ],
  history: 'The waterfall and temple are traditionally associated with Goddess Shenbaga Devi. The area has been an important pilgrimage and nature destination near Courtallam.',
  lat: 8.9328,
  lng: 77.2765,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkOlgDmt2moUvay4op7ypphbtE7K5IQl4Z5ZC2VdxQw&s=10',
  transport: {
    bus: {
      available: 'Buses to Courtallam followed by local transport',
      station: 'Courtallam Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Tenkasi Junction Railway Station',
      distance: '8 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws and Private Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Courtallam',
        distance: '3 km',
        phone: '04633-283254',
        address: 'Courtallam'
      }
    ],
    police: [
      {
        name: 'Courtallam Police Station',
        distance: '2 km',
        phone: '04633-283233',
        address: 'Courtallam'
      }
    ],
    pharmacies: [
      {
        name: 'Sri Ram Pharmacy',
        distance: '2 km',
        location: 'Courtallam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Saaral Resort Courtallam',
      price: '₹3,500/night',
      rating: 4.3,
      dist: '3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4633 283100'
    }
  ],
  restaurants: [
    {
      name: 'Border Rahmath Kadai',
      foodType: 'Parotta & Non-Veg',
      price: '₹350 for two',
      rating: 4.7,
      dist: '6 km',
      address: 'Tenkasi-Shenkottai Road'
    }
  ]
},

{
  id: 'tn_tenkasi_kasi_viswanathar',
  name: 'Kasi Viswanathar Temple',
  district: 'Tenkasi',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 6700,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A magnificent historic Shiva temple famous for its impressive Rajagopuram and traditional Dravidian architecture.',
  longDesc: 'Kasi Viswanathar Temple is one of the most important historic temples in Tenkasi. Dedicated to Lord Shiva as Kasi Viswanathar, the temple is renowned for its towering Rajagopuram, intricate sculptures and traditional South Indian temple architecture.',
  attractions: [
    'Rajagopuram',
    'Kasi Viswanathar Shrine',
    'Temple Sculptures',
    'Mandapams',
    'Temple Architecture'
  ],
  history: 'The temple was built during the Pandya period and later developed by various rulers. Tenkasi itself grew around this important temple and is often associated with the southern counterpart of Varanasi.',
  lat: 8.9590,
  lng: 77.3152,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHCXd22ncyzKvB-rSgyZIOZK0ZcS4Uf4CGVB8k7w1DA&s=10',
  transport: {
    bus: {
      available: 'Frequent City and Intercity Buses',
      station: 'Tenkasi Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Tenkasi Junction Railway Station',
      distance: '1.5 km',
      frequency: 'Regular trains to Chennai, Madurai and other cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Ola and Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tenkasi',
        distance: '1.5 km',
        phone: '04633-222222',
        address: 'Tenkasi'
      }
    ],
    police: [
      {
        name: 'Tenkasi Police Station',
        distance: '1 km',
        phone: '04633-222333',
        address: 'Tenkasi'
      }
    ],
    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '1 km',
        location: 'Tenkasi Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Saaral Resort Courtallam',
      price: '₹3,500/night',
      rating: 4.3,
      dist: '7 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4633 283100'
    }
  ],
  restaurants: [
    {
      name: 'Hotel Aryaas',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Tenkasi'
    }
  ]
},

{
  id: 'tn_azhutham',
  name: 'Aintharuvi (Five Falls)',
  district: 'Tenkasi',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.8,
  ratingCount: 8300,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'June to September',
  shortDesc: 'A spectacular waterfall where the stream divides into five separate cascades, making it one of Courtallam’s major attractions.',
  longDesc: 'Aintharuvi, popularly known as Five Falls, is one of the most famous waterfalls in the Courtallam region. The water divides into five distinct streams before falling over the rocks, creating a beautiful natural spectacle. It is a popular bathing and picnic destination during the monsoon season.',
  attractions: [
    'Five Cascading Streams',
    'Natural Bathing Area',
    'Western Ghats',
    'Scenic Forest Surroundings'
  ],
  history: 'Aintharuvi has been a popular natural and pilgrimage destination in the Courtallam region for generations and forms one of the principal waterfalls visited by tourists.',
  lat: 8.9370,
  lng: 77.2770,
  image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'Buses and Local Transport from Tenkasi and Courtallam',
      station: 'Five Falls Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Tenkasi Junction Railway Station',
      distance: '7 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws and Private Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Courtallam',
        distance: '4 km',
        phone: '04633-283254',
        address: 'Courtallam'
      }
    ],
    police: [
      {
        name: 'Courtallam Police Station',
        distance: '3 km',
        phone: '04633-283233',
        address: 'Courtallam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '3 km',
        location: 'Courtallam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Saaral Resort Courtallam',
      price: '₹3,500/night',
      rating: 4.3,
      dist: '4 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4633 283100'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '3 km',
      address: 'Courtallam'
    }
  ]
},

{
  id: 'tn_kutralanathar',
  name: 'Kutralanathar Temple',
  district: 'Tenkasi',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 5200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'June to September',
  shortDesc: 'An ancient Shiva temple at Courtallam closely associated with the famous waterfalls and local traditions.',
  longDesc: 'Kutralanathar Temple is an ancient Shiva temple located in Courtallam. The temple is dedicated to Lord Shiva and is closely connected with the spiritual traditions of the Courtallam region. Its location near the waterfalls makes it a popular combination of pilgrimage and tourism.',
  attractions: [
    'Kutralanathar Shrine',
    'Temple Architecture',
    'Traditional Sculptures',
    'Nearby Courtallam Falls'
  ],
  history: 'The temple is traditionally associated with Sage Agasthya and has been an important Shaivite pilgrimage centre in the Courtallam region for centuries.',
  lat: 8.9330,
  lng: 77.2748,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeIP0OK11_ODnlPWO2OMMmSxJRYTR5K5ZcrsqG4_9JTw&s=10',
  transport: {
    bus: {
      available: 'Frequent buses from Tenkasi',
      station: 'Courtallam Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Tenkasi Junction Railway Station',
      distance: '7 km',
      frequency: 'Regular train services'
    },
    taxi: {
      options: 'Auto Rickshaws and Private Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Courtallam',
        distance: '1 km',
        phone: '04633-283254',
        address: 'Courtallam'
      }
    ],
    police: [
      {
        name: 'Courtallam Police Station',
        distance: '0.5 km',
        phone: '04633-283233',
        address: 'Courtallam'
      }
    ],
    pharmacies: [
      {
        name: 'Sri Ram Pharmacy',
        distance: '0.5 km',
        location: 'Courtallam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Saaral Resort Courtallam',
      price: '₹3,500/night',
      rating: 4.3,
      dist: '1 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4633 283100'
    }
  ],
  restaurants: [
    {
      name: 'Border Rahmath Kadai',
      foodType: 'Parotta & Non-Veg',
      price: '₹350 for two',
      rating: 4.7,
      dist: '5 km',
      address: 'Tenkasi-Shenkottai Road'
    }
  ]
},
{
  id: 'tn_dindigul_fort',
  name: 'Dindigul Fort',
  district: 'Dindigul',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.6,
  ratingCount: 7200,
  entryFee: '₹25 (Approx.)',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Historic hilltop fort offering panoramic views of Dindigul city and surrounding plains.',
  longDesc: 'Dindigul Fort is a historic hilltop fort built on a massive rock overlooking Dindigul town. The fort has strong stone walls, bastions and old structures reflecting the military architecture of the Nayak and later rulers.',
  attractions: [
    'Historic Fort Walls',
    'Hilltop Viewpoint',
    'Old Bastions',
    'Ancient Structures',
    'Panoramic City View'
  ],
  history: 'The fort was originally associated with the Madurai Nayak rulers and was later controlled by several South Indian and Mysore rulers.',
  lat: 10.3624,
  lng: 77.9695,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUytDj9yM0mPngIce2M-BTIQBikhcgcaMNfw_lAWSchw&s',
  transport: {
    bus: {
      available: 'TNSTC buses from Madurai, Trichy, Coimbatore and nearby towns',
      station: 'Dindigul Bus Stand',
      distance: '2.5 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '3 km',
      frequency: 'Frequent trains from Chennai, Madurai and Coimbatore'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Town Police Station',
        distance: '2.5 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Dindigul',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '2–4 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Dindigul Local Restaurants',
      foodType: 'South Indian & Famous Dindigul Biryani',
      price: '₹500 for two',
      rating: 4.4,
      dist: '2–3 km',
      address: 'Dindigul Town'
    }
  ]
},
{
  id: 'tn_kailasanathar_temple',
  name: 'Kailasanathar Temple',
  district: 'Kanchipuram',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 6800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '12:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'An ancient Pallava-era Shiva temple famous for its beautiful sandstone architecture and intricate sculptures.',
  longDesc: 'Kailasanathar Temple is one of the oldest structural temples in Kanchipuram. Built during the Pallava period, the temple is dedicated to Lord Shiva and is renowned for its elegant sandstone carvings, small shrines and historic Dravidian architecture.',
  attractions: [
    'Main Kailasanathar Shrine',
    'Pallava Architecture',
    'Sandstone Sculptures',
    'Ancient Temple Shrines',
    'Historic Inscriptions'
  ],
  history: 'The temple was built mainly by Pallava king Rajasimha in the late 7th and early 8th century. It is considered an important monument in the development of South Indian temple architecture.',
  lat: 12.8476,
  lng: 79.6947,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbATH7LB_hOcSm16hanIe0WrR5hnlzSyNjtVLxZx2-Yw&s=10',
  transport: {
    bus: {
      available: 'Frequent TNSTC buses from Chennai and nearby towns',
      station: 'Kanchipuram Bus Stand',
      distance: '3 km'
    },
    train: {
      station: 'Kanchipuram Railway Station',
      distance: '3.5 km',
      frequency: 'Regular trains from Chennai and nearby cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanchipuram',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Kanchipuram Town'
      }
    ],
    police: [
      {
        name: 'Kanchipuram Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2 km',
        location: 'Kanchipuram Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Kanchipuram',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '2–4 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kanchipuram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.4,
      dist: '2–3 km',
      address: 'Kanchipuram Town'
    }
  ]
},

{
  id: 'tn_ekambareswarar',
  name: 'Ekambareswarar Temple',
  district: 'Kanchipuram',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 12500,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'One of Kanchipuram’s largest Shiva temples, famous for its towering gopuram and ancient sacred mango tree.',
  longDesc: 'Ekambareswarar Temple is a magnificent Hindu temple dedicated to Lord Shiva and is one of the major temples of Kanchipuram. The temple is famous for its massive Rajagopuram, spacious courtyards and the sacred mango tree associated with the temple tradition.',
  attractions: [
    'Tall Rajagopuram',
    '1000 Pillar Hall',
    'Sacred Mango Tree',
    'Temple Corridors',
    'Sculptures and Mandapams'
  ],
  history: 'The temple has ancient Pallava, Chola, Vijayanagara and Nayak connections and was expanded by several rulers over centuries. It is traditionally associated with the Pancha Bhoota Sthalas representing the element Earth.',
  lat: 12.8478,
  lng: 79.6997,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptUixhe8LXUCsj83eVfzJ0EoHk1oznjuJoWvhpXa5Ig&s=10',
  transport: {
    bus: {
      available: 'Frequent City and Intercity Buses',
      station: 'Kanchipuram Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Kanchipuram Railway Station',
      distance: '3 km',
      frequency: 'Regular trains from Chennai and nearby cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanchipuram',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    police: [
      {
        name: 'Kanchipuram Police Station',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Temple Area'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel GRT Regency Kanchipuram',
      price: '₹4,000–₹6,000/night',
      rating: 4.3,
      dist: '3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Saravana Bhavan',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.4,
      dist: '2 km',
      address: 'Kanchipuram'
    }
  ]
},

{
  id: 'tn_varadharaja_perumal',
  name: 'Varadharaja Perumal Temple',
  district: 'Kanchipuram',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.9,
  ratingCount: 11800,
  entryFee: 'Free (Special Darshan may be applicable)',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A grand Vishnu temple famous for its magnificent gopurams, stone carvings and historic Vijayanagara architecture.',
  longDesc: 'Varadharaja Perumal Temple is one of the most important Vaishnavite temples in Kanchipuram. Dedicated to Lord Varadharaja Perumal, the temple complex contains magnificent mandapams, detailed stone sculptures and impressive architectural features.',
  attractions: [
    '100 Pillar Hall',
    'Stone Sculptures',
    'Temple Gopurams',
    'Golden and Silver Lizards',
    'Anantha Saras Tank'
  ],
  history: 'The temple has ancient origins and was expanded significantly by Chola, Pandya and Vijayanagara rulers. It is one of the important Divya Desams revered in the Sri Vaishnava tradition.',
  lat: 12.8186,
  lng: 79.7247,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzkEF6k97H5v7wGa4BrtZNRCPFlvJ6FpqQHMtKAShaQ&s=10',
  transport: {
    bus: {
      available: 'Frequent TNSTC and private buses',
      station: 'Kanchipuram Bus Stand',
      distance: '4 km'
    },
    train: {
      station: 'Kanchipuram Railway Station',
      distance: '5 km',
      frequency: 'Regular trains from Chennai'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanchipuram',
        distance: '4 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    police: [
      {
        name: 'Kanchipuram Police Station',
        distance: '4 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '3 km',
        location: 'Kanchipuram Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Kanchipuram',
      price: '₹1,500–₹4,500/night',
      rating: 4.2,
      dist: '3–5 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kanchipuram Local Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '3 km',
      address: 'Kanchipuram'
    }
  ]
},

{
  id: 'tn_kamakshi_amman',
  name: 'Kamakshi Amman Temple',
  district: 'Kanchipuram',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.9,
  ratingCount: 10500,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A famous Shakti temple dedicated to Goddess Kamakshi and one of the most important spiritual landmarks of Kanchipuram.',
  longDesc: 'Kamakshi Amman Temple is a major Hindu temple dedicated to Goddess Kamakshi, a form of Goddess Parvati. The temple is an important Shakti pilgrimage centre and is located in the heart of Kanchipuram.',
  attractions: [
    'Kamakshi Amman Shrine',
    'Temple Gopuram',
    'Golden Chariot',
    'Temple Mandapams',
    'Festival Celebrations'
  ],
  history: 'The temple has a long history associated with the religious traditions of Kanchipuram and the Shakti tradition. It is regarded as one of the prominent pilgrimage centres dedicated to Goddess Kamakshi.',
  lat: 12.8431,
  lng: 79.7036,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HE4EQtQRIcZgf6JIN_-3cK7YnEgpYjeNzAxleaV9Zg&s=10',
  transport: {
    bus: {
      available: 'Frequent City and Intercity Buses',
      station: 'Kanchipuram Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Kanchipuram Railway Station',
      distance: '3 km',
      frequency: 'Regular trains from Chennai'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanchipuram',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    police: [
      {
        name: 'Kanchipuram Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Kanchipuram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Kanchipuram Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel Tamilnadu Kanchipuram',
      price: '₹1,500–₹3,000/night',
      rating: 4.0,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Saravana Bhavan',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.4,
      dist: '1 km',
      address: 'Kanchipuram'
    }
  ]
},

{
  id: 'tn_vedanthangal',
  name: 'Vedanthangal Bird Sanctuary',
  district: 'Kanchipuram',
  category: 'wildlife',
  categoryName: 'Wildlife & Bird Sanctuaries',
  rating: 4.6,
  ratingCount: 7600,
  entryFee: '₹25–₹50 (Approx.)',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Subject to Forest Department Conditions)',
  bestTime: 'November to February',
  shortDesc: 'One of India’s oldest bird sanctuaries, attracting thousands of migratory birds during the winter season.',
  longDesc: 'Vedanthangal Bird Sanctuary is a famous wetland bird sanctuary in Tamil Nadu. During the migratory season, the sanctuary attracts large numbers of waterbirds including pelicans, painted storks, herons, egrets and other species.',
  attractions: [
    'Migratory Birds',
    'Bird Watching',
    'Wetland Ecosystem',
    'Observation Points',
    'Nature Photography'
  ],
  history: 'Vedanthangal has a long history of community-protected bird habitat. It was formally declared a bird sanctuary in the 20th century and is one of the oldest protected bird areas in India.',
  lat: 12.5447,
  lng: 79.8512,
  image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'Buses available from Chengalpattu and nearby towns',
      station: 'Vedanthangal Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Chengalpattu Junction',
      distance: '30 km',
      frequency: 'Frequent trains from Chennai and nearby cities'
    },
    taxi: {
      options: 'Private Taxis, Rental Cars & Local Transport'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Madurantakam',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    police: [
      {
        name: 'Madurantakam Police Station',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Madurantakam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '12 km',
        location: 'Madurantakam'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels near Chengalpattu',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '2 km',
      address: 'Vedanthangal'
    }
  ]
},
{
  id: 'tn_nellaiappar_temple',
  name: 'Nellaiappar Temple',
  district: 'Tirunelveli',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 12500,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A magnificent historic Shiva temple famous for its musical pillars, massive gopurams and grand temple architecture.',
  longDesc: 'Nellaiappar Temple is one of the most important historic temples in Tirunelveli. Dedicated to Lord Shiva as Nellaiappar and Goddess Kanthimathi, the temple is renowned for its large courtyards, beautiful sculptures, musical pillars and traditional Dravidian architecture.',
  attractions: [
    'Nellaiappar Shrine',
    'Kanthimathi Amman Shrine',
    'Musical Pillars',
    'Thousand Pillar Hall',
    'Temple Gopurams',
    'Golden Lily Tank'
  ],
  history: 'The temple has ancient Pandya origins and was expanded by several rulers including the Nayaks. It is one of the important Shaivite pilgrimage centres of southern Tamil Nadu.',
  lat: 8.7289,
  lng: 77.7066,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKYwBWi5O8Lg-FYSLbOZoHMKKzI8DayKMuJ6z0JXiAQ&s=10',
  transport: {
    bus: {
      available: 'Frequent TNSTC and private buses from major cities',
      station: 'Tirunelveli New Bus Stand',
      distance: '4 km'
    },
    train: {
      station: 'Tirunelveli Junction Railway Station (TEN)',
      distance: '3 km',
      frequency: 'Frequent trains from Chennai, Madurai, Nagercoil and other cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Tirunelveli Medical College Hospital',
        distance: '6 km',
        phone: 'Verify current number',
        address: 'Palayamkottai, Tirunelveli'
      }
    ],
    police: [
      {
        name: 'Tirunelveli Town Police Station',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Tirunelveli'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Tirunelveli Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel Aryaas',
      price: '₹1,500–₹3,000/night',
      rating: 4.2,
      dist: '3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Hotel Aryaas',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.4,
      dist: '2 km',
      address: 'Tirunelveli'
    }
  ]
},

{
  id: 'tn_manimuthar_falls',
  name: 'Manimuthar Waterfalls',
  district: 'Tirunelveli',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.7,
  ratingCount: 6800,
  entryFee: 'Free / Forest Entry Rules Apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Subject to Weather & Forest Conditions',
  bestTime: 'October to January',
  shortDesc: 'A scenic waterfall surrounded by dense forests and the Western Ghats near Manimuthar Dam.',
  longDesc: 'Manimuthar Waterfalls is a beautiful natural attraction located in the foothills of the Western Ghats. The waterfall is surrounded by dense greenery and is connected with the Manimuthar Dam and river system. It is a popular destination for nature lovers and weekend visitors.',
  attractions: [
    'Manimuthar Waterfalls',
    'Manimuthar Dam',
    'Forest Landscape',
    'Scenic Mountain Views',
    'Natural Pool'
  ],
  history: 'The Manimuthar region developed around the river, dam and surrounding Western Ghats forests and has become a popular nature destination in Tirunelveli district.',
  lat: 8.6506,
  lng: 77.4246,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSWgCTVSD3juSJny8DV6HMl9ui_0Ix5kpNh40m5MPIQ&s=10',
  transport: {
    bus: {
      available: 'Buses from Tirunelveli and Ambasamudram',
      station: 'Manimuthar Bus Stop',
      distance: '5 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '15 km',
      frequency: 'Regular trains from Tirunelveli'
    },
    taxi: {
      options: 'Private Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ambasamudram',
        distance: '18 km',
        phone: 'Verify current number',
        address: 'Ambasamudram'
      }
    ],
    police: [
      {
        name: 'Manimuthar Police Station',
        distance: '5 km',
        phone: 'Verify current number',
        address: 'Manimuthar'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '5 km',
        location: 'Manimuthar'
      }
    ]
  },
  hotels: [
    {
      name: 'Manimuthar Resorts',
      price: '₹2,000–₹4,000/night',
      rating: 4.1,
      dist: '5 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '5 km',
      address: 'Manimuthar'
    }
  ]
},

{
  id: 'tn_agastiyar_falls',
  name: 'Agastiyar Falls',
  district: 'Tirunelveli',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.8,
  ratingCount: 7900,
  entryFee: 'Free / Forest Entry Rules Apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Subject to Weather & Forest Conditions',
  bestTime: 'June to January',
  shortDesc: 'A beautiful waterfall near Papanasam associated with Sage Agastya and surrounded by lush Western Ghats forests.',
  longDesc: 'Agastiyar Falls is a scenic waterfall located near Papanasam in the Western Ghats. The waterfall is surrounded by dense vegetation and is traditionally associated with Sage Agastya. The area is popular among pilgrims and nature lovers.',
  attractions: [
    'Agastiyar Falls',
    'Tamiraparani River',
    'Western Ghats',
    'Forest Scenery',
    'Papanasam Temple'
  ],
  history: 'The waterfall is traditionally associated with Sage Agastya and the ancient spiritual traditions of the Papanasam region. It is an important natural and pilgrimage attraction.',
  lat: 8.6916,
  lng: 77.3576,
  image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'Buses from Tirunelveli and Ambasamudram',
      station: 'Papanasam Bus Stand',
      distance: '4 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '18 km',
      frequency: 'Regular trains from Tirunelveli'
    },
    taxi: {
      options: 'Private Taxis and Local Transport'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Papanasam',
        distance: '5 km',
        phone: 'Verify current number',
        address: 'Papanasam'
      }
    ],
    police: [
      {
        name: 'Papanasam Police Station',
        distance: '4 km',
        phone: 'Verify current number',
        address: 'Papanasam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '4 km',
        location: 'Papanasam Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Papanasam Guest House',
      price: '₹1,500–₹3,000/night',
      rating: 4.0,
      dist: '5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Vegetarian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '4 km',
      address: 'Papanasam'
    }
  ]
},

{
  id: 'tn_papanasam_temple',
  name: 'Papanasanathar Temple',
  district: 'Tirunelveli',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 5600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'An ancient Shiva temple located on the banks of the Tamiraparani River near the Western Ghats.',
  longDesc: 'Papanasanathar Temple is a historic Shiva temple located at Papanasam. Dedicated to Lord Shiva, the temple is situated near the Tamiraparani River and is closely associated with the religious traditions of Sage Agastya.',
  attractions: [
    'Papanasanathar Shrine',
    'Temple Architecture',
    'Tamiraparani River',
    'Agastiyar Falls',
    'Traditional Sculptures'
  ],
  history: 'The temple has ancient origins and is traditionally connected with Sage Agastya and the sacred Papanasam region. It has been an important pilgrimage destination for generations.',
  lat: 8.7048,
  lng: 77.3485,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxqFn6ejYgpDwkrR0pQngmhwdbUB3x3qiuAW2csX-yw&s=10',
  transport: {
    bus: {
      available: 'Regular buses from Tirunelveli and Ambasamudram',
      station: 'Papanasam Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '15 km',
      frequency: 'Regular trains from Tirunelveli'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Papanasam',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Papanasam'
      }
    ],
    police: [
      {
        name: 'Papanasam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Papanasam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Papanasam'
      }
    ]
  },
  hotels: [
    {
      name: 'Papanasam Guest House',
      price: '₹1,500–₹3,000/night',
      rating: 4.0,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Papanasam'
    }
  ]
},

{
  id: 'tn_kalakkad_mundanthurai',
  name: 'Kalakkad Mundanthurai Tiger Reserve',
  district: 'Tirunelveli',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',
  rating: 4.8,
  ratingCount: 6300,
  entryFee: 'Entry / Safari Fee Applicable',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'Subject to Forest Department Rules',
  bestTime: 'October to March',
  shortDesc: 'A vast protected forest landscape in the Western Ghats known for rich biodiversity, wildlife and scenic mountain habitats.',
  longDesc: 'Kalakkad Mundanthurai Tiger Reserve is one of the major protected areas of the southern Western Ghats. The reserve contains dense forests, rivers, waterfalls and diverse wildlife habitats. It is an important destination for nature enthusiasts and wildlife lovers.',
  attractions: [
    'Wildlife Viewing',
    'Western Ghats Forests',
    'Bird Watching',
    'Mountain Landscapes',
    'Nature Trails'
  ],
  history: 'The reserve was formed by combining the Kalakkad and Mundanthurai wildlife areas and plays an important role in protecting the biodiversity of the southern Western Ghats.',
  lat: 8.6405,
  lng: 77.4510,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJJe9KuUKi21x8rrgwSPhgr2bt6bOXrs2s0w5C72V4QrzdCnoay2idet1&s=10',
  transport: {
    bus: {
      available: 'Buses available to nearby towns',
      station: 'Ambasamudram Bus Stand',
      distance: '20 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '20 km',
      frequency: 'Regular trains from Tirunelveli'
    },
    taxi: {
      options: 'Private Taxis and Forest-approved Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ambasamudram',
        distance: '22 km',
        phone: 'Verify current number',
        address: 'Ambasamudram'
      }
    ],
    police: [
      {
        name: 'Mundanthurai Police Station',
        distance: '10 km',
        phone: 'Verify current number',
        address: 'Mundanthurai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '20 km',
        location: 'Ambasamudram'
      }
    ]
  },
  hotels: [
    {
      name: 'Forest Department Guest House',
      price: '₹1,500–₹3,000/night',
      rating: 4.1,
      dist: '10 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current booking details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.1,
      dist: '20 km',
      address: 'Ambasamudram'
    }
  ]
},
{
  id: 'tn_namakkal_fort',
  name: 'Namakkal Fort',
  district: 'Namakkal',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.6,
  ratingCount: 5800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'A historic hilltop fort offering panoramic views of Namakkal town and surrounding landscapes.',
  longDesc: 'Namakkal Fort is a historic fort situated on a massive rocky hill in the heart of Namakkal. The fort area provides beautiful views of the town and is closely associated with the famous Namakkal Anjaneyar Temple and Narasimha Temple.',
  attractions: [
    'Historic Fort Walls',
    'Rock Hill',
    'Hilltop Viewpoint',
    'Panoramic City View',
    'Nearby Ancient Temples'
  ],
  history: 'The fort has historical connections with several South Indian rulers and was an important strategic location because of its elevated rocky position.',
  lat: 11.2216,
  lng: 78.1674,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvj5jM5rXF_f_PJpVYmPEObXiUj6pRRU95BZZo96Rlqw&s=10',
  transport: {
    bus: {
      available: 'TNSTC buses from Salem, Trichy, Karur and nearby towns',
      station: 'Namakkal Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Namakkal Railway Station (NMKL)',
      distance: '5 km',
      frequency: 'Regular trains from Salem, Karur and nearby cities'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Namakkal',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Namakkal Town'
      }
    ],
    police: [
      {
        name: 'Namakkal Town Police Station',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Namakkal'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Namakkal Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Namakkal',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Namakkal Local Restaurants',
      foodType: 'South Indian & Non-Veg',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1–2 km',
      address: 'Namakkal Town'
    }
  ]
},

{
  id: 'tn_namakkal_anjaneyar',
  name: 'Namakkal Anjaneyar Temple',
  district: 'Namakkal',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.9,
  ratingCount: 12800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A famous Hanuman temple featuring one of the tallest open-air Anjaneyar idols in India.',
  longDesc: 'Namakkal Anjaneyar Temple is one of the most famous religious attractions in Namakkal. The temple is dedicated to Lord Hanuman and is located at the foot of the Namakkal rock. The towering Anjaneyar idol is the main attraction and is worshipped by thousands of devotees.',
  attractions: [
    'Large Anjaneyar Idol',
    'Narasimha Temple',
    'Rock Hill',
    'Temple Architecture',
    'Religious Festivals'
  ],
  history: 'The temple is associated with the traditional legend of Lord Hanuman worshipping Lord Narasimha at Namakkal. The temple complex has developed over centuries as an important Vaishnavite pilgrimage centre.',
  lat: 11.2218,
  lng: 78.1670,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCx3vZKzkOKFnnLALpoZQYLzLZqXh9HwCJrTc0F4CHQ&s=10',
  transport: {
    bus: {
      available: 'Frequent TNSTC and private buses',
      station: 'Namakkal Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Namakkal Railway Station',
      distance: '5 km',
      frequency: 'Regular trains from Salem and Karur'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Namakkal',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Namakkal'
      }
    ],
    police: [
      {
        name: 'Namakkal Town Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Namakkal'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Namakkal Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Namakkal',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Namakkal Town'
    }
  ]
},

{
  id: 'tn_narasimha_temple_namakkal',
  name: 'Namagiri Narasimha Swamy Temple',
  district: 'Namakkal',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 7200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'An ancient cave temple dedicated to Lord Narasimha, located beneath the historic Namakkal rock.',
  longDesc: 'Namagiri Narasimha Swamy Temple is a historic cave temple dedicated to Lord Narasimha. The temple is carved into the rocky hill and is known for its ancient sculptures and religious significance.',
  attractions: [
    'Narasimha Swamy Shrine',
    'Rock-Cut Cave Temple',
    'Ancient Sculptures',
    'Namagiri Thayar Shrine',
    'Historic Temple Architecture'
  ],
  history: 'The temple is associated with ancient rock-cut temple traditions and is traditionally connected with the legend of Lord Narasimha and Lord Hanuman at Namakkal.',
  lat: 11.2214,
  lng: 78.1676,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzuahn5D4VdH8VmsI-wdNmeQvMf6rEs1q8kEVPtNhLA&s=10',
  transport: {
    bus: {
      available: 'Frequent buses from Salem, Trichy and nearby towns',
      station: 'Namakkal Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Namakkal Railway Station',
      distance: '5 km',
      frequency: 'Regular train services'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Namakkal',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Namakkal'
      }
    ],
    police: [
      {
        name: 'Namakkal Town Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Namakkal'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Namakkal Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Namakkal',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Namakkal Local Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Namakkal'
    }
  ]
},

{
  id: 'tn_kolli_hills',
  name: 'Kolli Hills',
  district: 'Namakkal',
  category: 'hills',
  categoryName: 'Hill Stations & Nature',
  rating: 4.8,
  ratingCount: 14600,
  entryFee: 'Free (Some Attractions May Have Entry Fees)',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A scenic Eastern Ghats hill station famous for 70 hairpin bends, waterfalls, viewpoints and lush forests.',
  longDesc: 'Kolli Hills is a beautiful hill destination in the Eastern Ghats of Namakkal district. The region is famous for its winding mountain roads, waterfalls, viewpoints, forests and pleasant climate. It is a popular destination for trekking, nature photography and weekend trips.',
  attractions: [
    'Agaya Gangai Waterfalls',
    'Seekuparai View Point',
    'Masila Falls',
    'Arapaleeswarar Temple',
    '70 Hairpin Bends',
    'Botanical Garden'
  ],
  history: 'Kolli Hills has been mentioned in ancient Tamil literature and is traditionally associated with the legendary ruler Valvil Ori. The hills have a long cultural and historical connection with the Tamil region.',
  lat: 11.2480,
  lng: 78.3360,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsQhmjOXDu9W2v5rHJi8gfgtU0fjB5PFlMBhKmVC2eAQ&s=10',
  transport: {
    bus: {
      available: 'Buses from Namakkal, Rasipuram and nearby towns',
      station: 'Semmedu Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Rasipuram Railway Station',
      distance: '45 km',
      frequency: 'Regular trains from Salem and Chennai'
    },
    taxi: {
      options: 'Private Taxis, Rental Cars & Local Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Semmedu',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Semmedu, Kolli Hills'
      }
    ],
    police: [
      {
        name: 'Kolli Hills Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Semmedu, Kolli Hills'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '1 km',
        location: 'Semmedu'
      }
    ]
  },
  hotels: [
    {
      name: 'Kolli Hills Resorts',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kolli Hills Local Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Semmedu, Kolli Hills'
    }
  ]
},
{
  id: 'tn_thirumayam_fort',
  name: 'Thirumayam Fort',
  district: 'Pudukkottai',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.6,
  ratingCount: 6100,
  entryFee: '₹25 (Approx.)',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'A historic hill fort known for its massive walls, ancient temples and panoramic views of the surrounding countryside.',
  longDesc: 'Thirumayam Fort is a historic fort built around a rocky hill in Pudukkottai district. The fort contains massive defensive walls, bastions and ancient cave temples dedicated to Shiva and Vishnu. It offers beautiful views of the surrounding landscape.',
  attractions: [
    'Historic Fort Walls',
    'Rock-Cut Temples',
    'Ancient Bastions',
    'Hilltop Viewpoint',
    'Narthamalai Landscape'
  ],
  history: 'The fort was constructed in the late 17th century by the Thondaiman rulers of Pudukkottai and later came under the control of various South Indian powers.',
  lat: 10.2568,
  lng: 78.7448,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-imXyZO5hA3BtqcQeAJsC1AyLaY28LzPrIooqWOutQ&s=10',
  transport: {
    bus: {
      available: 'TNSTC buses from Pudukkottai, Karaikudi and nearby towns',
      station: 'Thirumayam Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Pudukkottai Railway Station',
      distance: '20 km',
      frequency: 'Regular trains from Chennai, Trichy and Madurai'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thirumayam',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Thirumayam, Pudukkottai'
      }
    ],
    police: [
      {
        name: 'Thirumayam Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thirumayam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thirumayam Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Thirumayam Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Thirumayam'
    }
  ]
},

{
  id: 'tn_sittannavasal',
  name: 'Sittannavasal Cave',
  district: 'Pudukkottai',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.7,
  ratingCount: 5400,
  entryFee: '₹10–₹25 (Approx.)',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'An ancient rock-cut cave famous for beautiful Jain paintings, inscriptions and historic sculptures.',
  longDesc: 'Sittannavasal is an important archaeological site in Pudukkottai district. The rock-cut cave contains ancient Jain paintings, sculptures and inscriptions. The site is particularly famous for its remarkable frescoes depicting lotus ponds, animals and people.',
  attractions: [
    'Ancient Jain Paintings',
    'Rock-Cut Cave',
    'Historic Inscriptions',
    'Stone Sculptures',
    'Archaeological Site'
  ],
  history: 'The cave is associated with Jainism and contains paintings believed to date from the Pallava-Pandya period. It is one of the most important examples of ancient mural art in Tamil Nadu.',
  lat: 10.4606,
  lng: 78.7187,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLHyUvETqTEYC7rwTD9hbopohCPDNvR5Ks4boZU-mXg&s=10',
  transport: {
    bus: {
      available: 'Local buses from Pudukkottai and nearby villages',
      station: 'Sittannavasal Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Pudukkottai Railway Station',
      distance: '16 km',
      frequency: 'Regular trains from Trichy and Madurai'
    },
    taxi: {
      options: 'Private Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Annavasal',
        distance: '5 km',
        phone: 'Verify current number',
        address: 'Annavasal, Pudukkottai'
      }
    ],
    police: [
      {
        name: 'Annavasal Police Station',
        distance: '5 km',
        phone: 'Verify current number',
        address: 'Annavasal'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '5 km',
        location: 'Annavasal'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '16 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '5 km',
      address: 'Annavasal'
    }
  ]
},

{
  id: 'tn_narthamalai',
  name: 'Narthamalai',
  district: 'Pudukkottai',
  category: 'historical',
  categoryName: 'Historical Sites & Monuments',
  rating: 4.7,
  ratingCount: 4700,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'A historic hill region famous for ancient rock-cut temples and early Chola architectural monuments.',
  longDesc: 'Narthamalai is a group of rocky hills containing several ancient temples and archaeological monuments. The area is especially famous for the Vijayalaya Choleeswaram temple and its early Chola architectural features.',
  attractions: [
    'Vijayalaya Choleeswaram',
    'Rock-Cut Temples',
    'Ancient Sculptures',
    'Historic Inscriptions',
    'Rocky Hill Landscape'
  ],
  history: 'Narthamalai contains important monuments from the early medieval period and is closely associated with the development of Chola temple architecture.',
  lat: 10.5320,
  lng: 78.7718,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFWt-MgRYNgf4PYCArA8tnt5cafB5vHPWsw_Wtev44g&s=10',
  transport: {
    bus: {
      available: 'Local buses from Pudukkottai and nearby towns',
      station: 'Narthamalai Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Pudukkottai Railway Station',
      distance: '18 km',
      frequency: 'Regular trains from Trichy and Madurai'
    },
    taxi: {
      options: 'Private Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Keeranur',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Keeranur, Pudukkottai'
      }
    ],
    police: [
      {
        name: 'Keeranur Police Station',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Keeranur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '8 km',
        location: 'Keeranur'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '18 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Narthamalai Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Narthamalai'
    }
  ]
},

{
  id: 'tn_kudumiyanmalai',
  name: 'Kudumiyanmalai Temple',
  district: 'Pudukkottai',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 4200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A historic Shiva temple known for magnificent sculptures, inscriptions and an important musical inscription.',
  longDesc: 'Kudumiyanmalai Temple is a historic temple dedicated to Lord Shiva. The temple complex contains impressive stone sculptures and inscriptions, including a famous ancient musical inscription that provides valuable information about the history of Indian music.',
  attractions: [
    'Sikhanathar Shrine',
    'Ancient Sculptures',
    'Musical Inscription',
    'Temple Mandapams',
    'Rock-Cut Shrine'
  ],
  history: 'The temple has contributions from several South Indian dynasties including the Cholas, Pandyas and Nayaks. Its musical inscription is one of the notable archaeological records of ancient Indian music.',
  lat: 10.3845,
  lng: 78.6926,
  image: 'https://cdn.s3waas.gov.in/s342e7aaa88b48137a16a1acd04ed91125/uploads/bfi_thumb/2018062037-e1554202508602-olwasufsahb55tlm55xx51pna1k62eakr0ku1jcrf8.jpg',
  transport: {
    bus: {
      available: 'Buses from Pudukkottai and nearby towns',
      station: 'Kudumiyanmalai Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Pudukkottai Railway Station',
      distance: '15 km',
      frequency: 'Regular trains from Trichy and Madurai'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Pudukkottai',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Pudukkottai'
      }
    ],
    police: [
      {
        name: 'Kudumiyanmalai Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kudumiyanmalai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '1 km',
        location: 'Kudumiyanmalai'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Kudumiyanmalai'
    }
  ]
},

{
  id: 'tn_avudaiyarkoil',
  name: 'Avudaiyarkoil Temple',
  district: 'Pudukkottai',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 5100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A remarkable Shiva temple famous for exquisite stone carvings and unique architectural features.',
  longDesc: 'Avudaiyarkoil Temple, also known as Athmanathaswamy Temple, is a historic temple in Pudukkottai district. The temple is celebrated for its exceptional stone craftsmanship, intricate sculptures and unique architectural design. The shrine is associated with the saint Manikkavacakar.',
  attractions: [
    'Athmanathaswamy Shrine',
    'Stone Sculptures',
    'Temple Mandapams',
    'Intricate Carvings',
    'Historic Architecture'
  ],
  history: 'The temple is traditionally associated with Saint Manikkavacakar and has received patronage from several South Indian rulers. It is particularly famous for its extraordinary stone craftsmanship.',
  lat: 9.8954,
  lng: 79.1021,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYysDP_yK6QrFWLVWmaEX8tj_De3ED57Ibykrp0rHKA&s=10',
  transport: {
    bus: {
      available: 'Buses from Pudukkottai, Aranthangi and nearby towns',
      station: 'Avudaiyarkoil Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Aranthangi Railway Station',
      distance: '15 km',
      frequency: 'Regular trains from nearby cities'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Avudaiyarkoil',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Avudaiyarkoil'
      }
    ],
    police: [
      {
        name: 'Avudaiyarkoil Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Avudaiyarkoil'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Avudaiyarkoil'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '35 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '1 km',
      address: 'Avudaiyarkoil'
    }
  ]
},

{
  id: 'tn_pudukkottai_museum',
  name: 'Government Museum Pudukkottai',
  district: 'Pudukkottai',
  category: 'museum',
  categoryName: 'Museums & Cultural Attractions',
  rating: 4.5,
  ratingCount: 3200,
  entryFee: '₹10–₹20 (Approx.)',
  openTime: '09:30 AM',
  closeTime: '05:30 PM',
  holiday: 'Friday',
  bestTime: 'October to March',
  shortDesc: 'A historic museum displaying archaeological artefacts, sculptures, coins and cultural objects from the region.',
  longDesc: 'Government Museum Pudukkottai houses an important collection of archaeological and cultural artefacts from Pudukkottai and surrounding areas. Visitors can see sculptures, inscriptions, coins, bronzes and objects representing the rich history of Tamil Nadu.',
  attractions: [
    'Archaeological Artefacts',
    'Stone Sculptures',
    'Bronze Images',
    'Ancient Coins',
    'Historical Inscriptions'
  ],
  history: 'The museum was established to preserve and showcase the archaeological and cultural heritage of the former Pudukkottai region and surrounding areas.',
  lat: 10.3797,
  lng: 78.8205,
  image: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'Frequent TNSTC buses from nearby towns',
      station: 'Pudukkottai Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Pudukkottai Railway Station',
      distance: '2 km',
      frequency: 'Regular trains from Chennai, Trichy and Madurai'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Pudukkottai',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Pudukkottai Town'
      }
    ],
    police: [
      {
        name: 'Pudukkottai Town Police Station',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Pudukkottai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Pudukkottai Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '2–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Pudukkottai Local Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1–2 km',
      address: 'Pudukkottai Town'
    }
  ]
},
{
  id: 'tn_thiruvarur_thyagaraja',
  name: 'Thyagarajaswamy Temple',
  district: 'Thiruvarur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.9,
  ratingCount: 9800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A magnificent ancient Shiva temple famous for its massive complex, sacred traditions and grand temple chariot.',
  longDesc: 'Thyagarajaswamy Temple is one of the most important historic Shiva temples in Tamil Nadu. Located in Thiruvarur, the temple is dedicated to Lord Thyagaraja and Goddess Neelothpalambal. It is renowned for its huge temple complex, intricate sculptures, sacred tank and the famous Thiruvarur temple car.',
  attractions: [
    'Thyagarajaswamy Shrine',
    'Kamalalayam Temple Tank',
    'Temple Chariot',
    'Stone Sculptures',
    'Temple Mandapams',
    'Musical Traditions'
  ],
  history: 'The temple has ancient Chola origins and received extensive patronage from Chola rulers. Thiruvarur is closely associated with the Saiva Nayanmars and the development of Tamil devotional traditions.',
  lat: 10.7722,
  lng: 79.6368,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aB-k03uBHFGH9RFFBauu7xKqPF8fS9QAmBFAbACJ0g&s=10',
  transport: {
    bus: {
      available: 'Frequent TNSTC buses from Thanjavur, Nagapattinam, Kumbakonam and nearby towns',
      station: 'Thiruvarur Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Thiruvarur Junction Railway Station (TVR)',
      distance: '2 km',
      frequency: 'Regular trains from Chennai, Thanjavur and Nagapattinam'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruvarur',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Thiruvarur Town'
      }
    ],
    police: [
      {
        name: 'Thiruvarur Town Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Thiruvarur'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thiruvarur Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel in Thiruvarur',
      price: '₹1,500–₹3,500/night',
      rating: 4.1,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thiruvarur Local Restaurants',
      foodType: 'South Indian Vegetarian & Non-Veg',
      price: '₹400 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Thiruvarur Town'
    }
  ]
},

{
  id: 'tn_muthupet_mangroves',
  name: 'Muthupet Mangrove Forest',
  district: 'Thiruvarur',
  category: 'nature',
  categoryName: 'Nature & Wildlife',
  rating: 4.7,
  ratingCount: 6200,
  entryFee: 'Boat Ride / Entry Fee Applicable',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'Subject to Weather Conditions',
  bestTime: 'October to March',
  shortDesc: 'A beautiful mangrove ecosystem famous for boat rides, coastal scenery and rich birdlife.',
  longDesc: 'Muthupet Mangrove Forest is a unique coastal ecosystem located at the southern end of the Cauvery delta. The mangrove forests spread across the lagoon and channels provide habitat for many birds, fish and other wildlife. Boat rides offer visitors an opportunity to explore the scenic mangrove landscape.',
  attractions: [
    'Mangrove Forest',
    'Boat Ride',
    'Muthupet Lagoon',
    'Bird Watching',
    'Coastal Landscape'
  ],
  history: 'The Muthupet mangrove ecosystem has developed along the coastal wetlands of the Cauvery delta and plays an important role in protecting the coastline and supporting biodiversity.',
  lat: 10.4007,
  lng: 79.4950,
  image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80',
  transport: {
    bus: {
      available: 'TNSTC buses from Thiruvarur, Pattukkottai and nearby towns',
      station: 'Muthupet Bus Stand',
      distance: '7 km'
    },
    train: {
      station: 'Muthupet Railway Station',
      distance: '8 km',
      frequency: 'Limited regional train services'
    },
    taxi: {
      options: 'Private Taxis, Auto Rickshaws & Local Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Muthupet',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Muthupet'
      }
    ],
    police: [
      {
        name: 'Muthupet Police Station',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Muthupet'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '7 km',
        location: 'Muthupet Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Muthupet',
      price: '₹1,200–₹3,000/night',
      rating: 4.0,
      dist: '7–10 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Muthupet Local Restaurant',
      foodType: 'South Indian & Seafood',
      price: '₹500 for two',
      rating: 4.2,
      dist: '7 km',
      address: 'Muthupet'
    }
  ]
},

{
  id: 'tn_mannargudi_rajagopalaswamy',
  name: 'Rajagopalaswamy Temple',
  district: 'Thiruvarur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 7600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A grand Vaishnavite temple in Mannargudi famous for its massive gopurams, sculptures and religious festivals.',
  longDesc: 'Rajagopalaswamy Temple is a historic Vishnu temple located in Mannargudi. Dedicated to Lord Rajagopalaswamy, the temple is one of the important Vaishnavite pilgrimage centres in the Cauvery delta region and is known for its large temple complex and beautiful architecture.',
  attractions: [
    'Rajagopalaswamy Shrine',
    'Temple Gopurams',
    'Large Temple Tank',
    'Stone Sculptures',
    'Festival Celebrations'
  ],
  history: 'The temple has ancient Chola-period origins and was expanded by later rulers. Mannargudi became an important religious centre around the temple over several centuries.',
  lat: 10.6665,
  lng: 79.4500,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_2ok36RpSWzMY13rBBXINUrdmKkgXJ7kXusWUlIq-w&s=10',
  transport: {
    bus: {
      available: 'Frequent buses from Thiruvarur, Thanjavur and Kumbakonam',
      station: 'Mannargudi Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Mannargudi Railway Station',
      distance: '2 km',
      frequency: 'Regular trains to Thiruvarur and nearby cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Mannargudi',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Mannargudi'
      }
    ],
    police: [
      {
        name: 'Mannargudi Town Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Mannargudi'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Mannargudi Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Mannargudi',
      price: '₹1,500–₹3,500/night',
      rating: 4.1,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Mannargudi Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.3,
      dist: '1 km',
      address: 'Mannargudi'
    }
  ]
},

{
  id: 'tn_koothanur_saraswathi',
  name: 'Koothanur Saraswathi Temple',
  district: 'Thiruvarur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 4300,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'A famous temple dedicated to Goddess Saraswathi, attracting students and devotees seeking blessings for education.',
  longDesc: 'Koothanur Saraswathi Temple is a well-known temple dedicated to Goddess Saraswathi, the Hindu goddess of learning and knowledge. The temple is particularly popular among students and families performing special prayers for education and academic success.',
  attractions: [
    'Saraswathi Amman Shrine',
    'Temple Architecture',
    'Educational Rituals',
    'Navaratri Celebrations',
    'Traditional Sculptures'
  ],
  history: 'The temple has a long association with the worship of Goddess Saraswathi and is traditionally regarded as one of the prominent Saraswathi temples in Tamil Nadu.',
  lat: 10.8742,
  lng: 79.6016,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfTITyeSbnuehXeUXso3usWvUHuQLUlhm_6rnrheyLAw&s',
  transport: {
    bus: {
      available: 'Local buses from Thiruvarur and Mayiladuthurai',
      station: 'Koothanur Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Mayiladuthurai Junction',
      distance: '20 km',
      frequency: 'Frequent trains from Chennai and Trichy'
    },
    taxi: {
      options: 'Auto Rickshaws, Local Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Nannilam',
        distance: '10 km',
        phone: 'Verify current number',
        address: 'Nannilam'
      }
    ],
    police: [
      {
        name: 'Nannilam Police Station',
        distance: '10 km',
        phone: 'Verify current number',
        address: 'Nannilam'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '8 km',
        location: 'Nannilam'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Thiruvarur',
      price: '₹1,500–₹3,500/night',
      rating: 4.1,
      dist: '20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '0.5 km',
      address: 'Koothanur'
    }
  ]
},

{
  id: 'tn_muthupet_lagoon',
  name: 'Muthupet Lagoon',
  district: 'Thiruvarur',
  category: 'nature',
  categoryName: 'Nature & Coastal Attractions',
  rating: 4.6,
  ratingCount: 3900,
  entryFee: 'Free / Boat Ride Charges Applicable',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'Subject to Weather Conditions',
  bestTime: 'October to March',
  shortDesc: 'A peaceful coastal lagoon surrounded by mangroves, waterways and rich birdlife.',
  longDesc: 'Muthupet Lagoon is a scenic coastal wetland where several waterways meet near the sea. The lagoon is surrounded by mangrove forests and provides a habitat for birds and aquatic species. It is a peaceful destination for boating and nature photography.',
  attractions: [
    'Coastal Lagoon',
    'Mangrove Forests',
    'Boat Ride',
    'Bird Watching',
    'Sunset Views'
  ],
  history: 'The lagoon forms part of the Muthupet coastal wetland ecosystem and has traditionally supported fishing communities and local biodiversity.',
  lat: 10.3950,
  lng: 79.5000,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmcWgNRFUTVRi1D8at9PTm6L0MGSAtKsqHuLlrhVjfg&s=10',
  transport: {
    bus: {
      available: 'TNSTC buses from Muthupet and Thiruvarur',
      station: 'Muthupet Bus Stand',
      distance: '7 km'
    },
    train: {
      station: 'Muthupet Railway Station',
      distance: '8 km',
      frequency: 'Limited regional train services'
    },
    taxi: {
      options: 'Private Taxis, Auto Rickshaws & Local Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Muthupet',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Muthupet'
      }
    ],
    police: [
      {
        name: 'Muthupet Police Station',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Muthupet'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '7 km',
        location: 'Muthupet'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Muthupet',
      price: '₹1,200–₹3,000/night',
      rating: 4.0,
      dist: '7–10 km',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Muthupet Seafood Restaurant',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '7 km',
      address: 'Muthupet'
    }
  ]
},
{
  id: 'tn_agaya_gangai',
  name: 'Agaya Gangai Waterfalls',
  district: 'Namakkal',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.8,
  ratingCount: 9100,
  entryFee: 'Entry Fee Applicable',
  openTime: '06:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Subject to Weather Conditions',
  bestTime: 'October to January',
  shortDesc: 'A spectacular waterfall in Kolli Hills surrounded by dense forests and dramatic rocky landscapes.',
  longDesc: 'Agaya Gangai Waterfalls is one of the major natural attractions of Kolli Hills. The waterfall drops dramatically through a rocky gorge surrounded by dense vegetation. Reaching the falls involves a steep trail with many steps, making it an adventurous nature experience.',
  attractions: [
    'Agaya Gangai Waterfalls',
    'Forest Trail',
    'Rocky Gorge',
    'Kolli Hills Landscape',
    'Nature Photography'
  ],
  history: 'The waterfall is closely associated with the natural and cultural heritage of Kolli Hills and attracts visitors seeking both adventure and scenic beauty.',
  lat: 11.2674,
  lng: 78.3445,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFCcOiwi8eJDhI0kVGacM276pr1Kbeu5E4hmffQc4rw&s=10',
  transport: {
    bus: {
      available: 'Buses to Kolli Hills followed by local transport',
      station: 'Semmedu Bus Stand',
      distance: '12 km'
    },
    train: {
      station: 'Rasipuram Railway Station',
      distance: '55 km',
      frequency: 'Regular trains from Salem and nearby cities'
    },
    taxi: {
      options: 'Private Taxis and Local Jeeps'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Semmedu',
        distance: '12 km',
        phone: 'Verify current number',
        address: 'Semmedu, Kolli Hills'
      }
    ],
    police: [
      {
        name: 'Kolli Hills Police Station',
        distance: '12 km',
        phone: 'Verify current number',
        address: 'Semmedu, Kolli Hills'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '12 km',
        location: 'Semmedu'
      }
    ]
  },
  hotels: [
    {
      name: 'Kolli Hills Resorts',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '12 km',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Kolli Hills Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '12 km',
      address: 'Semmedu, Kolli Hills'
    }
  ]
},

{
  id: 'tn_arapaleeswarar',
  name: 'Arapaleeswarar Temple',
  district: 'Namakkal',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 5100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'An ancient Shiva temple located in the scenic Kolli Hills and surrounded by beautiful mountain landscapes.',
  longDesc: 'Arapaleeswarar Temple is an ancient Shiva temple situated at the top of Kolli Hills. The temple is dedicated to Lord Shiva and is an important pilgrimage destination surrounded by the natural beauty of the Eastern Ghats.',
  attractions: [
    'Arapaleeswarar Shrine',
    'Ancient Temple Architecture',
    'Mountain Views',
    'Traditional Sculptures',
    'Nearby Agaya Gangai Falls'
  ],
  history: 'The temple is traditionally associated with the ancient cultural history of Kolli Hills and is believed to have been an important Shaivite pilgrimage centre for centuries.',
  lat: 11.2702,
  lng: 78.3418,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhSx7PXsSZXNzTFXZM6WWzg6pLAeaIjynsvp0fTiW5A&s=10',
  transport: {
    bus: {
      available: 'Buses from Namakkal and Rasipuram',
      station: 'Semmedu Bus Stand',
      distance: '2 km'
    },
    train: {
      station: 'Rasipuram Railway Station',
      distance: '50 km',
      frequency: 'Regular trains from Salem and Chennai'
    },
    taxi: {
      options: 'Private Taxis, Local Jeeps & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Semmedu',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Semmedu, Kolli Hills'
      }
    ],
    police: [
      {
        name: 'Kolli Hills Police Station',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Semmedu'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '2 km',
        location: 'Semmedu'
      }
    ]
  },
  hotels: [
    {
      name: 'Kolli Hills Resorts',
      price: '₹1,500–₹4,000/night',
      rating: 4.2,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kolli Hills Local Restaurant',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '2 km',
      address: 'Semmedu, Kolli Hills'
    }
  ]
},
{
  id: 'tn_manjo_lai',
  name: 'Manjolai Hills',
  district: 'Tirunelveli',
  category: 'hills',
  categoryName: 'Hill Stations & Nature',
  rating: 4.8,
  ratingCount: 5900,
  entryFee: 'Forest Entry / Permit Applicable',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Subject to Forest Department Restrictions',
  bestTime: 'October to March',
  shortDesc: 'A misty hill destination surrounded by tea plantations, forests and spectacular Western Ghats landscapes.',
  longDesc: 'Manjolai Hills is a scenic high-altitude region of the Western Ghats known for tea plantations, cool weather, mist-covered mountains and dense forests. The winding mountain roads and viewpoints make it an attractive destination for nature lovers.',
  attractions: [
    'Manjolai Tea Estates',
    'Kakkachi',
    'Kothaiyar',
    'Mountain Viewpoints',
    'Western Ghats Forests'
  ],
  history: 'Manjolai developed as a plantation region in the Western Ghats and is known for its tea estates, natural scenery and rich biodiversity.',
  lat: 8.6524,
  lng: 77.3776,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIH_qKiCWo_A0eXU0e8NO0jN1Jf1FQ-59qkOLCkzDf3Q&s=10',
  transport: {
    bus: {
      available: 'Limited buses and local transport',
      station: 'Ambasamudram Bus Stand',
      distance: '45 km'
    },
    train: {
      station: 'Ambasamudram Railway Station',
      distance: '45 km',
      frequency: 'Regular trains to nearby towns'
    },
    taxi: {
      options: 'Private Cars and Taxis; Forest permission may be required'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ambasamudram',
        distance: '45 km',
        phone: 'Verify current number',
        address: 'Ambasamudram'
      }
    ],
    police: [
      {
        name: 'Manimuthar Police Station',
        distance: '30 km',
        phone: 'Verify current number',
        address: 'Manimuthar'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '30 km',
        location: 'Manimuthar'
      }
    ]
  },
  hotels: [
    {
      name: 'Forest Guest Accommodation',
      price: '₹2,000–₹4,000/night',
      rating: 4.1,
      dist: '2 km',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current booking details'
    }
  ],
  restaurants: [
    {
      name: 'Local Tea Estate Canteen',
      foodType: 'South Indian',
      price: '₹250 for two',
      rating: 4.1,
      dist: '2 km',
      address: 'Manjolai Hills'
    }
  ]
},
{
  id: 'tn_sirumalai',
  name: 'Sirumalai Hills',
  district: 'Dindigul',
  category: 'hillstations',
  categoryName: 'Hill Stations & Nature',
  rating: 4.5,
  ratingCount: 4300,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Peaceful hill destination surrounded by forests, plantations and scenic viewpoints near Dindigul.',
  longDesc: 'Sirumalai is a scenic hill region located near Dindigul. The hills are known for dense vegetation, pleasant weather, winding mountain roads and peaceful viewpoints. It is a good destination for nature lovers and short hill trips.',
  attractions: [
    'Sirumalai Hills',
    'Mountain Viewpoints',
    'Forest Roads',
    'Sirumalai Lake',
    'Nature Photography',
    'Trekking Areas'
  ],
  history: 'Sirumalai has traditionally been known for its forest landscape, agricultural plantations and distinctive hill ecosystem.',
  lat: 10.2350,
  lng: 77.9400,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18kLflL3RQQjYF78fFF1z6Uf312Vrc3EiRvarDePGPQ&s=10',
  transport: {
    bus: {
      available: 'Local buses from Dindigul and nearby villages',
      station: 'Dindigul Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '25 km',
      frequency: 'Road transport required from Dindigul'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Jeeps'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Police Station',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Pharmacies in Dindigul',
        distance: '25 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Sirumalai Hill Resorts',
      price: '₹2,000–₹5,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Sirumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1–5 km',
      address: 'Sirumalai'
    }
  ]
},

{
  id: 'tn_athiur_sirumalai_lake',
  name: 'Sirumalai Lake',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Lakes & Nature',
  rating: 4.3,
  ratingCount: 1800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Quiet hill lake surrounded by green landscapes and misty Sirumalai surroundings.',
  longDesc: 'Sirumalai Lake is a peaceful natural attraction in the Sirumalai hill region. The surrounding greenery and cool climate make the area suitable for nature walks, photography and relaxing away from busy city areas.',
  attractions: [
    'Lake View',
    'Hill Scenery',
    'Nature Walks',
    'Photography',
    'Bird Watching'
  ],
  history: 'The lake forms part of the water resources and natural landscape of the Sirumalai hill region.',
  lat: 10.2355,
  lng: 77.9420,
  image: 'https://cdn.tripuntold.com/media/photos/location/2018/10/22/93f26b24-ce13-45b8-a5b4-b5d1ce3bbfdf.jpg',
  transport: {
    bus: {
      available: 'Local buses and tourist vehicles from Dindigul',
      station: 'Dindigul Bus Stand',
      distance: '25 km'
    },
    train: {
      station: 'Dindigul Junction (DG)',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Taxis, Jeeps & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Dindigul',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul Town'
      }
    ],
    police: [
      {
        name: 'Dindigul Police Station',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Dindigul'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '25 km',
        location: 'Dindigul Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels & Resorts in Sirumalai',
      price: '₹2,000–₹5,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Sirumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹400 for two',
      rating: 4.0,
      dist: '1–5 km',
      address: 'Sirumalai'
    }
  ]
},

{
  id: 'tn_amaravathi_dam',
  name: 'Amaravathi Dam',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Dams & Nature',
  rating: 4.4,
  ratingCount: 3500,
  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',
  shortDesc: 'Scenic reservoir destination surrounded by hills and natural landscapes near the Dindigul region.',
  longDesc: 'Amaravathi Dam is a major reservoir in the Amaravathi region, surrounded by the scenic landscapes of the Western Ghats. The area is popular for its reservoir views, greenery and peaceful surroundings.',
  attractions: [
    'Amaravathi Reservoir',
    'Dam View',
    'Western Ghats Scenery',
    'Nature Photography',
    'Sunrise Views'
  ],
  history: 'The dam was constructed as an important water resource and irrigation project in the region.',
  lat: 10.4070,
  lng: 77.2450,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99MinqaCN0VeO1D0OlJCUTVu2UFehEqkb0DEAQN7y1g&s=10',
  transport: {
    bus: {
      available: 'Buses from Dindigul, Palani and nearby towns',
      station: 'Nearby Local Bus Stop',
      distance: '2 km'
    },
    train: {
      station: 'Palani Railway Station',
      distance: '25 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis, Rental Cars & Tourist Vehicles'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Palani',
        distance: '25 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Amaravathi Region'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Palani',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '20–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Nearby Town'
    }
  ]
},

{
  id: 'tn_palani_hills',
  name: 'Palani Hills & Foothills',
  district: 'Dindigul',
  category: 'nature',
  categoryName: 'Hills & Nature',
  rating: 4.6,
  ratingCount: 5100,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Scenic Western Ghats landscape around Palani offering mountain views, greenery and peaceful countryside.',
  longDesc: 'The Palani Hills form an important mountain range of the Western Ghats and extend across the Dindigul region. The foothills around Palani provide scenic views, agricultural landscapes and access to several natural attractions.',
  attractions: [
    'Palani Hill Views',
    'Western Ghats Scenery',
    'Mountain Roads',
    'Agricultural Landscapes',
    'Nature Photography'
  ],
  history: 'The Palani Hills form part of the Western Ghats and have played an important role in the natural and cultural landscape of the region.',
  lat: 10.4500,
  lng: 77.5200,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrG5KsGEK5-R8PQFG05oXYSNv_xoJ7dceDleSNDiw8vg&s=10',
  transport: {
    bus: {
      available: 'TNSTC buses from Dindigul, Madurai and nearby towns',
      station: 'Palani Bus Stand',
      distance: '1 km'
    },
    train: {
      station: 'Palani Railway Station',
      distance: '1.5 km',
      frequency: 'Regular passenger and express services'
    },
    taxi: {
      options: 'Local Taxis, Autos & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Palani',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    police: [
      {
        name: 'Palani Police Station',
        distance: '1.5 km',
        phone: 'Verify current number',
        address: 'Palani'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Palani Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Palani Hotels & Lodges',
      price: '₹1,000–₹4,000/night',
      rating: 4.1,
      dist: '1–3 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Palani Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Palani Town'
    }
  ]
},
    {
      id: 'tn_hogenakkal',
      name: 'Hogenakkal Waterfalls',
      district: 'Dharmapuri',
      category: 'waterfalls',
      categoryName: 'Cascading Waterfalls & Adventure',
      rating: 4.6,
      ratingCount: 8900,
      entryFee: 'Free (Coracle Boat Ride: ₹750/boat)',
      openTime: '08:00 AM',
      closeTime: '05:30 PM',
      holiday: 'None',
      bestTime: 'August to October',
      shortDesc: 'Niagara of India featuring roaring Kaveri river falls, circular coracle boat rides, and herbal oil massages.',
      longDesc: 'Hogenakkal (meaning Smokey Rocks) is where the Kaveri river enters Tamil Nadu forming a series of thunderous waterfalls and canyons. Famous for unique basket-boat (Coracle) rides right up to the roaring spray and traditional oil massage by local masseurs.',
      attractions: ['Coracle Basket-Boat Ride', 'Hogenakkal Falls Viewpoint', 'Traditional Oil Massage', 'Fresh River Fish Fry'],
      history: 'One of the oldest natural water formations along the Kaveri basin.',
      lat: 12.1182,
      lng: 77.7774,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SZf3dOCH_KGmksc1N_7qFh9c93G8ElrrvvkvrdT3c3FTWegUMf5dalQ&s=10',
      transport: {
        bus: { available: 'Buses from Dharmapuri (46 km) and Salem', station: 'Hogenakkal Main Bus Stand', distance: '0.4 km' },
        train: { station: 'Dharmapuri Railway Station (DPI)', distance: '46 km', frequency: 'Direct buses available from station' },
        taxi: { options: 'Jeeps & Private Cabs from Dharmapuri town' }
      },
      emergency: {
        hospitals: [
          { name: 'Primary Health Centre Hogenakkal', distance: '1.2 km', phone: '04342-256221', address: 'Main Road' }
        ],
        police: [
          { name: 'Hogenakkal Police Station', distance: '0.5 km', phone: '04342-256222', address: 'Near Boat House' }
        ],
        pharmacies: [
          { name: 'Kaveri Medicals', distance: '0.5 km', location: 'Bus Stand Street' }
        ]
      },
      hotels: [
        { name: 'Hotel Tamil Nadu (TTDC Hogenakkal)', price: '₹1,800/night', rating: 4.0, dist: '0.3 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4342 256247' }
      ],
      restaurants: [
        { name: 'Hogenakkal Fish Fry Stalls', foodType: 'Fresh Fried Kaveri Fish & Rice', price: '₹200 for two', rating: 4.5, dist: '0.2 km', address: 'River Bank Stalls' }
      ]
    },
    {
      id: 'tn_mudumalai',
      name: 'Mudumalai Tiger Reserve & National Park',
      district: 'The Nilgiris',
      category: 'wildlife',
      categoryName: 'Wildlife & National Parks',
      rating: 4.7,
      ratingCount: 7600,
      entryFee: '₹45 per head (Safari: ₹350 - ₹1,200)',
      openTime: '06:00 AM',
      closeTime: '06:00 PM',
      holiday: 'None',
      bestTime: 'October to May',
      shortDesc: 'A rich sanctuary home to Bengal tigers, Asian elephants, Indian leopards, and dense teak forests.',
      longDesc: 'Located at the tri-junction of Tamil Nadu, Karnataka, and Kerala, Mudumalai is one of India’s declared Tiger Reserves. Famous for forest van/jeep safaris, Theppakadu Elephant Camp (featured in the Oscar-winning documentary "The Elephant Whisperers"), and rich avian life.',
      attractions: ['Theppakadu Elephant Camp', 'Forest Department Jungle Safari', 'Moyar River Gorge', 'Bird Watching'],
      history: 'Declared a wildlife sanctuary in 1940 and designated a Tiger Reserve in 2007.',
      lat: 11.5623,
      lng: 76.5342,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42Yeen5avyTFUT397vo6ePa4d6YQioh8WXtWoArjKxTyUsZu2c6tzvXg&s=10',
      transport: {
        bus: { available: 'Buses along Ooty-Mysore Highway (NH 766)', station: 'Theppakadu Junction', distance: '0.2 km' },
        train: { station: 'Mysore Junction (65 km) / Mettupalayam (85 km)', distance: '65 km', frequency: 'Highway buses stop right at Theppakadu' },
        taxi: { options: 'Forest Safari Jeeps, Private Resort Vehicles' }
      },
      emergency: {
        hospitals: [
          { name: 'Gudalur Government Hospital', distance: '14 km', phone: '04262-261230', address: 'Gudalur' }
        ],
        police: [
          { name: 'Abhayaranyam Forest Police Station', distance: '1.0 km', phone: '0423-2444005', address: 'Theppakadu' }
        ],
        pharmacies: [
          { name: 'MedPlus Gudalur', distance: '14 km', location: 'Main Road Gudalur' }
        ]
      },
      hotels: [
        { name: 'Jungle Hut Resort Masinagudi', price: '₹5,500/night', rating: 4.6, dist: '8.0 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 98422 29900' }
      ],
      restaurants: [
        { name: 'Theppakadu Forest Canteen', foodType: 'South Indian Tiffin & Meals', price: '₹150 for two', rating: 4.1, dist: '0.1 km', address: 'Safari Counter' }
      ]
    },
    {
      id: 'tn_gingee',
      name: 'Gingee Fort (Senji Fort)',
      district: 'Villupuram',
      category: 'forts',
      categoryName: 'Forts & Palaces',
      rating: 4.7,
      ratingCount: 5200,
      entryFee: '₹25 (Indians), ₹300 (Foreigners)',
      openTime: '09:00 AM',
      closeTime: '05:30 PM',
      holiday: 'None',
      bestTime: 'October to February',
      shortDesc: 'Dubbed "Troy of the East" by the British, an impregnable hilltop fort complex across three hills.',
      longDesc: 'Gingee Fort is one of the few surviving forts in Tamil Nadu. The fort complex spans three hillocks: Rajagiri, Krishnagiri, and Chandrayandurg. Features a 7-storey Kalyana Mahal, royal granaries, prison cells, and military watchtowers.',
      attractions: ['Rajagiri Citadel Trek', 'Kalyana Mahal Palace', 'Granaries & Sacred Ponds', 'Krishnagiri Fort Hill'],
      history: 'Originally built by the Konar dynasty in the 12th century, fortified by Nayaks, Marathas (Chhatrapati Shivaji), Bijapur Sultans, and Mughals.',
      lat: 12.2514,
      lng: 79.4181,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6N2o1WeDgawR13uEV1OEIbYeKDrKh2OzlAABy1SWGX9LU3SxQhey84nw&s=10',
      transport: {
        bus: { available: 'Buses from Tindivanam (25 km), Villupuram (40 km), & Puducherry', station: 'Gingee Bus Stand', distance: '2.0 km' },
        train: { station: 'Tindivanam Railway Station (TMV)', distance: '25 km', frequency: 'Direct local buses from Tindivanam station' },
        taxi: { options: 'Auto rickshaws from Gingee bus stand' }
      },
      emergency: {
        hospitals: [
          { name: 'Gingee Government Hospital', distance: '2.5 km', phone: '04145-222230', address: 'Tindivanam Road' }
        ],
        police: [
          { name: 'Gingee Police Station', distance: '2.0 km', phone: '04145-222233', address: 'Gandhi Bazaar' }
        ],
        pharmacies: [
          { name: 'Raja Pharmacy', distance: '1.8 km', location: 'Main Bazaar Road' }
        ]
      },
      hotels: [
        { name: 'Hotel Tamil Nadu Gingee', price: '₹1,500/night', rating: 3.9, dist: '2.2 km', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80', phone: '+91 4145 222204' }
      ],
      restaurants: [
        { name: 'Sri Vasantha Bhavan', foodType: 'Pure Veg Meals', price: '₹180 for two', rating: 4.2, dist: '2.0 km', address: 'Bus Stand Road' }
      ]
    },
    {
      id: 'tn_rameswaram',
      name: 'Ramanathaswamy Temple & Dhanushkodi',
      district: 'Ramanathapuram',
      category: 'temples',
      categoryName: 'Temples & Coastal Heritage',
      rating: 4.9,
      ratingCount: 17800,
      entryFee: 'Free (22 Holy Wells Bath: ₹25)',
      openTime: '05:00 AM',
      closeTime: '09:00 PM',
      holiday: 'None',
      bestTime: 'October to April',
      shortDesc: 'One of the 12 Jyotirlinga temples featuring the longest temple corridor in the world and ghost town Dhanushkodi.',
      longDesc: 'Rameswaram is a holy island connected to mainland India by the historic Pamban Bridge. The Ramanathaswamy Temple is famous for its 1,212 meter outer corridor with 1,200 carved granite pillars and 22 holy water wells (Teerthams). Nearby Dhanushkodi offers a dramatic trip to the tip of India where Indian Ocean meets Bay of Bengal.',
      attractions: ['Longest Temple Corridor in the World', '22 Holy Teertham Baths', 'Pamban Sea Bridge View', 'Dhanushkodi Ghost Town & Beach', 'APJ Abdul Kalam Memorial'],
      history: 'According to the Ramayana, Lord Rama constructed the Rama Setu bridge from here to Lanka.',
      lat: 9.2881,
      lng: 79.3174,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtctekn3ScKMN24PxZcfd3eclBENRig4_SxhIpSVj4IvEI0nZU80TWrMvJ&s=10',
      transport: {
        bus: { available: 'Direct SETC & TNSTC express buses from all TN cities', station: 'Rameswaram Bus Stand', distance: '2.0 km' },
        train: { station: 'Rameswaram Railway Station (RMM)', distance: '1.2 km', frequency: 'Direct express trains across India' },
        taxi: { options: '4x4 Jeeps to Dhanushkodi, Autos, Temple Cabs' }
      },
      emergency: {
        hospitals: [
          { name: 'Government General Hospital Rameswaram', distance: '1.5 km', phone: '04573-221233', address: 'Railway Station Road' }
        ],
        police: [
          { name: 'Rameswaram Town Police Station', distance: '0.8 km', phone: '04573-221224', address: 'West Car Street' }
        ],
        pharmacies: [
          { name: 'Apollo Pharmacy Rameswaram', distance: '0.5 km', location: 'East Car Street' }
        ]
      },
      hotels: [
        { name: 'Daiwik Hotels Rameswaram', price: '₹4,200/night', rating: 4.5, dist: '1.8 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4573 223300' }
      ],
      restaurants: [
        { name: 'Ram Nivas Vegetarian Restaurant', foodType: 'South & North Indian Pure Veg', price: '₹250 for two', rating: 4.3, dist: '0.6 km', address: 'Car Street' }
      ]
    },
    {
      id: 'tn_kanyakumari',
      name: 'Kanyakumari Sunset & Vivekananda Rock Memorial',
      district: 'Kanyakumari',
      category: 'cultural',
      categoryName: 'Cultural & Coastal Monument',
      rating: 4.8,
      ratingCount: 21000,
      entryFee: 'Ferry Ride: ₹50',
      openTime: '08:00 AM',
      closeTime: '04:00 PM (Ferry)',
      holiday: 'None',
      bestTime: 'October to March',
      shortDesc: 'The southernmost tip of mainland India where the Arabian Sea, Bay of Bengal, and Indian Ocean merge.',
      longDesc: 'Kanyakumari is famous for Triveni Sangam (confluence of three oceans), Vivekananda Rock Memorial built on an island rock offshore, and the massive 133-foot stone statue of Tamil poet Thiruvalluvar. Renowned for simultaneous sunset and full moon rise over the ocean.',
      attractions: ['Vivekananda Rock Memorial', '133ft Thiruvalluvar Statue', 'Triveni Sangam Bathing Ghat', 'Kanyakumari Temple', 'Our Lady of Ransom Church'],
      history: 'Swami Vivekananda meditated on the rock offshore in December 1892 before attending the Chicago Parliament of Religions.',
      lat: 8.0883,
      lng: 77.5385,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw07OlIPw4gFXq9pkqJ7DpNlqYpTtV2KvwFOpuW8iZMGF7WbQUhNs9yPI&s=10',
      transport: {
        bus: { available: 'State express buses from Trivandrum, Madurai, Chennai', station: 'Kanyakumari Bus Stand', distance: '1.0 km' },
        train: { station: 'Kanyakumari Railway Station (CAPE)', distance: '1.2 km', frequency: 'Terminal station connected to major Indian hubs' },
        taxi: { options: 'Auto Rickshaws, Pre-paid Taxis at station' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Medical College Hospital Nagercoil', distance: '18 km', phone: '04652-223216', address: 'Asaripallam, Nagercoil' }
        ],
        police: [
          { name: 'Kanyakumari Marine Police Station', distance: '0.5 km', phone: '04652-246224', address: 'Sunset Point Road' }
        ],
        pharmacies: [
          { name: 'MedPlus Kanyakumari', distance: '0.6 km', location: 'Main Road' }
        ]
      },
      hotels: [
        { name: 'Hotel Sea View Kanyakumari', price: '₹3,800/night', rating: 4.5, dist: '0.4 km', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80', phone: '+91 4652 246361' }
      ],
      restaurants: [
        { name: 'The Ocean Restaurant', foodType: 'Seafood & Multi-Cuisine', price: '₹500 for two', rating: 4.4, dist: '0.3 km', address: 'East Car Street' }
      ]
    },
    {
  id: 'tn_apj_abdul_kalam_memorial',
  name: 'APJ Abdul Kalam Memorial',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.8,
  ratingCount: 12500,
  entryFee: 'Free',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Monday',
  bestTime: 'October to March',
  shortDesc: 'Memorial dedicated to Dr. APJ Abdul Kalam in his hometown of Rameswaram, showcasing his life, achievements and legacy.',
  longDesc: 'The Dr. APJ Abdul Kalam Memorial at Peikarumbu near Rameswaram commemorates the life of India’s former President and renowned scientist Dr. APJ Abdul Kalam. The memorial features exhibits, photographs, replicas and displays highlighting his childhood, scientific career and contribution to India.',
  attractions: [
    'APJ Abdul Kalam Memorial',
    'Life History Exhibits',
    'Photographs & Personal Items',
    'Rocket & Missile Models',
    'Memorial Garden'
  ],
  history: 'Built in memory of Dr. APJ Abdul Kalam, who was born in Rameswaram and served as the 11th President of India.',
  lat: 9.2937,
  lng: 79.3190,
  image: 'https://www.rameswaramtravels.com/img/placevisit/large/abdulkalam.jpg',
  transport: {
    bus: {
      available: 'Local and express buses from Rameswaram',
      station: 'Rameswaram Bus Stand',
      distance: '3 km'
    },
    train: {
      station: 'Rameswaram Railway Station',
      distance: '3 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis and Tourist Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government General Hospital Rameswaram',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Rameswaram Town Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '2–3 km',
        location: 'Rameswaram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Rameswaram',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '3–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Rameswaram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '3 km',
      address: 'Rameswaram'
    }
  ]
},

{
  id: 'tn_pamban_bridge',
  name: 'Pamban Bridge',
  district: 'Ramanathapuram',
  category: 'historical',
  categoryName: 'Engineering & Heritage Attractions',
  rating: 4.7,
  ratingCount: 9200,
  entryFee: 'Free (View from permitted areas)',
  openTime: '24 Hours',
  closeTime: '24 Hours',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic railway bridge connecting Rameswaram Island with mainland India, surrounded by spectacular sea views.',
  longDesc: 'Pamban Bridge is a famous engineering landmark connecting Rameswaram Island with mainland Tamil Nadu. The historic railway bridge crosses the Palk Strait and offers spectacular views of the surrounding sea and coastline.',
  attractions: [
    'Pamban Railway Bridge',
    'Sea Views',
    'Palk Strait',
    'Road Bridge View',
    'Photography'
  ],
  history: 'The original railway bridge was opened in 1914 and became an important transport link between mainland India and Rameswaram Island.',
  lat: 9.2750,
  lng: 79.2150,
  image: 'https://staticimg.amarujala.com/assets/images/2025/04/05/new-pamban-bridge_777f5562d3ff5b5a1669fc6b1de2642c.jpeg?w=414&dpr=3.0&q=80',
  transport: {
    bus: {
      available: 'Buses connecting Rameswaram and Ramanathapuram',
      station: 'Pamban Bus Stop',
      distance: '1 km'
    },
    train: {
      station: 'Pamban Railway Station',
      distance: '2 km',
      frequency: 'Train services connect Rameswaram with mainland'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Rameswaram',
        distance: '12 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Pamban Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Pamban'
      }
    ],
    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–2 km',
        location: 'Pamban'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Rameswaram',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '10–15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Pamban Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Pamban'
    }
  ]
},

{
  id: 'tn_ervadi_dargah',
  name: 'Erwadi Dargah',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Spiritual & Cultural Places',
  rating: 4.6,
  ratingCount: 6500,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',
  shortDesc: 'Important Islamic pilgrimage centre known for the shrine of Sultan Syed Ibrahim Shaheed and annual religious celebrations.',
  longDesc: 'Erwadi Dargah is a prominent pilgrimage destination in Ramanathapuram district. The shrine is associated with Sultan Syed Ibrahim Shaheed and attracts devotees from different parts of India throughout the year.',
  attractions: [
    'Erwadi Dargah',
    'Main Shrine',
    'Religious Architecture',
    'Annual Urs Festival',
    'Spiritual Heritage'
  ],
  history: 'The shrine is traditionally associated with Sultan Syed Ibrahim Shaheed and has developed into an important pilgrimage centre in southern Tamil Nadu.',
  lat: 9.1980,
  lng: 78.9900,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeYGaTYHku5R5Rd8Y5vf31t1SxLJuea1ZrUGHpBwjA-g&s=10',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and nearby towns',
      station: 'Erwadi Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '25 km',
      frequency: 'Buses and taxis available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kilakarai',
        distance: '10 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    police: [
      {
        name: 'Erwadi Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Erwadi'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Erwadi'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Erwadi / Ramanathapuram',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '1–5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Erwadi Local Restaurants',
      foodType: 'South Indian & Coastal Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '0.5–2 km',
      address: 'Erwadi'
    }
  ]
},

{
  id: 'tn_ariyaman_beach',
  name: 'Ariyaman Beach',
  district: 'Ramanathapuram',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',
  rating: 4.5,
  ratingCount: 4800,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Peaceful coastal beach near Rameswaram known for clear waters, sandy shores and relaxing seaside views.',
  longDesc: 'Ariyaman Beach is a scenic coastal destination on the Palk Bay side of Ramanathapuram district. The beach offers a quieter alternative to the busier tourist areas and is suitable for beach walks, photography and family outings.',
  attractions: [
    'Ariyaman Beach',
    'Palk Bay Views',
    'Beach Walks',
    'Sunrise Views',
    'Photography'
  ],
  history: 'Ariyaman is part of the coastal landscape of Ramanathapuram district and has developed as a recreational beach destination.',
  lat: 9.3500,
  lng: 78.9800,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiECwFD0KIAhrQt9S-APRinx87BDONkepZ57etn3gChQ&s=10',
  transport: {
    bus: {
      available: 'Local buses from Rameswaram and Ramanathapuram',
      station: 'Nearest Local Bus Stop',
      distance: '1–2 km'
    },
    train: {
      station: 'Rameswaram Railway Station',
      distance: '15–20 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars and Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Rameswaram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Rameswaram'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number',
        address: 'Nearby Coastal Area'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Rameswaram Beach Area Hotels',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '10–20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹600 for two',
      rating: 4.2,
      dist: '5–10 km',
      address: 'Ramanathapuram Coastal Area'
    }
  ]
},

{
  id: 'tn_kilakarai',
  name: 'Kilakarai Heritage Town',
  district: 'Ramanathapuram',
  category: 'cultural',
  categoryName: 'Cultural & Heritage Places',
  rating: 4.4,
  ratingCount: 3600,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic coastal town known for its maritime heritage, traditional architecture and old mosques.',
  longDesc: 'Kilakarai is a historic coastal town on the Gulf of Mannar. It has a long maritime trading history and is known for traditional houses, historic mosques and its distinctive coastal cultural heritage.',
  attractions: [
    'Historic Mosques',
    'Coastal Heritage',
    'Traditional Houses',
    'Old Trading Streets',
    'Gulf of Mannar Views'
  ],
  history: 'Kilakarai developed as an important maritime trading centre and has centuries-old connections with overseas trade across the Indian Ocean.',
  lat: 9.2300,
  lng: 78.7850,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdkfbjGJH5A7BcFvb00IR32WBQJdU3GJEe-oTmHGV8fw&s=10',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and Rameswaram',
      station: 'Kilakarai Bus Stand',
      distance: '0.5 km'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '15 km',
      frequency: 'Buses and taxis connect Kilakarai'
    },
    taxi: {
      options: 'Local Taxis, Auto Rickshaws and Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kilakarai',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    police: [
      {
        name: 'Kilakarai Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kilakarai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kilakarai'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ramanathapuram',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '15–20 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Kilakarai Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Kilakarai'
    }
  ]
},

{
  id: 'tn_gulf_mannar_marine',
  name: 'Gulf of Mannar Marine Biosphere Reserve',
  district: 'Ramanathapuram',
  category: 'wildlife',
  categoryName: 'Marine Wildlife & Nature',
  rating: 4.6,
  ratingCount: 3900,
  entryFee: 'Activity / Boat charges may apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',
  shortDesc: 'Marine ecosystem known for coral reefs, seagrass, mangroves, islands and diverse coastal wildlife.',
  longDesc: 'The Gulf of Mannar Marine Biosphere Reserve is a biologically rich marine region along the southeastern coast of Tamil Nadu. The area contains coral reefs, seagrass beds, mangroves, islands and diverse marine life, making it an important destination for nature and marine-ecosystem awareness.',
  attractions: [
    'Coral Reefs',
    'Marine Ecosystem',
    'Coastal Islands',
    'Seagrass Beds',
    'Mangroves',
    'Marine Wildlife'
  ],
  history: 'The Gulf of Mannar was established as a protected marine biosphere region because of its exceptional marine biodiversity and ecological importance.',
  lat: 9.1500,
  lng: 78.6000,
  image: 'https://i.ytimg.com/vi/8po4Z6n6BJU/maxresdefault.jpg',
  transport: {
    bus: {
      available: 'Buses from Ramanathapuram and coastal towns',
      station: 'Ramanathapuram Bus Stand',
      distance: '10–30 km depending on access point'
    },
    train: {
      station: 'Ramanathapuram Railway Station',
      distance: '10–30 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis and Authorized Boat Operators'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ramanathapuram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Ramanathapuram'
      }
    ],
    police: [
      {
        name: 'Coastal Police Station',
        distance: '10–20 km',
        phone: 'Verify current number',
        address: 'Ramanathapuram Coast'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '10–20 km',
        location: 'Nearby Coastal Towns'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Ramanathapuram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '10–30 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.2,
      dist: '5–20 km',
      address: 'Ramanathapuram Coast'
    }
  ]
},
    {
  id: 'tn_padmanabhapuram_palace',
  name: 'Padmanabhapuram Palace',
  district: 'Kanyakumari',
  category: 'historical',
  categoryName: 'Historical Sites & Palaces',
  rating: 4.8,
  ratingCount: 9200,
  entryFee: 'Entry charges apply',
  openTime: '09:00 AM',
  closeTime: '04:30 PM',
  holiday: 'Monday',
  bestTime: 'October to March',
  shortDesc: 'Magnificent traditional wooden palace showcasing the rich architecture and heritage of the former Travancore kingdom.',
  longDesc: 'Padmanabhapuram Palace is a historic palace complex known for its traditional Kerala-style architecture, intricate woodwork, murals, carved ceilings and royal interiors. It was the former seat of the Travancore rulers and is one of the most important heritage attractions in Kanyakumari district.',
  attractions: [
    'Manimalika',
    'Thai Kottaram',
    'Durbar Hall',
    'Navarathri Mandapam',
    'Wooden Architecture',
    'Royal Murals'
  ],
  history: 'The palace served as the capital and royal residence of the Travancore kingdom before the capital was shifted to Thiruvananthapuram.',
  lat: 8.2447,
  lng: 77.3250,
  image: 'https://kanyakumaritourism.in/images/places-to-visit/headers/padmanabhapuram-palace-kanyakumari-tourism-entry-fee-timings-holidays-reviews-header.jpg',
  transport: {
    bus: {
      available: 'Regular buses from Nagercoil, Kanyakumari and Thiruvananthapuram',
      station: 'Padmanabhapuram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Eraniyal Railway Station',
      distance: '3 km',
      frequency: 'Local trains and buses available'
    },
    taxi: {
      options: 'Taxis, Auto Rickshaws & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thuckalay',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Thuckalay'
      }
    ],
    police: [
      {
        name: 'Thuckalay Police Station',
        distance: '3 km',
        phone: 'Verify current number',
        address: 'Thuckalay'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Thuckalay'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thuckalay Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.2,
      dist: '2 km',
      address: 'Thuckalay'
    }
  ]
},

{
  id: 'tn_thiruvalluvar_statue',
  name: 'Thiruvalluvar Statue',
  district: 'Kanyakumari',
  category: 'cultural',
  categoryName: 'Cultural & Coastal Monuments',
  rating: 4.7,
  ratingCount: 8600,
  entryFee: 'Ferry ticket / Entry charges may apply',
  openTime: '08:00 AM',
  closeTime: '04:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',
  shortDesc: 'Iconic 133-foot monument dedicated to Tamil poet and philosopher Thiruvalluvar standing on a rocky island near Kanyakumari.',
  longDesc: 'The Thiruvalluvar Statue is one of the most recognizable landmarks of Kanyakumari. The monumental statue stands on a rocky island close to Vivekananda Rock Memorial and represents the cultural contribution of the Tamil poet Thiruvalluvar.',
  attractions: [
    '133-Foot Statue',
    'Rock Island',
    'Sea Views',
    'Ferry Ride',
    'Vivekananda Rock Memorial View'
  ],
  history: 'The statue was inaugurated in 2000 as a monumental tribute to Thiruvalluvar and his contribution to Tamil literature.',
  lat: 8.0777,
  lng: 77.5560,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgeca_16-cGWblUuABhba1VdsTsghN7lIQkjmDhf66nA&s=10',
  transport: {
    bus: {
      available: 'Local buses from Nagercoil and Kanyakumari',
      station: 'Kanyakumari Bus Stand',
      distance: '1.5 km'
    },
    train: {
      station: 'Kanyakumari Railway Station (CAPE)',
      distance: '2 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Auto Rickshaws, Pre-paid Taxis & Tourist Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kanyakumari',
        distance: '2 km',
        phone: 'Verify current number',
        address: 'Kanyakumari'
      }
    ],
    police: [
      {
        name: 'Kanyakumari Marine Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Kanyakumari'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Kanyakumari Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel Sea View Kanyakumari',
      price: '₹3,800/night',
      rating: 4.5,
      dist: '0.5 km',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
      phone: '+91 4652 246361'
    }
  ],
  restaurants: [
    {
      name: 'Kanyakumari Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.3,
      dist: '0.5–1 km',
      address: 'Kanyakumari'
    }
  ]
},

{
  id: 'tn_padmanabhapuram_temple',
  name: 'Thanumalayan Temple, Suchindram',
  district: 'Kanyakumari',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',
  rating: 4.8,
  ratingCount: 7400,
  entryFee: 'Free',
  openTime: '04:30 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Historic temple famous for its magnificent gopuram, musical pillars and unique Trimurti tradition.',
  longDesc: 'Thanumalayan Temple at Suchindram is one of the most important temples in Kanyakumari district. The temple is dedicated to the combined form of Brahma, Vishnu and Shiva and is renowned for its intricate sculptures, musical pillars and large temple tower.',
  attractions: [
    'Main Gopuram',
    'Musical Pillars',
    'Large Hanuman Statue',
    'Stone Sculptures',
    'Temple Architecture'
  ],
  history: 'An ancient temple with strong Shaivite and Vaishnavite traditions and a long association with the cultural history of southern Tamil Nadu.',
  lat: 8.1540,
  lng: 77.4670,
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/SUCHINDAM_%283%29.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
  transport: {
    bus: {
      available: 'Frequent buses from Nagercoil and Kanyakumari',
      station: 'Suchindram Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '6 km',
      frequency: 'Regular trains and buses available'
    },
    taxi: {
      options: 'Auto Rickshaws, Taxis & Rental Cars'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Nagercoil',
        distance: '7 km',
        phone: 'Verify current number',
        address: 'Nagercoil'
      }
    ],
    police: [
      {
        name: 'Suchindram Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Suchindram'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Suchindram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '7 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Suchindram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5 km',
      address: 'Suchindram'
    }
  ]
},

{
  id: 'tn_thirparappu_waterfalls',
  name: 'Thirparappu Waterfalls',
  district: 'Kanyakumari',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.6,
  ratingCount: 6800,
  entryFee: 'Entry charges may apply',
  openTime: '07:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'June to January',
  shortDesc: 'Scenic waterfall on the Kodayar River surrounded by lush greenery and popular bathing areas.',
  longDesc: 'Thirparappu Waterfalls is a scenic natural attraction in Kanyakumari district where the Kodayar River cascades over a rocky stretch. The area is surrounded by greenery and is popular for family outings, nature photography and seasonal bathing.',
  attractions: [
    'Thirparappu Waterfalls',
    'Kodayar River',
    'Bathing Area',
    'Swimming Pool',
    'Riverside Scenery'
  ],
  history: 'The waterfall and surrounding river landscape have long been an important natural attraction in the western part of Kanyakumari district.',
  lat: 8.3890,
  lng: 77.2570,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5VZJ5-u3vflc4dUkhT3L9uEMRGob6WvC6iM48kdJJjJs4CaqZnhqD2xI&s=10',
  transport: {
    bus: {
      available: 'Buses from Nagercoil, Kulasekaram and nearby towns',
      station: 'Thirparappu Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '35 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kulasekaram',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Kulasekaram'
      }
    ],
    police: [
      {
        name: 'Thirparappu Police Station',
        distance: '1 km',
        phone: 'Verify current number',
        address: 'Thirparappu'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1 km',
        location: 'Thirparappu'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kulasekaram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '8–15 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Thirparappu Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Thirparappu'
    }
  ]
},

{
  id: 'tn_mathur_aqueduct',
  name: 'Mathur Aqueduct',
  district: 'Kanyakumari',
  category: 'nature',
  categoryName: 'Nature & Engineering',
  rating: 4.5,
  ratingCount: 4200,
  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',
  shortDesc: 'Impressive elevated aqueduct surrounded by green hills and plantations, offering beautiful countryside views.',
  longDesc: 'Mathur Aqueduct is a major engineering landmark in Kanyakumari district built across the Paraliyar River. The elevated structure carries water across the valley and provides visitors with scenic views of the surrounding hills and greenery.',
  attractions: [
    'Mathur Aqueduct',
    'Valley Views',
    'Green Hills',
    'Water Channel',
    'Photography'
  ],
  history: 'Built as an important irrigation structure to carry water across the valley and support agriculture in the region.',
  lat: 8.3390,
  lng: 77.2830,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAwSDwgZiSlanDlUgIEswahXw7xthzQ0TxLu423JYpw&s=10',
  transport: {
    bus: {
      available: 'Local buses from Nagercoil and nearby towns',
      station: 'Mathur Aqueduct Bus Stop',
      distance: '0.5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '35 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Tourist Taxis, Rental Cars & Local Autos'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruvattar',
        distance: '8 km',
        phone: 'Verify current number',
        address: 'Thiruvattar'
      }
    ],
    police: [
      {
        name: 'Thiruvattar Police Station',
        distance: '7 km',
        phone: 'Verify current number',
        address: 'Thiruvattar'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–8 km',
        location: 'Thiruvattar / Kulasekaram'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels in Nagercoil',
      price: '₹2,000–₹5,000/night',
      rating: 4.2,
      dist: '30–35 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.1,
      dist: '5–10 km',
      address: 'Nearby Town'
    }
  ]
},

{
  id: 'tn_olakkay_aruvikulam',
  name: 'Olakkay Aruvi Waterfalls',
  district: 'Kanyakumari',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',
  rating: 4.4,
  ratingCount: 2800,
  entryFee: 'Free / Check locally',
  openTime: '07:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None',
  bestTime: 'June to January',
  shortDesc: 'Hidden forest waterfall surrounded by the Western Ghats, popular among nature lovers and trekkers.',
  longDesc: 'Olakkay Aruvi is a lesser-known waterfall destination in the forested hills of Kanyakumari district. The route involves natural surroundings and is best suited for visitors interested in trekking, waterfalls and peaceful forest landscapes.',
  attractions: [
    'Waterfall',
    'Forest Trails',
    'Western Ghats',
    'Trekking',
    'Nature Photography'
  ],
  history: 'A natural waterfall associated with the forest and hill ecosystem of the Western Ghats in Kanyakumari district.',
  lat: 8.3700,
  lng: 77.3700,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjPju_sg9XXvBasTgY95RDGFLG91Nl1Q6pmYm1xv4Ww&s=10',
  transport: {
    bus: {
      available: 'Local buses to nearby villages',
      station: 'Nearest Local Bus Stop',
      distance: '3–5 km'
    },
    train: {
      station: 'Nagercoil Junction',
      distance: '30–40 km',
      frequency: 'Road transport required'
    },
    taxi: {
      options: 'Local Taxis & Guided Trekking Transport'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kulasekaram',
        distance: '15 km',
        phone: 'Verify current number',
        address: 'Kulasekaram'
      }
    ],
    police: [
      {
        name: 'Local Police Station',
        distance: '10–15 km',
        phone: 'Verify current number',
        address: 'Nearby Town'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '10–15 km',
        location: 'Nearby Town'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotels around Kulasekaram',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '15–25 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],
  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian & Kerala Cuisine',
      price: '₹400 for two',
      rating: 4.0,
      dist: '10–15 km',
      address: 'Nearby Town'
    }
  ]
},
    {
      id: 'tn_yercaud',
      name: 'Yercaud Hill Station',
      district: 'Salem',
      category: 'hillstations',
      categoryName: 'Hill Stations',
      rating: 4.5,
      ratingCount: 7100,
      entryFee: 'Free',
      openTime: '24 Hours',
      closeTime: '24 Hours',
      holiday: 'None',
      bestTime: 'October to June',
      shortDesc: 'The Jewel of the South featuring coffee plantations, orange groves, and peaceful Emerald Lake.',
      longDesc: 'Located at 1,515 meters in the Shevaroy Hills of Salem district, Yercaud is an affordable, scenic hill station. Highlights include Yercaud Emerald Lake with boating, Pagoda Point for valley views, Shevaroy Temple, and Kiliyur Falls.',
      attractions: ['Yercaud Emerald Lake', 'Pagoda Point Viewpoint', 'Shevaroy Temple Peak', 'Kiliyur Waterfalls', 'Botanical Garden & Orchidarium'],
      history: 'Discovered as a hill resort by Sir Thomas Munro in 1842.',
      lat: 11.7753,
      lng: 78.2093,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjalJho9o0dVcSfDiNbuSMvfw6RbWDLQJGjXlt8XsKw&s=10',
      transport: {
        bus: { available: 'Frequent buses from Salem Junction & Bus Stand (30 km ghat road)', station: 'Yercaud Bus Stand', distance: '0.5 km' },
        train: { station: 'Salem Junction (SA)', distance: '32 km', frequency: 'Superfast express trains from Chennai & Bangalore' },
        taxi: { options: 'Salem Ghat Road Cabs, Auto Rickshaws in Yercaud' }
      },
      emergency: {
        hospitals: [
          { name: 'Government Hospital Yercaud', distance: '1.0 km', phone: '04281-222234', address: 'Hospital Road' }
        ],
        police: [
          { name: 'Yercaud Police Station', distance: '0.6 km', phone: '04281-222223', address: 'Loop Road' }
        ],
        pharmacies: [
          { name: 'Sri Balaji Medicals', distance: '0.5 km', location: 'Lake Road' }
        ]
      },
      hotels: [
        { name: 'GRT Great Trails Yercaud', price: '₹6,500/night', rating: 4.7, dist: '2.5 km', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', phone: '+91 4281 222000' }
      ],
      restaurants: [
        { name: 'Sweet Rasoi', foodType: 'North & South Indian Veg', price: '₹350 for two', rating: 4.2, dist: '0.8 km', address: 'Near Lake' }
      ]
    },
    {
  id: 'tn_gangaikonda_cholapuram',
  name: 'Gangaikonda Cholapuram Temple',
  district: 'Ariyalur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',

  rating: 4.8,
  ratingCount: 368,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'October to March',

  shortDesc:
    'A magnificent Chola-era Shiva temple built by Rajendra Chola I, known for its grand Dravidian architecture, sculptures and historical significance.',

  longDesc:
    'Gangaikonda Cholapuram, located in Ariyalur district, was established by Rajendra Chola I after his northern expedition. He built the Gangaikondacholisvarar Temple and made the city the capital of the Chola Empire. The temple was constructed between approximately 1023 and 1036 AD and is an important example of Chola architecture, sculpture and history. The temple complex contains beautiful stone sculptures, inscriptions, a large Shiva Lingam, Nandi and the famous Simhakeni lion well. It is part of the UNESCO-listed Great Living Chola Temples.',

  attractions: [
    'Gangaikondacholisvarar Shrine',
    'Large Shiva Lingam',
    'Massive Nandi',
    'Chola Stone Sculptures',
    'Sculptures of Saraswathi and Chandesura Anugraha Murthy',
    'Simbhakeni / Lion Well',
    'Chola-era Inscriptions',
    'Gangaikonda Cholapuram Heritage Complex'
  ],

  history:
    'Rajendra Chola I established Gangaikonda Cholapuram after his successful expedition to the Gangetic plains in 1023 AD. The city became the capital of the Chola Empire and remained an important capital for about 256 years. The Gangaikondacholisvarar Temple was constructed during the reign of Rajendra Chola I and represents the artistic and architectural excellence of the Middle Chola period.',

  lat: 11.20632,
  lng: 79.44872,

  image:
    'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',

  transport: {
    bus: {
      available: 'Local and intercity buses available',
      station: 'Gangaikonda Cholapuram Bus Stop',
      distance: 'Near the temple'
    },

    train: {
      station: 'Ariyalur Railway Station',
      distance: 'Approximately 45 km',
      frequency: 'Regular trains available on the Chennai–Tiruchirappalli route'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available from nearby towns'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Jayankondam',
        distance: 'Approximately 9 km',
        phone: 'Verify current number locally',
        address: 'Jayankondam, Ariyalur District'
      }
    ],

    police: [
      {
        name: 'Jayankondam Police Station',
        distance: 'Approximately 9 km',
        phone: 'Verify current number locally',
        address: 'Jayankondam, Ariyalur District'
      }
    ],

    pharmacies: [
      {
        name: 'Nearby Medical Shops',
        distance: 'Available in Gangaikonda Cholapuram / Jayankondam',
        location: 'Gangaikonda Cholapuram and surrounding area'
      }
    ]
  },

  hotels: [
    {
      name: 'Nearby Hotels in Jayankondam',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 9 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Jayankondam',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 9 km',
      address: 'Jayankondam, Ariyalur District'
    }
  ]
},
{
  id: 'tn_pichavaram',
  name: 'Pichavaram Mangrove Forest',
  district: 'Cuddalore',
  category: 'nature',
  categoryName: 'Natural & Scenic Places',

  rating: 4.5,
  ratingCount: 23601,

  entryFee: 'Boating charges applicable',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Boating services generally available daily)',
  bestTime: 'November to February',

  shortDesc:
    'One of India’s largest and best-preserved mangrove forests, famous for its narrow waterways, boating experience and rich biodiversity.',

  longDesc:
    'Pichavaram Mangrove Forest is located between the Vellar and Coleroon estuaries in Cuddalore district. Spread over approximately 1,478.64 hectares, it is one of India’s largest and best-preserved mangrove ecosystems. The forest consists of a complex network of waterways surrounded by dense mangrove vegetation. Visitors can explore the mangrove channels through boat rides. The destination is popular among nature lovers, photographers, bird watchers and adventure enthusiasts.',

  attractions: [
    'Mangrove Forest',
    'Mangrove Waterways',
    'Boat Ride',
    'Bird Watching',
    'Rich Aquatic Biodiversity',
    'Scenic Natural Environment',
    'Photography Spots'
  ],

  history:
    'Pichavaram is a significant mangrove ecosystem located along the coastal region of Cuddalore district. Its unique marine forest environment has made it an important ecotourism destination in Tamil Nadu. The location also gained wider popularity after appearing in a boat sequence in the Tamil film Dasavathaaram.',

  lat: 11.4285,
  lng: 79.7850,

  image:
    'https://im.whatshot.in/img/2019/Sep/is-1568204483.jpg?wp=1',

  transport: {
    bus: {
      available: 'Buses available from Chidambaram and nearby towns',
      station: 'Pichavaram Bus Stop',
      distance: 'Near the boating centre'
    },

    train: {
      station: 'Chidambaram Railway Station',
      distance: 'Approximately 16 km',
      frequency: 'Regular passenger and express trains available'
    },

    taxi: {
      options:
        'Taxi, Auto Rickshaw and local transport available from Chidambaram'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Chidambaram',
        distance: 'Approximately 16 km',
        phone: 'Verify current number locally',
        address: 'Chidambaram, Cuddalore District'
      }
    ],

    police: [
      {
        name: 'Killai Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Killai, Cuddalore District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Killai / Chidambaram'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Chidambaram',
      price: 'Varies',
      rating: 4.8,
      dist: 'Approximately 16 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Chidambaram',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 16 km',
      address: 'Chidambaram, Cuddalore District'
    }
  ]
},
{
  id: 'tn_bhavanisagar_dam',
  name: 'Bhavanisagar Dam',
  district: 'Erode',
  category: 'dams',
  categoryName: 'Dams & Lakes',

  rating: 4.4,
  ratingCount: 8500,

  entryFee: 'Varies / Check locally',
  openTime: '09:00 AM',
  closeTime: '06:30 PM',
  holiday: 'None (Generally open daily)',
  bestTime: 'October to March',

  shortDesc:
    'A major dam across the Bhavani River surrounded by scenic hills, gardens, reservoir views and recreational attractions.',

  longDesc:
    'Bhavanisagar Dam is located across the Bhavani River in Erode district. The reservoir and surrounding landscape provide a peaceful environment for visitors. The area includes gardens and recreational facilities and is suitable for family outings, photography and nature viewing. The dam is also associated with the Lower Bhavani Project and plays an important role in irrigation in the region.',

  attractions: [
    'Bhavanisagar Dam',
    'Bhavani River',
    'Reservoir View',
    'Garden',
    'Orchid Park',
    'Mountain Scenery',
    'Bird Watching',
    'Boating and Recreational Activities'
  ],

  history:
    'Bhavanisagar Dam was constructed across the Bhavani River as part of the Lower Bhavani Project. It is an important irrigation structure in Tamil Nadu and has also developed as a scenic tourist destination because of its reservoir, gardens and surrounding natural environment.',

  lat: 11.4796,
  lng: 77.1130,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9nVgaRHzBQqQkXImax4bsAiOLFQKcT-WZqeM_EwlIw&s=10',

  transport: {
    bus: {
      available: 'Regular buses available from Erode, Gobichettipalayam and Sathyamangalam',
      station: 'Bhavanisagar Bus Stand',
      distance: 'Approximately 2 km'
    },

    train: {
      station: 'Erode Junction Railway Station',
      distance: 'Approximately 75 km',
      frequency: 'Regular trains available from major cities'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Sathyamangalam',
        distance: 'Approximately 16 km',
        phone: 'Verify current number locally',
        address: 'Sathyamangalam, Erode District'
      }
    ],

    police: [
      {
        name: 'Bhavanisagar Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Bhavanisagar, Erode District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Bhavanisagar',
        location: 'Bhavanisagar, Erode District'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Sathyamangalam',
      price: 'Varies',
      rating: 4.5,
      dist: 'Approximately 16 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Bhavanisagar',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.3,
      dist: 'Nearby',
      address: 'Bhavanisagar, Erode District'
    }
  ]
},
{
  id: 'tn_kalvarayan_hills',
  name: 'Kalvarayan Hills',
  district: 'Kallakurichi',
  category: 'hill_stations',
  categoryName: 'Hill Stations & Natural Places',

  rating: 4.4,
  ratingCount: 1200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill range in the Eastern Ghats known for waterfalls, streams, forests, trekking routes and peaceful hill landscapes.',

  longDesc:
    'Kalvarayan Hills are a major hill range of the Eastern Ghats associated with Kallakurichi district. The hills contain forests, waterfalls, streams, rivers and scenic viewpoints. The area is popular among trekkers and nature lovers because of its cool climate, peaceful surroundings and relatively unexplored landscapes. Important attractions around the hills include Megam Falls, Periyar Falls, Gomukhi Dam and a botanical garden.',

  attractions: [
    'Megam Falls',
    'Periyar Falls',
    'Gomukhi Dam',
    'Forest Streams',
    'Scenic Viewpoints',
    'Botanical Garden',
    'Trekking Trails',
    'Tribal Villages',
    'Vellimalai'
  ],

  history:
    'Kalvarayan Hills form part of the Eastern Ghats and have a long association with local tribal communities. The hill region has historically supported forest-based livelihoods and settlements. The area is also known for its natural environment, waterfalls and traditional tribal culture.',

  lat: 11.7780,
  lng: 78.6500,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUWAFtOatxpE3Z0-IxnQu8zxRvvVHB-5ncIpOOeLzCQGnJpZL97lQmHo&s=10',

  transport: {
    bus: {
      available: 'Buses available from Kallakurichi to Kalvarayan Hills',
      station: 'Kallakurichi Bus Stand',
      distance: 'Approximately 56 km'
    },

    train: {
      station: 'Chinnasalem Railway Station',
      distance: 'Approximately 40–50 km',
      frequency: 'Trains available from Chennai and Salem routes'
    },

    taxi: {
      options:
        'Taxi and local buses available from Kallakurichi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Kallakurichi',
        distance: 'Approximately 56 km',
        phone: 'Verify current number locally',
        address: 'Kallakurichi, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Kalvarayan Hills Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Kalvarayan Hills, Kallakurichi District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby settlements',
        location: 'Kalvarayan Hills'
      }
    ]
  },

  hotels: [
    {
      name: 'Local Accommodation in Kalvarayan Hills',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants and Food Stalls',
      foodType: 'South Indian / Local Food',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      address: 'Kalvarayan Hills, Kallakurichi District'
    }
  ]
},
{
  id: 'tn_kalyana_pasupatheeswarar',
  name: 'Kalyana Pasupatheeswarar Temple',
  district: 'Karur',
  category: 'temples',
  categoryName: 'Temples & Religious Places',

  rating: 4.7,
  ratingCount: 5200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None (Open daily)',
  bestTime: 'October to March',

  shortDesc:
    'An ancient Shiva temple and landmark of Karur, famous for its historic significance, beautiful sculptures and sacred traditions.',

  longDesc:
    'Arulmigu Kalyana Pasupatheeswarar Temple is one of the important landmarks of Karur. Karur was associated with the early Chera kingdom during the Sangam period. The temple is dedicated to Lord Pasupatheeswarar, a form of Lord Shiva. The temple is known for its artistic sculptures including the Pasupatheeswarar Lingam, the depiction of a cow pouring milk over the Lingam and Rangamatha. It is an important pilgrimage and heritage attraction in Karur.',

  attractions: [
    'Pasupatheeswarar Shrine',
    'Historic Stone Sculptures',
    'Pasupatheeswarar Lingam',
    'Cow and Lingam Sculpture',
    'Rangamatha Sculpture',
    'Ancient Temple Architecture',
    'Religious Festivals'
  ],

  history:
    'Karur was an important centre during the Sangam period and was associated with the early Chera kings. The Pasupatheeswarar Temple has been an important Shaivite pilgrimage centre and is considered one of the major religious landmarks of Karur.',

  lat: 10.9601,
  lng: 78.0766,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZK5Gonkb9oryzrNXL5Z8Z5ltEA4pDRvBEep0xvDE1ibAz20Zcbxi3_of&s=10',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Karur Bus Stand',
      distance: 'Approximately 1–2 km'
    },

    train: {
      station: 'Karur Junction Railway Station',
      distance: 'Approximately 2 km',
      frequency: 'Regular trains available to major cities'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and local transport are available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Karur',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Karur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Karur Town Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Karur, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Karur Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Karur Town',
      price: 'Varies',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Karur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.1,
      dist: '1–3 km',
      address: 'Karur Town'
    }
  ]
},
{
  id: 'tn_krishnagiri_dam',
  name: 'Krishnagiri Dam Park',
  district: 'Krishnagiri',
  category: 'dams',
  categoryName: 'Dams & Parks',

  rating: 4.2,
  ratingCount: 4800,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Generally open daily)',
  bestTime: 'October to February',

  shortDesc:
    'A scenic dam and recreational park located across the Thenpennai River, featuring gardens, children’s play areas and beautiful reservoir views.',

  longDesc:
    'Krishnagiri Dam Park is located approximately 10 km from Krishnagiri town. The dam was constructed across the Thenpennai River during 1955–1957 under the leadership of former Tamil Nadu Chief Minister K. Kamaraj. The dam supports irrigation in the surrounding agricultural areas. The park covers around 50 acres on both sides of the dam and includes flower gardens and children’s play equipment, making it a popular family tourist destination.',

  attractions: [
    'Krishnagiri Dam',
    'Thenpennai River',
    'Dam Reservoir',
    'Flower Gardens',
    'Children’s Play Area',
    'Scenic Viewpoints',
    'Photography',
    'Family Recreation'
  ],

  history:
    'Krishnagiri Dam was constructed between 1955 and 1957 across the Thenpennai River. The project was developed during the period of Chief Minister K. Kamaraj and has benefited agricultural lands around the region through irrigation.',

  lat: 12.5146,
  lng: 78.2137,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_prRm160UE3vlVdBo3hphBzQmRJFIZUSLBdQ9JbROQg&s=10',

  transport: {
    bus: {
      available: 'Regular buses available from Krishnagiri town',
      station: 'Krishnagiri Bus Stand',
      distance: 'Approximately 10 km'
    },

    train: {
      station: 'Dharmapuri Railway Station',
      distance: 'Approximately 40–50 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available from Krishnagiri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Krishnagiri',
        distance: 'Approximately 10 km',
        phone: 'Verify current number locally',
        address: 'Krishnagiri, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Krishnagiri Police Station',
        distance: 'Approximately 10 km',
        phone: 'Verify current number locally',
        address: 'Krishnagiri, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available near Krishnagiri town',
        location: 'Krishnagiri'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Krishnagiri',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 10 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Krishnagiri',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 10 km',
      address: 'Krishnagiri Town'
    }
  ]
},
{
  id: 'tn_poompuhar',
  name: 'Poompuhar',
  district: 'Mayiladuthurai',
  category: 'historical',
  categoryName: 'Historical & Heritage Places',

  rating: 4.3,
  ratingCount: 1200,

  entryFee: 'Free for public areas; charges may apply at specific attractions',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Specific attractions may have separate timings)',
  bestTime: 'November to February',

  shortDesc:
    'An ancient Chola port city on the Bay of Bengal, famous for its historical heritage, beach, Kannagi statue and cultural attractions.',

  longDesc:
    'Poompuhar, also known as Kaveripoompattinam, is an ancient port town located near the mouth of the Kaveri River on the Bay of Bengal. It was once a flourishing port city and served for a period as the capital of the Early Chola kings. Today, Poompuhar is an important historical and cultural tourist destination known for Poompuhar Beach, Kannagi Statue, museums, lighthouse views and its connection with Tamil literary heritage.',

  attractions: [
    'Poompuhar Beach',
    'Kannagi Statue',
    'Poompuhar Museum',
    'Lighthouse',
    'Kaveri River Mouth',
    'Silappathikaram Heritage',
    'Ancient Port City Heritage',
    'Scenic Coastal Views'
  ],

  history:
    'Poompuhar, historically known as Kaveripoompattinam, was a flourishing ancient port city and was associated with the Early Chola kings. The city has an important place in Tamil history and literature, particularly through the epic Silappathikaram.',

  lat: 11.1437,
  lng: 79.8510,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKP4g0A44Vl0hM7-S92WJFyVHoOMfoR7vrf6W0efpLw&s=10',

  transport: {
    bus: {
      available: 'Regular buses available from Mayiladuthurai and Sirkazhi',
      station: 'Poompuhar Bus Stand',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Mayiladuthurai Junction Railway Station',
      distance: 'Approximately 24 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis and local buses available from Mayiladuthurai and Sirkazhi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Sirkazhi',
        distance: 'Approximately 21 km',
        phone: 'Verify current number locally',
        address: 'Sirkazhi, Mayiladuthurai District'
      }
    ],

    police: [
      {
        name: 'Poompuhar / Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Poompuhar, Mayiladuthurai District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available nearby',
        location: 'Poompuhar / Sirkazhi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels and Tourist Accommodation in Poompuhar',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Poompuhar',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: 4.0,
      dist: 'Nearby',
      address: 'Poompuhar, Mayiladuthurai District'
    }
  ]
},
{
  id: 'tn_velankanni',
  name: 'Velankanni Basilica of Our Lady of Good Health',
  district: 'Nagapattinam',
  category: 'religious',
  categoryName: 'Religious & Pilgrimage Places',

  rating: 4.7,
  ratingCount: 5200,

  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'August to September for the annual festival; October to February for pleasant weather',

  shortDesc:
    'A world-famous Christian pilgrimage centre on the Bay of Bengal, known for its Gothic-style Basilica and spiritual significance.',

  longDesc:
    'Velankanni is one of the most visited pilgrimage centres in India and is located on the shores of the Bay of Bengal in Nagapattinam district. The Basilica of Our Lady of Good Health attracts pilgrims from India and around the world. The church is noted for its distinctive Gothic-style architecture, white walls and red-tiled roof. The shrine also includes the Chapel of Our Lady of Sorrows. Visitors from different faiths visit the Basilica as a place of prayer and pilgrimage.',

  attractions: [
    'Basilica of Our Lady of Good Health',
    'Main Basilica',
    'Chapel of Our Lady of Sorrows',
    'Gothic-style Architecture',
    'Velankanni Beach',
    'Pilgrimage Centre',
    'Annual Feast',
    'Night Church Illumination'
  ],

  history:
    'Velankanni developed into a major Christian pilgrimage centre around the shrine dedicated to Our Lady of Good Health. Its international religious importance led to the town being recognised as a Holy City by the Vatican. The Basilica attracts pilgrims from different parts of India and other countries.',

  lat: 10.6833,
  lng: 79.8450,

  image:
    'https://vailankanni.info/wp-content/uploads/2022/12/1-2.jpg',

  transport: {
    bus: {
      available: 'Frequent buses available from Nagapattinam, Thanjavur, Chennai and nearby towns',
      station: 'Velankanni Bus Stand',
      distance: 'Near the Basilica'
    },

    train: {
      station: 'Velankanni Railway Station',
      distance: 'Approximately 1 km',
      frequency: 'Regular trains available on selected routes'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport are available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Velankanni',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Velankanni, Nagapattinam District'
      }
    ],

    police: [
      {
        name: 'Velankanni Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Velankanni, Nagapattinam District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Velankanni'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels near Velankanni Basilica',
      price: 'Varies',
      rating: 4.2,
      dist: '0.5–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Velankanni',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: 4.1,
      dist: '0.5–3 km',
      address: 'Velankanni, Nagapattinam District'
    }
  ]
},
{
  id: 'tn_sathanur_fossil_wood_park',
  name: 'National Fossil Wood Park, Sathanur',
  district: 'Perambalur',
  category: 'natural',
  categoryName: 'Natural & Geological Places',

  rating: 4.4,
  ratingCount: 1500,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to February',

  shortDesc:
    'A unique geological attraction featuring a huge petrified tree trunk estimated to be around 100 million years old.',

  longDesc:
    'The National Fossil Wood Park at Sathanur in Perambalur district is a remarkable geological attraction. The park preserves a large petrified tree trunk that is more than 18 metres long and belongs to the geological formations of the Cretaceous period. Geological studies indicate that the area was once influenced by an ancient sea environment. The site also has an educational centre, museum and children’s park where visitors can learn about fossils, the origin of Earth, evolution and geology.',

  attractions: [
    'Petrified Fossil Tree',
    'Sathanur Fossil Wood',
    'Fossil Museum',
    'Educational Centre',
    'Children’s Park',
    'Geological Exhibits',
    'Nature Photography',
    'Geology Learning Experience'
  ],

  history:
    'The fossilized tree at Sathanur belongs to an ancient geological period. The large petrified trunk is more than 18 metres long. Dr. M. S. Krishnan of the Geological Survey of India first reported the fossil tree in 1940.',

  lat: 11.2500,
  lng: 78.9000,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgAaSlmxaG-JdyiOW2yXjHakAS_EhLTC0eNzS0sKC7Q&s=10',

  transport: {
    bus: {
      available: 'Town buses available from Perambalur to Sathanur',
      station: 'Sathanur Bus Stop',
      distance: 'Near the tourist site'
    },

    train: {
      station: 'Ariyalur Railway Station',
      distance: 'Approximately 30–35 km',
      frequency: 'Regular trains available on the Chennai–Trichy route'
    },

    taxi: {
      options:
        'Taxis and local transport available from Perambalur and Ariyalur'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Perambalur',
        distance: 'Approximately 23 km',
        phone: 'Verify current number locally',
        address: 'Perambalur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Local Police Station, Sathanur',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Sathanur, Perambalur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby villages',
        location: 'Sathanur / Perambalur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Perambalur',
      price: 'Varies',
      rating: 4.1,
      dist: 'Approximately 23 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Perambalur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: 4.0,
      dist: 'Approximately 23 km',
      address: 'Perambalur Town'
    }
  ]
},
{
  id: 'tn_pudukkottai_government_museum',
  name: 'Government Museum, Pudukkottai',
  district: 'Pudukkottai',
  category: 'museums',
  categoryName: 'Museums',

  rating: 4.4,
  ratingCount: 1594,

  entryFee: 'Adult ₹5, Child ₹3',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Friday and National Holidays',
  bestTime: 'November to February',

  shortDesc:
    'A multi-purpose museum displaying archaeological, geological, zoological, anthropological, artistic and cultural collections.',

  longDesc:
    'The Government Museum at Thirugokarnam, Pudukkottai was established in 1910 and is one of the important museums in Tamil Nadu. The museum contains collections from archaeology, anthropology, numismatics, arts, zoology, botany, geology and industrial arts. Visitors can see rare objects including sculptures, coins, musical instruments, paintings, copper objects, fossils, zoological specimens and other materials that help explain the culture and life of earlier communities.',

  attractions: [
    'Archaeology Section',
    'Anthropology Section',
    'Numismatics Collection',
    'Zoology Section',
    'Botany Section',
    'Geology Section',
    'Stone Sculptures',
    'Fossils',
    'Coins',
    'Musical Instruments',
    'Paintings'
  ],

  history:
    'The Government Museum at Pudukkottai was started in 1910 and was taken over by the Government in 1950. It is a multi-purpose museum with several specialised sections and a large collection of objects related to archaeology, anthropology, geology, zoology, arts and culture.',

  lat: 10.3900,
  lng: 78.8200,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9tHO3c--_JrFm_CJkyLdC4mG0Zb4soPBs-z1jo4YKQ&s=10',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Pudukkottai Bus Stand',
      distance: 'Approximately 5 km'
    },

    train: {
      station: 'Pudukkottai Railway Station',
      distance: 'Approximately 3 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Pudukkottai',
        distance: 'Approximately 4 km',
        phone: 'Verify current number locally',
        address: 'Pudukkottai, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Pudukkottai Town Police Station',
        distance: 'Approximately 4 km',
        phone: 'Verify current number locally',
        address: 'Pudukkottai, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Thirugokarnam / Pudukkottai'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Pudukkottai',
      price: 'Varies',
      rating: null,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Pudukkottai',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '2–5 km',
      address: 'Pudukkottai Town'
    }
  ]
},
{
  id: 'tn_kanchanagiri_hills',
  name: 'Kanchanagiri Hills',
  district: 'Ranipet',
  category: 'hill_stations',
  categoryName: 'Hill Stations & Recreational Places',

  rating: 4.5,
  ratingCount: 204,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill destination at around 1,500 feet elevation, known for green surroundings, hilltop temples and the famous Bell Rock.',

  longDesc:
    'Kanchanagiri Hills is a popular natural and recreational destination in Ranipet district. The green hill is situated at an elevation of around 1,500 feet and contains small Shiva and Murugan temples. One of its most notable attractions is the famous Bell Rock, which is known for the sound associated with it. The hill provides a peaceful environment for visitors interested in nature, photography, short hikes and scenic views.',

  attractions: [
    'Kanchanagiri Hill',
    'Bell Rock',
    'Shiva Temple',
    'Murugan Temple',
    'Green Landscape',
    'Hilltop View',
    'Nature Photography',
    'Short Hiking',
    'Scenic Viewpoints'
  ],

  history:
    'Kanchanagiri Hills is a locally important natural and recreational destination of Ranipet district. The hill contains small Shiva and Murugan temples and is especially known for the Bell Rock, which has become a popular attraction among visitors.',

  lat: 12.9300,
  lng: 79.3200,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVmtROxAVS1-CdZjerb1lTuI9SBAUHIRB3dmpKZP-1g&s=10',

  transport: {
    bus: {
      available: 'Local buses available from Ranipet',
      station: 'Ranipet Bus Stand',
      distance: 'Approximately 8 km'
    },

    train: {
      station: 'Walajah Road Railway Junction',
      distance: 'Approximately 12 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available from Ranipet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Ranipet',
        distance: 'Approximately 8 km',
        phone: 'Verify current number locally',
        address: 'Ranipet, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Ranipet Police Station',
        distance: 'Approximately 8 km',
        phone: 'Verify current number locally',
        address: 'Ranipet, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available near Ranipet',
        location: 'Ranipet Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Ranipet',
      price: 'Varies',
      rating: null,
      dist: 'Approximately 8 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Ranipet',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: 'Approximately 8 km',
      address: 'Ranipet Town'
    }
  ]
},
{
  id: 'tn_vettangudi_bird_sanctuary',
  name: 'Vettangudi Bird Sanctuary',
  district: 'Sivaganga',
  category: 'wildlife',
  categoryName: 'Wildlife & Bird Sanctuaries',

  rating: 4.1,
  ratingCount: 514,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Check local forest department timings)',
  bestTime: 'November to February',

  shortDesc:
    'A protected wetland habitat covering about 40 hectares and attracting thousands of migratory and resident birds during the winter season.',

  longDesc:
    'Vettangudi Bird Sanctuary is located near Tirupathur in Sivaganga district. The sanctuary covers approximately 40 hectares and includes the tanks of Vettangudi, Periyakollukudi and Chinna Kollukudi villages. It is an important natural habitat and breeding area for winter migratory birds. Visitors can observe species such as Grey Herons, Darters, Spoonbills, White Ibis, Asian Openbill Storks, Night Herons, Painted Storks, Little Cormorants and egrets.',

  attractions: [
    'Migratory Birds',
    'Grey Herons',
    'Darters',
    'Spoonbills',
    'White Ibis',
    'Asian Openbill Storks',
    'Painted Storks',
    'Little Cormorants',
    'Bird Watching',
    'Bird Photography',
    'Wetland Ecosystem'
  ],

  history:
    'Vettangudi developed as an important bird habitat around a group of village tanks. The wetland environment provides suitable feeding, nesting, breeding and roosting areas for resident and migratory birds.',

  lat: 10.1830,
  lng: 78.5750,

  image:
    'https://tamilnadutourisminfo.com/wp-content/uploads/2023/10/vettangudi.webp',

  transport: {
    bus: {
      available: 'Road transport available from Tirupathur and nearby towns',
      station: 'Vettangudipatti Bus Stop',
      distance: 'Nearby'
    },

    train: {
      station: 'Karaikudi Railway Station',
      distance: 'Approximately 32 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis and local transport available from Tirupathur and Karaikudi'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tirupathur',
        distance: 'Approximately 10–15 km',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Sivaganga District'
      }
    ],

    police: [
      {
        name: 'Tirupathur Police Station',
        distance: 'Nearby town',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Sivaganga District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Tirupathur / Vettangudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tirupathur / Karaikudi',
      price: 'Varies',
      rating: null,
      dist: '10–32 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tirupathur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '10–15 km',
      address: 'Tirupathur, Sivaganga District'
    }
  ]
},
{
  id: 'tn_suruli_falls',
  name: 'Suruli Falls',
  district: 'Theni',
  category: 'waterfalls',
  categoryName: 'Waterfalls',

  rating: 4.2,
  ratingCount: 4842,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'None (Check local forest department timings)',
  bestTime: 'June to October',

  shortDesc:
    'A beautiful multi-stage waterfall in the Western Ghats, surrounded by dense greenery and natural mountain scenery.',

  longDesc:
    'Suruli Falls is one of the major natural attractions of Theni district. The waterfall is located in the Western Ghats and receives water from the Suruli River. The falls descend in stages through a forested landscape, creating a scenic environment for visitors. The surrounding area is also associated with caves and natural attractions. It is a popular destination for nature lovers, photography and short outdoor trips.',

  attractions: [
    'Suruli Waterfalls',
    'Western Ghats Landscape',
    'Forest Environment',
    'Suruli River',
    'Natural Caves',
    'Nature Photography',
    'Picnic Area',
    'Trekking / Walking Trails'
  ],

  history:
    'Suruli Falls is a naturally formed waterfall in the Western Ghats. The surrounding region contains several natural and religious attractions and has long been visited by local tourists.',

  lat: 9.6710,
  lng: 77.2750,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYjxn1BE9gVtIv1GwnWF6UM-booy85snx6o4Cq05Low&s=10',

  transport: {
    bus: {
      available: 'Buses available from Theni and Cumbum',
      station: 'Suruli Falls Bus Stop',
      distance: 'Near the entrance'
    },

    train: {
      station: 'Theni Railway Station',
      distance: 'Approximately 55–60 km',
      frequency: 'Limited passenger services; check current schedule'
    },

    taxi: {
      options:
        'Taxis and local transport available from Theni and Cumbum'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Cumbum',
        distance: 'Approximately 10–15 km',
        phone: 'Verify current number locally',
        address: 'Cumbum, Theni District'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Suruli / Cumbum area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Cumbum / Uthamapalayam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Cumbum / Theni',
      price: 'Varies',
      rating: 4.3,
      dist: '10–60 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Cumbum',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '10–15 km',
      address: 'Cumbum, Theni District'
    }
  ]
},
{
  id: 'tn_manapad_beach',
  name: 'Manapad Beach',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches',

  rating: 4.6,
  ratingCount: 2064,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'A scenic coastal destination known for its sandy shoreline, sea views, rocky landscape and Holy Cross Church on the cliff.',

  longDesc:
    'Manapad is a coastal village in Thoothukudi district located on the Bay of Bengal. The destination is known for its scenic beach, coastal landscape and the Holy Cross Church situated on a cliff overlooking the sea. The area attracts visitors for its peaceful surroundings, photography, coastal sightseeing and religious tourism. It is also associated with the visit of St. Francis Xavier.',

  attractions: [
    'Manapad Beach',
    'Bay of Bengal View',
    'Holy Cross Church',
    'Cliff Viewpoint',
    'Coastal Landscape',
    'Sunrise and Sunset',
    'Photography',
    'Fishing Village'
  ],

  history:
    'Manapad is an old coastal settlement associated with Portuguese-era Christian heritage. St. Francis Xavier visited the region in the 16th century. The Holy Cross Church on the coastal cliff is one of the best-known landmarks of the village.',

  lat: 8.3770,
  lng: 78.0520,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCh8NoQ8_6xrwxwdQTJLuJ8gM4fnLjH4IuT02c3y9XFA&s=10',

  transport: {
    bus: {
      available: 'Buses available from Tiruchendur and nearby towns',
      station: 'Manapad Bus Stop',
      distance: 'Near the beach'
    },

    train: {
      station: 'Tiruchendur Railway Station',
      distance: 'Approximately 18 km',
      frequency: 'Regular services available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local buses available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruchendur',
        distance: 'Approximately 18 km',
        phone: 'Verify current number locally',
        address: 'Tiruchendur, Thoothukudi District'
      }
    ],

    police: [
      {
        name: 'Manapad / Local Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Manapad, Thoothukudi District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Manapad / Tiruchendur',
        location: 'Manapad'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchendur',
      price: 'Varies',
      rating: null,
      dist: '18–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruchendur',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: '18–20 km',
      address: 'Tiruchendur, Thoothukudi District'
    }
  ]
},
{
  id: 'tn_thiruchendur_murugan',
  name: 'Thiruchendur Murugan Temple',
  district: 'Thoothukudi',
  category: 'temples',
  categoryName: 'Temples & Coastal Heritage',

  rating: 4.9,
  ratingCount: 18500,

  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Famous seashore temple dedicated to Lord Murugan, beautifully located beside the Bay of Bengal.',

  longDesc:
    'Thiruchendur Murugan Temple is one of the six major Arupadai Veedu temples dedicated to Lord Murugan. Located directly on the seashore, the temple is known for its magnificent architecture, religious significance, festivals and beautiful coastal surroundings.',

  attractions: [
    'Thiruchendur Murugan Temple',
    'Temple Gopuram',
    'Bay of Bengal',
    'Nazhi Kinaru',
    'Seashore View',
    'Temple Festivals',
    'Beach'
  ],

  history:
    'Thiruchendur is traditionally associated with Lord Murugan defeating the demon Surapadman and is one of the six sacred abodes of Murugan.',

  lat: 8.4970,
  lng: 78.1190,

  image:
    'https://c9admin.cottage9.com/uploads/5017/thiruchendur-murugan-temple-a-historical-overview.jpg',

  transport: {
    bus: {
      available: 'Regular buses from Thoothukudi, Tirunelveli and Madurai',
      station: 'Thiruchendur Bus Stand',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchendur Railway Station',
      distance: '1 km',
      frequency: 'Regular passenger train services'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Tourist Cabs'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchendur',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    police: [
      {
        name: 'Thiruchendur Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5–1 km',
        location: 'Thiruchendur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thiruchendur',
      price: '₹1,500–₹5,000/night',
      rating: 4.3,
      dist: '0.5–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thiruchendur Local Restaurants',
      foodType: 'South Indian Vegetarian & Seafood',
      price: '₹400 for two',
      rating: 4.3,
      dist: '0.5–2 km',
      address: 'Thiruchendur'
    }
  ]
},

{
  id: 'tn_kayalpattinam_beach',
  name: 'Kayalpattinam Beach',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',

  rating: 4.4,
  ratingCount: 3200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Peaceful coastal destination known for its sandy shoreline, fishing culture and beautiful Bay of Bengal views.',

  longDesc:
    'Kayalpattinam is a historic coastal town in Thoothukudi district. Its beach provides a peaceful environment for visitors interested in coastal sightseeing, photography, beach walks and experiencing the traditional fishing-town atmosphere.',

  attractions: [
    'Kayalpattinam Beach',
    'Bay of Bengal',
    'Fishing Village',
    'Coastal Views',
    'Beach Walks',
    'Sunrise Views'
  ],

  history:
    'Kayalpattinam is an old coastal settlement with a long history of maritime trade and cultural exchange across the Indian Ocean.',

  lat: 8.5700,
  lng: 78.1200,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqc6htP4yiigb_Ws91Rn9u_kAAWesttxGyXYuXU1LFkbH8W20hY-TvIw0p&s=10',

  transport: {
    bus: {
      available: 'Regular buses from Thiruchendur and Thoothukudi',
      station: 'Kayalpattinam Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Kayalpattinam Railway Station',
      distance: '2 km',
      frequency: 'Local train services available'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Local Buses'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thiruchendur',
        distance: '8 km',
        phone: 'Verify current number locally',
        address: 'Thiruchendur'
      }
    ],

    police: [
      {
        name: 'Kayalpattinam Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Kayalpattinam'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Kayalpattinam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thiruchendur',
      price: '₹1,500–₹4,000/night',
      rating: 4.1,
      dist: '8–12 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Kayalpattinam Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹450 for two',
      rating: 4.2,
      dist: '1–2 km',
      address: 'Kayalpattinam'
    }
  ]
},

{
  id: 'tn_kazhugumalai',
  name: 'Kazhugumalai Jain Sculptures & Vettuvan Koil',
  district: 'Thoothukudi',
  category: 'historical',
  categoryName: 'Historical & Archaeological Places',

  rating: 4.7,
  ratingCount: 4100,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Historic hill destination famous for Vettuvan Koil, ancient Jain sculptures and remarkable rock-cut architecture.',

  longDesc:
    'Kazhugumalai is an important historical and archaeological destination in Thoothukudi district. The site is known for Vettuvan Koil, ancient Jain sculptures and inscriptions carved into the rocky landscape.',

  attractions: [
    'Vettuvan Koil',
    'Jain Sculptures',
    'Rock-Cut Architecture',
    'Ancient Inscriptions',
    'Kazhugumalai Hill',
    'Historical Photography'
  ],

  history:
    'Kazhugumalai contains important rock-cut monuments and Jain sculptures dating to the medieval period and provides evidence of the region’s religious and artistic heritage.',

  lat: 9.1470,
  lng: 77.7050,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9e4z4ri3-L_F9eLRRyiPnBdzWt7EMSXfjYNr5BrOCTA&s=10',

  transport: {
    bus: {
      available: 'Buses from Kovilpatti and nearby towns',
      station: 'Kazhugumalai Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Kovilpatti Railway Station',
      distance: '20 km',
      frequency: 'Regular trains and buses available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Kovilpatti',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Kovilpatti'
      }
    ],

    police: [
      {
        name: 'Kazhugumalai Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Kazhugumalai'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1–2 km',
        location: 'Kazhugumalai'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Kovilpatti',
      price: '₹1,200–₹3,500/night',
      rating: 4.0,
      dist: '20–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Kazhugumalai Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '1–2 km',
      address: 'Kazhugumalai'
    }
  ]
},

{
  id: 'tn_mannar_marine_biosphere',
  name: 'Gulf of Mannar Marine Biosphere Reserve',
  district: 'Thoothukudi',
  category: 'wildlife',
  categoryName: 'Marine Wildlife & Nature',

  rating: 4.6,
  ratingCount: 3800,

  entryFee: 'Activity / Boat charges may apply',
  openTime: '06:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',

  shortDesc:
    'Rich marine ecosystem featuring coral reefs, seagrass, coastal islands and diverse marine wildlife.',

  longDesc:
    'The Gulf of Mannar Marine Biosphere Reserve is one of India’s important marine ecosystems. The region contains coral reefs, seagrass beds, mangroves, islands and diverse marine species. Coastal areas around Thoothukudi provide opportunities to learn about marine biodiversity and conservation.',

  attractions: [
    'Coral Reefs',
    'Marine Wildlife',
    'Coastal Islands',
    'Seagrass Beds',
    'Mangroves',
    'Marine Conservation',
    'Boat Experiences'
  ],

  history:
    'The Gulf of Mannar region was recognized for its exceptional marine biodiversity and established as a protected biosphere reserve.',

  lat: 8.8050,
  lng: 78.1500,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcOP_FU_4WnWezQ_WV_Q3ShBXU3Os735KxyYymyhYtg&s=100',

  transport: {
    bus: {
      available: 'Buses from Thoothukudi and coastal towns',
      station: 'Thoothukudi Bus Stand',
      distance: '5–20 km depending on access point'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '5–20 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis and Authorized Boat Operators'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Medical College Hospital Thoothukudi',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    police: [
      {
        name: 'Coastal Police Station',
        distance: '5–15 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi Coast'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '5–10 km',
        location: 'Thoothukudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '5–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thoothukudi Coastal Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹600 for two',
      rating: 4.3,
      dist: '5–10 km',
      address: 'Thoothukudi'
    }
  ]
},

{
  id: 'tn_tuticorin_harbour_beach',
  name: 'Thoothukudi Beach & Harbour',
  district: 'Thoothukudi',
  category: 'beaches',
  categoryName: 'Beaches & Coastal Attractions',

  rating: 4.3,
  ratingCount: 2900,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '07:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Coastal destination showcasing the maritime character of Thoothukudi with sea views, harbour surroundings and evening atmosphere.',

  longDesc:
    'Thoothukudi is a historic port city on the Gulf of Mannar. Its coastal areas provide visitors with views of the sea, harbour environment and the city’s long maritime heritage. The destination is suitable for coastal sightseeing and photography.',

  attractions: [
    'Thoothukudi Coast',
    'Harbour Views',
    'Sea View',
    'Maritime Heritage',
    'Sunset Views',
    'Photography'
  ],

  history:
    'Thoothukudi has been an important maritime and pearl-fishing centre for centuries and developed into a major port city in southern Tamil Nadu.',

  lat: 8.8050,
  lng: 78.1450,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaqYVxV__7qgV45VNgL7Z83YsOeWbNrRxIRt0A8LPfQ&s=10',

  transport: {
    bus: {
      available: 'City and intercity buses',
      station: 'Thoothukudi New Bus Stand',
      distance: '3 km'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '3 km',
      frequency: 'Regular train services'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis, Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Medical College Hospital Thoothukudi',
        distance: '5 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    police: [
      {
        name: 'Thoothukudi Town Police Station',
        distance: '3 km',
        phone: 'Verify current number locally',
        address: 'Thoothukudi'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '1–3 km',
        location: 'Thoothukudi'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Thoothukudi Restaurants',
      foodType: 'Seafood & South Indian',
      price: '₹500 for two',
      rating: 4.3,
      dist: '1–3 km',
      address: 'Thoothukudi'
    }
  ]
},

{
  id: 'tn_panchalankurichi',
  name: 'Panchalankurichi Kattabomman Memorial Fort',
  district: 'Thoothukudi',
  category: 'historical',
  categoryName: 'Historical & Freedom Heritage',

  rating: 4.7,
  ratingCount: 3400,

  entryFee: 'Check locally',
  openTime: '09:00 AM',
  closeTime: '05:30 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Historic memorial associated with freedom fighter Veerapandiya Kattabomman and the Polygar resistance against British rule.',

  longDesc:
    'Panchalankurichi is historically associated with Veerapandiya Kattabomman, one of the prominent leaders who resisted British authority in the late 18th century. The memorial complex preserves the memory of Kattabomman and the historical events connected with Panchalankurichi.',

  attractions: [
    'Kattabomman Memorial',
    'Historic Fort Site',
    'Freedom Struggle Exhibits',
    'Statues',
    'Historical Displays',
    'Cultural Heritage'
  ],

  history:
    'Panchalankurichi was the stronghold of Veerapandiya Kattabomman, who fought against the British East India Company during the Polygar Wars.',

  lat: 8.9350,
  lng: 78.0200,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LYEgM3un4bzAqlJe1_5wFF1aSP-MmrG2l6xrF8oEgQ&s=10',

  transport: {
    bus: {
      available: 'Buses from Thoothukudi, Tirunelveli and nearby towns',
      station: 'Panchalankurichi Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Thoothukudi Railway Station',
      distance: '35 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Local Buses'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ottapidaram',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Ottapidaram'
      }
    ],

    police: [
      {
        name: 'Ottapidaram Police Station',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Ottapidaram'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '5–10 km',
        location: 'Ottapidaram / Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Thoothukudi',
      price: '₹1,500–₹5,000/night',
      rating: 4.1,
      dist: '30–40 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Panchalankurichi / Ottapidaram'
    }
  ]
},
{
  id: 'tn_mukkombu_upper_anaicut',
  name: 'Mukkombu (Upper Anaicut)',
  district: 'Tiruchirappalli',
  category: 'parks',
  categoryName: 'Parks & Recreational Places',

  rating: 3.9,
  ratingCount: 31,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic riverside recreational destination where the Cauvery divides into two branches, surrounded by greenery and water landscapes.',

  longDesc:
    'Mukkombu, also known as Upper Anaicut, is a popular recreational destination near Tiruchirappalli. It is located on the Cauvery River where the river divides into two branches. The area is known for its gardens, water channels, greenery and peaceful surroundings. It is suitable for family outings, photography, nature walks and relaxation.',

  attractions: [
    'Cauvery River',
    'Upper Anaicut',
    'River Channels',
    'Gardens',
    'Children’s Recreation Area',
    'Green Landscape',
    'Photography',
    'Family Picnic'
  ],

  history:
    'Mukkombu is an important water-management structure on the Cauvery system. The name refers to the three branching waterways in the region. The location has developed into a popular recreational spot because of its river environment and gardens.',

  lat: 10.8520,
  lng: 78.7100,

  image:
    'https://touristplacestamilnadu.com/images/history/mukkombu-upper-anaicut.webp',

  transport: {
    bus: {
      available: 'Buses available from Tiruchirappalli and Karur routes',
      station: 'Mukkombu Bus Stop',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: 'Approximately 18 km',
      frequency: 'Frequent trains available'
    },

    taxi: {
      options:
        'Taxis and Auto Rickshaws available from Tiruchirappalli'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruchirappalli',
        distance: 'Approximately 18 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Jeeyapuram Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Jeeyapuram, Tiruchirappalli District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Jeeyapuram / Tiruchirappalli'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: 'Varies',
      rating: null,
      dist: '15–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruchirappalli',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '15–20 km',
      address: 'Tiruchirappalli'
    }
  ]
},
{
  id: 'tn_srirangam_ranganathaswamy',
  name: 'Sri Ranganathaswamy Temple, Srirangam',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.9,
  ratingCount: 18500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'November to February',

  shortDesc:
    'Magnificent island temple dedicated to Lord Ranganatha, famous for its massive gopurams, temple corridors and rich Vaishnavite heritage.',

  longDesc:
    'Sri Ranganathaswamy Temple at Srirangam is one of the most important Vaishnavite temples in India. Located on the island between the Cauvery and Kollidam rivers, the vast temple complex is known for its numerous concentric enclosures, magnificent gopurams, detailed sculptures and strong cultural and religious traditions.',

  attractions: [
    'Rajagopuram',
    'Temple Corridors',
    'Thousand Pillar Hall',
    'Golden Vimanam',
    'Temple Towers',
    'Cauvery River',
    'Ancient Sculptures',
    'Temple Festivals'
  ],

  history:
    'The temple has a long history with major contributions from the Cholas, Pandyas, Hoysalas, Vijayanagara rulers and Nayaks.',

  lat: 10.8624,
  lng: 78.6950,

  image:
    'https://www.trichyproperty.in/wp-content/uploads/2026/06/Srirangam.jpeg',

  transport: {
    bus: {
      available: 'Frequent buses from Tiruchirappalli city',
      station: 'Srirangam Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Srirangam Railway Station',
      distance: '2 km',
      frequency: 'Regular passenger and express trains'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis, Rental Cars and Local Transport'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Srirangam',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Srirangam, Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Srirangam Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Srirangam'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5–1 km',
        location: 'Srirangam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Srirangam',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Srirangam Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹400 for two',
      rating: 4.3,
      dist: '0.5–2 km',
      address: 'Srirangam'
    }
  ]
},

{
  id: 'tn_rockfort_temple',
  name: 'Rockfort Ucchi Pillayar Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Hill Attractions',

  rating: 4.8,
  ratingCount: 12500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Historic hilltop temple dedicated to Lord Ganesha offering panoramic views of Tiruchirappalli city and the Cauvery region.',

  longDesc:
    'Rockfort Ucchi Pillayar Temple is located on top of the historic Rockfort hill in central Tiruchirappalli. Visitors climb a series of rock-cut steps to reach the temple and enjoy spectacular views of the city, Cauvery River and surrounding areas.',

  attractions: [
    'Ucchi Pillayar Temple',
    'Thayumanaswamy Temple',
    'Rock-Cut Steps',
    'Historic Rock Fort',
    'City Viewpoint',
    'Cauvery River View'
  ],

  history:
    'The Rockfort hill has a long historical association with the Pallavas, Cholas, Nayaks and other South Indian rulers.',

  lat: 10.8261,
  lng: 78.6957,

  image:
    'https://miro.medium.com/v2/resize:fit:1400/1*K8-_TBOcrIgNfpFZk9SPdQ.jpeg',

  transport: {
    bus: {
      available: 'City buses from all major parts of Tiruchirappalli',
      station: 'Rockfort Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '5 km',
      frequency: 'Frequent trains from major cities'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '4 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Fort Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '0.5 km',
        location: 'Rockfort Area'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Central Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '2–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Rockfort Local Restaurants',
      foodType: 'South Indian & Vegetarian',
      price: '₹400 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Rockfort, Tiruchirappalli'
    }
  ]
},

{
  id: 'tn_samayapuram_mariamman',
  name: 'Samayapuram Mariamman Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.8,
  ratingCount: 9800,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Famous Mariamman temple and major pilgrimage centre located near Tiruchirappalli.',

  longDesc:
    'Samayapuram Mariamman Temple is one of the most popular Amman temples in Tamil Nadu. Dedicated to Goddess Mariamman, the temple attracts large numbers of devotees throughout the year and is particularly busy during major festivals.',

  attractions: [
    'Mariamman Shrine',
    'Temple Gopuram',
    'Temple Festivals',
    'Traditional Rituals',
    'Devotional Activities'
  ],

  history:
    'The temple has a long-standing tradition of worship dedicated to Goddess Mariamman and is an important pilgrimage centre in the region.',

  lat: 10.9480,
  lng: 78.7510,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWcgAZGL9cTFvmoQrVaTHk1N05lMlRAIkbqh848sG1zrPD9jtiyXIeUw&s=10',

  transport: {
    bus: {
      available: 'Frequent buses from Tiruchirappalli and nearby towns',
      station: 'Samayapuram Bus Stand',
      distance: '0.5 km'
    },

    train: {
      station: 'Samayapuram Railway Station',
      distance: '2 km',
      frequency: 'Local trains and buses available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Tourist Vehicles'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Samayapuram',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Samayapuram'
      }
    ],

    police: [
      {
        name: 'Samayapuram Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Samayapuram'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Samayapuram'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels around Samayapuram',
      price: '₹1,200–₹4,000/night',
      rating: 4.1,
      dist: '1–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Samayapuram Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '0.5–2 km',
      address: 'Samayapuram'
    }
  ]
},

{
  id: 'tn_kallanai_grand_anaicut',
  name: 'Kallanai Grand Anaicut',
  district: 'Tiruchirappalli',
  category: 'historical',
  categoryName: 'Historical & Engineering Attractions',

  rating: 4.7,
  ratingCount: 8700,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Ancient Chola-era dam across the Cauvery River and one of the world’s oldest water-diversion structures still in use.',

  longDesc:
    'Kallanai, also known as the Grand Anaicut, is an ancient stone barrage constructed across the Cauvery River. The structure is associated with Chola King Karikala Chola and continues to demonstrate the engineering achievements of ancient Tamil civilization.',

  attractions: [
    'Ancient Stone Dam',
    'Cauvery River',
    'River View',
    'Chola Engineering',
    'Green Landscape',
    'Photography'
  ],

  history:
    'Kallanai was built during the Chola period, traditionally attributed to Karikala Chola, and has been maintained and modified over centuries.',

  lat: 10.8390,
  lng: 78.8550,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-HMmNdnri_R8ZVlUrucVtKMyNTQ_1yP0cThTKtIF0w&s=10',

  transport: {
    bus: {
      available: 'Buses from Tiruchirappalli and Thanjavur routes',
      station: 'Kallanai Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '20 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Auto Rickshaws'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '5–10 km',
        phone: 'Verify current number locally',
        address: 'Kallanai Area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '5–10 km',
        location: 'Nearby Towns'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '15–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '5–10 km',
      address: 'Kallanai Area'
    }
  ]
},

{
  id: 'tn_vayalur_murugan',
  name: 'Vayalur Murugan Temple',
  district: 'Tiruchirappalli',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.6,
  ratingCount: 4200,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Peaceful Murugan temple surrounded by greenery and traditional village landscapes near Tiruchirappalli.',

  longDesc:
    'Vayalur Murugan Temple is an important Murugan shrine near Tiruchirappalli. The temple is known for its spiritual atmosphere, traditional architecture and association with the devotional traditions of the region.',

  attractions: [
    'Murugan Shrine',
    'Temple Architecture',
    'Temple Tank',
    'Traditional Festivals',
    'Green Surroundings'
  ],

  history:
    'The temple has a long association with Tamil Murugan worship and regional devotional traditions.',

  lat: 10.7790,
  lng: 78.6370,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSy5oJhBvosSzgsHFPGPBQsRl5_4gqKBIvKjJFuXwaGQ&s=10',

  transport: {
    bus: {
      available: 'Local buses from Tiruchirappalli',
      station: 'Vayalur Bus Stop',
      distance: '0.5 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '10 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruchirappalli',
        distance: '10 km',
        phone: 'Verify current number locally',
        address: 'Tiruchirappalli'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '5 km',
        phone: 'Verify current number locally',
        address: 'Vayalur Area'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '3–5 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruchirappalli',
      price: '₹1,500–₹5,000/night',
      rating: 4.2,
      dist: '8–12 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Vegetarian Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '3–5 km',
      address: 'Vayalur'
    }
  ]
},

{
  id: 'tn_puliyancholai',
  name: 'Puliyancholai Waterfalls',
  district: 'Tiruchirappalli',
  category: 'waterfalls',
  categoryName: 'Waterfalls & Nature',

  rating: 4.5,
  ratingCount: 5100,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'June to January',

  shortDesc:
    'Natural forest destination at the foothills of the Kolli Hills known for streams, waterfalls and lush greenery.',

  longDesc:
    'Puliyancholai is a scenic natural destination near the foothills of the Kolli Hills. The area is known for its streams, seasonal waterfalls, forest landscapes and peaceful surroundings. It is suitable for nature lovers, photography and short outdoor trips.',

  attractions: [
    'Waterfalls',
    'Forest Streams',
    'Kolli Hills Foothills',
    'Nature Walks',
    'Green Landscape',
    'Photography'
  ],

  history:
    'Puliyancholai is part of the forested landscape around the foothills of the Kolli Hills and has traditionally been known for its natural streams and greenery.',

  lat: 11.0840,
  lng: 78.4200,

  image:
    'https://ramyashotels.com/wp-content/uploads/2021/06/puliyancholai-falls-trichy-best-view.jpg',

  transport: {
    bus: {
      available: 'Local buses from Thuraiyur and nearby towns',
      station: 'Puliyancholai Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Tiruchirappalli Junction',
      distance: '50 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Tourist Taxis, Jeeps and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Thuraiyur',
        distance: '25 km',
        phone: 'Verify current number locally',
        address: 'Thuraiyur'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '10–20 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '10–20 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels around Thuraiyur',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '20–30 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '10–20 km',
      address: 'Nearby Town'
    }
  ]
},
{
  id: 'tn_yelagiri_hills',
  name: 'Yelagiri Hills',
  district: 'Tirupathur',
  category: 'hill_stations',
  categoryName: 'Hill Stations',

  rating: 4.3,
  ratingCount: 8537,

  entryFee: 'No general entry fee; activity charges may apply',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A scenic hill station in the Eastern Ghats known for its greenery, lake, parks, viewpoints and outdoor activities.',

  longDesc:
    'Yelagiri Hills is one of the popular hill stations of Tamil Nadu and is located in Tirupathur district. The hill region is situated at an elevation of around 1,200 metres and consists of four major hills. Attractions include Punganoor Lake and Park, Nature Park, Jalagamparai Waterfalls, Swamimalai Hills, telescope facilities and boating. The destination is suitable for families, nature lovers, photography and adventure activities.',

  attractions: [
    'Punganoor Lake',
    'Nature Park',
    'Jalagamparai Waterfalls',
    'Swamimalai Hills',
    'Nilavoor Lake',
    'Boating',
    'Viewpoints',
    'Trekking',
    'Telescope Observatory'
  ],

  history:
    'Yelagiri is a hill region of the Eastern Ghats and has developed as a popular hill station. Its combination of forests, viewpoints, lakes, waterfalls and outdoor activities has made it an important tourism destination in Tirupathur district.',

  lat: 12.5800,
  lng: 78.6300,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl7eGc0E999i9RlbE78U8ADjtzFxHiuppG9Djk17WWQ&s=10',

  transport: {
    bus: {
      available: 'Frequent buses available from Tirupathur',
      station: 'Yelagiri Bus Stand',
      distance: 'Near major tourist areas'
    },

    train: {
      station: 'Jolarpettai Junction',
      distance: 'Approximately 20 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local buses available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tirupathur',
        distance: 'Approximately 30 km',
        phone: 'Verify current number locally',
        address: 'Tirupathur, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Yelagiri Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Yelagiri, Tirupathur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Yelagiri',
        location: 'Yelagiri Hills'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels and Resorts in Yelagiri',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Yelagiri',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      address: 'Yelagiri Hills'
    }
  ]
},
{
  id: 'tn_amaravathi_crocodile_farm',
  name: 'Amaravathi Crocodile Farm',
  district: 'Tiruppur',
  category: 'wildlife',
  categoryName: 'Wildlife & Animal Attractions',

  rating: 3.9,
  ratingCount: 1576,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Check locally',
  bestTime: 'October to March',

  shortDesc:
    'A wildlife attraction near Amaravathi Reservoir known for crocodile conservation and its natural reservoir environment.',

  longDesc:
    'Amaravathi Crocodile Farm is located near Amaravathi Reservoir in Tiruppur district. The reservoir and surrounding river system support a significant population of crocodiles. The crocodile farm provides visitors with an opportunity to observe these reptiles and learn about their habitat and conservation. The surrounding Amaravathi Dam and Western Ghats landscape make the area attractive for wildlife and nature tourism.',

  attractions: [
    'Crocodile Farm',
    'Crocodile Observation',
    'Amaravathi Reservoir',
    'Amaravathi Dam',
    'Western Ghats Landscape',
    'Wildlife Photography',
    'Nature Observation'
  ],

  history:
    'The Amaravathi reservoir and its river system provide a suitable habitat for mugger crocodiles. The crocodile farm was developed as a wildlife attraction and conservation-related facility in the Amaravathi area.',

  lat: 10.4500,
  lng: 77.2700,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7F69MXuHinOCZyGakoUsF8yXTflLx0ym8cZQaetNoQ&s=10',

  transport: {
    bus: {
      available: 'Buses available from Udumalpet and nearby towns',
      station: 'Amaravathinagar Bus Stop',
      distance: 'Near tourist area'
    },

    train: {
      station: 'Udumalpet Railway Station',
      distance: 'Approximately 25 km',
      frequency: 'Limited services; verify current schedule'
    },

    taxi: {
      options:
        'Taxis and local buses available from Udumalpet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Udumalpet',
        distance: 'Approximately 25 km',
        phone: 'Verify current number locally',
        address: 'Udumalpet, Tiruppur District'
      }
    ],

    police: [
      {
        name: 'Amaravathi Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Amaravathinagar, Tiruppur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Amaravathinagar / Udumalpet',
        location: 'Amaravathinagar'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Udumalpet',
      price: 'Varies',
      rating: null,
      dist: '20–25 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Udumalpet',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '20–25 km',
      address: 'Udumalpet, Tiruppur District'
    }
  ]
},
{
  id: 'tn_pulicat_lake',
  name: 'Pulicat Lake',
  district: 'Tiruvallur',
  category: 'lakes',
  categoryName: 'Lakes & Wetlands',

  rating: 4.4,
  ratingCount: 1398,

  entryFee: 'Free for lake viewing; activity charges may apply',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'A large brackish-water lagoon famous for migratory birds, flamingos, boating, fishing villages and scenic coastal landscapes.',

  longDesc:
    'Pulicat Lake is a major coastal lagoon located in Tiruvallur district along the Bay of Bengal. The lake is separated from the sea by Sriharikota and supports a rich wetland ecosystem. During the migratory season, large numbers of birds including flamingos visit the area. Pulicat is also known for its lighthouse, fishing communities, boating and traditional palm-leaf handicrafts.',

  attractions: [
    'Pulicat Lake',
    'Flamingo Bird Watching',
    'Pulicat Bird Sanctuary',
    'Pulicat Lighthouse',
    'Boating',
    'Fishing Villages',
    'Backwaters',
    'Palm-leaf Handicrafts',
    'Coastal Scenery'
  ],

  history:
    'Pulicat has a long coastal trading history and was an important Dutch settlement. The Dutch established a fort at Pulicat in 1609. Today the area is better known as an ecotourism destination because of its lake, birdlife, lighthouse and coastal environment.',

  lat: 13.4140,
  lng: 80.3160,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtob61ccW6F-vxcgaohMMLVHpDcNfDCJyW9or6P3eGw&s=10',

  transport: {
    bus: {
      available: 'Frequent buses available from Chennai and nearby towns',
      station: 'Pulicat Bus Stop',
      distance: 'Near lake area'
    },

    train: {
      station: 'Ponneri Railway Station',
      distance: 'Approximately 20 km',
      frequency: 'Frequent local trains from Chennai Central'
    },

    taxi: {
      options:
        'Taxis and local transport available from Chennai / Ponneri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Ponneri',
        distance: 'Approximately 20 km',
        phone: 'Verify current number locally',
        address: 'Ponneri, Tiruvallur District'
      }
    ],

    police: [
      {
        name: 'Pulicat Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Pulicat, Tiruvallur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in Pulicat',
        location: 'Pulicat Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Accommodation near Pulicat / Ponneri',
      price: 'Varies',
      rating: null,
      dist: '5–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Pulicat',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: 'Nearby',
      address: 'Pulicat, Tiruvallur District'
    }
  ]
},
{
  id: 'tn_poondi_reservoir',
  name: 'Poondi Reservoir',
  district: 'Tiruvallur',
  category: 'lakes',
  categoryName: 'Lakes & Nature',

  rating: 4.4,
  ratingCount: 3200,

  entryFee: 'Free / Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'Scenic reservoir surrounded by greenery and countryside landscapes, popular for peaceful nature visits and photography.',

  longDesc:
    'Poondi Reservoir is an important water reservoir near Tiruvallur. The large water body and surrounding greenery provide a peaceful environment away from the city. It is suitable for nature lovers, photography and short family outings.',

  attractions: [
    'Poondi Reservoir',
    'Water Views',
    'Green Landscape',
    'Nature Photography',
    'Bird Watching',
    'Sunset Views'
  ],

  history:
    'Poondi Reservoir was developed as an important water-storage facility for supplying drinking water to Chennai and surrounding areas.',

  lat: 13.2040,
  lng: 79.9060,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE8KOPow2bBOq836b17bUwMQThWHUxzYvAvQim5Lfdg&s=10',

  transport: {
    bus: {
      available: 'Buses available from Tiruvallur and Chennai',
      station: 'Poondi Bus Stop',
      distance: 'Near reservoir'
    },

    train: {
      station: 'Tiruvallur Railway Station',
      distance: 'Approximately 15 km',
      frequency: 'Frequent suburban trains from Chennai'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruvallur',
        distance: 'Approximately 15 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    police: [
      {
        name: 'Poondi Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Poondi, Tiruvallur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Poondi / Tiruvallur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvallur',
      price: 'Varies',
      rating: null,
      dist: '15–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruvallur',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '15 km',
      address: 'Tiruvallur'
    }
  ]
},

{
  id: 'tn_veeraraghava_perumal_temple',
  name: 'Sri Veeraraghava Perumal Temple, Tiruvallur',
  district: 'Tiruvallur',
  category: 'temples',
  categoryName: 'Temples & Spiritual Places',

  rating: 4.8,
  ratingCount: 6800,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Ancient Vaishnavite temple dedicated to Lord Veeraraghava Perumal and an important pilgrimage centre near Chennai.',

  longDesc:
    'Sri Veeraraghava Perumal Temple is a historic temple in Tiruvallur and one of the important Divya Desams associated with Vaishnavism. The temple is known for its traditional architecture, religious festivals and sacred temple tank.',

  attractions: [
    'Veeraraghava Perumal Shrine',
    'Temple Gopuram',
    'Temple Tank',
    'Traditional Architecture',
    'Religious Festivals',
    'Temple Sculptures'
  ],

  history:
    'The temple has a long history associated with the Sri Vaishnavite tradition and is traditionally counted among the Divya Desams.',

  lat: 13.1420,
  lng: 79.9070,

  image:
    'https://data.trusteddonations.com/files/unnamed53b1c2.jpg',

  transport: {
    bus: {
      available: 'Frequent buses from Chennai and nearby towns',
      station: 'Tiruvallur Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Tiruvallur Railway Station',
      distance: '1 km',
      frequency: 'Frequent suburban and express trains'
    },

    taxi: {
      options:
        'Auto Rickshaws, Taxis and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruvallur',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    police: [
      {
        name: 'Tiruvallur Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruvallur'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Tiruvallur'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvallur',
      price: '₹1,200–₹4,000/night',
      rating: 4.1,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Tiruvallur Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Tiruvallur'
    }
  ]
},

{
  id: 'tn_thiruttani_murugan',
  name: 'Thiruthani Murugan Temple',
  district: 'Tiruvallur',
  category: 'temples',
  categoryName: 'Temples & Hill Attractions',

  rating: 4.9,
  ratingCount: 14500,

  entryFee: 'Free',
  openTime: '06:00 AM',
  closeTime: '09:00 PM',
  holiday: 'None',
  bestTime: 'Throughout the year',

  shortDesc:
    'Famous hilltop temple dedicated to Lord Murugan and one of the six sacred Arupadai Veedu temples.',

  longDesc:
    'Thiruthani Murugan Temple is situated on Thiruthani Hill and is one of the six major sacred abodes of Lord Murugan. Visitors climb the hill to reach the temple and can enjoy panoramic views of the surrounding countryside.',

  attractions: [
    'Murugan Temple',
    'Thiruthani Hill',
    'Temple Gopuram',
    'Hilltop Views',
    'Temple Festivals',
    'Sacred Steps'
  ],

  history:
    'Thiruthani is traditionally recognized as one of the six sacred abodes of Lord Murugan and has an important place in Tamil religious heritage.',

  lat: 13.1750,
  lng: 79.6150,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS81JsWvjDBLavTxTr2-0N7qorjynb7JyMLvWrOsb8EOA&s=10',

  transport: {
    bus: {
      available: 'Buses from Chennai, Tiruvallur and nearby towns',
      station: 'Thiruthani Bus Stand',
      distance: '1 km'
    },

    train: {
      station: 'Tiruttani Railway Station',
      distance: '1.5 km',
      frequency: 'Regular suburban and express trains'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and Rental Cars'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Tiruttani',
        distance: '2 km',
        phone: 'Verify current number locally',
        address: 'Tiruttani'
      }
    ],

    police: [
      {
        name: 'Tiruttani Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Tiruttani'
      }
    ],

    pharmacies: [
      {
        name: 'Local Pharmacies',
        distance: '0.5–1 km',
        location: 'Tiruttani'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruttani',
      price: '₹1,200–₹4,000/night',
      rating: 4.2,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Tiruttani Local Restaurants',
      foodType: 'South Indian Vegetarian',
      price: '₹350 for two',
      rating: 4.2,
      dist: '0.5–2 km',
      address: 'Tiruttani'
    }
  ]
},

{
  id: 'tn_bird_sanctuary_pulicat',
  name: 'Pulicat Bird Sanctuary',
  district: 'Tiruvallur',
  category: 'wildlife',
  categoryName: 'Wildlife & Bird Watching',

  rating: 4.6,
  ratingCount: 5200,

  entryFee: 'Check locally',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to March',

  shortDesc:
    'Important wetland bird habitat famous for flamingos and large numbers of migratory birds during winter.',

  longDesc:
    'The Pulicat Bird Sanctuary covers the wetland ecosystem around Pulicat Lake. During the migratory season, flamingos and many other species of waterbirds can be seen around the lagoon and surrounding wetlands.',

  attractions: [
    'Flamingos',
    'Migratory Birds',
    'Wetland Ecosystem',
    'Pulicat Lake',
    'Bird Watching',
    'Photography'
  ],

  history:
    'The Pulicat wetland ecosystem is recognized for its importance to migratory and resident bird populations along the southeastern coast of India.',

  lat: 13.4100,
  lng: 80.3200,

  image:
    'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1000&q=80',

  transport: {
    bus: {
      available: 'Buses from Chennai and Ponneri',
      station: 'Pulicat Bus Stop',
      distance: '1 km'
    },

    train: {
      station: 'Ponneri Railway Station',
      distance: '20 km',
      frequency: 'Frequent suburban trains'
    },

    taxi: {
      options:
        'Taxis and Local Transport from Ponneri'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Ponneri',
        distance: '20 km',
        phone: 'Verify current number locally',
        address: 'Ponneri'
      }
    ],

    police: [
      {
        name: 'Pulicat Police Station',
        distance: '1 km',
        phone: 'Verify current number locally',
        address: 'Pulicat'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '1 km',
        location: 'Pulicat'
      }
    ]
  },

  hotels: [
    {
      name: 'Accommodation near Pulicat',
      price: 'Varies',
      rating: null,
      dist: '5–20 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Pulicat Local Restaurants',
      foodType: 'Seafood & South Indian',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      address: 'Pulicat'
    }
  ]
},

{
  id: 'tn_amirthi_zoo_tiruvallur',
  name: 'Amirthi Zoological Park',
  district: 'Tiruvallur',
  category: 'wildlife',
  categoryName: 'Wildlife & Nature',

  rating: 4.2,
  ratingCount: 2800,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '05:30 PM',
  holiday: 'Tuesday',
  bestTime: 'October to February',

  shortDesc:
    'Forest-based recreational and wildlife destination with greenery, small waterfalls and nature trails.',

  longDesc:
    'Amirthi Zoological Park is a forest-oriented recreational destination known for its natural surroundings, wildlife enclosures, walking trails and seasonal waterfall. It is suitable for families and visitors interested in nature and outdoor activities.',

  attractions: [
    'Wildlife Enclosures',
    'Forest Trails',
    'Waterfall',
    'Nature Walks',
    'Green Landscape',
    'Photography'
  ],

  history:
    'The park was developed as a forest and wildlife recreation area to promote awareness of local flora and fauna.',

  lat: 12.7000,
  lng: 79.2500,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTePoEWQfQLl9ZqljHWVYQP33BaiwiJxI3Ux8QTozUraA&s=10',

  transport: {
    bus: {
      available: 'Local buses from nearby towns',
      station: 'Nearest Local Bus Stop',
      distance: '1–3 km'
    },

    train: {
      station: 'Nearest Railway Station',
      distance: '20–30 km',
      frequency: 'Road transport required'
    },

    taxi: {
      options:
        'Taxis, Rental Cars and Local Transport'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital',
        distance: '15–25 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    police: [
      {
        name: 'Local Police Station',
        distance: '10–20 km',
        phone: 'Verify current number locally',
        address: 'Nearby Town'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: '10–20 km',
        location: 'Nearby Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Nearby Towns',
      price: '₹1,500–₹4,000/night',
      rating: 4.0,
      dist: '15–30 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.0,
      dist: '10–20 km',
      address: 'Nearby Town'
    }
  ]
},
{
  id: 'tn_sathanur_dam',
  name: 'Sathanur Dam',
  district: 'Tiruvannamalai',
  category: 'dams',
  categoryName: 'Dams & Reservoirs',

  rating: 4.3,
  ratingCount:1635,

  entryFee: 'Check locally',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'October to February',

  shortDesc:
    'A major reservoir and scenic recreational destination surrounded by hills, gardens and the natural landscape of the South Pennar basin.',

  longDesc:
    'Sathanur Dam is one of the major dams of Tamil Nadu and is located in Tiruvannamalai district. The dam is constructed across the South Pennar River and forms a large reservoir. The surrounding area includes gardens and recreational spaces and provides scenic views of the reservoir and nearby hills. It is suitable for family outings, nature photography and sightseeing.',

  attractions: [
    'Sathanur Dam',
    'Sathanur Reservoir',
    'South Pennar River',
    'Dam Gardens',
    'Scenic Viewpoints',
    'Children’s Recreation Area',
    'Nature Photography',
    'Reservoir Landscape'
  ],

  history:
    'Sathanur Dam was constructed across the South Pennar River as an important irrigation and water-management project. Over time, the reservoir and surrounding recreational facilities have developed into a tourist attraction.',

  lat: 12.2400,
  lng: 78.8900,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTym0If6bmbCdy3y8cQ0XM0ta7RlnPDWA73HJm9f2WZJw&s=10',

  transport: {
    bus: {
      available: 'Buses available from Tiruvannamalai and nearby towns',
      station: 'Sathanur Bus Stop',
      distance: 'Near dam'
    },

    train: {
      station: 'Tiruvannamalai Railway Station',
      distance: 'Approximately 30–35 km',
      frequency: 'Regular train services available'
    },

    taxi: {
      options:
        'Taxis and local buses available from Tiruvannamalai'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Tiruvannamalai',
        distance: 'Approximately 30 km',
        phone: 'Verify current number locally',
        address: 'Tiruvannamalai, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Sathanur Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Sathanur, Tiruvannamalai District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Available in nearby towns',
        location: 'Sathanur / Chengam'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Tiruvannamalai',
      price: 'Varies',
      rating: null,
      dist: '30–35 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Tiruvannamalai',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '30–35 km',
      address: 'Tiruvannamalai'
    }
  ]
},
{
  id: 'tn_muthupet_mangrove_forest',
  name: 'Muthupet Mangrove Forest',
  district: 'Thiruvarur',
  category: 'adventure',
  categoryName: 'Adventure & Nature',

  rating: 4.1,
  ratingCount: 53,

  entryFee: 'Boating charges may apply',
  openTime: '08:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'November to February',

  shortDesc:
    'A scenic mangrove ecosystem and lagoon destination known for boating, bird watching, backwaters and rich coastal biodiversity.',

  longDesc:
    'Muthupet Mangrove Forest is one of the important natural attractions of Thiruvarur district. The mangrove ecosystem is located around the southern part of the Cauvery delta and contains extensive marshlands, backwaters and mangrove vegetation. Visitors can explore the mangrove environment by boat and enjoy bird watching, photography and nature-based activities. The area is particularly attractive during the migratory bird season.',

  attractions: [
    'Mangrove Forest',
    'Muthupet Lagoon',
    'Boat Ride',
    'Backwaters',
    'Bird Watching',
    'Migratory Birds',
    'Mangrove Ecosystem',
    'Nature Photography',
    'Fishing Villages'
  ],

  history:
    'Muthupet is located in the southern part of the Cauvery delta and has a long association with coastal fishing and lagoon ecosystems. The mangrove forest and wetlands have become important natural tourism and biodiversity areas.',

  lat: 10.4800,
  lng: 79.5200,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmXfQ32hK_c3Uh5iWybeTMd9jNwOmE8UpAy3FS-uvfA&s=10',

  transport: {
    bus: {
      available: 'Regular buses available from Thiruvarur and Pattukkottai',
      station: 'Muthupet Bus Stand',
      distance: 'Approximately 5–10 km from boating areas'
    },

    train: {
      station: 'Muthupet Railway Station',
      distance: 'Approximately 5–10 km',
      frequency: 'Check current train schedule'
    },

    taxi: {
      options:
        'Taxis and local transport available from Muthupet'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Muthupet',
        distance: 'Approximately 5–10 km',
        phone: 'Verify current number locally',
        address: 'Muthupet, Thiruvarur District'
      }
    ],

    police: [
      {
        name: 'Muthupet Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Muthupet, Thiruvarur District'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Muthupet'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Muthupet',
      price: 'Varies',
      rating: null,
      dist: '5–10 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Muthupet',
      foodType: 'South Indian / Seafood',
      price: 'Varies',
      rating: null,
      dist: '5–10 km',
      address: 'Muthupet, Thiruvarur District'
    }
  ]
},
{
  id: 'tn_vellore_fort',
  name: 'Vellore Fort',
  district: 'Vellore',
  category: 'forts',
  categoryName: 'Forts & Historical Monuments',

  rating: 4.3,
  ratingCount: 30398,

  entryFee: 'Check current ASI / local ticket rules',
  openTime: '08:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Specific facilities may have separate timings)',
  bestTime: 'October to February',

  shortDesc:
    'A massive granite fort in the heart of Vellore, famous for its moat, military architecture, temples, mosque, church and museums.',

  longDesc:
    'Vellore Fort is one of the most important monuments in Vellore district. The rectangular fort is built mainly with massive granite stones and is surrounded by a wide moat. The complex contains several important structures including Jalakanteswarar Temple, a mosque, St. John’s Church and historical palaces. Museums have also been established within the fort complex. The fort is closely associated with the Vellore Revolt of 1806.',

  attractions: [
    'Massive Granite Fort',
    'Wide Moat',
    'Jalakanteswarar Temple',
    'St. John’s Church',
    'Old Mosque',
    'Tippu Mahal',
    'Begam Mahal',
    'Fort Museum',
    'Archaeological Museum',
    'Photography'
  ],

  history:
    'Vellore Fort was constructed during the 16th century under the Vijayanagara period and is associated with Chinna Bommi Nayakar. The fort was later occupied by the British and witnessed the Vellore Revolt of 1806. It is an important example of military architecture in South India.',

  lat: 12.9200,
  lng: 79.1320,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdbmz48m4VADbI4rr3-s6ngeceNsWYts8JpbxLDkjaA&s=10',

  transport: {
    bus: {
      available: 'Frequent city and intercity buses available',
      station: 'Vellore Bus Stand',
      distance: 'Approximately 2 km'
    },

    train: {
      station: 'Katpadi Junction Railway Station',
      distance: 'Approximately 7 km',
      frequency: 'Frequent trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Vellore Medical College Hospital',
        distance: 'Approximately 5–8 km',
        phone: 'Verify current number locally',
        address: 'Vellore District'
      }
    ],

    police: [
      {
        name: 'Vellore North Police Station',
        distance: 'Nearby',
        phone: 'Verify current number locally',
        address: 'Vellore, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Vellore Fort / Vellore Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Vellore',
      price: 'Varies',
      rating: null,
      dist: '1–5 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Restaurants in Vellore',
      foodType: 'South Indian / Multi Cuisine',
      price: 'Varies',
      rating: null,
      dist: '1–5 km',
      address: 'Vellore Town'
    }
  ]
},
{
  id: 'tn_kamaraj_memorial_house',
  name: 'Kamaraj Memorial House',
  district: 'Virudhunagar',
  category: 'cultural',
  categoryName: 'Cultural & Memorial Places',

  rating: 4.8,
  ratingCount: 624,

  entryFee: 'Free / Check locally',
  openTime: '09:00 AM',
  closeTime: '05:00 PM',
  holiday: 'Check locally',
  bestTime: 'October to February',

  shortDesc:
    'The birthplace and memorial house of former Tamil Nadu Chief Minister K. Kamaraj, displaying photographs, personal belongings and memorabilia.',

  longDesc:
    'Kamaraj Memorial House in Virudhunagar is the birthplace and memorial of K. Kamaraj, one of the prominent political leaders of Tamil Nadu. The government converted his residence into a memorial to honour his contribution. The rooms display photographs from different stages of his life, along with clothes, a watch, books and other personal articles. The memorial provides visitors with an opportunity to learn about his life and contribution to Tamil Nadu.',

  attractions: [
    'Kamaraj Memorial House',
    'Personal Belongings',
    'Historical Photographs',
    'Books',
    'Clothing and Memorabilia',
    'Life History Displays',
    'Cultural Learning',
    'Photography'
  ],

  history:
    'K. Kamaraj was born in Virudhunagar and later became an important leader and Chief Minister of Tamil Nadu. His birthplace was declared a memorial by the Tamil Nadu Government and preserved as a place of public remembrance and education.',

  lat: 9.5850,
  lng: 77.9550,

  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCOGHxQh7wHWts6uTdlQHii1pFebzxIXlRhar6t3Q5BV05L27u_i_HDpA&s=10',

  transport: {
    bus: {
      available: 'Frequent buses available from major towns',
      station: 'Virudhunagar Bus Stand',
      distance: 'Approximately 1–2 km'
    },

    train: {
      station: 'Virudhunagar Junction Railway Station',
      distance: 'Approximately 2 km',
      frequency: 'Regular trains available'
    },

    taxi: {
      options:
        'Taxis, Auto Rickshaws and local transport available'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Virudhunagar',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Virudhunagar, Tamil Nadu'
      }
    ],

    police: [
      {
        name: 'Virudhunagar Town Police Station',
        distance: 'Approximately 2 km',
        phone: 'Verify current number locally',
        address: 'Virudhunagar, Tamil Nadu'
      }
    ],

    pharmacies: [
      {
        name: 'Local Medical Shops',
        distance: 'Nearby',
        location: 'Virudhunagar Town'
      }
    ]
  },

  hotels: [
    {
      name: 'Hotels in Virudhunagar',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: 'Verify current contact details'
    }
  ],

  restaurants: [
    {
      name: 'Local Restaurants in Virudhunagar',
      foodType: 'South Indian',
      price: 'Varies',
      rating: null,
      dist: '1–3 km',
      address: 'Virudhunagar Town'
    }
  ]
},
{
  id: 'tn_marudamalai',
  name: 'Marudamalai Murugan Temple',
  district: 'Coimbatore',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.8,
  ratingCount: 8500,
  entryFee: 'Free (Special Darshan ₹10 - ₹100)',
  openTime: '06:00 AM',
  closeTime: '08:30 PM',
  holiday: 'None (Open daily)',
  bestTime: 'October to March',
  shortDesc: 'A famous hilltop Murugan temple surrounded by scenic Western Ghats and lush greenery.',
  longDesc: 'Marudamalai Murugan Temple is a popular hill temple dedicated to Lord Murugan, located on Marudamalai Hill near Coimbatore. The temple is surrounded by beautiful natural scenery and is an important pilgrimage destination in Tamil Nadu. Visitors can enjoy both the spiritual atmosphere and panoramic views of the surrounding hills.',
  attractions: [
    'Marudamalai Murugan Temple',
    'Hilltop View',
    'Temple Elephant',
    'Scenic Western Ghats',
    'Steps and Hill Road'
  ],
  history: 'The temple is traditionally associated with Lord Murugan and has been an important pilgrimage centre for centuries. The surrounding Marudamalai Hills are also known for their natural beauty and traditional medicinal plants.',
  lat: 11.0448,
  lng: 76.8767,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXwT6unimp8v1HnuqxE_EbxdVVE25q4LCxAB7632smQ&s=10',
  transport: {
    bus: {
      available: 'Frequent City Buses',
      station: 'Gandhipuram Central Bus Stand',
      distance: '12 km'
    },
    train: {
      station: 'Coimbatore Junction Railway Station (CBE)',
      distance: '13 km',
      frequency: 'Regular trains from Chennai, Bangalore, Kochi and other major cities'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Kovai Medical Center and Hospital',
        distance: '10 km',
        phone: '0422-4323800',
        address: 'Avinashi Road, Coimbatore'
      },
      {
        name: 'Government Coimbatore Medical College Hospital',
        distance: '13 km',
        phone: '0422-2301393',
        address: 'Trichy Road, Coimbatore'
      }
    ],
    police: [
      {
        name: 'Marudamalai Police Station',
        distance: '2 km',
        phone: '0422-2422444',
        address: 'Marudamalai, Coimbatore'
      }
    ],
    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '5 km',
        location: 'Thondamuthur Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Vivanta Coimbatore',
      price: '₹5,000/night',
      rating: 4.5,
      dist: '12 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 422 6681000'
    },
    {
      name: 'Hotel Kiscol Grands',
      price: '₹2,500/night',
      rating: 4.3,
      dist: '10 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 422 4227777'
    }
  ],
  restaurants: [
    {
      name: 'Annapoorna',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.5,
      dist: '10 km',
      address: 'R.S. Puram, Coimbatore'
    },
    {
      name: 'Junior Kuppanna',
      foodType: 'South Indian Non-Veg',
      price: '₹500 for two',
      rating: 4.4,
      dist: '11 km',
      address: 'R.S. Puram, Coimbatore'
    }
  ]
},
{
  id: 'co_brookefields',
  name: 'Brookefields Mall',
  district: 'Coimbatore',
  category: 'shopping',
  categoryName: 'Shopping Malls & Entertainment',
  rating: 4.4,
  ratingCount: 88626,
  entryFee: 'Free Entry',
  openTime: '10:30 AM',
  closeTime: '10:30 PM',
  holiday: 'None (Open daily)',
  bestTime: 'November to February',
  shortDesc: 'A popular shopping and entertainment destination in Coimbatore featuring major brands, restaurants, cinema and family entertainment.',
  longDesc: 'Brookefields Mall is one of the most popular shopping and entertainment destinations in Coimbatore, located on Dr. Krishnasamy Mudaliyar Road. The mall offers a wide range of national and international brands, restaurants, food court, cinema and entertainment options. It is a convenient destination for both tourists and local visitors looking for shopping, dining and entertainment under one roof.',
  attractions: [
    'Major Fashion & Lifestyle Brands',
    'Food Court & Restaurants',
    'Cinema',
    'Family Entertainment',
    'Shopping & Retail Stores'
  ],
  history: 'Brookefields Mall was developed as a major retail and entertainment destination in Coimbatore and has become one of the city’s well-known shopping landmarks.',
  lat: 11.0077,
  lng: 76.9594,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0X1BcV9Ko3pVFyXuy3yU4lK9KCxbQs4gzVYZE5rueVA&s=10',

  transport: {
    bus: {
      available: 'Frequent City & Local Buses',
      station: 'Gandhipuram Central Bus Stand',
      distance: '2.5 km'
    },
    train: {
      station: 'Coimbatore Junction Railway Station (CBE)',
      distance: '3.0 km',
      frequency: 'Frequent trains from Chennai, Bangalore, Kochi and other major cities'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },

  emergency: {
    hospitals: [
      {
        name: 'Kovai Medical Center and Hospital',
        distance: '5.5 km',
        phone: '0422-4323800',
        address: 'Avinashi Road, Coimbatore'
      },
      {
        name: 'KG Hospital',
        distance: '2.5 km',
        phone: '0422-2212121',
        address: 'Arts College Road, Coimbatore'
      }
    ],

    police: [
      {
        name: 'R.S. Puram Police Station',
        distance: '1.5 km',
        phone: '0422-2300071',
        address: 'R.S. Puram, Coimbatore'
      }
    ],

    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '0.5 km',
        location: 'Near Brookefields Mall, Coimbatore'
      }
    ]
  },

  hotels: [
    {
      name: 'Welcomhotel by ITC Hotels, RaceCourse',
      price: '₹6,000/night',
      rating: 4.5,
      dist: '3.5 km',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
      phone: '+91 422 2227777'
    },
    {
      name: 'Hotel Kiscol Grands',
      price: '₹3,000/night',
      rating: 4.2,
      dist: '2.0 km',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80',
      phone: '+91 422 4040000'
    }
  ],

  restaurants: [
    {
      name: 'Junior Kuppanna',
      foodType: 'South Indian & Non-Veg',
      price: '₹500 for two',
      rating: 4.3,
      dist: '1.0 km',
      address: 'R.S. Puram, Coimbatore'
    },
    {
      name: 'Annalakshmi',
      foodType: 'South Indian Vegetarian',
      price: '₹500 for two',
      rating: 4.4,
      dist: '2.0 km',
      address: 'R.S. Puram, Coimbatore'
    }
  ]
},
{
  id: 'tn_eachanari',
  name: 'Eachanari Vinayagar Temple',
  district: 'Coimbatore',
  category: 'temples',
  categoryName: 'Temples & Religious Places',
  rating: 4.7,
  ratingCount: 6200,
  entryFee: 'Free',
  openTime: '05:00 AM',
  closeTime: '10:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'Throughout the year',
  shortDesc: 'One of Coimbatore’s most famous Ganesha temples, known for its large and beautiful Vinayagar idol.',
  longDesc: 'Eachanari Vinayagar Temple is a popular Hindu temple dedicated to Lord Ganesha. The temple is located on the Coimbatore-Pollachi Road and attracts devotees throughout the year. The large Vinayagar idol is the main attraction of this historic temple.',
  attractions: [
    'Large Vinayagar Idol',
    'Main Temple Shrine',
    'Temple Architecture',
    'Festival Celebrations'
  ],
  history: 'The temple is believed to have been established when a large Vinayagar idol was being transported towards Coimbatore and the vehicle could not proceed further at Eachanari. The idol was subsequently installed at the present location.',
  lat: 10.9364,
  lng: 76.9638,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBRFMn3kfhyGz7gQXw1fl1lMF0Vdp5-_HdKHMyTPuZjg&s=10',
  transport: {
    bus: {
      available: 'Frequent City and Intercity Buses',
      station: 'Gandhipuram Central Bus Stand',
      distance: '12 km'
    },
    train: {
      station: 'Coimbatore Junction Railway Station (CBE)',
      distance: '11 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'KMCH',
        distance: '12 km',
        phone: '0422-4323800',
        address: 'Avinashi Road, Coimbatore'
      },
      {
        name: 'Government Coimbatore Medical College Hospital',
        distance: '10 km',
        phone: '0422-2301393',
        address: 'Trichy Road, Coimbatore'
      }
    ],
    police: [
      {
        name: 'Eachanari Police Station',
        distance: '1 km',
        phone: '0422-2273333',
        address: 'Eachanari, Coimbatore'
      }
    ],
    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '1 km',
        location: 'Eachanari Main Road'
      }
    ]
  },
  hotels: [
    {
      name: 'Hotel Kiscol Grands',
      price: '₹2,500/night',
      rating: 4.3,
      dist: '11 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg2jj2r9S8Ijh71TZwzlp2XzcQbv9p5EQmB8qNFh0ANA&s=10',
      phone: '+91 422 4227777'
    },
    {
      name: 'Vivanta Coimbatore',
      price: '₹5,000/night',
      rating: 4.5,
      dist: '12 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-quC1_QyeE2sDqdalFXXSzz5yIJ2ESDer9RyDafvXaK_x_4iKAaHG9_Y&s=10',
      phone: '+91 422 6681000'
    }
  ],
  restaurants: [
    {
      name: 'Annapoorna',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.5,
      dist: '10 km',
      address: 'R.S. Puram, Coimbatore'
    },
    {
      name: 'Junior Kuppanna',
      foodType: 'Traditional South Indian Non-Veg',
      price: '₹500 for two',
      rating: 4.4,
      dist: '9 km',
      address: 'Ukkadam, Coimbatore'
    }
  ]
},
{
  id: 'tn_isha',
  name: 'Isha Yoga Center',
  district: 'Coimbatore',
  category: 'nature',
  categoryName: 'Nature & Spiritual Places',
  rating: 4.7,
  ratingCount: 18500,
  entryFee: 'Free Entry (Some activities may have charges)',
  openTime: '06:00 AM',
  closeTime: '08:00 PM',
  holiday: 'None (Open daily)',
  bestTime: 'September to March',
  shortDesc: 'A popular spiritual and nature destination at the foothills of the Velliangiri Mountains.',
  longDesc: 'Isha Yoga Center is a major spiritual destination located near the Velliangiri Mountains in Coimbatore. It is famous for the Adiyogi statue, Dhyanalinga, and its peaceful natural surroundings. The centre attracts visitors interested in spirituality, yoga, meditation and nature.',
  attractions: [
    'Adiyogi Statue',
    'Dhyanalinga',
    'Yoga Center',
    'Velliangiri Foothills',
    'Suryakund and Chandrakund'
  ],
  history: 'Isha Yoga Center was founded by Sadhguru Jagadish Vasudev and has developed into an international centre for yoga, meditation and spiritual activities.',
  lat: 10.9720,
  lng: 76.7367,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7unB0WBB9kcrAiFamZU4zOFYjEn-w_DcMMSkqmWVUw&s=10',
  transport: {
    bus: {
      available: 'Buses available from Coimbatore',
      station: 'Gandhipuram Central Bus Stand',
      distance: '35 km'
    },
    train: {
      station: 'Coimbatore Junction Railway Station (CBE)',
      distance: '32 km',
      frequency: 'Regular trains from major cities'
    },
    taxi: {
      options: 'Ola, Uber, Local Taxis and Private Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital, Thondamuthur',
        distance: '15 km',
        phone: '0422-2617222',
        address: 'Thondamuthur, Coimbatore'
      }
    ],
    police: [
      {
        name: 'Alandurai Police Station',
        distance: '8 km',
        phone: '0422-2612222',
        address: 'Alandurai, Coimbatore'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '8 km',
        location: 'Alandurai'
      }
    ]
  },
  hotels: [
    {
      name: 'Isha Yoga Center Stay',
      price: 'Varies by accommodation',
      rating: 4.5,
      dist: '0 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7AvHo_k6Wzu-N6KXeiOwjyzEHGNksde6FvSFdk5-zw&s',
      phone: '1800-891-1111'
    },
    {
      name: 'Vivanta Coimbatore',
      price: '₹5,000/night',
      rating: 4.5,
      dist: '35 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLqH5pIpO3cdn9Ol1wetEUsxO9vfLLcAmoa70emYhHg&s=10',
      phone: '+91 422 6681000'
    }
  ],
  restaurants: [
    {
      name: 'Isha Food Court',
      foodType: 'Vegetarian',
      price: '₹200 for two',
      rating: 4.4,
      dist: '0.5 km',
      address: 'Isha Yoga Center'
    },
    {
      name: 'Annapoorna',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.5,
      dist: '30 km',
      address: 'Coimbatore'
    }
  ]
},
{
  id: 'tn_black_thunder',
  name: 'Black Thunder Water Theme Park',
  district: 'Coimbatore',
  category: 'entertainment',
  categoryName: 'Entertainment & Adventure',
  rating: 4.4,
  ratingCount: 9800,
  entryFee: 'Around ₹700 - ₹1,000',
  openTime: '10:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None (Subject to maintenance)',
  bestTime: 'October to March',
  shortDesc: 'A large water theme park near Mettupalayam offering exciting rides and family entertainment.',
  longDesc: 'Black Thunder is a popular water theme park located near Mettupalayam in the Nilgiri foothills. It offers a variety of water rides, slides, wave pools and family entertainment activities. The park is a popular weekend destination for families and groups.',
  attractions: [
    'Water Slides',
    'Wave Pool',
    'Family Rides',
    'Kids Water Zone',
    'Adventure Rides'
  ],
  history: 'Black Thunder was developed as a major amusement and water theme park in the Nilgiri foothills and has become a popular recreational destination in the Coimbatore region.',
  lat: 11.3008,
  lng: 76.9392,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwIzUFekWXgNdMBe8S-dtPLgpg-3Vffm0-asw3_X0eA&s=10',
  transport: {
    bus: {
      available: 'Frequent Buses to Mettupalayam',
      station: 'Mettupalayam Bus Stand',
      distance: '4 km'
    },
    train: {
      station: 'Mettupalayam Railway Station',
      distance: '4 km',
      frequency: 'Regular trains from Coimbatore'
    },
    taxi: {
      options: 'Ola, Uber, Auto Rickshaws and Local Taxis'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Mettupalayam',
        distance: '5 km',
        phone: '04254-222222',
        address: 'Mettupalayam, Coimbatore District'
      }
    ],
    police: [
      {
        name: 'Mettupalayam Police Station',
        distance: '4 km',
        phone: '04254-222222',
        address: 'Mettupalayam'
      }
    ],
    pharmacies: [
      {
        name: 'Apollo Pharmacy',
        distance: '4 km',
        location: 'Mettupalayam'
      }
    ]
  },
  hotels: [
    {
      name: 'Black Thunder Resort',
      price: '₹3,500/night',
      rating: 4.2,
      dist: '0.5 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJynxd7bpbk7QFiWReMKaGQgMkrZ54iR4vGxPjPiYPQ&s=10',
      phone: '+91 4254 222555'
    },
    {
      name: 'Hotel Kiscol Grands',
      price: '₹2,500/night',
      rating: 4.3,
      dist: '35 km',
      image: 'https://gos3.ibcdn.com/7f90ba56726511e7a95a025f77df004f.jpg',
      phone: '+91 422 4227777'
    }
  ],
  restaurants: [
    {
      name: 'Local South Indian Restaurant',
      foodType: 'South Indian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '3 km',
      address: 'Mettupalayam'
    },
    {
      name: 'Annapoorna',
      foodType: 'South Indian Vegetarian',
      price: '₹250 for two',
      rating: 4.5,
      dist: '30 km',
      address: 'Coimbatore'
    }
  ]
},
{
  id: 'tn_valparai',
  name: 'Valparai',
  district: 'Coimbatore',
  category: 'nature',
  categoryName: 'Nature & Hill Stations',
  rating: 4.8,
  ratingCount: 11200,
  entryFee: 'No General Entry Fee',
  openTime: '06:00 AM',
  closeTime: '06:00 PM',
  holiday: 'None',
  bestTime: 'September to March',
  shortDesc: 'A beautiful hill destination known for tea estates, forests, waterfalls and wildlife.',
  longDesc: 'Valparai is a scenic hill station in the Anamalai Hills of the Western Ghats. It is surrounded by tea and coffee plantations, dense forests, waterfalls and wildlife habitats. The journey to Valparai through winding mountain roads offers spectacular views.',
  attractions: [
    'Tea Estates',
    'Aliyar Dam',
    'Monkey Falls',
    'Sholayar Dam',
    'Nallamudi View Point',
    'Anamalai Tiger Reserve'
  ],
  history: 'Valparai developed as a plantation region during the colonial period and is now known for its tea estates, biodiversity and spectacular Western Ghats landscape.',
  lat: 10.3260,
  lng: 76.9510,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFxIKEkAD0OABdd9XoULfiVL0nlb9cjGG8HQI8-T4nUA&s=10',
  transport: {
    bus: {
      available: 'Government and Private Buses',
      station: 'Pollachi Bus Stand',
      distance: '65 km'
    },
    train: {
      station: 'Pollachi Railway Station',
      distance: '65 km',
      frequency: 'Regular trains from Coimbatore and nearby cities'
    },
    taxi: {
      options: 'Private Taxis, Rental Cars and Local Cabs'
    }
  },
  emergency: {
    hospitals: [
      {
        name: 'Government Hospital Valparai',
        distance: '2 km',
        phone: '04253-222222',
        address: 'Valparai, Coimbatore District'
      }
    ],
    police: [
      {
        name: 'Valparai Police Station',
        distance: '2 km',
        phone: '04253-222222',
        address: 'Valparai'
      }
    ],
    pharmacies: [
      {
        name: 'Local Pharmacy',
        distance: '1 km',
        location: 'Valparai Town'
      }
    ]
  },
  hotels: [
    {
      name: "Sinclair's Retreat",
      price: '₹4,000/night',
      rating: 4.2,
      dist: '2 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQpVWSN3w6WPp9YojSEWsCXp_mGuLPkMeURgqY__Tzg&s=10',
      phone: '+91 4253 222222'
    },
    {
      name: 'Stanmore Garden Bungalow',
      price: '₹5,000/night',
      rating: 4.4,
      dist: '5 km',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROA6CZHwYWbUk5woU1CIDni69YLXA6ag7UydGiSce3g&s=10',
      phone: '+91 4253 222333'
    }
  ],
  restaurants: [
    {
      name: 'Hotel Saravana Bhavan',
      foodType: 'South Indian Vegetarian',
      price: '₹300 for two',
      rating: 4.2,
      dist: '2 km',
      address: 'Valparai Town'
    },
    {
      name: 'Local Valparai Restaurant',
      foodType: 'South Indian',
      price: '₹350 for two',
      rating: 4.1,
      dist: '1.5 km',
      address: 'Valparai'
    }
  ]
},
    {
      "id": "tn_pancha_rathas",
      "name": "Pancha Rathas (Five Rathas)",
      "district": "Chengalpattu",
      "category": "historical",
      "categoryName": "Historical & Heritage",
      "rating": 4.8,
      "ratingCount": 5200,
      "entryFee": "₹40 (Combined ASI Ticket)",
      "openTime": "06:00 AM",
      "closeTime": "06:00 PM",
      "holiday": "None",
      "bestTime": "October to March",
      "shortDesc": "UNESCO World Heritage monolithic rock-cut temples shaped like ceremonial chariots carved out of pink granite during the 7th-century Pallava dynasty.",
      "longDesc": "Pancha Rathas is a monument complex at Mahabalipuram on the Coromandel Coast. Dating from the late 7th century, the five structures named after the Pandavas and Draupadi are carved from single monolithic granite boulders with life-size elephant and lion stone sculptures.",
      "attractions": [
            "Dharmaraja Ratha",
            "Bhima Ratha",
            "Arjuna Ratha",
            "Draupadi Ratha",
            "Nakula Sahadeva Ratha",
            "Monolithic Elephant Sculpture"
      ],
      "history": "Carved during the reign of King Narasimhavarman I (Mahamalla) of the Pallava dynasty between 630 and 668 AD.",
      "lat": 12.6152,
      "lng": 80.1927,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Pancha_Rathas%2C_Mamallapuram_01.jpg/800px-Pancha_Rathas%2C_Mamallapuram_01.jpg",
      "transport": {
            "bus": {
                  "available": "Regular buses from Chennai & Chengalpattu",
                  "station": "Mahabalipuram Bus Stand",
                  "distance": "1 km"
            },
            "train": {
                  "station": "Chengalpattu Junction (CGL)",
                  "distance": "29 km"
            },
            "taxi": {
                  "options": "Local Taxis, Autos & ECR Cabs"
            }
      }
},
    {
      "id": "tn_arjunas_penance",
      "name": "Arjuna's Penance & Krishna's Butter Ball",
      "district": "Chengalpattu",
      "category": "historical",
      "categoryName": "Historical & Heritage",
      "rating": 4.8,
      "ratingCount": 6800,
      "entryFee": "Free (Grounds View)",
      "openTime": "06:00 AM",
      "closeTime": "06:00 PM",
      "holiday": "None",
      "bestTime": "October to March",
      "shortDesc": "World's largest open-air stone bas-relief depicting the Descent of the Ganges and the iconic 250-ton gravity-defying boulder Krishna's Butter Ball.",
      "longDesc": "Arjuna's Penance is an immense open-air bas-relief carved on two monolithic rock boulders measuring 96 by 43 feet. Beside it sits Krishna's Butter Ball, a colossal 250-ton granite boulder perched on a 45-degree slippery rock slope where it has stood unmoved for over 1,200 years.",
      "attractions": [
            "Descent of the Ganges Relief",
            "Krishna's Butter Ball",
            "Panchapandava Cave",
            "Ganesha Ratha",
            "Lighthouse View"
      ],
      "history": "Created in the mid-7th century under the Pallava ruler Narasimhavarman I.",
      "lat": 12.6186,
      "lng": 80.1925,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Krishna%27s_Butterball_2019.jpg/800px-Krishna%27s_Butterball_2019.jpg",
      "transport": {
            "bus": {
                  "available": "Buses from Chennai CMBT & Chengalpattu",
                  "station": "Mahabalipuram Stand",
                  "distance": "0.5 km"
            },
            "train": {
                  "station": "Chengalpattu Junction",
                  "distance": "29 km"
            },
            "taxi": {
                  "options": "Uber, Ola, Local Taxis"
            }
      }
},
    {
      "id": "tn_dakshinachitra",
      "name": "DakshinaChitra Living Heritage Museum",
      "district": "Chengalpattu",
      "category": "cultural",
      "categoryName": "Cultural & Heritage",
      "rating": 4.7,
      "ratingCount": 4500,
      "entryFee": "₹175 (Adults)",
      "openTime": "10:00 AM",
      "closeTime": "06:00 PM",
      "holiday": "Tuesday",
      "bestTime": "Year Round",
      "shortDesc": "Renowned open-air living history museum showcasing the authentic architecture, crafts, performing arts, and lifestyle of South India on the ECR coast.",
      "longDesc": "DakshinaChitra is an exciting cross-cultural living museum that houses 18 authentic heritage houses from Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh, with working artisans, glassblowers, folk performers, and traditional weavers.",
      "attractions": [
            "Traditional South Indian Heritage Homes",
            "Folk Dance & Music Performances",
            "Artisan Workshops & Pottery",
            "Textile Weaving Center",
            "South Indian Cuisine Cafe"
      ],
      "history": "Founded in 1996 by the Madras Craft Foundation led by Deborah Thiagarajan.",
      "lat": 12.8222,
      "lng": 80.2415,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Dakshinachitra_chennai.jpg/800px-Dakshinachitra_chennai.jpg",
      "transport": {
            "bus": {
                  "available": "MTC buses along ECR (109, 588, 599)",
                  "station": "Muttukadu / DakshinaChitra Stop",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Tambaram Station",
                  "distance": "25 km"
            },
            "taxi": {
                  "options": "ECR Cabs, Autos & Rental Cars"
            }
      }
},
    {
      "id": "tn_mgm_dizzee_world",
      "name": "MGM Dizzee World",
      "district": "Chengalpattu",
      "category": "adventure",
      "categoryName": "Theme Parks & Adventure",
      "rating": 4.5,
      "ratingCount": 6100,
      "entryFee": "₹699 (Unlimited Rides)",
      "openTime": "10:30 AM",
      "closeTime": "06:30 PM",
      "holiday": "None",
      "bestTime": "September to March",
      "shortDesc": "One of Tamil Nadu's most popular amusement and water theme parks, offering exciting family rides, water slides, and recreational activities.",
      "longDesc": "MGM Dizzee World on the East Coast Road is a landmark theme park offering world-class roller coasters, water log flumes, wave pools, carousel rides, and musical family attractions set amidst landscaped gardens.",
      "attractions": [
            "Roller Coasters & Big Wheel",
            "Water World Wave Pool",
            "Jurong's Bird Show & Aviary",
            "Family Thrill Rides",
            "Carnival Games & Food Courts"
      ],
      "history": "Established in 1993 as one of Tamil Nadu's pioneer theme parks on the ECR corridor.",
      "lat": 12.829,
      "lng": 80.2405,
      "image": "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?auto=format&fit=crop&w=600&q=80",
      "transport": {
            "bus": {
                  "available": "ECR route buses from Chennai & Kovalam",
                  "station": "MGM Stop",
                  "distance": "0.2 km"
            },
            "train": {
                  "station": "Chengalpattu Junction",
                  "distance": "32 km"
            },
            "taxi": {
                  "options": "Call Taxis, ECR Cabs"
            }
      }
},
    {
      "id": "tn_croc_bank",
      "name": "Madras Crocodile Bank Trust",
      "district": "Chengalpattu",
      "category": "wildlife",
      "categoryName": "Wildlife & Nature",
      "rating": 4.6,
      "ratingCount": 5800,
      "entryFee": "₹100 (Adults)",
      "openTime": "09:00 AM",
      "closeTime": "05:30 PM",
      "holiday": "Monday",
      "bestTime": "October to March",
      "shortDesc": "Leading reptile zoo and herpetology research center housing endangered crocodiles, alligators, turtles, and venomous snakes.",
      "longDesc": "Founded by herpetologist Romulus Whitaker in 1976 to protect India's three endangered crocodile species: the Mugger, Saltwater Crocodile, and Gharial. Today it is one of the world's largest reptile zoological parks with night safaris and underwater gharial viewing.",
      "attractions": [
            "Mugger & Saltwater Crocodiles",
            "Endangered Gharial Breeding Center",
            "Komodo Dragon Enclosure",
            "Irula Snake Venom Extraction Show",
            "Underwater Crocodile Viewing Gallery"
      ],
      "history": "Established in 1976 by Romulus Whitaker and Zai Whitaker.",
      "lat": 12.7547,
      "lng": 80.2392,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Crocodile_Bank_Chennai.jpg/800px-Crocodile_Bank_Chennai.jpg",
      "transport": {
            "bus": {
                  "available": "All ECR buses between Chennai and Mahabalipuram",
                  "station": "Crocodile Bank Stop",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Chengalpattu Junction",
                  "distance": "28 km"
            },
            "taxi": {
                  "options": "ECR Taxis & Auto Rickshaws"
            }
      }
},
    {
      "id": "tn_sadras_fort",
      "name": "Sadras Dutch Fort",
      "district": "Chengalpattu",
      "category": "historical",
      "categoryName": "Historical & Heritage",
      "rating": 4.4,
      "ratingCount": 1900,
      "entryFee": "Free",
      "openTime": "08:00 AM",
      "closeTime": "05:30 PM",
      "holiday": "None",
      "bestTime": "November to February",
      "shortDesc": "Historic 17th-century coastal fortress built by the Dutch East India Company with brick battlements, watchtowers, and cemetery.",
      "longDesc": "Sadras Fort is a 17th-century coastal fortress built by the Dutch for muslin weaving trade. The archaeological site features defensive brick ramparts, an ancient granary, canons, and a cemetery with beautifully carved Dutch coat of arms epitaphs.",
      "attractions": [
            "17th-century Dutch Ramparts & Bastions",
            "Ancient Granary & Watchtowers",
            "Dutch Cemetery with Carved Epitaphs",
            "Historic Cannons",
            "Quiet Coromandel Beachfront"
      ],
      "history": "Built by the Dutch East India Company in 1612 AD for commercial textile trade.",
      "lat": 12.5186,
      "lng": 80.1601,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sadras_Fort_Ruins.jpg/800px-Sadras_Fort_Ruins.jpg",
      "transport": {
            "bus": {
                  "available": "Buses from Kalpakkam & Mahabalipuram",
                  "station": "Sadras Bus Stop",
                  "distance": "0.5 km"
            },
            "train": {
                  "station": "Chengalpattu Junction",
                  "distance": "34 km"
            },
            "taxi": {
                  "options": "Local Taxis & Autos"
            }
      }
},
    {
      "id": "tn_thiruneermalai",
      "name": "Thiruneermalai Ranganatha Perumal Temple",
      "district": "Chengalpattu",
      "category": "temples",
      "categoryName": "Temples & Religious Places",
      "rating": 4.7,
      "ratingCount": 3800,
      "entryFee": "Free",
      "openTime": "06:30 AM",
      "closeTime": "08:00 PM",
      "holiday": "None",
      "bestTime": "October to March",
      "shortDesc": "Famous 108 Divya Desam temple situated atop a rocky hillock, dedicated to Lord Vishnu in four distinct postures.",
      "longDesc": "Thiruneermalai Ranganatha Perumal Temple is a celebrated Vaishnavite shrine situated on a prominent hill. The temple is unique as it enshrines Lord Vishnu in standing, sitting, reclining, and walking postures across hill-base and hilltop shrines.",
      "attractions": [
            "108 Divya Desam Hilltop Shrine",
            "Neervanna Perumal Base Temple",
            "Panoramic Views of Pallavaram Hills",
            "Sacred Temple Tank (Ksheera Pushkarini)",
            "Ancient Dravidian Gopuram"
      ],
      "history": "Associated with 8th-century Alvar saints Bhoothathalvar and Thirumangai Alvar.",
      "lat": 12.9592,
      "lng": 80.1147,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Thiruneermalai_Temple_Hill.jpg/800px-Thiruneermalai_Temple_Hill.jpg",
      "transport": {
            "bus": {
                  "available": "Frequent buses from Pallavaram & Tambaram",
                  "station": "Thiruneermalai Stand",
                  "distance": "0.3 km"
            },
            "train": {
                  "station": "Pallavaram Suburban Railway Station",
                  "distance": "4 km"
            },
            "taxi": {
                  "options": "City Taxis, Autos & Ride Shares"
            }
      }
},
    {
      "id": "tn_perur_temple",
      "name": "Perur Pateeswarar Temple",
      "district": "Coimbatore",
      "category": "temples",
      "categoryName": "Temples & Religious Places",
      "rating": 4.8,
      "ratingCount": 6400,
      "entryFee": "Free",
      "openTime": "06:00 AM",
      "closeTime": "08:30 PM",
      "holiday": "None",
      "bestTime": "Year Round",
      "shortDesc": "Ancient 2nd-century Shaivite temple built by Karikala Chola with magnificent golden hall (Kanaka Sabha) and stone filigree carvings.",
      "longDesc": "Perur Pateeswarar Temple on the banks of Noyyal River is one of the most venerable Shiva temples in Kongu Nadu. It is renowned for its Kanaka Sabha (Golden Hall) featuring exquisite stone pillars carved with intricate figures of Nataraja, soldiers, and celestial dancers.",
      "attractions": [
            "Kanaka Sabha (Golden Hall of Sculptures)",
            "Ancient 2nd-Century Chola Architecture",
            "Noyyal River Sacred Ghat",
            "Sacred Bilva Tree & Temple Car",
            "Patti Vinayagar Shrine"
      ],
      "history": "Originally constructed by King Karikala Chola in the 2nd century AD, with expansions by Hoysala and Vijayanagara kings.",
      "lat": 10.9734,
      "lng": 76.9189,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Perur_Pateeswarar_Temple.jpg/800px-Perur_Pateeswarar_Temple.jpg",
      "transport": {
            "bus": {
                  "available": "City bus routes 3, 3B, 3C from Gandhipuram & Railway Station",
                  "station": "Perur Temple Bus Stop",
                  "distance": "0.2 km"
            },
            "train": {
                  "station": "Coimbatore Junction (CBE)",
                  "distance": "8 km"
            },
            "taxi": {
                  "options": "Ola, Uber, City Autos"
            }
      }
},
    {
      "id": "tn_adiyogi_statue",
      "name": "Adiyogi 112-ft Shiva Statue & Dhyanalinga",
      "district": "Coimbatore",
      "category": "cultural",
      "categoryName": "Cultural & Spiritual",
      "rating": 4.9,
      "ratingCount": 15200,
      "entryFee": "Free",
      "openTime": "06:00 AM",
      "closeTime": "08:00 PM",
      "holiday": "None",
      "bestTime": "October to March",
      "shortDesc": "Guinness World Record largest bust sculpture in the world dedicated to Adiyogi (First Yogi), with the serene Dhyanalinga meditation dome at Velliangiri foothills.",
      "longDesc": "The 112-foot Adiyogi statue recognized by Guinness World Records stands majestically against the Velliangiri mountain range. Visitors experience the profound silence of Dhyanalinga, energized Theerthakund water bodies, and the evening 3D laser sound and light projection show.",
      "attractions": [
            "112-ft Adiyogi Steel Bust Sculpture",
            "Divya Sparsham 3D Laser Projection Show",
            "Dhyanalinga Meditation Dome",
            "Suryakund & Chandrakund Theerthakunds",
            "Linga Bhairavi Temple"
      ],
      "history": "Inaugurated in 2017 to inspire humanity towards inner wellbeing and yoga.",
      "lat": 10.9731,
      "lng": 76.7404,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Adiyogi_Shiva_Statue_Isha_Coimbatore.jpg/800px-Adiyogi_Shiva_Statue_Isha_Coimbatore.jpg",
      "transport": {
            "bus": {
                  "available": "Direct bus route 14D from Gandhipuram Bus Stand",
                  "station": "Isha Adiyogi Gate",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Coimbatore Junction",
                  "distance": "30 km"
            },
            "taxi": {
                  "options": "Prepaid Cabs, Ola, Uber"
            }
      }
},
    {
      "id": "tn_siruvani_waterfalls",
      "name": "Siruvani Waterfalls & Dam",
      "district": "Coimbatore",
      "category": "waterfalls",
      "categoryName": "Cascading Waterfalls",
      "rating": 4.7,
      "ratingCount": 4200,
      "entryFee": "₹50",
      "openTime": "09:00 AM",
      "closeTime": "04:00 PM",
      "holiday": "Forest Department Closure on heavy rains",
      "bestTime": "October to February",
      "shortDesc": "Scenic cascading waterfalls in the Western Ghats known for possessing the world's second sweetest, mineral-rich mountain water.",
      "longDesc": "Surrounded by dense virgin forests of the Nilgiri Biosphere, Siruvani Waterfalls cascades down rocky cliffs offering refreshing natural pools. The water is celebrated for its purity and mineral sweetness, supplying clean drinking water to Coimbatore city.",
      "attractions": [
            "Siruvani Mineral Waterfalls",
            "Western Ghats Forest Drive & Safaris",
            "Dam Reservoir Viewpoint",
            "Canopy Watch Tower",
            "Flora & Fauna Photography"
      ],
      "history": "Constructed by the Government of Tamil Nadu with Kerala in 1927 for pristine drinking water.",
      "lat": 10.9419,
      "lng": 76.6853,
      "image": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80",
      "transport": {
            "bus": {
                  "available": "Route 59 from Gandhipuram Bus Stand",
                  "station": "Sadivayal Checkpost",
                  "distance": "3 km"
            },
            "train": {
                  "station": "Coimbatore Junction",
                  "distance": "37 km"
            },
            "taxi": {
                  "options": "Private Tour Cabs & Rental Vehicles"
            }
      }
},
    {
      "id": "tn_gedee_car_museum",
      "name": "Gedee Car Museum & GD Naidu Science Museum",
      "district": "Coimbatore",
      "category": "museums",
      "categoryName": "Museums & Galleries",
      "rating": 4.8,
      "ratingCount": 7100,
      "entryFee": "₹100 (Adults)",
      "openTime": "09:00 AM",
      "closeTime": "06:30 PM",
      "holiday": "Monday",
      "bestTime": "Year Round",
      "shortDesc": "India's premier vintage automobile museum featuring over 100 classic cars from Germany, UK, USA, and rare technological inventions by GD Naidu.",
      "longDesc": "Gedee Car Museum is a treasure trove for automobile aficionados, showcasing rare vehicles spanning over a century. From an exact replica of the 1886 Benz Patent-Motorwagen to classic Rolls Royce, Cadillacs, Morris, and microcars, alongside GD Naidu's innovative mechanical patents.",
      "attractions": [
            "1886 Benz Patent Motorwagen Replica",
            "Vintage Rolls Royce, Jaguar & Cadillac Fleet",
            "Rare Microcars & Bubble Cars",
            "GD Naidu Technological Inventions Gallery",
            "Interactive Automotive Science Exhibits"
      ],
      "history": "Established in memory of inventor and industrialist G.D. Naidu by his son G.D. Gopal.",
      "lat": 11.0069,
      "lng": 76.9747,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gedee_Car_Museum_Exterior.jpg/800px-Gedee_Car_Museum_Exterior.jpg",
      "transport": {
            "bus": {
                  "available": "City buses towards Avinashi Road",
                  "station": "President Hall / GD Museum Stop",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Coimbatore Junction",
                  "distance": "2.5 km"
            },
            "taxi": {
                  "options": "Autos, Ola, Uber"
            }
      }
},
    {
      "id": "tn_kovai_kutralam",
      "name": "Kovai Kutralam Waterfalls",
      "district": "Coimbatore",
      "category": "waterfalls",
      "categoryName": "Cascading Waterfalls",
      "rating": 4.6,
      "ratingCount": 3900,
      "entryFee": "₹60",
      "openTime": "09:30 AM",
      "closeTime": "03:30 PM",
      "holiday": "Monday & heavy rain periods",
      "bestTime": "September to February",
      "shortDesc": "Pristine waterfall located inside the protected Siruvani forest range, offering natural herbal showers surrounded by lush Western Ghats hills.",
      "longDesc": "Kovai Kutralam is an invigorating scenic waterfall managed by the Tamil Nadu Forest Department. Visitors ride eco-safari vehicles from the forest checkpost to reach the natural herbal cascades flowing through undisturbed mountain valleys.",
      "attractions": [
            "Natural Herbal Shower Cascades",
            "Eco-Safari Forest Van Ride",
            "Mountain Stream Bathing Pools",
            "Lush Western Ghats Wilderness",
            "Bird & Butterfly Watching"
      ],
      "history": "Protected and maintained by Coimbatore Forest Division as an eco-tourism sanctuary.",
      "lat": 10.9388,
      "lng": 76.7118,
      "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
      "transport": {
            "bus": {
                  "available": "Regular buses from Gandhipuram to Chadivayal",
                  "station": "Chadivayal Forest Gate",
                  "distance": "1.5 km"
            },
            "train": {
                  "station": "Coimbatore Junction",
                  "distance": "35 km"
            },
            "taxi": {
                  "options": "Sightseeing Taxis & Private Cabs"
            }
      }
},
    {
      "id": "tn_voc_park_zoo",
      "name": "VOC Park and Zoological Garden",
      "district": "Coimbatore",
      "category": "parks",
      "categoryName": "Parks & Gardens",
      "rating": 4.4,
      "ratingCount": 5300,
      "entryFee": "₹20",
      "openTime": "08:00 AM",
      "closeTime": "07:30 PM",
      "holiday": "Tuesday",
      "bestTime": "Year Round",
      "shortDesc": "Centrally located amusement and recreational park honoring freedom fighter V.O. Chidambaram Pillai, ideal for relaxing walks and family outings.",
      "longDesc": "VOC Park is a cherished recreational sanctuary in the heart of Coimbatore. The premises feature landscaped botanical gardens, a working toy train, children's play arena, mini zoo, and tranquil walking trails under shady trees.",
      "attractions": [
            "Children's Toy Train Ride",
            "Botanical Lawns & Shady Pergolas",
            "Mini Zoological Garden",
            "Evening Musical Fountain",
            "Memorial to Freedom Fighter VOC"
      ],
      "history": "Developed by Coimbatore City Corporation in the mid-20th century.",
      "lat": 11.0039,
      "lng": 76.9691,
      "image": "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&w=600&q=80",
      "transport": {
            "bus": {
                  "available": "All Gandhipuram and Town Hall buses",
                  "station": "VOC Park Stop",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Coimbatore Junction",
                  "distance": "2 km"
            },
            "taxi": {
                  "options": "Autos, Ola, Uber"
            }
      }
},
    {
      "id": "tn_monkey_falls_aliyar",
      "name": "Monkey Falls & Aliyar Dam Park",
      "district": "Coimbatore",
      "category": "waterfalls",
      "categoryName": "Cascading Waterfalls",
      "rating": 4.6,
      "ratingCount": 6800,
      "entryFee": "₹30",
      "openTime": "08:00 AM",
      "closeTime": "05:00 PM",
      "holiday": "None",
      "bestTime": "September to March",
      "shortDesc": "Picturesque natural waterfall on Pollachi-Valparai road alongside the expansive Aliyar Dam landscaped gardens and boating.",
      "longDesc": "Monkey Falls is a picturesque natural waterfall nestled on the upward ghat road to Valparai in the Anamalai Hills. Combined with the nearby Aliyar Dam reservoir with boat rides, canal parks, and aquarium, it offers a refreshing day trip from Coimbatore.",
      "attractions": [
            "Monkey Falls Rocky Mountain Cascade",
            "Aliyar Dam Reservoir & Boating",
            "Landscaped Canal Gardens & Aquarium",
            "Ghat Road Viewpoint towards Anamalai Hills",
            "Forest Checkpost Nature Walk"
      ],
      "history": "A celebrated eco-tourism stop on the historic Pollachi-Valparai tea plantation corridor.",
      "lat": 10.4907,
      "lng": 76.9678,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Monkey_falls_pollachi.jpg/800px-Monkey_falls_pollachi.jpg",
      "transport": {
            "bus": {
                  "available": "Frequent buses from Pollachi to Valparai",
                  "station": "Monkey Falls / Aliyar Dam Stop",
                  "distance": "0.1 km"
            },
            "train": {
                  "station": "Pollachi Junction",
                  "distance": "25 km"
            },
            "taxi": {
                  "options": "Pollachi & Coimbatore Day Rental Cabs"
            }
      }
}
  ],

  initialReviews: [
    { id: 1, placeId: 'tn_meenakshi', userName: 'Karthik Raja', rating: 5, date: '2026-07-15', comment: 'The architecture of Meenakshi Temple is unbelievable. The 1000 pillar hall left me speechlessly amazed!' },
    { id: 2, placeId: 'tn_ooty', userName: 'Priya Sundaram', rating: 5, date: '2026-08-01', comment: 'Riding the Nilgiri toy train through the tunnels and tea estates was a dream come true.' },
    { id: 3, placeId: 'tn_brihadeeswarar', userName: 'Arun Kumar', rating: 5, date: '2026-07-28', comment: 'Chola dynasty engineering at its absolute finest. Mandatory visit for history lovers!' }
  ]
};

// Expose on window object
if (typeof window !== 'undefined') {
  window.TN_DATA = TN_DATA;
}

export default TN_DATA;
