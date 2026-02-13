import React from 'react'
const Footer = ({ setPage }) => (
    <footer style={{ background: "#0f2235", color: "rgba(255,255,255,0.75)", fontFamily: "'Lato','Helvetica Neue',sans-serif", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                        <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #27ae60, #2980b9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦷</div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: 15, color: "white", letterSpacing: 1, textTransform: "uppercase" }}>Strategix</div>
                            <div style={{ fontSize: 10, color: "#27ae60", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Websites & Marketing</div>
                        </div>
                    </div>
                    <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 290, color: "rgba(255,255,255,0.65)" }}>
                        The dental marketing agency that works as hard as you do. Helping 900+ practices grow since 2009.
                    </p>
                    <div style={{ marginTop: 18 }}>
                        <a href="tel:7203997071" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: 15 }}>📞 9999999999</a>
                    </div>
                </div>
                {[
                    { title: "Company", links: ["Home", "About", "Our Work", "Contact"] },
                    { title: "Services", links: ["Custom Websites", "SEO", "Paid Ads", "Content Creation", "Social Media", "Reputation Mgmt"] },
                    { title: "Resources", links: ["Blog", "Case Studies", "FAQs", "Support", "Privacy Policy"] },
                ].map(col => (
                    <div key={col.title}>
                        <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>{col.title}</h4>
                        {col.links.map(link => (
                            <div key={link} onClick={() => { if (["Home", "About", "Our Work", "Contact", "Services"].includes(link)) setPage(link); }} style={{ fontSize: 13.5, marginBottom: 10, cursor: "pointer", color: "rgba(255,255,255,0.65)" }}>
                                {link}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>© 2025 Strategix Websites & Marketing. All rights reserved.</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Built with ❤️ for dental practices everywhere</div>
            </div>
        </div>
        <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 30px !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
);

export default Footer;