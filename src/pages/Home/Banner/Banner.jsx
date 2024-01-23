import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImg1 from '../../../assets/home/01.jpg';
import bannerImg2 from '../../../assets/home/02.jpg';
import bannerImg3 from '../../../assets/home/03.png';
import bannerImg4 from '../../../assets/home/04.jpg';
import bannerImg5 from '../../../assets/home/05.png';
import bannerImg6 from '../../../assets/home/06.png';

// Slider data
const sliders = [
    {
        id: 1,
        img: bannerImg1
    },
    {
        id: 2,
        img: bannerImg2
    },
    {
        id: 3,
        img: bannerImg3
    },
    {
        id: 4,
        img: bannerImg4
    },
    {
        id: 5,
        img: bannerImg5
    },
    {
        id: 6,
        img: bannerImg6
    }
];

const Banner = () => {
    return (
        <Carousel
            autoPlay
            interval={5000}
            emulateTouch={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            thumbWidth={100}
            dynamicHeight={true}
            className='custom-center'
        >
            {sliders.map((slider) => (
                <div key={slider.id}>
                    <img className='xl:h-[90vh]' src={slider.img} />
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
