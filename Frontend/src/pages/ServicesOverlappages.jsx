import React from 'react';
import { useInView } from "../hooks/useInView";

const ServicesOverlapSection = () => {
  const [headerRef, headerInView] = useInView(0.2);

  const services = [
    {
      number: '01',
      tag: 'General Dentistry',
      title: 'Complete Oral Health Care for Every Age',
      description: "From your child's first visit to full-mouth restoration for seniors — Dr. Sanjay Bajaj provides compassionate, thorough dental care that keeps your whole family smiling.",
      features: [
        'Routine Checkups & Cleanings',
        'Painless Tooth Fillings',
        'Tooth Extraction & Care',
        'Gum Disease Treatment',
      ],
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80',
      dark: false,
    },
    {
      number: '02',
      tag: 'Cosmetic Dentistry',
      title: 'Smile Transformations You',
      description: 'Our cosmetic treatments are designed to boost your confidence with natural-looking results. Whether it whitening or a complete smile makeover, we craft smiles that last.',
      features: [
        'Professional Teeth Whitening',
        'Porcelain Veneers',
        'Crown & Bridge Work',
        'Complete Smile Design',
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
      dark: true,
    },
    {
      number: '03',
      tag: 'Root Canal & Implants',
      title: 'Save Teeth. Replace Teeth. Restore Confidence.',
      description: 'Highly rated for RCT and dental implants, Planet H Dental uses advanced technology to eliminate pain and restore full function. Hundreds of patients trust us for complex procedures.',
      features: [
        'Root Canal Treatment (RCT)',
        'Single & Full Dental Implants',
        'Full Mouth Rehabilitation',
        'Bone Grafting Procedures',
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
      dark: false,
    },
    {
      number: '04',
      tag: 'Pediatric & Preventive',
      title: 'Gentle Care for Little Smiles',
      description: 'We make dental visits a positive experience for kids. Our preventive approach catches problems early, builds healthy habits, and sets up your child for a lifetime of oral health.',
      features: [
        'Child-Friendly Checkups',
        'Fluoride & Sealant Treatments',
        'Early Orthodontic Assessment',
        'Parent Guidance & Education',
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
      dark: true,
    },
  ];

  return (
    <section style={{ background: "#f8fbff", padding: "80px 24px 100px", fontFamily: "'Lato','Helvetica Neue',sans-serif" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={headerRef}
          style={{
            textAlign: "center",
            marginBottom: 60,
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#e8f5e9", border: "1px solid #c8e6c9", borderRadius: 20, padding: "6px 16px", marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27ae60", display: "inline-block" }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1e7e34", textTransform: "uppercase", letterSpacing: 1.5 }}>What We Do</span>
          </div>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 42px)", fontWeight: 900, color: "#1a3a5c", fontFamily: "'Georgia', serif", marginBottom: 14 }}>
            Everything Your Family Needs, <span style={{ color: "#27ae60" }}>Under One Roof</span>
          </h2>
          <p style={{ color: "#5d6d7e", fontSize: 16, maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
            Planet H Dental offers a complete range of treatments — from routine cleanings to advanced implants — all delivered with care by Dr. Sanjay Bajaj.
          </p>
        </div>

        {/* Sticky Overlapping Cards */}
        <div style={{ position: "relative" }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                position: "sticky",
                top: 80 + index * 14,
                zIndex: index + 1,
                background: service.dark ? "#1a3a5c" : "white",
                color: service.dark ? "white" : "#1a3a5c",
                borderRadius: 22,
                boxShadow: "0 12px 50px rgba(0,0,0,0.13)",
                border: service.dark ? "1px solid rgba(255,255,255,0.08)" : "1px solid #eaf0f6",
                padding: "44px 50px",
                marginBottom: 24,
              }}
            >
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
                className="overlap-inner"
              >
                {/* Content */}
                <div>
                  <div style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 80,
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: 8,
                    color: service.dark ? "rgba(39,174,96,0.18)" : "rgba(26,82,118,0.07)",
                  }}>
                    {service.number}
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#27ae60", marginBottom: 10 }}>
                    {service.tag}
                  </div>
                  <h3 style={{
                    fontSize: "clamp(18px, 2.2vw, 26px)",
                    fontWeight: 900,
                    fontFamily: "'Georgia', serif",
                    marginBottom: 14,
                    lineHeight: 1.3,
                    color: service.dark ? "white" : "#1a3a5c",
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    marginBottom: 24,
                    color: service.dark ? "rgba(255,255,255,0.72)" : "#5d6d7e",
                  }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, fontWeight: 600, color: service.dark ? "rgba(255,255,255,0.85)" : "#3d4e63" }}>
                        <div style={{ width: 22, height: 22, background: "#27ae60", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image */}
                <div style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 8px 30px rgba(0,0,0,0.15)" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onError={e => { e.target.style.background = "#eaf0f6"; }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .overlap-inner { grid-template-columns: 1fr !important; gap: 28px !important; }
          [style*="padding: \"44px 50px\""] { padding: 28px 22px !important; }
        }
      `}</style>
    </section>
  );
};

export default ServicesOverlapSection;