import { useEffect, useState } from 'react';

export const useCategoryTotal = (categoryName) => {
    const [total, setTotal] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/category/${categoryName}`)
            .then((res) => res.json())
            .then((data) => {
                setTotal(data.total);
                setIsLoading(false);
            });
    }, [categoryName]);

    return [total, isLoading];
};
