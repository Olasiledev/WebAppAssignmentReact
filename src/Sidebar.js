import React from "react";
import { NavLink } from "react-router-dom";
//SIDE BAR
const Sidebar = ({ isOpen }) => {
  const sidebarStyles = {
    position: "fixed",
    top: 0,
    left: isOpen ? "0" : "-250px",
    width: "250px",
    height: "100vh",
    backgroundColor: "#293241",
    transition: "left 0.3s ease-in-out",
    zIndex: 1050,
    padding: "20px 10px",
  };

  return (
    <>
      <style>
        {`
                    .sidebar-link {
                        display: block;
                        padding: 12px 20px;
                        color: #ffffff;
                        text-decoration: none;
                        transition: all 0.3s ease-in-out;
                    }

                    .sidebar-link:hover {
                        background-color: #1e2a38; // Changed hover background color
                        color: #ffffff;
                    }

                    .active-sidebar-link {
                        background-color: #1e2a38; // Changed active link background color
                        color: #ffffff;
                    }

                    .sidebar-link-icon {
                        margin-right: 10px;
                    }

                    .sidebar-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    .sidebar-header {
                        font-size: 20px;
                        color: #ffffff;
                        margin-bottom: 20px;
                    }
                `}
      </style>
      <div style={sidebarStyles}>
        <div className="sidebar-header">Navigation</div>
        <ul className="sidebar-list">
          <li>
            <NavLink
              to="/dashboard"
              className="sidebar-link"
              activeClassName="active-sidebar-link"
            >
              <i className="fas fa-tachometer-alt sidebar-link-icon"></i>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className="sidebar-link"
              activeClassName="active-sidebar-link"
            >
              <i className="fas fa-cloud sidebar-link-icon"></i>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className="sidebar-link"
              activeClassName="active-sidebar-link"
            >
              <i className="fas fa-newspaper sidebar-link-icon"></i>
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/financialDetails"
              className="sidebar-link"
              activeClassName="active-sidebar-link"
            >
              <i className="fas fa-chart-line sidebar-link-icon"></i>
              Stocks
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
