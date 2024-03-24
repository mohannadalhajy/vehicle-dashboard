import { SERVER_BASE_URL } from "../config/API";
import axiosInstance, { baseUrl } from "../utils/axios";

export const crud = {
  getAll: async ({ url, params }: { url?: string; params?: any }) => {
    console.log("testing")
    console.log(baseUrl)
    console.log(SERVER_BASE_URL)
    return axiosInstance.get(`${baseUrl}/${url}`, { params });
  },
  getOne: async ({
    url,
    params,
    id,
  }: {
    url?: string;
    params?: any;
    id?: string;
  }) => axiosInstance.get(`${baseUrl}/${url}/${id}`, { ...params }),
  delete: async ({
    url,
    params,
    id,
  }: {
    url?: string;
    params?: any;
    id?: string;
  }) => axiosInstance.delete(`${baseUrl}/${url}/${id}`, { ...params }),
  addOne: async ({ url, params }: { url?: string; params?: any }) =>
    axiosInstance.post(`${baseUrl}/${url}`, { ...params }),
  edit: async ({
    url,
    params,
    id,
  }: {
    url?: string;
    params?: any;
    id?: string;
  }) => axiosInstance.put(`${baseUrl}/${url}/${id}`, { ...params }),
};
