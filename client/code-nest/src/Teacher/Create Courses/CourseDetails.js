import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchTeacherName = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/teacher/me",
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {
          const { fName, lName } = response.data.data.user;
          const title = response.data.data.title;
          const teacherName = `${title} ${fName} ${lName}`;
          setName(teacherName);
          // Update the formData state to include createdBy
          setFormData((prevFormData) => ({
            ...prevFormData,
            createdBy: teacherName,
          }));
        }
      } catch (error) {
        console.error("Error fetching teacher details:", error);
      }
    };

    fetchTeacherName();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    createdBy: "", // Add createdBy field to store the name of the teacher
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/createCourse",
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setFormData({
          title: "",
          description: "",
          category: "",
          createdBy: "",
        });

        alert("Course Created Successfully");
        navigate("/myTeaching");
      } else {
        alert("Request failed. Please try again.");
      }
    } catch (error) {
      console.error("Error while creating course:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <input
          type="text"
          name="createdBy"
          value={name} // Use value instead of defaultValue
          readOnly // Make the field read-only to prevent user modification
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
