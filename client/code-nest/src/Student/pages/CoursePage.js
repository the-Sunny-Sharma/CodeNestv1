import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/CoursePage.css";
import { useNavigate } from "react-router-dom";

export default function CoursePage() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/view-course/${courseId}`,
          {
            withCredentials: true, // Include credentials (cookies) in the request
          }
        );
        if (response.data.success) {
          setCourse(response.data.course);
        } else {
          console.error("Failed to fetch course");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchCourse();
  }, [courseId]);

  const handleJoin = async (roomCode) => {
    let role = "Audience";
    navigate(`/student/${roomCode}/${role}`);
  };

  return (
    <div className="course-page">
      {course && (
        <>
          <div className="course-info">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>Category: {course.category}</p>
            <p>Created By: {course.createdBy}</p>
            <p>Views: {course.views}</p>
            <p>Number of Videos: {course.numOfVideos}</p>
            <p>Created At: {new Date(course.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="lecture-list">
            <h3>Lectures</h3>
            {course.lectures.map((lecture) => (
              <div key={lecture._id} className="lecture">
                <h4>{lecture.title}</h4>
                <p>{lecture.description}</p>
                <p>Schedule: {new Date(lecture.schedule).toLocaleString()}</p>
                {lecture.type === "video" &&
                  lecture.videoUrl &&
                  lecture.videoUrl.url && (
                    <video controls>
                      <source src={lecture.videoUrl.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                {["liveStream", "oneOnOne"].includes(lecture.type) && (
                  <div>
                    <p>Room Code: {lecture.roomCode}</p>
                    <button
                      onClick={() => {
                        handleJoin(lecture.roomCode);
                      }}
                    >
                      Join Stream
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
