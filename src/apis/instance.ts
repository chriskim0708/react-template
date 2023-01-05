import axios from 'axios';

export const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const localInstance = axios.create({
  baseURL: 'http://localhost:4000',
});
