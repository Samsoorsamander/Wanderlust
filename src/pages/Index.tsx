
import { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import PlaceGrid from '../components/PlaceGrid';
import PlaceModal from '../components/PlaceModal';
import { places } from '../data/places';
import { Place } from '../types/place';
import { ImageService } from '../services/imageService';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [originalQuery, setOriginalQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const displayPlaces = useMemo(() => {
    if (searchQuery.trim() && searchResults.length > 0) {
      return searchResults;
    }
    if (!searchQuery.trim()) {
      return places;
    }
    // Fallback to original filtering if no search results
    const query = searchQuery.toLowerCase();
    return places.filter(
      place =>
        place.name.toLowerCase().includes(query) ||
        place.country.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query) ||
        place.category.toLowerCase().includes(query) ||
        place.attractions.some(attraction => 
          attraction.toLowerCase().includes(query)
        )
    );
  }, [searchQuery, searchResults]);

  const handleSearch = async (query: string) => {
    console.log('Search initiated for:', query);
    setOriginalQuery(query);
    
    // Apply spell correction
    const correctedQuery = ImageService.correctSpelling(query);
    setSearchQuery(correctedQuery);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const results = await ImageService.searchPlaces(correctedQuery);
      console.log('Search results:', results);
      setSearchResults(results);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handlePlaceClick = (place: Place) => {
    setSelectedPlace(place);
  };

  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  const isSpellCorrected = originalQuery && originalQuery.toLowerCase() !== searchQuery.toLowerCase();

  return (
    <div className="min-h-screen">
      <Hero onSearch={handleSearch} />
      
      {/* Places Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              {searchQuery ? 'Search Results' : 'Discover Amazing Places'}
            </h2>
            <div className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in">
              {isSearching ? (
                <p>Searching for beautiful places...</p>
              ) : searchQuery ? (
                <div>
                  {isSpellCorrected && (
                    <p className="text-yellow-300 mb-2">
                      Did you mean "{searchQuery}"? Showing results for the corrected spelling.
                    </p>
                  )}
                  <p>
                    Found {displayPlaces.length} place{displayPlaces.length !== 1 ? 's' : ''} matching "{searchQuery}"
                  </p>
                </div>
              ) : (
                <p>Explore breathtaking destinations from around the globe</p>
              )}
            </div>
          </div>

          {isSearching ? (
            <div className="text-center py-16">
              <div className="animate-spin w-16 h-16 border-4 border-white/20 border-t-white rounded-full mx-auto mb-4"></div>
              <p className="text-white/70">Loading beautiful places...</p>
            </div>
          ) : (
            <PlaceGrid places={displayPlaces} onPlaceClick={handlePlaceClick} />
          )}
        </div>
      </section>

      {/* Place Modal */}
      {selectedPlace && (
        <PlaceModal
          place={selectedPlace}
          isOpen={!!selectedPlace}
          onClose={handleCloseModal}
        />
      )}

      {/* Footer */}
      <footer className="py-12 text-center text-white/60">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg mb-4">
            "The world is a book and those who do not travel read only one page."
          </p>
          <p className="text-sm">
            Discover, explore, and create memories that last a lifetime.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
