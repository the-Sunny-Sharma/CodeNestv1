import React, { useEffect } from "react";
import Caurosel from "./components/Caurosel";
import "./Home.css";
import Courses from "./components/Courses";
import PlaygroundVid from "./components/PlaygroundVid";
import About from "./components/About";
import Footer from "../COMPONENTS/Footer/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      navigate("/h");
      return;
    }
  }, []);
  return (
    <>
      <section id="caurosel">
        <Caurosel />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="playground">
        <PlaygroundVid />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact"></section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
