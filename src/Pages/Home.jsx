import heroImage from "../assets/Images/Herosection.jpg";
import spinach from "../assets/Images/spinach.jpg";
import tomato from "../assets/Images/Tomato.jpg";
import carrot from "../assets/Images/Carrot.jpg";
import farmer from "../assets/Images/farmer.jpg";
import ctaBanner from "../assets/Images/cta-banner.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-28">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative grid md:grid-cols-2 items-center gap-12 py-28">
  <div>
    <span className="bg-green-100 text-[#166534] px-4 py-1 rounded-full text-sm font-medium">
      Sustainable • Organic • Trusted
    </span>

    <h1 className="text-6xl font-extrabold mt-6 leading-tight">
      Smart Agriculture
      <span className="text-[#166534]"> Marketplace</span>
    </h1>

    <p className="mt-6 text-lg text-gray-600 max-w-xl">
      Connecting farmers directly to consumers for fresher produce,
      fair pricing, and a sustainable agricultural future.
    </p>

    <div className="mt-8 flex gap-6">
      <Link
        to="/shop"
        className="bg-[#166534] text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
      >
        Shop Fresh Now
      </Link>

      <Link
        to="/about"
        className="border border-[#166534] px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition"
      >
        Learn More
      </Link>
    </div>
  </div>

  <div className="relative">
    <img
      src={heroImage}
      alt="Organic Farming"
      className="rounded-3xl shadow-2xl"
    />

    <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-xl p-4">
      <p className="text-sm font-medium text-gray-600">
        Fresh Harvest Delivered Daily 🌿
      </p>
    </div>
  </div>
</section>

      {/* TRUST STATS */}
<section className="grid md:grid-cols-4 gap-8 text-center py-12 bg-green-50 rounded-2xl">
  <div>
    <h3 className="text-3xl font-bold text-[#166534]">500+</h3>
    <p className="text-gray-600 mt-2">Registered Farmers</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-[#166534]">10K+</h3>
    <p className="text-gray-600 mt-2">Happy Customers</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-[#166534]">99%</h3>
    <p className="text-gray-600 mt-2">Customer Satisfaction</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-[#166534]">24/7</h3>
    <p className="text-gray-600 mt-2">Customer Support</p>
  </div>
</section>




   {/* 2️⃣ FEATURED PRODUCTS */}
<section className="py-24 bg-gradient-to-b from-white to-green-50 rounded-3xl">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <div className="flex justify-between items-center mb-14">
      <div>
        <h2 className="text-4xl font-bold text-gray-900">
          Featured Products
        </h2>
        <p className="text-gray-600 mt-3">
          Fresh organic vegetables directly from trusted farmers.
        </p>
      </div>

      <Link
        to="/shop"
        className="text-[#166534] font-semibold hover:underline"
      >
        View All →
      </Link>
    </div>

    {/* Products Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* PRODUCT CARD */}
      <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={tomato}
            alt="Tomato"
            className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
          />

          <span className="absolute top-4 left-4 bg-[#166534] text-white text-xs px-3 py-1 rounded-full">
            Organic
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold">Organic Tomato</h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500 text-xs ml-2">(4.9)</span>
          </div>

          <p className="text-gray-600 mt-3">
            Fresh farm-grown tomatoes full of natural nutrients.
          </p>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-[#166534] text-xl font-bold">
              Rs. 120/kg
            </p>

            <button className="bg-[#166534] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* SPINACH */}
      <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={spinach}
            alt="Spinach"
            className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
          />
          <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            Fresh
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold">Fresh Spinach</h3>

          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
            ⭐⭐⭐⭐☆
            <span className="text-gray-500 text-xs ml-2">(4.5)</span>
          </div>

          <p className="text-gray-600 mt-3">
            Healthy leafy greens packed with iron and vitamins.
          </p>

          <div className="flex justify-between items-center mt-6">
            <p className="text-[#166534] text-xl font-bold">
              Rs. 80/kg
            </p>

            <button className="bg-[#166534] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* CARROT */}
      <div className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={carrot}
            alt="Carrot"
            className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
          />
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            Best Seller
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold">Organic Carrot</h3>

          <div className="flex items-center gap-1 mt-2 text-yellow-400 text-sm">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-500 text-xs ml-2">(5.0)</span>
          </div>

          <p className="text-gray-600 mt-3">
            Naturally grown carrots rich in beta-carotene.
          </p>

          <div className="flex justify-between items-center mt-6">
            <p className="text-[#166534] text-xl font-bold">
              Rs. 100/kg
            </p>

            <button className="bg-[#166534] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* 3️⃣ HOW IT WORKS */}
<section className="py-32 bg-gradient-to-b from-white via-green-50 to-white rounded-3xl">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-24">
      <h2 className="text-4xl font-bold text-gray-900">
        How AgroSmart Works
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Simple. Transparent. Farm-to-home in three easy steps.
      </p>
    </div>

    {/* Steps */}
    <div className="grid md:grid-cols-3 gap-14">

      {/* STEP 1 */}
      <div className="group bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center relative">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white h-16 w-16 flex items-center justify-center rounded-full text-xl font-bold shadow-xl">
          01
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-green-100 p-5 rounded-2xl">
            <img src={tomato} alt="" className="h-14 w-14 object-cover rounded-full"/>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8">
          Browse Products
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Discover fresh organic produce directly from verified farmers.
        </p>
      </div>


      {/* STEP 2 */}
      <div className="group bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center relative">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white h-16 w-16 flex items-center justify-center rounded-full text-xl font-bold shadow-xl">
          02
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-green-100 p-5 rounded-2xl">
            <img src={spinach} alt="" className="h-14 w-14 object-cover rounded-full"/>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8">
          Place Order
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Securely add items to cart and checkout in minutes.
        </p>
      </div>


      {/* STEP 3 */}
      <div className="group bg-white/80 backdrop-blur-lg p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 text-center relative">

        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-800 text-white h-16 w-16 flex items-center justify-center rounded-full text-xl font-bold shadow-xl">
          03
        </div>

        <div className="mt-12 flex justify-center">
          <div className="bg-green-100 p-5 rounded-2xl">
            <img src={carrot} alt="" className="h-14 w-14 object-cover rounded-full"/>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-8">
          Track Delivery
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed">
          Monitor your order status in real-time until delivery.
        </p>
      </div>

    </div>

  </div>
</section>


<section
  className="relative py-24 rounded-2xl text-center text-white"
  style={{
    backgroundImage: `url(${ctaBanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-[#166534]/70 rounded-2xl"></div>

  <div className="relative z-10">
    <h2 className="text-4xl font-bold">
      Start Shopping Fresh Today
    </h2>

    <p className="mt-4">
      Experience farm-to-home freshness with AgroSmart.
    </p>

    <div className="mt-8">
      <Link
        to="/shop"
        className="bg-white text-[#166534] px-8 py-4 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        Shop Now
      </Link>
    </div>
  </div>
</section>

      {/* 4️⃣ WHY CHOOSE US */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">
            Why Choose AgroSmart?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[#166534] font-semibold">
              Direct From Farmers
            </h3>
            <p className="text-gray-600 mt-3">
              Eliminating middlemen ensures better prices and freshness.
            </p>
          </div>

          <div>
            <h3 className="text-[#166534] font-semibold">
              100% Organic
            </h3>
            <p className="text-gray-600 mt-3">
              Verified organic products for healthy living.
            </p>
          </div>

          <div>
            <h3 className="text-[#166534] font-semibold">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 mt-3">
              Clear pricing without hidden charges.
            </p>
          </div>
        </div>
      </section>

      {/* 5️⃣ FARMER SPOTLIGHT */}
      <section className="bg-green-50 py-20 rounded-2xl">
  <div className="grid md:grid-cols-2 gap-12 items-center px-6">

    <div>
      <img
        src={farmer}
        alt="Farmer"
        className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
      />
    </div>

    <div>
      <h2 className="text-3xl font-semibold text-[#166534]">
        Meet Our Farmers
      </h2>

      <p className="text-gray-700 mt-6">
        With over 12 years of experience, our farmers ensure
        high-quality organic vegetables grown sustainably.
      </p>

      <p className="mt-4 font-semibold text-[#166534]">
        – Ram Bahadur, Chitwan
      </p>
    </div>

  </div>
</section>

   {/* NEWSLETTER */}
<section className="bg-[#166534] text-white py-20 rounded-2xl text-center">
  <h2 className="text-4xl font-bold">
    Stay Updated with Fresh Offers
  </h2>

  <p className="mt-4 text-green-100">
    Subscribe to get weekly organic deals and updates.
  </p>

  <div className="mt-8 flex justify-center gap-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="px-6 py-3 rounded-lg text-black w-72"
    />

    <button className="bg-white text-[#166534] px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
      Subscribe
    </button>
  </div>
</section>

    </div>
  );
}

export default Home;