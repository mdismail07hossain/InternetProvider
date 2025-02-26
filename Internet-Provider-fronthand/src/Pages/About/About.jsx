import React from "react";
import "./css/about.css"
import Aboutusimg from "./img/about.webp";
import Teamimg from "./img/job-5382501_1280.jpg";
import Memberimg from "./img/4209.jpg";

const About = () => {
  return (
    <div className="bg-gray-100  ">
       <div className="relative">
        <img className="w-full h-[700px]" src={Aboutusimg} alt="" />
        <div className="absolute inset-0 bg-[#011d94] opacity-50" >
        </div>

        <div className="absolute inset-0 flex  justify-between items-center text-center mb-12">
          <div >
          <div className="w-[50%]">
          <h1 className="text-[58px] font-bold text-gray-100 ps-20">About Us Available Services</h1>
          <p className="mt-4 text-[30px] font-bold text-gray-200 text-justify ps-20 ">
            Availible Services 🤗 Internet started its operation in the year 2005
            with the commitment of quality internet service at an affordable
          
           
          </p>
          </div>
          <div className="w-[15%] ms-20 ">
          <button className="btnt"><i className="animation"></i>More Detailes<i className="animation"></i>
          </button>
          </div>
          </div>
          <div className="">
          <div className="items-start">
       
      </div>
      </div>
      </div>
       </div>

       <div className="flex flex-row items-center">
          <div className="basis-1/2  text-center  mt-10 mb-12 px-20">
          <h1 className="text-4xl font-bold uppercase infinity-color-animation ">About Us</h1>
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
          <div className="basis-1/2 p-20">
            <img src={Teamimg} alt="" srcset="" />
          </div>
        </div>
      <div className="max-w-6xl mx-auto py-12">
        {/* Hero Section */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center card3">
          <div class="overlay3"></div>
          <div class="go-corner3">
                 <span class="go-arrow3">&#x2192;</span>
          </div>
            <img
              src={Memberimg}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 card-title3">
              Md Ismail Hossain
            </h3>
            <p className="text-gray-500 small-desc3">CEO & Founder</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center card1">
          <div class="overlay1"></div>
          <div class="go-corner1">
                 <span class="go-arrow1">&#x2192;</span>
          </div>
            <img
              src={Memberimg}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 card-title1">
              Jane Smith
            </h3>
            <p className="text-gray-500 small-desc1">CTO</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center card2">
          <div class="overlay2"></div>
          <div class="go-corner2">
                 <span class="go-arrow2">&#x2192;</span>
          </div>
            <img
              src={Memberimg}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-800 card-title2">
              Michael Brown
            </h3>
            <p className="text-gray-500 small-desc2">Lead Developer</p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-row items-center gap-5">
          <div className="basis-1/2 mt-12 bg-white p-8 rounded-lg shadow-lg card4">
          <div class="overlay4"></div>
            <h2 className="text-4xl font-semibold text-gray-800 ">
              Our Mission
            </h2>
            <p className="mt-4 text-2xl text-gray-600 ">
              Our mission is to empower businesses with cutting-edge technology
              solutions that drive efficiency, innovation, and growth.
            </p>
          </div>
          <div className="basis-1/2 mt-12 bg-white p-8 rounded-lg shadow-lg card4 ">
          <div class="overlay4"></div>
            <h2 className="text-4xl font-semibold text-gray-800 ">Our Vision</h2>
            <p className="mt-4 text-2xl text-gray-600  ">
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
