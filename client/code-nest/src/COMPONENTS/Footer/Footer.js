import './Footer.css';
import insta from "../../ASSETS/svgs/Insta-logo1.svg";
import github from "../../ASSETS/svgs/Git-logo1.svg";
import youtube from "../../ASSETS/svgs/Yt-logo.svg";


export default function Footer(){
    return(
        <>
        <div className="foot-main">
            <div className="first-foot">
                <div className="first-foot-main">
                    <p>CodeNest</p>
                </div>
                <div className="first-foot-content">
                    <p>Unleashing Your Potential With Dynamics</p>
                    <p>Duo Coding: Pairing Passion With</p>
                    <p>Guidance,Virtually</p>
                </div>
            </div>
            <div className='sec-foot'>
                <div className='sec-foot-main'>
                    <p>Courses</p>
                </div>
                <div className='sec-foot-1'>
                    <p>Explore Courses</p>
                </div>
                <div className='sec-foot-2'>
                    <p>Trending Courses</p>
                </div>
                <div className='sec-foot-3'>
                    <p>Top Courses</p>
                </div>
            </div>
            <div className='th-foot'>
                <div className='th-foot-main'>
                    <p>Playground</p>
                </div>
                <div className='th-foot-1'>
                    <p>C with Gaming</p>
                </div>
                <div className='th-foot-2'>
                    <p>Python the Snake</p>
                </div>
                <div className='th-foot-3'>
                    <p>Java and Coffee</p>
                </div>
                <div className='th-foot-4'>
                    <p>C++ Equals C2</p>
                </div>
            </div>
            <div className='ft-foot'>
                <div className='ft-foot-main'>
                    <p>Company</p>
                </div>
                <div className='ft-foot-1'>
                    <p>About Us</p>
                </div>
                <div className='ft-foot-2'>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='fi-foot'>
                <div className='fi-foot-main'>
                    <p>Get in Touch</p>
                </div>
                <div className='fi-foot-content'>
                    <div className='fi-insta'>
                    <img src={insta} alt="Logo" width="30" height="30"/>
                    </div>
                    <div className='fi-gh'>
                    <img src={github} alt="Logo" width="30" height="30"/>
                    </div>
                    <div className='fi-yt'>
                    <img src={youtube} alt="Logo" width="40" height="40"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}