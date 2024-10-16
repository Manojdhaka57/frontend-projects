import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <div className="sidebar-menu">
        <Sidebar />
      </div>
      <div className="contant-wrapper">{children}</div>
    </div>
  );
};

export default Layout;
