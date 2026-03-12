import farmer from "../assets/Images/farmer.jpg";

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Section 1 — About Intro */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-green-700 mb-6">
          About Our Agriculture Market
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={farmer}
            alt="Farmer"
            className="rounded-xl shadow-lg"
          />

          <div>
            <p className="text-gray-600 mb-4">
              Our agriculture marketplace connects farmers directly with buyers.
              We help farmers sell fresh vegetables and fruits without middlemen.
            </p>

            <p className="text-gray-600">
              By supporting local farmers, we ensure customers receive fresh,
              organic, and healthy food directly from the farm.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Mission */}
      <section className="mb-16 bg-green-50 p-8 rounded-2xl">
        <h2 className="text-3xl font-semibold text-green-800 mb-4">
          Our Mission
        </h2>

        <p className="text-gray-600 mb-4">
          Our mission is to empower farmers by providing a digital marketplace
          where they can showcase and sell their produce directly to customers.
        </p>

        <p className="text-gray-600">
          We aim to reduce the gap between farmers and consumers while promoting
          sustainable agriculture and fair pricing.
        </p>
      </section>

      {/* Section 3 — Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold text-green-800 mb-8">
          Why Choose AgroSmart
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Fresh Products
            </h3>
            <p className="text-gray-600 text-sm">
              We provide fresh vegetables and fruits directly sourced from local farms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Support Farmers
            </h3>
            <p className="text-gray-600 text-sm">
              Our platform helps farmers earn fair prices without intermediaries.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Healthy Food
            </h3>
            <p className="text-gray-600 text-sm">
              We promote organic and chemical-free farming for healthier communities.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;