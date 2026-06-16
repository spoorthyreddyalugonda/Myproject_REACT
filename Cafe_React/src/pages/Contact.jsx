function Contact() {
  return (
    <div className="page">
      <h1 className="title">📞 Contact Us</h1>
      <p className="subtitle">
        We’d love to hear from you! Visit us or send a message ☕
      </p>

      <div className="contact-container">
        
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>☕ Cafe React</h2>

          <p>📍 Hyderabad, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 cafe@bello.com</p>

          <h3>Opening Hours</h3>
          <p>Mon - Fri: 8AM - 10PM</p>
          <p>Sat - Sun: 9AM - 11PM</p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Send Message 💬</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

      </div>

    </div>
  );
}

export default Contact;