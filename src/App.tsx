<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import your button
import Register from './Register';


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
      <Register />
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

      {/* ScrollToTopButton overlays content, always visible when needed */}
      <ScrollToTopButton />

      {/* Footer stays at the bottom, never overlaps */}
      <Footer />
    </div>
  );
};

export default App;
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import PastEvents from './pages/PastEvents';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pastevents" element={<PastEvents />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

>>>>>>> e09826af727217774927827617d08886d899a0c4
