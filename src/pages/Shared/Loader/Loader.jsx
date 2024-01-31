const Loader = ({ height, width }) => {
    return (
        <div
            className={`${height || 'h-screen'} ${
                width || 'w-screen'
            }  flex items-center justify-center`}
        >
            <span className='loading loading-bars loading-lg'></span>
        </div>
    );
};

export default Loader;
