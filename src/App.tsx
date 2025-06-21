import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import your button
import Register from "./pages/register";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#1A237E",
        color: "#fff",
      }}
    >
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content fills available space */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/venues" element={<IndiaMap />} /> */}
        </Routes>
      </main>

      {/* ScrollToTopButton overlays content, always visible when needed */}
      <ScrollToTopButton />

      {/* Footer stays at the bottom, never overlaps */}
      <Footer />
    </div>
  );
};

export default App;
