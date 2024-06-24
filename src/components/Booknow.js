import React, { useState } from 'react';
import '../assets/css/Booknow.css'


const Booknow = () => {
  const [travelDates, setTravelDates] = useState('');
  const [returnDates, setReturnDates] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!travelDates || !returnDates || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Booking details:', {
      travelDates,
      returnDates,
      adults,
      children,
      email,
    });


    setTravelDates('');
    setReturnDates('');
    setAdults(1);
    setChildren(0);
    setEmail('');
  };

  return (
    <div className="booknow-container">
      <h1>Book Your Dream Trip</h1>
      <form action="" method="post" className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Enter Your Name :</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label for="travel-dates">Travel Dates :</label>
          <input
            type="date"
            name="travel-dates"
            id="travel-dates"
            value={travelDates}
            onChange={(e) => setTravelDates(e.target.value)}
            required
          /> <br />
          <input
            type="date"
            name="return-date"
            id="return-date"
            value={returnDates}
            onChange={(e) => setReturnDates(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="adults">Number of Adults :</label>
          <select name="adults" id="adults" value={adults} onChange={(e) => setAdults(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
        <div className="form-group">
          <label for="children">Number of Children (Ages 2-12) :</label>
          <select name="children" id="children" value={children} onChange={(e) => setChildren(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </div>
        <div className="form-group">
          <label for="email">Email Address :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Find Your Perfect Trip</button>
      </form>
    </div>
  );
};

export default Booknow
