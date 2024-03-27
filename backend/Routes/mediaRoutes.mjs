import express from "express";
import { authMiddleware } from "../utils/authentication.mjs";
import {
  postProfilePic,
  getProfilePic,
} from "../controllers/mediaController.mjs";
import { upload } from "../utils/avatarFile.mjs";
const Routes = express.Router();

Routes.route("/profile-pic").post(upload.single("avatar"), postProfilePic);
Routes.route("/get-image/:id").get(authMiddleware, getProfilePic);
export default Routes;
