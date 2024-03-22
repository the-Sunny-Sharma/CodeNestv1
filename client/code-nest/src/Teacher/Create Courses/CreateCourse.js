import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CourseCard from "./component/CourseCard";

export default function CreateCourse() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/teacher/my-courses",
          {
            withCredentials: true,
          }
        );
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/myTeaching/createCourse")}>
        Create New Course
      </button>
      <div>
        <div id="output"></div>
        <form method="get">
          <select
            data-placeholder="Choose tags ..."
            name="tags[]"
            multiple
            class="chosen-select"
          >
            <option value="Engineering">Engineering</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Plumbing">Plumbing</option>
            <option value="Electical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="HVAC">HVAC</option>
          </select>
        </form>
      </div>
      <div>
        <h2>Your Existing Courses</h2>
        <div className="course-container">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
        {courses.length === 0 && <p>You have not created any courses yet.</p>}
      </div>
    </>
  );
}
