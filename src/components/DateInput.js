import React, { useState, useEffect } from 'react';
import '../assets/css/DateInput.css'

const DateInput = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // Get the current date in YYYY-MM-DD format
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    // Set the current date
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <label htmlFor="date-input">Date:</label>
      <input 
        type="date" 
        id="date-input" 
        name="date-input" 
        value={currentDate} 
        onChange={(e) => setCurrentDate(e.target.value)} 
      />
    </div>
  );
};

export default DateInput;
