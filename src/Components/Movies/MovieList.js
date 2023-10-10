import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import tmdbApi from "../../api/tmdbApi";

function MovieList() {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const categories = ["popular", "top_rated", "upcoming"]; // Add more categories as needed

  useEffect(() => {
    const fetchMoviesForCategories = async () => {
      const moviesData = {};

      for (const category of categories) {
        const movies = await tmdbApi.fetchMoviesByCategory(category);
        moviesData[category] = movies;
      }

      setMoviesByCategory(moviesData);
    };

    fetchMoviesForCategories();
  }, [categories]);

  return (
    <div>
      {categories.map((category) => (
        <div key={category}>
          <h2 className="font-semibold text-2xl uppercase">{category}</h2>
          <div className="flex pb-5 px-5 overflow-x-auto">
            {moviesByCategory[category]?.map((movie) => (
              <div key={movie.id}>
                <MovieCard {...movie} />
                <hr />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
