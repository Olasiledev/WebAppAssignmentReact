import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
    const sidebarStyles = {
        position: 'fixed',
        top: 0,
        left: isOpen ? '0' : '-250px',
        width: '250px',
        height: '100vh',
        backgroundColor: '#343a40',
        transition: 'left 0.3s ease-in-out',
        zIndex: 1050,
        padding: '20px 10px',
    };

    return (
        <>
            <style>
                {`
                    .sidebar-link {
                        color: #ffffff;
                        text-decoration: none;
                        display: block;
                        padding: 10px 15px;
                        border-radius: 4px;
                        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
                    }

                    .sidebar-link:hover, .sidebar-link:focus {
                        background-color: #50596c;
                        color: #ffffff;
                        text-decoration: none;
                    }

                    .active-sidebar-link {
                        background-color: #66707b;
                        color: #dcdcdc;
                    }
                `}
            </style>
            <div style={sidebarStyles}>
                <ul className="list-unstyled">
                    <li>
                        <NavLink to="/dashboard" className="sidebar-link" activeClassName="active-sidebar-link">Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/weather" className="sidebar-link" activeClassName="active-sidebar-link">Weather</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" className="sidebar-link" activeClassName="active-sidebar-link">News</NavLink>
                    </li>
                    <li>
                        <NavLink to="/financialDetails" className="sidebar-link" activeClassName="active-sidebar-link">Stocks</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
