import { useState } from 'react';
import './Contact.css'; // <-- Importing external CSS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="contact-form">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Reach out with your questions or feedback.</p>

          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here..."
            rows={4}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">📧 hello@bestever.com</div>
          <div className="info-item">📞 +1 (555) 123-4567</div>
          <div className="info-item">📍 123 Design Street, Creative City</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

