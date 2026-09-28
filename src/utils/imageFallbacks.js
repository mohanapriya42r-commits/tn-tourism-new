export const CATEGORY_FALLBACK_IMAGES = {
  temples: '/images/places/tn_chidambaram_nataraja.jpg',
  forts: '/images/places/tamilnadu_fort.jpg',
  historical: '/images/places/tamilnadu_fort.jpg',
  beaches: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAjmkXhD2dRlCD_dtwLsqdzvhQc193qnlrF9XXt2KzbbGXDHONcq2hpo&s=10',
  waterfalls: 'https://ramyashotels.com/wp-content/uploads/2021/06/puliyancholai-falls-trichy-best-view.jpg',
  hillstations: 'https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg',
  hills: 'https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg',
  wildlife: 'https://tamilnadutourisminfo.com/wp-content/uploads/2023/10/vettangudi.webp',
  nature: 'https://www.indyatour.com/images/india/tamil-nadu/kodaikanal-hill-station-tamilnadu.jpg',
  lakes: '/images/places/tn_mettur_dam_salem.jpg',
  dams: '/images/places/tn_mettur_dam_salem.jpg',
  cultural: '/images/places/shiva_river_temple.jpg',
  parks: 'https://touristplacestamilnadu.com/images/history/mukkombu-upper-anaicut.webp',
  shopping: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeMa5qrD4nsK5MvGNwyQ19Bfe5Yl8MP3953rmL0v9pQ&s=10',
  museums: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE9tHO3c--_JrFm_CJkyLdC4mG0Zb4soPBs-z1jo4YKQ&s=10',
  default: '/images/places/tn_chidambaram_nataraja.jpg'
};

export const getPlaceImageFallback = (category) => {
  return CATEGORY_FALLBACK_IMAGES[category] || CATEGORY_FALLBACK_IMAGES.default;
};

export default getPlaceImageFallback;
