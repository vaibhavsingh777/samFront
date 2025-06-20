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
      background: "linear-gradient(145deg, #0D1B5A, #1A237E)", // subtle gradient for depth
      borderRadius: "20px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.25)", // more contrast
      padding: "2rem 1.5rem",
      maxWidth: 360,
      color: "#fff",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "1rem auto",
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
    {/* Profile Picture */}
    <img
      src={pfp}
      alt={name}
      style={{
        width: 95,
        height: 95,
        objectFit: "cover",
        borderRadius: "50%",
        border: "3px solid #FFD700",
        marginBottom: "1rem",
        boxShadow: "0 0 15px rgba(255, 215, 0, 0.5)", // glowing gold ring
        background: "#fff",
      }}
    />
    {/* Name */}
    <div
      style={{
        fontWeight: 800,
        fontSize: "1.3rem",
        color: "#FFD700",
        marginBottom: "0.6rem",
        letterSpacing: "0.6px",
      }}
    >
      {name}
    </div>
    {/* Testimonial */}
    <div
      style={{
        fontSize: "1.1rem",
        color: "#EAEAEA",
        opacity: 0.92,
        lineHeight: 1.6,
        fontStyle: "italic",
      }}
    >
      "{testimonial}"
    </div>
  </div>
);

export default TestimonialCard;
