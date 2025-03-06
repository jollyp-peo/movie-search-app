import { useEffect, useState } from 'react';
import searchMovies from './api'
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

function App() {
  const [search, setSearch] = useState(""); // search state
  const [movies, setMovies] = useState([]); // movies state
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(""); // error state
  const [triggerFetch, setTriggerFetch] = useState(false); // trigger fetch state

  const handleSearch = (e) => {
    setSearch(e.target.value); // Update input field state
  };
  const handleClick = (e) =>{
    e.preventDefault();
    setTriggerFetch((prev) => !prev);
  }

  const enterToSearch = (e) => {
    if (e.key === "Enter") {
      setTriggerFetch((prev) => !prev); // Toggle to trigger useEffect
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search.trim()) {
        setError("Please enter a movie name.");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const result = await searchMovies(search);

        if (!result || result.length === 0) {
        setError("No movies found.");
        setMovies([]);
        setError("No movies found.");
        setLoading(false);

        } else {
        setError(""); // Clear error if movies are found
        setMovies(result);
      }
      } catch (error) {
        setError("Something went wrong. Please try again.");
        setMovies([]);
      }
      

      
      setLoading(false);
    };

    fetchMovies();
  }, [triggerFetch]); // Runs when Enter is pressed


  return (
    <div>
      <div>
        <SearchBar 
         handleSearch={handleSearch} 
         searchValue={search} 
         enterToSearch={enterToSearch} 
         handleClick={handleClick}
         />

         {loading && <div className='loading'></div>}
         {error && <div className='error'>{error}</div>}
         <MovieCard movies={movies}/>
      </div>
    </div>
  );
}

export default App;