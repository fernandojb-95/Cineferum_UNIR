import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useHero } from "../../hooks/useHero";

const Hero = () => {
  const { handleSearchSubmit, setSearch } = useHero();
  return (
    <section className="home">
      <div className="movies-hero">
        <div className="movies-hero__img"></div>
        <div className="movies-hero__search">
          <p>
            Bienvenido a tu universo cinematográfico, donde cada historia cobra
            vida en la pantalla.
          </p>
          <p>Encuentra tu próxima película favorita.</p>
          <div className="search-form">
            <form onSubmit={handleSearchSubmit}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel>Buscar</InputLabel>
                <FilledInput
                  id="search_movie"
                  type="text"
                  fullWidth
                  onChange={(e) => setSearch(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="buscar" edge="end" type="submit">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Búsqueda"
                />
              </FormControl>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
