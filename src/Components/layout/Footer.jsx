import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Agro<span className="text-lime-500">Smart</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A modern agriculture marketplace connecting farmers and buyers 
            with smart technology and transparent pricing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-lime-400 transition">Shop</Link></li>
            <li><Link to="/cart" className="hover:text-lime-400 transition">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-lime-400 transition">Wishlist</Link></li>
            <li><Link to="/dashboard" className="hover:text-lime-400 transition">Dashboard</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm text-gray-400">
            Itahari, Sunsari <br />
            Nepal <br />
            support@agrosmart.com
          </p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} AgroSmart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;