import React from 'react'
import { CTASection } from "../components/SharedSections";
import { useInView } from "../hooks/useInView";

const AboutPage = ({ setPage }) => {
  const [headerRef, headerInView] = useInView(0.2);
  const [teamRef, teamInView] = useInView(0.15);
  const [valuesRef, valuesInView] = useInView(0.15);

  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", emoji: "👨‍💼", bio: "15+ years in dental marketing. Built Strategix from the ground up after seeing how poorly most agencies serve dental clients.", badge: "Founder" },
    { name: "Jessica Park", role: "Head of Web Design", emoji: "👩‍🎨", bio: "Award-winning designer who's built 500+ dental websites. She believes great design is the foundation of patient conversion.", badge: "Design Lead" },
    { name: "Marcus Thompson", role: "SEO Director", emoji: "👨‍💻", bio: "Data-obsessed SEO strategist who has helped over 300 dental practices dominate their local search results.", badge: "SEO Expert" },
    { name: "Lisa Chen", role: "Client Success Manager", emoji: "👩‍💼", bio: "Your direct line to results. Lisa ensures every client feels heard, supported, and sees real growth every month.", badge: "Client Champion" },
  ];

  const values = [
    { icon: "🤝", title: "Honest Relationships", desc: "We set realistic expectations from day one and never promise results we can't deliver. Trust is everything." },
    { icon: "⚡", title: "Fast Support", desc: "Most tickets resolved same day. You'll always speak to a real person who knows your account." },
    { icon: "🎯", title: "Results First", desc: "We measure our success by your growth. Every strategy decision is guided by data, not guesswork." },
    { icon: "🔒", title: "No Long Contracts", desc: "Month-to-month for most services because we're confident you'll stay when you see the results." },
    { icon: "🦷", title: "Dental Specialists", desc: "We only work with dental practices. This focus means unmatched expertise and better outcomes." },
    { icon: "💡", title: "Constant Innovation", desc: "We stay ahead of Google's changes so you don't have to. Your strategy evolves as the market does." },
  ];

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "70px 24px 60px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>About Us</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            The Dental Marketing Agency That Actually Cares
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
            We started Strategix because dental practices deserve a marketing partner who speaks their language, responds fast, and delivers honest results — without the typical agency runaround.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("Contact")} style={{ background: "#e67e22", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>Work With Us</button>
            <button onClick={() => setPage("Services")} style={{ background: "white", color: "#1a5276", padding: "12px 24px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "2px solid #1a5276", cursor: "pointer" }}>See Services</button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }} className="story-grid">
          <div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=560&q=80" alt="Our Team"
              style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=560&q=80"; }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 20 }}>Built By Dental Marketing Veterans</h2>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 20 }}>
              Founded in 2009, Strategix started with a simple idea: dental practices deserve marketing that works as hard as they do. We've grown to serve over 900 practices across North America, and our team of 40+ specialists is entirely focused on one industry: yours.
            </p>
            <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.85, marginBottom: 28 }}>
              We don't work with car dealerships, law firms, or restaurants. Just dentists. This singular focus means we know exactly what works, what doesn't, and how to get you more patients fast.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[["900+", "Practices Served"], ["15", "Years in Business"], ["40+", "Team Members"], ["98%", "Client Retention"]].map(([n, l]) => (
                <div key={l} style={{ background: "#f8fbff", borderRadius: 10, padding: "18px", border: "1px solid #eaf0f6" }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#27ae60" }}>{n}</div>
                  <div style={{ fontSize: 13, color: "#5d6d7e", fontWeight: 600 }}>{l}</div>
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
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>The People Behind Your Growth</h2>
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
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif" }}>Why Dentists Trust Us</h2>
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

      <CTASection setPage={setPage} />
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