import React from 'react';
import './FancyText.css';

const FancyText = ({ title }) => {
  return (
    <div className="fancy-text">
      <h1>{title}</h1>
    </div>
  );
};

export default FancyText;
