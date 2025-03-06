import { useState } from "react";
import {
  FaHome,
  FaUserTie,
  FaUsers,
  FaShoppingCart,
  FaExchangeAlt,
  FaStar,
  FaEnvelope,
  FaInbox,
  FaFileAlt,
  FaLock,
  FaCogs,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

const DashboardSidebar = () => {
  const navLinks = (
    <>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"dashboardhome"} className="flex items-center">
          <FaHome />
          <span className="ml-5">Dashboards</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"adduser"} className="flex items-center">
          <FaUserTie />
          <span className="ml-5">Add Customer</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"Userlist"} className="flex items-center">
          <FaUsers />
          <span className="ml-5">Manage Customer</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"addpackage"} className="flex items-center">
          <FaUsers />
          <span className="ml-5">Add Packages</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"dashboardpackage"} className="flex items-center">
          <FaShoppingCart />
          <span className="ml-5">Manage Packages</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"/"} className="flex items-center">
          <FaExchangeAlt />
          <span className="ml-5">Transactions</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"/"} className="flex items-center">
          <FaStar />
          <span className="ml-5">Reviews</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"/"} className="flex items-center">
          <FaEnvelope />
          <span className="ml-5">Messages</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"/"} className="flex items-center">
          <FaInbox />
          <span className="ml-5">Inbox</span>
        </NavLink>
      </li>
      <li className="hover:bg-gray-800 hover:text-white hover:font-bold mb-2 p-2 gap-2 rounded-md flex items-center space-x-2 cursor-pointer">
        <NavLink to={"/"} className="flex items-center">
          <FaFileAlt />
          <span className="ml-5">Post</span>
        </NavLink>
      </li>
      <p className="text-gray-400 mt-4 text-sm">CUSTOM</p>
      {/* <li className="hover:bg-gray-800 rounded-md flex items-center gap-2 cursor-pointer">
      <LockOutlined className="text-white text-lg" />
      <span className=""><Menu mode="inline" items={items} className="bg-transparent text-white text-lg" /></span>
    </li> */}
      <li className="p-2 gap-2 hover:bg-gray-800 hover:text-white hover:font-bold mb-2 rounded-md flex items-center space-x-2 cursor-pointer relative">
        <NavLink to={"/"} className="flex items-center">
          <FaCogs />
          <span className="ml-5">Widgets</span>
          <span className="absolute right-2 bg-red-500 text-xs px-2 mt-1F py-0.5 rounded-full">
            Hot
          </span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        id="sidebar"
        className={`h-[100vh] fixed bg-violet-00 text-black font-bold w-72 p-5 shadow-xl transition-all duration-300`}
      >
        <div className="flex items-center space-x-3">
          <div className="w-[100px] ml-5 mt-1">
            <NavLink to={"/"} className="flex items-center">
              <img
                src="/src/Pages/Sheard/imges/A-removebg-preview.png"
                alt=""
              />
            </NavLink>
          </div>
          <h1 className="text-xl font-bold">Available Services</h1>
        </div>
        <p className="text-gray-400 mt-8 mb-5 text-base">MENU</p>
        <ul className="text-lg">{navLinks}</ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
