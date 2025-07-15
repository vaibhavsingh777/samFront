import React from "react";
import CitiesBanners from "../components/citybanner";
import IndiaMap from "../components/map";

const CitiesWithMapLayout: React.FC = () => {
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tabletBreakpoint = 768;

  if (windowWidth < tabletBreakpoint) {
    return <CitiesBanners />;
  }

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: 0, // No gap between columns
    padding: 0,
    margin: 0,
    maxWidth: "100vw",
    width: "100vw",
    boxSizing: "border-box",
    alignItems: "stretch", // Force both columns to auto-match height
    background: "none",
    height: "100%", // Ensure child columns fill container
  };

  const citiesStyle: React.CSSProperties = {
    flex: 7,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const mapStyle: React.CSSProperties = {
    flex: 3,
    minWidth: 0,
    maxWidth: 420,
    // No height or padding
    display: "flex",
    alignItems: "stretch",
    justifyContent: "stretch",
  };

  return (
    <div style={containerStyle}>
      <div style={citiesStyle}>
        <CitiesBanners />
      </div>
      <div style={mapStyle}>
        <IndiaMap />
      </div>
    </div>
  );
};

export default CitiesWithMapLayout;
