const PageCover = ({ img, title, subTitle }) => {
    return (
        <section
            className='bg-cover py-[50px] md:py-[100px] lg:pt-[200px] px-5'
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='container mx-auto px-5'>
                <div className='bg-neutral-900 lg:w-10/12 mx-auto bg-opacity-60 px-5 py-10 lg:py-[100px]'>
                    <h1 className="text-center uppercase text-white text-[30px] md:text-[50px] lg:text-[88px] font-bold font-['Cinzel']">
                        {title}
                    </h1>
                    <p className="text-center uppercase text-white text-base sm:text-2xl font-semibold font-['Cinzel']">
                        {subTitle}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PageCover;
