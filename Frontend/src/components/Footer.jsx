import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer style={{ background: "#0f2235", color: "rgba(255,255,255,0.75)", fontFamily: "'Lato','Helvetica Neue',sans-serif", padding: "60px 24px 30px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }} className="footer-grid">
                <div>
                    <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, textDecoration: "none" }}>
                        <div style={{ width: 38, height: 38, background: "linear-gradient(135deg, #27ae60, #2980b9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🦷</div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: 15, color: "white", letterSpacing: 1, textTransform: "uppercase" }}>Strategix</div>
                            <div style={{ fontSize: 10, color: "#27ae60", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Websites & Marketing</div>
                        </div>
                    </Link>
                    <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 290, color: "rgba(255,255,255,0.65)" }}>
                        The dental marketing agency that works as hard as you do. Helping 900+ practices grow since 2009.
                    </p>
                    <div style={{ marginTop: 18 }}>
                        <a href="tel:9999999999" style={{ color: "white", textDecoration: "none", fontWeight: 700, fontSize: 15 }}>📞 9999999999</a>
                    </div>
                </div>
                
                {/* Company Column */}
                <div>
                    <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Company</h4>
                    <Link to="/" style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                        Home
                    </Link>
                    <Link to="/about" style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                        About
                    </Link>
                    <Link to="/our-work" style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                        Our Work
                    </Link>
                    <Link to="/contact" style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                        Contact
                    </Link>
                </div>

                {/* Services Column */}
                <div>
                    <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Services</h4>
                    <Link to="/services" style={{ display: "block", fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e => e.target.style.color = "#27ae60"} onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}>
                        Custom Websites
                    </Link>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>SEO</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Paid Ads</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Content Creation</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Social Media</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Reputation Mgmt</div>
                </div>

                {/* Resources Column */}
                <div>
                    <h4 style={{ color: "white", fontWeight: 800, fontSize: 13.5, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 18 }}>Resources</h4>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Blog</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Case Studies</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>FAQs</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Support</div>
                    <div style={{ fontSize: 13.5, marginBottom: 10, color: "rgba(255,255,255,0.65)" }}>Privacy Policy</div>
                </div>
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