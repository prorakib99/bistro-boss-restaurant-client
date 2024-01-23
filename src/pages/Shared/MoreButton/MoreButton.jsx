import { Link } from 'react-router-dom';

const MoreButton = ({ text, handleLoadMore, isDisabled, categoryName }) => {
    return (
        <div className='text-center'>
            <Link to={categoryName ? `/shop/${categoryName}` : ''}>
                <button
                    onClick={handleLoadMore && handleLoadMore}
                    disabled={isDisabled}
                    className="btn bg-transparent rounded-lg duration-300 border-b-4 border-t-0 border-x-0 border-gray-800 hover:border-gray-800 hover:text-white focus:bg-black focus:text-white transition-all duration-400 text-center text-gray-800 min-h-[3.5rem] hover:bg-gray-800 sm:text-xl font-medium font-['Inter'] uppercase"
                >
                    {text}
                </button>
            </Link>
        </div>
    );
};

export default MoreButton;
