import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        backgroundColor: "#1a237e",
        color: "white",
        padding: "60px 20px",
        fontFamily: "'Poppins', sans-serif",
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 1.2s ease, transform 1.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#0d1b2a",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            padding: "30px",
            borderRadius: "15px",
            flex: 1,
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h1 style={{ marginBottom: "8px", fontSize: "30px" }}>Contact Us</h1>
          <p
            style={{ marginBottom: "20px", color: "#cbd5e1", fontSize: "15px" }}
          >
            <span style={{ color: "#ffd700", fontWeight: 600 }}>
              We’d love to hear from you!
            </span>{" "}
            Reach out with your questions or feedback.
          </p>

          <label
            style={{
              display: "block",
              marginTop: "12px",
              marginBottom: "6px",
              fontWeight: "bold",
            }}
          >
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "16px",
              border: "1px solid #2b3a5f",
              borderRadius: "8px",
              backgroundColor: "#0d1b2a",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <label
            style={{
              display: "block",
              marginTop: "12px",
              marginBottom: "6px",
              fontWeight: "bold",
            }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "16px",
              border: "1px solid #2b3a5f",
              borderRadius: "8px",
              backgroundColor: "#0d1b2a",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
            }}
          />

          <label
            style={{
              display: "block",
              marginTop: "12px",
              marginBottom: "6px",
              fontWeight: "bold",
            }}
          >
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={4}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              marginBottom: "16px",
              border: "1px solid #2b3a5f",
              borderRadius: "8px",
              backgroundColor: "#0d1b2a",
              color: "#fff",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "linear-gradient(90deg, #fff, #ffd700)",
              color: "#0d1b2a",
              fontWeight: 700,
              fontSize: "15px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </form>

        <div
          style={{
            backgroundColor: "#0d1b2a",
            border: "2px solid rgba(255, 255, 255, 0.15)",
            padding: "30px",
            borderRadius: "15px",
            flex: 1,
            boxShadow: "0 0 12px rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(8px)",
            color: "#cbd5e1",
          }}
        >
          <h2
            style={{ fontSize: "24px", marginBottom: "20px", color: "#ffd700" }}
          >
            Get in Touch
          </h2>
          <div style={{ fontSize: "14.5px", marginBottom: "12px" }}>
            📧 hello@sam-iitb.com
          </div>
          <div style={{ fontSize: "14.5px", marginBottom: "12px" }}>
            📞 +91 98765 43210
          </div>
          <div style={{ fontSize: "14.5px", marginBottom: "12px" }}>
            📍 IIT Bombay, Powai, Mumbai
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
