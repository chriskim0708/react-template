import axios from 'axios';
import AuthInterceptors from './authInterceptors';

export const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
});

export const mainAuthInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
  withCredentials: true,
});

export const localInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_TEST_API_URL,
});

export const localAuthInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_TEST_API_URL,
  withCredentials: true,
});

localAuthInstance.interceptors.request.use(AuthInterceptors.request);
mainAuthInstance.interceptors.request.use(AuthInterceptors.request);
