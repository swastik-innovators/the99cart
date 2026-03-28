import React, { useState } from 'react';
import { Shield, Zap, RefreshCw, Layers, ChevronDown } from 'lucide-react';

export const StatsSection = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>100k+</h3>
                        <p>Active Creators</p>
                    </div>
                    <div className="stat-card">
                        <h3>5,000+</h3>
                        <p>Premium Assets</p>
                    </div>
                    <div className="stat-card">
                        <h3>99.9%</h3>
                        <p>Customer Satisfaction</p>
                    </div>
                    <div className="stat-card">
                        <h3>24/7</h3>
                        <p>Expert Support</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const FeaturesSection = () => {
    const features = [
        {
            icon: <Shield size={24} />,
            title: "Commercial Licensing",
            desc: "Use all our digital assets in your commercial projects without worrying about complex attribution rules."
        },
        {
            icon: <Zap size={24} />,
            title: "Instant Delivery",
            desc: "Get immediate access to your downloaded files via secure servers right after your purchase is confirmed."
        },
        {
            icon: <RefreshCw size={24} />,
            title: "Lifetime Updates",
            desc: "Pay once and receive free lifetime updates on UI kits, templates, and software resources."
        },
        {
            icon: <Layers size={24} />,
            title: "High Quality Assets",
            desc: "Handcrafted by top-tier industry professionals ensuring 4k resolution and pixel-perfect vectors."
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2>Why Choose The99Cart</h2>
                    <p>Built for the modern creator, offering unparalleled quality and speed.</p>
                </div>
                <div className="features-grid">
                    {features.map((feat, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{feat.icon}</div>
                            <h3>{feat.title}</h3>
                            <p>{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const FAQSection = () => {
    const faqs = [
        {
            q: "What rights do I get with the purchased assets?",
            a: "You receive a broad commercial license allowing you to use the assets in an unlimited number of personal and commercial projects, client work, and physical or digital advertisements."
        },
        {
            q: "How do I access my files after purchasing via WhatsApp?",
            a: "Once your payment is confirmed, our automated WhatsApp system will immediately send you a secure Google Drive or direct download link to access your premium zip files."
        },
        {
            q: "Can I use these UI Kits in SaaS applications?",
            a: "Absolutely. Our UI kits are specifically designed for modern SaaS dashboards and web apps. You can integrate them into your React, Vue, or Angular projects."
        },
        {
            q: "Are the 3D assets compatible with Blender?",
            a: "Yes! All our 3D packs come with source .blend files, alongside standard formats like .obj and .fbx for seamless integration in any 3D software or game engine."
        }
    ];

    const [openIndex, setOpenIndex] = useState(0); // Open the first by default

    return (
        <section className="faq-section">
            <div className="container">
                <div className="section-header">
                    <h2>Frequently Asked Questions</h2>
                    <p>Everything you need to know about our products and billing.</p>
                </div>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <ChevronDown className="faq-icon" size={20}/>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
