import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { paths } from "../../constants/routes";

const NotFound = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(paths.HOME);
  }

  return (
    <section className="layout-content">
      <h2>Lo sentimos, no es posible mostrar el contenido que estás buscando</h2>
      <h2>Inténtalo más tarde</h2>
      <Button color="primary" variant="contained" onClick={goHome}>
        Volver al inicio
      </Button>
    </section>
  );
};

export default NotFound;
