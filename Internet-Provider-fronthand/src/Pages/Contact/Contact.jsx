import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We’d love to hear from you! Reach out with any questions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Contact Details
              </h3>
              <p className="mt-4 text-gray-600">
                Feel free to get in touch with us through the following
                channels:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📍</span>
                  <p className="text-gray-700">
                    123 Main Street, City, Country
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📧</span>
                  <p className="text-gray-700">contact@yourcompany.com</p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📞</span>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
