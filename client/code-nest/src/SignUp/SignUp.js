import React, { useEffect } from "react";
import $ from "jquery";
import SmallInput from "./components/SmallInput";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
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
      <div className="login-page-wrapper">
        <h2 className="signup-page-h">SignUp and start learning!</h2>
        <div className="input-container">
          <div className="small-div">
            <div className="form-group">
              <label className="form-label" htmlFor="first-name">
                First Name
              </label>
              <SmallInput
                ID="first-name"
                Type="text"
                ClassName="small-length form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="last-name">
                Last Name
              </label>
              <SmallInput
                ID="last-name"
                Type="text"
                ClassName="small-length form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="dob">
                Date of Birth
              </label>
              <SmallInput
                ID="dob"
                Type="date"
                ClassName="small-length form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <SmallInput
                ID="phone"
                Type="number"
                ClassName="small-length form-input"
              />
            </div>
          </div>

          <div className="full-div">
            <div className="form-group">
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
                Create Password
              </label>
              <SmallInput
                ID="password1"
                Type="password"
                ClassName="full-length form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password2">
                Confirm Password
              </label>
              <SmallInput
                ID="password2"
                Type="password"
                ClassName="full-length form-input"
              />
            </div>

            <button className="sign-page-btn">Continue</button>
          </div>
        </div>
        <p className="signup-page-h down-tag">
          Already have an account?{" "}
          <span onClick={() => redirect("/login")}>Login</span>
        </p>
      </div>
    </>
  );
}
