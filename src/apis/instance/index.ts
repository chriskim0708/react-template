import axios from 'axios';
import AuthInterceptors from './authInterceptors';

export const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
});

export const mainAuthInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
});

export const localInstance = axios.create({
  baseURL: 'http://localhost:4000',
});

export const localAuthInstance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

localAuthInstance.interceptors.request.use(AuthInterceptors.request);
mainAuthInstance.interceptors.request.use(AuthInterceptors.request);
