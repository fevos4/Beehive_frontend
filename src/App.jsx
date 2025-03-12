import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Signin from "./Pages/Signin";
import ActivationPage from "./Pages/ActivationPage";
import BeehiveActivation from "./Pages/BeehiveActivation";
import Dashboard from "./Pages/Dashboard";
import History from "./Pages/History";
import Settings from "./Pages/Settings";

export default function App() {
  const location = useLocation();

  // Hide Navbar on "/dashboard" and "/history" pages
  const hideNavbar = location.pathname === "/dashboard" || location.pathname === "/history" || location.pathname === "/settings";

  return (
    <div>
      {!hideNavbar && <Navbar />} {/* Conditionally render Navbar */}

      <Routes>
        <Route 
          path="/" 
          element={
            <div>
              <Hero />
              <About />
            </div>
          } 
        />
        <Route path="/active" element={<ActivationPage />} />
        <Route path="/beeactive" element={<BeehiveActivation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
