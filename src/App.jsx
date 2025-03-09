import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Signin from "./Pages/Signin";
import ActivationPage from "./Pages/ActivationPage";
import BeehiveActivation from "./Pages/BeehiveActivation";
import Dashboard from "./Pages/Dashboard";

export default function App() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar except on Dashboard route */}
      {location.pathname !== "/dashboard" && <Navbar />}

      <Routes>
        {/* Home route with Hero and About together */}
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

        {/* Separate route for Signin */}
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}
