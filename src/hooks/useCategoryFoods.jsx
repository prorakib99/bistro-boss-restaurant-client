import { useEffect, useState } from 'react';

export const useCategoryFoods = (categoryName, limit, page) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `http://localhost:5000/category?name=${categoryName}${limit ? `&limit=${limit}` : ''}${
                page ? `&page=${page}` : ''
            }`
        )
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setIsLoading(false);
            });
    }, [categoryName, limit, page]);

    return [foods, isLoading];
};
