import React from 'react'
import './Footer.css'
import { useState } from 'react'
import axios from 'axios'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      await axios.post('http://localhost:5000/api/feedback', formData); // changed endpoint
      setStatus('Feedback submitted successfully! Thank you.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error);
      setStatus('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <section className="section" id="feedback">
      <div className="top-header">
        <h1>We Value Your Feedback</h1>
        <span>Tell us what you think about our services!</span>
      </div>
      <div className="row">
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                id="name"
                className="input-field"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-area">
              <textarea
                id="message"
                placeholder="Your Feedback"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-button">
              <button className="btn" type="submit">
                Submit Feedback <i className="uil uil-comment-alt"></i>
              </button>
            </div>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Footer
