import React, { useEffect, useState } from 'react'
import '../assets/css/New.css';
import { NavLink, useLocation } from 'react-router-dom';

// card1 images
import Island from '../assets/images/island.avif'
import Adventure from '../assets/images/adv.jpg'
import HillStation from '../assets/images/hill_station.jpg'
import Religious from '../assets/images/religious.jpg'
import Historical from '../assets/images/Tajmahal.jpeg'
import WildLife from '../assets/images/WildLife.jpg'
import Tokyo from '../assets/images/Tokyo.jpeg'
import Jordan from '../assets/images/Jordan.webp'

// card2 images
import Maldives from '../assets/images/maldives.webp'
import Bali from '../assets/images/bali.webp'
import Kerala from '../assets/images/Kerala.jpg'
import Manali from '../assets/images/Manali.webp'
import Ooty from '../assets/images/ooty.jpeg'
import Srinagar from '../assets/images/Srinagar.webp'
import Goa from '../assets/images/Goa.avif'
import Darjeeling from '../assets/images/darjeeling.jpeg'


const Home_Slider = () => {

    const location = useLocation()
    const { category } = location.state || {}
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
        console.log(category)
    }

    useEffect(() => {
        getData(category);
    }, [])

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
            <div className="main-new_container">
                <div className="explore-places">
                    <h2 className='head_text'>Themes you can Explore</h2>
                    <div className="slider-container">
                        {data.map((response, id) => {
                            if (response.Category === category) {
                                return (
                                    <div className="cards-container">
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Island} className="slider-image" />
                                            </NavLink>
                                            <h2>Beaches and Islands</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Adventure} className="slider-image" />
                                            </NavLink>
                                            <h2>Adventures</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={HillStation} className="slider-image" />
                                            </NavLink>
                                            <h2>Hill Stations</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Religious} className="slider-image" />
                                            </NavLink>
                                            <h2>Religious</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Historical} className="slider-image" />
                                            </NavLink>
                                            <h2>Historical</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={WildLife} className="slider-image" />
                                            </NavLink>
                                            <h2>WildLife Sanctuary</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Tokyo} className="slider-image" />
                                            </NavLink>
                                            <h2>Urban Experiences</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/${response.Category}`} state={{ explore: response.Category }}>
                                                <img src={Jordan} className="slider-image" />
                                            </NavLink>
                                            <h2>Unique Destinations</h2>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="honeymoon-packages">
                    <h2 className='head_text'>Honeymoon Packages</h2>
                    <div className="slider-container">
                        <div className="cards-container">
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Maldives} className="slider-image" />
                                </NavLink>
                                <h2>Maldives</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Bali} className="slider-image" />
                                </NavLink>
                                <h2>Bali</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Kerala} className="slider-image" />
                                </NavLink>
                                <h2>Kerala</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Manali} className="slider-image" />
                                </NavLink>
                                <h2>Manali</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Ooty} className="slider-image" />
                                </NavLink>
                                <h2>Ooty</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Srinagar} className="slider-image" />
                                </NavLink>
                                <h2>Sri Nagar</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Goa} className="slider-image" />
                                </NavLink>
                                <h2>Goa</h2>
                            </div>
                            <div className="card">
                                <NavLink to='/explore-themes'>
                                    <img src={Darjeeling} className="slider-image" />
                                </NavLink>
                                <h2>Darjeeling</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Slider