const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <a href="#home" className="logo">
                        <span className="logo-icon"></span>
                        the<span className="highlight">99</span>cart
                    </a>
                    <p>Empowering creators with premium digital assets.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <a href="mailto:the99cart@gmail.com" className="email-link">the99cart@gmail.com</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 the99cart. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
