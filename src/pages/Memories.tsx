import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const memories = [
    {
      id: 1,
      title: "Annual Alumni Meet 2023",
      description: "Celebrating our successful year with alumni from across the globe",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "March 15, 2023"
    },
    {
      id: 2,
      title: "Leadership Summit",
      description: "Inspiring talks from industry leaders",
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      date: "April 22, 2023"
    },
    {
      id: 3,
      title: "Networking Gala",
      description: "Students connecting with alumni",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1412&q=80",
      date: "May 10, 2023"
    }
  ];

  // Auto-advance with smooth crossfade
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % memories.length);
        setIsTransitioning(false);
      }, 5000); // Matches transition duration
    }, 2000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [memories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Memories
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Relive our most cherished moments
        </p>

        {/* Crossfade Slider Container */}
        <div className="relative h-[70vh] max-h-[800px] rounded-2xl overflow-hidden shadow-2xl">
  {memories.map((memory, index) => (
    <div
      key={memory.id}
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
      }`}
    >
      <img
        src={memory.image}
        alt={memory.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end p-8 md:p-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{memory.title}</h2>
          <p className="text-lg md:text-xl text-gray-200 mb-4">{memory.description}</p>
          <p className="text-blue-300 font-medium">{memory.date}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Back to Top Button */}
        <div className="text-center mt-16">
          <Link
            to="#"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-48 mx-auto"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Memories;
