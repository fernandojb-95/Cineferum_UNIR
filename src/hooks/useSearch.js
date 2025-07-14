import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useMoviesStore } from "./useMoviesStore";

export const useSearch = () => {
  const { state } = useMoviesStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      const filteredMovies = state.movies.filter((movie) => {
        return (
          movie.title.toLowerCase().includes(query.toLowerCase()) ||
          movie.synopsis.toLowerCase().includes(query.toLowerCase()) ||
          movie.director.toLowerCase().includes(query.toLowerCase()) ||
          movie.main_actors.join("").toLowerCase().includes(query.toLowerCase())
        );
      });
      setMovies(filteredMovies);
    }
  }, [searchParams]);

  return {
    query,
    movies
  };
};
