import React, { useState } from "react";
import Sidebar from "../Sidebar";


// Comments for this file

// Below Component checks if the sidebar is Opened or Closed, and set the style properites according to the custom design

const MainComponent = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleIconStyle = {
        zIndex: 1040,
        position: 'fixed',
        top: '20px',
        left: isSidebarOpen ? 'calc(250px + 20px)' : '20px',
        fontSize: '30px',
        cursor: 'pointer',
        color: '#333', 
        transition: 'all 0.3s ease-in-out',
    };

    const mainContentStyle = {
        transition: 'margin-left 0.3s',
        marginLeft: isSidebarOpen ? '250px' : '0',
        backgroundColor: isSidebarOpen ? '#f4f4f4' : '#fff', 
        minHeight: '100vh',
        padding: '20px',
    };

    return (
        <div className="d-flex">
            <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={toggleIconStyle}>&#9776;</span>
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-grow-1" style={mainContentStyle}>
                {children}
            </div>
        </div>
    );
};

export default MainComponent;
