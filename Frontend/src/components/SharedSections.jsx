import React from 'react'
import { StarIcon } from "./Icons";
import { useInView } from "../hooks/useInView";

// ─── CTA SECTION ──────────────────────────────────────────────────────────────
export const CTASection = ({ setPage }) => {
  const [ref, inView] = useInView(0.2);
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
            Ready to Grow Your Practice?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 17, lineHeight: 1.75, marginBottom: 36 }}>
            Join 900+ dental practices who trust GreatDental for their online presence. No long-term contracts. Just results.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("Contact")} style={{ background: "#e67e22", color: "white", padding: "15px 36px", borderRadius: 8, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", boxShadow: "0 6px 24px rgba(230,126,34,0.45)" }}>
              Talk To Our Team
            </button>
            <a href="tel:7203997071" style={{ background: "rgba(255,255,255,0.12)", color: "white", padding: "15px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "2px solid rgba(255,255,255,0.3)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              📞 720-399-7071
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIAL STRIP ────────────────────────────────────────────────────────
export const TestimonialStrip = () => {
  const testimonials = [
    { name: "Dr. Sarah Mitchell", role: "Mitchell Family Dentistry", text: "Our new patient calls doubled within 3 months. The team is incredibly responsive and truly understands dental marketing.", stars: 5 },
    { name: "Dr. James Patel", role: "Patel Dental Group", text: "We went from page 3 to the top 3 on Google in under 6 months. The ROI has been exceptional.", stars: 5 },
    { name: "Dr. Emily Chen", role: "Bright Smile Dental", text: "Professional, fast, and they actually deliver. Our website looks amazing and patients always compliment it.", stars: 5 },
  ];
  const [ref, inView] = useInView(0.15);

  return (
    <section ref={ref} style={{ padding: "80px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "inline-block", background: "#fff8e1", color: "#f57c00", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 14 }}>What Dentists Say</div>
          <h2 style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>Real Results, Real Practices</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: "#f8fbff", borderRadius: 14, padding: "30px 26px",
              border: "1px solid #eaf0f6",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}>
              <div style={{ marginBottom: 14 }}>{[...Array(t.stars)].map((_, j) => <StarIcon key={j} filled />)}</div>
              <p style={{ color: "#3d4e63", fontSize: 15, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #1a5276, #27ae60)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16 }}>
                  {t.name.charAt(3)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1a3a5c" }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: "#7f8c8d" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};