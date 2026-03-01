function ProductCard({ image, name, price, rating }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-lg transition transform hover:scale-[1.02] p-4 flex flex-col">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="font-semibold text-gray-800 text-lg">{name}</h3>
      <p className="text-[#166534] font-bold mt-2">Rs. {price}/kg</p>
      <p className="text-yellow-500 mt-1">{"★".repeat(Math.floor(rating))}</p>
      <button className="mt-auto bg-[#166534] text-white py-2 px-4 rounded-lg hover:bg-green-800 transition mt-4">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;