import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const State = ({ searchedCountry }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(searchedCountry); 
  }, [searchedCountry]);

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
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = searchedCountry
    ? data.filter(item => item.Country?.toLowerCase() === searchedCountry.toLowerCase())
    : data; 

  return (
    <div className="explore-container">
      <h1>Top States in {searchedCountry || "World"} for Tour Packages</h1> 
      {isLoading ? (
        <div>Loading data...</div>
      ) : filteredData.length === 0 ? (
        <div>No states found for this country.</div>
      ) : (
        <div className="slider-container">
          {filteredData.map((response, id) => (
            <div className="cards">
              <NavLink to={`/spot/${response.PackageName}`} state={{ spot: response.PackageName}}>
                <div className="card">
                  <img src={response.Images[1]} alt="" />
                  <h2>{response.State}</h2>
                  <p><span>Package Name</span> : {response.PackageName}</p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default State;
