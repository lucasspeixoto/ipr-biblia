/* eslint-disable no-param-reassign */
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

// https://www.abibliadigital.com.br/ user Token
const authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRodSBPY3QgMjYgMjAyMyAwOTozODo1MCBHTVQrMDAwMC5sc3BlaXhvdG9kZXZAZ21haWwuY29tIiwiaWF0IjoxNjk4MzEzMTMwfQ.yVNHaTzpU8DQlbZkWBvSr-PMdBUlXk5CLWxicYVSFiM';

// Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BIBLE_API_URL,
  headers: { Authorization: authorization },
});

// Api http request methods with generics request
const api = (_axios: AxiosInstance) => {
  return {
    get<T>(url: string, config: AxiosRequestConfig = {}) {
      return _axios.get<T>(url, config);
    },
    put<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return _axios.put<T>(url, body, config);
    },
    post<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return _axios.post<T>(url, body, config);
    },
    delete<T>(url: string, config: AxiosRequestConfig = {}) {
      return _axios.delete<T>(url, config);
    },
  };
};

export default api(axiosInstance);
