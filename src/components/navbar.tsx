import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  scrollToId?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, scrollToId }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    if (scrollToId) {
      e.preventDefault();
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
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      style={{
        color: "#FFFFFF",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.textDecoration = "underline";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.textDecoration = "none";
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
        padding: "0.8rem 4vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.8rem",
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
          gap: "1rem",
        }}
      >
        <NavLink to="/" scrollToId="about">
          About
        </NavLink>
        <NavLink to="/" scrollToId="cities">
          Cities
        </NavLink>
        <NavLink to="/" scrollToId="testimonials">
          Testimonials
        </NavLink>
        <NavLink to="/" scrollToId="faqs">
          FAQs
        </NavLink>
        <NavLink to="/contacts">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
