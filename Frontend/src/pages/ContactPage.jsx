import React from 'react'
import { useState } from "react";
import { CheckIcon } from "../components/Icons";
import { useInView } from "../hooks/useInView";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", practice: "", services: [], message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [headerRef, headerInView] = useInView(0.2);

  const serviceOptions = ["Custom Website", "SEO", "Paid Ads", "Content Creation", "Social Media", "Reputation Management", "Analytics", "Full Package"];

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const toggleService = s => setForm(f => ({ ...f, services: f.services.includes(s) ? f.services.filter(x => x !== s) : [...f.services, s] }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      <section ref={headerRef} style={{ padding: "70px 24px 50px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Get In Touch</div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 14 }}>
            Let's Grow Your Practice Together
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.75 }}>
            Fill out the form and a real member of our team will reach out within a few hours. No sales pressure, just honest conversation.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 24px 90px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 60, alignItems: "start" }} className="contact-grid">
          {/* Left Info */}
          <div>
            <div style={{ background: "linear-gradient(135deg, #1a3a5c, #1a5276)", borderRadius: 16, padding: "36px 30px", color: "white", marginBottom: 24 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 24 }}>Contact Information</h3>
              {[
                { icon: "📞", label: "Phone", value: "9999999999", href: "tel:9999999999" },
                { icon: "✉️", label: "Email", value: "hello@Strategix.com", href: "mailto:hello@Strategix.com" },
                { icon: "📍", label: "Address", value: "Denver, CO 80202" },
                { icon: "🕐", label: "Hours", value: "Mon–Fri: 8am – 6pm MT" },
              ].map(info => (
                <div key={info.label} style={{ display: "flex", gap: 14, marginBottom: 20 }}>
                  <div style={{ fontSize: 20, flexShrink: 0 }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 12, opacity: 0.7, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{info.label}</div>
                    {info.href
                      ? <a href={info.href} style={{ color: "white", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>{info.value}</a>
                      : <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{info.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div style={{ background: "#e8f5e9", borderRadius: 12, padding: "24px", border: "1px solid #c8e6c9" }}>
              <h4 style={{ fontWeight: 800, color: "#1a3a5c", marginBottom: 14, fontSize: 15 }}>Why Reach Out?</h4>
              {["Free, no-obligation consultation", "Response within a few hours", "No long-term contracts required", "100% focused on dental practices"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", borderBottom: i < 3 ? "1px solid #c8e6c9" : "none" }}>
                  <CheckIcon />
                  <span style={{ fontSize: 14, color: "#3d4e63" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          {submitted ? (
            <div style={{ background: "#e8f5e9", borderRadius: 16, padding: "60px 40px", textAlign: "center", border: "2px solid #c8e6c9" }}>
              <div style={{ fontSize: 60, marginBottom: 20 }}>✅</div>
              <h3 style={{ fontSize: 26, fontWeight: 900, color: "#1a3a5c", marginBottom: 14 }}>Message Received!</h3>
              <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.75 }}>
                Thank you for reaching out. A member of our team will contact you within a few hours during business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: 16, padding: "40px 36px", boxShadow: "0 4px 30px rgba(0,0,0,0.08)", border: "1px solid #eaf0f6" }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a3a5c", marginBottom: 24 }}>Request a Free Consultation</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                {[{ name: "name", label: "Your Name", type: "text", placeholder: "Dr. Jane Smith" },
                  { name: "practice", label: "Practice Name", type: "text", placeholder: "Smith Family Dentistry" }].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#3d4e63", marginBottom: 6 }}>{f.label} *</label>
                    <input name={f.name} value={form[f.name]} onChange={handleChange} type={f.type} placeholder={f.placeholder} required
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #dde6ed", fontSize: 14.5, outline: "none", boxSizing: "border-box", color: "#2d3748" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }} className="form-row">
                {[{ name: "email", label: "Email Address", type: "email", placeholder: "jane@smithdental.com" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "(720) 555-0100" }].map(f => (
                  <div key={f.name}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#3d4e63", marginBottom: 6 }}>{f.label} *</label>
                    <input name={f.name} value={form[f.name]} onChange={handleChange} type={f.type} placeholder={f.placeholder} required
                      style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #dde6ed", fontSize: 14.5, outline: "none", boxSizing: "border-box", color: "#2d3748" }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#3d4e63", marginBottom: 8 }}>I'm Interested In (select all that apply)</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {serviceOptions.map(s => (
                    <button type="button" key={s} onClick={() => toggleService(s)} style={{
                      padding: "7px 16px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                      background: form.services.includes(s) ? "#1a5276" : "white",
                      color: form.services.includes(s) ? "white" : "#3d4e63",
                      border: "1.5px solid " + (form.services.includes(s) ? "#1a5276" : "#dde6ed"),
                      transition: "all 0.2s",
                    }}>{s}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: "#3d4e63", marginBottom: 6 }}>Tell Us About Your Practice</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="What are your main marketing goals? Any specific challenges?"
                  style={{ width: "100%", padding: "11px 14px", borderRadius: 8, border: "1.5px solid #dde6ed", fontSize: 14.5, outline: "none", resize: "vertical", boxSizing: "border-box", color: "#2d3748", fontFamily: "inherit" }} />
              </div>
              <button type="submit" style={{ width: "100%", background: "#e67e22", color: "white", padding: "14px", borderRadius: 8, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(230,126,34,0.35)", letterSpacing: 0.3 }}>
                Send My Free Consultation Request →
              </button>
              <p style={{ textAlign: "center", color: "#7f8c8d", fontSize: 12.5, marginTop: 12 }}>🔒 Your information is secure and will never be shared.</p>
            </form>
          )}
        </div>
      </section>
      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;