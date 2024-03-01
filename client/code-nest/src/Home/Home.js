import React from "react";
import Caurosel from "./components/Caurosel";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="caurosel">
        <Caurosel />
      </section>
      <section id="courses"></section>
      <section id="playground"></section>
      <section id="about"></section>
      <section id="Contact"></section>
    </>
  );
}
