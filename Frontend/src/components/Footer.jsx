import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer style={{ background: "#0f2235", color: "rgba(255,255,255,0.75)", fontFamily: "'Lato','Helvetica Neue',sans-serif", padding: "60px 24px 30px" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
        {/* Brand */}
        <div>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #27ae60, #2980b9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦷</div>
            <div>
              <div style={{ fontWeight: 900, fontSize: 15, color: "white", letterSpacing: 1, textTransform: "uppercase" }}>Planet H Dental</div>
              <div style={{ fontSize: 10, color: "#27ae60", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Dr. Sanjay Bajaj</div>
            </div>
          </Link>
          <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 290, color: "rgba(255,255,255,0.65)" }}>
            Comprehensive dental care for the whole family. Trusted by patients across Rohini, New Delhi since years.
          </p>
          <div style={{ marginTop: 18 }}>
            <a href="tel:09810077219" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: 15 }}>📞 098100 77219</a>
          </div>
          <div style={{ marginTop: 8 }}>
            <a href="mailto:info@planeth dental.com" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 13.5 }}>✉️ info@planethDental.com</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Navigate</h4>
          {[
            { label: "Home", path: "/" },
            { label: "Services", path: "/services" },
            { label: "Our Work", path: "/our-work" },
            { label: "About Us", path: "/about" },
            { label: "Contact", path: "/contact" },
          ].map(l => (
            <Link key={l.label} to={l.path} style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Treatments */}
        <div>
          <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Treatments</h4>
          {["General Dentistry", "Root Canal (RCT)", "Dental Implants", "Teeth Whitening", "Orthodontics", "Pediatric Care"].map(item => (
            <div key={item} style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>{item}</div>
          ))}
        </div>

        {/* Visit */}
        <div>
          <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Visit Us</h4>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 14 }}>
            B4 Rd, Pocket 3,<br />Sector 18B, Rohini,<br />New Delhi – 110089
          </p>
        
          
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>⭐ 4.6 / 5.0</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>18+ Google Reviews</div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>© 2025 Planet H Dental. All rights reserved.</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Built with ❤️ for healthy smiles everywhere</div>
      </div>
    </div>
    <style>{`
      @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 30px !important; } }
      @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </footer>
);

export default Footer;