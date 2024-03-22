import {useNavigate} from "react-router-dom"
import "./HomePage.css"

export default function Home(){

  const nav = useNavigate();

  const Start = (course) =>{
    nav('/game',{state:true}) 
  }

  return(
      <>
      <div id="container">
        <div id="course">
          <div id="python">
          </div>
          <div id="content">
            <h1 id="title">Python: The Snake</h1>
            <div id="description">Play with the snake to level up your skills in python</div>
            <button id="start_btn" onClick={Start}>Start Now</button>
          </div>
        </div> 
        <div id="course">
          <div id="cplusplus">
          </div>
          <div id="content">
            <h1 id="title">C++ equals C2</h1>
            <div id="description">Play this to improve your understanding with C++</div>
            <button id="start_btn" onClick={Start}>Start Now</button>
          </div>
        </div> 
        <div id="course">
          <div id="python">
          </div>
          <div id="content">
            <h1 id="title">Python: The Snake</h1>
            <div id="description">Play with the snake to level up your skills in python</div>
            <button id="start_btn" onClick={Start}>Start Now</button>
          </div>
        </div> 
      </div>
      </>
  )
}