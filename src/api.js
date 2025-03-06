const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const url = "https://www.omdbapi.com/";

const searchMovies = async (query) => {
    try {
    const response = await fetch(`${url}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();

    if (data.Response === "True") {
        return data.Search || []; // Return an empty array if no results
    } 

    } catch (error) {
    console.error('Error fetching movies:', error);
      return []; // Return empty array if  error to prevent crashes
    }
};
export default searchMovies;