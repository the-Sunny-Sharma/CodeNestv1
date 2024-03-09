import express from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/courseController.js";

const router = express.Router();

//Get all courses without lectures
router.route("/courses").get(getAllCourses);

//create new course - only teacher
router.route("/createCourse").post(createCourse);

//Add lecture, delete course, get course details with lecture

//delete lecture

export default router;
