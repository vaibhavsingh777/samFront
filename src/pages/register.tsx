import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import merge1 from "../assets/back.png";

// --- Reusable FormField Component ---
interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}
const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required,
  error,
  children,
}) => (
  <div style={{ marginBottom: "1.25rem" }}>
    <label htmlFor={htmlFor} style={{ fontWeight: 500 }}>
      {label}
      {required && <span style={{ color: "#FFD700" }}> *</span>}
    </label>
    <div style={{ marginTop: "0.5rem" }}>{children}</div>
    {error && (
      <div
        style={{
          color: "#ff6b6b",
          fontSize: "0.95rem",
          marginTop: "0.25rem",
        }}
        role="alert"
      >
        {error}
      </div>
    )}
  </div>
);

// --- Main Register Component ---
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Validation Logic ---
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.status) newErrors.status = "Please select your status.";
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!form.email.trim()) newErrors.email = "Email address is required.";
    if (!form.city) newErrors.city = "Select your city.";
    if (!form.rank.trim()) newErrors.rank = "JEE Advanced rank is required.";
    if (!form.category) newErrors.category = "Select your category.";
    if (!form.file) newErrors.file = "Screenshot is required.";
    return newErrors;
  };

  // --- Handle Input Changes ---
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, files, type } = e.target as HTMLInputElement;
    if (type === "file" && files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
  };

  // --- Handle Form Submission ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value || "");
    });

    try {
      await axios.post("http://127.0.0.1:8000/api/register/", formData);
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
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setSubmitted(false);
      if (err.response) {
        setErrors({
          form: `Backend Error: ${JSON.stringify(err.response.data)}`,
        });
      } else if (err.request) {
        setErrors({ form: "No response from server. Is backend running?" });
      } else {
        setErrors({ form: "Form error: " + err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        background: "#181c28",
      }}
    >
      {/* Background Image & Animated Blob */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${merge1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px) brightness(0.6)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ x: [-30, 30, -30], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          background: "radial-gradient(circle, #ffd70044, transparent)",
          borderRadius: "50%",
          top: "10%",
          left: "6%",
          filter: "blur(70px)",
          zIndex: 0,
        }}
      />

      {/* Glassmorphism Form Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "680px",
          margin: "4rem auto",
          padding: "2.5rem 2rem",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px) saturate(120%)",
          borderRadius: "20px",
          border: "1.5px solid rgba(255,255,255,0.22)",
          boxShadow: "0 10px 32px rgba(0,0,0,0.22)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            color: "#FFD700",
            marginBottom: "1.8rem",
            fontWeight: 800,
            letterSpacing: "0.02em",
          }}
        >
          Registration Form
        </h2>

        {errors.form && (
          <div
            style={{
              background: "#ffe3e3",
              color: "#b71c1c",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              marginBottom: "1.2rem",
              fontWeight: 600,
            }}
            role="alert"
          >
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ color: "#fff" }} noValidate>
          <FormField
            label="I am"
            htmlFor="status"
            required
            error={errors.status}
          >
            <select
              id="status"
              name="status"
              value={form.status}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.status}
            >
              <option value="">-- Select --</option>
              <option>Joining IIT Bombay this year</option>
              <option>Joining some other IIT this year</option>
              <option>Already a student of IIT B</option>
            </select>
          </FormField>

          <FormField
            label="Full Name"
            htmlFor="name"
            required
            error={errors.name}
          >
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.name}
            />
          </FormField>

          <FormField
            label="Phone Number (preferably WhatsApp)"
            htmlFor="phone"
            required
            error={errors.phone}
          >
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              maxLength={10}
              autoComplete="tel"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.phone}
            />
          </FormField>

          <FormField
            label="Email ID"
            htmlFor="email"
            required
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.email}
            />
          </FormField>

          <FormField
            label="Which city will you attend SAM in?"
            htmlFor="city"
            required
            error={errors.city}
          >
            <select
              id="city"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.city}
            >
              <option value="">-- Select City --</option>
              {["Mumbai", "Pune", "Jaipur", "Indore", "Delhi"].map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </FormField>

          <FormField
            label="JEE Advanced 2024 Rank"
            htmlFor="rank"
            required
            error={errors.rank}
          >
            <input
              id="rank"
              name="rank"
              type="text"
              value={form.rank}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.rank}
            />
          </FormField>

          <FormField
            label="Category"
            htmlFor="category"
            required
            error={errors.category}
          >
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.category}
            >
              <option value="">-- Select Category --</option>
              {["GEN", "GEN-EWS", "OBC-NCL", "SC", "ST", "PwD"].map((cat) => (
                <option key={cat}>{cat}</option>
              ))}
            </select>
          </FormField>

          {form.category && form.category !== "GEN" && (
            <FormField
              label="Category Rank (if applicable)"
              htmlFor="categoryRank"
            >
              <input
                id="categoryRank"
                name="categoryRank"
                type="text"
                value={form.categoryRank}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "1px solid #bbb",
                  background: "rgba(255,255,255,0.9)",
                  color: "#222",
                }}
              />
            </FormField>
          )}

          <FormField
            label="Upload screenshot of JoSAA Choice Filling"
            htmlFor="file"
            required
            error={errors.file}
          >
            <input
              id="file"
              name="file"
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
              }}
              aria-invalid={!!errors.file}
            />
          </FormField>

          <FormField
            label="If not joining IIT Bombay, which IIT will you be joining?"
            htmlFor="iitOther"
          >
            <select
              id="iitOther"
              name="iitOther"
              value={form.iitOther}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
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
                <option key={iit}>{iit}</option>
              ))}
            </select>
          </FormField>

          <FormField
            label="Any questions you would like to ask?"
            htmlFor="questions"
          >
            <textarea
              id="questions"
              name="questions"
              rows={3}
              value={form.questions}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "1px solid #bbb",
                background: "rgba(255,255,255,0.9)",
                color: "#222",
                resize: "vertical",
              }}
            />
          </FormField>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "#FFC300" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "10px",
              backgroundColor: loading ? "#FFD70099" : "#FFD700",
              color: "#1A237E",
              fontSize: "1.16rem",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              border: "none",
              marginTop: "0.7rem",
              boxShadow: "0 4px 16px rgba(255,215,0,0.13)",
              letterSpacing: "0.01em",
              transition: "background 0.18s",
            }}
            aria-busy={loading}
          >
            {loading ? "Registering..." : "Register"}
          </motion.button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              style={{
                marginTop: "1.2rem",
                color: "lightgreen",
                textAlign: "center",
                fontSize: "1.13rem",
                fontWeight: 600,
              }}
              role="status"
            >
              🎉 Registration Successful!
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
};

export default Register;
