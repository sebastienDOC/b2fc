import carousel from '../datas/carousel.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
    return (
        <Carousel>
            {carousel.map((data) => 
                <img src={data.image} alt={data.image} />
            )}
        </Carousel>
    );
}