import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import '../assets/css/Places.css'
import Hotels_images from './Hotels_images'


const Places = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
            <Navbar />
            <div className="main-places">
                <div className="places-container">
                    <div className="lists">
                        <ul>
                            <li><NavLink to='/allplaces' className="nav-link1" activeClassName="active">all places in city name</NavLink></li>
                            <li><NavLink to='/placestovisit' className="nav-link1" activeClassName="active">places to visit</NavLink></li>
                            <li><NavLink to='/hotelsplaces' className="nav-link1" activeClassName="active">hotels</NavLink></li>
                            <li><NavLink to='/placespackages' className="nav-link1" activeClassName="active">packages</NavLink></li>
                        </ul>
                    </div>

                    <div className="city-container">
                        <div className="img1">
                            <h2>Mumbai, Maharashtra</h2>
                        </div>
                        <div className="right-side">
                            <div className="heading-text">
                                <h1>Mumbai</h1>
                            </div>
                            <div className="second-part">
                                <h2><span><i class="ri-map-pin-line"></i></span> Maharashtra . India</h2>
                                <h2>4 out of 20 Places to visit in Mumbai</h2>
                                <h1>Top Hotels in Mumbai</h1>
                                <Hotels_images />
                            </div>
                            <div className="btn">
                                <button><NavLink>View Hotels in Mumbai <i class="ri-external-link-line"></i></NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Places
