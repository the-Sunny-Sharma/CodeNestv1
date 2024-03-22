import React, { useEffect } from "react";
import $ from "jquery";
import "./Login.css";
import SmallInput from "./components/SmallInput";

export default function ForgotPassword() {
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

  return (
    <>
      <div className="login-page-wrapper log-wrapper">
        <h2 className="signup-page-h login-h">Forgot Password?</h2>
        <p style={{ textAlign: "center" }}>
          Enter your email below to reset your password
        </p>
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
            <button className="sign-page-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
