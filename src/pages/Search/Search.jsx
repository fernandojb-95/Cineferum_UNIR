import MoviesSection from "../../components/MoviesSection/MoviesSection";
import { useSearch } from "../../hooks/useSearch";

const Search = () => {
  const { query, movies } = useSearch();
  return (
    <section className="layout-content">
      <h3>Resultados para la búsqueda de : {query} </h3>
      {movies.length <= 0 ? (
        <p>No hay resultados para tu búsqueda</p>
      ) : (
        <MoviesSection name="Resultados" movies={movies} />
      )}
    </section>
  );
};

export default Search;
