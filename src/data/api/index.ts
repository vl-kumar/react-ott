import axios from 'axios';

export const HTTP_OK = 200;

export const axiosClient = axios.create({
  baseURL: 'https://test.create.diagnal.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    console.debug('======================> Error <======================');
    console.debug(JSON.stringify(error));
    return Promise.reject(error);
  },
);

export default axiosClient;
