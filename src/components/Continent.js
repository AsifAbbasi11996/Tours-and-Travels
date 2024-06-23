import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../assets/css/Continent.css';

const Continent = () => {
    const location = useLocation();
    const { continent } = location.state || {};

    const [continentData, setContinentData] = useState([]);
    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const continentResponse = await fetch('https://api-k7vh.onrender.com/travel/continent');
                const continentData = await continentResponse.json();
                setContinentData(continentData);
            } catch (error) {
                console.error('Error fetching continent data: ', error);
            }

            try {
                const countryResponse = await fetch('https://api-k7vh.onrender.com/travel/country/all');
                const countryData = await countryResponse.json();
                setCountryData(countryData);
            } catch (error) {
                console.error('Error fetching country data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className="continent-header">
                <h1>Best Countries to visit in {continent}</h1>
            </div>
            <h2>Choose the Country you want to visit</h2>
            <div className="main-container">
                <div className="countries">
                    <div className="slider-container">
                        {countryData.map((country) => (
                            country.Continent === continent && (
                                <div className="cards-container" key={country.Name}>
                                    <Link to={`/country/${country.Name}`} state={{ country: country.Name }}>
                                        <div className="card">
                                            <img src={country.SliderImages[0]} className="slider-image" alt={country.Name} />
                                            <h2>{country.Name}</h2>
                                        </div>
                                    </Link>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Continent;
