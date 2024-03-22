import { useNavigate } from "react-router-dom"
import "./Course.css"

export default function Course(){

    const nav = useNavigate();

    const Start = () =>{
        nav('/quiz')
    }


    return(
        <>
        <div id="heading">
            <h1 id="title">Python: The Snake</h1>
            <div id="description">Play with the snake to level up your skills in python</div>
        </div>
        <div id="learnings">
            What you'll learn
        </div>
        <div id="content">
            <h1>Course Content</h1>
            <h4 id="heading2">6 lesson</h4>
            <div id="lesson">
                <p>Introduction</p>
                <button id="start_btn" onClick={Start}>Start</button>
            </div>
            <div id="lesson">
                <p>Level 2</p>
                <button id="start_btn" onClick={Start}>Start</button>
            </div>
            <div id="lesson">
                <p>Level 3</p>
                <button id="start_btn" onClick={Start}>Start</button>
            </div>
        </div>
        </>
    )
}