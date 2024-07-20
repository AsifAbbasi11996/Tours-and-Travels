import React, { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import '../assets/css/Country.css'

const Country = () => {

    const location = useLocation();
    const { country } = location.state || {};

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://api-5e1h.onrender.com/travel/package/all', {
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
        console.log(country);
    }

    useEffect(() => {
        console.log(country)
        getData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="country-container">
                <h2>Top Cities in {country} for Tour Packages</h2>
                <div className="slider-container">
                    {data.map((response, id) => {
                        if (response.Country === country) {
                            return (
                                <div className="cards-container">
                                    <Link to={`/spot/${response.PackageName}`} state={{ spot: response.PackageName}}>
                                        <div className="card">
                                            <img src={response.Images[0]} className="slider-image" />
                                            <h2>{response.State}</h2>
                                            <p><span>Package Name</span> : {response.PackageName}</p>
                                            <p><span>Spot</span> : {response.Spot}</p>
                                            <p className='category'><span>Category :</span> {response.Category}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default Country
