import React, { useRef } from 'react';

const Footer = () => {
    const textRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!textRef.current) return;
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        textRef.current.style.setProperty('--mouseX', `${x}px`);
        textRef.current.style.setProperty('--mouseY', `${y}px`);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    {/* Left Column - Brand & Blurb */}
                    <div className="footer-brand-info">
                        <div className="footer-certifications">
                            <div className="cert-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            </div>
                            <div className="cert-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                            </div>
                        </div>
                        <p className="footer-blurb">
                            Highest standards of quality and digital integrity. This ensures our customers can trust that their digital assets are handled with enterprise-grade protection and compliance.
                        </p>
                    </div>

                    {/* Right Columns - Links */}
                    <div className="footer-links-grid">
                        <div className="footer-link-col">
                            <h4>Assets</h4>
                            <a href="#">Graphic Bundles</a>
                            <a href="#">UI Kits Pro</a>
                            <a href="#">Social Media</a>
                            <a href="#">3D Elements</a>
                            <a href="#">Video Assets</a>
                        </div>
                        <div className="footer-link-col">
                            <h4>Use cases</h4>
                            <a href="#">Graphic Design</a>
                            <a href="#">Web Design</a>
                            <a href="#">App Development</a>
                            <a href="#">Marketing</a>
                        </div>
                        <div className="footer-link-col">
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Contact</a>
                            <a href="#">Careers</a>
                            <a href="#">Affiliate Program</a>
                            <a href="#">Education Hub</a>
                        </div>
                    </div>
                </div>

                {/* Localized Spotlight Huge Text block */}
                <div 
                    className="footer-huge-text-wrapper" 
                    onMouseMove={handleMouseMove}
                    ref={textRef}
                >
                    <div className="footer-huge-text-base">THE99CART</div>
                    <div className="footer-huge-text-glow">THE99CART</div>
                </div>

                {/* Bottom line */}
                <div className="footer-bottom-line">
                    <div className="footer-bottom-links">
                        <a href="#">Privacy Policy</a>
                        <span className="divider">|</span>
                        <a href="#">Terms of Service</a>
                        <span className="divider">|</span>
                        <a href="#">Cookie Policy</a>
                        <span className="divider">|</span>
                        <a href="#">DMCA</a>
                    </div>
                    <div className="footer-copyright">
                        &copy; 2026 All Rights Reserved, the99cart &reg; | GST: 24ABCD1234E1Z5
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
