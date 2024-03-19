import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
} from "@coreui/react";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/view-course/${course._id}`);
  };

  return (
    <CCard className="course-card">
      <CCardImage src={course.poster.url} alt="Course Poster" />
      <CCardBody className="course-details">
        <CCardTitle>{course.title}</CCardTitle>
        <CCardText>{course.description}</CCardText>
        <CCardText>Category: {course.category}</CCardText>
        <CCardText>Created By: {course.createdBy}</CCardText>
        <button onClick={handleClick} className="btn btn-primary">
          View Course
        </button>
      </CCardBody>
    </CCard>
  );
};

export default CourseCard;
