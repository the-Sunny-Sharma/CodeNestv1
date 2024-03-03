import React from "react";
import Caurosel from "./components/Caurosel";
import "./Home.css";
import Courses from "./components/Courses";

export default function Home() {
  return (
    <>
      <section id="caurosel">
        <Caurosel />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="playground"></section>
      <section id="about"></section>
      <section id="contact"></section>
    </>
  );
}
