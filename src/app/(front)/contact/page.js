import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-badge">GET IN TOUCH</span>

          <h1 className="contact-title">
            Let’s Solve Your <span>Queries</span>
          </h1>

          <p className="contact-description">
            Have a question about our streaming platform? Need help with your
            account or subscriptions? Send us a message and our support team
            will get back to you as soon as possible.
          </p>

          <div className="contact-details">
            <div className="contact-box">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>msalman39707@gmail.com</p>
              </div>
            </div>

            <div className="contact-box">
              <div className="contact-icon">💬</div>
              <div>
                <h3>Live Support</h3>
                <p>Available 24/7 for your help</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll contact you shortly.</p>

            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input"
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What can we help you with?"
                className="input"
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                className="textarea"
                placeholder="Write your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

