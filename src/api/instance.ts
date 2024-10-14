import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
  }
});

export default axiosInstance;
