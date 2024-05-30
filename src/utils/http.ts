import { BaseResponse } from '@/types/response';
import Axios from 'axios';

export const axiosInstance = Axios.create();
axiosInstance.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
axiosInstance.defaults.withCredentials = false;

export const http = {
  get: async function get<Response = unknown, Params = unknown>(url: string, params?: Params) {
    return axiosInstance.get<BaseResponse<Response>>(url, { params }).then((res) => res.data);
  },
  post: async function post<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.post<BaseResponse<Response>>(url, data).then((res) => res.data);
  },
  del: async function del<Response = unknown>(url: string) {
    return axiosInstance.delete<BaseResponse<Response>>(url).then((res) => res.data);
  },
  put: async function put<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.put<BaseResponse<Response>>(url, data).then((res) => res.data);
  },
  patch: async function patch<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.patch<BaseResponse<Response>>(url, data).then((res) => res.data);
  },
};

export function serverHttp<Response = unknown>(url: string, options?: RequestInit) {
  return fetch(process.env.API_BASE_URL + url, options).then((res) => res.json());
}
