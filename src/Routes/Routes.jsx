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
import PrivateRoute from '../providers/PrivateRoute';
import AdminRoute from '../providers/AdminRoute';
import UpdateItems from '../pages/Dashboard/Admin/UpdateItems/UpdateItems';
import Payments from '../pages/Dashboard/Users/Payments/Payments';

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
        element: (
            <PrivateRoute>
                <Dashboard />
            </PrivateRoute>
        ),
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
                path: 'payment',
                element: <Payments />
            },
            // Admin Only Routes
            {
                path: 'admin/home',
                element: (
                    <AdminRoute>
                        <AdminHome />
                    </AdminRoute>
                )
            },
            {
                path: 'admin/addItems',
                element: (
                    <AdminRoute>
                        <AddItems />
                    </AdminRoute>
                )
            },
            {
                path: 'admin/manageItems',
                element: (
                    <AdminRoute>
                        <ManageItems />
                    </AdminRoute>
                )
            },
            {
                path: 'admin/manageBookings',
                element: (
                    <AdminRoute>
                        <ManageBookings />
                    </AdminRoute>
                )
            },
            {
                path: 'admin/updateItems/:id',
                element: (
                    <AdminRoute>
                        <UpdateItems />
                    </AdminRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: 'admin/allUsers',
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                )
            }
        ]
    }
]);
