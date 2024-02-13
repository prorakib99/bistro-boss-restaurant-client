import { FaRegTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from 'react-query';
import swal from 'sweetalert';
import { Helmet } from 'react-helmet-async';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import DashboardTable from '../../Shared/DashboardTable/DashBoardTable';
import Loader from '../../../Shared/Loader/Loader';

const MyBookings = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();

    const {
        data: myBookings = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['user-bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-bookings?email=${user?.email}`);
            return res.data;
        }
    });

    if (isLoading || loading) {
        return <Loader height='h-full' width='w-full' />;
    }

    const nameBodyTemp = (item, index) => {
        return (
            <div className='flex items-center gap-5'>
                <h2 className="text-neutral-900 text-xl font-bold font-['Inter']">
                    {index.rowIndex + 1}
                </h2>
                <h2>{item.name}</h2>
            </div>
        );
    };

    const guestBodyTemp = (item) => {
        return (
            <div>
                <h2>{item.guest}</h2>
            </div>
        );
    };

    const timeBodyTemp = (item) => {
        return (
            <div>
                <h2>{item.time}</h2>
            </div>
        );
    };

    const dateBodyTemp = (item) => {
        return (
            <div>
                <h2>{item.date}</h2>
            </div>
        );
    };

    const actionBodyTemp = (item) => {
        const handleDelete = (item) => {
            swal({
                title: 'Are you sure?',
                text: `You Wont Tow Delete Booking ${item.name}`,
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then((willDelete) => {
                if (willDelete) {
                    axiosSecure.delete(`/user-bookings/${item._id}`).then((res) => {
                        if (res.data.deletedCount) {
                            refetch();
                            swal('Delete SuccessFull', {
                                icon: 'success'
                            });
                        }
                    });
                }
            });
        };

        return (
            <button onClick={() => handleDelete(item)} className='p-3 rounded bg-[#B91C1C]'>
                <FaRegTrashAlt className='text-2xl text-white' />
            </button>
        );
    };

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss || Dashboard Bookings</title>
            </Helmet>

            {/* Section Title */}
            <SectionTitles subTitle='Excellent Ambience' title='MY BOOKINGS' />

            {myBookings.length === 0 ? (
                <h3 className='text-2xl md:text-5xl text-center mt-14 font-bold mb-5'>
                    Bookings are Empty
                </h3>
            ) : (
                <section className='py-10 md:px-10'>
                    <h2 className="text-neutral-900 text-[32px] font-bold font-['Cinzel'] mb-4">
                        Total bookings: {myBookings?.length}
                    </h2>
                    <div>
                        <DashboardTable
                            data={myBookings}
                            header1='# Name'
                            header2='Guest'
                            header3='Time'
                            header4='Date'
                            header5='Action'
                            item1BodyTemp={nameBodyTemp}
                            item2BodyTemp={guestBodyTemp}
                            item3BodyTemp={timeBodyTemp}
                            item4BodyTemp={dateBodyTemp}
                            item5BodyTemp={actionBodyTemp}
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default MyBookings;
