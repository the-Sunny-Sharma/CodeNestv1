export const sendToken = (res, user, message, statusCode = 200) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // secure: true,  //don't add secure while in localhost
    //token won't save in cookie if secure=true in cookie options
    sameSite: "none",
  };

  res.status(201).cookie("token", token, options).json({
    success: true,
    message,
    user,
  });
};
