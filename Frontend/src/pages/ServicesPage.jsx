import React from 'react'
import { useInView } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";

const ServicesPage = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [treatRef, treatInView] = useInView(0.1);

  const services = [
    { icon: "🦷", title: "General Dentistry", desc: "Comprehensive dental care for the whole family. From routine checkups and cleanings to fillings and preventive treatments.", items: ["Regular Checkups & Cleanings", "Tooth Fillings", "Tooth Extractions", "Dental X-Rays", "Gum Disease Treatment", "Oral Health Consultation"], image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80", dark: false },
    { icon: "💎", title: "Cosmetic Dentistry", desc: "Transform your smile with advanced cosmetic dental treatments. Dr. Bajaj uses the latest techniques to give you a bright, confident smile.", items: ["Teeth Whitening", "Dental Veneers", "Smile Makeovers", "Tooth Bonding", "Crown & Bridge Work", "Aesthetic Reshaping"], image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", dark: true },
    { icon: "🔬", title: "Advanced Treatments", desc: "State-of-the-art dental procedures including root canal therapy and dental implants, with modern technology for lasting results.", items: ["Root Canal Treatment (RCT)", "Dental Implants", "Full Mouth Rehabilitation", "Orthodontic Treatment", "Wisdom Tooth Removal", "Sinus Lift Procedures"], image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80", dark: false },
    { icon: "👶", title: "Pediatric & Preventive Care", desc: "Gentle, friendly dental care for children. We make visits comfortable and fun, building healthy habits from an early age.", items: ["Child-Friendly Checkups", "Fluoride Treatments", "Dental Sealants", "Early Orthodontic Assessment", "Habit Counseling", "Parent Education"], image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", dark: true },
  ];

  const quickServices = [
    {
      num: "01",
      label: "General Checkups",
      desc: "Routine exam, cleaning & preventive care",
      color: "#1a5276",
      light: "#eaf4fb",
    },
    {
      num: "02",
      label: "Teeth Whitening",
      desc: "Professional brightening for a radiant smile",
      color: "#27ae60",
      light: "#e8f5e9",
    },
    {
      num: "03",
      label: "Dental Implants",
      desc: "Permanent, natural-looking tooth replacement",
      color: "#c0392b",
      light: "#fdecea",
    },
    {
      num: "04",
      label: "Root Canal (RCT)",
      desc: "Pain-free nerve treatment to save your tooth",
      color: "#7d3c98",
      light: "#f5eef8",
    },
    {
      num: "05",
      label: "Crowns & Bridges",
      desc: "Restore strength and appearance of damaged teeth",
      color: "#d68910",
      light: "#fef9e7",
    },
    {
      num: "06",
      label: "Scaling & Polishing",
      desc: "Deep clean to remove tartar and brighten enamel",
      color: "#148f77",
      light: "#e8f8f5",
    },
    {
      num: "07",
      label: "Smile Design",
      desc: "Custom full-smile makeover for lasting confidence",
      color: "#1a5276",
      light: "#eaf4fb",
    },
    {
      num: "08",
      label: "Emergency Dental",
      desc: "Urgent same-day care for pain or trauma",
      color: "#c0392b",
      light: "#fdecea",
    },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "80px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>
            Our Services
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Complete Dental Care Under One Roof
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8 }}>
            From routine cleanings to complex implants — Dr. Sanjay Bajaj provides comprehensive dental solutions for patients of all ages at Planet H Dental, Rohini.
          </p>
        </div>
      </section>

      {/* All Treatments — numbered cards, no emoji icons */}
      <section ref={treatRef} style={{ padding: "60px 24px 60px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 10 }}>
              All Treatments We Offer
            </h2>
            <p style={{ color: "#5d6d7e", fontSize: 15 }}>Comprehensive care for every dental need — all under one roof</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="treatments-grid">
            {quickServices.map((s, i) => (
              <div key={i} style={{
                background: "white",
                border: "1.5px solid #eaf0f6",
                borderRadius: 16,
                padding: "26px 22px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                opacity: treatInView ? 1 : 0,
                transform: treatInView ? "translateY(0)" : "translateY(22px)",
                transition: `all 0.5s ease ${i * 0.07}s`,
              }}>
                {/* Big faint number in background */}
                <div style={{
                  position: "absolute",
                  top: -8,
                  right: 10,
                  fontSize: 72,
                  fontWeight: 900,
                  color: s.light,
                  fontFamily: "'Georgia', serif",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {s.num}
                </div>
                {/* Accent bar */}
                <div style={{ width: 36, height: 4, borderRadius: 2, background: s.color, marginBottom: 18 }} />
                <div style={{ fontWeight: 900, fontSize: 15, color: "#1a3a5c", marginBottom: 8, lineHeight: 1.3, position: "relative" }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#7f8c8d", lineHeight: 1.6, position: "relative" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Overlap Cards */}
      <section style={{ padding: "10px 24px 80px", background: "#f8fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48, paddingTop: 40 }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>
              Our Core Service Areas
            </h2>
          </div>
          <div style={{ position: "relative" }}>
            {services.map((service, index) => (
              <div key={index} style={{
                position: "sticky",
                top: 72 + index * 16,
                zIndex: index + 1,
                background: service.dark ? "#1a3a5c" : "white",
                borderRadius: 20,
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                border: service.dark ? "1px solid #1a5276" : "1px solid #eaf0f6",
                padding: "44px 48px",
                marginBottom: 24,
              }} className="service-card">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }} className="service-inner-grid">
                  <div>
                    <div style={{ fontFamily: "'Georgia',serif", fontSize: 68, fontWeight: 900, color: service.dark ? "rgba(39,174,96,0.15)" : "rgba(26,82,118,0.08)", lineHeight: 1, marginBottom: 4 }}>0{index + 1}</div>
                    <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#27ae60", marginBottom: 10 }}>{service.title}</div>
                    <h3 style={{ fontSize: "clamp(18px,2.2vw,26px)", fontWeight: 900, fontFamily: "'Georgia',serif", marginBottom: 14, color: service.dark ? "white" : "#1a3a5c", lineHeight: 1.3 }}>{service.desc.split('.')[0]}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.8, color: service.dark ? "rgba(255,255,255,0.72)" : "#5d6d7e", marginBottom: 22 }}>{service.desc}</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 14px" }}>
                      {service.items.map((item, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 600, color: service.dark ? "rgba(255,255,255,0.85)" : "#3d4e63" }}>
                          <div style={{ width: 19, height: 19, background: "#27ae60", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="10" height="10" viewBox="0 0 20 20" fill="white"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}>
                    <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={e => { e.target.style.background = "#e8f5e9"; }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 1024px) { .treatments-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 768px) {
          .treatments-grid { grid-template-columns: repeat(2,1fr) !important; }
          .service-inner-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .service-card { padding: 26px 20px !important; }
        }
        @media (max-width: 480px) { .treatments-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </div>
  );
};

export default ServicesPage;