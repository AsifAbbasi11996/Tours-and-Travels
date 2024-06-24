import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import '../assets/css/Honeymoon.css'


const Honeymoon = () => {

    const location = useLocation();
    const { explore } = location.state || {};

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://api-k7vh.onrender.com/travel/package/all', {
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
        console.log(explore);
    }

    useEffect(() => {
        console.log(explore)
        getData();
    }, [])

    return (
        <>
            <Navbar />
            <div className="explore-container">
            <h1>Visit this Honeymoon Packages</h1>
                <div className="slider-container">
                    {data.map((response, id) => {
                        if (response.Honeymoon) {
                            return (
                                <div className="cards">
                                    <div className="card">
                                        <img src={response.Images[1]} alt="" />
                                        <h2>{response.State}</h2>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </div>

            </div>
        </>
    )
}

export default Honeymoon
