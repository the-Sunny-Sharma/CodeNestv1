import React, { useEffect, useState, useRef } from "react";
import $ from "jquery";
import SmallInput from "./components/SmallInput";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const rPassword = useRef();
  const rEmail = useRef();

  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [dateOfBirth, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const hFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const hLastName = (event) => {
    setLastName(event.target.value);
  };
  const hDOB = (event) => {
    setDOB(event.target.value);
  };
  const hPhone = (event) => {
    setPhone(event.target.value);
  };
  const hEmail = (event) => {
    setEmail(event.target.value);
  };
  const hPassword = (event) => {
    setPassword(event.target.value);
  };
  const hPassword1 = (event) => {
    setPassword1(event.target.value);
  };

  const saveUserDetails = async (event) => {
    event.preventDefault();
    if (
      !fName ||
      !lName ||
      !dateOfBirth ||
      !phone ||
      !email ||
      !password ||
      !password1
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (password === password1) {
      let userData = {
        fName,
        lName,
        dateOfBirth,
        phone,
        email,
        password,
      };
      let url = "http://localhost:4000/api/v1/signup";
      try {
        const response = await axios.post(url, userData);
        if (response) {
          setFirstName("");
          setLastName("");
          setDOB("");
          setEmail("");
          setPhone("");
          setPassword("");
          setPassword1("");
          toast.success("User registered successfully!");
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 3000); // Wait for 3 seconds before navigating
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          toast.error("Email already in use!");
          setEmail("");
          rEmail.current.focus();
          return;
        } else if (error.response) {
          // Handle other server errors with status codes
          toast.error("An error occurred. Please try again later.");
        } else {
          // Handle network errors or other unexpected errors
          toast.error("Network error occurred. Please try again later.");
        }
      }
    } else {
      alert("\u24D8 Password did not match");
      setPassword1("");
      setPassword("");
      rPassword.current.focus();
      return;
    }
  };

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
                Value={fName}
                OnChange={hFirstName}
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
                Value={lName}
                OnChange={hLastName}
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
                Value={dateOfBirth}
                OnChange={hDOB}
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
                Value={phone}
                OnChange={hPhone}
              />
            </div>
          </div>

          <div className="full-div">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="full-length form-input"
                value={email}
                onChange={hEmail}
                ref={rEmail}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password1">
                Create Password
              </label>
              <input
                id="password1"
                type="password"
                className="full-length form-input"
                value={password}
                onChange={hPassword}
                ref={rPassword}
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
                Value={password1}
                OnChange={hPassword1}
              />
            </div>

            <button className="sign-page-btn" onClick={saveUserDetails}>
              Continue
            </button>
          </div>
        </div>
        <p className="signup-page-h down-tag">
          Already have an account?{" "}
          <span onClick={() => redirect("/login")}>Login</span>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
