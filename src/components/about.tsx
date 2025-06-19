import React from "react";
import merge1 from "../assets/merge1.jpg";

const About: React.FC = () => (
  <section
    style={{
      background: "#f0f0f3", // use your chosen greyish background
      padding: "4.5rem 1rem",
      width: "100%",
      minHeight: "70vh",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
      marginTop: "-2rem",
    }}
  >
    {/* Blurred background image, still visible through overlay */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${merge1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "blur(2.5px) brightness(0.7)",
        opacity: 0.8,
        zIndex: 0,
      }}
    />
    {/* Apple-style frosted glass overlay */}
    <div
      style={{
        position: "relative",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        zIndex: 1,
        backgroundColor: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "12px",
        boxShadow: "0 6px 32px 0 rgba(0,0,0,0.10)",
        padding: "2.5rem 2rem",
      }}
    >
      <p
        style={{
          fontSize: "3rem",
          lineHeight: 1.8,
          fontFamily: "'Dancing Script', cursive",
          marginBottom: "2rem",
          color: "white",
          textShadow: "0 2px 8px rgba(255,255,255,0.5)",
          fontWeight: 700,
        }}
      >
        Not just a meet — a journey from campus corridors to life beyond...
      </p>
      <p
        style={{
          fontSize: "1.15rem",
          lineHeight: 1.7,
          textAlign: "left",
          color: "white",
          textShadow: "0 2px 8px rgba(255,255,255,0.5)",
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
        <span style={{ color: "white", fontWeight: 700 }}>Structure:</span>
        <br />
        <span style={{ color: "white", fontWeight: 600 }}>1.</span> Speech by an
        alumnus (telling about the life after graduating from the institute with
        a broader perspective i.e. not specific to a particular field)
        <br />
        <span style={{ color: "white", fontWeight: 600 }}>2.</span> Presentation
        by the Chapter (in case of IITB, we have alumni chapters), briefing
        about the activities done round the year (the invited students as well
        as the current students will get to know about these)
        <br />
        <span style={{ color: "white", fontWeight: 600 }}>3.</span> Common
        Q&amp;A session where the doubts of students and their parents will be
        addressed.
      </p>
    </div>
  </section>
);

export default About;
