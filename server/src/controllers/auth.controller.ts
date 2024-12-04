import { User } from "@prisma/client";
import { register_body } from "../server.types.ts";
import AuthValidator from "../validators/auth.validator.ts";
import { Request, Response, NextFunction } from "express";
import prisma_db from "../prisma.db.ts";
import Api_error from "../middlewares/error.class.ts";



class AuthController extends AuthValidator {


   public Register = async (req: Request, res: Response, next: NextFunction) => {
      const body: register_body = req.body

      const hashed_passowrd: string = this.hashed_password(body.password)
      let newUser: User;
      try {
         newUser = await prisma_db.user.create({
            data: {
               first_n: body.first_n, last_n: body.last_n, email: body.email,
               password: hashed_passowrd
            }
         })
      } catch (err) {
         return (next(Api_error.create_error("Server error while registering!", 500)))
      }

      const token: (string | null) = this.create_token(newUser.id)
      if (!token)
         return (next(Api_error.create_error("Please try to Login, to get your authorized token", 400)))

      res.cookie("token", token, {
         secure: process.env.NODE_ENV == "production",
         httpOnly: false,
         maxAge: 1000 * 60 * 60 * 24 * 3,
         sameSite: "none",
         path: "/"
      })
      this.response_successfuly(res, 201, "Register Successfuly!", {
         ...newUser, token
      })
   }

   public Login = async (req: Request, res: Response, next: NextFunction) => {
      if (!req.user || req.user === undefined)
         return (next(Api_error.create_error("server error while login", 500)))

      const hashed_passowrd: (string) = req.user.password
      const {password} = req.body as {password: string}

      const compare_password: boolean = this.compare_password(password, hashed_passowrd)
      if (!compare_password)
         return (next(Api_error.create_error("Wrong password!", 400)))

      const token: (string | null) = this.create_token(req.user.id)
      if (!token)
         return (next(Api_error.create_error("No token valid!", 400)))

      this.new_cookies(res, token)
      this.response_successfuly(
         res, 200, "Login Successfuly!", {...req.user, token}
      )
   }
}

export default AuthController;
