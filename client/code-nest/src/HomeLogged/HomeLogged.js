import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Caurosel from "./Components/Caurosel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeLogged() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (!userInfo) {
      const url = "http://localhost:4000/api/v1/logout";
      localStorage.clear();
      try {
        const response = axios.get(url, {
          withCredentials: true,
        });
        if (response.data.success === true) {
          navigate("/");
        }
      } catch (error) {
        toast.error("Something went wrong!");
      }
    }
  });

  return (
    <>
      {/* <h1>Welcome</h1>
      {userInfo ? (
        <div>
          <p>
            Name: {userInfo.fName} {userInfo.lName}
          </p>
          <p>Email: {userInfo.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading user profile...</p>
      )} */}
      <Caurosel />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
