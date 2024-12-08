import axios from "axios";

export const authApi: axios.AxiosInstance = axios.create({
   baseURL: "http://localhost:8000/api/auth",
   withCredentials: true
});

export const userApi: axios.AxiosInstance = axios.create({
   baseURL: "http://localhost:8000/api/user",
   withCredentials: true
});
