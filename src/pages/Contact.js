import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    setForm({
      name: "",
      email: "",
      message: ""
    });

    // hide message after 3 sec
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "auto",
      padding: "60px 20px"
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Get in Touch
        </h1>
        <p style={{ color: "#777", fontSize: "16px" }}>
          Have a question or idea? We'd love to hear from you.
        </p>
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        alignItems: "start"
      }}>

        {/* LEFT */}
        <div style={{
          background: "#111",
          color: "#fff",
          padding: "40px",
          borderRadius: "16px"
        }}>
          <h2 style={{ marginBottom: "20px" }}>Contact Info</h2>

          <p>📧 contact@cozicone.com</p>
          <p>⏱ Response: 24–48 hours</p>

          <p style={{ marginTop: "30px", color: "#bbb" }}>
            For collaborations or ads, mention details clearly.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div>
          <form onSubmit={handleSubmit} style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          }}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              style={inputStyle}
            />

            <button type="submit" style={{
              width: "100%",
              padding: "12px",
              background: "#111",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              marginTop: "10px"
            }}>
              Send Message
            </button>

            <p style={{
              fontSize: "12px",
              color: "#999",
              marginTop: "15px"
            }}>
              We respect your privacy. Your information will never be shared.
            </p>

          </form>

          {/* ✅ SUCCESS MESSAGE OUTSIDE FORM */}
          {sent && (
            <div style={{
              marginTop: "20px",
              padding: "12px",
              background: "#e6f9ec",
              border: "1px solid #b7ebc6",
              borderRadius: "8px",
              color: "#207544",
              fontSize: "14px",
              textAlign: "center"
            }}>
              Your message has been sent.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none",
  fontSize: "14px"
};