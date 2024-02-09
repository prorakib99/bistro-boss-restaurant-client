import walletImg from '../../../../assets/dashboard/AdminHome/wallet.svg';
import customer from '../../../../assets/dashboard/AdminHome/customer.svg';
import products from '../../../../assets/dashboard/AdminHome/chef.svg';
import trucks from '../../../../assets/dashboard/AdminHome/truck.svg';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import AdminBarChart from './Charts/BarChart/AdminBarChart';
import AdminPieChart from './Charts/PieChart/AdminPieChart';

const AdminHome = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');

            return res.data;
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['chart-data'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    });

    return (
        <div>
            <h1 className="text-neutral-900 text-[32px] font-semibold font-['Cinzel']">
                Hi, Welcome Back!
            </h1>
            <div className='grid w-full grid-cols-1 gap-6 py-6 md:grid-cols-2 xl:grid-cols-4'>
                <div className='flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-fuchsia-500 to-fuchsia-100'>
                    <img src={walletImg} alt='' />
                    <div className='flex flex-col'>
                        <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
                            ${stats.revenue || 0}
                        </h2>
                        <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
                            Revenue
                        </h6>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-orange-400 to-amber-100'>
                    <img src={customer} alt='' />
                    <div className='flex flex-col'>
                        <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
                            {stats.users || 0}
                        </h2>
                        <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
                            Customers
                        </h6>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-pink-500 to-pink-200'>
                    <img src={products} alt='' />
                    <div className='flex flex-col'>
                        <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
                            {stats.products || 0}
                        </h2>
                        <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
                            Products
                        </h6>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-6 py-8 rounded-lg bg-gradient-to-r from-blue-400 to-sky-200'>
                    <img src={trucks} alt='' />
                    <div className='flex flex-col'>
                        <h2 className="text-white text-[30px] sm:text-[40px] font-extrabold font-['Inter']">
                            {stats.orders || 0}
                        </h2>
                        <h6 className="text-white text-xl sm:text-2xl font-normal font-['Inter']">
                            Orders
                        </h6>
                    </div>
                </div>
            </div>
            <section className='grid lg:grid-cols-2 gap-10 mt-10'>
                <div className='w-full h-full'>
                    <AdminBarChart data={chartData} />
                </div>
                <div className='w-full h-full'>
                    <AdminPieChart data={chartData} />
                </div>
            </section>
        </div>
    );
};

export default AdminHome;
