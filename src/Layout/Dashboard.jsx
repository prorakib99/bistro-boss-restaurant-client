import { Outlet } from 'react-router-dom';
import LeftNavigation from '../pages/Dashboard/Users/LeftNavigation/LeftNavigation';

const Dashboard = () => {
    return (
        <>
            <div className='flex h-screen gap-6'>
                <LeftNavigation />

                <div className='pt-[30px] pr-[30px] md:pt-[50px] md:pr-[50px] w-full'>
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;
