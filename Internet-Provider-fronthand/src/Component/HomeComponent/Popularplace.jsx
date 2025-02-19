import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Img1 from "./img/router1.jpg";
import Imge2 from "./img/router2.png";
import Img3 from "./img/router3.jpg";
import Img4 from "./img/router4.jpg";
import Img5 from './img/router5png.png';
import Img6 from './img/router6.jpg';

const locations = [
  {
    name: "Jersey City",
    time: "Price : $25",
    image: Img1,
  },
  {
    name: "Galveston",
    time: "Price : $25",
    image: Imge2,
  },
  {
    name: "San Francisco",
    time: "Price : $25",
    image: Img3,
  },
  {
    name: "Dunao, California",
    time: "Price : $25",
    image:Img4,
  },
  {
    name: "Manhattan",
    time: "Price : $25",
    image: Img5,
  },
  {
    name: "Upper East Side",
    time: "Price : $25",
    image: Img6,
  },
];

export default function Popularplace() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="mt-14">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-5">
          Get the Better Internet use better router
        </h2>
        <p className="text-[#808080] font-medium mb-10">
          Highlight the best of your properties by using the List Category
          shortcode. You <br /> can list specific properties categories, types,
          cities, areas.
        </p>
      </div>
      <div className="px-40 h-60 pt-7 mb-10">
        <div className="relative w-full flex flex-col items-center">
          <div className="flex space-x-4 overflow-hidden">
            {locations
              .slice(currentIndex, currentIndex + 5)
              .map((location, index) => (
                <div key={index} className="flex flex-col items-center w-36">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-28 h-28 cursor-pointer rounded-lg object-cover transition-transform duration-500 transform hover:scale-110"
                  />
                  <h3 className="font-semibold mt-2">{location.name}</h3>
                  <p className="text-gray-500 text-sm">{location.time}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <FaChevronLeft
              onClick={prevSlide}
              className="cursor-pointer text-gray-500"
            />
            {locations.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-800"
                }`}
              ></span>
            ))}
            <FaChevronRight
              onClick={nextSlide}
              className="cursor-pointer text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
