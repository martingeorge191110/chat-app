import express, {Response, Request, NextFunction} from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"
import { cors_types } from "./server.types.ts";
import Api_error from "./middlewares/error.class.ts";
import AuthRouter from "./routes/auth.route.ts";
import UserRouter from "./routes/user.routes.ts";


dotenv.config()

export const env: NodeJS.ProcessEnv = process.env
const app = express()

app.use(cors({
   "credentials": true,
   "origin": env.NODE_ENV === "development" ? "http://127.0.0.1:5173" : undefined
} as cors_types))

app.use(express.json())
app.use(morgan("tiny"))
app.use(express.urlencoded({
   "extended": true,
   "limit": "120mgb"
}))
app.use(cookieParser())




app.use("/api/auth", AuthRouter)
app.use("/api/user", UserRouter)


app.use("*", Api_error.error_middleware)

app.listen(env.PORT, () => {
   console.log(
      `Server is running on http://${env.HOSTNAME}:${env.PORT}`
   )
})
