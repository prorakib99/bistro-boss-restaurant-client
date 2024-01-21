import { useEffect, useState } from 'react';

export const useCategoryFoods = (categoryName) => {
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/category/${categoryName}`)
            .then((res) => res.json())
            .then((data) => {
                setFoods(data);
                setIsLoading(false);
            });
    }, [categoryName]);

    return [foods, isLoading];
};
