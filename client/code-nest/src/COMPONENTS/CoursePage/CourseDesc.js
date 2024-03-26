import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CourseDesc.css";

// Spinner component
const Spinner = () => (
  <div className="spinner">
    <i className="fa fa-spinner fa-spin"></i> Loading...
  </div>
);

export default function CourseDesc() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/view-course/${courseId}`
        );
        if (response.data.success) {
          setCourse(response.data.course);
        } else {
          console.error("Failed to fetch course");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        // Set loading to false after fetching course data
        setLoading(false);
      }
    };

    fetchCourse();
  }, [courseId]);

  return (
    <div className="course-container">
      {loading ? (
        <Spinner /> // Render spinner while loading
      ) : course ? (
        <>
          <div className="poster">
            <img src={course.poster.url} alt={course.title} />
          </div>
          <div className="details">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>Views: {course.views}</p>
            <p>Category: {course.category}</p>
            <p>Created By: {course.createdBy}</p>
            <p>Created At: {new Date(course.createdAt).toLocaleDateString()}</p>
            <h2>Lectures:</h2>
            <div className="lecture-cards">
              {course.lectures.map((lecture) => (
                <div key={lecture._id} className="lecture-card">
                  <h3>{lecture.title}</h3>
                  <p>{lecture.description}</p>
                  <p>Schedule: {new Date(lecture.schedule).toLocaleString()}</p>
                  {lecture.type === "video" && (
                    <video controls>
                      <source src={lecture.videoUrl.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {lecture.type === "liveStream" && (
                    <p>Live stream room code: {lecture.roomCode}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Failed to load course.</p>
      )}
    </div>
  );
}
