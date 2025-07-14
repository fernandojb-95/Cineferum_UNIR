import { useCart } from "../../hooks/useCart";
import CartItem from "./CartItem";
import { formatterUSD } from "../../utils/formatter";
import { Button } from "@mui/material";

const Cart = () => {
  const { cartMovies, calculateTotalPrice, clearCart } = useCart();
  return (
    <div className="layout-content">
      <h2>Carrito</h2>
      {cartMovies.length <= 0 ? (
        <p>No hay películas en el carrito</p>
      ) : (
        cartMovies.map((movie) => <CartItem item={movie} key={movie.id} />)
      )}
      <div className="cart__total">
        <h3>Total: {formatterUSD.format(calculateTotalPrice(cartMovies))}</h3>
      </div>
      {cartMovies.length > 0 && (
        <Button variant="contained" color="primary" onClick={clearCart}>
          Vaciar carrito
        </Button>
      )}
    </div>
  );
};

export default Cart;
