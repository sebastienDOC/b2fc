import Logo from '../assets/logo.jpg'
import Insta from '../assets/insta.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='nav_flex'> 
            <img className="nav_logo" src={Logo} alt={Logo} />
            <nav>
                <Link to="/home">Accueil</Link>
                <Link to="/gallery">Gallerie</Link>
                <a href="https://www.instagram.com/steph_maash/" target='_blank' rel="noopener noreferrer">
                    <img src={Insta} alt={Insta} />
                </a>
            </nav>
        </div>
    )
}

export default Header