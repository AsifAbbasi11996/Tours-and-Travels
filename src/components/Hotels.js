import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/css/Hotels.css'
import Packages_Slider from './Packages_Slider'

const Hotels = () => {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />
            <Navbar />
            <div className="main-hotel">
                <div className="hotel-container">
                    <h2>Hotels & Places to Stay</h2>
                    <p>Top stays options for your travel needs</p>
                    <div className="search-bar">
                        <i class="ri-search-line"></i><input className='name' type="search" placeholder='Entry Country Name' />
                    </div>

                    <div className="search-bar">
                        <i class="ri-search-line"></i><input className='name' type="search" placeholder='Entry City Name' />
                    </div>

                    <input className='date' type="date" />
                    <input className='date' type="date" />
                    <select name="" id="">
                        <option value=""><i class="ri-user-fill"></i>1  Adults</option>
                        <option value=""><i class="ri-user-fill"></i>2  to 4 Adults</option>
                        <option value=""><i class="ri-user-fill"></i>4  to 8 Adults</option>
                        <option value=""><i class="ri-user-fill"></i>8  to 15 Adults</option>
                    </select>
                    <button><NavLink>Search for Your Dates</NavLink></button>
                </div>
            </div>
            <Packages_Slider />
            <Packages_Slider />
        </>
    )
}

export default Hotels
