import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/css/Hotels.css'


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
                        <i class="ri-search-line"></i><input className='name' type="search" placeholder='Entry Country Name' required/>
                    </div>

                    <div className="search-bar">
                        <i class="ri-search-line"></i><input className='name' type="search" placeholder='Entry City Name' required/>
                    </div>

                    <input className='date' type="date" required/>
                    <input className='date' type="date" required/>
                    <select name="" id="">
                        <option value=""><i class="ri-user-fill"></i>1  Adults</option>
                        <option value=""><i class="ri-user-fill"></i>2  to 4 Adults</option>
                        <option value=""><i class="ri-user-fill"></i>4  to 8 Adults</option>
                        <option value=""><i class="ri-user-fill"></i>8  to 15 Adults</option>
                    </select>
                    <button><NavLink to='https://www.booking.com/'>Search for Your Dates</NavLink></button>
                </div>
            </div>
            
        </>
    )
}

export default Hotels
