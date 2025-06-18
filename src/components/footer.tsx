import React from "react";
import sarcLogo from "../assets/sarcbw.png";
import Marquee from "react-fast-marquee";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const marqueeText = "Connecting students and alumni across generations...";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#fff", // Footer is full white
      color: "#1A237E", // All text is deep blue
      textAlign: "center",
      padding: "0", // No extra padding
      position: "relative",
      bottom: 0,
      width: "100%",
      // marginTop removed to avoid gap above footer
      fontWeight: "500",
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      boxSizing: "border-box",
      maxWidth: "100vw",
      overflow: "hidden",
      minHeight: "7rem",
      display: "block",
    }}
  >
    {/* Flex row: logo + contact */}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "1.5rem 2vw 1rem 2vw",
      }}
    >
      {/* sarc white Logo on the left */}
      <div style={{ flex: "0 0 auto", marginTop: "0.35rem" }}>
        <img
          src={sarcLogo}
          alt="SARC Logo"
          style={{ height: "64px", width: "auto", borderRadius: "8px" }}
        />
      </div>
      {/* Contact Section */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.15rem",
          textAlign: "left",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "#1A237E",
          }}
        >
          <FaMapMarkerAlt size={24} color="#1A237E" />
          <span>SARC Room, SAC, IITB</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "#1A237E",
          }}
        >
          <FaPhoneAlt size={24} color="#1A237E" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Arush Srivastav: +91 9005549919</span>
            <span>Khushi Yadav: +91 8930097733</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            color: "#1A237E",
          }}
        >
          <FaEnvelope size={24} color="#1A237E" />
          <a
            href="mailto:web@sarc-iitb.org"
            style={{ color: "#1A237E", textDecoration: "underline" }}
          >
            web@sarc-iitb.org
          </a>
        </div>
      </div>
    </div>
    {/* Marquees centered and full width, below the flex row */}
    <div style={{ width: "100%", marginTop: "0.5rem" }}>
      {/* Top Marquee */}
      <div
        style={{
          width: "100vw",
          minWidth: "500px",
          maxWidth: "20000px",
          margin: "0 auto",
          background: "#1A237E", // Marquee background deep blue
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
          transform: "rotate(-3deg)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#fff", // Marquee text white
            fontWeight: 700,
            fontSize: "1.1em",
            padding: "0.25rem 0",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
      {/* Bottom Marquee */}
      <div
        style={{
          width: "100vw",
          minWidth: "500px",
          maxWidth: "20000px",
          margin: "-1.5rem auto 0 auto",
          background: "#1A237E", // Marquee background deep blue
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
          transform: "rotate(3deg)",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#fff", // Marquee text white
            fontWeight: 700,
            fontSize: "1.1em",
            padding: "0.25rem 0",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
    </div>
  </footer>
);

export default Footer;
