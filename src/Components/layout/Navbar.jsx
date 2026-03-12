import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-green-800 tracking-wide">
          Agro<span className="text-lime-500">Smart</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Home
          </NavLink>

          {/* Shop */}
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Shop
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            About
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Contact
          </NavLink>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-gray-600 hover:text-green-700 transition text-sm font-medium"
          >
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-4 bg-green-800 text-white text-xs px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>

        </nav>

        {/* CTA Button */}
        <Link
          to="/shop"
          className="hidden md:inline-block bg-green-800 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition"
        >
          Explore Market
        </Link>

      </div>
    </header>
  );
}

export default Navbar;