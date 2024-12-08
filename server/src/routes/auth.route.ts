import express, { Router } from "express";
import AuthController from "../controllers/auth.controller";


const AuthRouter: Router = express.Router()
const AuthInstance: AuthController = new AuthController()



AuthRouter.route("/register/")
                  .post(
                     AuthInstance.register_valid(), AuthInstance.validation_error,
                     AuthInstance.Register
                  )


AuthRouter.route("/login/")
                  .post(
                     AuthInstance.login_valid(), AuthInstance.validation_error,
                     AuthInstance.Login
                  )


AuthRouter.route("/reset-link/")
                  .post(
                     AuthInstance.email_valid(), AuthInstance.validation_error,
                     AuthInstance.Reset_Link
                  )

export default AuthRouter;
