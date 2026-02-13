import React from 'react'
import { useInView } from "../hooks/useInView";

const ContactPage = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [contentRef, contentInView] = useInView(0.15);

  // Click on map → opens Google Maps with exact pin on Planet H Dental
  const MAPS_LINK = "https://maps.app.goo.gl/CpyuLtaTjwjXsv1FA";

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "70px 24px 50px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 620, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 14 }}>
            Visit Planet H Dental
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.75 }}>
            Dr. Sanjay Bajaj and the Planet H Dental team are here to help. Walk in or call us to book your appointment today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={contentRef} style={{ padding: "60px 24px 90px", background: "white" }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: 44,
          alignItems: "start",
          opacity: contentInView ? 1 : 0,
          transform: contentInView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }} className="contact-grid">

          {/* ── LEFT: Info ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

          

            {/* Contact Info */}
            <div style={{ background: "white", borderRadius: 16, padding: "26px", boxShadow: "0 4px 24px rgba(0,0,0,0.07)", border: "1px solid #eaf0f6" }}>
              <h4 style={{ fontWeight: 800, color: "#1a3a5c", marginBottom: 20, fontSize: 16 }}>Contact Details</h4>
              {[
                { icon: "📍", label: "Address", value: "B4 Rd, Pocket 3, Sector 18B, Rohini, New Delhi – 110089", href: MAPS_LINK },
                { icon: "📞", label: "Phone", value: "098100 77219", href: "tel:09810077219" },
                { icon: "✉️", label: "Email", value: "info@planethDental.com", href: "mailto:info@planethDental.com" },
                { icon: "🕐", label: "Hours", value: "Open Daily · Closes 8:30 PM" },
              ].map((info, i) => (
                <div key={i} style={{ display: "flex", gap: 13, marginBottom: i < 3 ? 16 : 0, paddingBottom: i < 3 ? 16 : 0, borderBottom: i < 3 ? "1px solid #f0f4f8" : "none" }}>
                  <div style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{info.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#7f8c8d", textTransform: "uppercase", letterSpacing: 1, marginBottom: 3 }}>{info.label}</div>
                    {info.href
                      ? <a href={info.href} target={info.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ color: "#1a5276", textDecoration: "none", fontSize: 14.5, fontWeight: 700 }}>{info.value}</a>
                      : <div style={{ fontSize: 14, color: "#3d4e63", fontWeight: 600, lineHeight: 1.5 }}>{info.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Call CTA */}
            <a href="tel:09810077219" style={{ display: "block", background: "#e67e22", color: "white", padding: "15px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", textAlign: "center", boxShadow: "0 4px 16px rgba(230,126,34,0.35)" }}>
              📞 Call to Book Appointment
            </a>
          </div>

          {/* ── RIGHT: Map ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

            {/*
              Clickable map wrapper — clicking anywhere on the map opens
              the exact Google Maps pin: https://maps.app.goo.gl/CpyuLtaTjwjXsv1FA
              
              The iframe uses Planet H Dental's place name + address as a search query
              so Google Maps shows the correct red pin on Sector 18B Rohini.
            */}
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", borderRadius: 18, overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.14)", border: "2px solid #eaf0f6", position: "relative", cursor: "pointer", textDecoration: "none" }}
            >
              <iframe
                title="Planet H Dental Location"
                src="https://maps.google.com/maps?q=Planet+H+Dental,+B4+Rd,+Pocket+3,+Sector+18B,+Rohini,+New+Delhi,+Delhi+110089&output=embed&z=17&hl=en"
                width="100%"
                height="430"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Transparent overlay so single click on map opens Google Maps */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "transparent",
                cursor: "pointer",
                zIndex: 2,
              }} />
              {/* "Click to open" badge */}
              <div style={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                borderRadius: 50,
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
                zIndex: 3,
                whiteSpace: "nowrap",
              }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#1a5276" strokeWidth="2" width="16" height="16">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#1a3a5c" }}>Click to open in Google Maps</span>
              </div>
            </a>

            {/* Address label below map */}
            <div style={{ background: "#f8fbff", borderRadius: "0 0 14px 14px", padding: "16px 22px", border: "1px solid #eaf0f6", borderTop: "none", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>📍</span>
                <span style={{ fontSize: 13.5, fontWeight: 600, color: "#3d4e63" }}>B4 Rd, Pocket 3, Sector 18B, Rohini, New Delhi 110089</span>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, fontWeight: 700, color: "#1a5276", textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 5 }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 820px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;