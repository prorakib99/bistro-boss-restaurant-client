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
import AdminHome from '../pages/Dashboard/Admin/AdminHome/AdminHome';
import AddItems from '../pages/Dashboard/Admin/AddItems/AddItems';
import ManageItems from '../pages/Dashboard/Admin/ManageItems/ManageItems';
import ManageBookings from '../pages/Dashboard/Admin/ManageBookings/ManageBookings';
import AllUsers from '../pages/Dashboard/Admin/AllUsers/AllUsers';

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
                path: 'home',
                element: <UserHome />
            },
            {
                path: 'reservation',
                element: <Reservation />
            },
            {
                path: 'history',
                element: <PaymentHistory />
            },
            {
                path: 'cart',
                element: <MyCarts />
            },
            {
                path: 'review',
                element: <AddReview />
            },
            {
                path: 'booking',
                element: <MyBookings />
            },
            {
                path: 'admin/home',
                element: <AdminHome />
            },
            {
                path: 'admin/addItems',
                element: <AddItems />
            },
            {
                path: 'admin/manageItems',
                element: <ManageItems />
            },
            {
                path: 'admin/manageBookings',
                element: <ManageBookings />
            },
            {
                path: 'admin/allUsers',
                element: <AllUsers />
            }
        ]
    }
]);
