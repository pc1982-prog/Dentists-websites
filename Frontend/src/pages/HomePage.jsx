import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView, useCounter } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";
import ServicesOverlapSection from "../pages/ServicesOverlappages";
import DoctorImage from "../../public/DoctorImage.jpg"

// ─── TESTIMONIAL SECTION — 3 cards, arrows on left/right, auto-play ──────────
const ReviewsWidget = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="elfsight-app-ddc7c118-6c5d-4ded-9fc4-a29c1c887025" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};
// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.3);
  const [drRef, drInView] = useInView(0.15);

  const c31 = useCounter(31, 3100, statsInView);
  const c47 = useCounter(47, 2000, statsInView);
  const c12 = useCounter(12, 1400, statsInView);
  const c1 = useCounter(1, 600, statsInView);

  return (
    <div style={{ fontFamily: "'Lato', 'Helvetica Neue', sans-serif", background: "white" }}>
      {/* Hero */}
      <section ref={heroRef} style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f8fbff 0%, #eaf4fb 50%, #f0fdf4 100%)",
        paddingTop: 110,
        paddingBottom: 60,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(39,174,96,0.06)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(26,82,118,0.05)", zIndex: 0 }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
            <div style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? "translateX(0)" : "translateX(-40px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8f5e9", border: "1px solid #c8e6c9", borderRadius: 20, padding: "6px 14px", marginBottom: 22 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27ae60", display: "inline-block" }} />
                <span style={{ fontSize: 12.5, fontWeight: 700, color: "#1e7e34", textTransform: "uppercase", letterSpacing: 1 }}>Rohini, New Delhi · Sector 18B</span>
              </div>
              <h1 style={{ fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.15, color: "#1a3a5c", marginBottom: 10, fontFamily: "'Georgia', serif" }}>
                Your Smile Deserves<br />
                <span style={{ color: "#1a5276" }}>Expert Dental Care.</span>
              </h1>
              <h2 style={{ fontSize: "clamp(18px, 2.2vw, 28px)", fontWeight: 800, color: "#27ae60", marginBottom: 22, fontFamily: "'Georgia', serif" }}>
                Planet H Dental — Where Smiles Begin.
              </h2>
              <p style={{ fontSize: 17, color: "#5d6d7e", lineHeight: 1.8, marginBottom: 34, maxWidth: 480 }}>
                Dr. Sanjay Bajaj and our experienced team provide compassionate, state-of-the-art dental treatments — from routine cleanings to complex implants and RCT.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button onClick={() => navigate("/contact")} style={{ background: "#e67e22", color: "white", padding: "14px 32px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 6px 20px rgba(230,126,34,0.35)" }}>
                  📞 Book Appointment →
                </button>
                <button onClick={() => navigate("/services")} style={{ background: "white", color: "#1a5276", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "2px solid #1a5276", cursor: "pointer" }}>
                  Our Services
                </button>
              </div>
            </div>

            <div style={{ opacity: heroInView ? 1 : 0, transform: heroInView ? "translateY(0)" : "translateY(40px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s" }}>
              <div style={{ position: "relative" }}>
                <img
                  src="/2026-04-21.webp"
                  alt="Planet H Dental Clinic"
                  style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "block" }}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"; }}
                />
                <div style={{ position: "absolute", bottom: -20, left: -20, background: "white", borderRadius: 12, padding: "14px 18px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", minWidth: 160 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#27ae60" }}>⭐ 4.7</div>
                  <div style={{ fontSize: 12, color: "#5d6d7e", fontWeight: 600 }}>31+ Google Reviews</div>
                </div>
                <div style={{ position: "absolute", top: -16, right: -16, background: "#1a5276", borderRadius: 10, padding: "12px 16px", color: "white" }}>
                  <div style={{ fontSize: 20, fontWeight: 900 }}>🦷 RCT</div>
                  <div style={{ fontSize: 11, opacity: 0.85 }}>& Implants</div>
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
            { value: c31 + "+", label: "Google Reviews" },
            { value: (c47 / 10).toFixed(1) + "★", label: "Star Rating" },
            { value: c12 + "+", label: "Treatments" },
            { value: c1 + "", label: "Trusted Clinic" },
          ].map((s, i) => (
            <div key={i} style={{ opacity: statsInView ? 1 : 0, transform: statsInView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ease ${i * 0.12}s`, padding: "24px 16px", borderRadius: 12, background: i % 2 === 0 ? "#f8fbff" : "white" }}>
              <div style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 900, color: "#27ae60", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#7f8c8d", textTransform: "uppercase", letterSpacing: 1.2, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor Section */}
      <section ref={drRef} style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center", opacity: drInView ? 1 : 0, transform: drInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }} className="dr-grid">
          <div>
            <img
              src="/dr-sanjay-bajaj-rohini-sector-18-delhi-dentists-xu5c1v-250.jpg"
              alt="Dr. Sanjay Bajaj"
              style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              onError={e => { e.target.src = {DoctorImage}; }}
            />
          </div>
          <div>
            <div style={{ display: "inline-block", background: "#e3f2fd", color: "#1565c0", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Meet Your Doctor</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 10 }}>Dr. Sanjay Bajaj</h2>
            <p style={{ color: "#27ae60", fontWeight: 700, fontSize: 15, marginBottom: 18 }}>Chief Dental Surgeon & Founder, Planet H Dental</p>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 18 }}>
              With years of expertise in complex dental procedures, Dr. Bajaj has built Planet H Dental into one of Rohini's most trusted practices. Highly praised for his gentle approach and exceptional results in RCT, implants, and smile design.
            </p>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 28, fontStyle: "italic" }}>
              "Every patient deserves a pain-free, comfortable experience. We use the latest technology to ensure the best outcomes for your oral health."
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={() => navigate("/contact")} style={{ background: "#e67e22", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Book With Dr. Bajaj</button>
              <button onClick={() => navigate("/about")} style={{ background: "white", color: "#1a5276", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "2px solid #1a5276", cursor: "pointer" }}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overlap */}
      <ServicesOverlapSection />

      {/* Testimonials — 3 at a time with arrows */}
      <ReviewsWidget />

      <CTASection />

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .dr-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 480px) { .stats-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </div>
  );
};

export default HomePage;