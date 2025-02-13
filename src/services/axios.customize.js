import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
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
    return Promise.reject(error);
});

export default instance