import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          <div className="mt-6 text-xl font-semibold text-right">
            Total: Rs {totalPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;