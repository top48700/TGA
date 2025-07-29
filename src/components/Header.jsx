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
                        <Link to="/"><li className='bg'>Home</li></Link>
                        <Link to="/about-us"><li className='bg'>About Us</li></Link>
                        <Link to="/service"><li className='bg'>Service</li></Link>
                        <Link to="/content"><li className='bg'>Content</li></Link>
                        <Link to="/contact"><li className='bg'>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
} export default Header;