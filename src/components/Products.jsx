import React from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../data/products';

const Products = () => {
    const navigate = useNavigate();

    const handleBuyClick = (productName) => {
        const WHATSAPP_NUMBER = '918469058208';
        const message = `Hello the99cart team! 👋\n\nI am interested in purchasing the *${productName}*.\nCould you please share the details and payment options?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    // Limit to 4 items * 5 rows = 20 max items for the home preview grid
    const displayedProducts = productsData.slice(0, 20);

    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="section-header">
                    <h2>All Products</h2>
                    <p>Top-tier resources to accelerate your design process.</p>
                </div>

                <div className="products-preview-wrapper relative">
                    <div className="products-grid">
                        {displayedProducts.map((product) => (
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
                        ))}
                    </div>

                    {/* Faded overlay at the very bottom blending into the background */}
                    <div className="products-fade-overlay">
                         <button className="btn-browse-more" onClick={() => navigate('/products')}>
                             Browse All Products &rarr;
                         </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
