import {useState, useEffect} from "react";
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(url).then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch(err => console.log(err.response.message));
    }, [url])

    return [data, isloading]
}

