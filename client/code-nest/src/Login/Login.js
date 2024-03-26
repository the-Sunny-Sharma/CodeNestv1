import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./Login.css";
import SmallInput from "./components/SmallInput";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPassword = (event) => {
    setPassword(event.target.value);
  };

  const proceedToLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    let loginCredentials = {
      email,
      password,
    };
    let url = "http://localhost:4000/api/v1/login";
    try {
      const response = await axios.post(url, loginCredentials, {
        withCredentials: true, // Include credentials (cookies) in the request
      });
      if (response.data.success === true) {
        const { fName, lName, email, role, isTeacher } = response.data.user;
        const userInfo = {
          fName,
          lName,
          email,
          role,
          isTeacher,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        toast.success(`Welcome back, ${response.data.user.fName}!`);
        setTimeout(() => {
          navigate("/h", { replace: true });
        }, 3000);
        return;
      } else {
        toast.error("Invalid Email or Password");
        return;
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid Email or Password");
      } else {
        toast.error("Network error occurred. Please try again later.");
      }
      return;
    }
  };

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
                Value={email}
                OnChange={hEmail}
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
                Value={password}
                OnChange={hPassword}
              />
            </div>
            <button className="sign-page-btn" onClick={proceedToLogin}>
              Login
            </button>
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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
