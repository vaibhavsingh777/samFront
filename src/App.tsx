import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import IndiaMap from "./pages/venues"; // you can add routes later

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#1A237E", // consistent background for full viewport
        color: "#fff",
      }}
    >
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content fills available space */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Example: add more routes */}
          {/* <Route path="/venues" element={<IndiaMap />} /> */}
        </Routes>
      </main>

      {/* Footer stays at the bottom, never overlaps */}
      <Footer />
    </div>
  );
};

export default App;
