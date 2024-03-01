import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing pages
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import Navbar from "./COMPONENTS/Navbar/Navbar";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
