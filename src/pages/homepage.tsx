import React from "react";

const HomePage: React.FC = () => {
  const mainStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 1rem",
    background: "#1A237E",
    color: "white",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "40rem",
    textAlign: "center",
    fontFamily: "'Poppins', sans-serif",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const spanStyle: React.CSSProperties = {
    color: "#F5F5F5",
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: "1.1rem",
    color: "#D1D5DB",
    marginBottom: "1.5rem",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#43A047", // Green background
    color: "#FFFFFF", // White text
    borderRadius: "1rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "opacity 0.3s",
  };

  return (
    <main style={mainStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>
          Welcome to <span style={spanStyle}>SAM</span>
        </h1>
        <p style={paragraphStyle}>
          Your one-stop platform to connect, create, and collaborate. Whether
          you're here to explore or contribute, we've got something for you.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get Started
        </button>
      </div>
    </main>
  );
};

export default HomePage;
