import { useQuery } from 'react-query';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import SectionTitles from '../../../Shared/SectionTitles/SectionTitles';
import DashboardTable from '../../Shared/DashboardTable/DashBoardTable';
import moment from 'moment';
import Loader from '../../../Shared/Loader/Loader';

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: paymentHistory = [], isLoading } = useQuery({
        queryKey: ['payment-history'],
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        }
    });

    if (isLoading || loading) {
        return <Loader height='h-full' width='w-full' />;
    }

    const emailBodyTemp = (item) => {
        return (
            <div>
                <h2>{item.email}</h2>
            </div>
        );
    };

    const priceBodyTemp = (item) => {
        return (
            <div>
                <h2>${item.price}</h2>
            </div>
        );
    };

    const quantityBodyTemp = (item) => {
        return (
            <div>
                <h2>{item.quantity}</h2>
            </div>
        );
    };

    const paymentDateBodyTemp = (item) => {
        return (
            <div>
                <h2>{moment(item.date).format('dddd, MMMM D, YYYY')}</h2>
            </div>
        );
    };

    const transactionIdBodyTemp = (item) => {
        return (
            <div>
                <h2>#{item.transactionId}</h2>
            </div>
        );
    };

    return (
        <>
            {/* Helmet */}
            <Helmet>
                <title>Bistro Boss | Payment History</title>
            </Helmet>

            {/* Section Title */}
            <SectionTitles subTitle='At a Glance!' title='PAYMENT HISTORY' />
            {paymentHistory.length === 0 ? (
                <h3 className='text-2xl md:text-5xl text-center mt-14 font-bold mb-5'>
                    Payment History is Empty
                </h3>
            ) : (
                <section className='py-10 md:px-10'>
                    <h2 className="text-neutral-900 mb-4 text-2xl md:text-[32px] font-bold font-['Cinzel']">
                        Total Payments: {paymentHistory?.length}
                    </h2>
                    <div>
                        <DashboardTable
                            data={paymentHistory}
                            header1='EMAIL'
                            header2='TOTAL PRICE'
                            header3='QUANTITY'
                            header4='PAYMENT DATE'
                            header5='TRANSACTION ID'
                            item1BodyTemp={emailBodyTemp}
                            item2BodyTemp={priceBodyTemp}
                            item3BodyTemp={quantityBodyTemp}
                            item4BodyTemp={paymentDateBodyTemp}
                            item5BodyTemp={transactionIdBodyTemp}
                        />
                    </div>
                </section>
            )}
        </>
    );
};

export default PaymentHistory;
