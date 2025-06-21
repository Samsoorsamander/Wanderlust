
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Place } from '../types/place';

interface PlaceCardProps {
  place: Place;
  onClick: (place: Place) => void;
}

const PlaceCard = ({ place, onClick }: PlaceCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const categoryColors = {
    mountain: 'from-blue-500 to-purple-600',
    beach: 'from-cyan-400 to-blue-500',
    city: 'from-gray-500 to-gray-700',
    forest: 'from-green-500 to-green-700',
    desert: 'from-yellow-500 to-orange-600',
    island: 'from-teal-400 to-blue-600'
  };

  // Use images array if available, otherwise fall back to single image
  const images = place.images || (place.image ? [place.image] : []);
  const currentImage = images[currentImageIndex] || place.image || '';

  const nextImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={currentImage}
          alt={place.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Image Navigation - only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            {/* Image dots indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${categoryColors[place.category]} capitalize`}>
            {place.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6" onClick={() => onClick(place)}>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-travel-mountain transition-colors">
            {place.name}
          </h3>
          <span className="text-sm text-gray-500 font-medium">
            {place.country}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {place.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Best time: {place.bestTimeToVisit}
          </span>
          <div className="flex space-x-1">
            {images.length > 1 && (
              <span className="text-xs text-gray-500">
                {images.length} photos
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
