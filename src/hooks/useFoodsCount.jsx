import { useEffect, useState } from 'react';

export const useFoodCount = () => {
    const [total, setTotal] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/total`)
            .then((res) => res.json())
            .then((data) => {
                setTotal(data.result);
                setIsLoading(false);
            });
    }, []);

    return [total, isLoading];
};
