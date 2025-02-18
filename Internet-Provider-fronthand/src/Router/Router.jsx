import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Properties from "../Pages/Properties/Properties";
import Agents from "../Pages/Agents/Agents";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import NewProperty from "../NewProperties/NewProperty";
import Gallery from "../Pages/Gallery/Gallery";
import AuthComponent from "@/Pages/Auth/AuthComponent";
import Layoutdashboard from "@/Dashboard/DashboardLayout/Layoutdashboard";
import DashboardHome from "@/Dashboard/DashboardPages/DashboardHome/DashboardHome";
import DashboardProperty from "@/Dashboard/DashboardPages/DashboardProperty/DashboardProperty";
import Dashboardservices from "@/Dashboard/DashboardPages/Dashboardservices/Dashboardservices";
import Deshboardpakage from "@/Dashboard/DashboardPages/DeshboardPakages/Deshboardpakage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/agents",
        element: <Agents></Agents>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/newproperty",
        element: <NewProperty></NewProperty>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/authcomponent",
        element: <AuthComponent></AuthComponent>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layoutdashboard></Layoutdashboard>,
    children: [
      {
        path: "dashboardhome",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "dashboardproperty",
        element: <DashboardProperty></DashboardProperty>,
      },
      {
        path: "dashboardservices",
        element: <Dashboardservices></Dashboardservices>,
      },
      {
        path: "dashboardpackage",
        element: <Deshboardpakage></Deshboardpakage>,
      },
    ],
  },
]);

export default Router;
