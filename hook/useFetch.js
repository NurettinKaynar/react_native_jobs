import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const JobSearchAxios = axios.create({
        baseURL: "https://jsearch.p.rapidapi.com/"
    });

    // Add a request interceptor
    JobSearchAxios.interceptors.request.use(
        config => {
            config.headers['X-RapidAPI-Key'] = process.env.EXPO_PUBLIC_RAPID_API_KEY;
            config.headers['X-RapidAPI-Host'] = "jsearch.p.rapidapi.com";
            return config;
        },
        error => {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const res = await JobSearchAxios.get(endpoint,{params:query});
            if (res.status === 200) {
                setData(res.data.data);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("hata oluştu", error.response.data.error.message);
            alert(`Hata Oluştu ${error}`);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    };

    return { data, isLoading, error, refetch };
};

export default useFetch;
