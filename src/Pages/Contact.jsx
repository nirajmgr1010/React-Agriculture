function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600">
          Have questions about our products or farmers? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info Section */}
        <div className="space-y-6">

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📍 Address
            </h3>
            <p className="text-gray-600">
              AgroSmart Market, Kathmandu, Nepal
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📞 Phone
            </h3>
            <p className="text-gray-600">
              +977 98XXXXXXXX
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              📧 Email
            </h3>
            <p className="text-gray-600">
              support@agrosmart.com
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow-md space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>

          <button
            className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition shadow-md hover:shadow-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;