import { body, Meta, query } from "express-validator";
import { custom_validator, validator_chain } from "../server.types.ts";
import GlobalUtilies from "../utilies/global.utilies.ts";
import prisma_db from "../prisma.db.ts";
import { User } from "@prisma/client";





class UserValidator extends GlobalUtilies {


   public updateInfValid = (): validator_chain => {
      const feilds = ["first_n", "last_n", "phone", "bio"]
      return ([
         ...feilds.map((feild) => {
            return (
               body(`${feild}`)
                  .optional()
                  .trim().notEmpty().withMessage("This Field must be not empty!")
                  .custom(async (val: string, {req}: Meta): custom_validator => {
                     if (feild !== "phone")
                        return (true)

                     try {
                        const user: (User | null) = await prisma_db.user.findUnique({
                           where: {
                              phone: val
                           }
                        })

                        if (!user)
                           return (true)

                        this.send_mail(user.email, "Some one trying to add your phone number", `
                              <h1>some one trying to add your phone number as his own number!</h1>
                           `)
                        throw (new Error("this is non unique phone number"))
                     } catch (err) {
                        throw (err)
                     }
                  })
            )
         })
      ])
   }


   public searching_user = (): validator_chain => {
      return ([
         query("category")
            .trim().notEmpty().withMessage("Category is required!")
            .isIn(["email", "name"]),
         query("value")
            .trim().notEmpty().withMessage("Value is required!")
      ])
   }
}

export default UserValidator;
