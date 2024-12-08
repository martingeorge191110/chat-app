import { AxiosError } from "axios";
import { loginning, regstiering } from "../app.types.ts";
import { authApi } from "./axios.ts";


export const register = async (body: regstiering) => {
   try {
      const response = await authApi.post("/register/", {
         ...body
      }, {withCredentials: true})

      return (response.data)
   } catch (err) {
      const apiError = err as AxiosError
      return (apiError.response?.data)
   }
}

export const login = async (body: loginning) => {
   try {
      const response = await authApi.post("/login/", {
         ...body
      }, {withCredentials: true})

      return (response.data)
   } catch (err) {
      const apiError = err as AxiosError
      return (apiError.response?.data)
   }
}

export const reset_link = async (body: {email: string}) => {
   try {
      const response = await authApi.post("/reset-link/", {
         ...body
      })

      return (response.data)
   } catch (err) {
      const apiError = err as AxiosError
      return (apiError.response?.data)
   }
}