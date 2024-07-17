// src/components/RateMovieButton.js
import React, { useState } from 'react';

const RateMovieButton = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    onRate(value);
    alert(`You rated this movie ${value} stars!`);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} Star
        </button>
      ))}
    </div>
  );
};

export default RateMovieButton;
