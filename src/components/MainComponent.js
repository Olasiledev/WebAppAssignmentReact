import React, { useState } from "react";
import Sidebar from "../Sidebar";

const MainComponent = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleIconStyle = {
        zIndex: 1040,
        position: 'fixed',
        top: '10px',
        left: isSidebarOpen ? 'calc(250px)' : '10px',
        fontSize: '30px',
        cursor: 'pointer',
        color: '#ffffff',
        transition: 'all 0.3s ease-in-out',
    };

    return (
        <div className="d-flex">
            <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={toggleIconStyle}>&#9776;</span>
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-grow-1" style={{ transition: 'margin-left 0.3s', marginLeft: isSidebarOpen ? '250px' : '0' }}>
                {children}
            </div>
        </div>
    );
};

export default MainComponent;
