import React, { useEffect, useState } from 'react';
import './Admin.css';
import { useLocation, useNavigate } from 'react-router-dom';

const AddCountry = () => {
    const [name, setName] = useState('');
    const [region, setRegion] = useState('');
    const [startingPackage, setStartingPackage] = useState('');
    const [continent, setContinent] = useState('');
    const [about, setAbout] = useState('');
    const [travelEssential, setTravelEssential] = useState('');
    const [sliderImages, setSliderImages] = useState([{ url: '' }]);
    const [description, setDescription] = useState('');
    const [faq, setFaq] = useState([{ question: '', answer: '' }]);
    const [mustKnown, setMustKnown] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);
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
            const response = await fetch("http://localhost:8000/travel/country/all", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
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

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sliderImageUrls = sliderImages.map(item => item.url);
        const isValidFaq = faq.every(item => item.question.trim() !== '' && item.answer.trim() !== '');

        if (!isValidFaq) {
            console.error('FAQ items must have both question and answer filled.');
            return;
        }

        const countryData = {
            Name: name,
            Region: region,
            StartingPackage: startingPackage,
            Continent: continent,
            About: about,
            TravelEssential: travelEssential,
            SliderImages: sliderImageUrls,
            Description: description,
            FAQ: faq,
            MustKnown: mustKnown,
        };

        try {
            const response = await fetch("http://localhost:8000/travel/country/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(countryData),
            });

            if (!response.ok) {
                throw new Error(`Failed to add country: ${response.status} - ${response.statusText}`);
            }

            const newCountry = await response.json();
            setData([...data, newCountry]);
            setCount(count + 1);

            // Reset form fields
            setName('');
            setRegion('');
            setStartingPackage('');
            setContinent('');
            setAbout('');
            setTravelEssential('');
            setSliderImages([{ url: '' }]);
            setDescription('');
            setFaq([{ question: '', answer: '' }]);
            setMustKnown('');

            console.log('Country added successfully:', newCountry);
            alert('Country added successfully!');
        } catch (error) {
            console.error('Failed to add country:', error.message);
            setError('Failed to add country. Please try again.');
            alert('Failed to add country. Please try again.');
        }
    };

    const handleFaqChange = (index, e) => {
        const updatedFaq = faq.map((item, i) => (i === index ? { ...item, [e.target.name]: e.target.value } : item));
        setFaq(updatedFaq);
    };

    const addFaqField = () => {
        setFaq([...faq, { question: '', answer: '' }]);
    };

    const handleSliderImageChange = (index, e) => {
        const updatedSliderImages = sliderImages.map((item, i) => (i === index ? { ...item, url: e.target.value } : item));
        setSliderImages(updatedSliderImages);
    };

    const addSliderImageField = () => {
        setSliderImages([...sliderImages, { url: '' }]);
    };

    return (
        <section className="addcountry-main">
            <div className="addcountry-container">
                <h2>Add Country</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                    <input type="text" value={region} onChange={(e) => setRegion(e.target.value)} placeholder="Region" required />
                    <input type="text" value={startingPackage} onChange={(e) => setStartingPackage(e.target.value)} placeholder="Starting Package" required />
                    <input type="text" value={continent} onChange={(e) => setContinent(e.target.value)} placeholder="Continent" required />
                    <input type="text" value={about} onChange={(e) => setAbout(e.target.value)} placeholder="About" required />
                    <input type="text" value={travelEssential} onChange={(e) => setTravelEssential(e.target.value)} placeholder="Travel Essential" required />
                    {sliderImages.map((item, index) => (
                        <div key={index}>
                            <input type="text" value={item.url} onChange={(e) => handleSliderImageChange(index, e)} placeholder="Slider Image URL" required />
                        </div>
                    ))}
                    <button type="button" onClick={addSliderImageField}>Add Image</button>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
                    {faq.map((item, index) => (
                        <div key={index} className='faq'>
                            <textarea type="text" name="question" value={item.question} onChange={(e) => handleFaqChange(index, e)} placeholder="Question" required />
                            <textarea name="answer" value={item.answer} onChange={(e) => handleFaqChange(index, e)} placeholder="Answer" required />
                        </div>
                    ))}
                    <button type="button" onClick={addFaqField}>Add FAQ</button>
                    <input type="text" value={mustKnown} onChange={(e) => setMustKnown(e.target.value)} placeholder="Must Known" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="addcountry-content">
                <h2>Total Countries: {count}</h2>
                <table className="border">
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Region</th>
                            <th>Starting Package</th>
                            <th>Continent</th>
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
                                <td>{id + 1}</td>
                                <td>{res.Name}</td>
                                <td>{res.Region}</td>
                                <td>{res.StartingPackage}</td>
                                <td>{res.Continent}</td>
                                <td>{res.About}</td>
                                <td>{res.TravelEssential}</td>
                                <td>{res.SliderImages.map((img, i) => (
                                    <img key={i} src={img} alt={`slider-${i}`} width="50" />
                                ))}</td>
                                <td>{res.Description}</td>
                                <td>{res.FAQ.map((faqItem, i) => (
                                    <div key={i}>
                                        <strong>Q: {faqItem.Question}</strong>
                                        <p>A: {faqItem.Answer}</p>
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

export default AddCountry;
