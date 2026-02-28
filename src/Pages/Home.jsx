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
      <section className="grid md:grid-cols-2 items-center gap-12 py-20">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#166534] leading-tight">
            Smart Agriculture Marketplace
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            AgroSmart connects farmers directly with consumers,
            ensuring fresh, organic, and sustainable agricultural products.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/shop"
              className="bg-[#166534] text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Explore Products
            </Link>

            <Link
              to="/dashboard"
              className="border border-[#166534] text-[#166534] px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition"
            >
              View Dashboard
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="Agriculture Banner"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </div>
      </section>

      {/* 2️⃣ FEATURED PRODUCTS */}
      <section>
       <section>
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-gray-800">
      Featured Products
    </h2>
    <p className="text-gray-600 mt-2">
      Fresh picks directly from trusted farmers.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Tomato */}
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <img src={tomato} alt="Tomato" className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">Organic Tomato</h3>
        <p className="text-gray-600 mt-2">Fresh farm tomatoes.</p>
        <p className="text-[#166534] font-bold mt-4">Rs. 120/kg</p>
      </div>
    </div>

    {/* Spinach */}
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <img src={spinach} alt="Spinach" className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">Fresh Spinach</h3>
        <p className="text-gray-600 mt-2">Healthy leafy greens.</p>
        <p className="text-[#166534] font-bold mt-4">Rs. 80/kg</p>
      </div>
    </div>

    {/* Carrot */}
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition">
      <img src={carrot} alt="Carrot" className="h-48 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">Organic Carrot</h3>
        <p className="text-gray-600 mt-2">Naturally grown carrots.</p>
        <p className="text-[#166534] font-bold mt-4">Rs. 100/kg</p>
      </div>
    </div>

  </div>
</section>
      </section>

      {/* 3️⃣ HOW IT WORKS */}
     <section className="bg-white py-16 rounded-2xl border shadow-sm">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold">
      How AgroSmart Works
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8 text-center px-6">

    <div>
      <div className="flex justify-center mb-4">
        <img src={tomato} alt="" className="h-16 w-16 object-cover rounded-full"/>
      </div>
      <h3 className="font-semibold text-[#166534]">
        Browse Products
      </h3>
      <p className="text-gray-600 mt-3">
        Explore fresh organic items listed by farmers.
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <img src={spinach} alt="" className="h-16 w-16 object-cover rounded-full"/>
      </div>
      <h3 className="font-semibold text-[#166534]">
        Place Order
      </h3>
      <p className="text-gray-600 mt-3">
        Add products to cart and checkout securely.
      </p>
    </div>

    <div>
      <div className="flex justify-center mb-4">
        <img src={carrot} alt="" className="h-16 w-16 object-cover rounded-full"/>
      </div>
      <h3 className="font-semibold text-[#166534]">
        Track Delivery
      </h3>
      <p className="text-gray-600 mt-3">
        Monitor order progress in real-time.
      </p>
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

    </div>
  );
}

export default Home;