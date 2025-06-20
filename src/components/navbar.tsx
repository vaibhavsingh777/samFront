import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import sarcLogo from "../assets/sarc.png";

const navLinks = [
  { label: "About", scrollToId: "about" },
  { label: "Cities", scrollToId: "cities" },
  { label: "Testimonials", scrollToId: "testimonials" },
  { label: "FAQs", scrollToId: "faqs" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (scrollToId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/" && location.pathname !== "/homepage") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRegister = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    navigate("/register");
  };

  return (
    <nav className="navbar-outer">
      <div className="navbar-inner">
        <div className="navbar-brand-logo">
          <img
            src={sarcLogo}
            alt="SARC Logo"
            style={{
              height: "44px",
              width: "44px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "0.85rem",
              border: "2.5px solid #fff",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
            }}
          />
          <span className="navbar-brand-text">Student Alumni Meet</span>
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="/"
              onClick={handleNavClick(link.scrollToId)}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}
          <button className="navbar-register" onClick={handleRegister}>
            REGISTER
          </button>
        </div>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />
      )}
      <style>{`
        .navbar-outer {
          background: #191970;
          color: #fff;
          width: 100%;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          position: relative;
          z-index: 100;
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0.8rem 4vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        .navbar-brand-logo {
          display: flex;
          align-items: center;
        }
        .navbar-brand-text {
          font-size: clamp(1.2rem, 4vw, 1.8rem);
          font-weight: 700;
          letter-spacing: 1px;
          color: #fff;
        }
        .navbar-links {
          display: flex;
          gap: 1.2rem;
          align-items: center;
        }
        .navbar-link {
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          cursor: pointer;
          transition: color 0.2s;
        }
        .navbar-link:hover {
          text-decoration: underline;
          color: #FFD700;
        }
        .navbar-register {
          background: #fff;
          color: #191970;
          font-weight: 900;
          border: none;
          border-radius: 50px;
          padding: 6px 22px;
          font-size: 1rem;
          margin-left: 0.5rem;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0,0,0,0.12);
          transition: transform 0.2s, color 0.2s;
        }
        .navbar-register:hover {
          color: #FFD700;
          transform: scale(1.07);
        }
        .navbar-hamburger {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }
        .navbar-backdrop {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.2);
          z-index: 99;
        }
        @media (max-width: 900px) {
          .navbar-inner {
            flex-wrap: wrap;
          }
          .navbar-hamburger {
            display: block;
            margin-left: 1rem;
          }
          .navbar-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: #191970;
            align-items: center;
            gap: 1.7rem;
            padding: 2.2rem 0 1.2rem 0;
            display: none;
            z-index: 101;
          }
          .navbar-links.open {
            display: flex;
            animation: fadeInDown 0.25s;
          }
          .navbar-link {
            width: 90vw;
            max-width: 350px;
            border: 1.5px solid #fff;
            border-radius: 12px;
            padding: 0.85rem 0;
            margin: 0.2rem 0;
            background: rgba(0,0,0,0.5); /* dark blue like FAQ */
            text-align: center;
            font-size: 1.1rem;
            transition: background 0.15s, color 0.15s;
          }
          .navbar-link:hover {
            background: #fff;
            color: #191970;
          }
          .navbar-register {
            width: 90vw;
            max-width: 350px;
            border: 1.5px solid #fff;
            border-radius: 12px;
            padding: 0.85rem 0;
            margin: 0.2rem 0;
            background: rgba(0,0,0,0.5);
            color: #fff;
            font-size: 1.1rem;
            font-weight: 900;
            text-align: center;
            transition: background 0.15s, color 0.15s;
          }
          .navbar-register:hover {
            background: #FFD700;
            color: #191970;
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        }
        @media (max-width: 600px) {
          .navbar-brand-text {
            font-size: 1.1rem;
          }
          .navbar-register, .navbar-link {
            font-size: 1rem;
            padding: 0.7rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
