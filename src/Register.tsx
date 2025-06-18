import { useState } from 'react';

export default function Register() {

  <label>I am*<br />
  <select
    name="status"
    value={form.status}
    onChange={handleChange}
    required
  >
    <option value="">--Select--</option>
    <option value="Joining IIT Bombay this year">Joining IIT Bombay this year</option>
    <option value="Joining some other IIT this year">Joining some other IIT this year</option>
    <option value="Already a student of IIT B">Already a student of IIT B</option>
  </select>
</label>

  const [form, setForm] = useState({
    
    Full Name: '',
    Phone No.: '',
    Email ID: '',
  });
  <label>Which city will you attend SAM in?<br />
  <select
    id="city" name="city"
    required
  >
    <option value="">--Select--</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Pune">Pune</option>
    <option value="Jaipur">Jaipur</option>
    <option value="Indore">Indore</option>
    <option value="Delhi">Delhi</option>
  </select>
</label>

  const [form, setForm] = useState({
    JEE Advanced 2025 Rank: '',
    iitOther: '',
    questions: '',
    file: null
  });

<label for="category">Category:</label>
<select id="category" name="category" required>
  <option value="">-- Select Category --</option>
  <option value="GEN">GEN</option>
  <option value="GEN-EWS">GEN-EWS</option>
  <option value="OBC-NCL">OBC-NCL</option>
  <option value="SC">SC</option>
  <option value="ST">ST</option>
  <option value="PwD">PwD</option>
</select>

<br><br>

<label for="rank">Category Rank:</label>
<input type="number" id="rank" name="rank" placeholder="Enter your category rank" required />


  

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isRequiredFilled = () => {
    return (
      form.status &&
      form.name.trim() &&
      form.phone.trim() &&
      form.email.trim() &&
      form.city &&
      form.rank.trim() &&
      form.file
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRequiredFilled()) {
      alert("Please fill all required (*) fields.");
      return;
    }

    // Here you would send data to the server
    console.log("Submitted form:", form);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>SAM 2024 Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>I am*<br />
          <select name="status" value={form.status} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option>Joining IIT Bombay this year</option>
            <option>Joining some other IIT this year</option>
            <option>Already a student of IIT B</option>
          </select>
        </label><br /><br />

        <label>Full Name*<br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label><br /><br />

        <label>Phone Number (preferably WhatsApp)*<br />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label><br /><br />

        <label>Email ID*<br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label><br /><br />

        <label>In which city will you attend SAM?*<br />
          <select name="city" value={form.city} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Jaipur</option>
            <option>Indore</option>
            <option>Delhi</option>
          </select>
        </label><br /><br />

        <label>JEE Advanced 2024 Rank (Specify category rank also, if applicable)*<br />
          <input type="text" name="rank" value={form.rank} onChange={handleChange} required />
        </label><br /><br />

        <label>Upload a screenshot of your current JoSAA Choice Filling*<br />
          <input type="file" name="file" accept="image/*,application/pdf" onChange={handleChange} required />
        </label><br /><br />

        <label>If not joining IIT Bombay, then which IIT will you be joining?<br />
          <input type="text" name="iitOther" value={form.iitOther} onChange={handleChange} />
        </label><br /><br />

        <label>Any questions you would like to ask?<br />
          <textarea name="questions" rows="4" value={form.questions} onChange={handleChange}></textarea>
        </label><br /><br />

        <button type="submit">Register</button>
      </form>

      {submitted && <p style={{ color: 'green' }}>✔️ Form submitted successfully!</p>}
    </div>
  );
}

