import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/css/Continent.css'

const Continent = () => {
    const location = useLocation();
    const { continent } = location.state || {};

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://codify-api-541e.onrender.com/travel/country/all', {
            method: 'GET',
            header: {
                "Content-type": "application/json"
            }
        })

        const responsedata = await response.json();

        if (!responsedata) {
            console.log('error')
        } else {
            console.log(responsedata);
            setData(responsedata);
        }
        console.log(continent);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Navbar />
            <h1>Best Countries to visit in {continent}</h1>
            <h2>Choose the Country of the place you want to visit</h2>
            <div className="main-container">
                <div className="countries">
                    <div className="slider-container">
                        {data.map((response, id) => {
                            if (response.Continent === continent) {
                                return (
                                    <div className="cards-container">
                                        <Link to={`/country/${response.Name}`} state={{ country: response.Name }}>
                                            <div className="card">
                                                <img src={response.SliderImages[1]} className="slider-image" />
                                                <h2>{response.Name}</h2>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div >
            </div >
        </>
    )
}

export default Continent
