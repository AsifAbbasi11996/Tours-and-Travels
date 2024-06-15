import React, { useState } from 'react'
import '../assets/css/Home_Slider.css';
import { NavLink } from 'react-router-dom';

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

    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 4;

    const handleNext = () => {
        if (currentIndex + cardsToShow < cards.length) {
            setCurrentIndex(currentIndex + cardsToShow);
        }
    };

    const handlePrev = () => {
        if (currentIndex - cardsToShow >= 0) {
            setCurrentIndex(currentIndex - cardsToShow);
        }
    };

    const cards = [
        {
            image: Island,
            title: 'Beaches & Islands'
        },
        {
            image: Adventure,
            title: 'Adventure'
        },
        {
            image: HillStation,
            title: 'Hill Stations'
        },
        {
            image: Religious,
            title: 'Religious'
        },
        {
            image: Historical,
            title: 'Historical'
        },
        {
            image: WildLife,
            title: 'WildLife'
        },
        {
            image: Tokyo,
            title: 'Urban Experiences'
        },
        {
            image: Jordan,
            title: 'Unique Destinations'
        },

    ];

    const [currentIndex2, setCurrentIndex2] = useState(0);
    const cardsToShow2 = 4;

    const handleNext2 = () => {
        if (currentIndex2 + cardsToShow2 < cards2.length) {
            setCurrentIndex2(currentIndex2 + cardsToShow2);
        }
    };

    const handlePrev2 = () => {
        if (currentIndex2 - cardsToShow2 >= 0) {
            setCurrentIndex2(currentIndex2 - cardsToShow2);
        }
    };

    const cards2 = [
        {
            image: Maldives,
            title: 'Maldives'
        },
        {
            image: Bali,
            title: 'Bali'
        },
        {
            image: Kerala,
            title: 'Kerala'
        },
        {
            image: Manali,
            title: 'Manali'
        },
        {
            image: Ooty,
            title: 'Ooty'
        },
        {
            image: Srinagar,
            title: 'Sri Nagar'
        },
        {
            image: Goa,
            title: 'Goa'
        },
        {
            image: Darjeeling,
            title: 'Darjeeling'
        },
    ]


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />

            <div className="main-container">
                <div className="explore-places">
                    <h2 className='head_text'>Themes you can Explore</h2>
                    <div className="slider-container">
                        <button onClick={handlePrev} disabled={currentIndex === 0}><i class="ri-arrow-left-s-line"></i></button>
                        <div className="cards-container">
                            {cards.slice(currentIndex, currentIndex + cardsToShow).map((card, index) => (
                                <div className="card" key={index} style={card.style}>
                                    <NavLink to='/explore-themes'>
                                        <img src={card.image} className="slider-image" />
                                    </NavLink>
                                    <h2>{card.title}</h2>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNext} disabled={currentIndex + cardsToShow >= cards.length}><i class="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>

                <div className="honeymoon-packages">
                    <h2 className='head_text'>Honeymoon Packages</h2>
                    <div className="slider-container">
                        <button onClick={handlePrev2} disabled={currentIndex2 === 0}><i class="ri-arrow-left-s-line"></i></button>
                        <div className="cards-container">
                            {cards2.slice(currentIndex2, currentIndex2 + cardsToShow2).map((card, index) => (
                                <div className="card" key={index} style={card.style}>
                                    <NavLink>
                                        <img src={card.image} className="slider-image" />
                                        <h2>{card.title}</h2>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleNext2} disabled={currentIndex2 + cardsToShow2 >= cards2.length}><i class="ri-arrow-right-s-line"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home_Slider
