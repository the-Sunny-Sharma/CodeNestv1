import express from "express";
import {
  addLecture,
  createCourse,
  getAllCourses,
  viewCourse,
} from "../controllers/courseController.js";
import { authorizeTeacher, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only teacher
router
  .route("/createCourse")
  .post(isAuthenticated, authorizeTeacher, singleUpload, createCourse);

router
  .route("/view-course/:id")
  .get(viewCourse)
  .post(isAuthenticated, authorizeTeacher, singleUpload, addLecture);
// .post(isAuthenticated, authorizeTeacher, addLecture);

//Add lecture, delete course, get course details with lecture

//delete lecture

export default router;
