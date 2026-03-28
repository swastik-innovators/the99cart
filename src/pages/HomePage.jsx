import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import { StatsSection, FeaturesSection, FAQSection } from '../components/SEOSections';
import { LogoMarquee, NewsletterCTA } from '../components/TrustSection';
import { WorkflowSection } from '../components/WorkflowSection';

const HomePage = () => {
    return (
        <div className="page-wrapper">
            <Hero />
            <LogoMarquee />
            <StatsSection />
            <Products />
            <FeaturesSection />
            <WorkflowSection />
            <FAQSection />
            <NewsletterCTA />
        </div>
    );
};

export default HomePage;
