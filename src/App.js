import React, { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import Value from "./components/Values";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Credentials from "./components/Credentials";
import Penetration from "./components/Penetration";
import Aiframwork from "./components/Aiframwork";
import Security from "./components/Security";
import Risk from "./components/Risk";
import Digital from "./components/Digital";
import Data from "./components/Data";
import Cybersecurity from "./components/Cybersecurity";

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return null;
};

// Layout component for common Navbar and Footer
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

// Home page layout with additional components
const HomeLayout = () => (
  <div>
    <Navbar />
    <Home />
    <Technologies />
    <div className="-mt-5">
      <Services />
      <Credentials />
    </div>
    <Value />
    <Team />
    <Footer />
  </div>
);

export default function App() {
  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 },
  };

  const pageTransition = { duration: 0.4, ease: 'easeInOut' };

  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component */}
      <RouteWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                key="/"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <HomeLayout />
              </motion.div>
            }
          />
          <Route
            path="/technologies"
            element={
              <MainLayout>
                <motion.div
                  key="/technologies"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Technologies />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/digital"
            element={
              <MainLayout>
                <motion.div
                  key="/digital"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Digital />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/data"
            element={
              <MainLayout>
                <motion.div
                  key="/data"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Data />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/cybersecurity"
            element={
              <MainLayout>
                <motion.div
                  key="/cybersecurity"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Cybersecurity />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/penetration"
            element={
              <MainLayout>
                <motion.div
                  key="/penetration"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Penetration />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/aiframwork"
            element={
              <MainLayout>
                <motion.div
                  key="/aiframwork"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Aiframwork />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/credentials"
            element={
              <MainLayout>
                <motion.div
                  key="/credentials"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Credentials />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/values"
            element={
              <MainLayout>
                <motion.div
                  key="/values"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Value />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <motion.div
                  key="/contact"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Team />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/security"
            element={
              <MainLayout>
                <motion.div
                  key="/security"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Security />
                </motion.div>
              </MainLayout>
            }
          />
          <Route
            path="/risk"
            element={
              <MainLayout>
                <motion.div
                  key="/risk"
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Risk />
                </motion.div>
              </MainLayout>
            }
          />
        </Routes>
      </RouteWrapper>
    </Router>
  );
}

// RouteWrapper component uses AnimatePresence and the location to animate route changes
function RouteWrapper({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Key routes by pathname so AnimatePresence can detect changes */}
      {React.cloneElement(children, { key: location.pathname })}
    </AnimatePresence>
  );
}