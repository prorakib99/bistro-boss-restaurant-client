import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { useContext } from 'react';
import Loader from '../pages/Shared/Loader/Loader';
import { AuthContext } from '../providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;
