// src/components/FeedbackForm.js
import React, { useState } from 'react';
import '../styles/styles.css'; // Import the global styles

const FeedbackForm = () => {
  const [rating, setRating] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send feedback to the server
    console.log(`Submitted feedback with rating: ${rating}`);

    // Show an alert on successful submission
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="rating-container">
          {[1, 2, 3, 4, 5].map((value) => (
            <label key={value} className={`star-label ${rating === value ? 'selected' : ''}`}>
              <input
                type="radio"
                name="rating"
                value={value}
                checked={rating === value}
                onChange={() => handleRatingChange(value)}
              />
              ★
            </label>
          ))}
        </div>
        <div className="description-container">
          <span className="description">1 - Not Bad</span>
          <span className="description">2 - Okay</span>
          <span className="description">3 - Good</span>
          <span className="description">4 - Very Good</span>
          <span className="description">5 - Excellent</span>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;

