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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
