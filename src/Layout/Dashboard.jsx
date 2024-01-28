import { Outlet } from 'react-router-dom';
import LeftNavigation from '../pages/Dashboard/Users/LeftNavigation/LeftNavigation';

const Dashboard = () => {
    return (
        <>
            <div className='grid grid-cols-[1fr_5fr] justify-between h-screen gap-2 md:gap-6'>
                <LeftNavigation />

                <div className='pt-[30px] pl-2 md:pl-10 overflow-x-auto pr-4 md:pr-14 md:pt-[50px] w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
