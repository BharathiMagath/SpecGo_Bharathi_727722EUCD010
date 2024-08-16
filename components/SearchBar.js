// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css'; // Import the CSS file

// Sample product data
const suggestions = [
  { label: 'Eyeglasses', route: '/eyeglass-product' },
  { label: 'Sunglasses', route: '/sunglass-product' },
  { label: 'Reading Glasses', route: '/reading-glasses-product' },
  { label: 'Contact Lenses', route: '/contact-lenses-product' },
  { label: 'Accessories', route: '/accessories-product' },
  { label: 'Computer Glasses', route: '/computer-glasses-product' }
];

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = suggestions.filter(suggestion =>
        suggestion.label.toLowerCase().startsWith(lowerCaseQuery)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (route) => {
    navigate(route);
    setQuery(''); // Clear the input after selection
    setFilteredSuggestions([]); // Clear suggestions
  };

  const handleSearch = () => {
    if (query.trim()) {
      const match = suggestions.find(suggestion =>
        suggestion.label.toLowerCase() === query.trim().toLowerCase()
      );
      if (match) {
        navigate(match.route);
      } else {
        // Handle case where no exact match is found
        console.log('No exact match found');
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for Eyeglasses, Sunglasses, etc."
      />
      <button onClick={handleSearch}>Search</button>
      {filteredSuggestions.length > 0 && (
        <ul className="suggestions-list">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion.route)}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
