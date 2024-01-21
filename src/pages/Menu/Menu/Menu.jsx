import { Helmet } from 'react-helmet-async';
import bgImg from '../../../assets/menu/banner3.jpg';
import PageCover from '../../Shared/PageCover/PageCover';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladsImg from '../../../assets/menu/salad-bg.jpg';
import soupsImg from '../../../assets/menu/soup-bg.jpg';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import SectionTitles from '../../Shared/SectionTitles/SectionTitles';

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <PageCover img={bgImg} title='OUR MENU' subTitle='Would you like to try a dish?' />

            <div className='my-10 lg:my-20'>
                <SectionTitles title="TODAY'S OFFER" subTitle="Don't miss" />
                <CategoryMenu categoryName='offered' />

                <CategoryMenu categoryName='dessert' img={dessertImg} title='dessert' />
                <CategoryMenu categoryName='pizza' img={pizzaImg} title='pizza' />
                <CategoryMenu categoryName='salad' img={saladsImg} title='salads' />
                <CategoryMenu categoryName='soup' img={soupsImg} title='soups' />
            </div>
        </>
    );
};

export default Menu;
