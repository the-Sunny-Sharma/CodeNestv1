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
// ---------------GAME--------------------
import HomePage from "./GAME/pages/HomePage/HomePage";
import Course from "./GAME/pages/Course/Course";
import Level from "./GAME/pages/Level/Level";
import Quiz from "./GAME/pages/Quiz/Quiz";
import Animation from "./GAME/pages/Animation/Animation";
import Game from "./GAME/pages/Game/Game";
import { AnimatePresence } from "framer-motion";
import ShowNavbar from "./COMPONENTS/ShowNavbar/ShowNavbar";
import Codechat from "./Codechat/Codechat";
import CourseList from "./Student/pages/CourseList";
import CoursePage from "./Student/pages/CoursePage";
import StudentScreen from "./Unity/StudentView/StudentScreen";
import CourseDesc from "./COMPONENTS/CoursePage/CourseDesc";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShowNavbar>
          <Navbar />
        </ShowNavbar>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/h" element={<HomeLogged />} />

            <Route path="/viewcourse/:courseId" element={<CourseDesc />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/all-courses" element={<CourseList />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route
              path="/student/:roomCode/:role"
              element={<StudentScreen />}
            />
            {/* Teacher pages */}
            <Route path="/tutoring/register" element={<Register />} />

            {/* <Route path="/view-course/:id" element={<CourseDetailsPage />} /> */}
            <Route path="/codechat" element={<Codechat />} />

            {/* -------------------Game---------------------- */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/course" element={<Course />} />
            <Route path="/level" element={<Level />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
}

export default App;
