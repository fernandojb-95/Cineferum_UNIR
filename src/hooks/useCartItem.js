import { toast } from "react-toastify";
import { REMOVE_FROM_CART } from "../context/actionTypes";
import { useMoviesStore } from "./useMoviesStore"

export const useCartItem = () => {
  const { dispatch } = useMoviesStore();

  const handleDeleteFromCart = (movieId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: movieId });
    toast.error("¡Eliminado correctamente!");
  }

  return {
    handleDeleteFromCart,
  }
 }