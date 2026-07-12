import React, { useState, useMemo } from 'react';

const MarvelMovies = ({ movies }) => {
  const [search, setSearch] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('All');

  // Derive filtered list
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      const matchesPhase = selectedPhase === 'All' || movie.phase === selectedPhase;
      return matchesSearch && matchesPhase;
    });
  }, [movies, search, selectedPhase]);

  return (
    <div>
      {/* Search Input */}
      <input 
        type="text" 
        placeholder="Search Marvel movies..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
      />

      {/* Phase Filter Dropdown */}
      <select onChange={(e) => setSelectedPhase(e.target.value)} value={selectedPhase}>
        <option value="All">All Phases</option>
        <option value="Phase 1">Phase 1</option>
        <option value="Phase 2">Phase 2</option>
        <option value="Phase 3">Phase 3</option>
      </select>

      {/* Display Results */}
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p>Phase: {movie.phase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarvelMovies;

