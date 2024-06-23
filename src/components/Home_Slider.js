import React from 'react'
import '../assets/css/New.css';
import { NavLink} from 'react-router-dom';

// card1 images
import Island from '../assets/images/island.avif'
import Adventure from '../assets/images/adv.jpg'
import HillStation from '../assets/images/hill_station.jpg'
import Religious from '../assets/images/religious.jpg'
import Historical from '../assets/images/Tajmahal.jpeg'
import WildLife from '../assets/images/WildLife.jpg'
import Nature from '../assets/images/Nature.jpg'
import Scenic from '../assets/images/Scenic.jpg'
import Maldives from '../assets/images/maldives.webp'
import Island2 from '../assets/images/island2.jpg'
// import Bali from '../assets/images/bali.webp'
// import Kerala from '../assets/images/Kerala.jpg'
// import Manali from '../assets/images/Manali.webp'
// import Ooty from '../assets/images/ooty.jpeg'
// import Srinagar from '../assets/images/Srinagar.webp'
// import Goa from '../assets/images/Goa.avif'
// import Darjeeling from '../assets/images/darjeeling.jpeg'


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
                                        <NavLink to={`/explore/Beach`} state={{explore:"Beach"}}>
                                                <img src={Island} className="slider-image" />
                                            </NavLink>
                                            <h2>Beaches</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Adventure`}>
                                                <img src={Adventure} className="slider-image" />
                                            </NavLink>
                                            <h2>Adventures</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/`}>
                                                <img src={HillStation} className="slider-image" />
                                            </NavLink>
                                            <h2>Hill Stations</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/honeymoon/`}>
                                                <img src={Maldives} className="slider-image" />
                                            </NavLink>
                                            <h2>Honeymoon</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Island`} state={{ explore:"Island"}}>
                                                <img src={Island2} className="slider-image" />
                                            </NavLink>
                                            <h2>Island</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Historical`} state={{explore:"Historical"}}>
                                                <img src={Historical} className="slider-image" />
                                            </NavLink>
                                            <h2>Historical</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Wine & Wildlife`} state={{explore:"Wine & Wildlife"}}>
                                                <img src={WildLife} className="slider-image" />
                                            </NavLink>
                                            <h2>WildLife Sanctuary</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Nature`} state={{explore:"Nature"}}>
                                                <img src={Nature} className="slider-image" />
                                            </NavLink>
                                            <h2>Nature</h2>
                                        </div>
                                        <div className="card">
                                            <NavLink to={`/explore/Scenic`} state={{explore: "Scenic"}}>
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