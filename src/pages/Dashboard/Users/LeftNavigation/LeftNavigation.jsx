import { ImHome } from 'react-icons/im';
import { Link, NavLink } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaWallet } from 'react-icons/fa';
import { IoCartSharp, IoRestaurant } from 'react-icons/io5';
import { MdEmail, MdRateReview } from 'react-icons/md';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import logo from '../../../../assets/logo.png';

// User Left Menu data
const userDashBoardMenu = [
    {
        id: 1,
        name: 'User Home',
        icon: <ImHome className='text-3xl lg:text-2xl' />,
        to: '/dashboard/home'
    },
    {
        id: 2,
        name: 'reservation',
        icon: <FaCalendarAlt className='text-3xl lg:text-2xl' />,
        to: '/dashboard/reservation'
    },
    {
        id: 3,
        name: 'payment history',
        icon: <FaWallet className='text-3xl lg:text-2xl' />,
        to: '/dashboard/history'
    },
    {
        id: 4,
        name: 'my cart',
        icon: <IoCartSharp className='text-4xl lg:text-2xl' />,
        to: '/dashboard/cart'
    },
    {
        id: 5,
        name: 'add review',
        icon: <MdRateReview className='text-4xl lg:text-2xl' />,
        to: '/dashboard/review'
    },
    {
        id: 6,
        name: 'my booking',
        icon: <MdOutlineShoppingBag className='text-4xl lg:text-2xl' />,
        to: '/dashboard/booking'
    }
];

// Admin DashBoard Menus
const adminDashBoardMenu = [
    {
        id: 1,
        name: 'Admin Home',
        icon: <ImHome className='text-4xl lg:text-2xl' />,
        to: '/dashboard/admin/home'
    },
    {
        id: 2,
        name: 'add items',
        icon: <IoRestaurant className='text-4xl lg:text-2xl' />,
        to: '/dashboard/admin/addItems'
    },
    {
        id: 3,
        name: 'manage items',
        icon: <IoMenu className='text-4xl lg:text-2xl' />,
        to: '/dashboard/admin/manageItems'
    },
    {
        id: 4,
        name: 'Manage bookings',
        icon: <MdOutlineShoppingBag className='text-4xl lg:text-2xl' />,
        to: '/dashboard/admin/manageBookings'
    },
    {
        id: 5,
        name: 'all users',
        icon: <FaUsers className='text-4xl lg:text-2xl' />,
        to: '/dashboard/admin/allUsers'
    }
];

// Home Menu
const homeMenu = [
    {
        id: 1,
        name: 'Home',
        icon: <ImHome className='text-4xl lg:text-2xl' />,
        to: '/'
    },
    {
        id: 2,
        name: 'Menu',
        icon: <IoMenu className='text-4xl lg:text-2xl' />,
        to: '/menu'
    },
    {
        id: 3,
        name: 'Shop',
        icon: <MdOutlineShoppingBag className='text-4xl lg:text-2xl' />,
        to: '/shop/salad'
    },
    {
        id: 4,
        name: 'Contact',
        icon: <MdEmail className='text-4xl lg:text-2xl' />,
        to: '/contact'
    }
];

const LeftNavigation = ({ isAdmin }) => {
    return (
        <section className='bg-[#D1A054] py-[50px] px-[10px] sm:px-[15px] md:px-[25px]'>
            <div className=''>
                <div className=''>
                    <div className='block lg:hidden'>
                        <div className='flex items-center justify-center'>
                            <img className='w-10' src={logo} alt='' />
                        </div>
                    </div>
                    <div className='hidden lg:block'>
                        <Link to='/'>
                            <h2 className="text-neutral-900 text-2xl font-black font-['Cinzel']">
                                BISTRO BOSS
                            </h2>
                            <h4 className="text-neutral-900 text-lg font-bold font-['Cinzel'] tracking-[6.65px]">
                                Restaurant
                            </h4>
                        </Link>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <ul className='flex flex-col items-center gap-6 lg:items-start'>
                        {isAdmin ? (
                            <>
                                {adminDashBoardMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <NavLink
                                            to={menu.to}
                                            className={({ isActive, isPending }) =>
                                                isPending
                                                    ? 'pending'
                                                    : isActive
                                                    ? "text-white text-base font-bold font-['Cinzel flex gap-2 items-center"
                                                    : "text-neutral-900 text-base font-medium font-['Cinzel'] flex gap-2 items-center"
                                            }
                                        >
                                            <div className='flex items-center gap-3'>
                                                <span>{menu.icon}</span>
                                                <h4 className="hidden lg:block text-base font-['Cinzel']">
                                                    {menu.name}
                                                </h4>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </>
                        ) : (
                            <>
                                {userDashBoardMenu.map((menu) => (
                                    <li key={menu.id}>
                                        <NavLink
                                            to={menu.to}
                                            className={({ isActive, isPending }) =>
                                                isPending
                                                    ? 'pending'
                                                    : isActive
                                                    ? "text-white text-base font-bold font-['Cinzel flex gap-2 items-center"
                                                    : "text-neutral-900 text-base font-medium font-['Cinzel'] flex gap-2 items-center"
                                            }
                                        >
                                            <div className='flex items-center gap-3'>
                                                <span>{menu.icon}</span>
                                                <h4 className="hidden lg:block text-base font-['Cinzel']">
                                                    {menu.name}
                                                </h4>
                                            </div>
                                        </NavLink>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                    <div className='my-6 border border-b'></div>
                    <ul className='flex flex-col items-center gap-6 lg:items-start'>
                        {homeMenu.map((menu) => (
                            <li key={menu.id}>
                                <NavLink
                                    to={menu.to}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? 'pending'
                                            : isActive
                                            ? "text-white text-base font-bold font-['Cinzel flex gap-2 items-center"
                                            : "text-neutral-900 text-base font-medium font-['Cinzel'] flex gap-2 items-center"
                                    }
                                >
                                    <div className='flex items-center gap-3'>
                                        <span>{menu.icon}</span>
                                        <h4 className="hidden lg:block text-base font-medium font-['Cinzel']">
                                            {menu.name}
                                        </h4>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default LeftNavigation;
