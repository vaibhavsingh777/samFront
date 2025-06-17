<<<<<<< HEAD
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
=======
import React from 'react';
import Home from './Home';

const App: React.FC = () => {
  return (
    <div className="App">
      
      <Home />
    </div>
  );
};

export default App;
>>>>>>> 98da14b325674086f281144431041b44d4ddecfb
