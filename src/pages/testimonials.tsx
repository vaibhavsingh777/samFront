import React, { useRef, useEffect } from "react";
import img1 from "../assets/img.jpeg";
import img2 from "../assets/img.jpeg";
import img3 from "../assets/img.jpeg";
import img4 from "../assets/img.jpeg";
import img5 from "../assets/img.jpeg";
import backgroundTestimonial from "../assets/back.png";

const testimonialsData = [
  {
    pfp: img1,
    name: "AADIT SULE",
    testimonial:
      "Student Alumni Meet (SAM) organised in Pune by the Student Alumni Relations Cell (SARC), was truly  a memorable experience for me. I got a chance to meet the alumni of IITB even before I stepped on our campus. The alums shared stories from their time at IITB and gave us tips on making friends and balancing studies with fun activities.The alumni talked about how important it is to make friends and build memories during our time at IITB. They also encouraged us to explore our interests beyond academics. The event ended with alumni sharing their career journeys, offering us advice, and reminding us of the strong IITB network. It was an inspiring and motivating day, making me feel proud and excited to be part of the IITB community!",
  },
  {
    pfp: img2,
    name: "AMIT BHARTIYA",
    testimonial:
      "The Student Alumni Meet was my first event connecting me to IIT Bombay and introducing me to SARC. It was an enriching experience interacting with numerous alumni from different batches and branches, who shared their diverse and extensive experiences. Engaging with alumni working in various career fields provided me with valuable insights. Additionally, learning about the upcoming campus life and culture was truly exciting. Watching alumni interact like old friends and share their college memories was incredibly inspiring.",
  },
  {
    pfp: img3,
    name: "KRISH GUPTA",
    testimonial:
      "I had the pleasure of attending a student-alumni meetup in Jaipur a year ago, held at an alumnus's house. The event was a wonderful opportunity for upcoming freshers to meet and interact with the alumni of IIT Bombay.The atmosphere was warm and welcoming, with a cozy setting that made it easy for everyone to mingle and have meaningful conversations. The host was gracious and ensured that everyone felt at home.The meetup itself was incredibly beneficial. It allowed the freshers to gain valuable insights and advice from the alumni, who shared their experiences and offered guidance on how to navigate the academic and social aspects of life at IIT Bombay. The alumni were approachable and eager to help, making the freshers feel supported and motivated.",
  },
  {
    pfp: img4,
    name: "DARSH PATEL",
    testimonial:
      "I arrived at the 'Ideas to Impact Hub' in Pune for the IITB Student Alumni Meet (SAM). Surprisingly early, I met alumni from the 1980s. They welcomed me warmly, reminiscing about their IITB days. Over breakfast, we shared stories—alumni pride, hostel memories, and the changing times at IITB. They emphasized lifelong friendships, the evolving campus, and the importance of non-academic experiences. Discussions ranged from ragging to career advice, highlighting IITB's strong alumni network and global reputation. It was an inspiring start to my IITB journey!",
  },
  {
    pfp: img5,
    name: "ANIRUDDHA SHARMA",
    testimonial:
      "I attended sam in 2023 mid August, it was a great experience meeting people even before coming to insti, and most importantly meeting the alums . To my surprise I did find some amazing people there I didn't expect to attend . Definitely, it was a good experience.",
  },
];

const TestimonialCard: React.FC<{
  pfp: string;
  name: string;
  testimonial: string;
}> = ({ pfp, name, testimonial }) => (
  <div
    style={{
      background: "linear-gradient(145deg, #0D1B5A, #1A237E)",
      borderRadius: "16px",
      boxShadow: "0 0 20px rgba(255, 255, 255, 0.25)",
      padding: "1.2rem",
      minHeight: 450,
      color: "#fff",
      border: "2px solid #FFD700",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      gap: "1rem",
      width: "100%",
      maxWidth: 360,
      margin: "0 auto",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 8px 24px rgba(0,0,0,0.35)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 0 20px rgba(255,255,255,0.25)";
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <img
        src={pfp}
        alt={name}
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #FFD700",
          backgroundColor: "#fff",
        }}
      />
      <h3
        style={{
          color: "#FFD700",
          fontSize: "1.1rem",
          fontWeight: 700,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        {name}
      </h3>
    </div>
    <p
      style={{
        fontSize: "0.92rem",
        color: "#EAEAEA",
        textAlign: "justify",
      }}
    >
      "{testimonial}"
    </p>
  </div>
);

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
        width: "100%",
        background: "#1A237E",
        overflow: "hidden",
        padding: "0.7rem 0",
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

const Testimonials: React.FC = () => {
  // Split the cards into rows for 3-2 layout
  const row1 = testimonialsData.slice(0, 3);
  const row2 = testimonialsData.slice(3, 5);

  return (
    <section
      style={{
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        minHeight: "80vh",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid white",
        boxShadow:
          "0 0 20px 4px rgba(255,255,255,0.6), 0 0 40px 10px rgba(255,255,255,0.4) inset",
        background: "#1A237E",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${backgroundTestimonial})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(3px) brightness(0.7)",
          zIndex: 1,
        }}
      />

      {/* Marquee */}
      <MarqueeLine />

      {/* 3-2-1 Responsive Layout */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1200,
          margin: "3rem auto",
        }}
      >
        {/* Row 1: 3 cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {row1.map((t, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 320px",
                maxWidth: 360,
                minWidth: 260,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
        {/* Row 2: 2 cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          {row2.map((t, idx) => (
            <div
              key={idx}
              style={{
                flex: "1 1 320px",
                maxWidth: 360,
                minWidth: 260,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: 1 card per row */}
      <style>
        {`
        @media (max-width: 900px) {
          .testimonial-row {
            flex-direction: row !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 700px) {
          .testimonial-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 2rem !important;
          }
          .testimonial-card {
            max-width: 90vw !important;
            min-width: 0 !important;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
