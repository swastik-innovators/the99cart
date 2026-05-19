const Hero = () => {
    const scrollToProducts = (e) => {
        e.preventDefault();
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header id="home" className="hero">
            <div className="container hero-content">
                <div className="hero-badge">✨ Premium Assets Delivered Instantly</div>
                <h1 className="hero-title">
                    Supercharge your workflow with <span className="text-gradient">high-end</span> digital assets.
                </h1>
                <p className="hero-subtitle">
                    Discover our curated collection of graphic bundles, UI kits, templates, and more.
                    Designed for creators who demand the best, instantly available via WhatsApp.
                </p>
                <div className="hero-cta">
                    <a href="#products" onClick={scrollToProducts} className="btn-primary">Explore Products</a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
