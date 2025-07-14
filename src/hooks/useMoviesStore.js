import { useContext } from "react";
import { MoviesContext } from "../context/moviesContext";

export const useMoviesStore = () => {
    const context = useContext(MoviesContext);
    return context;
}