import { useState, useRef } from 'react';
import axios from 'axios';

<<<<<<< HEAD
const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  marginBottom: '20px',
  fontSize: '1rem',
  boxSizing: 'border-box' as const
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  marginTop: '10px',
  color: '#444',
  fontWeight: 'bold',
  fontSize: '15px',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '10px',
  fontSize: '1rem',
  cursor: 'pointer',
  width: '100%',
  marginTop: '10px'
};




=======
>>>>>>> e09826af727217774927827617d08886d899a0c4
export default function Register() {
  const [form, setForm] = useState({
    status: '',
    name: '',
    phone: '',
    email: '',
    city: '',
    rank: '',
    category: '',
    categoryRank: '',
    iitOther: '',
    questions: '',
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (e.target.type === 'file') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const isRequiredFilled = () => {
    return (
      form.status &&
      form.name.trim() &&
      /^[0-9]{10}$/.test(form.phone) &&
      form.phone.trim() &&
      form.email.trim() &&
      form.city &&
      form.rank.trim() &&
      form.file
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isRequiredFilled()) {
      alert('Please fill all required (*) fields.');
      return;
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key as keyof typeof form] || '');
    }
<<<<<<< HEAD
    if (form.file) {
  formData.append('file', form.file);
}
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register/', formData);
=======

    try {
      const res = await axios.post('http://localhost:8000/api/register/', formData);
>>>>>>> e09826af727217774927827617d08886d899a0c4
      console.log('Submitted form:', form);
      console.log('Server response:', res.data);
      alert('Registration successful!');
      setSubmitted(true);
<<<<<<< HEAD
    }  catch (err: any) {
  if (err.response) {
    console.error("❌ Response error:", err.response.status, err.response.data);
    alert(`Backend Error ${err.response.status}: ${JSON.stringify(err.response.data)}`);
  } else if (err.request) {
    console.error("❌ No response received:", err.request);
    alert("No response from server. Is backend running?");
  } else {
    console.error("❌ Setup error:", err.message);
    alert("Form error: " + err.message);
  }
}


  };

  return (
    <div style={{ padding: '30px',
    maxWidth: '600px',
    margin: '50px auto',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: 'black',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>SAM 2024 Registration</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>I am*<br />
          <select name="status" value={form.status} onChange={handleChange} required style={inputStyle}>
=======
    } catch (err) {
      console.error('API error:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>SAM 2024 Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>I am*<br />
          <select name="status" value={form.status} onChange={handleChange} required>
>>>>>>> e09826af727217774927827617d08886d899a0c4
            <option value="">--Select--</option>
            <option value="Joining IIT Bombay this year">Joining IIT Bombay this year</option>
            <option value="Joining some other IIT this year">Joining some other IIT this year</option>
            <option value="Already a student of IIT B">Already a student of IIT B</option>
          </select>
        </label><br /><br />

        <label>Full Name*<br />
<<<<<<< HEAD
          <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
        </label><br /><br />

        <label>Phone Number (preferably WhatsApp)*<br />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={inputStyle}/>
        </label><br /><br />

        <label>Email ID*<br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle}/>
=======
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label><br /><br />

        <label>Phone Number (preferably WhatsApp)*<br />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </label><br /><br />

        <label>Email ID*<br />
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
>>>>>>> e09826af727217774927827617d08886d899a0c4
        </label><br /><br />

        <label>Which city will you attend SAM in?<br />
          <select name="city" value={form.city} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Jaipur</option>
            <option>Indore</option>
            <option>Delhi</option>
          </select>
        </label><br /><br />

        <label>JEE Advanced 2024 Rank*<br />
<<<<<<< HEAD
          <input type="text" name="rank" value={form.rank} onChange={handleChange} required style={inputStyle} />
=======
          <input type="text" name="rank" value={form.rank} onChange={handleChange} required />
>>>>>>> e09826af727217774927827617d08886d899a0c4
        </label><br /><br />

        <label>Category*<br />
          <select name="category" value={form.category} onChange={handleChange} required>
            <option value="">--Select Category--</option>
            <option value="GEN">GEN</option>
            <option value="GEN-EWS">GEN-EWS</option>
            <option value="OBC-NCL">OBC-NCL</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="PwD">PwD</option>
          </select>
        </label><br /><br />

        {form.category !== "GEN" && (
          <label>Category Rank (if applicable)<br />
            <input
              type="text"
              name="categoryRank"
              value={form.categoryRank}
              onChange={handleChange}
              required={form.category !== "GEN"}
<<<<<<< HEAD
                        />
=======
            />
>>>>>>> e09826af727217774927827617d08886d899a0c4
          </label>
        )}<br /><br />

        <label>
          Upload a screenshot of your current JoSAA Choice Filling*<br />
          <input
            type="file"
            id="screenshot"
            name="file"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label><br /><br />

        <label>If not joining IIT Bombay, then which IIT will you be joining?</label><br />
        <select name="iitOther" value={form.iitOther} onChange={handleChange}>
          <option value="">-- Select IIT --</option>
          <option value="IIT Delhi">IIT Delhi</option>
          <option value="IIT Kanpur">IIT Kanpur</option>
          <option value="IIT Madras">IIT Madras</option>
          <option value="IIT Kharagpur">IIT Kharagpur</option>
          <option value="IIT Roorkee">IIT Roorkee</option>
          <option value="IIT Guwahati">IIT Guwahati</option>
          <option value="IIT Hyderabad">IIT Hyderabad</option>
          <option value="IIT BHU">IIT (BHU) Varanasi</option>
          <option value="IIT Dhanbad">IIT Dhanbad (ISM)</option>
          <option value="IIT Indore">IIT Indore</option>
          <option value="IIT Mandi">IIT Mandi</option>
          <option value="IIT Ropar">IIT Ropar</option>
          <option value="IIT Gandhinagar">IIT Gandhinagar</option>
          <option value="IIT Patna">IIT Patna</option>
          <option value="IIT Bhubaneswar">IIT Bhubaneswar</option>
          <option value="IIT Jodhpur">IIT Jodhpur</option>
          <option value="IIT Tirupati">IIT Tirupati</option>
          <option value="IIT Palakkad">IIT Palakkad</option>
          <option value="IIT Goa">IIT Goa</option>
          <option value="IIT Jammu">IIT Jammu</option>
          <option value="IIT Dharwad">IIT Dharwad</option>
        </select><br /><br />

<<<<<<< HEAD
        <label style={labelStyle}>Any questions you would like to ask?<br />
          <textarea name="questions" rows={4} value={form.questions} onChange={handleChange}  style={inputStyle}></textarea>
        </label><br /><br />

        <button type="submit" style={buttonStyle}>Register</button>

        {submitted && <p style={{ color: 'green' , textAlign: 'center', marginTop: '20px'}}>✔️ Form submitted successfully!</p>}
      </form>
    </div>
  );
}
=======
        <label>Any questions you would like to ask?<br />
          <textarea name="questions" rows={4} value={form.questions} onChange={handleChange}></textarea>
        </label><br /><br />

        <button type="submit">Register</button>

        {submitted && <p style={{ color: 'green' }}>✔️ Form submitted successfully!</p>}
      </form>
    </div>
  );
}
>>>>>>> e09826af727217774927827617d08886d899a0c4
