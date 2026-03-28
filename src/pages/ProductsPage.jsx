import React, { useState } from 'react';
import { productsData } from '../data/products';
import { Search, Filter, SlidersHorizontal, ChevronDown, Check } from 'lucide-react';

const ProductsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const categories = ['All', 'UI Kits', 'Graphic Bundles', '3D Items', 'Video Templates', 'Social Media'];
    const [activeCategory, setActiveCategory] = useState('All');

    const handleBuyClick = (productName) => {
        const WHATSAPP_NUMBER = '918469058208';
        const message = `Hello the99cart team! 👋\n\nI am interested in purchasing the *${productName}*.\nCould you please share the details and payment options?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    // Filter logic securely mapping proper data arrays
    const filteredProducts = productsData.filter(p => {
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <div className="products-page">
            <div className="products-page-header">
                <div className="container">
                    <h1>Explore All Assets</h1>
                    <p>Premium resources to elevate your next massive project.</p>
                </div>
            </div>
            
            <div className="container-fluid">
                <div className="products-page-layout">
                    {/* Left Sidebar Filter */}
                    <aside className="products-sidebar">
                        <div className="sidebar-widget">
                            <h3><Filter size={18} /> Categories</h3>
                            <ul className="filter-list">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button 
                                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                            onClick={() => setActiveCategory(cat)}
                                        >
                                            {cat} {activeCategory === cat && <Check size={14}/>}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="sidebar-widget">
                            <h3>Price Range</h3>
                            <div className="price-inputs">
                                <input type="number" placeholder="Min ₹" className="custom-input" />
                                <span>-</span>
                                <input type="number" placeholder="Max ₹" className="custom-input" />
                            </div>
                        </div>

                        <div className="sidebar-widget">
                            <h3>Software Format</h3>
                            <label className="checkbox-label"><input type="checkbox" /> Figma</label>
                            <label className="checkbox-label"><input type="checkbox" /> Photoshop</label>
                            <label className="checkbox-label"><input type="checkbox" /> After Effects</label>
                            <label className="checkbox-label"><input type="checkbox" /> Blender</label>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="products-main">
                        {/* Top Bar for Search and Sort */}
                        <div className="products-topbar">
                            <div className="products-search-wrap">
                                <Search size={20} className="search-icon" />
                                <input 
                                    type="text" 
                                    placeholder="Search specific premium assets..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="custom-input"
                                />
                            </div>
                            <div className="products-sort">
                                <button className="sort-btn custom-input">
                                    <SlidersHorizontal size={16} /> Sort: Newest <ChevronDown size={14} />
                                </button>
                            </div>
                        </div>

                        {/* 4-Column Grid */}
                        <div className="products-grid">
                            {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                                <article key={product.id} className="product-card">
                                    <div className="product-image-wrapper">
                                        {product.type === 'video' ? (
                                            <video src={product.videoUrl} autoPlay loop muted playsInline className="product-img" />
                                        ) : (
                                            <img src={product.image} alt={product.title} loading="lazy" className="product-img" />
                                        )}
                                        {product.badge && <div className="product-badge">{product.badge}</div>}
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.title}</h3>
                                        <p className="product-desc">{product.description}</p>
                                        <div className="product-footer">
                                            <span className="price">{product.price}</span>
                                            <button 
                                                onClick={() => handleBuyClick(product.title)} 
                                                className="btn-buy"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                                                </svg>
                                                Buy via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            )) : (
                                <div className="no-products-found">
                                    <h3>No products found</h3>
                                    <p>Try adjusting your search or filters.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- New User Requested Sections --- */}
                
                {/* 1. Category Cards */}
                <div className="bottom-category-cards">
                    <h2 className="section-title">Explore by Category</h2>
                    <div className="cat-cards-grid">
                        {['UI & UX Kits', 'Graphic Elements', '3D Models', 'Video Presets'].map((cat, idx) => (
                            <div key={idx} className="category-card-pill">
                                <h3>{cat}</h3>
                                <p>Browse Collection &rarr;</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Extra Content Section */}
                <div className="extra-content-box">
                    <div className="ec-info">
                        <h2>Can't find what you're looking for?</h2>
                        <p>We add new premium assets weekly. Upgrade your license to get unlimited access to all native formats, lifetime updates, and dedicated 24/7 priority support mapped straight to your ecosystem.</p>
                        <button className="btn-get-started">Contact Creative Team</button>
                    </div>
                    <div className="ec-glow"></div>
                </div>

                {/* 3. Featured Product End Banner */}
                <div className="featured-bottom-banner">
                    <div className="fbb-content">
                        <span className="featured-tag">★ Deal of the Week</span>
                        <h2>The Ultimate SaaS Architecture Kit</h2>
                        <p>Master your workflow with 500+ premium React & Tailwind UI elements, beautifully rendered 3D abstract shapes, and production-ready marketing assets. Secure your lifetime deal today.</p>
                        <div className="fbb-actions">
                            <button className="btn-bg-white">View Details</button>
                            <span className="fbb-price">Only ₹1499</span>
                        </div>
                    </div>
                    <div className="fbb-image-wrap">
                        <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800" alt="SaaS architecture kit" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
