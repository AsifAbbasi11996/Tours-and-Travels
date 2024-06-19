import React, { useEffect, useState } from 'react';
import './Admin.css'
const AddPackage = () => {
    const [packageId, setPackageId] = useState('');
    const [packageName, setPackageName] = useState('');
    const [images, setImages] = useState([]);
    const [imageInput, setImageInput] = useState('');
    const [day, setDay] = useState('');
    const [night, setNight] = useState('');
    const [price, setPrice] = useState('');
    const [spIncludes, setSpIncludes] = useState([]);
    const [flow, setFlow] = useState([]);
    const [shortItinerary, setShortItinerary] = useState([]);
    const [detailedItinerary, setDetailedItinerary] = useState([{ day: '', description: [''] }]);
    const [inclusion, setInclusion] = useState([]);
    const [exclusion, setExclusion] = useState([]);
    const [faq, setFaq] = useState([{ question: '', answer: '' }]);
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [place, setPlace] = useState([]);
    const [spot, setSpot] = useState('');
    const [months, setMonths] = useState([]);
    const [category, setCategory] = useState('');
    const [weather, setWeather] = useState('');
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    const getData = async () => {
        try {
            const response = await fetch("https://codify-api-541e.onrender.com/travel/package/all", {
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
        const packageData = {
            PackageId: packageId,
            PackageName: packageName,
            Images: images,
            DayNight: { Day: day, Night: night },
            Price: price,
            SPIncludes: spIncludes,
            Flow: flow,
            ShortItinerary: shortItinerary,
            DetailedItinerary: detailedItinerary,
            Inclusion: inclusion,
            Exclusion: exclusion,
            FAQ: faq,
            Country: country,
            State: state,
            Place: place,
            Spot: spot,
            Months: months,
            Category: category,
            Weather: weather,
        };
        try {
            const response = await fetch("https://codify-api-541e.onrender.com/travel/package/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(packageData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newPackage = await response.json();
            setData([...data, newPackage]);
            setCount(count + 1);
            // Reset form
            setPackageId('');
            setPackageName('');
            setImages([]);
            setDay('');
            setNight('');
            setPrice('');
            setSpIncludes([]);
            setFlow([]);
            setShortItinerary([]);
            setDetailedItinerary([{ day: '', description: [''] }]);
            setInclusion([]);
            setExclusion([]);
            setFaq([{ question: '', answer: '' }]);
            setCountry('');
            setState('');
            setPlace([]);
            setSpot('');
            setMonths([]);
            setCategory('');
            setWeather('');
        } catch (error) {
            console.error('Failed to add package:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleFaqChange = (index, e) => {
        const updatedFaq = faq.map((item, i) => (i === index ? { ...item, [e.target.name]: e.target.value } : item));
        setFaq(updatedFaq);
    };

    const handleDetailedItineraryChange = (index, e) => {
        const updatedDetailedItinerary = detailedItinerary.map((item, i) => (
            i === index ? { ...item, [e.target.name]: e.target.value } : item
        ));
        setDetailedItinerary(updatedDetailedItinerary);
    };

    const addFaqField = () => {
        setFaq([...faq, { question: '', answer: '' }]);
    };

    const addDetailedItineraryField = () => {
        setDetailedItinerary([...detailedItinerary, { day: '', description: [''] }]);
    };

    const addSliderImage = () => {
        setImages([...images, imageInput]);
        setImageInput('');
    };

    return (
        <section className="addpackage-main">
            <div className="addpackage-container">
                <h2>Add Package</h2>
                <form onSubmit={handleSubmit}>
                    <input type="number" value={packageId} onChange={(e) => setPackageId(e.target.value)} placeholder="Package ID" required />
                    <input type="text" value={packageName} onChange={(e) => setPackageName(e.target.value)} placeholder="Package Name" required />
                    <input type="text" value={imageInput} onChange={(e) => setImageInput(e.target.value)} placeholder="Image URL" />
                    <button type="button" onClick={addSliderImage}>Add Image</button>
                    <input type="number" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Days" required />
                    <input type="number" value={night} onChange={(e) => setNight(e.target.value)} placeholder="Nights" required />
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
                    <input type="text" value={spIncludes} onChange={(e) => setSpIncludes(e.target.value.split(','))} placeholder="SP Includes (comma separated)" />
                    <input type="text" value={flow} onChange={(e) => setFlow(e.target.value.split(','))} placeholder="Flow (comma separated)" />
                    <input type="text" value={shortItinerary} onChange={(e) => setShortItinerary(e.target.value.split(','))} placeholder="Short Itinerary (comma separated)" />
                    {detailedItinerary.map((item, index) => (
                        <div key={index}>
                            <input type="text" name="day" value={item.day} onChange={(e) => handleDetailedItineraryChange(index, e)} placeholder={`Day ${index + 1}`} required />
                            <input type="text" name="description" value={item.description} onChange={(e) => handleDetailedItineraryChange(index, e)} placeholder="Description" required />
                        </div>
                    ))}
                    <button type="button" onClick={addDetailedItineraryField}>Add Detailed Itinerary</button>
                    <input type="text" value={inclusion} onChange={(e) => setInclusion(e.target.value.split(','))} placeholder="Inclusion (comma separated)" required />
                    <input type="text" value={exclusion} onChange={(e) => setExclusion(e.target.value.split(','))} placeholder="Exclusion (comma separated)" required />
                    {faq.map((item, index) => (
                        <div key={index}>
                            <input type="text" name="question" value={item.question} onChange={(e) => handleFaqChange(index, e)} placeholder="Question" required />
                            <textarea name="answer" value={item.answer} onChange={(e) => handleFaqChange(index, e)} placeholder="Answer" required />
                        </div>
                    ))}
                    <button type="button" onClick={addFaqField}>Add FAQ</button>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} placeholder="State" required />
                    <input type="text" value={place} onChange={(e) => setPlace(e.target.value.split(','))} placeholder="Place (comma separated)" required />
                    <input type="text" value={spot} onChange={(e) => setSpot(e.target.value)} placeholder="Spot" required />
                    <input type="text" value={months} onChange={(e) => setMonths(e.target.value.split(','))} placeholder="Months (comma separated)" required />
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
                    <input type="text" value={weather} onChange={(e) => setWeather(e.target.value)} placeholder="Weather" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="addpackage-content">
                <h2>Total Packages: {count}</h2>
                <table className="border">
                    <thead>
                        <tr>
                            <th>Package ID</th>
                            <th>Package Name</th>
                            <th>Images</th>
                            <th>Days</th>
                            <th>Nights</th>
                            <th>Price</th>
                            <th>SP Includes</th>
                            <th>Flow</th>
                            <th>Short Itinerary</th>
                            <th>Detailed Itinerary</th>
                            <th>Inclusion</th>
                            <th>Exclusion</th>
                            <th>FAQ</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>Place</th>
                            <th>Spot</th>
                            <th>Months</th>
                            <th>Category</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((res, id) => (
                            <tr key={id}>
                                <td>{res.PackageId}</td>
                                <td>{res.PackageName}</td>
                                <td>{res.Images.map((img, i) => (
                                    <img key={i} src={img} alt={`package-${i}`} width="50" />
                                ))}</td>
                                <td>{res.DayNight.Day}</td>
                                <td>{res.DayNight.Night}</td>
                                <td>{res.Price}</td>
                                <td>{res.SPIncludes.join(', ')}</td>
                                <td>{res.Flow.join(', ')}</td>
                                <td>{res.ShortItinerary.join(', ')}</td>
                                <td>{res.DetailedItinerary.map((di, i) => (
                                    <div key={i}>
                                        <strong>Day {di.Day}</strong>
                                        <p>{di.Description.join(', ')}</p>
                                    </div>
                                ))}</td>
                                <td>{res.Inclusion.join(', ')}</td>
                                <td>{res.Exclusion.join(', ')}</td>
                                <td>{res.FAQ.map((faq, i) => (
                                    <div key={i}>
                                        <strong>Q: {faq.Question}</strong>
                                        <p>A: {faq.Answer}</p>
                                    </div>
                                ))}</td>
                                <td>{res.Country}</td>
                                <td>{res.State}</td>
                                <td>{res.Place.join(', ')}</td>
                                <td>{res.Spot}</td>
                                <td>{res.Months.join(', ')}</td>
                                <td>{res.Category}</td>
                                <td>{res.Weather}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AddPackage;
