import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Caurosel from "./Components/Caurosel";

export default function HomeLogged() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/me", {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        setUserInfo(response.data.user);
        console.log("USer date", response.data);
      } catch (error) {
        console.log(`Error fetching user profile: ${error}`);
        navigate("/"); // Redirect to home page if user is not authenticated
      }
    };

    fetchUserProfile();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/logout", {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      console.log("user logged out", response.data);
    } catch (error) {
      console.log(`Error fetching user profile: ${error}`);
    }
  };

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
      <Caurosel/>
    </>
  );
}
