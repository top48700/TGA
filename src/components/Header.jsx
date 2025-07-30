import { useState } from 'react';
import TGA from '/TG-logo.png'
import '../components/css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeMobileMenu();
        }
    };

    return (
        <div className="header">
            <div className="logo">
                <span>
                    <img src={TGA} width={220} height={120} alt="TGA Logo" />
                </span>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-items">
                <nav>
                    <ul className='nav-links'>
                        <Link to="/"><li className='bg'>Home</li></Link>
                        <Link to="/about-us"><li className='bg'>About Us</li></Link>
                        <Link to="/service"><li className='bg'>Service</li></Link>
                        <Link to="/content"><li className='bg'>Content</li></Link>
                        <Link to="/contact"><li className='bg'>Contact</li></Link>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation Overlay */}
            <div 
                className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={handleOverlayClick}
            >
                <nav className="mobile-nav-menu">
                    <Link to="/" onClick={closeMobileMenu}>
                        <div className='bg'>Home</div>
                    </Link>
                    <Link to="/about-us" onClick={closeMobileMenu}>
                        <div className='bg'>About Us</div>
                    </Link>
                    <Link to="/service" onClick={closeMobileMenu}>
                        <div className='bg'>Service</div>
                    </Link>
                    <Link to="/content" onClick={closeMobileMenu}>
                        <div className='bg'>Content</div>
                    </Link>
                    <Link to="/contact" onClick={closeMobileMenu}>
                        <div className='bg'>Contact</div>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Header;