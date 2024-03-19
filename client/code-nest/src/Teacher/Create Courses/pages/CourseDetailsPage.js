import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CForm,
  CButton,
} from "@coreui/react";

const CourseDetailsPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lectureTitle, setLectureTitle] = useState("");
  const [lectureUrl, setLectureUrl] = useState("");

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/view-course/${id}`,
          {
            withCredentials: true,
          }
        );
        setCourse(response.data.course);
      } catch (error) {
        console.error("Error fetching course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleAddLecture = async () => {
    try {
      // Send a POST request to your backend to add the lecture
      const response = await axios.post(
        `http://localhost:4000/api/v1/add-lecture`,
        {
          courseId: id,
          title: lectureTitle,
          url: lectureUrl,
        },
        {
          withCredentials: true,
        }
      );
      // Optionally, you can handle success or update the course state
      console.log("Lecture added successfully:", response.data);
    } catch (error) {
      console.error("Error adding lecture:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <CCard>
        <CCardImage src={course.poster.url} alt="Course Poster" />
        <CCardBody>
          <CCardTitle>{course.title}</CCardTitle>
          <CCardText>{course.description}</CCardText>
          <CCardText>Category: {course.category}</CCardText>
          <CCardText>Created By: {course.createdBy}</CCardText>
          <CCardText>Number of Videos: {course.numOfVideos}</CCardText>
          <CCardText>Views: {course.views}</CCardText>
          <CCardText>Lectures:</CCardText>
          <ul>
            {course.lectures.map((lecture) => (
              <li key={lecture._id}>{lecture.title}</li>
            ))}
          </ul>
          <hr />
          <h3>Add Lecture</h3>
          <CForm>
            <label htmlFor="lectureTitle">Title:</label>
            <input
              type="text"
              id="lectureTitle"
              value={lectureTitle}
              onChange={(e) => setLectureTitle(e.target.value)}
            />
            <label htmlFor="lectureUrl">URL:</label>
            <input
              type="text"
              id="lectureUrl"
              value={lectureUrl}
              onChange={(e) => setLectureUrl(e.target.value)}
            />
            <CButton color="primary" onClick={handleAddLecture}>
              Add Lecture
            </CButton>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default CourseDetailsPage;
