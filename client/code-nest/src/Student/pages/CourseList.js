import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CourseList.css";

export default function CourseList() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:4000/api/v1/courses";
        const response = await axios.get(url);
        if (response.data.success) {
          setCourses(response.data.courses);
        } else {
          setMessage("No courses available");
        }
      } catch (err) {
        // console.error("Error while fetching Courses:", err);
        setMessage("Error fetching courses. Please try again later.");
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  const handleCoursePage = (course) => {
    navigate(`/course/${course._id}`);
  };

  return (
    <>
      <div>
        <div className="search-bar course-override">
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
          <input className="search-input" type="text" placeholder="Search..." />
        </div>
      </div>
      <hr />
      <div className="course-list">
        {message ? (
          // Show error message if present
          <div>{message}</div>
        ) : loading ? (
          // Show spinner animation while loading
          <div className="d-flex justify-content-center my-4 course-spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          courses.map((course) => (
            <div
              key={course._id}
              className="course-card"
              onClick={() => handleCoursePage(course)}
            >
              <img src={course.poster.url} alt={course.title} />
              <div className="course-info">
                <h3>
                  {course.title.length > 30
                    ? course.title.substring(0, 30) + "..."
                    : course.title}
                </h3>
                <p>
                  {course.description.length > 110
                    ? course.description.substring(0, 110) + "..."
                    : course.description}
                </p>
                <p>Category: {course.category}</p>
                <p>Created By: {course.createdBy}</p>
                <p>Views: {course.views}</p>
                <p>Number of Videos: {course.numOfVideos}</p>
                <p>
                  Created At: {new Date(course.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
