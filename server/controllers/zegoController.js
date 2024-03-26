import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import generateToken04 from "../utils/zegoServerAssistant.cjs";

export const getZegoToken = catchAsyncError(async (req, res, next) => {
  let userID = req.body.userID;

  const appID = 2137113653;
  const secret = "93546ef2e39a01618620284c0d02bf35";
  const effectiveTimeInSeconds = 7200;
  const payload = "";
  // Get parameters from request if needed

  if (!userID) {
    return next(new ErrorHandler("Course ID is required.", 400));
  }

  try {
    const token = generateToken04(
      appID,
      userID,
      secret,
      effectiveTimeInSeconds,
      payload
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
