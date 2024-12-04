import { body, Meta, ValidationChain } from "express-validator";
import { User } from "@prisma/client";
import prisma_db from "../prisma.db.ts";
import { custom_validator, register_body, validator_chain } from "../server.types.ts";
import AuthUtilies from "../utilies/auth.utilies.ts";



class AuthValidator extends AuthUtilies {

   public register_valid = (): validator_chain => {
      return ([
         body("first_n")
            .trim().notEmpty().withMessage("first name feild is reqired"),
         body("last_n")
            .trim().notEmpty().withMessage("last name feild is reqired"),
         body("email")
            .trim().notEmpty().withMessage("Email address feild is reqired")
            .isEmail().withMessage("email address is not valid, enter a valid email!")
            .custom(async (val: string, {req}: Meta): custom_validator => {
               try {
                  const user: (User | null) = await prisma_db.user.findUnique({
                     where: {
                        email: val
                     }
                  })

                  if (user)
                     throw (new Error("This email address already exists!"))

                  return (true)
               } catch (err) {
                  throw (err)
               }
            }),
         body("password")
            .trim().notEmpty().withMessage("Password feild is reqired")
            .isStrongPassword({minLength: 5, minSymbols: 0, minUppercase: 0}).withMessage("Password must be at least 5 characters with numbers!"),
         body("confirm_password")
            .trim().notEmpty().withMessage("Confirm Password feild is reqired")
            .custom((val: string, {req}: Meta): boolean => {
               const body: (register_body | null) = req.body || null
               if (body && req.body.password !== val)
                  throw (new Error("Passwords not matches!"))

               return (true)
            })
      ])
   }

   public login_valid = (): validator_chain => {
      return ([
         body("email")
            .trim()
            .notEmpty().withMessage("Email field is required!")
            .isEmail().withMessage("Please provide a valid email address!")
            .custom(async (val: string, {req}): custom_validator => {
               try {
                  const user = await prisma_db.user.findUnique({
                     where: {
                        email: val
                     }
                  })

                  if (!user)
                     throw (new Error("We dont have This email in our records, please register first!"))

                  req.user = user
                  return (true)
               } catch (err) {
                  throw (err)
               }
            }),
         body("password")
            .trim()
            .notEmpty().withMessage("Password field is required!")
      ])
   }
}

export default AuthValidator;
