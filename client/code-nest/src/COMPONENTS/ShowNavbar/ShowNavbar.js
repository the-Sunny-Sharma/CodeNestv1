import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function ShowNavbar({children}){

    const [showNavbar,setshowNavbar] = useState(true)
    const location = useLocation()

    useEffect(() =>{
        if(location.pathname == "/game" || location.pathname == "/level" || location.pathname == "/quiz"){
            setshowNavbar(false)
        }
        else{
            setshowNavbar(true)
        }
    },[location])


    return(
        <>
        {showNavbar && children}
        </>
    )
}