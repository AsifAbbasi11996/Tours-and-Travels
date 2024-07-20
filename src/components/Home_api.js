import React, { useState, useEffect } from 'react';
import '../assets/css/Home_api.css';

const Home_api = () => {

    const [data, setData] = useState([])

    const getData = async () => {
        const response = await fetch('https://api-5e1h.onrender.com/travel/country/all', {
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
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css" rel="stylesheet" />

            <div className="main-container">
                <div className="countries">
                    <h2 className='head_text'>Countries</h2>
                    <div className="slider-container">
                        {data.map((response, id) => {
                            return (
                                <div className="cards-container">
                                    <div className="card">
                                        <img src={response.SliderImages[0]} className="slider-image" />
                                        <h2>{response.Name}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div >
            </div >

        </>
    );
};

export default Home_api;