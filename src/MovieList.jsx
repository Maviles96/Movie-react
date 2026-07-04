import React from "react";

const MovieList = ({ movies }) => {
    return (
    <div>
      {movies?.length > 0 ? (
        <div className="movies-grid">
          {movies.map((movie) => (
           <div key={movie.imdbID}>
           <h3>{movie.Title}</h3>
           </div>
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