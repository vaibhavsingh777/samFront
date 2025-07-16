import React from "react";
import merge1 from "../assets/merge1.jpg";

const About: React.FC = () => (
  <section
    style={{
      background: "#f0f0f3",
      padding: "4.5rem 1rem",
      width: "100%",
      minHeight: "70vh",
      position: "relative",
      overflow: "hidden",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    {/* Blurred background image */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${merge1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(3px) brightness(0.7)",
        opacity: 1,
        zIndex: 0,
      }}
    />

    {/* Frosted glass overlay */}
    <div
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2.5rem 2rem",
        backgroundColor: "#23a1c46e",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "14px",
        boxShadow: "0 6px 32px rgba(0, 0, 0, 0.15)",
        color: "white",
      }}
    >
      <p
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)", // Responsive font
          lineHeight: 1.5,
          fontFamily: "'Dancing Script', cursive",
          marginBottom: "1.8rem",
          textAlign: "center",
          color: "#fff",
          textShadow: "0 2px 8px rgba(255,255,255,0.4)",
          fontWeight: 700,
        }}
      >
        Not just a meet — a journey from campus corridors to life beyond...
      </p>

      <p
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.15rem)", // Responsive
          lineHeight: 1.7,
          textAlign: "justify",
          color: "hsla(196, 79%, 94%, 0.85)",
          textShadow: "0 1px 5px rgba(0,0,0,0.3)",
        }}
      >
        The Student Alumni Meet in the city is aimed to be a welcome event for
        IITB students. It is an opportunity for them to get guidance from the
        alumni of IIT Bombay. It will be an event where they will get to know
        what life looks like after getting out of IIT and also what is the
        current scenario of life in the institute from the experiences of our
        esteemed alumni and the current students (our team), respectively.
        <br />
        <br />
        <div style={{ textAlign: "center", margin: "1rem 0" }}>
  <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.8rem", }}>Structure</span>
</div>
        <br />
        <span style={{ fontWeight: 600 }}>1.</span> Speech by an alumnus,
        telling about the life after graduating from the institute with a
        broader perspective non-specific to a particular field.
        <br /><br />
        <span style={{ fontWeight: 600 }}>2.</span> Presentation of the IIT Bombay Alumni Chapter
        , briefing about the
        happenings in the institute round the year, for both the incoming and current students
        <br /><br />
        <span style={{ fontWeight: 600 }}>3.</span> A Q&amp;A session addressing queries of
        students and parents.
      </p>
    </div>
  </section>
);

export default About;
