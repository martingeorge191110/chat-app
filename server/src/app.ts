import express, {Response, Request, NextFunction} from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import { cors_types } from "./server.types.ts";
import Api_error from "./middlewares/error.class.ts";


dotenv.config()

export const env: NodeJS.ProcessEnv = process.env
const app = express()

app.use(cors({
   "credentials": false,
   "origin": env.NODE_ENV === "development" ? "*" : undefined
} as cors_types))

app.use(express.json())
app.use(morgan("tiny"))
app.use(express.urlencoded({
   "extended": true,
   "limit": "120mgb"
}))
app.use(cookieParser())




app.use("/", (req: Request, res: Response, next: NextFunction): void => {
   return (next(Api_error.create_error("Still no apis", 404)))
})


app.use("*", Api_error.error_middleware)

app.listen(env.PORT, () => {
   console.log(
      `Server is running on http://${env.HOSTNAME}:${env.PORT}`
   )
})
