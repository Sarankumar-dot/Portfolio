import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className={`contact__inner ${isVisible ? 'contact__inner--visible' : ''}`} ref={ref}>
        <div className="contact__header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's build<br />
            <span className="gradient-text">something epic.</span>
          </h2>
          <p className="section-subtitle">
            Currently available for freelance projects or full-time roles in frontend engineering.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className={`contact__field ${focused === 'name' ? 'contact__field--focused' : ''} ${formData.name ? 'contact__field--filled' : ''}`}>
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                required
              />
              <label htmlFor="contact-name">Your Name</label>
              <div className="contact__field-line" />
            </div>

            <div className={`contact__field ${focused === 'email' ? 'contact__field--focused' : ''} ${formData.email ? 'contact__field--filled' : ''}`}>
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                required
              />
              <label htmlFor="contact-email">Email Address</label>
              <div className="contact__field-line" />
            </div>

            <div className={`contact__field contact__field--textarea ${focused === 'message' ? 'contact__field--focused' : ''} ${formData.message ? 'contact__field--filled' : ''}`}>
              <textarea
                name="message"
                id="contact-message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused('')}
                required
              />
              <label htmlFor="contact-message">Your Message</label>
              <div className="contact__field-line" />
            </div>

            <button type="submit" className="contact__submit">
              Send Message
              <span className="material-icons">arrow_forward</span>
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <span className="material-icons contact__info-icon">mail</span>
              <div>
                <p className="contact__info-label">Email</p>
                <p className="contact__info-value">kumarsaran2004@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="material-icons contact__info-icon">phone</span>
              <div>
                <p className="contact__info-label">Phone</p>
                <p className="contact__info-value">+91 6379891950</p>
              </div>
            </div>
            <div className="contact__info-card">
              <span className="material-icons contact__info-icon">work</span>
              <div>
                <p className="contact__info-label">Availability</p>
                <p className="contact__info-value">Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
