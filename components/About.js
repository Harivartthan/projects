// src/components/About.js
import React from 'react';

import '../styles/styles.css';

const About = () => {
  return (
    <div className="about-container">
      <img src="/Worldmap.jpg" alt="World Map" className="about-image" />
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          
Welcome to our delectable world of culinary delights! At our food website, we curate a diverse range of mouthwatering recipes, cooking tips, and gastronomic inspiration to tantalize your taste buds. Whether you're a seasoned chef or a kitchen novice, our platform offers something for everyone. Explore our collection of sumptuous dishes, from global cuisines to local favorites, and embark on a culinary journey that celebrates the joy of good food. Join our community of food enthusiasts, and let's savor the art of cooking together!
        </p>
      </div>
    </div>
  );
};

export default About;
