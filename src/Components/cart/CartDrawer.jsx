import { useCart } from "../../Context/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity ${
          isOpen ? "opacity-30" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-96 bg-white p-6 border-l transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold border-b pb-3 mb-4">
          Cart Summary
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="border-b pb-2">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.quantity} × Rs {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 font-semibold flex justify-between">
              <span>Total</span>
              <span>Rs {totalPrice}</span>
            </div>

            <button className="mt-6 w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;