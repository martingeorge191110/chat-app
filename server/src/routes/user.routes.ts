import express from 'express';
import VerifyToken from '../middlewares/verify.token';
import UserController from '../controllers/user.controller.ts';



const UserRouter: express.Router = express.Router()
const user_instance: UserController = new UserController()


UserRouter.use(VerifyToken)


UserRouter.route("/account/").get(user_instance.Verify_account)


UserRouter.route("/profile/")
                     .put(
                        user_instance.updateInfValid(), user_instance.validation_error,
                     )


UserRouter.route("/search/")
                     .get(
                        user_instance.searching_user(), user_instance.validation_error,
                        user_instance.Search_user
                     )

export default UserRouter;
