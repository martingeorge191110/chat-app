import { regstiering } from "../app.types.ts";
import { authApi } from "./axios.ts";


export const register = async (body: regstiering) => {
   try {
      const response = await authApi.post("/register/", {
         ...body
      })

      return (response.data)
   } catch (err) {
      console.log(err)
      return (null)
   }
}
