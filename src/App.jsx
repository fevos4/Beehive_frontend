import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Signin from "./Pages/Signin";
import ActivationPage from "./Pages/ActivationPage";
import BeehiveActivation from "./Pages/BeehiveActivation";
import History from "./Pages/History";
import Settings from "./Pages/Settings";
import Features from "./Components/Features";
import Impact from "./Components/Impact";
import Setup from "./Components/Setup";
import Team from "./Components/Teams";
import Contact from "./Components/Contact";
import HiveGrid from "./Pages/HiveGrid";
import BeehiveDashboard from "./Pages/HiveDetail";
import Settingway from "./Pages/Settingway";

export default function App() {
  const location = useLocation();

  // Hide Navbar on "/dashboard" and "/history" pages
  const hideNavbar = location.pathname === "/Signin" || location.pathname === "/dashboard" || 
  location.pathname === "/history" || location.pathname === "/settings" 
  || location.pathname === "/hives" || location.pathname === "/beehivedashboard" || 
  location.pathname === "/settingway" || location.pathname === "/active" || location.pathname === "/beeactive";

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
              <Features/>
              <Impact/>
              <Setup/>
              <Team/>
              <Contact/>
              
              
            </div>
          } 
        />
        <Route path="/active" element={<ActivationPage />} />
        <Route path="/beeactive" element={<BeehiveActivation />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/hives" element={<HiveGrid />} />
        <Route path = "/beehivedashboard" element = {<BeehiveDashboard/>}/>
        <Route path = "/settingway" element = {<Settingway/>}/>
      </Routes>
    </div>
  );
}
