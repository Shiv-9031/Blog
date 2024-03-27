import express from "express";
import { authMiddleware } from "../utils/authentication.mjs";
import { blog } from "../controllers/blogController.mjs";
import { upload } from "../utils/avatarFile.mjs";
const Routes = express.Router();

Routes.route("/blog").post(upload.single("avatar"), blog);
// Routes.route("/get-image/:id").get(authMiddleware, getProfilePic);
export default Routes;
