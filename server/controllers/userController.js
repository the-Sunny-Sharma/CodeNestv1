import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

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
  // res.status(200).json({
  //   success: true,
  //   message: "Profile Picture Updated Successfully!",
  // });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
  // res.status(200).json({
  //   success: true,
  //   message: "Profile Picture Updated Successfully!",
  // });
});
