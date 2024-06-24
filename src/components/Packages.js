import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Packages.css';
import Navbar from './Navbar';
import State from './State';

const Packages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false); 

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch('https://api-k7vh.onrender.com/travel/package/all', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });
      const responsedata = await response.json();
      setData(responsedata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); 
    setShowSuggestions(e.target.value.length > 0); 
  };

  const handleSearchSubmit = () => {
    const foundItem = data.find(item => item.Name?.toLowerCase() === searchTerm.toLowerCase());
    if (foundItem) {
      navigate('/detail', { state: { spot: foundItem.Name } });
    } else {
      alert('Country not found');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false); 
  };

  const filteredSuggestions = data.filter(item =>
    item.Country?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const uniqueSet = new Set(filteredSuggestions.map(item => item.Country));
  const uniqueSuggestions = Array.from(uniqueSet); 

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
      <Navbar />
      <div className="main-packages">
        <div className="img">
          <h1>Holiday Tour Packages</h1>
          <p>Get the Best Travel & Tour Package Deals via 1000+ Trusted Agents</p>
          <div className="search-bar">
            <i className="ri-search-line" onClick={handleSearchSubmit}></i>
            <input
              type="search"
              placeholder="Search ' Country ' "
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
            />
            {showSuggestions && uniqueSuggestions.length > 0 && ( 
              <ul className="suggestions">
                {uniqueSuggestions.map((suggestion, index) => (
                  <li key={index}>
                    <button onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="packages-container">
          <State searchedCountry={searchTerm} />
        </div>
      </div>
    </div>
  );
};

export default Packages;
