import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, X, Moon, Sun } from 'lucide-react';
import { productsData } from '../data/products';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDark, setIsDark] = useState(false);
    const searchInputRef = useRef(null);
    
    const location = useLocation();
    const navigate = useNavigate();

    // Theme logic
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

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

    // Focus input when modal opens
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        } else {
            setSearchQuery('');
        }
    }, [isSearchOpen]);

    const scrollToSection = (e, id) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (location.pathname === '/' && location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
            }
            navigate('/', { replace: true, state: {} });
        }
    }, [location, navigate]);

    const handleBuyClick = (e, productName) => {
        e.preventDefault();
        e.stopPropagation();
        const WHATSAPP_NUMBER = '918469058208';
        const message = `Hello the99cart team! 👋\n\nI am interested in purchasing the *${productName}* from search.\nCould you please share the details and payment options?`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        setIsSearchOpen(false);
    };

    const filteredProducts = productsData.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (p.description && p.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            {/* The SVG filter for Chromatic Aberration Glass Effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
                <defs>
                    <filter id="glossy-filter" colorInterpolationFilters="sRGB" x="-15%" y="-15%" width="130%" height="130%">
                        <feImage x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="map" href="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%204133%2081.078125%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cdefs%3E%0A%3ClinearGradient%20id%3D%22glossy-red-_R_l9ftb_%22%20x1%3D%22100%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%220%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230000%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22red%22%2F%3E%3C%2FlinearGradient%3E%0A%3ClinearGradient%20id%3D%22glossy-blue-_R_l9ftb_%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230000%22%2F%3E%3Cstop%20offset%3D%2212%25%22%20stop-color%3D%22%230000%22%2F%3E%3Cstop%20offset%3D%2288%25%22%20stop-color%3D%22blue%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22blue%22%2F%3E%3C%2FlinearGradient%3E%0A%3C%2Fdefs%3E%0A%3Crect%20width%3D%224133%22%20height%3D%2281.078125%22%20fill%3D%22black%22%2F%3E%0A%3Crect%20width%3D%224133%22%20height%3D%2281.078125%22%20rx%3D%2220%22%20fill%3D%22url(%23glossy-red-_R_l9ftb_)%22%2F%3E%0A%3Crect%20width%3D%224133%22%20height%3D%2281.078125%22%20rx%3D%2220%22%20fill%3D%22url(%23glossy-blue-_R_l9ftb_)%22%20style%3D%22mix-blend-mode%3Adifference%22%2F%3E%0A%3Crect%20x%3D%222.837734375%22%20y%3D%222.837734375%22%20width%3D%224127.32453125%22%20height%3D%2275.40265625%22%20rx%3D%2220%22%20fill%3D%22hsl(0%200%25%2050%25%20%2F%200.75)%22%20style%3D%22filter%3Ablur(6px)%22%2F%3E%0A%3C%2Fsvg%3E"></feImage>
                        <feDisplacementMap in="SourceGraphic" in2="map" result="dispRed" scale="-60" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                        <feColorMatrix in="dispRed" type="matrix" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" result="red"></feColorMatrix>
                        <feDisplacementMap in="SourceGraphic" in2="map" result="dispGreen" scale="-48" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                        <feColorMatrix in="dispGreen" type="matrix" values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0" result="green"></feColorMatrix>
                        <feDisplacementMap in="SourceGraphic" in2="map" result="dispBlue" scale="-36" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
                        <feColorMatrix in="dispBlue" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0" result="blue"></feColorMatrix>
                        <feBlend in="red" in2="green" mode="screen" result="rg"></feBlend>
                        <feBlend in="rg" in2="blue" mode="screen" result="output"></feBlend>
                        <feGaussianBlur in="output" stdDeviation="1.05"></feGaussianBlur>
                    </filter>
                </defs>
            </svg>

            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-glossy-backdrop"></div>
                <div className="container nav-content">
                    <Link to="/" onClick={(e) => { if(location.pathname === '/') scrollToSection(e, 'home'); }} className="logo">
                        <span className="logo-icon"></span>
                        the<span className="highlight">99</span>cart
                    </Link>
                    <div className="nav-links">
                        <Link to="/" onClick={(e) => { if(location.pathname === '/') scrollToSection(e, 'home'); }}>Home</Link>
                        <a href="#products" onClick={(e) => scrollToSection(e, 'products')}>Products</a>
                        <Link to="/about">About Us</Link>
                        
                        {/* Search Icon Trigger */}
                        <button className="nav-search-btn" onClick={() => setIsSearchOpen(true)} title="Search Products">
                            <Search size={20} />
                        </button>

                        {/* Theme Toggle Trigger */}
                        <button className="nav-search-btn" onClick={toggleTheme} title="Toggle Theme">
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        
                        <a href="mailto:the99cart@gmail.com" className="btn-outline">Contact Us</a>
                    </div>
                </div>
            </nav>

            {/* Global Search Modal */}
            {isSearchOpen && (
                <div className="search-modal-overlay" onClick={() => setIsSearchOpen(false)}>
                    <div className="search-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="search-modal-header">
                            <Search size={24} className="search-modal-icon" />
                            <input 
                                ref={searchInputRef}
                                type="text" 
                                className="search-modal-input" 
                                placeholder="Search premium assets, templates, UI kits..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="search-modal-close" onClick={() => setIsSearchOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>
                        
                        {searchQuery && (
                            <div className="search-modal-results">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map(product => (
                                        <div key={product.id} className="search-result-item">
                                            <div className="search-result-media">
                                                {product.type === 'video' ? (
                                                    <video src={product.videoUrl} autoPlay loop muted playsInline />
                                                ) : (
                                                    <img src={product.image} alt={product.title} />
                                                )}
                                            </div>
                                            <div className="search-result-info">
                                                <h4>{product.title}</h4>
                                                <p>{product.price}</p>
                                            </div>
                                            <button 
                                                className="search-result-buy"
                                                onClick={(e) => handleBuyClick(e, product.title)}
                                            >
                                                <ShoppingCart size={16} /> Buy
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="search-no-results">
                                        <p>No products found for "{searchQuery}"</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
