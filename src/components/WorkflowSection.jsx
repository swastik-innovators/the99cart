import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WORKFLOW_CARDS = [
  {
    id: 'designers',
    title: 'Designers',
    subtitle: 'Tools that work like you do',
    desc: 'Streamline your design process with AI-powered tools and high-quality assets that help you work faster and focus on what matters. Automate repetitive tasks, customize assets instantly, and keep every design consistent, secure, and on-brand—without extra effort.',
    bgImage: 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?auto=format&fit=crop&q=80&w=1200', 
    bgColor: '#3b5bdb',
  },
  {
    id: 'marketers',
    title: 'Marketers',
    subtitle: 'Create faster, explore new possibilities',
    desc: 'Produce high-quality visuals in seconds with AI tools that open up new creative directions. Adapt assets for every channel, automate repetitive tasks, and scale campaigns—while keeping every piece consistent and on-brand.',
    bgImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200',
    bgColor: '#863e9f',
  },
  {
    id: 'filmmakers',
    title: 'Filmmakers',
    subtitle: 'Cinematic assets at your fingertips',
    desc: 'Access thousands of high-res video overlays, LUTS, and motion graphics designed by professionals to elevate your edits instantly. Bring your vision to life with industry-standard visual effects.',
    bgImage: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=1200',
    bgColor: '#0c8599',
  },
  {
    id: 'content-creators',
    title: 'Content creators',
    subtitle: 'Everything you need to go viral',
    desc: 'Enhance your videos and graphics with modern templates, animated typography, and dynamic transitions that capture audience attention within the first 3 seconds of playtime.',
    bgImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    bgColor: '#a61e4d',
  }
];

export const WorkflowSection = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="workflow-section">
            <div className="container">
                <div className="workflow-header">
                    <h2>Boost your professional workflow and productivity</h2>
                    <div className="workflow-nav">
                        <button className="nav-btn"><ChevronLeft size={16} /></button>
                        <button className="nav-btn"><ChevronRight size={16} /></button>
                    </div>
                </div>
                
                <div className="workflow-container" onMouseLeave={() => setHoveredId(null)}>
                    {WORKFLOW_CARDS.map((card) => {
                        const isHovered = hoveredId === card.id;
                        const isAnyHovered = hoveredId !== null;
                        const isShrunk = isAnyHovered && !isHovered;
                        
                        return (
                            <div 
                                key={card.id}
                                className={`workflow-card ${isHovered ? 'expanded' : ''} ${isShrunk ? 'shrunk' : ''}`}
                                onMouseEnter={() => setHoveredId(card.id)}
                                style={{ backgroundColor: card.bgColor }}
                            >
                                <div className="card-visual-area">
                                    <div className="card-image-wrapper">
                                        <img src={card.bgImage} alt={card.title} className="card-image" />
                                    </div>
                                    <div className="card-image-gradient-overlay" />
                                </div>

                                <div className="card-content-wrapper">
                                    <h3 className="card-title">{card.title}</h3>
                                    
                                    <div className="card-reveal-area">
                                        <h4>{card.subtitle}</h4>
                                        <p>{card.desc}</p>
                                    </div>
                                    
                                    <button className="btn-view-more">View more</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
