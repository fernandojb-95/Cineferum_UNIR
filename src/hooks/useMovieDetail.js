import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useMoviesStore } from "./useMoviesStore";
import { ADD_TO_CART } from "../context/actionTypes";
import { toast } from "react-toastify";

export const useMovieDetail = () => {
  const params = useParams();
  const { state, dispatch } = useMoviesStore();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (params) {
      setMovie(state.movies.find((movie) => movie.id === params.id));
    }
  }, []);

  const addToCart = (id) => {
    dispatch({ type: ADD_TO_CART, payload: id });
    toast.success("¡Añadido correctamente!")
  };

  return {
    movie,
    addToCart
  };
};
