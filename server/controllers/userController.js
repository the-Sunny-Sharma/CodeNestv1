import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const signup = catchAsyncError(async (req, res, next) => {
  const { fName, lName, dateOfBirth, phone, email, password } = req.body;

  //   const file = req.file;

  if (!fName || !lName || !dateOfBirth || !phone || !email || !password)
    return next(new ErrorHandler("Please add all fields.", 400));

  let user = await User.findOne({ email });

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
