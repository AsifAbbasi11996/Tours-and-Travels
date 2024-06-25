import React from 'react';
import Navbar from './Navbar';
import '../assets/css/About.css'; 

const About = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <Navbar />
      <div className="about-container">
        <div className="about-us">
          <h2>About Us</h2>
          <p>
          We're more than just a travel agency; we're a community of passionate explorers driven by a love of adventure and discovery. We believe travel is a transformative experience, and we're dedicated to crafting itineraries that unlock unique destinations and ignite your wanderlust.
          </p>
          <p>
            We are a team of passionate travel enthusiasts dedicated to creating
            unforgettable experiences for our clients. We believe that travel is
            more than just visiting a destination; it's about immersing yourself in
            the local culture, exploring hidden gems, and creating memories that
            last a lifetime.
          </p>
        </div>
        <div className="our-values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <i className="ri-customer-service-line"></i>
              Exceptional Customer Service
            </li>
            <li>
              <i className="ri-earth-line"></i>
              Sustainable Travel Practices
            </li>
            <li>
              <i className="ri-user-settings-line"></i>
              Personalized Travel Experiences
            </li>
            <li>
              <i className="ri-secure-line"></i>
              Safety and Security
            </li>
            <li>
              <i className="ri-compass-fill"></i>
              Unforgettable Adventures
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
