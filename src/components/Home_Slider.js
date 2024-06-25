import React from 'react'
import '../assets/css/Home_Slider.css';
import { NavLink } from 'react-router-dom';

// card1 images
import Island from '../assets/images/island.avif'
import Religious from '../assets/images/religious.jpg'
import Historical from '../assets/images/Tajmahal.jpeg'
import WildLife from '../assets/images/WildLife.jpg'
import Nature from '../assets/images/Nature.jpg'
import Scenic from '../assets/images/Scenic.jpg'
import Maldives from '../assets/images/maldives.webp'
import Island2 from '../assets/images/island2.jpg'
import Family from '../assets/images/Family.webp'

const Home_Slider = () => {

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
            <div className="main-new_container">
                <div className="explore-places">
                    <h2 className='head_text'>Themes you can Explore</h2>
                    <div className="slider-container">
                        <div className="cards-container">
                            <div className="card">
                                <NavLink to={`/explore/Beach`} state={{ explore: "Beach" }}>
                                    <img src={Island} className="slider-image" />
                                </NavLink>
                                <h2>Beaches</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Family`} state={{ explore: "Family" }}>
                                    <img src={Family} className="slider-image" />
                                </NavLink>
                                <h2>Family</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Religious`} state={{ explore: "Religious" }}>
                                    <img src={Religious} className="slider-image" />
                                </NavLink>
                                <h2>Religious</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/honeymoon/`}>
                                    <img src={Maldives} className="slider-image" />
                                </NavLink>
                                <h2>Honeymoon</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Island`} state={{ explore: "Island" }}>
                                    <img src={Island2} className="slider-image" />
                                </NavLink>
                                <h2>Islands</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Historical`} state={{ explore: "Historical" }}>
                                    <img src={Historical} className="slider-image" />
                                </NavLink>
                                <h2>Historicals</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Wine & Wildlife`} state={{ explore: "Wine & Wildlife" }}>
                                    <img src={WildLife} className="slider-image" />
                                </NavLink>
                                <h2>WildLife Sanctuaries</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Nature`} state={{ explore: "Nature" }}>
                                    <img src={Nature} className="slider-image" />
                                </NavLink>
                                <h2>Nature</h2>
                            </div>
                            <div className="card">
                                <NavLink to={`/explore/Scenic`} state={{ explore: "Scenic" }}>
                                    <img src={Scenic} className="slider-image" />
                                </NavLink>
                                <h2>Scenic</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Slider