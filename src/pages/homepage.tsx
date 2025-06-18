import React from "react";
//inline styles for cities
const cities = [
  {
    name: "Mumbai",
    venue:
      "Fynd, WeWork Vijay Diamond, Cross Rd B, M.I.D.C, Ajit Nagar, Kondivita, Andheri East",
    date: "13th July, 2024",
    time: "10:00 AM - 1:00 PM",
  },
  {
    name: "Pune",
    venue: "WeWork, Tower 2, Kalyani Nagar",
    date: "20th July, 2024",
    time: "11:00 AM - 2:00 PM",
  },
  {
    name: "Delhi",
    venue: "Innov8, Connaught Place, Gurgaon",
    date: "27th July, 2024",
    time: "9:30 AM - 12:30 PM",
  },
  {
    name: "Jaipur",
    venue: "Startup Oasis, Sitapura",
    date: "3rd August, 2024",
    time: "10:30 AM - 1:30 PM",
  },
  {
    name: "Indore",
    venue: "IIM Incubation Center, Rau",
    date: "10th August, 2024",
    time: "11:00 AM - 2:00 PM",
  },
];

const bannerStyle: React.CSSProperties = {
  width: "100vw",
  maxWidth: "100%",
  background: "#1A237E",
  color: "#fff",
  fontSize: "2.1rem",
  fontWeight: 700,
  textAlign: "left",
  padding: "2.2rem 4vw",
  margin: "0",
  border: "none",
  outline: "none",
  cursor: "pointer",
  letterSpacing: "1.5px",
  fontFamily: "'Poppins', sans-serif",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "flex-start",
  gap: "2vw",
  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s, opacity 0.2s",
  boxSizing: "border-box",
  flexWrap: "wrap", // allow wrapping on small screens
};

const bannerHoverStyle: React.CSSProperties = {
  opacity: 0.93,
  background: "#16205a",
  transform: "scale(1.02)",
  boxShadow: "0 8px 32px 0 rgba(26, 35, 126, 0.15)",
};

const cityNameStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 800,
  flex: "0 0 220px",
  textTransform: "uppercase",
  color: "#fff",
  letterSpacing: "2px",
  marginRight: "2vw",
  whiteSpace: "nowrap",
};

const detailsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "2vw",
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "flex-start",
  fontSize: "1.15rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "none",
  flexWrap: "wrap", // allow wrapping for detail columns if needed
};

const detailItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  flex: 1,
  minWidth: "180px",
  maxWidth: "100%",
  wordBreak: "break-word",
};

const detailLabelStyle: React.CSSProperties = {
  fontWeight: 600,
  fontSize: "0.98rem",
  color: "#cfcfcf",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const detailValueStyle: React.CSSProperties = {
  fontWeight: 400,
  fontSize: "1.12rem",
  color: "#fff",
  textTransform: "none",
  wordBreak: "break-word",
  whiteSpace: "normal",
};

const AboutSAM: React.FC = () => (
  <section
    style={{
      background: "#1A237E",
      padding: "3rem 1rem",
      width: "100%",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <p
        style={{
          color: "#F5F5F5",
          fontSize: "2.4rem", // increased size
          lineHeight: 1.8,
          textAlign: "center",
          fontFamily: "'Dancing Script', cursive", // elegant cursive font
        }}
      >
        Not just a meet — a journey from campus corridors to life beyond
      </p>
    </div>
  </section>
);

const CitiesBanners: React.FC = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div style={{ width: "100vw", maxWidth: "100%", overflow: "hidden" }}>
      {cities.map((city, idx) => (
        <div
          key={city.name}
          style={{
            ...bannerStyle,
            ...(hovered === idx ? bannerHoverStyle : {}),
          }}
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <span style={cityNameStyle}>{city.name}</span>
          <div style={detailsStyle}>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Venue</span>
              <span style={detailValueStyle}>{city.venue}</span>
            </div>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Date</span>
              <span style={detailValueStyle}>{city.date}</span>
            </div>
            <div style={detailItemStyle}>
              <span style={detailLabelStyle}>Time</span>
              <span style={detailValueStyle}>{city.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage: React.FC = () => (
  <div>
    {/* About SAM Section */}
    <AboutSAM />
    {/* City Banners Section */}
    <CitiesBanners />
  </div>
);

export default HomePage;
