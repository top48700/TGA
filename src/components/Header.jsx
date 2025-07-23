import TGA from '/TG-logo.png'
import '../components/css/Header.css'

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
                        <li className='bg'>Home</li>
                        <li className='bg'>About Us</li>
                        <li className='bg'>Service</li>
                        <li className='bg'>Content</li>
                        <li className='bg'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
} export default Header;