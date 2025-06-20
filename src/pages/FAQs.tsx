import React, { useState } from "react";

const faqsData = [
  {
    question: "What is the Student Alumni Meet about?",
    answer:
      "Student Alumni Meet is an initiative to bridge the gap between students and alumni through events, talks, and networking opportunities.",
  },
  {
    question: "Who can participate in SAM events?",
    answer:
      "All students of the institute, across departments and years, are welcome to participate in the events organized under SAM.",
  },
  {
    question: "Are the events free to attend?",
    answer:
      "Yes, most of the events organized by SAM are free of cost. Registration details will be provided in advance.",
  },
  {
    question: "How can alumni participate?",
    answer:
      "Alumni can participate by registering on the alumni portal and attending the events organized specifically for alumni interactions.",
  },
  {
    question: "Where can I find updates about upcoming events?",
    answer:
      "Stay updated by following official institute channels, emails, and our social media handles dedicated to SAM.",
  },
];

const FAQItem: React.FC<{
  question: string;
  answer: string;
}> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#111111",
        border: "2px solid white",
        borderRadius: "12px",
        marginBottom: "1.5rem",
        padding: "1rem 1.2rem",
        color: "#fff",
        boxShadow: isOpen
          ? "0 0 12px rgba(255, 215, 0, 0.5)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          fontSize: "1.2rem",
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <span
            style={{
              color: isOpen ? "#FFD700" : "#FFFFFF",
              fontSize: "1.3rem",
              transition: "color 0.3s",
            }}
          >
            {isOpen ? "▼" : "▶"}
          </span>
          {question}
        </div>
        <span
          style={{
            color: isOpen ? "#FFD700" : "#FFFFFF",
            fontSize: "1.5rem",
            transition: "color 0.3s",
            fontWeight: 600,
          }}
        >
          {isOpen ? "-" : "+"}
        </span>
      </div>

      {isOpen && (
        <div
          style={{
            marginTop: "0.9rem",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#e0e0e0",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQs: React.FC = () => (
  <section
    style={{
      width: "100%",
      minHeight: "80vh",
      backgroundColor: "#1A237E",
      padding: "3rem 4vw",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    <h2
      style={{
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: "2.5rem",
        fontWeight: 700,
        marginBottom: "2.5rem",
        letterSpacing: "1px",
      }}
    >
      FAQs
    </h2>

    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {faqsData.map((faq, idx) => (
        <FAQItem key={idx} {...faq} />
      ))}
    </div>
  </section>
);

export default FAQs;
