import shopBg from '../../assets/shop/banner2.jpg';
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import FoodCard from '../Shared/FoodCard/FoodCard';
import PageCover from '../Shared/PageCover/PageCover';
import { Helmet } from 'react-helmet-async';
import { useCategoryFoods } from '../../hooks/useCategoryFoods';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Pagination } from 'flowbite-react';
import { useCategoryTotal } from '../../hooks/useCategoryTotal';

// Category Data
const category = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

const Shop = () => {
    const { selectedCategory } = useParams();
    const [categoryName, setCategoryName] = useState(selectedCategory ? selectedCategory : 'salad');
    const limit = 6;

    // Pagination
    const onPageChange = (number) => setCurrentPage(number);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoryFoods] = useCategoryFoods(categoryName, limit, currentPage);
    const [categoryTotal] = useCategoryTotal(categoryName);
    const totalPage = Math.ceil(categoryTotal / limit);

    const categoryIndex = category.indexOf(selectedCategory);

    const handleCategoryFoods = (categoryName) => {
        setCategoryName(categoryName.toLowerCase());
        setCurrentPage(1);
    };

    console.log(currentPage);
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Shop</title>
            </Helmet>
            <PageCover img={shopBg} title='OUR SHOP' subTitle='Would you like to try a dish?' />
            <section className='container mx-auto px-5 py-[30px] sm:py-[50px] md:py-[100px]'>
                <Tabs
                    position='relative'
                    variant='unstyled'
                    defaultIndex={categoryIndex ? categoryIndex : 0}
                >
                    <div className='flex justify-center items-center'>
                        <TabList className='flex justify-center items-center flex-wrap'>
                            {category.map((item) => (
                                <Tab
                                    onClick={() => handleCategoryFoods(item)}
                                    key={item}
                                    className="text-center text-neutral-900 text-2xl font-bold font-['Inter'] uppercase"
                                    _selected={{ color: '#BB8506' }}
                                >
                                    {item}
                                </Tab>
                            ))}
                        </TabList>
                    </div>
                    <TabIndicator mt='-1px' height='2px' bg='yellow.600' borderRadius='2px' />
                    <TabPanels className='py-5'>
                        {category.map((item) => (
                            <TabPanel key={item}>
                                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {categoryFoods.map((food) => (
                                        <FoodCard key={food._id} food={food} shop={true} />
                                    ))}
                                </div>
                                {categoryTotal > limit && (
                                    <div className='text-center mt-8'>
                                        <Pagination
                                            currentPage={currentPage}
                                            totalPages={totalPage}
                                            onPageChange={onPageChange}
                                        />
                                    </div>
                                )}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </Tabs>
            </section>
        </>
    );
};

export default Shop;
