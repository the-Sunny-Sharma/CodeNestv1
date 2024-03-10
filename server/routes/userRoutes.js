import express from "express";
import {
  login,
  logout,
  signup,
  getMyProfile,
  changePassword,
  updateProfile,
  updateProfilePicture,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//to register a new user
router.route("/signup").post(signup);

//Login
router.route("/login").post(login);

//Logout
router.route("/logout").get(logout);

//Get my profile
router.route("/me").get(isAuthenticated, getMyProfile);

//ChangePassword
router.route("/changepassword").put(isAuthenticated, changePassword);

//UpdateProfile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//UpdateProfilePicture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, updateProfilePicture);

//ForgetPassword
router.route("/forgotpassword").post(forgotPassword);

//ResetPassword
router.route("/resetpassword/:token").put(resetPassword);

//AddtoPlaylist
//RemovefromPlaylist

export default router;
