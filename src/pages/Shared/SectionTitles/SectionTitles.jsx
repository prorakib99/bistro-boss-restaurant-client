const SectionTitles = ({ title, subTitle }) => {
    return (
        <div className='max-w-[424px] mx-auto text-center mb-5 space-y-3'>
            <h6 className="text-yellow-600 text-md mb-4 sm:text-xl font-normal font-['Inter']">
                ---{subTitle}---
            </h6>
            <div className='border-y-4 py-3'>
                <h2 className="text-neutral-900 text-[30px] sm:text-[40px] font-normal font-['Inter'] uppercase">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SectionTitles;