import express from "express";
import { login, logout, signup } from "../controllers/userController.js";

const router = express.Router();

//to register a new user
router.route("/signup").post(signup);

//Login
router.route("/login").post(login);

//Logout
router.route("/logout").get(logout);
//Get my profile

//ChangePassword
//UpdateProfile
//UpdateProfilePicture

//ForgetPassword
//ResetPassword

//AddtoPlaylist
//RemovefromPlaylist

export default router;
