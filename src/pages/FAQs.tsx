import React, { useState } from "react";
import { FaChevronRight, FaChevronDown, FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

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

const FAQItemComponent: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.5)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        borderRadius: "12px",
        marginBottom: "1rem",
        padding: "1rem 1.5rem",
        transition: "all 0.3s ease",
        cursor: "pointer",
        boxShadow: isOpen ? "0 0 10px rgba(255,255,255,0.3)" : "none",
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
          transition: "max-height 0.4s ease, opacity 0.4s ease",
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? "0.8rem" : "0",
          color: "rgba(240, 240, 240, 0.85)",
          lineHeight: 1.8,
          fontSize: "1rem",
        }}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQs: React.FC = () => (
  <section
    style={{
      width: "100vw",
      padding: "4rem 1rem 5rem 1rem",
      maxWidth: "1024px",
      margin: "0 auto",
      color: "#fff",
      fontFamily: "'Poppins', sans-serif",
      boxSizing: "border-box",
      marginTop: "-4rem",
      marginBottom: "-4rem",
    }}
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
          background: " #FFD700",
          color: "#1A237E",
          fontWeight: 600,
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Still have questions?
      </button>
    </div>
  </section>
);

export default FAQs;
