import React, { Component } from "react";

const Deshboardpakage = () => {
  return (
    <div>
      <div className="ml-48 px-8  pt-28 text-gray-900">
        {/* Header Section */}
        <header className="bg-blue-600 text-white py-6 text-center">
          <h1 className="text-3xl font-semibold">
            Affordable Internet Packages
          </h1>
          <p className="mt-2">
            Choose the best plan for your needs. Fast, reliable, and seamless
            internet at your fingertips.
          </p>
        </header>

        {/* Main Content Section */}
        <main className="max-w-6xl mx-auto p-6">
          <section className="text-center my-12">
            <h2 className="text-2xl font-semibold text-blue-600">
              Available Packages
            </h2>
            <p className="mt-4 text-gray-700">
              Choose from a range of internet packages that suit your online
              lifestyle.
            </p>
          </section>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[2, 3, 5, 10, 15, 20].map((speed) => (
              <div
                key={speed}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {speed}Mbps Package
                </h3>
                <p className="mt-4 text-gray-600">
                  Perfect for different browsing needs.
                </p>
                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {speed}Mbps
                </p>
                <p className="mt-4 text-gray-500">
                  Ideal for: Streaming, gaming, browsing
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <section className="mt-16 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-blue-600">
              Get Started Today!
            </h2>
            <p className="mt-4 text-center text-gray-700">
              Sign up for the internet package that works best for you.
            </p>
            <form className="mt-8 max-w-2xl mx-auto space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Select Package</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  {[2, 3, 5, 10, 15, 20].map((speed) => (
                    <option key={speed} value={`${speed}mbps`}>
                      {speed}Mbps
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Deshboardpakage;
