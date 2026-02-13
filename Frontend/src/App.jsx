import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ServicesOverlapPage from "./pages/ServicesOverlappages";
import OurWorkPage from "./pages/OurWorkPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":     return <HomePage setPage={setPage} />;
      case "Services": return <ServicesPage setPage={setPage} />;
      case "ServicesOverlapPage": return <ServicesOverlapPage setPage={setPage} />;
      case "Our Work": return <OurWorkPage setPage={setPage} />;
      case "About":    return <AboutPage setPage={setPage} />;
      case "Contact":  return <ContactPage />;
      default:         return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "white" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Lato', 'Helvetica Neue', sans-serif; background: white; }
        button:focus-visible { outline: 2px solid #27ae60; outline-offset: 2px; }
        img { max-width: 100%; }
        a { color: inherit; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Navbar currentPage={currentPage} setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}