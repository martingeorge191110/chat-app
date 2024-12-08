import { loginning, regstiering } from "../app.types.ts"
import { login, register } from "../services/auth.api.ts"
import { verify_account } from "../services/user.api.ts"



export const submit_register = async (body: regstiering) => {

   try {
      const result = await register(body)

      return ({
         type: "REGSITERing",
         payload: result
      })
   } catch (err) {
      return ({
         type: "REGSITERing",
         payload: null
      })
   }
}


export const submit_login = async (body: loginning) => {
   try {
   const result = await login(body)

      return ({
         type: "LOGINNING",
         payload: result
      })
   } catch (err) {
      return ({
         type: "LOGINNING",
         payload: null
      })
   }
}

export const check_verifing_account = async (token: string) => {
   const result = await verify_account(token)

   try {
      return ({
         type: "ACCOUNT_VALID",
         payload: result
      })
   } catch (err) {

      return ({
         type: "ACCOUNT_VALID",
         payload: null
      })
   }
}