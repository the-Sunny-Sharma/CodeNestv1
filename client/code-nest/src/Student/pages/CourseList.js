import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CourseList.css";

export default function CourseList() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/courses"
        );
        if (response.data.success) {
          setCourses(response.data.courses);
        } else {
          console.error("Failed to fetch courses");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleCoursePage = (course) => {
    navigate(`/course/${course._id}`);
  };

  return (
    <div className="course-list">
      {courses.map((course) => (
        <div
          key={course._id}
          className="course-card"
          onClick={() => handleCoursePage(course)}
        >
          <img src={course.poster.url} alt={course.title} />
          <div className="course-info">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Category: {course.category}</p>
            <p>Created By: {course.createdBy}</p>
            <p>Views: {course.views}</p>
            <p>Number of Videos: {course.numOfVideos}</p>
            <p>Created At: {new Date(course.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
