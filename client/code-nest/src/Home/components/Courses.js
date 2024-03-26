import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [courses, setCourses] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const redirectFullDetails = (courseId) => {
    navigate(`/viewcourse/${courseId}`);
  };

  return (
    <>
      <div className="courses-container">
        {message ? (
          // Show error message if present
          <div>{message}</div>
        ) : loading ? (
          // Show spinner animation while loading
          <div className="d-flex justify-content-center my-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          // Show courses once loaded
          <div className="courses-row-1">
            <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
              {courses.map((course) => (
                <CCol key={course._id} xs>
                  <CCard
                    className="h-100"
                    onClick={() => redirectFullDetails(course._id)}
                  >
                    <CCardImage
                      orientation="top"
                      src={course.poster.url}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <CCardBody>
                      <CCardTitle>{course.title}</CCardTitle>
                      <small className="text-medium-emphasis">
                        {course.createdBy}
                      </small>
                      <CCardText>
                        {course.description.length > 110
                          ? course.description.substring(0, 110) + "..."
                          : course.description}
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </CCol>
              ))}
            </CRow>
          </div>
        )}
      </div>
    </>
  );
}
