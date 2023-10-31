import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItems={item} />;
      })}
    </>
  );
};

export default CartItemsList;
