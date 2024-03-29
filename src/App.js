// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherDetail from "./components/WeatherDetail";
import NewsDetail from "./components/NewsDetail";
import MainComponent from "./components/MainComponent";
import FinancialDetail from "./components/FinancialDetails";

// Comments for this file

// Below are the Routes for the login, register, dashboard, weather, news and financialDetails

// There is also route for home screen that is redirected to the custom route

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MainComponent><Dashboard /></MainComponent>} />
        <Route path="/weather" element={<MainComponent><WeatherDetail /></MainComponent>} />
        <Route path="/news" element={<MainComponent><NewsDetail /></MainComponent>} />
        <Route path="/financialDetails" element={<MainComponent><FinancialDetail /></MainComponent>} />
      </Routes>
    </Router>
  );
}

export default App;
