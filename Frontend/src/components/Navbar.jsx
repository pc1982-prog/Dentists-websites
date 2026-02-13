import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./Icons";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu and scroll to top when route changes
    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Our Work", path: "/our-work" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    // Check if current path is active
    const isActive = (path) => {
        if (path === "/" && location.pathname === "/") return true;
        if (path !== "/" && location.pathname.startsWith(path)) return true;
        return false;
    };

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
                <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}>
                    <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #1a5276, #2980b9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 20, fontWeight: "bold", boxShadow: "0 4px 12px rgba(26,82,118,0.3)" }}>
                        <span style={{ fontSize: 18 }}>🦷</span>
                    </div>
                    <div>
                        <div style={{ lineHeight: 1.1 }}>
                            <span style={{ fontWeight: 900, fontSize: 16, color: "#1a5276", letterSpacing: 1, textTransform: "uppercase" }}>Strategix Dental</span>
                        </div>
                        <div style={{ fontSize: 10, color: "#27ae60", fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase" }}>Websites & Marketing</div>
                    </div>
                </Link>

                {/* Desktop Links */}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
                    {links.map(link => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            style={{
                                padding: "8px 14px", 
                                borderRadius: 6, 
                                fontSize: 13.5, 
                                fontWeight: 600,
                                color: isActive(link.path) ? "#1a5276" : "#4a5568",
                                borderBottom: isActive(link.path) ? "2px solid #27ae60" : "2px solid transparent",
                                transition: "all 0.2s",
                                textDecoration: "none",
                                display: "inline-block",
                            }}
                        >
                            {link.name}
                        </Link>
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
                        <Link 
                            key={link.name} 
                            to={link.path}
                            style={{
                                display: "block", 
                                width: "100%", 
                                textAlign: "left",
                                padding: "12px 0", 
                                fontSize: 15, 
                                fontWeight: 600, 
                                color: isActive(link.path) ? "#1a5276" : "#4a5568",
                                borderBottom: "1px solid #f5f5f5",
                                textDecoration: "none",
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="tel:9999999999" style={{ display: "block", marginTop: 12, background: "#e67e22", color: "white", padding: "12px 20px", borderRadius: 8, fontSize: 15, fontWeight: 700, textDecoration: "none", textAlign: "center" }}>
                        📞 9999999999
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