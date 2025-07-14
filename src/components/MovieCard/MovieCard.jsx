import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
} from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { toast } from "react-toastify";
import { useMoviesStore } from "../../hooks/useMoviesStore";
import { ADD_TO_CART } from "../../context/actionTypes";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  const { state, dispatch } = useMoviesStore();
  const handleAddToCart = (id) => {
    toast.success("¡Añadido correctamente!");
    dispatch({ type: ADD_TO_CART, payload: id });
  };

  return (
    <Card key={movie.id} className="movie-card">
      <CardMedia
        image={movie.cover_image_url}
        component="img"
        className="poster-mini-cover"
      />
      <CardContent>
        <h4>{movie.title}</h4>
        <p>{movie.synopsis}</p>
        <Link className="movie-card__link" to={`/detail/${movie.id}`}>Ver detalles</Link>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<PlayCircleIcon />} color="error">
          <a
            href={movie.youtube_trailer_url}
            target="_blank"
            rel="noopener noreferrer"
            className="movie-card__trailer-link"
          >
            Ver trailer
          </a>
        </Button>
        <Tooltip title="Añadir al carrito">
          <IconButton
            aria-label="Añadir al carrito"
            onClick={() => handleAddToCart(movie.id)}
            disabled={state.cart.includes(movie.id)}
            color="primary"
          >
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
