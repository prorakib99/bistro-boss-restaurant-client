import { useQuery } from 'react-query';
import { FaCheck } from 'react-icons/fa6';
import swal from 'sweetalert';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import DashboardTable from '../../Shared/DashboardTable/DashBoardTable';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Loader from '../../../Shared/Loader/Loader';
import useAuth from '../../../../hooks/useAuth';

const ManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();
    const { loading } = useAuth();

    const {
        data: bookings = [],
        refetch,
        isLoading
    } = useQuery({
        queryKey: ['manage-bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookings');
            return res.data;
        }
    });

    if (isLoading || loading) {
        return <Loader height='h-full' width='w-full' />;
    }

    const emailBodyTemplate = (item, index) => {
        return (
            <div className='flex items-center gap-5'>
                <h2>{index.rowIndex + 1}</h2>
                <h2 className="text-neutral-500 text-base font-normal font-['Inter']">
                    {item.email}
                </h2>
            </div>
        );
    };

    const phoneBodyTemplate = (item) => {
        return (
            <div>
                <h2>{item.phone}</h2>
            </div>
        );
    };

    const bookingDateBodyTemplate = (item) => {
        return (
            <div>
                <h2>{item.date}</h2>
            </div>
        );
    };

    const quantityBodyTemplate = (item) => {
        return (
            <div>
                <h2 className='text-start'>{item.time}</h2>
            </div>
        );
    };

    const activityBodyTemplate = (item) => {
        return (
            <div>
                {item.bookingStatus === 'pending' ? (
                    <h2 className="text-start text-yellow-600 capitalize text-base font-bold font-['Inter']">
                        {item.bookingStatus}
                    </h2>
                ) : (
                    <h2 className="text-start capitalize text-green-700 text-base font-bold font-['Inter']">
                        {item.bookingStatus}
                    </h2>
                )}
            </div>
        );
    };

    const actionBodyTemplate = (item) => {
        const handleStatus = (item) => {
            swal({
                title: 'Are you sure?',
                text: `Complete ${item.status} Order`,
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then((willDelete) => {
                if (willDelete) {
                    axiosSecure.patch(`/bookings/${item._id}`).then((res) => {
                        if (res.data.modifiedCount) {
                            refetch();
                            swal('Order Complete SuccessFull', {
                                icon: 'success'
                            });
                        }
                    });
                }
            });
        };
        return (
            <div>
                {item.bookingStatus === 'pending' ? (
                    <button
                        onClick={() => handleStatus(item)}
                        className='p-3 text-white bg-green-300 rounded-full'
                    >
                        <FaCheck className='text-2xl' />
                    </button>
                ) : (
                    <button className='p-3 text-white bg-green-700 rounded-full'>
                        <FaCheck className='text-2xl' />
                    </button>
                )}
            </div>
        );
    };

    return (
        <div>
            <SectionTitles subTitle='At a Glance!' title='ALL BOOKINGS' />
            <section className='py-10 lg:px-10'>
                <div>
                    <DashboardTable
                        data={bookings}
                        header1='# USER EMAIL'
                        header2='PHONE NUMBER'
                        header3='BOOKING DATE'
                        header4='TIME'
                        header5='ACTIVITY'
                        header6='ACTION'
                        item1BodyTemp={emailBodyTemplate}
                        item2BodyTemp={phoneBodyTemplate}
                        item3BodyTemp={bookingDateBodyTemplate}
                        item4BodyTemp={quantityBodyTemplate}
                        item5BodyTemp={activityBodyTemplate}
                        item6BodyTemp={actionBodyTemplate}
                    />
                </div>
            </section>
        </div>
    );
};

export default ManageBookings;
