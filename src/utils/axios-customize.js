import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:5001',
});
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        return error;
    },
);

export default instance;
