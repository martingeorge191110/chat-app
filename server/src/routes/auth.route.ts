import express, { Router } from "express";
import AuthController from "../controllers/auth.controller";


const AuthRouter: Router = express.Router()
const AuthInstance: AuthController = new AuthController()



AuthRouter.route("/register/")
                  .post(
                     AuthInstance.register_valid(), AuthInstance.validation_error,
                     AuthInstance.Register
                  )


export default AuthRouter;
