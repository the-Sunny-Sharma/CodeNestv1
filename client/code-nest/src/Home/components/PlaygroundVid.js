import React from "react";
import Video from "../../ASSETS/videos/homePlayground.mp4";

export default function PlaygroundVid() {
  return (
    <>
      <div className="parallax-Video">
        <video autoPlay muted loop className="playground_vid">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h2 className="para-text">
          Start your journey today and let the games begin! Your next big win
          awaits.
        </h2>
      </div>
    </>
  );
}
