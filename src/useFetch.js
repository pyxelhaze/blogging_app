import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('fetching error');
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })
    }, [url]);

    return { data, isLoading, error };
}
export default useFetch;