import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
// import { token_object } from "../types/app.types.ts"
import { Response } from "express"
import GlobalUtilies from "./global.utilies.ts"
dotenv.config()

/**
 * Auth utilies class
 */
class AuthUtilies extends GlobalUtilies{

   /* Function to hashing the password */
   public hashed_password = (password: string): string => {
      return (bcrypt.hashSync(password, 10))
   }

   /* Functin to create new token */
   public create_token = (id: string): string | null => {
      const jwtKey = process.env.JWT_KEY;

      if (!jwtKey)
         return (null)

      const token: string = jwt.sign({
         id: id
      }, jwtKey, {
         expiresIn: process.env.JWT_EXP || '1h'
      });

      return (token)
   }

   /* Function that set token as a cookies */
   public new_cookies = (res: Response, token: string): void => {
      res.cookie("token", token, {
         secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
         httpOnly: true,
         maxAge: 1000 * 60 * 60 * 24 * 3
      })
   }

   /* Function to compare passwords */
   compare_password = (password: string, hashed_passowrd: string) => {
      return (bcrypt.compareSync(password, hashed_passowrd))
   }
}

export default AuthUtilies;
