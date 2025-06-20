import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "2rem",
        bottom: "2.5rem",
        zIndex: 1000,
        background: "#1A237E",
        color: "#FFD700",
        border: "none",
        borderRadius: "50%",
        width: "48px",
        height: "48px",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 18px rgba(26,35,126,0.15)",
        cursor: "pointer",
        transition: "opacity 0.3s, transform 0.3s",
        opacity: visible ? 1 : 0,
        fontSize: "1.4rem",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
