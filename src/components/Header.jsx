import Logo from '../assets/logo.jpg'
import Insta from '../assets/insta.png'

function Header() {
    return (
        <div className='nav_flex'> 
            <img className="" src={Logo} alt={Logo} />
            <nav>
                <a href="#about">A propos</a>
                <a href="#gallerie">Gallerie</a>
                <a href="https://www.instagram.com/steph_maash/" target='_blank' rel="noopener noreferrer">
                    <img src={Insta} alt={Insta} />
                </a>
            </nav>
        </div>
    )
}

export default Header