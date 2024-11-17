import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
    baseURL: config.API_URL,
    timeout: config.API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
