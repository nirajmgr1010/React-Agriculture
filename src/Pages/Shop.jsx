import { useState, useMemo } from "react";
import products from "../data/products";
import ProductCard from "../components/product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";
import ProductSearch from "../components/product/ProductSearch";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (category) {
      filtered = filtered.filter(
        (product) => product.category === category
      );
    }

    if (sortOption === "low")
      filtered.sort((a, b) => a.price - b.price);

    if (sortOption === "high")
      filtered.sort((a, b) => b.price - a.price);

    if (sortOption === "rating")
      filtered.sort((a, b) => b.rating - a.rating);

    return filtered;
  }, [searchTerm, category, sortOption]);

  return (
    <div className="font-poppins bg-white text-gray-800">

      {/* ================== 1️⃣ HERO SECTION ================== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
          alt="Farm"
          className="absolute w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#166534]/70"></div>

        <div className="relative text-center z-10">
          <h1 className="text-5xl font-bold tracking-tight">
            Fresh From Farm
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Premium organic products delivered to your doorstep.
          </p>
        </div>
      </section>


      {/* ================== 2️⃣ CATEGORY SHOWCASE ================== */}
      <section className="py-16 max-w-[1600px] mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {["Vegetables", "Fruits", "Organic"].map((cat, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              onClick={() => setCategory(cat)}
            >
              <img
                src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                alt={cat}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
              <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                {cat}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ================== 3️⃣ SEARCH + FILTER ================== */}
      <section className="sticky top-0 bg-white z-20 py-6 shadow-md">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">

          <div className="flex-1 transition-all duration-300 hover:scale-[1.02]">
            <ProductSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </div>

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-6 py-3 rounded-xl bg-[#166534] text-white font-medium hover:bg-[#14532d] transition"
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </section>


      {/* ================== 4️⃣ PRODUCT GRID ================== */}
      <section className="py-20 max-w-[1600px] mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <ProductCard {...product} />
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Shop;