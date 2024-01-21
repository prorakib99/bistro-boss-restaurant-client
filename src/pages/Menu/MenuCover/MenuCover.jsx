const MenuCover = ({ img, title }) => {
    return (
        <section
            className='bg-cover bg-fixed mb-[40px] sm:mb-[60px] py-[50px] md:py-[100px] lg:py-[150px] px-5'
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className='container mx-auto'>
                <div className='bg-neutral-900 lg:w-10/12 mx-auto bg-opacity-60 py-[50px] px-5 lg:py-[100px] lg:px-40'>
                    <h2 className="text-center uppercase text-white text-[30px] sm:text-[45px] font-semibold font-['Cinzel']">
                        {title}
                    </h2>
                    <p className="text-center text-white text-sm sm:text-base font-medium font-['Inter'] leading-relaxed">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MenuCover;
