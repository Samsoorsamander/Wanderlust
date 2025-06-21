
import { Place } from '../types/place';
import PlaceCard from './PlaceCard';

interface PlaceGridProps {
  places: Place[];
  onPlaceClick: (place: Place) => void;
}

const PlaceGrid = ({ places, onPlaceClick }: PlaceGridProps) => {
  if (places.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="animate-float">
          <div className="w-24 h-24 bg-gradient-to-br from-travel-ocean to-travel-mountain rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-2xl">🔍</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">No places found</h3>
        <p className="text-white/70">Try searching for a different destination</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {places.map((place, index) => (
        <div
          key={place.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <PlaceCard place={place} onClick={onPlaceClick} />
        </div>
      ))}
    </div>
  );
};

export default PlaceGrid;
