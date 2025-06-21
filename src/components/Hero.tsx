
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { places } from '../data/places';
import { ImageService } from '../services/imageService';
import SearchSuggestions from './SearchSuggestions';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % places.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const correctedQuery = ImageService.correctSpelling(searchQuery);
      console.log('Search query corrected from:', searchQuery, 'to:', correctedQuery);
      onSearch(correctedQuery);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length >= 2);
  };

  const handleInputFocus = () => {
    if (searchQuery.length >= 2) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const currentPlace = places[currentImageIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Transition */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentPlace.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-glow">
            Wanderlust
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            Discover the world's most beautiful places
          </p>
          <p className="text-lg opacity-75">
            Currently showing: {currentPlace.name}, {currentPlace.country}
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-2xl mb-8 relative">
          <div className="relative glass-morphism rounded-full p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Search for beautiful places around the world..."
              className="w-full bg-transparent text-white placeholder-white/70 px-6 py-4 rounded-full focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>

          {/* Search Suggestions */}
          <SearchSuggestions
            query={searchQuery}
            onSuggestionClick={handleSuggestionClick}
            isVisible={showSuggestions}
          />
        </form>

        {/* Image Indicators */}
        <div className="flex space-x-2">
          {places.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float hidden md:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-white/10 rounded-full animate-float animation-delay-1000 hidden md:block" />
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full animate-float animation-delay-2000 hidden md:block" />
    </div>
  );
};

export default Hero;
