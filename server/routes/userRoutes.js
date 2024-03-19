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
  addToPlaylist,
  removeFromPlaylist,
  registerTeacher,
  getTeacherProfile,
  listTeacherCourses,
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
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

//RemovefromPlaylist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

//Register as a Teacher: Route to allow users to register as teachers.
router.route("/register-teacher").post(isAuthenticated, registerTeacher);

//Get Teacher Profile: Route to retrieve the profile of a specific teacher.
router.route("/teacher/me").get(isAuthenticated, getTeacherProfile);

//Update Teacher Profile: Route to allow teachers to update their profile information.
// router.route("/teacher/update").put(isAuthenticated, updateTeacherProfile);

//List Courses Taught by Teacher: Route to list all courses taught by a specific teacher.
router.route("/teacher/my-courses").get(isAuthenticated, listTeacherCourses);

export default router;
