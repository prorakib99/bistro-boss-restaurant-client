import SectionTitles from '../../Shared/SectionTitles/SectionTitles';
import FoodCard from './FoodCard/FoodCard';

const ChefRecommends = () => {
    return (
        <section className='container mx-auto px-5 pt-20'>
            <SectionTitles subTitle='Should Try' title='CHEF RECOMMENDS' />
            <div className='py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <FoodCard />
                <FoodCard />
                <FoodCard />
            </div>
        </section>
    );
};

export default ChefRecommends;
