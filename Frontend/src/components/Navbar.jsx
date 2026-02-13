import React, { useState, useEffect } from "react";
import { MenuIcon, CloseIcon } from "./Icons";

const Navbar = ({ currentPage, setPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = ["Home", "Services", "Our Work", "About", "Contact"];

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
            background: scrolled ? "rgba(255,255,255,0.97)" : "white",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.10)" : "0 1px 8px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            fontFamily: "'Lato', 'Helvetica Neue', sans-serif",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
                {/* Logo */}
                <div onClick={() => { setPage("Home"); setMenuOpen(false); }} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                    <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #1a5276, #2980b9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 20, fontWeight: "bold", boxShadow: "0 4px 12px rgba(26,82,118,0.3)" }}>
                        <span style={{ fontSize: 18 }}>🦷</span>
                    </div>
                    <div>
                        <div style={{ lineHeight: 1.1 }}>
                            <span style={{ fontWeight: 900, fontSize: 16, color: "#1a5276", letterSpacing: 1, textTransform: "uppercase" }}>Strategix Dental</span>
                        </div>
                        <div style={{ fontSize: 10, color: "#27ae60", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Websites & Marketing</div>
                    </div>
                </div>

                {/* Desktop Links */}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
                    {links.map(link => (
                        <button key={link} onClick={() => setPage(link)} style={{
                            background: "none", border: "none", cursor: "pointer",
                            padding: "8px 14px", borderRadius: 6, fontSize: 13.5, fontWeight: 600,
                            color: currentPage === link ? "#1a5276" : "#4a5568",
                            borderBottom: currentPage === link ? "2px solid #27ae60" : "2px solid transparent",
                            transition: "all 0.2s",
                        }}>
                            {link}
                        </button>
                    ))}
                    <a href="tel:9999999999" style={{ background: "#e67e22", color: "white", padding: "9px 18px", borderRadius: 6, fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, boxShadow: "0 2px 8px rgba(230,126,34,0.35)", marginLeft: 6 }}>
                        📞 9999999999
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#1a5276" }} className="mobile-menu-btn">
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{ background: "white", borderTop: "1px solid #eee", padding: "12px 24px 20px" }} className="mobile-menu">
                    {links.map(link => (
                        <button key={link} onClick={() => { setPage(link); setMenuOpen(false); }} style={{
                            display: "block", width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
                            padding: "12px 0", fontSize: 15, fontWeight: 600, color: currentPage === link ? "#1a5276" : "#4a5568",
                            borderBottom: "1px solid #f5f5f5",
                        }}>
                            {link}
                        </button>
                    ))}
                    <a href="tel:7203997071" style={{ display: "block", marginTop: 12, background: "#e67e22", color: "white", padding: "12px 20px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
                        📞 720-399-7071
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;