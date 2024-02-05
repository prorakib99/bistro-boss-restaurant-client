import { useQuery } from 'react-query';

export const useFoods = (limit) => {
    const {
        refetch,
        data: foods = [],
        isLoading
    } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/foods${limit ? `?page=${limit}` : ''}`);
            return res.json();
        }
    });

    return [foods, isLoading, refetch];
};
