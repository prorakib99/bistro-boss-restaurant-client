import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import useCart from '../../../../hooks/useCart';
import CartItemRow from './CartItemRow/CartItemRow';
import { Helmet } from 'react-helmet-async';

const MyCarts = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
    }, 0);

    const handleDelete = (item) => {
        swal({
            title: 'Are you sure?',
            text: `${item.name} Delete`,
            icon: 'warning',
            buttons: true,
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            refetch();
                            swal('Delete SuccessFull For Your Cart', {
                                icon: 'success'
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className='container mx-auto'>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss | Dashboard | Cart</title>
            </Helmet>

            {/* Section Title */}
            <SectionTitles subTitle='My Cart' title='WANNA ADD MORE?' />

            {/* Total Orders */}

            {cart.length === 0 ? (
                <h3 className='text-2xl md:text-5xl text-center mt-14 font-bold mb-5'>
                    Cart is Empty
                </h3>
            ) : (
                <>
                    <section className='py-12'>
                        <div className='bg-[#F6F6F6] p-5 md:p-10 rounded mx-auto'>
                            <div className='flex items-center gap-5 flex-wrap justify-center lg:justify-between'>
                                <h2 className="text-neutral-900 text-xl md:text-[32px] font-bold font-['Cinzel']">
                                    Total orders: {cart.length}
                                </h2>
                                <h2 className="text-neutral-900 text-xl md:text-[32px] font-bold font-['Cinzel']">
                                    total price: ${totalPrice}
                                </h2>
                                <Link className="px-[17px] py-3.5 bg-[#D1A054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-base sm:text-xl font-bold font-['Cinzel']">
                                    Pay
                                </Link>
                            </div>

                            <div className='pt-7 overflow-x-auto'>
                                <table className='table table-xs'>
                                    <thead>
                                        <tr className='flex items-center bg-[#D1A054] justify-between py-5 px-10 rounded-tl-[15px] rounded-tr-[15px]'>
                                            <th className="text-white text-start text-base font-semibold font-['Inter']">
                                                #
                                            </th>
                                            <th className="text-white text-start text-base font-semibold font-['Inter']">
                                                Item Image
                                            </th>
                                            <th className="text-white text-base font-semibold font-['Inter']">
                                                ITEM NAME
                                            </th>
                                            <th className="text-white text-base font-semibold font-['Inter']">
                                                PRICE
                                            </th>
                                            <th className="text-white text-base font-semibold font-['Inter']">
                                                ACTION
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart?.map((item, index) => (
                                            <CartItemRow
                                                key={item._id}
                                                item={item}
                                                onDelete={handleDelete}
                                                index={index}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default MyCarts;
