const MenuItem = ({ item }) => {
    const { _id, name, recipe, image, price, category } = item;
    return (
        <div className='flex gap-4 sm:gap-7 items-center'>
            <div className='w-[118px] max-h-[104px] max-w-full h-full'>
                <img
                    className='w-full h-full bg-zinc-300 rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]'
                    src={image}
                    alt=''
                />
            </div>
            <div className='flex gap-2 sm:gap-3'>
                <div>
                    <h2 className="text-neutral-900 text-base sm:text-xl font-normal font-['Cinzel'] mb-2 flex">
                        {name} ---
                        <span className='hidden sm:block'>---------------</span>
                    </h2>
                    <p className="text-neutral-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed ">
                        {recipe}
                    </p>
                </div>
                <div>
                    <h4 className="text-yellow-600 text-xl font-normal font-['Inter'] leading-relaxed">
                        ${price}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
