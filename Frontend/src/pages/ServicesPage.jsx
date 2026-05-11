import React from 'react'
import { useInView } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";

const ServicesPage = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [treatRef, treatInView] = useInView(0.1);

  const services = [
    { icon: "🦷", title: "General Dentistry", desc: "Comprehensive dental care for the whole family. Routine checkups, cleanings, fillings and preventive treatments by Dr. Sanjay Bajaj.", items: ["Regular Checkups & Cleanings", "Painless Tooth Fillings", "Tooth Extractions", "Dental X-Rays", "Gum Disease Treatment", "Oral Health Consultation"], image: "/al-afdal-family.jpg", dark: false },
    { icon: "💎", title: "Cosmetic Dentistry", desc: "Transform your smile with advanced cosmetic dental treatments. Natural-looking results for a bright, confident smile.", items: ["Teeth Whitening", "Dental Veneers", "Smile Makeovers", "Tooth Bonding", "Crown & Bridge Work", "Aesthetic Reshaping"], image: "/Cosmetic-Dentistry-in-Pune-at-Devs-Oral-Care.webp", dark: true },
    { icon: "🔬", title: "Root Canal & Implants", desc: "Highly rated for painless RCT and dental implants. Single visit RCT available. Full mouth rehabilitation by specialist team.", items: ["Painless RCT / Single Visit RCT", "Dental Implants", "Full Mouth Rehabilitation", "Bone Grafting Procedures", "Fix Dental Implants / Dentures", "Wisdom Tooth Removal"], image: "/RCT.webp", dark: false },
    { icon: "🦴", title: "Orthodontic Treatment", desc: "Straighten your teeth with braces or Invisalign under Dr. Rohit Verma (Orthodontist) at Planet H Dental.", items: ["Metal Braces", "Invisalign", "Early Orthodontic Assessment", "Retainers", "Bite Correction", "Teeth Alignment"], image: "/What-Is-The-Invisalign-Braces-Cost-In-Mumbai-1024x525.jpg", dark: true },
    { icon: "👶", title: "Kids Dentistry", desc: "Gentle, friendly dental care designed especially for children. We make every visit a positive experience.", items: ["Child-Friendly Checkups", "Fluoride Treatments", "Dental Sealants", "Early Orthodontic Assessment", "Habit Counseling", "Parent Education"], image: "/kidsub4.png", dark: false },
  ];

  const quickServices = [
    { num: "01", label: "Dental Implants", desc: "Permanent, natural-looking tooth replacement", color: "#1a5276", light: "#eaf4fb" },
    { num: "02", label: "Painless RCT / Single Visit RCT", desc: "Pain-free nerve treatment to save your tooth", color: "#27ae60", light: "#e8f5e9" },
    { num: "03", label: "Dental Cleaning & Scaling", desc: "Deep clean to remove tartar and brighten enamel", color: "#148f77", light: "#e8f8f5" },
    { num: "04", label: "Kids Dentistry", desc: "Gentle, friendly dental care for children", color: "#d68910", light: "#fef9e7" },
    { num: "05", label: "Full Mouth Rehabilitation", desc: "Fix dental implants & dentures for complete smile", color: "#7d3c98", light: "#f5eef8" },
    { num: "06", label: "Orthodontic Treatment", desc: "Braces & Invisalign for perfectly aligned teeth", color: "#1a5276", light: "#eaf4fb" },
    { num: "07", label: "Braces & Invisalign", desc: "Modern orthodontic solutions for all ages", color: "#c0392b", light: "#fdecea" },
    { num: "08", label: "Cosmetic Dentistry", desc: "Smile makeovers, veneers, whitening & more", color: "#148f77", light: "#e8f8f5" },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "80px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Our Services</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Complete Dental Care Under One Roof
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8 }}>
            From routine cleanings to complex implants — Dr. Sanjay Bajaj and a specialist team provide comprehensive dental solutions at Planet H Dental, Rohini Sector 18B.
          </p>
        </div>
      </section>

      {/* Our Specialist Team */}
      <section style={{ padding: "50px 24px", background: "white", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#fff8e1", color: "#f57c00", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 20 }}>Our Specialist Team</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="team-grid">
            {[
              { name: "Dr. Sanjay Bajaj", role: "Chief Dental Surgeon & Founder" },
              { name: "Dr. Rohit Verma", role: "Orthodontist" },
              { name: "Dr. Vineet Gupta", role: "Oral Surgeon & Implantologist" },
              { name: "Dr. Kruti Jadwal", role: "Endodontist" },
            ].map((doc, i) => (
              <div key={i} style={{ background: "#f8fbff", border: "1px solid #eaf0f6", borderRadius: 14, padding: "22px 16px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#1a5276,#27ae60)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: 20, margin: "0 auto 12px" }}>
                  {doc.name.split(" ")[1][0]}
                </div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "#1a3a5c", marginBottom: 6 }}>{doc.name}</div>
                <div style={{ fontSize: 12, color: "#27ae60", fontWeight: 600 }}>{doc.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Treatments */}
      <section ref={treatRef} style={{ padding: "60px 24px 60px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 10 }}>All Treatments We Offer</h2>
            <p style={{ color: "#5d6d7e", fontSize: 15 }}>Comprehensive care for every dental need — all under one roof</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="treatments-grid">
            {quickServices.map((s, i) => (
              <div key={i} style={{ background: "white", border: "1.5px solid #eaf0f6", borderRadius: 16, padding: "26px 22px", position: "relative", overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", opacity: treatInView ? 1 : 0, transform: treatInView ? "translateY(0)" : "translateY(22px)", transition: `all 0.5s ease ${i * 0.07}s` }}>
                <div style={{ position: "absolute", top: -8, right: 10, fontSize: 72, fontWeight: 900, color: s.light, fontFamily: "'Georgia', serif", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{s.num}</div>
                <div style={{ width: 36, height: 4, borderRadius: 2, background: s.color, marginBottom: 18 }} />
                <div style={{ fontWeight: 900, fontSize: 15, color: "#1a3a5c", marginBottom: 8, lineHeight: 1.3, position: "relative" }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#7f8c8d", lineHeight: 1.6, position: "relative" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Service Cards */}
      <section style={{ padding: "10px 24px 80px", background: "#f8fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48, paddingTop: 40 }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,34px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>Our Core Service Areas</h2>
          </div>
          <div style={{ position: "relative" }}>
            {services.map((service, index) => (
              <div key={index} style={{ position: "sticky", top: 72 + index * 16, zIndex: index + 1, background: service.dark ? "#1a3a5c" : "white", borderRadius: 20, boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: service.dark ? "1px solid #1a5276" : "1px solid #eaf0f6", padding: "44px 48px", marginBottom: 24 }} className="service-card">
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
                    <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
          .team-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) { .treatments-grid { grid-template-columns: 1fr 1fr !important; } .team-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </div>
  );
};

export default ServicesPage;