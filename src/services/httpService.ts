import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { getItem, removeItem } from "../core/common/storage.services";
import toast from "react-hot-toast";

interface AxiosErrorMessage {
  ErrorMessage: string[];
  status: number;
}

const baseURL: string = import.meta.env.VITE_BASE_URL;

const instance: AxiosInstance = axios.create({
  baseURL,
});

const onSuccess = (response: AxiosResponse) => {
  return response;
};

const onError = (err: AxiosError<AxiosErrorMessage>) => {
  if (err.response?.data.ErrorMessage) {
    err.response.data.ErrorMessage.forEach((errorMessage) => {
      toast.error(errorMessage);
    });
  } else {
    toast.error("مشکل غیر منتظره ای رخ داد !");
  }

  if (err.response?.data.status === 401) {
    removeItem("token");

    window.location.pathname = "/login";
  }

  Promise.reject(err);
};

instance.interceptors.request.use((opt) => {
  const token = getItem("token");

  if (token && token !== null) opt.headers.Authorization = "Bearer " + token;
  return opt;
});
instance.interceptors.response.use(onSuccess, onError);

export default instance;
