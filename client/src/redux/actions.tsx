import { regstiering } from "../app.types.ts"
import { register } from "../services/auth.api.ts"



export const submit_register = async (body: regstiering) => {

   try {
      const result = await register(body)

      return ({
         type: "REGSITERing",
         payload: result
      })
   } catch (err) {
      console.log(err)
      return ({
         type: "REGSITERing",
         payload: null
      })
   }
}
