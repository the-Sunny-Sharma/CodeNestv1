import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link className="logo" to="/">
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
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          <li>
            <Link to="#">Explore Courses</Link>
          </li>
          <li>
            <Link to="#">PlayGround</Link>
          </li>
          <li>
            <Link to="#">About Us</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
          <li>
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active-link" : ""}
            >
              Login
            </Link>
          </li>
          <li>
            <Link className="signup-btn" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
