import React from "react";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : '/Marvels.jpg';

  return (
    <div className="movie-card">
      <div className="movie-poster-wrapper">
       <img
  className="movie-poster"
  src={posterUrl}
  alt={movie.Title}
  onError={(event) => {
    event.currentTarget.src = "/Marvels.jpg";
  }}
 />
        <span className="movie-type">{movie.Type}</span>
      </div>
      <div className="movie-details">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;