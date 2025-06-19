import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      style={{
        color: isActive ? "#1A237E" : "#FFFFFF",
        background: isActive ? "#FFFFFF" : "transparent",
        padding: "0.5rem 1rem",
        borderRadius: "9px",
        textDecoration: "none",
        fontWeight: 600,
        letterSpacing: "0.3px",
        fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
        boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
        transition: "all 0.2s ease",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.background = isActive
          ? "#FFFFFF"
          : "rgba(255, 255, 255, 0.15)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.background = isActive
          ? "#FFFFFF"
          : "transparent";
      }}
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        backgroundColor: "#191970",
        padding: "1rem 4vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap", // enables responsiveness
        gap: "0.8rem", // spacing for wrapped elements
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          color: "#FFFFFF",
          fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
          fontWeight: 700,
          letterSpacing: "1px",
        }}
      >
        Student Alumni Meet
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cities">Cities</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink to="/contacts">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
