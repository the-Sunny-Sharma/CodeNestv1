import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    qualifications: "",
    summary: "",
    yearsOfExperience: "",
    subject: "",
    specialization: "",
    languages: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        "http://localhost:4000/api/v1/register-teacher",
        formData,
        {
          withCredentials: true,
        }
      );

      // Check if the request was successful
      if (response.data.success) {
        // If successful, reset the form data
        setFormData({
          title: "",
          qualifications: "",
          summary: "",
          yearsOfExperience: "",
          subject: "",
          specialization: "",
          languages: "",
        });

        // Optionally, you can display a success message to the user
        alert("Teacher registration successful!");
        navigate("/myTeaching");
      } else {
        // If the request was not successful, handle the error
        alert("Teacher registration failed. Please try again.");
      }
    } catch (error) {
      // If an error occurs during the request, handle it here
      console.error("Error registering teacher:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <h2>Register Teacher Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <select name="title" value={formData.title} onChange={handleChange}>
            <option value="">Select Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="null">None</option>
          </select>
        </label>
        <br />
        <label>
          Qualifications:
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Summary:
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
        <label>
          Years of Experience:
          <input
            type="text"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Specialization:
          <input
            type="text"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Languages:
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
