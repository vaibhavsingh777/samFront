import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-900/90 text-white p-4 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          KECOMICCUHub
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Link to="/" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">Home</Link>
          <Link to="/about" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">About</Link>
          <Link to="/pastevents" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">Past Events</Link>
          <Link to="/memories" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">Memories</Link>
          <Link to="/testimonials" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">Testimonials</Link>
          <Link to="/faqs" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">FAQs</Link>
          <Link to="/contact" className="hover:text-blue-300 transition px-2 py-1 rounded hover:bg-indigo-800/50">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;