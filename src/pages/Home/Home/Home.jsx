import Banner from '../Banner/Banner';
import BistroBoss from '../BistroBoss/BistroBoss';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import OrderOnline from '../OrdersOnline/OrdersOnline';
import OurMenuOne from '../OurMenuOne/OurMenuOne';
import OurMenuTwo from '../OurMenuTwo/OurMenuTwo';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Banner />
            <OrderOnline />
            <BistroBoss />
            <OurMenuOne />
            <CallUs />
            <ChefRecommends />
            <OurMenuTwo />
            <Testimonials />
        </>
    );
};

export default Home;
