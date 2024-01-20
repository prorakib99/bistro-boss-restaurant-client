import bistroBg from '../../../assets/home/chef-service.jpg';

const BistroBoss = () => {
    return (
        <section
            className='bg-fixed bg-cover bg-center bg-no-repeat py-28'
            style={{ backgroundImage: `url(${bistroBg})` }}
        >
            <div className='container mx-auto px-5'>
                <div className=' bg-white lg:w-9/12 p-8 lg:p-20 mx-auto'>
                    <h2 className="text-neutral-900 text-center text-[30px] sm:text-[45px] font-normal font-['Cinzel']">
                        Bistro Boss
                    </h2>
                    <p className="text-center lg:w-5/6 mx-auto text-neutral-900 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                        libero accusamus laborum deserunt ratione dolor officiis praesentium!
                        Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                        quibusdam nemo.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BistroBoss;
