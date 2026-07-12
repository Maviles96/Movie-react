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
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search for something..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  );
}


export default App;
