import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from "../hooks/useInView";

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
export const CTASection = () => {
  const [ref, inView] = useInView(0.2);
  const navigate = useNavigate();

  return (
    <section ref={ref} style={{
      padding: "80px 24px",
      background: "linear-gradient(135deg, #1a3a5c 0%, #1a5276 50%, #1a6e8c 100%)",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 660, margin: "0 auto" }}>
        <div style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s ease",
        }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🦷</div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 900, color: "white", marginBottom: 16, fontFamily: "'Georgia', serif" }}>
            Ready for a Healthier Smile?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
            Book your visit with Dr. Sanjay Bajaj at Planet H Dental, Rohini. Expert, caring dental treatment — no waiting.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/contact")} style={{ background: "#e67e22", color: "white", padding: "15px 36px", borderRadius: 8, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(230,126,34,0.45)" }}>
              Book Appointment
            </button>
            <a href="tel:09810077219" style={{ background: "rgba(255,255,255,0.12)", color: "white", padding: "15px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              📞 098100 77219
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// TestimonialStrip is now a slider inside HomePage.jsx
export const TestimonialStrip = () => null;