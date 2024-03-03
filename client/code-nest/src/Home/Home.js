import React from "react";
import Caurosel from "./components/Caurosel";
import "./Home.css";
import Courses from "./components/Courses";
import PlaygroundVid from "./components/PlaygroundVid";
import About from "./components/About";

export default function Home() {
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
    </>
  );
}
