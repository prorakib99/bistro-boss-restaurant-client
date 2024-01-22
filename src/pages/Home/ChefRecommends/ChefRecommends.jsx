import SectionTitles from '../../Shared/SectionTitles/SectionTitles';
import FoodCard from '../../Shared/FoodCard/FoodCard';
import { useFoods } from '../../../hooks/useFoods';

const ChefRecommends = () => {
    const [foods, isLoading] = useFoods(3);
    console.log(foods, isLoading);
    return (
        <section className='container mx-auto px-5 pt-20'>
            <SectionTitles subTitle='Should Try' title='CHEF RECOMMENDS' />
            <div className='py-6 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food} />
                ))}
            </div>
        </section>
    );
};

export default ChefRecommends;
