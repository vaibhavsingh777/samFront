import React from "react";
import sarcLogo from "../assets/sarcbw.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        color: "#1A237E",
        padding: "2rem 0 1rem",
        width: "100%",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          flexWrap: "wrap", // ensures responsiveness
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            flex: "1 1 220px",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={sarcLogo}
            alt="SARC Logo"
            style={{
              height: "80px",
              width: "auto",
              borderRadius: "12px",
              padding: "6px",
            }}
          />
        </div>

        {/* Cities */}
        <div
          style={{
            flex: "1 1 200px",
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Cities</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // responsiveness
              gap: "0.6rem",
              marginTop: "0.2rem",
            }}
          >
            <span>Mumbai</span>
            <span>Pune</span>
            <span>Delhi</span>
            <span>Indore</span>
            <span>Jaipur</span>
          </div>
        </div>

        {/* Contact Us */}
        <div
          style={{
            flex: "1 1 220px",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>Contact Us</h3>
          <div>
            <span style={{ fontWeight: 500 }}>Arush Srivastava:</span>{" "}
            <a
              href="mailto:arush@email.com"
              style={{ color: "#1A237E", textDecoration: "underline" }}
            >
              arush@email.com
            </a>
          </div>
          <div>
            <span style={{ fontWeight: 500 }}>Khushi Yadav:</span>{" "}
            <a
              href="mailto:khushi@email.com"
              style={{ color: "#1A237E", textDecoration: "underline" }}
            >
              khushi@email.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
