import Axios from 'axios';

export const axiosInstance = Axios.create();
axiosInstance.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
axiosInstance.defaults.withCredentials = false;

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axiosInstance.get<Response>(url).then((res) => res.data);
  },
  post: function post<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.post<Response>(url, data).then((res) => res.data);
  },
  del: function del<Response = unknown>(url: string) {
    return axiosInstance.delete<Response>(url).then((res) => res.data);
  },
  put: function put<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.put<Response>(url, data).then((res) => res.data);
  },
  download: function download<Response = Blob>(url: string) {
    return axiosInstance.get<Response>(url, { responseType: 'blob' }).then((res) => res.data);
  },
};
