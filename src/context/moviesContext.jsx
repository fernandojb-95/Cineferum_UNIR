import { createContext, useReducer } from "react";
import { moviesReducer, initialState } from "./moviesReducer";

export const MoviesContext = createContext("");

export const MoviesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(moviesReducer, initialState);
    return (
        <MoviesContext.Provider value={{ state, dispatch }}>
            {children}
        </MoviesContext.Provider>
    )
}