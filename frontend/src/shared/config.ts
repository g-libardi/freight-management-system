
export default {
    API_URL: import.meta.env.VITE_API_URL as string || 'http://localhost:8000/api',
    API_TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT as string) || 5000,
};
