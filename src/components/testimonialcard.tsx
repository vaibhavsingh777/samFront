import React from "react";

interface TestimonialCardProps {
  pfp: string;
  name: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  pfp,
  name,
  testimonial,
}) => (
  <div
    style={{
      background: "linear-gradient(145deg, #0D1B5A, #1A237E)",
      borderRadius: "20px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
      padding: "1.5rem 1.2rem",
      width: "100%",
      height: "100%",
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      border: "2px solid #FFD700",
      position: "relative",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 8px 28px rgba(0,0,0,0.35)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLDivElement).style.boxShadow =
        "0 4px 24px rgba(0,0,0,0.25)";
    }}
  >
    <img
      src={pfp}
      alt={name}
      style={{
        width: 85,
        height: 85,
        objectFit: "cover",
        borderRadius: "50%",
        border: "3px solid #FFD700",
        marginBottom: "0.9rem",
        boxShadow: "0 0 12px rgba(255, 215, 0, 0.5)",
        background: "#fff",
      }}
    />
    <div
      style={{
        fontWeight: 700,
        fontSize: "1.1rem",
        color: "#FFD700",
        marginBottom: "0.4rem",
        letterSpacing: "0.5px",
      }}
    >
      {name}
    </div>
    <div
      style={{
        fontSize: "0.95rem",
        color: "#EAEAEA",
        opacity: 0.9,
        lineHeight: 1.5,
        fontStyle: "italic",
      }}
    >
      "{testimonial}"
    </div>
  </div>
);

export default TestimonialCard;
