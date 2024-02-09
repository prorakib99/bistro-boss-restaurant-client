import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import useCart from '../../../../hooks/useCart';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import Loader from '../../../Shared/Loader/Loader';
import useAuth from '../../../../hooks/useAuth';

const MyCarts = () => {
    const [cart, refetch, isLoading] = useCart();
    const { loading } = useAuth();

    console.log(cart);
    if (isLoading || loading) {
        return <Loader height='h-full' width='w-full' />;
    }

    const totalPrice = cart
        .reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price;
        }, 0)
        .toFixed(2);

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

    const imageBodyTemplate = (item, index) => {
        return (
            <div className='flex items-center gap-10'>
                <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
                    {index.rowIndex + 1}
                </h2>
                <img src={item.image} className='w-[75px] h-[75px] rounded bg-zinc-300' alt='' />
            </div>
        );
    };

    const nameBodyTemplate = (item) => {
        return (
            <div className=''>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
                    {item.name}
                </h2>
            </div>
        );
    };

    const priceBodyTemplate = (item) => {
        return (
            <div>
                <h2>${item.price}</h2>
            </div>
        );
    };

    const actionBodyTemplate = (item) => {
        return (
            <button onClick={() => handleDelete(item)} className='p-3 rounded bg-[#B91C1C]'>
                <FaRegTrashAlt className='text-2xl text-white' />
            </button>
        );
    };

    const paginatorLeft = <Button type='button' icon='pi pi-refresh' text />;
    const paginatorRight = <Button type='button' icon='pi pi-download' text />;

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
                            <div className='flex items-center gap-5 mb-8 flex-wrap justify-center lg:justify-between'>
                                <h2 className="text-neutral-900 text-xl md:text-[32px] font-bold font-['Cinzel']">
                                    Total orders: {cart.length}
                                </h2>
                                <h2 className="text-neutral-900 text-xl md:text-[32px] font-bold font-['Cinzel']">
                                    total price: ${totalPrice}
                                </h2>
                                <Link
                                    to='/dashboard/payment'
                                    className="px-[17px] py-3 bg-[#D1A054] rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-base sm:text-xl font-bold font-['Cinzel']"
                                >
                                    Pay
                                </Link>
                            </div>

                            <DataTable
                                paginator
                                rows={5}
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                paginatorTemplate='RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
                                currentPageReportTemplate='{first} to {last} of {totalRecords}'
                                paginatorLeft={paginatorLeft}
                                paginatorRight={paginatorRight}
                                value={cart}
                                pt={{
                                    headerRow: {
                                        className:
                                            '!bg-[#D1A054] !rounded-tl-[15px] !rounded-tr-[15px]'
                                    },
                                    bodyRow: { className: '!py-5 border-b border-gray-200' }
                                }}
                                tableStyle={{ minWidth: '60rem' }}
                            >
                                <Column header='# ITEM IMAGE' body={imageBodyTemplate}></Column>
                                <Column header='NAME' body={nameBodyTemplate}></Column>
                                <Column header='PRICE' body={priceBodyTemplate}></Column>
                                <Column header='ACTION' body={actionBodyTemplate}></Column>
                            </DataTable>
                        </div>
                    </section>
                </>
            )}
        </div>
    );
};

export default MyCarts;
