import Logo from '../assets/logo.jpg';
import Mail from '../assets/mail.png';
import Insta from '../assets/insta.png';
import Fb from '../assets/fb.png';

function Footer() {
    return (
        <div className='footer'> 
            <img className='footer_logo' src={Logo} alt={Logo} />
            <div className='footer_contact'>
                <a href="mailto:exemple@gmail.com">  
                    <img src={Mail} alt={Mail} />
                </a>
                <a href="https://www.instagram.com/b2fcarrelage/" target='_blank' rel="noopener noreferrer">    
                    <img src={Insta} alt={Insta} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100025794584577" target='_blank' rel="noopener noreferrer">
                    <img src={Fb} alt={Fb} />
                </a>
            </div>
        </div>
    )
}

export default Footer