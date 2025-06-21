
export interface Place {
  id: string;
  name: string;
  country: string;
  description: string;
  longDescription: string;
  image?: string; // Keep for backward compatibility
  images?: string[]; // New field for multiple images
  category: 'mountain' | 'beach' | 'city' | 'forest' | 'desert' | 'island';
  coordinates: {
    lat: number;
    lng: number;
  };
  bestTimeToVisit: string;
  attractions: string[];
}
