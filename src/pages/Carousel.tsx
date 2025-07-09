import React, { useState, useEffect } from 'react';
import './Carousel.css';

import img1 from './images/photo1.jpg';
import img2 from './images/photo1.jpg';
import img3 from './images/photo1.jpg';
import img4 from './images/photo1.jpg';
import img5 from './images/photo1.jpg';

const images = [img1, img2, img3, img4, img5];
const visibleCount = 3;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev < images.length - visibleCount ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : images.length - visibleCount));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // change every 3s
    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="carousel-container">
      <button className="nav-btn" onClick={prevSlide}>❮</button>
      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / visibleCount)}%)`,
          }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
      <button className="nav-btn" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;
