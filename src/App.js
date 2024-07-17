// src/App.js
import React, { useState } from 'react';
import RateMovieButton from './components/RateMovieButton';
import MovieSelector from './components/MovieSelector';
import UploadButton from './components/UploadButton';
import './components/Toolbar.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([
    { id: 1, title: 'Harry Potter' },
    { id: 2, title: 'Inception' },
    { id: 3, title: 'Avatar' },
  ]);

  const handleMovieSelect = (movieId) => {
    const movie = movies.find((m) => m.id === parseInt(movieId));
    setSelectedMovie(movie);
  };

  const handleRateMovie = (rating) => {
    console.log(`Movie ${selectedMovie.title} rated with ${rating} stars.`);
  };

  const handleUpload = () => {
    console.log('Image upload initiated.');
  };

  return (
    <div className="toolbar">
      <MovieSelector movies={movies} onSelect={handleMovieSelect} />
      {selectedMovie && <RateMovieButton onRate={handleRateMovie} />}
      <UploadButton onUpload={handleUpload} />
    </div>
  );
};

export default App;
