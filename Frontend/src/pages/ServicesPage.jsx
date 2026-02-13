import React from 'react'
import { useState } from "react";
import { CheckIcon, ChevronLeft, ChevronRight } from "../components/Icons";
import { CTASection } from "../components/SharedSections";
import { useInView } from "../hooks/useInView";

const SERVICES_ITEMS_PER_PAGE = 4;

const ServicesPage = ({ setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Marketing Coaching");
  const [headerRef, headerInView] = useInView(0.2);

  const allServices = [
    {
      icon: "🎓", title: "Marketing Coaching", tag: "Marketing Coaching",
      price: "From $499/mo", badge: "Most Popular",
      desc: "Work 1-on-1 with a dedicated dental marketing expert who combines clear communication with fast, reliable support. You'll always speak to a real person who knows your goals.",
      features: ["Dedicated account manager", "Same-day ticket resolution", "Monthly strategy calls", "Honest, data-driven guidance", "No pushy upsells ever"],
    },
    {
      icon: "🔍", title: "Search Engine Optimization", tag: "Search Engine Optimization",
      price: "From $799/mo", badge: "High ROI",
      desc: "Dominate local search results and attract more patients who are actively looking for dental services in your area. Our dental-specific SEO strategy delivers lasting results.",
      features: ["Local SEO & Google Business", "On-page optimization", "Technical site audit & fixes", "Monthly rank tracking", "Competitor analysis"],
    },
    {
      icon: "✍️", title: "Content Creation", tag: "Content Creation",
      price: "From $349/mo", badge: "Trust Builder",
      desc: "High-quality, SEO-optimized dental content written by industry specialists. From service pages to blog posts, we create content that ranks and converts.",
      features: ["Service page copywriting", "Monthly blog articles", "Patient FAQ content", "Meta descriptions & titles", "E-E-A-T optimized writing"],
    },
    {
      icon: "📢", title: "Paid Search Advertising", tag: "Paid Search Advertising",
      price: "From $649/mo", badge: "Fast Results",
      desc: "Targeted Google Ads and Meta campaigns managed by dental marketing specialists. Get more calls and appointment bookings starting week one.",
      features: ["Google Ads management", "Meta (Facebook/Instagram) ads", "Keyword bid optimization", "A/B ad copy testing", "Monthly performance reports"],
    },
    {
      icon: "📱", title: "Social Media Management", tag: "Social Media Management",
      price: "From $449/mo", badge: "Brand Growth",
      desc: "Consistent, engaging social media presence that showcases your practice culture and builds patient trust across all major platforms.",
      features: ["Facebook & Instagram posting", "Stories & Reels creation", "Review management", "Brand voice development", "Monthly content calendar"],
    },
    {
      icon: "🌐", title: "Custom Dental Website", tag: "Custom Dental Website",
      price: "From $2,999 one-time", badge: "Foundation",
      desc: "Beautiful, conversion-optimized websites built exclusively for dental practices. Mobile-first design, fast load speeds, and built to book appointments.",
      features: ["Custom responsive design", "Online booking integration", "HIPAA-compliant forms", "ADA accessibility standards", "Lifetime support included"],
    },
    {
      icon: "📊", title: "Analytics & Reporting", tag: "Analytics & Reporting",
      price: "From $199/mo", badge: "Transparency",
      desc: "Clear, jargon-free monthly reports that show exactly how your marketing dollars are performing — new patients, calls, rankings, and more.",
      features: ["Google Analytics 4 setup", "Call tracking & attribution", "Monthly performance dashboards", "ROI calculation", "Quarterly strategy reviews"],
    },
    {
      icon: "⭐", title: "Reputation Management", tag: "Reputation Management",
      price: "From $299/mo", badge: "Trust Booster",
      desc: "Systematically grow your 5-star reviews on Google, Yelp, and Healthgrades. Respond to all reviews professionally on your behalf.",
      features: ["Automated review requests", "Multi-platform monitoring", "Professional response service", "Negative review recovery", "Monthly sentiment reports"],
    },
  ];

  const totalPages = Math.ceil(allServices.length / SERVICES_ITEMS_PER_PAGE);
  const paginated = allServices.slice((currentPage - 1) * SERVICES_ITEMS_PER_PAGE, currentPage * SERVICES_ITEMS_PER_PAGE);
  const tabs = ["Marketing Coaching", "Search Engine Optimization", "Content Creation", "Paid Search Advertising"];
  const tabService = allServices.find(s => s.tag === activeTab);

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      {/* Header */}
      <section ref={headerRef} style={{ padding: "70px 24px 50px", background: "linear-gradient(135deg, #f8fbff, #eaf4fb)", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Our Services</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 16 }}>
            Á La Carte Dental Marketing
          </h1>
          <p style={{ fontSize: 18, color: "#27ae60", fontWeight: 700, marginBottom: 14 }}>No Contracts — Choose What You Need, When You Need It</p>
          <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.75 }}>
            Every service is designed specifically for dental practices and backed by a team that responds fast, sets honest expectations, and always acts in your best interest.
          </p>
        </div>
      </section>

      {/* Tab Section */}
      <section style={{ padding: "60px 24px", background: "white" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 0, marginBottom: 0, overflowX: "auto", borderBottom: "2px solid #eaf0f6" }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "14px 20px", fontSize: 13.5, fontWeight: 700,
                color: activeTab === tab ? "#1a5276" : "#5d6d7e",
                borderBottom: activeTab === tab ? "2px solid #27ae60" : "2px solid transparent",
                marginBottom: -2, whiteSpace: "nowrap", transition: "all 0.2s",
              }}>{tab}</button>
            ))}
          </div>
          {tabService && (
            <div style={{ padding: "40px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="tab-content-grid">
              <div>
                <h3 style={{ fontSize: 26, fontWeight: 900, color: "#1a3a5c", marginBottom: 14, fontFamily: "'Georgia', serif" }}>{tabService.icon} {tabService.title}</h3>
                <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.8, marginBottom: 24 }}>{tabService.desc}</p>
                <div style={{ marginBottom: 24 }}>
                  {tabService.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: "1px solid #f5f5f5" }}>
                      <CheckIcon />
                      <span style={{ color: "#3d4e63", fontSize: 15 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontSize: 22, fontWeight: 900, color: "#1a5276" }}>{tabService.price}</span>
                  <button onClick={() => setPage("Contact")} style={{ background: "#e67e22", color: "white", padding: "12px 28px", borderRadius: 8, fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer" }}>
                    Get a Quote →
                  </button>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80"
                alt={tabService.title}
                style={{ width: "100%", borderRadius: 12, boxShadow: "0 10px 40px rgba(0,0,0,0.12)" }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Paginated Cards */}
      <section style={{ padding: "40px 24px 80px", background: "#f8fbff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 900, color: "#1a3a5c", marginBottom: 40, fontFamily: "'Georgia', serif" }}>All Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="cards-grid">
            {paginated.map((s, i) => (
              <div key={i} style={{ background: "white", borderRadius: 14, padding: "28px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid #eaf0f6", display: "flex", gap: 18 }}>
                <div style={{ fontSize: 36, flexShrink: 0 }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                    <h3 style={{ fontWeight: 800, fontSize: 16, color: "#1a3a5c", margin: 0 }}>{s.title}</h3>
                    <span style={{ background: "#e8f5e9", color: "#1e7e34", fontSize: 11, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>{s.badge}</span>
                  </div>
                  <p style={{ color: "#5d6d7e", fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>{s.desc.slice(0, 110)}...</p>
                  <div style={{ fontWeight: 800, color: "#1a5276", fontSize: 15 }}>{s.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 40 }}>
            <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
              style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "white", cursor: currentPage === 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: currentPage === 1 ? 0.4 : 1 }}>
              <ChevronLeft />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button key={i} onClick={() => setCurrentPage(i + 1)} style={{
                width: 38, height: 38, borderRadius: "50%",
                border: currentPage === i + 1 ? "2px solid #1a5276" : "1px solid #ddd",
                background: currentPage === i + 1 ? "#1a5276" : "white",
                color: currentPage === i + 1 ? "white" : "#3d4e63",
                cursor: "pointer", fontWeight: 700, fontSize: 14,
              }}>{i + 1}</button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
              style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "white", cursor: currentPage === totalPages ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: currentPage === totalPages ? 0.4 : 1 }}>
              <ChevronRight />
            </button>
          </div>
          <p style={{ textAlign: "center", color: "#7f8c8d", fontSize: 13, marginTop: 10 }}>
            Showing {(currentPage - 1) * SERVICES_ITEMS_PER_PAGE + 1}–{Math.min(currentPage * SERVICES_ITEMS_PER_PAGE, allServices.length)} of {allServices.length} services
          </p>
        </div>
      </section>

      <CTASection setPage={setPage} />
      <style>{`
        @media (max-width: 768px) {
          .tab-content-grid { grid-template-columns: 1fr !important; gap: 30px !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;