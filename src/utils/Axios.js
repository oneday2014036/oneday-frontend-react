import axios from 'axios';
import store from '../store';
import {setUserInfo} from "../store/pageSlice.js";


const axiosFetcher = axios.create(
    {
        responseType: 'json',
        headers: {
            'content-type': 'application/json;'
        }
    }
)

axiosFetcher.interceptors.request.use(
    (config) => {
        config.headers.token = store.getState().page.token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosFetcher.interceptors.response.use(
    (res) => {
        if (res.data.token) {
            store.dispatch(setUserInfo({token: res.data.token}));
        }
        return res
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default axiosFetcher;