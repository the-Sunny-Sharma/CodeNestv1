import express from "express";
import {
  createCourse,
  getAllCourses,
  viewCourse,
} from "../controllers/courseController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only teacher
router.route("/createCourse").post(isAuthenticated, createCourse);

router.route("/view-course/:id").get(isAuthenticated, viewCourse);

//Add lecture, delete course, get course details with lecture

//delete lecture

export default router;
