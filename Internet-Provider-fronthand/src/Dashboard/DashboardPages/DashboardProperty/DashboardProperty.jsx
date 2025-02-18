import React from "react";

const DashboardProperty = () => {
  return (
    <div className="pt-28 mx-auto">
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
    </div>
  );
};

export default DashboardProperty;
