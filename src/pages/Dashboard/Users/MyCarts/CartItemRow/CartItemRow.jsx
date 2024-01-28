import { FaTrashAlt } from 'react-icons/fa';

const CartItemRow = ({ item, index, onDelete }) => {
    const { image, name, price } = item;

    return (
        <tr className='flex items-center justify-between lg:px-10 py-3 border-b sm:py-5'>
            <td className='flex items-center gap-4 md:gap-10'>
                <span className="text-center text-neutral-900 text-xl font-bold font-['Inter']">
                    {index + 1}
                </span>
            </td>
            <td className='flex items-center gap-4 md:gap-10'>
                <img src={image} className='w-[75px] h-[75px] rounded bg-zinc-300'></img>
            </td>
            <td className="text-center text-neutral-500 text-base font-normal font-['Inter']">
                {name}
            </td>
            <td className="text-center text-neutral-500 text-base font-normal font-['Inter']">
                ${price}
            </td>
            <td className='text-center'>
                <button onClick={() => onDelete(item)} className='bg-red-700 rounded-[5px] p-3'>
                    <FaTrashAlt className='text-2xl text-white' />
                </button>
            </td>
        </tr>
    );
};

export default CartItemRow;
