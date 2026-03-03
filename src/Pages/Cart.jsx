import { useCart } from "../context/CartContext";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold border-b pb-4 mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-gray-600">
            Your cart is currently empty.
          </p>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE - ITEMS */}
          <div className="lg:col-span-2">

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-4 font-medium border-b pb-3 mb-4 text-sm uppercase tracking-wide text-gray-600">
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}

          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="border p-6 h-fit">

            <h2 className="text-lg font-semibold border-b pb-3 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>Rs {totalPrice}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between border-t pt-3 font-semibold">
              <span>Total</span>
              <span>Rs {totalPrice}</span>
            </div>

            <button className="mt-6 w-full border border-black py-2 text-sm font-medium hover:bg-black hover:text-white transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;