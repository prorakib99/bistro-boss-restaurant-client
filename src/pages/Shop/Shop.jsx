import shopBg from '../../assets/shop/banner2.jpg';
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import FoodCard from '../Shared/FoodCard/FoodCard';
import PageCover from '../Shared/PageCover/PageCover';
import { Helmet } from 'react-helmet-async';

// Category Data
const category = ['Salad', 'pizza', 'soups', 'desserts', 'drinks'];

const Shop = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Shop</title>
            </Helmet>
            <PageCover img={shopBg} title='OUR SHOP' subTitle='Would you like to try a dish?' />
            <section className='container mx-auto px-5 py-[30px] sm:py-[50px] md:py-[100px]'>
                <Tabs position='relative' variant='unstyled'>
                    <div className='flex justify-center items-center'>
                        <TabList className='flex justify-center items-center flex-wrap'>
                            {category.map((item) => (
                                <Tab
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
                        <TabPanel>
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                <FoodCard />
                                <FoodCard />
                                <FoodCard />
                                <FoodCard />
                                <FoodCard />
                                <FoodCard />
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </section>
        </>
    );
};

export default Shop;
