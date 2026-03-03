import { useCart } from "../../context/CartContext";

function ProductCard({ id, name, price, rating, image, category }) {
  const { addToCart } = useCart();

  const product = { id, name, price, rating, image, category };

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]">

      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-[#166534] shadow-md">
          ⭐ {rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#166534] transition">
          {name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#166534]">
            रु {price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 rounded-xl bg-[#166534] text-white text-sm font-medium hover:bg-[#14532d] transition duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;