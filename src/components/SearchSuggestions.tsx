
import { useState, useEffect } from 'react';
import { ImageService } from '../services/imageService';

interface SearchSuggestionsProps {
  query: string;
  onSuggestionClick: (suggestion: string) => void;
  isVisible: boolean;
}

const SearchSuggestions = ({ query, onSuggestionClick, isVisible }: SearchSuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (query.length >= 2) {
      const newSuggestions = ImageService.getSuggestions(query);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  if (!isVisible || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-white/20 z-50 max-h-60 overflow-y-auto">
      <div className="p-2">
        <div className="text-xs text-gray-600 mb-2 px-3 py-1">Suggestions:</div>
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="w-full text-left px-3 py-2 hover:bg-white/50 rounded-lg transition-colors duration-200 text-gray-800 capitalize"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
