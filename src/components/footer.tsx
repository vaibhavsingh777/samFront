import React from "react";
import sarcLogo from "../assets/sarcbw.png";
import Marquee from "react-fast-marquee";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const marqueeText = "Connecting students and alumni across generations...";

const Footer = () => (
  <footer
    style={{
      backgroundColor: "#fff",
      color: "#1A237E",
      textAlign: "center",
      padding: "0",
      position: "relative",
      bottom: 0,
      width: "100%",
      fontWeight: "500",
      fontSize: "clamp(1rem, 2vw, 1.2rem)",
      boxSizing: "border-box",
      maxWidth: "100vw",
      overflow: "hidden",
      minHeight: "7rem",
      display: "block",
    }}
  >
    {/* Flex row: logo + contact + social links */}
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1.5rem 2vw 1rem 2vw",
        flexWrap: "wrap",
      }}
    >
      {/* SARC white Logo on the left */}
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
          color: "#1A237E",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaMapMarkerAlt size={24} color="#1A237E" />
          <span>SARC Room, SAC, IITB</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaPhoneAlt size={24} color="#1A237E" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Arush Srivastav: +91 9005549919</span>
            <span>Khushi Yadav: +91 8930097733</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <FaEnvelope size={24} color="#1A237E" />
          <a
            href="mailto:web@sarc-iitb.org"
            style={{ color: "#1A237E", textDecoration: "underline" }}
          >
            web@sarc-iitb.org
          </a>
        </div>
      </div>

      {/* Social Links Section */}
      <div
        style={{
          flex: "0 0 220px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          fontSize: "1.15rem",
          textAlign: "left",
          justifyContent: "center",
          color: "#1A237E",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}>
          Get connected with us on social networks:
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="https://in.linkedin.com/in/sarciitb"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1A237E" }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.instagram.com/sarc_iitb?igsh=MWlvc2R3djN3a2t0ZQ=="
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1A237E" }}
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.youtube.com/c/SARCIITBombay"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1A237E" }}
            aria-label="YouTube"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://www.facebook.com/SARC.IITB"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1A237E" }}
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
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
          background: "#1A237E",
          borderRadius: "1px",
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
            color: "#fff",
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
          background: "#1A237E",
          borderRadius: "1px",
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
            color: "#fff",
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
