import { useEffect, useState } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitles from '../../Shared/SectionTitles/SectionTitles';
import MoreButton from '../../Shared/MoreButton/MoreButton';

const OurMenuOne = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/category/popular`)
            .then((res) => res.json())
            .then((data) => setFoods(data));
    }, []);
    return (
        <section className='container mx-auto px-5 py-12 lg:py-20'>
            <SectionTitles subTitle='Check it out' title='FROM OUR MENU' />
            <div className='grid lg:grid-cols-2 gap-7 py-12'>
                {foods.map((item) => (
                    <MenuItem key={item._id} item={item} />
                ))}
            </div>
            <MoreButton text='View Full Menu' />
        </section>
    );
};

export default OurMenuOne;
