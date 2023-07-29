import Slider from './Carousel';
import Mash from '../assets/Mash.jpg';

function About() {
    return (
        <div className='about' id='about'>
            <div className='about_extend'>
                <div className='about_txt'>
                    <img className='round' src={Mash} alt={Mash} />
                    <h2>Je m'appelle Stéphane et je suis B2F Carrelage</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <Slider />
            </div> 
        </div>
    )
}

export default About