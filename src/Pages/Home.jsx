import React from "react";

const Home = () => {
  return (
    <div className="w-full">

      {/* 1️⃣ HERO SECTION */}
      <section className="bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')] bg-cover bg-center h-[90vh] flex items-center justify-center text-white">
        <div className="bg-black/50 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fresh & Organic Farm Products
          </h1>
          <p className="text-lg mb-6">
            Seeds, Vegetables, Fertilizers & Farming Tools
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition">
            Shop Now
          </button>
        </div>
      </section>

      {/* 2️⃣ CATEGORIES SECTION */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Seeds", "Vegetables", "Fertilizers", "Tools"].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition text-center"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 3️⃣ FEATURED PRODUCTS */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((product) => (
            <div
              key={product}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1598514982420-7d9c6e4d9c67"
                alt="product"
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Organic Tomato Seeds
                </h3>
                <p className="text-green-600 font-bold mb-4">Rs 150</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4️⃣ WHY CHOOSE US */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">100% Organic</h3>
            <p>Fresh and chemical-free agricultural products.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p>Quick and safe delivery across Nepal.</p>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p>Premium farming tools and trusted seeds.</p>
          </div>
        </div>
      </section>

      {/* 5️⃣ TESTIMONIALS */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Farmers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <p className="mb-4">
                “Very good quality seeds and fast delivery. Highly recommended!”
              </p>
              <h4 className="font-semibold text-green-700">
                Local Farmer
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ CALL TO ACTION */}
      <section className="bg-green-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Growing Today!
        </h2>
        <p className="mb-6">
          Get the best farming products delivered to your farm.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Shop
        </button>
      </section>

    </div>
  );
};

export default Home;