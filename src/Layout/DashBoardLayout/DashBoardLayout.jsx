import React from "react";
import Header from "../../pages/Dashboard/Header/Header";
import Sidebar from "../../pages/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const DashBoardLayout = () => {
  return (
    <div className='grid-container'>
      <Header></Header>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoardLayout;
