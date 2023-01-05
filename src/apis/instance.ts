import axios from 'axios';

export const mainInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
