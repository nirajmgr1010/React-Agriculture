import { useCart } from "../../Context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseQty, decreaseQty } = useCart();

  return (
    <div className="grid md:grid-cols-4 items-center border-b py-6 gap-4">

      {/* Product */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover border"
        />
        <span className="font-medium">
          {item.name}
        </span>
      </div>

      {/* Price */}
      <div>
        Rs {item.price}
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => decreaseQty(item.id)}
          className="border px-2"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="border px-2"
        >
          +
        </button>

        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-sm text-red-600"
        >
          Remove
        </button>
      </div>

      {/* Total */}
      <div className="text-right font-medium">
        Rs {item.price * item.quantity}
      </div>

    </div>
  );
};

export default CartItem;