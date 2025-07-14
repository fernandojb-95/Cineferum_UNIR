import { Divider } from "@mui/material";
import MovieCard from "../MovieCard/MovieCard";

const MoviesSection = ({ movies = [], name }) => {
  return (
    <section className="movies-list">
      <div className="movies-list__head">
        <h2>{name}</h2>
        <Divider />
      </div>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </section>
  );
};

export default MoviesSection;
