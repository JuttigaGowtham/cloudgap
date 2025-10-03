import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Value from "./components/Values";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Penetration from "./components/Penetration";
import Aiframwork from "./components/Aiframwork";
import Security from "./components/Security";
import Risk from "./components/Risk";
import Digital from "./components/Digital"; // <-- Digital Transformation page
import Data from "./components/Data"; // <-- Data & AI Analytics page
import Cybersecurity from "./components/Cybersecurity"; // <-- Cybersecurity Services page

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Page */}
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Home />
              <Technologies />
              <div className="-mt-5">
                <Services />
              </div>
              <Value />
              <Team />
              <Footer />
            </div>
          }
        />

        {/* Digital Transformation Page */}
        <Route
          path="/digital"
          element={
            <div>
              <Navbar />
              <Digital />
              <Footer />
            </div>
          }
        />

        {/* Data & AI Analytics Page */}
        <Route
          path="/data"
          element={
            <div>
              <Navbar />
              <Data />
              <Footer />
            </div>
          }
        />

        {/* Cybersecurity Services Page */}
        <Route
          path="/cybersecurity"
          element={
            <div>
              <Navbar />
              <Cybersecurity />
              <Footer />
            </div>
          }
        />

        {/* Penetration Page */}
        <Route
          path="/penetration"
          element={
            <div>
              <Navbar />
              <Penetration />
              <Footer />
            </div>
          }
        />

        {/* AI Framework Page */}
        <Route
          path="/aiframwork"
          element={
            <div>
              <Navbar />
              <Aiframwork />
              <Footer />
            </div>
          }
        />

        {/* Security Compliance Page */}
        <Route
          path="/security"
          element={
            <div>
              <Navbar />
              <Security />
              <Footer />
            </div>
          }
        />

        {/* Risk Assessment Page */}
        <Route
          path="/risk"
          element={
            <div>
              <Navbar />
              <Risk />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
