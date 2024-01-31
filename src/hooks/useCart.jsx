import { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user, loading } = useContext(AuthContext);

    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const {
        refetch,
        data: cart = [],
        isLoading
    } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         method: 'GET',
        //         headers: {
        //             authorization: `Bearer ${token}`
        //         }
        //     });
        //     const result = await res.json();
        //     console.log(result);
        //     return result;
        // }
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    });
    return [cart, refetch, isLoading];
};

export default useCart;
