import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="logo">
                    <span className="logo-icon"></span>
                    the<span className="highlight">99</span>cart
                </a>
                <div className="nav-links">
                    <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
                    <a href="#products" onClick={(e) => scrollToSection(e, 'products')}>Products</a>
                    <a href="mailto:the99cart@gmail.com" className="btn-outline">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
