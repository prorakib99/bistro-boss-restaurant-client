import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ food, shop }) => {
    const { recipe, price, name, image } = food;

    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                itemId: item._id,
                price,
                name,
                image,
                email: user.email
            };

            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.acknowledged) {
                        refetch();
                        toast.success('Food Successfully Added to Cart ');
                    }
                });
        } else {
            navigate('/login', { state: { from: location } });
        }
    };
    return (
        <div className='flex flex-col relative'>
            <img className='w-full h-[300px] object-cover' src={image} alt='' />
            {shop && (
                <p className="w-[89px] mr-5 mt-5 absolute right-0 h-12 flex items-center justify-center bg-gray-900 text-center text-white text-base font-semibold font-['Inter'] leading-relaxed">
                    ${price}
                </p>
            )}
            <div className='bg-zinc-100 py-[30px] px-[40px]'>
                <h2 className="text-center mb-[8px] text-neutral-900 text-xl sm:text-2xl font-semibold font-['Inter']">
                    {name}
                </h2>
                <p className="text-center text-neutral-900 text-base font-normal font-['Inter'] leading-relaxed">
                    {recipe}
                </p>
                <div className='text-center mt-6 lg:mt-0'>
                    <button
                        onClick={() => handleAddCart(food)}
                        className="lg:px-[30px] lg:mt-[24px] px-4 py-3 lg:py-4 hover:bg-gray-800 hover:border-none duration-300 bg-gray-200 rounded-lg border-b-2 border-yellow-600 justify-start items-start gap-2.5 inline-flex text-center text-yellow-600 sm:text-xl font-medium font-['Inter'] uppercase"
                    >
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
