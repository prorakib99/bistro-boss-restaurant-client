/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitles from '../../Shared/SectionTitles/SectionTitles';
import MoreButton from '../../Shared/MoreButton/MoreButton';
import { useFoods } from '../../../hooks/useFoods';
import { useFoodCount } from '../../../hooks/useFoodsCount';
import { useEffect } from 'react';

const OurMenuOne = () => {
    const [foodsLimit, setFoodsLimit] = useState(6);
    const [foods, isLoading, refetch] = useFoods(foodsLimit);
    const [totalFoods] = useFoodCount();
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        refetch();
    }, [foodsLimit]);

    const handleLoadMore = () => {
        if (totalFoods <= foodsLimit) {
            return setIsDisabled(true);
        }
        setFoodsLimit(foodsLimit + 6);
    };

    return (
        <section className='container mx-auto px-5 py-12 lg:py-20'>
            <SectionTitles subTitle='Check it out' title='FROM OUR MENU' />
            <div className='grid lg:grid-cols-2 gap-7 py-12'>
                {foods.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            {isLoading ? (
                'Loading'
            ) : (
                <MoreButton
                    handleLoadMore={handleLoadMore}
                    isDisabled={isDisabled}
                    text='View Full Menu'
                />
            )}
        </section>
    );
};

export default OurMenuOne;
