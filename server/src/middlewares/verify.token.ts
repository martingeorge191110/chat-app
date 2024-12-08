import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import Api_error from './error.class.ts'


const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
   const auth = req.headers["authorization"]
   if (!auth)
      return (next(Api_error.create_error("authorization must be included in headers!", 400)))

   const token: (string | null) = auth.split(" ")[1]
   if (!token)
      return (next(Api_error.create_error("Token must be included in authorization!", 400)))

   jwt.verify(token, process.env.JWT_KEY || "", (err, payload ) => {
      if (err)
         return (next(Api_error.create_error("token is not valid, please login again", 400)))

      req.id = ((payload) as {id?: string}).id
   })
   next()
}

export default VerifyToken;
