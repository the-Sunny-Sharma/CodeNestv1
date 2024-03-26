import React, { useEffect } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./StudentScreen.css";

export default function StudentScreen() {
  const { roomCode, role } = useParams();

  useEffect(() => {
    if (!roomCode) {
      return;
    }

    const generateToken = async (url, userID) => {
      //   try {
      const response = await axios.get(url, {
        userID,
      });
      return response.data;
      //   } catch (error) {
      //     console.error("Error generating token:", error);
      //     throw error; // Rethrow the error
      //   }
    };

    const init = async () => {
      const roomID = roomCode;
      console.log("roomCODE", roomID);
      // Use the 'role' variable defined at the beginning of the component
      const userRole =
        role === "Host"
          ? ZegoUIKitPrebuilt.Host
          : role === "Cohost"
          ? ZegoUIKitPrebuilt.Cohost
          : ZegoUIKitPrebuilt.Audience;

      let sharedLinks = [];
      if (
        userRole === ZegoUIKitPrebuilt.Host ||
        userRole === ZegoUIKitPrebuilt.Cohost
      ) {
        sharedLinks.push({
          name: "Join as co-host",
          url:
            window.location.origin +
            window.location.pathname +
            "?roomID=" +
            roomID +
            "&role=Cohost",
        });
      }
      sharedLinks.push({
        name: "Join as audience",
        url:
          window.location.origin +
          window.location.pathname +
          "?roomID=" +
          roomID +
          "&role=Audience",
      });

      const userName = "Sunny";
      const userID = localStorage.getItem("email");

      const { token } = await generateToken(
        "http://localhost:4000/api/v1/getAccessToken",
        userID
      );
      console.log(token);

      const KitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        2137113653,
        "93546ef2e39a01618620284c0d02bf35",
        roomID,
        userID,
        userName
      );
      const zp = ZegoUIKitPrebuilt.create(KitToken);
      zp.joinRoom({
        container: document.getElementById("videoStreamContainer"), // Use a DOM element directly
        branding: {
          logoURL:
            "https://www.zegocloud.com/_nuxt/img/zegocloud_logo_white.ddbab9f.png",
        },
        scenario: {
          mode: ZegoUIKitPrebuilt.LiveStreaming,
          config: {
            role: userRole, // Use the calculated userRole
          },
        },
        sharedLinks,
        onLeaveRoom: () => {
          // do do something
        },
        showUserList: true,
      });
    };

    init();
  }, []);

  return (
    <>
      <div className="split left">
        <div className="centered">
          <div
            className="video-stream-container"
            id="videoStreamContainer"
          ></div>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h2>John Doe</h2>
          <p>Some text here too.</p>
        </div>
      </div>
    </>
  );
}
