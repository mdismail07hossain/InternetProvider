import React from "react";
import DashboardSidebar from "../DashboardPages/SheardDashboard/DashboardSidebar";

import { Outlet } from "react-router-dom";
import NavbarDashboard from "../DashboardPages/SheardDashboard/NavbarDashboard";
import Dashboardfooter from "../DashboardPages/SheardDashboard/Dashboardfooter";

const Layoutdashboard = () => {
  return (
    <div className="flex gap-[18rem] bg-gray-100">
      <DashboardSidebar></DashboardSidebar>
      <div className="">
        <NavbarDashboard className="bg-gray-100"></NavbarDashboard>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Layoutdashboard;
