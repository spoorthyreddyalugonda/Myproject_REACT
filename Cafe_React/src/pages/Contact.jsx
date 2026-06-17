function Contact() {

  const handleSend = () => {
    alert("✅ Message sent successfully! We will contact you soon ☕");
  };

  return (
    <div className="page">
      <h1 className="title">📞 Contact Us</h1>

      <div className="contact-container">

        <div className="contact-info">
          <h2>☕ Cafe React</h2>
          <p>📍 Hyderabad, India</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 cafe@bello.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Message 💬</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button onClick={handleSend}>
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default Contact;