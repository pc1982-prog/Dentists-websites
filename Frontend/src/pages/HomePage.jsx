import React from 'react'
import { useInView, useCounter } from "../hooks/useInView";
import { ArrowRight } from "../components/Icons";
import { CTASection, TestimonialStrip } from "../components/SharedSections";

// ─── SERVICES SECTION ─────────────────────────────────────────────────────────
const ServicesSection = ({ services, setPage }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <section ref={ref} style={{ padding: "90px 24px", background: "#f8fbff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 14 }}>What We Offer</div>
          <h2 style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>Everything Your Practice Needs</h2>
          <p style={{ color: "#5d6d7e", fontSize: 17, maxWidth: 520, margin: "14px auto 0" }}>One platform, every tool — designed exclusively for dental practices.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="services-grid">
          {services.map((s, i) => (
            <div key={i} style={{
              background: "white", borderRadius: 14, padding: "32px 28px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #eaf0f6",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${i * 0.1}s`,
              cursor: "pointer",
            }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{ fontWeight: 800, fontSize: 17, color: "#1a3a5c", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "#5d6d7e", fontSize: 14.5, lineHeight: 1.7 }}>{s.desc}</p>
              <div style={{ marginTop: 16, color: "#27ae60", fontWeight: 700, fontSize: 13.5 }}>Learn More <ArrowRight /></div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <button onClick={() => setPage("Services")} style={{ background: "#1a5276", color: "white", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(26,82,118,0.3)" }}>
            View All Services
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = ({ setPage }) => {
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.3);
  const c900 = useCounter(900, 2200, statsInView);
  const c15 = useCounter(15, 1500, statsInView);
  const c98 = useCounter(98, 2000, statsInView);
  const c1 = useCounter(1, 600, statsInView);

  const services = [
    { icon: "🖥️", title: "Custom Dental Websites", desc: "Stunning, patient-converting websites built exclusively for dental practices. Mobile-first, fast, and branded perfectly." },
    { icon: "📈", title: "SEO & Local Search", desc: "Dominate Google in your area. Our dental SEO expertise drives consistent, qualified patient traffic every month." },
    { icon: "🎯", title: "Paid Advertising", desc: "Google Ads and Meta campaigns managed by specialists who know the dental industry inside and out." },
    { icon: "✍️", title: "Content Marketing", desc: "Authoritative dental content that educates patients, builds trust, and boosts your search rankings." },
    { icon: "📱", title: "Social Media", desc: "Consistent, on-brand social presence that keeps your practice top-of-mind in your community." },
    { icon: "📊", title: "Analytics & Reporting", desc: "Clear, transparent reporting so you always know exactly how your marketing investment is performing." },
  ];

  return (
    <div style={{ fontFamily: "'Lato', 'Helvetica Neue', sans-serif", background: "white" }}>
      {/* Hero */}
      <section ref={heroRef} style={{
        minHeight: "92vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg, #f8fbff 0%, #eaf4fb 50%, #f0fdf4 100%)",
        paddingTop: 80, paddingBottom: 40,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(39,174,96,0.06)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(26,82,118,0.05)", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
            <div style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateX(0)" : "translateX(-40px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8f5e9", border: "1px solid #c8e6c9", borderRadius: 20, padding: "6px 14px", marginBottom: 20 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27ae60", display: "inline-block" }} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#1e7e34", textTransform: "uppercase", letterSpacing: 1 }}>Trusted By 900+ Dental Practices</span>
              </div>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.15, color: "#1a3a5c", marginBottom: 8, fontFamily: "'Georgia', serif" }}>
                You Work Hard<br />
                <span style={{ color: "#1a5276" }}>For Your Patients.</span>
              </h1>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#27ae60", marginBottom: 20, fontFamily: "'Georgia', serif" }}>
                Your Website Should Too.
              </h2>
              <p style={{ fontSize: 17, color: "#5d6d7e", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
                We build dental websites that attract more new patients and back it up with the smartest, most responsive team in the business. No long-term contracts. No surprises.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={() => setPage("Contact")} style={{ background: "#e67e22", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 6px 20px rgba(230,126,34,0.35)", letterSpacing: 0.5 }}>
                  Get Free Consultation →
                </button>
                <button onClick={() => setPage("Our Work")} style={{ background: "white", color: "#1a5276", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "2px solid #1a5276", cursor: "pointer" }}>
                  See Our Work
                </button>
              </div>
            </div>

            <div style={{
              opacity: heroInView ? 1 : 0,
              transform: heroInView ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
                  alt="Dental Practice"
                  style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "block" }}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"; }}
                />
                <div style={{ position: "absolute", bottom: -20, left: -20, background: "white", borderRadius: 12, padding: "16px 20px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", minWidth: 180 }}>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#27ae60" }}>+47%</div>
                  <div style={{ fontSize: 13, color: "#5d6d7e", fontWeight: 600 }}>Avg. Patient Increase</div>
                </div>
                <div style={{ position: "absolute", top: -16, right: -16, background: "#1a5276", borderRadius: 10, padding: "12px 16px", color: "white" }}>
                  <div style={{ fontSize: 22, fontWeight: 900 }}>⭐ 4.9</div>
                  <div style={{ fontSize: 11, opacity: 0.85 }}>Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} style={{ background: "white", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0", padding: "50px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, textAlign: "center" }} className="stats-grid">
          {[
            { value: c900, suffix: "+", label: "Dental Practices" },
            { value: c15, suffix: " Yrs", label: "Experience" },
            { value: c98, suffix: "%", label: "Retention Rate" },
            { value: c1, suffix: "", label: "Unified Platform" },
          ].map((s, i) => (
            <div key={i} style={{
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${i * 0.12}s`,
              padding: "24px 16px", borderRadius: 12,
              background: i % 2 === 0 ? "#f8fbff" : "white",
            }}>
              <div style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, color: "#27ae60", lineHeight: 1 }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#7f8c8d", textTransform: "uppercase", letterSpacing: 1.2, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ServicesSection services={services} setPage={setPage} />
      <TestimonialStrip />
      <CTASection setPage={setPage} />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;