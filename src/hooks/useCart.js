import { useEffect, useState } from "react";
import { useMoviesStore } from "./useMoviesStore";
import { DELETE_CART } from "../context/actionTypes";

export const useCart = () => {
  const { state, dispatch } = useMoviesStore();
  const [cartMovies, setCartMovies] = useState([]);

  useEffect(() => {
    const cartItems = state.cart.map((movieId) => {
      return state.movies.find((movie) => movie.id === movieId);
    });
    setCartMovies(cartItems);
  }, [state.cart]);

    const calculateTotalPrice = () => {
    const total = cartMovies.reduce((accumulator, currentMovie) => {
      return accumulator + currentMovie.rental_price;
    }, 0);
        return total;
  };

  const clearCart = () => {
    dispatch({ type: DELETE_CART })
  };

  return {
    cartMovies,
    calculateTotalPrice,
    clearCart
  };
};
