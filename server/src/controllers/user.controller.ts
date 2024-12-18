import prisma_db from "../prisma.db.ts";
import { Request, Response, NextFunction } from "express";
import UserValidator from "../validators/user.validator.ts";
import Api_error from "../middlewares/error.class.ts";
import { User } from "@prisma/client";





class UserController extends UserValidator {



   public Verify_account = async (req: Request, res: Response, next: NextFunction) => {
      const user_id: string = req.id || ""

      let user_result;
      try {
         const user = await prisma_db.user.findUnique({
            where: {id: user_id},
            select: {
               id: true, first_n: true, last_n: true, avatar: true, email: true, phone: true, bio: true, country: true
            }
         })
         user_result = user
      } catch (err) {
         return (next(Api_error.create_error("Server error while verify user account!", 500)))
      }

      if (!user_result)
         return (next(Api_error.create_error("User id is not exists in our records!", 404)))

      this.response_successfuly(res, 200, "User info retreived Successfuly!", {...user_result})
   }

   public Search_user = async (req: Request, res: Response, next: NextFunction) => {
      const {category, value} = req.query as {category: "name" | "email", value: string}

      let name: Array<string> = category === "name" ? value.split(" ") : []

      console.log(name)
      try {
         const users:  Array<{id: string, first_n: string, last_n: string, avatar: string | null}> = category === "name" ? 
         await prisma_db.user.findMany({
            where: {
               AND: [
                  {
                     first_n: {contains: name[0]},
                     last_n: {contains: name[1] || ""}
                  }
               ]
            }, select: {
               id: true, first_n: true, last_n: true, avatar: true
            }
         }) : 
         await prisma_db.user.findMany({
            where: {
               email: {contains: value}
            }, select: {
               id: true, first_n: true, last_n: true, avatar: true
            }
         })

         this.response_successfuly(res, 200, "Retreived Successfuly!", users)
      } catch (err) {
         return (next(Api_error.create_error("Server error during searching process!", 500)))
      }
   }

   public Update_info = async (req: Request, res: Response, next: NextFunction) => {
      
   }
}

export default UserController;
