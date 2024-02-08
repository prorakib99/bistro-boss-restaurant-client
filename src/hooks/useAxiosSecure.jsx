import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000'
    });
    const token = localStorage.getItem('access-token');

    if (token) {
        axiosSecure.interceptors.request.use(
            (config) => {
                config.headers.authorization = `Bearer ${token}`;
                return config;
            },
            (error) => {
                // Do something with request error
                return Promise.reject(error);
            }
        );

        axiosSecure.interceptors.response.use(
            function (response) {
                return response;
            },
            async (error) => {
                // console.log('Status', error?.response?.status);
                const status = error.response.status;

                if (status === 401 || status === 403) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }

    return [axiosSecure];
};

export default useAxiosSecure;
