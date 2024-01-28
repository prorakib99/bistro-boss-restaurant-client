import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import LeftNavigation from '../pages/Dashboard/Users/LeftNavigation/LeftNavigation';
import { useEffect } from 'react';

const Dashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const isAdmin = true;

    useEffect(() => {
        if (location.pathname === '/dashboard') {
            if (isAdmin) {
                return navigate('/dashboard/admin/home');
            } else {
                return navigate('/dashboard/home');
            }
        }
    }, [location, navigate, isAdmin]);

    return (
        <>
            <div className='grid grid-cols-[1fr_5fr] justify-between h-screen gap-2 md:gap-6'>
                <LeftNavigation isAdmin={isAdmin} />

                <div className='pt-[30px] pl-2 md:pl-10 overflow-x-auto pr-4 md:pr-14 md:pt-[50px] w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
