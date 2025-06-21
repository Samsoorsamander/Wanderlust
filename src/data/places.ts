
import { Place } from '../types/place';

export const places: Place[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'A stunning Greek island with iconic blue-domed churches and breathtaking sunsets.',
    longDescription: 'Santorini is a volcanic island in the Aegean Sea, famous for its dramatic cliff-top villages, whitewashed buildings with blue domes, and spectacular sunsets. The island offers a perfect blend of natural beauty, ancient history, and modern luxury.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    category: 'island',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    bestTimeToVisit: 'April to November',
    attractions: ['Oia Village', 'Red Beach', 'Ancient Akrotiri', 'Fira Town']
  },
  {
    id: '2',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'Ancient Incan citadel perched high in the Andes Mountains.',
    longDescription: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru. Often referred to as the "Lost City of the Incas," it offers breathtaking mountain views and incredible historical significance.',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    category: 'mountain',
    coordinates: { lat: -13.1631, lng: -72.5450 },
    bestTimeToVisit: 'May to September',
    attractions: ['Huayna Picchu', 'Sun Gate', 'Temple of the Sun', 'Inca Trail']
  },
  {
    id: '3',
    name: 'Maldives',
    country: 'Maldives',
    description: 'Tropical paradise with crystal-clear waters and overwater bungalows.',
    longDescription: 'The Maldives is a tropical paradise consisting of 1,192 coral islands grouped into 26 atolls. Known for its pristine white sandy beaches, crystal-clear turquoise waters, and luxurious overwater villas.',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80',
    category: 'beach',
    coordinates: { lat: 3.2028, lng: 73.2207 },
    bestTimeToVisit: 'November to April',
    attractions: ['Male', 'Bioluminescent Beach', 'Coral Reefs', 'Resort Islands']
  },
  {
    id: '4',
    name: 'Banff National Park',
    country: 'Canada',
    description: 'Majestic Canadian Rockies with pristine lakes and towering peaks.',
    longDescription: 'Banff National Park is Canada\'s oldest national park, located in the Rocky Mountains of Alberta. It features stunning mountain landscapes, pristine wilderness, diverse wildlife, and world-class outdoor recreation opportunities.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    category: 'mountain',
    coordinates: { lat: 51.4968, lng: -115.9281 },
    bestTimeToVisit: 'June to September',
    attractions: ['Lake Louise', 'Moraine Lake', 'Banff Hot Springs', 'Columbia Icefield']
  },
  {
    id: '5',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient Japanese capital with traditional temples and beautiful gardens.',
    longDescription: 'Kyoto, once the capital of Japan, is a city steeped in history and tradition. Home to numerous temples, shrines, and traditional wooden houses, it offers a glimpse into Japan\'s rich cultural heritage.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    category: 'city',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    bestTimeToVisit: 'March to May, September to November',
    attractions: ['Fushimi Inari Shrine', 'Kiyomizu-dera', 'Bamboo Grove', 'Golden Pavilion']
  },
  {
    id: '6',
    name: 'Sahara Desert',
    country: 'Morocco',
    description: 'Vast desert landscape with golden sand dunes and starry nights.',
    longDescription: 'The Sahara Desert in Morocco offers an otherworldly experience with its vast expanse of golden sand dunes, traditional Berber culture, and some of the most spectacular stargazing opportunities on Earth.',
    image: 'https://images.unsplash.com/photo-1451772741724-d20990422508?w=800&q=80',
    category: 'desert',
    coordinates: { lat: 31.7917, lng: -7.0926 },
    bestTimeToVisit: 'October to April',
    attractions: ['Erg Chebbi Dunes', 'Merzouga', 'Camel Trekking', 'Desert Camps']
  }
];
