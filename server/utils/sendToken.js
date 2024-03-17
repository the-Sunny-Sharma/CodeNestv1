export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJWTToken();

  // const options = {
  //   expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Expiry time
  //   httpOnly: true,
  //   secure: false, // Set to false when running on localhost
  //   sameSite: "None", // Make sure this is set correctly for your use case
  // };

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), //Expiry time
    httpOnly: true,
    // secure: true,
    //don't add secure while in localhost
    //token won't save in cookie if secure=true in cookie options
    // sameSite: "None",
  };

  res.status(201).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
