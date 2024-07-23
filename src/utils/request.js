import axios from 'axios';

const service = axios.create({
    baseURL: '/',
    timeout: 1000000
});

export { service }