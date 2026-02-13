import React from 'react'
import { useNavigate } from 'react-router-dom';
import { CTASection } from "../components/SharedSections";
import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useInView";

const AboutPage = () => {
  const navigate = useNavigate();
  const [headerRef, headerInView] = useInView(0.2);
  const [teamRef, teamInView] = useInView(0.15);
  const [valuesRef, valuesInView] = useInView(0.15);
  const [statsRef, statsInView] = useInView(0.3);

  const cRating = useCounter(46, 1800, statsInView);
  const cReviews = useCounter(18, 1600, statsInView);
  const cServices = useCounter(10, 1400, statsInView);
  const cSatisfaction = useCounter(100, 2000, statsInView);

  const team = [
    { name: "Dr. Sanjay Bajaj", role: "Chief Dental Surgeon & Founder", emoji: "👨‍⚕️", bio: "Expert in RCT, dental implants, and full-mouth rehabilitation. Known for his calm, gentle approach and exceptional outcomes.", badge: "Founder" },
    { name: "Dr. Priya Sharma", role: "Cosmetic Dental Specialist", emoji: "👩‍⚕️", bio: "Specializes in smile makeovers, veneers, and teeth whitening. Helps patients achieve the confident smile they've always wanted.", badge: "Cosmetics" },
    { name: "Dr. Ankit Verma", role: "Oral & Maxillofacial Surgeon", emoji: "🦷", bio: "Expert in complex extractions, bone grafting, and advanced implant procedures. Passionate about pain-free dentistry.", badge: "Surgery" },
    { name: "Sunita Gupta", role: "Patient Coordinator", emoji: "🩺", bio: "Your friendly first point of contact. Sunita ensures every patient feels welcome, informed, and comfortable from day one.", badge: "Care Team" },
  ];

  const values = [
    { icon: "💚", title: "Patient-First Care", desc: "Every treatment decision is made with your comfort and long-term oral health as the top priority. You're family here." },
    { icon: "⚡", title: "Painless Procedures", desc: "We use modern anesthesia and gentle techniques so even complex procedures like RCT are comfortable and stress-free." },
    { icon: "🔬", title: "Advanced Technology", desc: "Digital X-rays, modern implant systems, and up-to-date sterilization protocols ensure safe, precise, effective treatment." },
    { icon: "💬", title: "Clear Communication", desc: "We explain every step in plain language, so you always know exactly what's happening and what to expect." },
    { icon: "🦷", title: "Complete Under One Roof", desc: "From routine cleanings to full-mouth restoration — we handle everything so you don't need to visit multiple specialists." },
    { icon: "⭐", title: "Proven Results", desc: "Rated 4.6 stars on Google with 18+ reviews. Our patients consistently praise our results and caring approach." },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "70px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>About Us</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            The Dental Clinic That Truly Cares
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
            Planet H Dental was founded on one belief: every patient deserves gentle, expert dental care without fear or discomfort. Under Dr. Sanjay Bajaj's leadership, we've built a practice Rohini trusts.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => navigate("/contact")} style={{ background: "#e67e22", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
              Book Appointment
            </button>
            <button onClick={() => navigate("/services")} style={{ background: "white", color: "#1a5276", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "2px solid #1a5276", cursor: "pointer" }}>
              See Services
            </button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }} className="story-grid">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=560&q=80"
              alt="Dr. Sanjay Bajaj"
              style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=560&q=80"; }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 20 }}>Built By a Dentist Who Cares</h2>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
              Planet H Dental was established by Dr. Sanjay Bajaj with a vision to provide world-class dental care to the residents of Rohini and surrounding areas. Located in Sector 18B, we have grown into one of Delhi's most trusted dental practices.
            </p>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 28 }}>
              We specialize in everything from simple fillings to complex implant procedures, all performed with the latest technology and a genuinely caring touch. Our patients consistently praise us for our gentle approach and outstanding results.
            </p>

            {/* Animated Stats */}
            <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { value: (cRating / 10).toFixed(1) + "★", label: "Google Rating" },
                { value: cReviews + "+", label: "Patient Reviews" },
                { value: cServices + "+", label: "Services Offered" },
                { value: cSatisfaction + "%", label: "Patient Satisfaction" },
              ].map((s, i) => (
                <div key={s.label} style={{ background: "#f8fbff", borderRadius: 10, padding: "18px", border: "1px solid #eaf0f6", opacity: statsInView ? 1 : 0, transform: statsInView ? "translateY(0)" : "translateY(20px)", transition: `all 0.5s ease ${i * 0.1}s` }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#27ae60" }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "#5d6d7e", fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} style={{ padding: "70px 24px", background: "#f8fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ display: "inline-block", background: "#e3f2fd", color: "#1565c0", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 14 }}>Our Team</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>The People Behind Your Smile</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="team-grid">
            {team.map((member, i) => (
              <div key={i} style={{
                background: "white", borderRadius: 14, padding: "30px 24px", textAlign: "center",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #eaf0f6",
                opacity: teamInView ? 1 : 0,
                transform: teamInView ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #1a5276, #27ae60)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 16px" }}>{member.emoji}</div>
                <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20, marginBottom: 10 }}>{member.badge}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, color: "#1a3a5c", marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: 13, color: "#27ae60", fontWeight: 700, marginBottom: 12 }}>{member.role}</div>
                <p style={{ color: "#5d6d7e", fontSize: 13.5, lineHeight: 1.65 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} style={{ padding: "70px 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 50 }}>
            <div style={{ display: "inline-block", background: "#fff3e0", color: "#e65100", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 14 }}>Our Values</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>Why Patients Trust Planet H Dental</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="values-grid">
            {values.map((v, i) => (
              <div key={i} style={{
                borderRadius: 12, padding: "28px 24px", border: "1px solid #eaf0f6",
                background: i % 3 === 1 ? "#f8fbff" : "white",
                opacity: valuesInView ? 1 : 0,
                transform: valuesInView ? "translateY(0)" : "translateY(25px)",
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}>
                <div style={{ fontSize: 30, marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 800, fontSize: 16, color: "#1a3a5c", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "#5d6d7e", fontSize: 14.5, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-grid { grid-template-columns: repeat(2,1fr) !important; }
          .values-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 540px) {
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;