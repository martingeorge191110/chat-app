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

      this.new_cookies(res, token)
      this.response_successfuly(res, 201, "Register Successfuly!", {
         ...newUser, token
      })
   }
}

export default AuthController;
