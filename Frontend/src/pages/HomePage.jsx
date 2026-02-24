import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView, useCounter } from "../hooks/useInView";
import { CTASection } from "../components/SharedSections";
import ServicesOverlapSection from "../pages/ServicesOverlappages";
import DoctorImage from "../../public/DoctorImage.jpg"

// ─── TESTIMONIAL SECTION — 3 cards, arrows on left/right, auto-play ──────────
const TestimonialSlider = () => {
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ref, inView] = useInView(0.15);

  const testimonials = [
    { name: "Rahul Sharma",  role: "Planet H Dental Patient", text: "Got RCT, implants and bridge done here. Best treatment available. Highly satisfied with the results and the caring team!", stars: 5 },
    { name: "Priya Verma",   role: "Planet H Dental Patient", text: "Very good experience. Dr. Bajaj is highly skilled, caring, and made the whole process completely painless.", stars: 5 },
    { name: "Amit Gupta",    role: "Planet H Dental Patient", text: "Best dental clinic for RCT and Dental Implants in Rohini. Professional, clean facility and very affordable.", stars: 5 },
    { name: "Neha Joshi",    role: "Planet H Dental Patient", text: "My kids love visiting here! The staff is so gentle and patient with children. Best pediatric dental care in Delhi.", stars: 5 },
    { name: "Suresh Mehta",  role: "Planet H Dental Patient", text: "Excellent cosmetic work. My smile makeover came out absolutely beautiful. Dr. Bajaj is truly an artist with teeth.", stars: 5 },
    { name: "Kavita Rao",    role: "Planet H Dental Patient", text: "I was terrified of dentists but Dr. Bajaj made me completely comfortable. The clinic is clean, modern and so welcoming.", stars: 5 },
  ];

  const PER_PAGE = 3;
  const totalPages = Math.ceil(testimonials.length / PER_PAGE);

  // Auto-advance every 4 s, pause on hover
  React.useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setPage(p => (p + 1) % totalPages);
    }, 4000);
    return () => clearInterval(t);
  }, [paused, totalPages]);

  const prev = () => setPage(p => (p - 1 + totalPages) % totalPages);
  const next = () => setPage(p => (p + 1) % totalPages);

  const visible = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const ArrowBtn = ({ onClick, dir }) => (
    <button
      onClick={onClick}
      aria-label={dir}
      style={{
        width: 50, height: 50,
        borderRadius: "50%",
        border: "2px solid #1a5276",
        background: "white",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 4px 16px rgba(26,82,118,0.18)",
        transition: "all 0.2s",
        zIndex: 2,
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "#1a5276"; e.currentTarget.querySelector("svg").style.stroke = "white"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.querySelector("svg").style.stroke = "#1a5276"; }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="#1a5276" strokeWidth="2.5" width="20" height="20" style={{ transition: "stroke 0.2s" }}>
        {dir === "prev"
          ? <polyline points="15 18 9 12 15 6"/>
          : <polyline points="9 18 15 12 9 6"/>
        }
      </svg>
    </button>
  );

  return (
    <section
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ padding: "80px 24px", background: "white", opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Title — centered */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{ display: "inline-block", background: "#fff8e1", color: "#f57c00", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 12 }}>Patient Reviews</div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", margin: 0 }}>What Our Patients Say</h2>
        </div>

        {/* Arrow LEFT · 3 Cards · Arrow RIGHT — all in one flex row, vertically centered */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>

          {/* Left Arrow */}
          <ArrowBtn onClick={prev} dir="prev" />

          {/* Cards */}
          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="reviews-grid">
            {visible.map((t, i) => (
              <div
                key={page + "-" + i}
                style={{
                  background: "#f8fbff",
                  borderRadius: 16,
                  padding: "28px 24px",
                  border: "1px solid #eaf0f6",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
                }}
              >
                {/* Stars */}
                <div style={{ marginBottom: 14 }}>
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" width="17" height="17" style={{ display: "inline", marginRight: 2 }} fill="#f59e0b" stroke="#f59e0b" strokeWidth="1">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                  ))}
                </div>
                <p style={{ color: "#3d4e63", fontSize: 14.5, lineHeight: 1.75, marginBottom: 22, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(135deg,#1a5276,#27ae60)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1a3a5c" }}>{t.name}</div>
                    <div style={{ fontSize: 12.5, color: "#7f8c8d" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <ArrowBtn onClick={next} dir="next" />
        </div>

        {/* Dot indicators — centered below */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                width: i === page ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === page ? "#1a5276" : "#d1dbe4",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.35s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .reviews-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 580px)  { .reviews-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
const HomePage = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.3);
  const [drRef, drInView] = useInView(0.15);

  const c18 = useCounter(18, 1800, statsInView);
  const c46 = useCounter(46, 2000, statsInView);
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
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80"
                  alt="Planet H Dental Clinic"
                  style={{ width: "100%", borderRadius: 16, boxShadow: "0 20px 60px rgba(0,0,0,0.15)", display: "block" }}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80"; }}
                />
                <div style={{ position: "absolute", bottom: -20, left: -20, background: "white", borderRadius: 12, padding: "14px 18px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)", minWidth: 160 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#27ae60" }}>⭐ 4.6</div>
                  <div style={{ fontSize: 12, color: "#5d6d7e", fontWeight: 600 }}>18+ Google Reviews</div>
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
            { value: c18 + "+", label: "Google Reviews" },
            { value: (c46 / 10).toFixed(1) + "★", label: "Star Rating" },
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
              src={DoctorImage}
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
      <TestimonialSlider />

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