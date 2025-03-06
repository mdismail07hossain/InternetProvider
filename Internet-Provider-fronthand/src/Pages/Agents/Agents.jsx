import React from "react";
// import Adduser from "@/Dashboard/DashboardPages/DashboardAdduser/adduser";
import Agentimg from "./img/coverage-bg.webp";
import Adduser from "@/Dashboard/DashboardPages/DashboardAdduser/adduser";

const Agents = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="relative">
          <img className="w-full h-[700px]" src={Agentimg} alt="" />
          <div className="absolute inset-0 bg-[#111f5c] opacity-60"></div>
          <div className="absolute inset-0 flex  justify-between items-center text-white py-20 text-center">
            <div className="w-[50%]">
              <h1 className="text-6xl font-bold text-start px-20">
                Coverage area
              </h1>
              <p className="mt-4 text-2xl font-bold text-start px-20">
                Available Services Internet's coverage area is wide. Dot
                Internet is spread almost everywhere in Dhaka city. Check the
                availability of all coverage areas in Dhaka.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        {/* Hero Section */}

        {/* Features Section */}
        <div className="">
          <h1 className="text-6xl font-bold text-center px-20 text-blue-800">
            Coverage area
          </h1>
          <p className="mt-4 text-2xl font-bold text-center px-20">
            Available Services Internet's coverage area is wide. Dot Internet is
            spread almost everywhere in Dhaka city. Check the availability of
            all coverage areas in Dhaka.
          </p>
        </div>
        <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Basic Coverage</h3>
            <p className="text-gray-600 mt-2">
              Covers essential needs with affordable pricing.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Standard Coverage</h3>
            <p className="text-gray-600 mt-2">
              Balanced protection for everyday risks.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Premium Coverage</h3>
            <p className="text-gray-600 mt-2">
              Comprehensive security for ultimate peace of mind.
            </p>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md text-center border border-blue-500">
            <h3 className="text-2xl font-bold text-blue-600">Basic Plan</h3>
            <p className="text-gray-600 mt-2">$9/month</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Essential coverage</li>
              <li>✔ 24/7 Support</li>
              <li>✖ No premium benefits</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Choose Plan
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center border border-green-500">
            <h3 className="text-2xl font-bold text-green-600">Standard Plan</h3>
            <p className="text-gray-600 mt-2">$19/month</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Balanced protection</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Accident coverage</li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Choose Plan
            </button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center border border-red-500">
            <h3 className="text-2xl font-bold text-red-600">Premium Plan</h3>
            <p className="text-gray-600 mt-2">$29/month</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✔ Full protection</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Priority Assistance</li>
            </ul>
            <button className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Choose Plan
            </button>
          </div>
        </section>
        <div className="">
          <Adduser />
        </div>
      </div>
    </div>
  );
};

export default Agents;
