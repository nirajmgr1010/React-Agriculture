import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-green-800 tracking-wide">
          Agro<span className="text-lime-500">Smart</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
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

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Wishlist
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-green-800"
                : "text-gray-600 hover:text-green-700 transition"
            }
          >
            Dashboard
          </NavLink>
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