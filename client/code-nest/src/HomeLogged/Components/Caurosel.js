import React from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Image1 from "../../ASSETS/svgs/cauroselLogged1.svg";
import Right2 from "../../ASSETS/svgs/cauroselLogged2a.svg";
import left2_1 from "../../ASSETS/svgs/cauroselLogged2b.svg";
import left2_2 from "../../ASSETS/svgs/cauroselLogged2c.svg";

import Image3 from "../../ASSETS/svgs/caurosel3.svg";
import '../HomeLogged.css';

export default function Caurosel() {
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem>
          <div className="d-block w-100">
            <div className="caurosel-text">
              <h5 className="caurosel-btext slide-1-btext">
                Unlock the power of Collaborative Learning in Coding 
              </h5>
              <p className="caurosel-ptext slide-1-ptext">
              Experience the future of education with dynamic duo coding, where teachers and students unite virtually to code together, anytime, anywhere. Unleash your potential as passion meets guidance in synchronized coding sessions, revolutionizing the way we learn and collaborate in the digital age.
              </p>
            </div>
            <img
              src={Image1}
              alt="CodeNest"
              className="caurosel1"
              style={{ width: "auto", height: "550px" }}
            />
            <button className="slide-1-btn-new">Read More</button>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <div className="d-block w-100">
            <div className="top-div-car2">
            <div className="left-img-main">
                <div className="left-img-1">
                <img src={left2_1} alt="Image" width="400" height="500"/>
                </div>
                <div className="left-img-2">
                <img src={left2_2} alt="Image" width="400" height="100"/>
                </div>
            </div>
                <div className="main-content-car2">
                    <div className="head-content-car2">
                        <p>Unlock the Future of Development with Our Trending Courses!</p>
                    </div>
                    <div className="long-content-car2">
                        <p>Explore our trending courses in React, Next.js, and Flutter to stay ahead of the curve and unlock limitless possibilities in the world of software development!</p>
                    </div>
                    <div className="btn-car2">
                        <button className="btn-car2">Explore Now</button>
                    </div>
                </div>
                <div className="right-img">
                    <img src={Right2} alt="Image" width="400" height="700"/>
                </div>
            </div>
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
            <button className="slide-1-btn">Get Started</button>
          </div>
        </CCarouselItem>
      </CCarousel>
    </>
  );
}
