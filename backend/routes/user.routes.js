import express from "express"
import { Login, LogOut, signUp } from "../controllers/auth.controller.js";
import { getcurrentUser, updateAssistant } from "../controllers/user.controller.js";
import isAuth from "../middlewares/isAuth.js";
import upload from "../middlewares/multer.js";

const userRouter = express.Router();

userRouter.get("/current",isAuth,getcurrentUser)
userRouter.post("/update",isAuth,upload.single("assistantImage"),updateAssistant)
export default userRouter