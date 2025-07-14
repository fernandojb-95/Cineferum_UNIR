import Hero from "../../components/Hero/Hero";
import MoviesSection from "../../components/MoviesSection/MoviesSection";
import { useMoviesStore } from "../../hooks/useMoviesStore";
import "./home.css";

const Home = () => {
  const { state } = useMoviesStore();
  const {movies } = state;
  const mostViewed = movies.filter((movie) =>
    movie.tags.includes("most-viewed")
  );
  const recent = movies.filter((movie) => movie.tags.includes("recent-added"));
  return (
    <>
      <Hero />
      <div className="layout-content">
        <MoviesSection movies={mostViewed} name="Más vistas" />
        <MoviesSection movies={recent} name="Recientemente añadidas" />
      </div>
    </>
  );
};

export default Home;
