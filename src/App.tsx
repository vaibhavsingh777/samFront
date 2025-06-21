import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Testimonials from './pages/Testimonials';
import PastEvents from './pages/PastEvents';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Contact from './pages/Contact';
import Memories from './pages/memories'; // Importing the Memories component
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#1A237E]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pastevents" element={<PastEvents />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/memories" element={<Memories />} /> {/* Added Memories route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;