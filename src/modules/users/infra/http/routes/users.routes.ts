import { Router } from "express";
import UserController from "../controllers/UserController";
import validate from "../middlewares/validate";
import { CreateUserValidation } from "../validations/UserValidation";

const usersRouter = Router();

usersRouter.post(
  "/users",
  validate(CreateUserValidation),
  UserController.create
);

export default usersRouter;
