import React from 'react';

const productsData = [
    {
        id: 1,
        title: "Ultimate Graphic Bundle",
        description: "Over 500+ premium graphics, vectors, and icons for your next big project.",
        price: "₹499",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Modern UI Kit Pro",
        description: "A complete dashboard and landing page UI kit with 200+ components.",
        price: "₹799",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Social Media Templates",
        description: "100+ stunning, ready-to-use templates for Instagram, Twitter & LinkedIn.",
        price: "₹299",
        image: "https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Startup Presentation Deck",
        description: "Win over investors with this highly converting, professionally designed deck.",
        price: "₹399",
        image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
    }
];

const Products = () => {
    const handleBuyClick = (productName) => {
        const WHATSAPP_NUMBER = '918469058208';
        const message = `Hello the99cart team! 👋\n\nI am interested in purchasing the *${productName}*.\nCould you please share the details and payment options?`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
        
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="section-header">
                    <h2>Featured Products</h2>
                    <p>Top-tier resources to accelerate your design process.</p>
                </div>

                <div className="products-grid">
                    {productsData.map((product) => (
                        <article key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image} alt={product.title} className="product-img" />
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
            </div>
        </section>
    );
};

export default Products;
