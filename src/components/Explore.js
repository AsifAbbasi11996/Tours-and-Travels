import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { useLocation, NavLink } from 'react-router-dom'
import '../assets/css/Explore.css'

const Explore = () => {

    const location = useLocation();
    const { explore } = location.state || {};

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
                <h1>Visit this {explore} places</h1>
                <div className="slider-container">
                    {data.map((response, id) => {
                        if (response.Category === explore) {
                            return (
                                <div className="cards">
                                    <NavLink to={`/spot/${response.PackageName}`} state={{ spot: response.PackageName }}>
                                        <div className="card">
                                            <img src={response.Images[1]} alt="" />
                                            <h2>{response.State}</h2>
                                            <p><span>Package Name</span> : {response.PackageName}</p>
                                            <p><span>Country : </span>{response.Country}</p>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        }
                    })}
                </div>

            </div>
        </>
    )
}

export default Explore
