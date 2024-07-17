// src/components/MovieSelector.js
import React from 'react';

const MovieSelector = ({ movies, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a movie</option>
      {movies.map((movie) => (
        <option key={movie.id} value={movie.id}>
          {movie.title}
        </option>
      ))}
    </select>
  );
};

export default MovieSelector;
