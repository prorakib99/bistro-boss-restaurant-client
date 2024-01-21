import Banner from '../Banner/Banner';
import BistroBoss from '../BistroBoss/BistroBoss';
import CallUs from '../CallUs/CallUs';
import OrderOnline from '../OrdersOnline/OrdersOnline';
import OurMenuOne from '../OurMenuOne/OurMenuOne';

const Home = () => {
    return (
        <>
            <Banner />
            <OrderOnline />
            <BistroBoss />
            <OurMenuOne />
            <CallUs />
        </>
    );
};

export default Home;
