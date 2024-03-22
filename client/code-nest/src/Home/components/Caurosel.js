import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Image1 from "../../ASSETS/svgs/caurosel1.svg";
import Image2 from "../../ASSETS/svgs/caurosel2.svg";
import Image3 from "../../ASSETS/svgs/caurosel3.svg";
import { useNavigate } from "react-router-dom";

export default function Caurosel() {

  const nav = useNavigate()

  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <div className="d-block w-100">
            <div className="caurosel-text">
              <h5 className="caurosel-btext slide-1-btext">
                Empower Your Learning Journey with Interactive Online Education
              </h5>
              <p className="caurosel-ptext slide-1-ptext">
                Turn your screen into a gateway to knowledge with our immersive
                online learning. Explore interactive lessons, personalized
                guidance, and endless possibilities. Join us to unlock your full
                potential today!
              </p>
            </div>
            <img
              src={Image1}
              alt="CodeNest"
              className="caurosel1"
              style={{ width: "auto", height: "550px" }}
            />
            <button className="slide-1-btn" onClick={() => nav('/signup')}>Start Learning Today</button>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="d-block w-100 img-height">
            <div className="slide-2-text">
              <h5 className="caurosel-btext slide-2-btext">
                Empowering Student-Teacher Connections Through Online Learning{" "}
              </h5>
              <p className="caurosel-ptext slide-2-ptext">
                Bridge the student-teacher gap with our platform's live coding
                collaboration. Students engage directly with teachers, sharing
                screens and ideas in real-time sessions. Together, they
                troubleshoot, explore, and master coding concepts, fostering
                dynamic learning experiences that propel understanding and
                innovation.
              </p>
            </div>
            <img
              src={Image2}
              alt="CodeNest"
              className="caurosel2"
              style={{ width: "auto", height: "400px" }}
            />
            <button className="slide-2-btn" onClick={() => {nav('/signup')}}>Join Us Now!</button>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          {/* changes to be done for 3rd slide */}
          <div className="d-block w-100 img-height">
            <div className="caurosel-text">
              <h5 className="caurosel-btext slide-1-btext">
                Learn Through Play: Engaging Education for Every Student{" "}
              </h5>
              <p className="caurosel-ptext slide-1-ptext">
                Experience the transformative journey of education with our
                immersive gamified learning adventures. Empower students to
                discover, engage, and excel as they embark on exciting quests
                blending knowledge and fun. Join us in revolutionizing learning
                through interactive play today!
              </p>
            </div>
            <img
              src={Image3}
              alt="CodeNest"
              className="caurosel1"
              style={{ width: "auto", height: "520px" }}
            />
            <button className="slide-1-btn" onClick={() =>{nav('/login')}}>Get Started</button>
          </div>
        </CCarouselItem>
      </CCarousel>
    </>
  );
}
