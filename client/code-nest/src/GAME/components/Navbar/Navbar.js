import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar(props){

    const [filled, setFilled] = useState(props.fill);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
        setFilled(props.fill)
		if (filled < 100 && isRunning) {
			setTimeout(() => {
                setFilled(prev => prev + 2)
            }, 50)
		}
	},[props, isRunning])

    return(
        <>
        <nav id="navbar">
            <Link className="link" to="/">Logo</Link>
            <Link className="link" to ="/">Introduction to Python Programming</Link>
		    <div className="progressbar">
			    <div style={{
				height: "100%",
				width: `${filled}%`,
				backgroundColor: "#a66cff",
				transition:"width 0.5s"     
			    }}></div>
			    <span className="progressPercent">{ filled }%</span>
	        </div>
        </nav>
        </>
    )
}