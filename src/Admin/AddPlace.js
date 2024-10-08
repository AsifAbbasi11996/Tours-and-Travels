import React, { useEffect, useState } from 'react';
import './Admin.css'
import { useLocation, useNavigate } from 'react-router-dom';
const AddPlace = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [about, setAbout] = useState('');
    const [travelEssential, setTravelEssential] = useState('');
    const [sliderImages, setSliderImages] = useState([]);
    const [imageInput, setImageInput] = useState('');
    const [description, setDescription] = useState('');
    const [faq, setFaq] = useState([{ question: '', answer: '' }]);
    const [mustKnown, setMustKnown] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();
    const condition = location.state || {};

    const validate = () => {
        if (condition !== "Pass") {
            navigate(`/adminlogin`);
        }
    };

    useEffect(() => {
        validate();
    }, [condition]);
    const getData = async () => {
        try {
            const response = await fetch("https://api-5e1h.onrender.com/travel/place/all", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const resData = await response.json();
            setData(resData);
            setCount(resData.length);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const placeData = {
            Name: name,
            Country: country,
            State: state,
            About: about,
            TravelEssential: travelEssential,
            SliderImages: sliderImages,
            Description: description,
            FAQ: faq,
            MustKnown: mustKnown,
        };
        try {
            const response = await fetch("https://api-5e1h.onrender.com/travel/place/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(placeData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newPlace = await response.json();
            setData([...data, newPlace]);
            setCount(count + 1);
            // Reset form
            setName('');
            setCountry('');
            setState('');
            setAbout('');
            setTravelEssential('');
            setSliderImages([]);
            setDescription('');
            setFaq([{ question: '', answer: '' }]);
            setMustKnown('');
        } catch (error) {
            console.error('Failed to add place:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleFaqChange = (index, e) => {
        const updatedFaq = faq.map((item, i) => (i === index ? { ...item, [e.target.name]: e.target.value } : item));
        setFaq(updatedFaq);
    };

    const addFaqField = () => {
        setFaq([...faq, { question: '', answer: '' }]);
    };

    const addSliderImage = () => {
        setSliderImages([...sliderImages, imageInput]);
        setImageInput('');
    };

    return (
        <section className="addplace-main">
            <div className="addplace-container">
                <h2>Add Place</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
                    <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="About" required />
                    <input type="text" value={travelEssential} onChange={(e) => setTravelEssential(e.target.value)} placeholder="Travel Essential" required />
                    <input type="text" value={imageInput} onChange={(e) => setImageInput(e.target.value)} placeholder="Slider image URL" />
                    <button type="button" onClick={addSliderImage}>Add Image</button>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required></textarea>
                    {faq.map((item, index) => (
                        <div key={index}>
                            <input type="text" name="question" value={item.question} onChange={(e) => handleFaqChange(index, e)} placeholder="Question" required />
                            <textarea name="answer" value={item.answer} onChange={(e) => handleFaqChange(index, e)} placeholder="Answer" required></textarea>
                        </div>
                    ))}
                    <button type="button" onClick={addFaqField}>Add FAQ</button>
                    <input type="text" value={mustKnown} onChange={(e) => setMustKnown(e.target.value)} placeholder="Must Known" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="addplace-content">
                <h2>Total Places: {count}</h2>
                <table className="border">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>About</th>
                            <th>Travel Essential</th>
                            <th>Slider Images</th>
                            <th>Description</th>
                            <th>FAQ</th>
                            <th>Must Known</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((res, id) => (
                            <tr key={id}>
                                <td>{res.Name}</td>
                                <td>{res.Country}</td>
                                <td>{res.State}</td>
                                <td>{res.About}</td>
                                <td>{res.TravelEssential}</td>
                                <td>{res.SliderImages.map((img, i) => (
                                    <img key={i} src={img} alt={`place-${i}`} width="50" />
                                ))}</td>
                                <td>{res.Description}</td>
                                <td>{res.FAQ.map((faq, i) => (
                                    <div key={i}>
                                        <strong>Q: {faq.Question}</strong>
                                        <p>A: {faq.Answer}</p>
                                    </div>
                                ))}</td>
                                <td>{res.MustKnown}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AddPlace;
