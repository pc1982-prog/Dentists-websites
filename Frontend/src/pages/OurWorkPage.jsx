import React, { useState } from 'react'
import { useInView } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";

const CaseCard = ({ item, index }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <div ref={ref} style={{
      background: "white",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      border: "1px solid #eaf0f6",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(32px)",
      transition: `all 0.6s ease ${index * 0.1}s`,
    }}>
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img
          src={item.image}
          alt={item.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={e => { e.target.style.background = item.bg; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,42,58,0.75) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", bottom: 16, left: 18 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 3 }}>{item.type}</div>
          <div style={{ fontWeight: 900, fontSize: 18, color: "white", fontFamily: "'Georgia', serif" }}>{item.name}</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "22px 24px" }}>
        <p style={{ color: "#5d6d7e", fontSize: 14.5, lineHeight: 1.75, marginBottom: 20 }}>{item.desc}</p>

        {/* Before / After */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          <div style={{ background: "#fef7f0", border: "1px solid #fde0c4", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#c0713a", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Before</div>
            <div style={{ fontSize: 13.5, color: "#5d4037", fontWeight: 600 }}>{item.before}</div>
          </div>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "12px 14px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#166534", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>After</div>
            <div style={{ fontSize: 13.5, color: "#14532d", fontWeight: 600 }}>{item.after}</div>
          </div>
        </div>

        {/* Treatment tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {item.treatments.map((t, i) => (
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
      name: "Rajan Khanna",
      type: "Smile Makeover",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=560&q=80",
      bg: "#e8f5e9",
      desc: "Rajan came in with severe discolouration and uneven spacing. After a thorough assessment, Dr. Bajaj recommended veneers and whitening for a complete transformation.",
      before: "Stained, uneven teeth with visible gaps",
      after: "Bright, aligned smile — boost in confidence",
      treatments: ["Porcelain Veneers", "Whitening", "Reshaping"],
    },
    {
      name: "Meena Sharma",
      type: "Root Canal & Crown",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=560&q=80",
      bg: "#e3f2fd",
      desc: "Meena had been avoiding treatment for months due to fear of pain. With our gentle RCT approach and modern anaesthesia, she experienced zero discomfort throughout.",
      before: "Severe tooth pain, afraid of dental visits",
      after: "Pain-free, saved her natural tooth with crown",
      treatments: ["Root Canal (RCT)", "Dental Crown", "Post Treatment"],
    },
    {
      name: "Deepak Malhotra",
      type: "Full Mouth Implants",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=560&q=80",
      bg: "#fff3e0",
      desc: "Deepak had been living with multiple missing teeth for over 5 years, affecting his confidence and ability to eat comfortably. We restored his full bite with implants.",
      before: "Multiple missing teeth, difficulty eating",
      after: "Complete set of permanent implants, full function",
      treatments: ["Dental Implants", "Bone Grafting", "Full Rehabilitation"],
    },
    {
      name: "Ananya Singh",
      type: "Orthodontic Treatment",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=560&q=80",
      bg: "#fce4ec",
      desc: "Ananya wanted straighter teeth before her wedding. Dr. Bajaj created a customised orthodontic plan that delivered beautiful alignment within the timeline she needed.",
      before: "Crowded front teeth, misaligned bite",
      after: "Perfectly aligned smile, ready for her big day",
      treatments: ["Braces", "Retainers", "Cosmetic Finishing"],
    },
    {
      name: "Vijay Bhatia",
      type: "Preventive & Restoration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=560&q=80",
      bg: "#ede7f6",
      desc: "Vijay hadn't visited a dentist in nearly a decade. We built a full care plan — from deep cleaning to fillings — restoring his oral health and preventing further damage.",
      before: "Tartar buildup, multiple cavities, gum issues",
      after: "Fully restored oral health, regular care plan set",
      treatments: ["Scaling & Polishing", "Multiple Fillings", "Gum Treatment"],
    },
    {
      name: "Priti Agarwal",
      type: "Pediatric Care",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=560&q=80",
      bg: "#e0f7fa",
      desc: "Priti's 7-year-old was terrified of dentists. Our child-friendly approach made him look forward to visits. Early intervention prevented issues that would've needed major treatment later.",
      before: "Dental anxiety, early signs of decay",
      after: "Regular happy visits, healthy growing teeth",
      treatments: ["Pediatric Checkup", "Fluoride Treatment", "Sealants"],
    },
  ];

  const stats = [
    { value: "500+", label: "Patients Treated" },
    { value: "4.6★", label: "Google Rating" },
    { value: "18+", label: "5-Star Reviews" },
    { value: "100%", label: "Follow-up Care" },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "80px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #f0fdf4)", textAlign: "center" }}>
        <div style={{ maxWidth: 660, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Patient Stories</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Real Patients, Real Transformations
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8 }}>
            Every smile has a story. Here are some of the patients Dr. Sanjay Bajaj and the Planet H Dental team have helped transform — from first visit to final result.
          </p>
        </div>
      </section>

      {/* Stats bar */}
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

      {/* Cases Grid */}
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