import { useEffect, useState } from 'react';

export const useFoods = (limit) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setIsLoading(false);
            });
    }, [limit]);

    return [foods, isLoading];
};
