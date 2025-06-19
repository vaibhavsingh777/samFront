import React from "react";
import mumImage from "../assets/mum.jpg";

const cities = [
  {
    name: "Mumbai",
    venue:
      "Fynd, WeWork Vijay Diamond, Cross Rd B, M.I.D.C, Ajit Nagar, Kondivita, Andheri East",
    venueLink: "https://maps.google.com/?q=Fynd, WeWork Vijay Diamond, Mumbai",
    date: "13th July, 2024",
    time: "10:00 AM - 1:00 PM",
  },
  {
    name: "Pune",
    venue: "WeWork, Tower 2, Kalyani Nagar",
    venueLink:
      "https://maps.google.com/?q=WeWork, Tower 2, Kalyani Nagar, Pune",
    date: "20th July, 2024",
    time: "11:00 AM - 2:00 PM",
  },
  {
    name: "Delhi",
    venue: "Innov8, Connaught Place, Gurgaon",
    venueLink: "https://maps.google.com/?q=Innov8, Connaught Place, Gurgaon",
    date: "27th July, 2024",
    time: "9:30 AM - 12:30 PM",
  },
  {
    name: "Jaipur",
    venue: "Startup Oasis, Sitapura",
    venueLink: "https://maps.google.com/?q=Startup Oasis, Sitapura, Jaipur",
    date: "3rd August, 2024",
    time: "10:30 AM - 1:30 PM",
  },
  {
    name: "Indore",
    venue: "IIM Incubation Center, Rau",
    venueLink: "https://maps.google.com/?q=IIM Incubation Center, Rau, Indore",
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
  transition: "transform 0.2s, box-shadow 0.2s",
  boxSizing: "border-box",
  flexWrap: "wrap",
};

const bannerHoverStyle: React.CSSProperties = {
  transform: "scale(1.02)",
  boxShadow: "0 8px 32px 0 rgba(26, 35, 126, 0.15)",
};

const cityNameStyle: React.CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: 800,
  flex: "0 0 220px",
  textTransform: "uppercase",
  color: "#FFFFFF",
  letterSpacing: "2px",
  marginRight: "2vw",
  whiteSpace: "nowrap",
};

const detailsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  gap: "3vw", // Increased gap for clearer separation
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "1.15rem",
  fontWeight: 400,
  color: "#fff",
  textTransform: "none",
  flexWrap: "wrap",
};

const detailItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",
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
  color: "#FFFFFF",
  textTransform: "none",
  wordBreak: "break-word",
  whiteSpace: "normal",
};

const CitiesBanners: React.FC = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <div style={{ width: "100vw", maxWidth: "100%", overflow: "hidden" }}>
      {cities.map((city, idx) => {
        const isMumbai = city.name === "Mumbai";

        const backgroundStyle = isMumbai
          ? {
              backgroundImage: `url(${mumImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "#FFFFFF",
              position: "relative",
              zIndex: 1,
            }
          : {};

        const overlayStyle = isMumbai
          ? {
              position: "absolute" as "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(26, 35, 126, 0.5)",
              zIndex: 0,
              borderRadius: bannerStyle.borderRadius || 0,
            }
          : {};

        return (
          <div
            key={city.name}
            style={{
              ...bannerStyle,
              ...backgroundStyle,
              ...(hovered === idx ? bannerHoverStyle : {}),
              position: "relative",
              color: "#FFFFFF",
              overflow: "hidden",
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {isMumbai && <div style={overlayStyle} />}
            <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <span style={cityNameStyle}>{city.name}</span>
              <div style={detailsStyle}>
                <div style={detailItemStyle}>
                  <span style={detailLabelStyle}>Venue</span>
                  <a
                    href={city.venueLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...detailValueStyle,
                      textDecoration: "underline",
                      color: "#FFD700", // Gold for venue link
                      fontWeight: 600,
                      wordBreak: "break-word",
                      cursor: "pointer",
                    }}
                  >
                    {city.venue}
                  </a>
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
          </div>
        );
      })}
    </div>
  );
};

export default CitiesBanners;
