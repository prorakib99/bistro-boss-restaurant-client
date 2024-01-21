import { useCategoryFoods } from '../../../hooks/useCategoryFoods';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import MoreButton from '../../Shared/MoreButton/MoreButton';
import MenuCover from '../MenuCover/MenuCover';

const CategoryMenu = ({ categoryName, img, title }) => {
    const [foods] = useCategoryFoods(categoryName);

    return (
        <section className='mb-10'>
            {title && <MenuCover img={img} title={title} />}
            <div className='container mx-auto px-5'>
                <div className='grid md:grid-cols-2 lg:w-10/12 mx-auto gap-6 py-6 mb-3 sm:py-10'>
                    {foods.map((item) => (
                        <MenuItem key={item._id} item={item} />
                    ))}
                </div>
                <MoreButton text='ORDER YOUR FAVOURITE FOOD' />
            </div>
        </section>
    );
};

export default CategoryMenu;
