import Logo from '../assets/logo.jpg'
import Insta from '../assets/insta.png'

function Header() {
    return (
        <div className='nav_flex'> 
            <img src={Logo} alt={Logo} />
            <nav>
                <span>A propos</span>
                <span>Galerie</span>
                <span>Services</span>
                <span>Contact</span>
                <img src={Insta} alt={Insta} />
            </nav>
        </div>
    )
}

export default Header