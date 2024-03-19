import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getAllCourses = catchAsyncError(async (req, res, next) => {
  const courses = await Course.find().select("-lectures"); //after enrolling user can see the lectures
  res.status(200).json({
    success: true,
    courses,
  });
});

export const createCourse = catchAsyncError(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;
  const creator = req.user._id;

  if (!title || !description || !category || !createdBy)
    return next(new ErrorHandler("Please add all fields.", 400));

  // const file = req.file; //image uploaded by multer middleware

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: "temp",
      url: "temp",
    },
    creator,
  });
  res.status(201).json({
    success: true,
    message: "Course created successfully. You can add lectures now.",
  });
});

export const viewCourse = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new ErrorHandler("Course ID is required.", 400));
  }

  const course = await Course.findById(id).populate("lectures");

  if (!course) {
    return next(new ErrorHandler("Course not found.", 404));
  }

  res.status(200).json({
    success: true,
    course,
  });
});
