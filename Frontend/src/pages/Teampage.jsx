import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CTASection } from "../components/SharedSections";
import { useInView } from "../hooks/useInView";

const TeamPage = () => {
  const navigate = useNavigate();
  const [headerRef, headerInView] = useInView(0.2);
  const [dentalRef, dentalInView] = useInView(0.15);
  const [fertilityRef, fertilityInView] = useInView(0.15);

  const specialists = [
    {
      name: "Dr. Rohit Verma",
      role: "Orthodontist",
      badge: "Orthodontics",
      badgeColor: "#1565c0",
      badgeBg: "#e3f2fd",
      bio: "Specializes in braces, Invisalign, and orthodontic corrections. Helps patients achieve perfectly aligned, beautiful smiles with modern techniques.",
      specialties: ["Braces", "Invisalign", "Bite Correction", "Aligners"],
      emoji: "🦷",
    },
    {
      name: "Dr. Vineet Gupta",
      role: "Oral Surgeon & Implantologist",
      badge: "Implants",
      badgeColor: "#7d3c98",
      badgeBg: "#f5eef8",
      bio: "Expert in complex extractions, bone grafting, and advanced dental implant procedures. Passionate about delivering pain-free, precise results.",
      specialties: ["Dental Implants", "Bone Grafting", "Complex Extractions", "Wisdom Teeth"],
      emoji: "🩺",
    },
    {
      name: "Dr. Kruti Jadwal",
      role: "Endodontist",
      badge: "RCT",
      badgeColor: "#c0392b",
      badgeBg: "#fdecea",
      bio: "Specializes in root canal treatments and endodontic procedures. Dedicated to making every RCT a painless and comfortable experience for patients.",
      specialties: ["Painless RCT", "Single Visit RCT", "Endodontics", "Nerve Treatment"],
      emoji: "👩‍⚕️",
    },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>

      {/* ── HEADER ── */}
      <section ref={headerRef} style={{ padding: "70px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{
          maxWidth: 680, margin: "0 auto",
          opacity: headerInView ? 1 : 0,
          transform: headerInView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>
            Our Team
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Meet the Specialists Behind Your Smile
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8 }}>
            Planet H Dental brings together a team of experienced dental specialists — all under one roof — to deliver expert, compassionate care for every patient.
          </p>
        </div>
      </section>

      {/* ── DENTAL TEAM ── */}
      <section ref={dentalRef} style={{ padding: "70px 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ display: "inline-block", background: "#e3f2fd", color: "#1565c0", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 14 }}>
              Dental Specialists
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>
              Our Expert Dental Team
            </h2>
          </div>

          {/* ── Dr. Sanjay Bajaj — Featured ── */}
          <div style={{
            background: "linear-gradient(135deg, #1a3a5c 0%, #1a5276 100%)",
            borderRadius: 20,
            padding: "44px 48px",
            marginBottom: 32,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 44,
            alignItems: "center",
            boxShadow: "0 12px 50px rgba(26,58,92,0.22)",
            opacity: dentalInView ? 1 : 0,
            transform: dentalInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.6s ease",
          }} className="founder-card">
            <div style={{ textAlign: "center", minWidth: 120 }}>
              <div style={{ width: 100, height: 100, borderRadius: "50%", background: "linear-gradient(135deg, #27ae60, #1e7e34)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, margin: "0 auto 14px" }}>
                👨‍⚕️
              </div>
              <div style={{ display: "inline-block", background: "#27ae60", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 20, letterSpacing: 0.5 }}>
                Founder
              </div>
            </div>
            <div>
              <h3 style={{ fontWeight: 900, fontSize: "clamp(22px,3vw,30px)", color: "white", fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                Dr. Sanjay Bajaj
              </h3>
              <p style={{ color: "#4fc08d", fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
                Chief Dental Surgeon & Founder, Planet H Dental
              </p>
              <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 15.5, lineHeight: 1.85, marginBottom: 22 }}>
                28+ years of experience in complex dental procedures. Dr. Bajaj has built Planet H Dental into one of Rohini's most trusted practices. Highly praised for his gentle approach and exceptional results in RCT, implants, and smile design.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Root Canal Treatment", "Dental Implants", "Full Mouth Rehab", "Smile Design", "Cosmetic Dentistry"].map((s, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.88)", padding: "5px 13px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.18)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── 3 Specialists ── */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="specialist-grid">
            {specialists.map((doc, i) => (
              <div key={i} style={{
                background: "white",
                borderRadius: 16,
                padding: "32px 26px",
                border: "1.5px solid #eaf0f6",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                textAlign: "center",
                opacity: dentalInView ? 1 : 0,
                transform: dentalInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${(i + 1) * 0.13}s`,
              }}>
                <div style={{ width: 78, height: 78, borderRadius: "50%", background: "linear-gradient(135deg, #1a5276, #27ae60)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 16px" }}>
                  {doc.emoji}
                </div>
                <div style={{ display: "inline-block", background: doc.badgeBg, color: doc.badgeColor, fontSize: 11, fontWeight: 700, padding: "3px 12px", borderRadius: 20, marginBottom: 12 }}>
                  {doc.badge}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 18, color: "#1a3a5c", marginBottom: 4 }}>{doc.name}</h3>
                <p style={{ color: "#27ae60", fontWeight: 700, fontSize: 13, marginBottom: 14 }}>{doc.role}</p>
                <p style={{ color: "#5d6d7e", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{doc.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
                  {doc.specialties.map((s, j) => (
                    <span key={j} style={{ fontSize: 11.5, fontWeight: 600, background: "#f0f4f8", color: "#3d4e63", padding: "4px 10px", borderRadius: 20, border: "1px solid #e2e8f0" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FERTILITY CARE DIVISION ── */}
      <section ref={fertilityRef} style={{ padding: "70px 24px 80px", background: "#f8fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Divider + Badge */}
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "center", marginBottom: 20 }}>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #e0e0e0)", maxWidth: 200 }} />
              <div style={{ display: "inline-block", background: "#fff3e0", color: "#e65100", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20 }}>
                Our Fertility Care Division
              </div>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #e0e0e0)", maxWidth: 200 }} />
            </div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 10 }}>
              Nandi IVF — The Way to Parenthood
            </h2>
            <p style={{ color: "#5d6d7e", fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
              Planet H Dental is proud to be associated with Nandi IVF, a dedicated fertility care centre led by Dr. Payal Bajaj.
            </p>
          </div>

          {/* Nandi IVF Card */}
          <div style={{
            background: "linear-gradient(135deg, #0f2235 0%, #1a3a5c 100%)",
            borderRadius: 20,
            padding: "48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
            alignItems: "center",
            boxShadow: "0 16px 60px rgba(15,34,53,0.25)",
            opacity: fertilityInView ? 1 : 0,
            transform: fertilityInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }} className="fertility-card">

            {/* Left — Nandi IVF Info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 58, height: 58, borderRadius: 14, background: "linear-gradient(135deg, #e67e22, #f39c12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  💧
                </div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: 22, color: "white", letterSpacing: 3 }}>NANDI IVF</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 2, textTransform: "uppercase", marginTop: 2 }}>The Way to Parenthood</div>
                </div>
              </div>

              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15.5, lineHeight: 1.85, marginBottom: 28 }}>
                Nandi IVF is a state-of-the-art fertility centre providing comprehensive reproductive care — from basic fertility treatments to advanced IVF procedures — with a compassionate, patient-first approach.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 30 }}>
                {["IVF Treatment", "IUI", "Fertility Consultation", "Reproductive Care"].map((s, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 600, background: "rgba(230,126,34,0.15)", color: "#f39c12", padding: "5px 12px", borderRadius: 20, border: "1px solid rgba(243,156,18,0.25)" }}>
                    {s}
                  </span>
                ))}
              </div>

              <a
                href="https://drpayalbajaj.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#e67e22", color: "white", padding: "14px 30px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none", boxShadow: "0 6px 22px rgba(230,126,34,0.45)", transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "#d35400"}
                onMouseLeave={e => e.currentTarget.style.background = "#e67e22"}
              >
                Visit Nandi IVF →
              </a>
            </div>

            {/* Right — Dr. Payal Bajaj Card */}
            <div style={{ background: "rgba(255,255,255,0.07)", borderRadius: 16, padding: "36px 28px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "linear-gradient(135deg, #e67e22, #f39c12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42, margin: "0 auto 16px" }}>
                👩‍⚕️
              </div>
              <div style={{ display: "inline-block", background: "rgba(230,126,34,0.2)", color: "#f39c12", fontSize: 11, fontWeight: 700, padding: "4px 13px", borderRadius: 20, marginBottom: 14, border: "1px solid rgba(243,156,18,0.3)", letterSpacing: 0.5 }}>
                Medical Director
              </div>
              <h3 style={{ fontWeight: 900, fontSize: 22, color: "white", fontFamily: "'Georgia', serif", marginBottom: 6 }}>
                Dr. Payal Bajaj
              </h3>
              <p style={{ color: "#f39c12", fontWeight: 700, fontSize: 13.5, marginBottom: 16 }}>
                Sr. IVF Consultant & Fertility Specialist
              </p>
              <p style={{ color: "rgba(255,255,255,0.68)", fontSize: 14, lineHeight: 1.75 }}>
                Leading fertility specialist with expertise in IVF, IUI, and advanced reproductive treatments. Dedicated to helping families achieve their dream of parenthood with compassionate, personalised care.
              </p>
              <a
                href="https://drpayalbajaj.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", marginTop: 20, color: "#f39c12", fontWeight: 700, fontSize: 13.5, textDecoration: "none", borderBottom: "1px solid rgba(243,156,18,0.4)", paddingBottom: 2 }}
              >
                drpayalbajaj.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 900px) {
          .founder-card { grid-template-columns: 1fr !important; gap: 24px !important; text-align: center; }
          .specialist-grid { grid-template-columns: 1fr 1fr !important; }
          .fertility-card { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 540px) {
          .specialist-grid { grid-template-columns: 1fr !important; }
          .fertility-card { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;