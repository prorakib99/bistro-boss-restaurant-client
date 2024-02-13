import { useQuery } from 'react-query';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import DashboardTable from '../../Shared/DashboardTable/DashBoardTable';
import Loader from '../../../Shared/Loader/Loader';
import useAuth from '../../../../hooks/useAuth';

const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useAuth();

    const {
        data: menu = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss-restaurant-server-zeta.vercel.app/foods');
            return res.json();
        }
    });

    if (isLoading || loading) {
        return <Loader height='h-full' width='w-full' />;
    }

    const imageBodyTemplate = (food, index) => {
        return (
            <div className='flex items-center gap-5'>
                <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
                    {index.rowIndex + 1}
                </h2>
                <img className='w-[75px] h-[75px] bg-zinc-300 rounded-md' src={food.image} alt='' />
            </div>
        );
    };

    const nameBodyTemplate = (food) => {
        return (
            <div>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
                    {food.name}
                </h2>
            </div>
        );
    };

    const priceBodyTemplate = (food) => {
        return (
            <div>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
                    ${food.price}
                </h2>
            </div>
        );
    };

    const updateBodyTemplate = (food) => {
        return (
            <div>
                <button>
                    <Link
                        to={`/dashboard/admin/updateItems/${food._id}`}
                        className='bg-orange-400 rounded-[5px] p-3 pt-[10px] pr-[10px] flex items-center justify-center'
                    >
                        <FaRegEdit className='text-2xl text-white' />
                    </Link>
                </button>
            </div>
        );
    };

    const actionBodyTemplate = (food) => {
        const handleDelete = (item) => {
            swal({
                title: 'Are you sure?',
                text: `Delete ${item.name} ?`,
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/foods/${item._id}`).then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            toast.success('Successfully Deleted');
                        } else {
                            toast.error('Something Wrong Try Later');
                        }
                    });
                }
            });
        };

        return (
            <div>
                <button onClick={() => handleDelete(food)} className='p-3 rounded bg-[#B91C1C]'>
                    <FaRegTrashAlt className='text-2xl text-white' />
                </button>
            </div>
        );
    };

    return (
        <div>
            <Helmet>
                <title>Admin || Manage Items</title>
            </Helmet>
            <SectionTitles subTitle='Hurry Up!' title='MANAGE ALL ITEMS' />
            <section className='py-10 sm:px-[20px] lg:px-[50px] xl:px-[100px]'>
                <DashboardTable
                    data={menu}
                    header1='# ITEM IMAGE'
                    header2='ITEM NAME'
                    header3='PRICE'
                    header4='UPDATE'
                    header5='ACTION'
                    item1BodyTemp={imageBodyTemplate}
                    item2BodyTemp={nameBodyTemplate}
                    item3BodyTemp={priceBodyTemplate}
                    item4BodyTemp={updateBodyTemplate}
                    item5BodyTemp={actionBodyTemplate}
                />
            </section>
        </div>
    );
};

export default ManageItems;
