import React from "react";
import MovieCard from "./MovieCard";
import './MovieCard.css';

const MovieList = ({ movies }) => {
    return (
    <div>
      {movies?.length > 0 ? (
        <div className="movies-grid">
          {movies.map((movie) => (
           <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No movies found</h3>
          <p>Please try another search.</p>
        </div>
      )}
    </div>
  );
};

export default MovieList;