import React from 'react';
import { Layers, Box, Monitor, PenTool, Video, Code, Hexagon } from 'lucide-react';

export const LogoMarquee = () => {
    // Array of simulated tool/company integrations for SaaS trust
    const tools = [
        { name: "Figma", icon: <Layers size={24} /> },
        { name: "Framer", icon: <Box size={24} /> },
        { name: "Webflow", icon: <Monitor size={24} /> },
        { name: "Illustrator", icon: <PenTool size={24} /> },
        { name: "After Effects", icon: <Video size={24} /> },
        { name: "React", icon: <Code size={24} /> },
        { name: "Blender", icon: <Hexagon size={24} /> }
    ];

    return (
        <div className="marquee-section">
            <div className="container">
                <p className="marquee-title">Trusted by top-tier designers & compatible with industry standards</p>
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[...tools, ...tools, ...tools].map((tool, idx) => (
                            <div key={idx} className="marquee-item">
                                {tool.icon}
                                <span>{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const NewsletterCTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-glass-box">
                    <div className="cta-content">
                        <h2>Take Your Design Workflow to the Next Level</h2>
                        <p>Join over 100,000 active creators receiving our weekly exclusive highly-curated assets and UI kits straight to their inbox.</p>
                        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                placeholder="Enter your best email address" 
                                required 
                                className="cta-input"
                            />
                            <button type="submit" className="btn-cta-submit">
                                Get Early Access
                            </button>
                        </form>
                        <p className="cta-disclaimer">No spam. Unsubscribe at any time. Premium value only.</p>
                    </div>
                    {/* Decorative glowing orbs inside the glass box */}
                    <div className="cta-glow-1"></div>
                    <div className="cta-glow-2"></div>
                </div>
            </div>
        </section>
    );
};
