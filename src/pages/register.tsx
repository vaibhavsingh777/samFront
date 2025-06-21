import React, { useState } from "react";
import axios from "axios";
import merge1 from "../assets/back.png"; // Use the same background as About

const Register: React.FC = () => {
  const [form, setForm] = useState({
    status: "",
    name: "",
    phone: "",
    email: "",
    city: "",
    rank: "",
    category: "",
    categoryRank: "",
    iitOther: "",
    questions: "",
    file: null as File | null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (e.target.type === "file" && files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const isRequiredFilled = () => {
    return (
      form.status &&
      form.name.trim() &&
      /^[0-9]{10}$/.test(form.phone) &&
      form.email.trim() &&
      form.city &&
      form.rank.trim() &&
      form.file
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRequiredFilled()) {
      alert("Please fill all required (*) fields.");
      return;
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, (form as any)[key] || "");
    }

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", formData);
      alert("Registration successful!");
      setSubmitted(true);
      setForm({
        status: "",
        name: "",
        phone: "",
        email: "",
        city: "",
        rank: "",
        category: "",
        categoryRank: "",
        iitOther: "",
        questions: "",
        file: null,
      });
    } catch (err: any) {
      if (err.response) {
        alert(
          `Backend Error ${err.response.status}: ${JSON.stringify(
            err.response.data
          )}`
        );
      } else if (err.request) {
        alert("No response from server. Is backend running?");
      } else {
        alert("Form error: " + err.message);
      }
    }
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${merge1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(5px) brightness(0.6)",
          zIndex: 0,
        }}
      />

      {/* Frosted Glass Form */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "750px",
          margin: "5rem auto",
          padding: "2.5rem 2rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#FFD700",
            marginBottom: "1.5rem",
            fontWeight: 700,
          }}
        >
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} style={{ color: "#fff" }}>
          {[
            {
              label: "I am*",
              name: "status",
              type: "select",
              options: [
                "Joining IIT Bombay this year",
                "Joining some other IIT this year",
                "Already a student of IIT B",
              ],
            },
            {
              label: "Full Name*",
              name: "name",
              type: "text",
            },
            {
              label: "Phone Number (preferably WhatsApp)*",
              name: "phone",
              type: "tel",
            },
            {
              label: "Email ID*",
              name: "email",
              type: "email",
            },
            {
              label: "Which city will you attend SAM in?*",
              name: "city",
              type: "select",
              options: ["Mumbai", "Pune", "Jaipur", "Indore", "Delhi"],
            },
            {
              label: "JEE Advanced 2024 Rank*",
              name: "rank",
              type: "text",
            },
            {
              label: "Category*",
              name: "category",
              type: "select",
              options: ["GEN", "GEN-EWS", "OBC-NCL", "SC", "ST", "PwD"],
            },
          ].map((field, i) => (
            <label
              key={i}
              style={{
                display: "block",
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              {field.label}
              <br />
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    marginTop: "0.5rem",
                    background: "rgba(255,255,255,0.8)",
                    color: "#333",
                  }}
                >
                  <option value="">-- Select --</option>
                  {(field.options || []).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={(form as any)[field.name]}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    marginTop: "0.5rem",
                    background: "rgba(255,255,255,0.8)",
                    color: "#333",
                  }}
                />
              )}
            </label>
          ))}

          {form.category !== "GEN" && (
            <label style={{ display: "block", marginBottom: "1rem" }}>
              Category Rank (if applicable)
              <input
                type="text"
                name="categoryRank"
                value={form.categoryRank}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  marginTop: "0.5rem",
                  background: "rgba(255,255,255,0.8)",
                  color: "#333",
                }}
              />
            </label>
          )}

          <label style={{ display: "block", marginBottom: "1rem" }}>
            Upload screenshot of JoSAA Choice Filling*
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
                background: "rgba(255,255,255,0.8)",
                color: "#000",
              }}
            />
          </label>

          <label style={{ display: "block", marginBottom: "1rem" }}>
            If not joining IIT Bombay, which IIT will you be joining?
            <select
              name="iitOther"
              value={form.iitOther}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
                background: "rgba(255,255,255,0.8)",
                color: "#333",
              }}
            >
              <option value="">-- Select IIT --</option>
              {[
                "IIT Delhi",
                "IIT Kanpur",
                "IIT Madras",
                "IIT Kharagpur",
                "IIT Roorkee",
                "IIT Guwahati",
                "IIT Hyderabad",
                "IIT (BHU) Varanasi",
                "IIT Dhanbad (ISM)",
                "IIT Indore",
                "IIT Mandi",
                "IIT Ropar",
                "IIT Gandhinagar",
                "IIT Patna",
                "IIT Bhubaneswar",
                "IIT Jodhpur",
                "IIT Tirupati",
                "IIT Palakkad",
                "IIT Goa",
                "IIT Jammu",
                "IIT Dharwad",
              ].map((iit) => (
                <option key={iit} value={iit}>
                  {iit}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "block", marginBottom: "1.5rem" }}>
            Any questions you would like to ask?
            <textarea
              name="questions"
              rows={3}
              value={form.questions}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginTop: "0.5rem",
                background: "rgba(255,255,255,0.8)",
                color: "#333",
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              backgroundColor: "#FFD700",
              color: "#1A237E",
              fontSize: "1.1rem",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
            }}
          >
            Register
          </button>

          {submitted && (
            <p
              style={{
                marginTop: "1rem",
                color: "lightgreen",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              ✔️ Form submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Register;
