// tmdbApi.js

const TMDB_API_KEY = "9b0df7823d16c58334407f87154de91b"; // Replace with your TMDB API key

// Function to fetch movies by category
async function fetchMoviesByCategory(category) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${category}?api_key=${TMDB_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
}

export default { fetchMoviesByCategory };
