import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-4 text-lg font-semibold text-gray-800 text-justify">
            Availible Services 🫡 Internet started its operation in the year 2005
            with the commitment of quality internet service at an affordable
            price. At the time of commencement, Dot Internet started with
            broadband service with the state of the art technology. Over time,
            our R & D team has developed and introduced many new technologies to
            meet the requirement of the new millennium. In the last 15 years,
            Dot Internet has introduced many new ideas and technologies to the
            internet industry. We are one of the top growing Internet Service
            Providers in Dhaka. Hoping to do much better in the broadband
            internet industry with great service at affordable prices.☺️ <br />
            <samp className="mt-10 text-xl font-bold text-blue-800">
              Our Trade License Number is: 05-56175
            </samp>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              John Doe
            </h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Jane Smith
            </h3>
            <p className="text-gray-500">CTO</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">
              Michael Brown
            </h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex gap-5">
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              Our mission is to empower businesses with cutting-edge technology
              solutions that drive efficiency, innovation, and growth.
            </p>
          </div>
          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              Our mission is to empower businesses with cutting-edge technology
              solutions that drive efficiency, innovation, and growth.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-2xl">Partners & Members</h2>
          <p className="text-gray-800 text-xl">
            Honorable partners & members of Availible Services Internet since
            2005
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
