import axios from "axios";

const instance = axios.create({
    baseURL: 'import.meta.env.VITE_BACKEND_URL',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data && response.data.data) return response.data;
    return response;
}, function (error) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
});

export default instance