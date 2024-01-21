import bgImg from '../../assets/contact/banner.jpg';
import { MdLocalPhone } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { IoTimeOutline } from 'react-icons/io5';
import { FaTelegramPlane } from 'react-icons/fa';
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import PageCover from '../Shared/PageCover/PageCover';
import SectionTitles from '../Shared/SectionTitles/SectionTitles';
import { Helmet } from 'react-helmet-async';

const locations = [
    {
        _id: 1,
        icon: <MdLocalPhone className='text-3xl text-white' />,
        name: 'Phone',
        address: '+38 (012) 34 56 789'
    },
    {
        _id: 2,
        icon: <CiLocationOn className='text-3xl text-white' />,
        name: 'ADDRESS',
        address: '+38 (012) 34 56 789'
    },
    {
        _id: 3,
        icon: <IoTimeOutline className='text-3xl text-white' />,
        name: 'WORKING HOURS',
        address: 'Mon - Fri: 08:00 - 22:00',
        address2: 'Sat - Sun: 10:00 - 23:00'
    }
];

const Contact = () => {
    return (
        <div className='pb-16'>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss | Contact</title>
            </Helmet>

            <PageCover img={bgImg} title='CONTACT US' subTitle='Would you like to try a dish?' />
            <div className='container mx-auto px-5'>
                <section className='py-[60px] md:py-[100px]'>
                    <SectionTitles subTitle='Visit Us' title='OUR LOCATION' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6 pt-10'>
                        {locations.map((item) => (
                            <div className='bg-white border border-gray-200' key={item._id}>
                                <div className='bg-[#D1A054] py-4 flex justify-center items-center'>
                                    {item.icon}
                                </div>
                                <div className='px-5 pb-5'>
                                    <div className='bg-zinc-100 flex flex-col py-10 items-center px-3 md:h-[180px] object-cover'>
                                        <h2 className="text-center text-neutral-900 sm:mb-3 text-xl sm:text-2xl font-medium font-['Inter']">
                                            {item.name}
                                        </h2>
                                        <p className="text-center text-neutral-700 mt-2 sm:mt-0 text-sm sm:text-base font-normal font-['Inter']">
                                            {item.address} <br /> {item.address2 && item.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='pb-10'>
                    <SectionTitles subTitle='Send Us a Message' title='CONTACT FORM' />
                    <form className='grid md:grid-cols-2 gap-6 mt-10 p-[30px] sm:p-[50px] bg-zinc-100'>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input
                                size={'lg'}
                                className='!bg-white'
                                type='text'
                                placeholder='Enter your name'
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                size={'lg'}
                                className='!bg-white'
                                type='email'
                                placeholder='Enter your email'
                            />
                        </FormControl>
                        <FormControl className='md:col-span-2' isRequired>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                size={'lg'}
                                className='!bg-white'
                                type='number'
                                placeholder='Enter your phone number'
                            />
                        </FormControl>
                        <FormControl className='md:col-span-2' isRequired>
                            <FormLabel>Message</FormLabel>
                            <Textarea
                                rows={7}
                                size={'lg'}
                                className='!bg-white'
                                placeholder='Write your message here'
                            />
                        </FormControl>
                        <div className='md:col-span-2'>
                            <div className='hidden'>
                                <h2 className='font-bold'>This is Captcha Area</h2>
                            </div>
                            <div className='pt-8 md:pt-12 flex justify-center'>
                                <button
                                    className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white md:text-xl py-4 px-5 flex items-center gap-2 font-bold font-['Inter']"
                                    type='submit'
                                >
                                    Send Message <FaTelegramPlane className='text-2xl text-white' />
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
