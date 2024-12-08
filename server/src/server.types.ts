import { User } from "@prisma/client";
import { ValidationChain } from "express-validator";


/* Successfuly response */
export interface response_object {
   success: boolean;
   message: string;
   result: object
}

/* Express validator array */
export type validator_chain = Array<ValidationChain>

/* custom express validation */
export type custom_validator = Promise<boolean>

/* Register body interface */
export interface register_body {
   first_n: string;
   last_n: string;
   email: string;
   password: string;
   confirm_password: string;
}

/* Cors Types */
export interface cors_types {
   credentials: boolean;
   origin: (string | undefined);
}

/* Add `user` with the type of your Prisma User mode */
declare global {
   namespace Express {
      interface Request {
         user?: User;
         id?: string
      }
   }
}
