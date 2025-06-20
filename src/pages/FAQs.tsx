import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";
import ctm1 from "../assets/img.jpeg";
import ctm2 from "../assets/img.jpeg";
import back3 from "../assets/back3.png";

interface FAQItem {
  question: string;
  answer: string;
}

interface CTMCardProps {
  img: string;
  name: string;
  phone: string;
}

const CTMCard: React.FC<CTMCardProps> = ({ img, name, phone }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.13)",
      backdropFilter: "blur(10px) saturate(180%)",
      WebkitBackdropFilter: "blur(10px) saturate(180%)",
      border: "1.5px solid rgba(255,255,255,0.28)",
      borderRadius: "18px",
      padding: "2rem 1.5rem",
      color: "#fff",
      textAlign: "center",
      boxShadow: "0 6px 22px rgba(0,0,0,0.12)",
      transition: "transform 0.4s, box-shadow 0.4s",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform =
        "translateY(-8px) scale(1.03)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 12px 30px rgba(0,0,0,0.18)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform =
        "translateY(0) scale(1)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 6px 22px rgba(0,0,0,0.12)";
    }}
  >
    <img
      src={img}
      alt={name}
      style={{
        width: "130px",
        height: "130px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid #FFD700",
        marginBottom: "1rem",
        boxShadow: "0 0 12px rgba(255,215,0,0.4)",
        background: "#fff",
      }}
    />
    <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem", color: "#FFD700" }}>
      {name}
    </h3>
    <div
      style={{ fontSize: "1.05rem", color: "#CBD5E1", letterSpacing: "0.5px" }}
    >
      {phone}
    </div>
  </div>
);

const FAQItemComponent: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.13)",
        backdropFilter: "blur(10px) saturate(180%)",
        WebkitBackdropFilter: "blur(10px) saturate(180%)",
        border: "1.5px solid rgba(255,255,255,0.28)",
        borderRadius: "14px",
        marginBottom: "1rem",
        padding: "1rem 1.5rem",
        transition: "all 0.3s",
        cursor: "pointer",
        boxShadow: isOpen
          ? "0 0 10px rgba(255,255,255,0.18)"
          : "0 2px 8px rgba(26,35,126,0.09)",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
      aria-expanded={isOpen}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#fff",
          fontWeight: 600,
          fontSize: "1.15rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          {isOpen ? (
            <FaChevronDown color="#FFD700" size={18} />
          ) : (
            <FaChevronRight color="#FFD700" size={18} />
          )}
          {question}
        </div>
        {isOpen ? (
          <FaMinus color="#FFD700" size={14} />
        ) : (
          <FaPlus color="white" size={14} />
        )}
      </div>
      <div
        style={{
          maxHeight: isOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s, opacity 0.4s",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "0.8rem" : "0",
          color: "rgba(240, 240, 240, 0.92)",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What is Student Alumni Meet (SAM)?",
      answer:
        "Student Alumni Meet (SAM) is an initiative that connects current students with esteemed alumni for mentorship, networking, and inspiration.",
    },
    {
      question: "Who can participate in SAM events?",
      answer:
        "All current students of the institute and registered alumni are welcome to participate in SAM events.",
    },
    {
      question: "How can I register for SAM?",
      answer:
        "Registration details and links will be shared on official institute communication channels and the SAM website.",
    },
    {
      question: "Are there participation fees involved?",
      answer:
        "Most SAM events are free for students, while some specialized events may have minimal fees for logistical purposes.",
    },
    {
      question: "Can I volunteer for SAM?",
      answer:
        "Absolutely! Volunteering opportunities are announced before major events. Stay tuned to the official channels.",
    },
  ];

  const CTMData = [
    {
      img: ctm1,
      name: "Aarav Verma",
      phone: "+91 98765 43210",
    },
    {
      img: ctm2,
      name: "Ishita Rao",
      phone: "+91 98765 12345",
    },
  ];

  const scrollToEventHeads = () => {
    const element = document.getElementById("event-heads-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        padding: "4rem 1rem 5rem 1rem",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        boxSizing: "border-box",
        backgroundColor: "#1A237E",
        backgroundImage: `url(${back3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blurred background overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `url(${back3}) center/cover no-repeat`,
          filter: "blur(6px) brightness(0.7)",
          zIndex: 0,
        }}
      />
      {/* Frosted glass main overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          border: "1.5px solid rgba(255,255,255,0.22)",
          borderRadius: "18px",
          boxShadow: "0 6px 32px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
        className="glass"
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2.5rem",
            textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
            borderBottom: "2px solid rgba(255,255,255,0.3)",
            paddingBottom: "0.6rem",
            marginTop: "-2rem",
          }}
        >
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <FAQItemComponent key={index} {...faq} />
        ))}

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            style={{
              padding: "0.8rem 1.6rem",
              borderRadius: "8px",
              background: "#FFD700", // gold
              color: "#1A237E", // solid blue text
              fontWeight: 600,
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              boxShadow: "none",
              position: "relative",
              zIndex: 2,
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={scrollToEventHeads}
          >
            Still have questions?
          </button>
        </div>
        {/* Event Heads */}
        <div
          id="event-heads-section"
          ref={containerRef}
          style={{
            marginTop: "5rem",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "2.5rem",
              textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
              marginTop: "-3rem",
            }}
          >
            Event Heads
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              maxWidth: "950px",
              margin: "0 auto",
            }}
          >
            {CTMData.map((ctm, idx) => (
              <CTMCard key={idx} {...ctm} />
            ))}
          </div>
        </div>
      </div>
      {/* Apple "liquid glass" shine pseudo-element */}
      <style>{`
        .glass::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(255,255,255,0.09);
          border-radius: 18px;
          backdrop-filter: blur(2px);
          box-shadow:
            inset -10px -8px 0px -11px rgba(255,255,255,0.7),
            inset 0px -9px 0px -8px rgba(255,255,255,0.5);
          opacity: 0.55;
          z-index: 0;
          filter: blur(1px) brightness(110%);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default FAQs;
