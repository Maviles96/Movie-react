import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import "./App.css";
import Navbar from "./src/Navbar";
import Footer from "./src/src/Footer";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }; 

  return (
    <div id="center">
      {/* Adding a clean Hero container so the page doesn't look empty */}
      <div className="hero">
        <h1>Discover Something New</h1>
        <p>Search across documentation, frameworks, and tools instantly.</p>
      </div>

      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for something..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div id="app-container">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
