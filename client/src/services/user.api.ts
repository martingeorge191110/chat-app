import { AxiosError } from "axios";
import { userApi } from "./axios.ts";



export const verify_account = async (token: string) => {

   try {
      const response = await userApi.get("/account/", 
         {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         }
      )

      return (response.data)
   } catch (err) {
      const apiError = err as AxiosError
      return (apiError.response?.data)
   }
}
