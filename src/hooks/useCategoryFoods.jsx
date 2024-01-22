import { useEffect, useState } from 'react';

export const useCategoryFoods = (categoryName, limit) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `http://localhost:5000/category?name=${categoryName}${limit ? `&limit=${limit}` : ''}`
        )
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setIsLoading(false);
            });
    }, [categoryName, limit]);

    return [foods, isLoading];
};