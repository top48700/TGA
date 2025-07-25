import TGA from '/TG-logo.png'
import '../components/css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <span>
                    <img src={TGA} width={220} height={120} />
                </span>
            </div>
            <div className="nav-items">
                <nav>
                    <ul className='nav-links'>
                        <li className='bg'><Link to="/">Home</Link></li>
                        <li className='bg'><Link to="/about-us">About Us</Link></li>
                        <li className='bg'><Link to="/service">Service</Link></li>
                        <li className='bg'><Link to="/content">Content</Link></li>
                        <li className='bg'><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} export default Header;