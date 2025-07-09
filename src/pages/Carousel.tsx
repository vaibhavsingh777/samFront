import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval]);

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      <div className="mx-auto w-[90%] h-[400px] relative overflow-hidden">
        <motion.div
          className="flex transition-transform duration-500 ease-in-out"
          animate={{ x: `-${(index * 100) / total}%` }}
          style={{
            width: `${total * 25}%`, // 4 images × 25% = 100%
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-1/4 h-[400px] px-2 flex-shrink-0 flex-grow-0"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-10"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white z-10"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
