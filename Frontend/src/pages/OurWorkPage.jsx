import React from 'react'
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../components/Icons";
import { useInView } from "../hooks/useInView";

const OUR_WORK_PER_PAGE = 3;

const PortfolioCard = ({ item, index }) => {
  const [ref, inView] = useInView(0.1);
  const [hover, setHover] = useState(false);
  return (
    <div ref={ref} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      borderRadius: 14, overflow: "hidden",
      boxShadow: hover ? "0 20px 50px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.07)",
      border: "1px solid #eaf0f6",
      opacity: inView ? 1 : 0,
      transform: inView ? (hover ? "translateY(-6px)" : "translateY(0)") : "translateY(30px)",
      transition: `all 0.5s ease ${index * 0.1}s`,
      cursor: "pointer",
    }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src={item.image} alt={item.title}
          style={{ width: "100%", height: 200, objectFit: "cover", display: "block", transform: hover ? "scale(1.05)" : "scale(1)", transition: "transform 0.5s ease" }}
          onError={e => { e.target.style.background = item.color; e.target.style.height = "200px"; }}
        />
        <div style={{ position: "absolute", top: 12, left: 12, background: "#1a5276", color: "white", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, letterSpacing: 0.5 }}>{item.category}</div>
      </div>
      <div style={{ padding: "24px", background: "white" }}>
        <h3 style={{ fontWeight: 800, fontSize: 16.5, color: "#1a3a5c", marginBottom: 6 }}>{item.title}</h3>
        <p style={{ color: "#7f8c8d", fontSize: 13.5, marginBottom: 14 }}>📍 {item.location}</p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#e8f5e9", borderRadius: 20, padding: "6px 14px" }}>
          <span style={{ fontSize: 14 }}>📈</span>
          <span style={{ color: "#1e7e34", fontWeight: 700, fontSize: 13.5 }}>{item.result}</span>
        </div>
      </div>
    </div>
  );
};

const OurWorkPage = ({ setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [headerRef, headerInView] = useInView(0.2);

  const portfolioItems = [
    { title: "Sunrise Family Dentistry", category: "Custom Website", location: "Denver, CO", result: "+63% New Patients", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=480&q=80", color: "#e8f5e9" },
    { title: "Pacific Coast Dental", category: "SEO + Content", location: "San Diego, CA", result: "Page 1 in 4 Months", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=480&q=80", color: "#e3f2fd" },
    { title: "Greenfield Orthodontics", category: "Paid Ads", location: "Austin, TX", result: "3x ROI on Ad Spend", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=480&q=80", color: "#fff3e0" },
    { title: "Brooklyn Smile Studio", category: "Custom Website", location: "Brooklyn, NY", result: "+88% Website Traffic", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=480&q=80", color: "#fce4ec" },
    { title: "Aspen Dental Arts", category: "Full Package", location: "Phoenix, AZ", result: "+41% Appointment Bookings", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=480&q=80", color: "#ede7f6" },
    { title: "Lakeside Pediatric Dentistry", category: "SEO + Content", location: "Chicago, IL", result: "#1 Ranking Local Keywords", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=480&q=80", color: "#e0f7fa" },
    { title: "Metro Dental Specialists", category: "Paid Ads", location: "Atlanta, GA", result: "$18 Cost Per New Lead", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=480&q=80", color: "#f3e5f5" },
    { title: "Harbor View Dentistry", category: "Full Package", location: "Seattle, WA", result: "+120% Review Count", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=480&q=80", color: "#e8f5e9" },
    { title: "Riverside Cosmetic Dental", category: "Custom Website", location: "Nashville, TN", result: "Featured in Dental Times", image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=480&q=80", color: "#fff9c4" },
  ];

  const categories = ["All", "Custom Website", "SEO + Content", "Paid Ads", "Full Package"];
  const filtered = filter === "All" ? portfolioItems : portfolioItems.filter(p => p.category === filter);
  const totalPages = Math.ceil(filtered.length / OUR_WORK_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * OUR_WORK_PER_PAGE, currentPage * OUR_WORK_PER_PAGE);

  return (
    <div style={{ fontFamily: "'Lato','Helvetica Neue',sans-serif", background: "white", paddingTop: 68 }}>
      <section ref={headerRef} style={{ padding: "70px 24px 50px", background: "linear-gradient(135deg, #f8fbff, #f0fdf4)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", opacity: headerInView ? 1 : 0, transform: headerInView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease" }}>
          <div style={{ display: "inline-block", background: "#e8f5e9", color: "#1e7e34", fontWeight: 700, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 20, marginBottom: 16 }}>Portfolio</div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 14 }}>
            We Help Dentists Grow With Better Websites
          </h1>
          <p style={{ color: "#5d6d7e", fontSize: 16, lineHeight: 1.75 }}>
            Real practices, real results. Explore our portfolio and see what's possible for your practice.
          </p>
        </div>
      </section>

      <section style={{ padding: "50px 24px 80px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Filter tabs */}
          <div style={{ display: "flex", gap: 8, marginBottom: 40, overflowX: "auto", paddingBottom: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => { setFilter(cat); setCurrentPage(1); }} style={{
                padding: "8px 20px", borderRadius: 20, fontSize: 13.5, fontWeight: 700,
                background: filter === cat ? "#1a5276" : "white",
                color: filter === cat ? "white" : "#3d4e63",
                border: "2px solid " + (filter === cat ? "#1a5276" : "#dde6ed"),
                cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
              }}>{cat}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="portfolio-grid">
            {paginated.map((item, i) => (
              <PortfolioCard key={item.title + i} item={item} index={i} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 48 }}>
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}
                  style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "white", cursor: currentPage === 1 ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: currentPage === 1 ? 0.4 : 1 }}>
                  <ChevronLeft />
                </button>
                {[...Array(totalPages)].map((_, idx) => (
                  <button key={idx} onClick={() => setCurrentPage(idx + 1)} style={{
                    width: 38, height: 38, borderRadius: "50%",
                    border: currentPage === idx + 1 ? "2px solid #1a5276" : "1px solid #ddd",
                    background: currentPage === idx + 1 ? "#1a5276" : "white",
                    color: currentPage === idx + 1 ? "white" : "#3d4e63",
                    cursor: "pointer", fontWeight: 700, fontSize: 14,
                  }}>{idx + 1}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}
                  style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid #ddd", background: "white", cursor: currentPage === totalPages ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", opacity: currentPage === totalPages ? 0.4 : 1 }}>
                  <ChevronRight />
                </button>
              </div>
              <p style={{ textAlign: "center", color: "#7f8c8d", fontSize: 13, marginTop: 10 }}>
                Showing {(currentPage - 1) * OUR_WORK_PER_PAGE + 1}–{Math.min(currentPage * OUR_WORK_PER_PAGE, filtered.length)} of {filtered.length} projects
              </p>
            </>
          )}

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button onClick={() => setPage("Contact")} style={{ background: "#e67e22", color: "white", padding: "14px 36px", borderRadius: 8, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 6px 20px rgba(230,126,34,0.35)" }}>
              Start Your Project Today →
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .portfolio-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .portfolio-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
};

export default OurWorkPage;