import { NavLink } from "react-router-dom";
import { Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import AuthComponent from "../Auth/AuthComponent";
import Logo from "./imges/A-removebg-preview.png";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openLoginModal = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const navLinks = (
    <>
      <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] rounded-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848]  rounded-lg">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] rounded-lg">
        <NavLink to="/agents">Coverage</NavLink>
      </li>
      <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] rounded-lg relative group">
        <NavLink to="/properties">
         
            Package System
        
        </NavLink>
      </li>
      <li className="px-4 py-2 text-lg font-semibold duration-700 hover:text-[#ff4848] text-green-500 rounded-lg">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className=" fixed bg-transparent w-full top-0 z-50 text-green-500  bg-opacity-75 backdrop-blur-sm">
      <div className="max-w-full">
        <div className="flex justify-between h-[70px] shadow-xl w-full items-center px-12 md:px-8">
          <NavLink to={"/"} className="flex items-center">
            <div className="w-[130px] ml-5 mt-1">
              <img src={Logo} alt="" />
            </div>
          </NavLink>
          <div className="hidden md:flex ml-40">
            <ul className="menu-horizontal list-none flex gap-3">{navLinks}</ul>
          </div>
          <div className="flex gap-5 list-none ml-32 items-center">
            <div className="flex gap-3 items-center text-lg text-green-500">
              <a href="#">
                <FontAwesomeIcon icon={faPhone} className="text-green-500 text-lg" /> 01-322-555-634
              </a>
            </div>

            <div className="dropdown z-40 dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="">
                  <FontAwesomeIcon className="text-4xl text-green-500" icon={faCircleUser} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 px-7 pt-3 p-2 shadow"
              >
                <button
                  onClick={openLoginModal}
                  className="px-10 font-medium py-2 rounded-lg bg-[#2c2e33] hover:bg-[#f1913d] text-white text-lg transition duration-700"
                >
                  Login
                </button>
                <p className="text-center mt-3 font-medium">Don't You Have an account?</p>
                <a
                  onClick={openLoginModal}
                  href="/authcomponent"
                  className="text-center mt-3 mb-2 text-[#f1913d] underline text-base"
                >
                  Registration
                </a>
              </ul>
            </div>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-2xl text-[#a233bf]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 md:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="flex flex-col items-center py-8">
            <ul className="text-white text-lg">
              {navLinks}
            </ul>
            <div className="flex flex-col items-center mt-8">
              <a
                onClick={openLoginModal}
                className="text-[#f1913d] text-lg mb-2"
              >
                Login
              </a>
              <a
                onClick={openLoginModal}
                href="/authcomponent"
                className="text-[#f1913d] text-lg"
              >
                Registration
              </a>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isLoginModalOpen && (
            <motion.div
              key="modal" // Add a key for AnimatePresence
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }} // Initial scale and opacity for the modal
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="rounded-lg relative" // Set width, adjust as needed
              >
                <div
                  className="fixed pt-16 inset-0 bg-[#000] bg-opacity-50 transition-opacity duration-300 ease-in-out h-[100vh] flex items-center justify-center z-50"
                >
                  {" "}
                  {/* Overlay */}
                  <div
                    className="rounded-lg  transform transition-transform duration-300 ease-in-out"
                    style={{
                      transform: isLoginModalOpen ? "scale(1)" : "scale(0.8)",
                      opacity: isLoginModalOpen ? 1 : 0,
                    }}
                  >
                    <button
                      className="absolute top-32 ml-[45rem] z-50 text-slate-700 hover:text-gray-700"
                      onClick={closeLoginModal}
                    >
                      <FontAwesomeIcon className="text-2xl" icon={faXmark} />
                    </button>
                    <AuthComponent
                      setLoginModalOpen={setLoginModalOpen}
                    ></AuthComponent>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
