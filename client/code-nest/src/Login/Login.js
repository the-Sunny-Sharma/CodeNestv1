import React, { useEffect } from "react";
import $ from "jquery";
import "./Login.css";
import SmallInput from "./components/SmallInput";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    // jQuery code here
    $("input").focus(function () {
      $(this).parents(".form-group").addClass("focused");
    });

    $("input").blur(function () {
      var inputValue = $(this).val();
      if (inputValue === "") {
        $(this).removeClass("filled");
        $(this).parents(".form-group").removeClass("focused");
      } else {
        $(this).addClass("filled");
      }
    });
  }, []); // empty dependency array ensures this runs only once after mount

  const redirect = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="login-page-wrapper log-wrapper">
        <h2 className="signup-page-h login-h">
          Log in to your CodeNest account
        </h2>
        <div className="input-container">
          <div className="full-div">
            <div className="form-group new-form-grp">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <SmallInput
                ID="email"
                Type="email"
                ClassName="full-length form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password1">
                Password
              </label>
              <SmallInput
                ID="password1"
                Type="password"
                ClassName="full-length form-input"
              />
            </div>

            <button className="sign-page-btn">Login</button>
          </div>
        </div>
        <p className="signup-page-h down-tag">
          Don't have an account?{" "}
          <span onClick={() => redirect("/signup")}>SignUp</span>
        </p>
        <p className="frgt-pass" onClick={() => redirect("/forgotpassword")}>
          Forgot Password
        </p>
      </div>
    </>
  );
}
