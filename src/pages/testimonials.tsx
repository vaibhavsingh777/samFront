import React, { useRef, useEffect } from "react";
import TestimonialCard from "../components/testimonialcard";
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img.jpeg";
import img3 from "../assets/img.jpeg";
import img4 from "../assets/img.jpeg";
import img5 from "../assets/img.jpeg";
import backgroundTestimonial from "../assets/back.png";

const testimonialsData = [
  {
    pfp: img1,
    name: "Alice Johnson",
    testimonial:
      "This platform has transformed my career and connected me with amazing alumni.",
  },
  {
    pfp: img2,
    name: "Bob Smith",
    testimonial:
      "A wonderful experience that helped me grow both personally and professionally.",
  },
  {
    pfp: img3,
    name: "Carol Lee",
    testimonial:
      "The events are well organized and provide great networking opportunities.",
  },
  {
    pfp: img4,
    name: "David Kim",
    testimonial:
      "I highly recommend joining the Student Alumni Meet for valuable insights.",
  },
  {
    pfp: img5,
    name: "Eva Martinez",
    testimonial:
      "An inspiring community that truly supports students and alumni alike.",
  },
];

const MarqueeLine: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let direction = 1;
    let lastScrollY = window.scrollY;

    const animate = () => {
      if (marqueeRef.current) {
        const currentTransform =
          marqueeRef.current.style.transform || "translateX(0px)";
        const match = currentTransform.match(/-?\d+/);
        let currentX = match ? parseInt(match[0], 10) : 0;
        currentX += direction * 1.1;
        if (currentX > 0) currentX = -marqueeRef.current.scrollWidth / 2;
        if (currentX < -marqueeRef.current.scrollWidth / 2) currentX = 0;
        marqueeRef.current.style.transform = `translateX(${currentX}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      direction = scrollY > lastScrollY ? 1 : -1;
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        background: "#1A237E",
        overflow: "hidden",
        padding: "0.7rem 0",
        margin: "0 auto",
        position: "relative",
        borderTop: "2.5px solid #FFD700",
        borderBottom: "2.5px solid #FFD700",
        display: "flex",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "inline-flex",
          gap: "3rem",
          fontWeight: 700,
          fontSize: "2.1rem",
          color: "#fff",
          whiteSpace: "nowrap",
          letterSpacing: "0.2em",
          willChange: "transform",
        }}
      >
        {Array.from({ length: 8 }).map((_, idx) => (
          <span key={idx}>TESTIMONIALS</span>
        ))}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => (
  <section
    style={{
      width: "100vw",
      position: "relative",
      overflow: "hidden",
      minHeight: "80vh",
      padding: "0",
      fontFamily: "'Poppins', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid white",
      boxShadow:
        "0 0 20px 4px rgba(255,255,255,0.6), 0 0 40px 10px rgba(255,255,255,0.4) inset",
    }}
  >
    {/* Blurred Background */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${backgroundTestimonial})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(3px) brightness(0.7)",
        opacity: 1,
        zIndex: 1,
      }}
    />

    {/* Marquee */}
    <MarqueeLine />

    {/* Testimonials Grid */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        maxWidth: "900px",
        margin: "3rem auto",
        padding: "0 4vw",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      {testimonialsData.map((t, idx) => (
        <div
          key={idx}
          style={
            idx === testimonialsData.length - 1
              ? {
                  display: "flex",
                  justifyContent: "center",
                  gridColumn: "1 / -1",
                }
              : {}
          }
        >
          <TestimonialCard {...t} />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
