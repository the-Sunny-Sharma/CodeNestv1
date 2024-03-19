import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing pages
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Home from "./Home/Home";
import ForgotPassword from "./Login/ForgotPassword";
import HomeLogged from "./HomeLogged/HomeLogged";
import Register from "./Teacher/Register/Register";
import CreateCourse from "./Teacher/Create Courses/CreateCourse";
import CourseDetails from "./Teacher/Create Courses/CourseDetails";
import CourseDetailsPage from "./Teacher/Create Courses/pages/CourseDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/h" element={<HomeLogged />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* Teacher pages */}
          <Route path="/tutoring/register" element={<Register />} />
          <Route path="/myTeaching" element={<CreateCourse />} />
          <Route path="/myTeaching/createCourse" element={<CourseDetails />} />
          <Route path="/view-course/:id" element={<CourseDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
