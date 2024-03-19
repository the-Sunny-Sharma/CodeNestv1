import React from "react";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-codenest">
          <h2>About CodeNest</h2>
          <div className="text-split-flex">
            <div className="left-content">
              <h3>Our History</h3>
              <p>
                CodeNest emerged with a vision to redefine education, driven by
                a team passionate about making learning accessible and engaging.
                Since our inception, we've evolved into a dynamic platform,
                dedicated to inspiring learners worldwide. With each milestone,
                we reaffirm our commitment to innovation and excellence, shaping
                the future of education.
              </p>
            </div>
            <div className="right-content">
              <h3>Our Mission</h3>
              <p>
                To empower learners of all ages to unlock their full potential
                through accessible and engaging education. We're committed to
                fostering a love for learning, inspiring creativity, and
                cultivating the skills needed to thrive in an ever-evolving
                world. Join us on this journey of discovery and growth!
              </p>
            </div>
          </div>
        </div>
        <div className="team">
          <h3>Our Team</h3>
          <div className="team-container">
            <div className="member">
              <img
                width="200px"
                height="200px"
                src="https://insertface.com/fb/883/funny-costume-fat-men-fancy-882724-fkqnu-fb.jpg"
                alt="Member 1"
              />
              <p className="mem-name">Brijesh</p>
              <p>Full Stack Developer</p>
            </div>
            <div className="member">
              <img
                width="200px"
                height="200px"
                src="https://insertface.com/fb/883/cosplay-costume-fat-men-882527-5v8f2-fb.jpg"
                alt="Member 2"
              />
              <p className="mem-name">Kamlesh</p>
              <p>Full Stack Developer</p>
            </div>
            <div className="member">
              <img
                width="200px"
                height="200px"
                src="https://insertface.com/fb/1014/best-cosplay-fat-guys-face-1013971-4zpji-fb.jpg"
                alt="Member 3"
              />
              <p className="mem-name">Suresh</p>
              <p>Full Stack Developer</p>
            </div>
            <div className="member">
              <img
                width="200px"
                height="200px"
                src="https://insertface.com/fb/1016/good-halloween-costume-big-1015736-qqc4u-fb.jpg"
                alt="Member 4"
              />
              <p className="mem-name">Mahesh</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
