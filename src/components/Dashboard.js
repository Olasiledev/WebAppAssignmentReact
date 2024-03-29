import React from "react";
import UserProfile from "./UserProfile";
import WeatherWidget from './WeatherWidget';
import NewsFeedWidget from './NewsFeedWidget';
import FinancialDataWidget from './FinancialDataWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../cssStyles/Dashboard.css';
import UserList from './UserList'; 
import Calendar from './Calendar';
import Calculator from './Calculator';
//MAIN DASHBOARD HOSTING WIDGETS
const Dashboard = () => {
    return (
        <div className="dashboard container-fluid">
            <h1 className="text-center mb-5">Dashboard</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col"><div className="card h-100"><div className="card-body"><h5>User Profile</h5><UserProfile /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>Weather</h5><WeatherWidget /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>News Feed</h5><NewsFeedWidget /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>Financial Data</h5><FinancialDataWidget /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>Calendar</h5><Calendar /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>Calculator</h5><Calculator /></div></div></div>
                <div className="col"><div className="card h-100"><div className="card-body"><h5>User List</h5><UserList /></div></div></div>
            </div>
        </div>
    );
};

export default Dashboard;