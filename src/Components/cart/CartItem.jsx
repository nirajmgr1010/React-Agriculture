import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border p-4 rounded-xl mb-4">
      <div>
        <h2 className="font-semibold">{item.name}</h2>
        <p>Rs {item.price}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-3 bg-gray-200 rounded"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-3 bg-gray-200 rounded"
        >
          +
        </button>
      </div>

      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;