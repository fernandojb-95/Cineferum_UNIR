import { movies } from "../db/movies";
import * as types from "./actionTypes";

const localStorageCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const initialState = {
  movies: movies,
  cart: localStorageCart(),
};

export const moviesReducer = (state, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((movie) => movie !== action.payload),
      };
      case types.DELETE_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
