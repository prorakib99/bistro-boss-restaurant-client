import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Menu from '../pages/Menu/Menu/Menu';
import Contact from '../pages/Contact/Contact';
import Shop from '../pages/Shop/Shop';
import Dashboard from '../Layout/Dashboard';
import UserHome from '../pages/Dashboard/Users/UserHome/UserHome';
import Reservation from '../pages/Dashboard/Users/Reservation/Reservation';
import PaymentHistory from '../pages/Dashboard/Users/PaymentHistory/PaymentHistory';
import MyCarts from '../pages/Dashboard/Users/MyCarts/MyCarts';
import AddReview from '../pages/Dashboard/Users/AddReview/AddReview';
import MyBookings from '../pages/Dashboard/Users/MyBookings/MyBookings';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'menu',
                element: <Menu />
            },
            {
                path: 'shop/:selectedCategory',
                element: <Shop />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <UserHome />
            },
            {
                path: '/dashboard/reservation',
                element: <Reservation />
            },
            {
                path: '/dashboard/history',
                element: <PaymentHistory />
            },
            {
                path: '/dashboard/cart',
                element: <MyCarts />
            },
            {
                path: '/dashboard/review',
                element: <AddReview />
            },
            {
                path: '/dashboard/booking',
                element: <MyBookings />
            }
        ]
    }
]);
