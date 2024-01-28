import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import BistroBoss from '../BistroBoss/BistroBoss';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import OrderOnline from '../OrdersOnline/OrdersOnline';
import OurMenuOne from '../OurMenuOne/OurMenuOne';
import OurMenuTwo from '../OurMenuTwo/OurMenuTwo';
import Testimonials from '../Testimonials/Testimonials';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            <Helmet>
                <title>{`Bistro Boss || ${user ? user?.displayName : 'Home'}`}</title>
            </Helmet>
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
