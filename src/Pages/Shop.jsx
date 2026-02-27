import React, { useState } from "react";
import productsData from "../data/products";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Seeds", "Vegetables", "Fertilizers", "Tools"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">
        Our Products
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full border transition 
              ${
                selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-white hover:bg-green-100"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col justify-between"
          >
            <div>
              <div className="h-40 bg-green-100 rounded-xl mb-4 flex items-center justify-center">
                🌾
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold mb-4">
                Rs {product.price}
              </p>
            </div>

            <button className="bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No products found.
        </p>
      )}
    </div>
  );
};

export default Shop;