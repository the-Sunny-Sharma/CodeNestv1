import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const location = useLocation();
  const [userName, setUserName] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/v1/me", {
          withCredentials: true, // Ensure cookies are sent with the request
        });
        // console.log(response.data.user);
        setUserName(response.data.user.fName);
        if (response.data.user.isTeacher === true) setIsTeacher(true);
      } catch (error) {
        console.log(`Error fetching user profile: ${error}`);
      }
    };

    fetchUserProfile();
  }, []);

  // method to jump to the desired element by using the element's id
  const jumpToRelevantDiv = (id) => {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar-my">
        <div className="navbar-logo">
          <Link
            className="logo"
            to="/"
            onClick={() => jumpToRelevantDiv("caurosel")}
          >
            CodeNest
          </Link>
          <div className="search-bar">
            <button>
              <svg
                height="16"
                width="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        <ul className="nav-a">
          {userName ? (
            <>
              <li>
                <Link to="#">Courses</Link>
              </li>
              <li>
                <Link to="#">Community</Link>
              </li>
              {isTeacher ? (
                <li>
                  <Link to="/myTeaching">Manage Classroom</Link>
                </li>
              ) : (
                <li>
                  <Link to="/tutoring/register">Start Tutoring</Link>
                </li>
              )}
              <li>
                <Link to="#">My Learning</Link>
              </li>
              <li>
                <Link to="#">PlayGround</Link>
              </li>
              <li>
                <Link>
                  <svg
                    height="24"
                    weight="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <svg
                    height="32"
                    weight="32"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    fill="#000"
                    data-name="Layer 1"
                    viewBox="-36.63 -36.63 439.6 439.6"
                  >
                    <rect
                      id="SVGRepo_bgCarrier"
                      width={439.6}
                      height={439.6}
                      x={-36.63}
                      y={-36.63}
                      fill="#7ed0ec"
                      strokeWidth={0}
                      rx={219.8}
                    />
                    <g id="SVGRepo_iconCarrier">
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1={69.93}
                          x2={296.41}
                          y1={295.83}
                          y2={295.83}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#16243f" />
                          <stop offset={1} stopColor="#6878b1" />
                        </linearGradient>
                        <style>
                          {
                            ".cls-1{fill:#f2a196}.cls-2{fill:#e88870}.cls-6{fill:#00214e}.cls-7{fill:none;stroke:#00214e;stroke-miterlimit:10}"
                          }
                        </style>
                      </defs>
                      <title>{"Artboards_Diversity_Avatars_by_Netguru"}</title>
                      <path
                        d="M296.41 291.18a184.56 184.56 0 0 1-226.48-1l48.66-22.81a46.83 46.83 0 0 0 6.65-3.82c.64-.44 1.28-.9 1.89-1.38a46.35 46.35 0 0 0 12.78-15.09 44.69 44.69 0 0 0 4.64-14.48 67.91 67.91 0 0 0 .74-9.91c0-3.46-.09-6.92-.21-10.38-.07-2.26-.13-4.53-.16-6.79q-.06-4.75-.1-9.51l2 1 5.2 2.69 2.41.41 27.88 4.74 31.12 5.3.94 32 .31 10.46.15 5.08v.31l1 .42 11.07 4.5Z"
                        className="cls-1"
                      />
                      <path
                        d="M214.82 258a16 16 0 0 1-10.07-1.56l-59.67-48.77c-.07-2.26-.13.1-.16-2.16q-.06-4.75-.1-9.51l2 1 5.2 2.69 2.41.41 27.88 4.74 31.12 5.3.94 32 .31 10.46.15 5.08v.32Z"
                        className="cls-2"
                      />
                      <path
                        d="M296.41 291.18a184.56 184.56 0 0 1-226.48-1l48.66-22.81a46.83 46.83 0 0 0 6.65-3.82c.64-.44 1.28-.9 1.89-1.38 23.55 16.76 55.69 27.33 83.49 14.82 6.62-3 12.7-7.84 16.3-14.06Z"
                        style={{
                          fill: "url(#linear-gradient)",
                        }}
                      />
                      <path
                        d="M278.51 90.9c-.09.59-.2 1.17-.33 1.75a32.08 32.08 0 0 1-3.31 8.49l-.08.14c-.57 1-1.18 2-1.84 3a74.32 74.32 0 0 1-5.72 7.35L266 113c-.83.93-1.67 1.84-2.51 2.74 4.45-1 8.76 3.15 9.55 7.63s-1 9-3.21 13c-3.87 7.08-9.45 11.79-14.36 17.94-3.68 4.58-5.72 10-9.73 14.38l-.3.33c-10.59 11.12-27.31 13.72-41.23 18.47-5 1.72-59.22 17.12-59.22 20.48 0-.73-5.31-6-12-12.41-24-22.79-31.89-58-17.61-88.2 15.35-32.5 50.21-55.69 83.41-66.83 10.38-3.48 22.16-5.82 32-1s14.74 19.77 6.58 27.07a26.16 26.16 0 0 1 17.93-5.21 24.46 24.46 0 0 1 15.72 7.07 27 27 0 0 1 6.95 12.08 24.94 24.94 0 0 1 .54 10.36Z"
                        style={{
                          fill: "#845161",
                        }}
                      />
                      <path
                        d="M278.51 90.9c-.09.59-.2 1.17-.33 1.75-.09.17-.18.35-.27.55-1.13 2.58-1.65 5.36-3 7.94l-.08.14c-.57 1-1.18 2-1.84 3a67.09 67.09 0 0 1-5.72 7.35L266 113c-.83.93-1.67 1.84-2.51 2.74 4.45-1 8.76 3.15 9.55 7.63s-1 9-3.21 13c-3.87 7.08-9.45 11.79-14.36 17.94-3.68 4.58-5.72 10-9.73 14.38a37.7 37.7 0 0 1-8.54-19.47c-1.64-13.26-.64-27.71-1.09-41.13-.28-8.44-3-10 2.06-16.83a74.3 74.3 0 0 1 14-13.29c4.08-2.69 9.33-3.11 14.2-2.42a23.5 23.5 0 0 1 11.58 5 24.94 24.94 0 0 1 .56 10.35Z"
                        style={{
                          fill: "#69303a",
                        }}
                      />
                      <circle cx={134.98} cy={168} r={17} className="cls-1" />
                      <circle
                        cx={140.37}
                        cy={168}
                        r={15.22}
                        className="cls-2"
                      />
                      <path
                        d="m140.6 152 4.4 57 66.44 38.82A19.77 19.77 0 0 0 236.1 238c9.56-19.58 24.9-50.5 22.88-62-3-17-11-23-11-23q1.67-10 3.32-19.94c1.26-7.51 2.87-15.35 1-22.9-2.13-8.66-8.67-12.35-14.05-18.82-14.16 18.24-37.44 28.55-57.77 39C170 135.78 140.6 152 140.6 152Z"
                        className="cls-1"
                      />
                      <path
                        d="M189.72 149.8c6.1 0 6.1 9.38 0 9.43h-.28c-6.1 0-6.1-9.38 0-9.43h.28ZM239.84 148.41c5.67.05 5.67 8.7 0 8.75h-.25c-5.66 0-5.66-8.7 0-8.75h.25Z"
                        className="cls-6"
                      />
                      <path
                        d="M215.13 147.09c-.08.35 13.36 36.13 13.36 36.13l-17.94.87M172.65 140.17a80.57 80.57 0 0 1 28.13-.79M231.7 140.28a55.34 55.34 0 0 1 17.45-1.21"
                        className="cls-7"
                      />
                      <path
                        d="M192.17 194.1a1.85 1.85 0 0 1 2.68-.5c2.08 1.46 5.88 4.56 11.28 5.63 7.36 1.47 13.74-1.48 15.27.42.86 1.07-.19 2.37-2.2 4a19.74 19.74 0 0 1-14.86 3.69c-7.08-1.33-12.4-9.53-12.4-12.44a1.66 1.66 0 0 1 .23-.8Z"
                        style={{
                          fill: "#fff",
                        }}
                      />
                    </g>
                  </svg>
                </Link>
              </li>
              {/* <li>
                <span>Hello, {userName}</span>
              </li> */}

              {/* <li>
                <button>Logout</button>
              </li> */}
            </>
          ) : (
            <>
              <li>
                <Link to="#" onClick={() => jumpToRelevantDiv("courses")}>
                  Explore Courses
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => jumpToRelevantDiv("playground")}>
                  PlayGround
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => jumpToRelevantDiv("about")}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => jumpToRelevantDiv("contact")}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={
                    location.pathname === "/login" ? "active-link" : ""
                  }
                >
                  Login
                </Link>
              </li>
              <li>
                <Link className="signup-btn" to="/signup">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
