import express from "express";
import {
  userRegister,
  userNameExisted,
  userLogin,
} from "../controllers/userController.mjs";

const Routes = express.Router();

Routes.route("/register").post(userRegister);
Routes.route("/isusernameexisted").post(userNameExisted);
Routes.route("/login").post(userLogin); //routes for user login

export default Routes;
