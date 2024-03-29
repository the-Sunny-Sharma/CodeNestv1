import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User, Teacher } from "../models/User.js";
import { Course } from "../models/Course.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";
import { sendEmail } from "../utils/sendEmail.js";
import crypto from "crypto";

export const signup = catchAsyncError(async (req, res, next) => {
  const { fName, lName, dateOfBirth, phone, email, password } = req.body;

  //   const file = req.file;

  if (!fName || !lName || !dateOfBirth || !phone || !email || !password)
    return next(new ErrorHandler("Please add all fields.", 400));

  let user = await User.findOne({ email }); //let becuz if no user found will update the value further

  if (user) return next(new ErrorHandler("User Already Exist", 409));

  //Upload file on cloudnary

  user = await User.create({
    fName,
    lName,
    dateOfBirth,
    phone,
    email,
    password,
    avatar: {
      public_id: "tempid",
      url: "tempurl",
    },
  });
  sendToken(res, user, "Registered Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please add all fields.", 400));

  const user = await User.findOne({ email }).select("+password"); //const becuz we won't change it further
  //select becuz in model we set  select: false, to not select password so now we overcome here

  if (!user) return next(new ErrorHandler("Incorrect email or password", 401));

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect email or password", 401));

  sendToken(res, user, `Welcome back, ${user.fName}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});

export const changePassword = catchAsyncError(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword)
    return next(new ErrorHandler("Please enter all fields", 400));

  const user = await User.findById(req.user._id).select("+password");

  const isMatch = await user.comparePassword(oldPassword);
  if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));

  user.password = newPassword;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password Changed Successfully",
  });
});

export const updateProfile = catchAsyncError(async (req, res, next) => {
  const { fName, lName, dateOfBirth, phone, email } = req.body;

  const user = await User.findById(req.user._id);

  if (fName) user.fName = fName;
  if (lName) user.lName = lName;
  if (dateOfBirth) user.dateOfBirth = dateOfBirth;
  if (phone) user.phone = phone;
  if (email) user.email = email;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully!",
  });
});

export const updateProfilePicture = catchAsyncError(async (req, res, next) => {
  //Cloudinary work starts here
  res.status(200).json({
    success: true,
    message: "Profile Picture Updated Successfully!",
  });
});

export const forgotPassword = catchAsyncError(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return next(
      new ErrorHandler(
        "Sorry, we couldn't find an account associated with that email address.",
        400
      )
    );
  }

  const resetToken = await user.getResetToken();

  await user.save();
  const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;

  // Send token via email
  const message = `Click on the following link to reset your password: ${url}. If you have not requested this, please ignore this email.`;
  await sendEmail(user.email, "CodeNest Password Reset", message);

  res.status(200).json({
    success: true,
    message: `A password reset link has been sent to ${user.email}. Please check your inbox.`,
  });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  const { token } = req.params;

  // Hash the token to match with the stored hashed token in the database
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  // Find the user with the matching reset token and ensure it has not expired
  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  // If no user is found or the token has expired, return an error
  if (!user)
    return next(
      new ErrorHandler(
        "Invalid or expired token. Please request a new password reset.",
        401
      )
    );

  user.password = req.body.password;

  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  // If everything is successful, return a success message
  res.status(200).json({
    success: true,
    message: "Password reset token verified. You can now reset your password.",
  });
});

export const addToPlaylist = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const course = await Course.findById(req.body.id);

  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  const itemExist = user.playlist.find((item) => {
    if (item.course.toString() === course._id.toString()) return true;
  });

  if (itemExist) return next(new ErrorHandler("Item Already Exist", 409));

  user.playlist.push({
    course: course._id,
    poster: course.poster.url,
  });

  await user.save();

  res.status(200).json({
    success: true,
    message: "Added to Playlist",
  });
});

export const removeFromPlaylist = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  const course = await Course.findById(req.query.id);

  if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

  const newPlaylist = user.playlist.filter((item) => {
    if (item.course.toString() !== course._id.toString()) return item;
  });

  user.playlist = newPlaylist;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Removed From Playlist",
  });
});

export const registerTeacher = catchAsyncError(async (req, res, next) => {
  const {
    title,
    qualifications,
    summary,
    yearsOfExperience,
    subject,
    specialization,
    languages,
  } = req.body;

  if (
    !title ||
    !qualifications ||
    !summary ||
    !yearsOfExperience ||
    !subject ||
    !specialization ||
    !languages
  )
    return next(new ErrorHandler("Please add all fields.", 400));

  // Find the user by their ID
  const user = await User.findById(req.user._id);

  // Check if the user exists
  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Check if the user is already registered as a teacher
  if (user.isTeacher) {
    return next(
      new ErrorHandler("You are already registered as a teacher", 409)
    );
  }

  // Update the user's isTeacher field to true
  user.isTeacher = true;

  // Save the updated user object
  await user.save();

  // Create a new Teacher document
  await Teacher.create({
    user: req.user._id, // Reference to the user document
    title,
    qualifications,
    summary,
    yearsOfExperience,
    subject,
    specialization,
    languages,
  });

  res.status(200).json({
    success: true,
    message: "Profile Updated Successfully!",
  });
});

// Get Teacher Profile
export const getTeacherProfile = catchAsyncError(async (req, res, next) => {
  // Retrieve user ID from the authenticated request
  const userId = req.user._id;

  // Check if the user is registered as a teacher
  const teacher = await Teacher.findOne({ user: userId }).populate("user");
  if (!teacher) {
    return next(new ErrorHandler("You are not registered as a teacher", 403));
  }

  // If the user is registered as a teacher, return the teacher profile
  res.status(200).json({
    success: true,
    data: teacher,
  });
});

// Get Teacher Profile and List Courses
export const listTeacherCourses = catchAsyncError(async (req, res, next) => {
  // Retrieve user ID from the authenticated request
  const userId = req.user._id;

  // Find all courses created by the teacher
  const courses = await Course.find({ creator: userId });

  if (courses.length === 0) {
    return res.status(200).json({
      success: true,
      message: "You have not created any courses yet.",
      data: [],
    });
  }

  // Return the array of courses created by the teacher
  res.status(200).json({
    success: true,
    data: courses,
  });
});
