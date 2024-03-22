import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CourseDetails() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

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
    createdBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithFile = new FormData();
    formDataWithFile.append("title", formData.title);
    formDataWithFile.append("description", formData.description);
    formDataWithFile.append("category", formData.category);
    formDataWithFile.append("createdBy", name);
    formDataWithFile.append("file", file);
    console.log(formDataWithFile);
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
        <input type="text" name="createdBy" value={name} readOnly />
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
