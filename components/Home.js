// Home.js

import React, { useState, useEffect } from 'react';
import '../styles/styles.css';

const images = ['biriyani2.jpg', 'food1.jpg', 'fish2.jpg', 'burger3.jpg'];
const slideTexts = ['Delicious Biriyani', 'Tasty Food Plate', 'Fresh Fish Dish', 'Juicy Burger'];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="welcome-message">
        <h1>Welcome to Our Food Website</h1>
        <p>Discover the world of delicious and mouth-watering dishes!</p>
      </div>

      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mySlides fade ${index === currentSlide ? 'show' : ''}`}
          >
            <img src={`/${image}`} alt={`Slide ${index + 1}`} />
            <div className="slide-text">
              <h2>{slideTexts[index]}</h2>
              {/* Additional text or content can be added here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
