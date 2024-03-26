import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Caurosel from "./Components/Caurosel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeLogged() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("user");
  //   if (!userInfo) {
  //     const url = "http://localhost:4000/api/v1/logout";
  //     localStorage.clear();
  //     try {
  //       const response = axios.get(url, {
  //         withCredentials: true,
  //       });
  //       if (response.data.success === true) {
  //         navigate("/");
  //       }
  //     } catch (error) {
  //       toast.error("Something went wrong!");
  //     }
  //   }
  // });

  return (
    <>
      <Caurosel />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
