import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";
import ProductSearch from "../components/product/ProductSearch";


import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/product/ProductCard";
import ProductFilter from "../components/product/ProductFilter";
import ProductSearch from "../components/product/ProductSearch";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Filtering
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Sorting
  if (sortOption === "low") filteredProducts.sort((a, b) => a.price - b.price);
  if (sortOption === "high") filteredProducts.sort((a, b) => b.price - a.price);
  if (sortOption === "rating")
    filteredProducts.sort((a, b) => b.rating - a.rating);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container-custom flex gap-8">

        {/* Sidebar Filters */}
        <aside className="w-1/4 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="font-semibold text-xl text-gray-800 mb-4">Filters</h2>

          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="text-gray-700 font-medium mb-2">Category</h3>
            <ProductFilter category={category} setCategory={setCategory} />
          </div>

          {/* Price Filter (Optional slider later) */}
          {/* Additional filters like rating, organic, etc. can go here */}
        </aside>

        {/* Main Shop Area */}
        <div className="flex-1">

          {/* Search & Sort Top Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-white rounded-2xl p-6 mb-8 shadow-sm gap-4">

            {/* Search */}
            <div className="flex-1">
              <ProductSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            {/* Sorting */}
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#166534]"
            >
              <option value="">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border">
              <h3 className="text-xl font-semibold text-gray-800">
                No products found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter options.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Shop;
