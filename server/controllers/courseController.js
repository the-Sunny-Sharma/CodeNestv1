import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { Course } from "../models/Course.js";
import getDataUri from "../utils/dataUri.js";
import ErrorHandler from "../utils/errorHandler.js";
import cloudinary from "cloudinary";

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

  const file = req.file; //image uploaded by multer middleware

  const fileUri = getDataUri(file);

  const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

  await Course.create({
    title,
    description,
    category,
    createdBy,
    poster: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
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

  const course = await Course.findById(id);

  if (!course) {
    return next(new ErrorHandler("Course not found.", 404));
  }

  course.views += 1;
  await course.save();

  res.status(200).json({
    success: true,
    course,
  });
});

export const addLecture = catchAsyncError(async (req, res, next) => {
  const { title, description, type, schedule } = req.body;
  const { id } = req.params;
  const file = req.file;

  if (!id) {
    return next(new ErrorHandler("Course ID is required.", 400));
  }

  const course = await Course.findById(id);

  if (!course) {
    return next(new ErrorHandler("Course not found.", 404));
  }

  // Add lecture details based on the lecture type
  let lectureDetails = {
    title,
    description,
    type,
    schedule,
  };

  try {
    if (type === "video") {
      // Upload the video file to Cloudinary
      const fileUri = getDataUri(file);
      const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
        resource_type: "video",
      });

      lectureDetails.videoUrl = {
        // Storing public_id and url under videoUrl
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      };
      console.log("Id", lectureDetails);
    } else if (type === "liveStream" || type === "oneOnOne") {
      // If lecture type is liveStream or oneOnOne, you can add roomCode here
      // const { roomCode } = req.body;
      // if (!roomCode) {
      //   return next(
      //     new ErrorHandler(`Room code is required for ${type} lecture.`, 400)
      //   );
      // }
      // lectureDetails.roomCode = roomCode;
    } else {
      return next(new ErrorHandler(`Invalid lecture type: ${type}.`, 400));
    }

    course.lectures.push(lectureDetails);
    course.numOfVideos = course.lectures.length;
    await course.save();

    res.status(200).json({
      success: true,
      message: "Lecture added to the course.",
    });
  } catch (error) {
    next(error);
  }
});

// export const addLecture = catchAsyncError(async (req, res, next) => {
//   const { id } = req.params;
//   const { title, description } = req.body;

//   // const file = req.file;

//   if (!id) {
//     return next(new ErrorHandler("Course ID is required.", 400));
//   }

//   const course = await Course.findById(id);

//   if (!course) {
//     return next(new ErrorHandler("Course not found.", 404));
//   }

//   // const fileUri = getDataUri(file);

//   // //max video size limit is 100mb since using free tier of cloudinary
//   // const myCloud = await cloudinary.v2.uploader.upload(fileUri.content, {
//   //   resource_type: "video",
//   // });

//   course.lectures.push({
//     title,
//     description,
//     video: {
//       public_id: "myCloud.public_id",
//       url: "myCloud.secure_url",
//     },
//   });

//   course.numOfVideos = course.lectures.length;

//   await course.save();

//   res.status(200).json({
//     success: true,
//     message: "Lecture added in Course",
//   });
// });
