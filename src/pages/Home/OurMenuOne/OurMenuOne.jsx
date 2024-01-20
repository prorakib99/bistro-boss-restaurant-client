import MenuItem from './MenuItem/MenuItem';
import SectionTitles from '../../Shared/SectionTitles/SectionTitles';

const OurMenuOne = () => {
    return (
        <section className='container mx-auto px-5 py-12 lg:py-20'>
            <SectionTitles subTitle='Check it out' title='FROM OUR MENU' />
            <div className='grid lg:grid-cols-2 gap-7 py-12'>
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
            <div className='text-center'>
                <button className="btn bg-transparent rounded-lg duration-300 border-b-4 border-t-0 border-x-0 border-gray-800 hover:border-gray-800 hover:text-white focus:bg-black focus:text-white transition-all duration-400 text-center text-gray-800 min-h-[3.5rem] hover:bg-gray-800 sm:text-xl font-medium font-['Inter'] uppercase">
                    View Full Menu
                </button>
            </div>
        </section>
    );
};

export default OurMenuOne;
