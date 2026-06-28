import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

function DataComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("query") || "marvel";

     useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}l&apikey=d7d0b17d`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then((actualData) => {
        console.log(actualData);
        if (actualData.Search)
        setData(actualData.Search.slice(0, 5));
      })
      .finally(() => {
      setLoading(false);
      });
  }, [query]); 
     
  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error}</p>;

 return (
    <div>
        <h2>Movie Results</h2>
        <ul>
            {data.map((post) => (
             <li key={post.imdbID}>
                <strong>{post.Title}</strong>
             </li>   
            ))}
        </ul>
    </div>
 );  
}

export default DataComponent;