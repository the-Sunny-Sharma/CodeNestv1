import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const navigate = useNavigate();
  const [teacherName, setTeacherName] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    createdBy: "",
    file: null,
  });

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
          const { fName, lName, title } = response.data.data.user;
          const teacherName = `${title} ${fName} ${lName}`;
          setTeacherName(teacherName);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    formDataWithFile.append("title", formData.title);
    formDataWithFile.append("description", formData.description);
    formDataWithFile.append("category", formData.category);
    formDataWithFile.append("createdBy", formData.createdBy);
    formDataWithFile.append("file", formData.file);
    console.log(formData.title);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/createCourse",
        formDataWithFile,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        setFormData({
          title: "",
          description: "",
          category: "",
          file: null,
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
          value={formData.createdBy}
          readOnly
        />
        <br />
        <label>
          Choose file:
          <input type="file" name="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
