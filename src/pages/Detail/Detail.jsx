import { Button } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import { formatterUSD } from "../../utils/formatter";
import "./Detail.css";
import { useMoviesStore } from "../../hooks/useMoviesStore";

const Detail = () => {
  const { movie, addToCart } = useMovieDetail();
  const { state } = useMoviesStore();
  return (
    <section className="layout-content movie-detail">
      <img src={movie.cover_image_url} alt={movie.title} />
      <div className="movie-detail__info">
        <h2>{movie.title}</h2>
        <p>
          <b>Sinópsis:</b> {movie.synopsis}
        </p>
        <p>
          <b>Año de estreno:</b> {movie.year}
        </p>
        <p>
          <b>Director:</b> {movie.director}
        </p>
        <p>
          <b>Reparto:</b> {movie.main_actors?.join(", ")}
        </p>
        <p>
          <b>Duración:</b> {movie.duration_minutes} minutos
        </p>
        <p>
          <b>Precio:</b> {formatterUSD.format(movie.rental_price)}
        </p>
        <div className="movie-detail__actions">
          <Button
            color="error"
            variant="outlined"
            startIcon={<PlayCircleIcon />}
          >
            <a
              href={movie.youtube_trailer_url}
              target="_blank"
              rel="noopener noreferrer"
              className="movie-card__trailer-link"
            >
              Ver trailer
            </a>
          </Button>
          <Button
            color="primary"
            variant="outlined"
            startIcon={<ShoppingCartIcon />}
            onClick={() => addToCart(movie.id)}
            disabled={state.cart.includes(movie.id)}
          >
            Añadir al carrito
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Detail;
