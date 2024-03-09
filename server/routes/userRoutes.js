import express from "express";
import { signup } from "../controllers/userController.js";

const router = express.Router();

//to register a new user
router.route("/signup").post(signup);

//Login
//Logout
//Get my profile

//ChangePassword
//UpdateProfile
//UpdateProfilePicture

//ForgetPassword
//ResetPassword

//AddtoPlaylist
//RemovefromPlaylist

export default router;
