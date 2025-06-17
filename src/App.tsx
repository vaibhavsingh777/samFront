import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import HomePage from "./pages/homepage";
// import About from "./pages/about";
// import Contact from "./pages/contacts";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <main
        style={{
          flex: 1,
          backgroundColor: "#1A237E",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
