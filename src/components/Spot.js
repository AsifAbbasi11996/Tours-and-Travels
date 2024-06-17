import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/css/Spot.css'

const Spot = () => {

    const location = useLocation();
    const { spot } = location.state || {};

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://codify-api-541e.onrender.com/travel/package/all', {
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
        console.log(spot);
    }

    useEffect(() => {
        console.log(spot)
        getData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="spot-container">
                <h2>Your {spot} spots for Tour Packages</h2>
                <div className="slider-container">
                    {data.map((response, id) => {
                        if (response.PackageName === spot) {
                            return (
                                <div className="cards-container">
                                    <div className="card">
                                        <div className="img">
                                            <img src={response.Images[0]} className="slider-image" />
                                            <h2>{response.State}</h2>
                                            <h2 className='country'>{response.Country}</h2>
                                        </div>
                                        <div className="details">
                                            <p><strong>Days :</strong> {response.DayNight.Day}</p>
                                            <p><strong>Nights :</strong> {response.DayNight.Night}</p>
                                            <p><strong>Places :</strong> {response.Place.join(', ')}</p>
                                            <p><strong>Spot :</strong> {response.Spot}</p>
                                            <p><strong>Price :</strong> ₹{response.Price}</p>
                                            <p><strong>Includes :</strong> {response.SPIncludes.join(', ')}</p>
                                            <p className="category"><strong>Category :</strong> {response.Category}</p>
                                            <p><strong>Weather :</strong> {response.Weather}</p>
                                        </div>
                                    </div>
                                    <div className="more-details" >
                                        <div className="flow-short">
                                            <div className="flex">
                                                <p><span>Flow :</span></p>
                                                <ul>
                                                    {response.Flow.map((step, index) => (
                                                        <li> <p key={index}>{step}</p></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex">
                                                <p><span>Short Itinerary : </span></p> {response.ShortItinerary.map((step, index) => (
                                                    <p className='short-itinerary' key={index}>
                                                        {step}</p>

                                                ))}
                                            </div>
                                            <div className="flex">
                                                <p><span>Inclusion :</span></p>
                                                <ul>
                                                    {response.Inclusion.map((step, index) => (
                                                        <li> <p key={index}>{step}</p></li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex">
                                                <p><span>Exclusion : </span></p> <ul>
                                                    {response.Exclusion.map((step, index) => (
                                                        <li> <p key={index}>{step}</p></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='margin'><span>Detailed Itinerary : </span></p>
                                            {response.DetailedItinerary.map((day, index) => (
                                                <div key={day._id} className="itinerary-day">
                                                    <h3>{day.Day}</h3>
                                                    <ul>
                                                        {day.Description.map((desc, descIndex) => (
                                                            <li key={descIndex}>{desc}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className='questions'>
                                            <p className='margin'><span>FAQ : </span></p>
                                            {response.FAQ.map((faq) => (
                                                <div key={faq._id} className="faq">
                                                    <p><strong>Question :</strong> {faq.Question}</p>
                                                    <p><strong>Answer :</strong> {faq.Answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </>
    )
}

export default Spot




