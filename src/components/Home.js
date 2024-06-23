import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/Home.css';
import Home_Slider from './Home_Slider';
import person from '../assets/images/person.png';
import newyork from '../assets/images/newyork.webp';
import mumbai from '../assets/images/mumbai.jpeg';

const Home = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [selectedContinent, setSelectedContinent] = useState('');

    useEffect(() => {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); 
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;

        setCurrentDate(formattedDate);
    }, []);

    const handleSelectChange = (event) => {
        setSelectedContinent(event.target.value);
    };

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />

            <div className="main">
                <div className="home-container">
                    <div className="left">
                        <h3>Safe Journey</h3>
                        <h1>Make Your <span>Holiday</span> Memorable</h1>
                        <p>Travor is one of the most popular Travel
                            agency for those who want to explore the
                            world and try to make adventure.</p>
                        <button><NavLink to={`/continent/${selectedContinent}`} state={{ continent: selectedContinent }}>Plan Trip</NavLink></button>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img src={person} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="grid">
                        <p>Destination</p>
                        <select name="destination" id="destination" onChange={handleSelectChange}>
                            <option value="">Select Destination</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                            <option value="Africa">Africa</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>

                    <div className="grid">
                        <p>Date</p>
                        <input type="date" id='date-input' name='date-input' value={currentDate} onChange={(e) => setCurrentDate(e.target.value)} />
                    </div>

                    <div className="grid">
                        <p>Guest</p>
                        <select name="guests" id="guests">
                            <option value="">Number of Guest</option>
                            <option value="1">1</option>
                            <option value="2-4">2 to 4</option>
                            <option value="4-8">4 to 8</option>
                            <option value="8-12">8 to 12</option>
                            <option value="above-12">Above 12</option>
                        </select>
                    </div>

                    <div className="btn">
                        <button><NavLink to={`/continent/${selectedContinent}`} state={{ continent: selectedContinent }}>Explore Now</NavLink></button>
                    </div>
                </div>

                <h2>Choose the continent of the place you want to visit</h2>
                <div className="places">
                    <div className="first">
                        <h2>Package Offers</h2>
                        <ul>
                            <li className='hotdeals'>Hot Deals <span><i class="ri-arrow-right-s-line"></i></span></li>
                            <li><NavLink to='/continent/Asia' state={{ continent: "Asia" }}>Asia</NavLink></li>
                            <li><NavLink to='/continent/Australia' state={{ continent: "Australia" }}>Australia</NavLink></li>
                            <li><NavLink to='/continent/Europe' state={{ continent: "Europe" }}>Europe</NavLink></li>
                            <li><NavLink to='/continent/North America' state={{ continent: "North America" }}>North America</NavLink></li>
                            <li><NavLink to='/continent/South America' state={{ continent: "South America" }}>South America</NavLink></li>
                            <li><NavLink to='/continent/Africa' state={{ continent: "Africa" }}>Africa</NavLink></li>
                        </ul>
                    </div>
                    <div className="second">
                        <div className="city city1">
                            <div className="img">
                                <img src={newyork} alt="" />
                            </div>
                            <div className="text">
                                <h3>New York City</h3>
                                <p><span><i class="ri-map-pin-line"></i></span>U.S.A</p>
                                <NavLink to='/spot/New York City and Hudson Valley Getaway' state={{ spot: 'New York City and Hudson Valley Getaway' }}><button><span><i class="ri-play-list-add-line"></i></span>Book Now</button></NavLink>
                            </div>
                        </div>
                        <div className="city city2">
                            <div className="text">
                                <h3>Mumbai City</h3>
                                <p><span><i class="ri-map-pin-line"></i></span>India</p>
                                <NavLink to='/spot/Mumbai City Exploration' state={{ spot: 'Mumbai City Exploration' }}><button><span><i class="ri-play-list-add-line"></i></span>Book Now</button></NavLink>
                            </div>
                            <div className="img">
                                <img src={mumbai} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <div className="country country1">
                            <NavLink to='/spot/Dubai City Tour' state={{ spot: 'Dubai City Tour'}}>
                                <div className="img">
                                    <p className='citylocation'><span><i class="ri-map-pin-line"></i></span>UAE</p>
                                    <div className="rating">
                                        <p>Dubai</p>
                                        <p><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i><i class="ri-star-line"></i></p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        <div className="country country2">
                            <NavLink to='/spot/Bali Beach Paradise' state={{spot: 'Bali Beach Paradise'}}>
                                <div className="img">
                                    <p className='citylocation'><span><i class="ri-map-pin-line"></i></span>Thailand</p>
                                    <div className="rating">
                                        <p>Bali</p>
                                        <p><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-half-line"></i></p>
                                        <button>Book Now</button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>


                <Home_Slider />
            </div>
        </>
    )
}

export default Home;

