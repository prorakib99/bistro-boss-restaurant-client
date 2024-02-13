import notFoundImg from '../../assets/404.gif';
import Header from '../Shared/Header/Header';
const NotFound = () => {
    return (
        <>
            <Header />
            <div className='flex justify-center h-[100vh] items-center'>
                <img src={notFoundImg} alt='' />
            </div>
        </>
    );
};

export default NotFound;
