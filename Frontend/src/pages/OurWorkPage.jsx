import React, { useState } from 'react'
import { useInView } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";

const CaseCard = ({ item, index }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} style={{ background: "white", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #eaf0f6", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: `all 0.6s ease ${index * 0.1}s` }}>
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img src={item.image} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,42,58,0.75) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", bottom: 16, left: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 3 }}>{item.tag}</div>
          <div style={{ fontWeight: 900, fontSize: 18, color: "white", fontFamily: "'Georgia', serif" }}>{item.title}</div>
        </div>
      </div>
      <div style={{ padding: "22px 24px" }}>
        <p style={{ color: "#5d6d7e", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>{item.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {item.tags.map((t, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "#f0f4f8", color: "#3d4e63", padding: "4px 11px", borderRadius: 20, border: "1px solid #e2e8f0" }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const OurWorkPage = () => {
  const [headerRef, headerInView] = useInView(0.2);
  const [statsRef, statsInView] = useInView(0.2);

  const cases = [
    {
      title: "Treatment Room",
      tag: "Our Facility",
      image: "/WhatsApp Image 2026-05-11 at 11.14.05 AM.jpeg",
      desc: "Our well-equipped treatment rooms ensure every patient receives care in a clean, modern, and comfortable environment.",
      tags: ["State-of-the-art Equipment", "Hygienic Setup", "Modern Technology"],
    },
    {
      title: "Dental Chair Setup",
      tag: "Advanced Equipment",
      image: "/WhatsApp Image 2026-05-11 at 11.14.06 AM (1).jpeg",
      desc: "Each dental unit is equipped with the latest instruments for painless and precise treatment — from RCT to implants.",
      tags: ["Painless RCT", "Dental Implants", "Full Mouth Rehab"],
    },
    {
      title: "Our Expert Team",
      tag: "Specialist Care",
      image: "/2026-04-21.webp",
      desc: "Dr. Sanjay Bajaj leads a team of specialists including an Orthodontist, Oral Surgeon, and Endodontist for comprehensive care.",
      tags: ["Dr. Rohit Verma", "Dr. Vineet Gupta", "Dr. Kruti Jadwal"],
    },
    {
      title: "Team at Work",
      tag: "Patient Care",
      image: "/png.webp",
      desc: "Our caring team ensures every patient feels comfortable and relaxed throughout their treatment at Planet H Dental.",
      tags: ["Compassionate Care", "Gentle Approach", "Pain-Free Treatment"],
    },
    {
      title: "Doctor's Cabin",
      tag: "Consultation Room",
      image: "/WhatsApp Image 2026-05-11 at 11.14.05 AM (1).jpeg",
      desc: "Every treatment begins with a thorough consultation in our comfortable and welcoming doctor's cabin at Rohini Sector 18B.",
      tags: ["Detailed Consultation", "Treatment Planning", "Patient Education"],
    },
    {
      title: "Clinic Equipment",
      tag: "Technology",
      image: "/unnamed.webp",
      desc: "Planet H Dental uses modern dental equipment and the latest technology to ensure precise, effective, and comfortable procedures.",
      tags: ["Modern Instruments", "Digital X-Rays", "Advanced Sterilization"],
    },
  ];

  const stats = [
    { value: "500+", label: "Patients Treated" },
    { value: "4.7★", label: "Google Rating" },
    { value: "31+", label: "5-Star Reviews" },
    { value: "4", label: "Specialists" },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      <section ref={headerRef} style={{ padding: "80px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #f0fdf4)", textAlign: "center" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Our Clinic</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Planet H Dental — A Closer Look
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8 }}>
            Take a look inside Planet H Dental, Rohini Sector 18B — where modern facilities, expert specialists, and compassionate care come together.
          </p>
        </div>
      </section>

      <section ref={statsRef} style={{ background: "#1a3a5c", padding: "28px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, textAlign: "center" }} className="work-stats">
          {stats.map((s, i) => (
            <div key={i} style={{ opacity: statsInView ? 1 : 0, transform: statsInView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}>
              <div style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, color: "#27ae60" }}>{s.value}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 1, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "60px 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }} className="cases-grid">
            {cases.map((item, i) => (
              <CaseCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 960px) { .cases-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .cases-grid { grid-template-columns: 1fr !important; } .work-stats { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </div>
  );
};

export default OurWorkPage;