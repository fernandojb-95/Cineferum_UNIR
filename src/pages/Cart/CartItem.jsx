import { Button } from "@mui/material";
import "./Cart.css";
import { formatterUSD } from "../../utils/formatter";
import { useCartItem } from "../../hooks/useCartItem";

const CartItem = ({ item }) => {
  const { handleDeleteFromCart } = useCartItem();
  return (
    <section className="cart-item">
      <img
        src={item.cover_image_url}
        alt={item.title}
        className="cart-item__cover"
      />
      <div className="cart-item__info">
        <h3>{item.title}</h3>
        <p>{formatterUSD.format(item.rental_price)}</p>
        <Button
          onClick={() => handleDeleteFromCart(item.id)}
          variant="outlined"
          size="small"
          color="error"
          sx={{ width: "250px"}}
        >
          Eliminar del carrito
        </Button>
      </div>
    </section>
  );
};

export default CartItem;
