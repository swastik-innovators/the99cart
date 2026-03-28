import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ChevronRight, ShoppingCart, Layout, Type, ImageIcon, Box, Eye } from 'lucide-react';
import './Hero.css';

const BackgroundAnimation = () => {
    return (
        <Canvas className="threejs-canvas" camera={{ position: [0, 0, 5] }} dpr={[1, 1]}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[1, 2, 3]} intensity={1} />
            <AnimatedSphere />
        </Canvas>
    )
}

const AnimatedSphere = () => {
    const meshRef = useRef();
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 32, 32]} scale={2.2}>
            <MeshDistortMaterial
                color="#4f46e5"
                attach="material"
                distort={0.4}
                speed={1}
                roughness={0.2}
                transparent
                opacity={0.4}
            />
        </Sphere>
    );
};

import { productsData } from '../data/products';

const Hero = () => {

    const handleBuyClick = (e, productName) => {
        e.stopPropagation();
        const WHATSAPP_NUMBER = '918469058208';
        const message = `Hello the99cart team! 👋\n\nI am interested in purchasing the *${productName}*.\nCould you please share the details and payment options?`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const handleViewClick = (e) => {
        e.stopPropagation();
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero-section">
            <div className="threejs-container">
                <BackgroundAnimation />
            </div>
            
            <div className="hero-content-wrapper">
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-badge-pill"
                >
                    <span className="badge-new">New</span>
                    <span>Introducing Premium Access</span>
                    <ChevronRight size={16} />
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="hero-main-title"
                >
                    Digital assets, reimagined
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-main-subtitle"
                >
                    One platform: top UI kits, premium templates, and graphic assets—<br/>trusted by thousands of creators.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="hero-tools-row"
                >
                    <span className="tool-item"><Layout size={16} /> UI & UX Kits</span>
                    <span className="tool-item"><ImageIcon size={16} /> Graphic Assets</span>
                    <span className="tool-item"><Box size={16} /> 3D Elements</span>
                    <span className="tool-item"><Type size={16} /> Templates</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="hero-actions"
                >
                    <button className="btn-get-started" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore collection <ChevronRight size={18} />
                    </button>
                </motion.div>
            </div>

            {/* Original Full-size wrapper with side fade effects (Grid below featured) */}
            <motion.div 
                className="hero-product-grid-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="hero-product-grid">
                    {productsData.map((product) => (
                        <div key={`grid-${product.id}`} className={`product-card-wrap ${product.gridClass}`}>
                            {product.type === 'video' ? (
                                <video src={product.videoUrl} autoPlay loop muted playsInline className="product-media" />
                            ) : (
                                <img src={product.image} alt={product.title} loading="lazy" className="product-media" />
                            )}
                            
                            <div className="product-overlay">
                                <motion.div 
                                    className="overlay-buttons"
                                    initial={{ y: 10, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button className="btn-view" onClick={handleViewClick}>
                                        <Eye size={16} /> View
                                    </button>
                                    <button className="btn-buy" onClick={(e) => handleBuyClick(e, product.title)}>
                                        <ShoppingCart size={16} /> Buy
                                    </button>
                                </motion.div>
                            </div>

                            <div className="product-info-overlay">
                                <h3 className="product-title">{product.title}</h3>
                                <div className="product-price">{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Featured Products Section with Gradient Animation */}
            <motion.div 
                className="featured-section-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            >
                <div className="featured-section-header">
                    <h2>Featured Tailwind Products</h2>
                    <a href="#add" className="add-featured-link">Add Featured Product &rarr;</a>
                </div>
                
                <div className="featured-gradient-box">
                    <div className="featured-box-content">
                        {productsData.slice(0, 4).map((product) => (
                            <div key={product.id} className="featured-card">
                                <div className="featured-card-img-wrapper">
                                    {product.type === 'video' ? (
                                        <video src={product.videoUrl} autoPlay loop muted playsInline className="featured-card-media" />
                                    ) : (
                                        <img src={product.image} alt={product.title} loading="lazy" className="featured-card-media" />
                                    )}
                                    {product.badge && <div className="featured-badge">{product.badge}</div>}
                                </div>
                                <div className="featured-card-info">
                                    <h3>{product.title}</h3>
                                    <p className="featured-author">By The99Cart</p>
                                    <p className="featured-desc">{product.description}</p>
                                    <div className="featured-card-actions">
                                        <button className="btn-view" onClick={handleViewClick}>
                                            <Eye size={14} /> View
                                        </button>
                                        <button className="btn-buy" onClick={(e) => handleBuyClick(e, product.title)}>
                                            <ShoppingCart size={14} /> Buy
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
