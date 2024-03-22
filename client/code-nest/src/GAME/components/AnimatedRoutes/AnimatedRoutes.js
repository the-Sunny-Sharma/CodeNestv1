import {Routes,Route, useLocation } from "react-router-dom"
import Home from '../../pages/Home/Home';
import Course from '../../pages/Course/Course';
import Level from '../../pages/Level/Level';
import Quiz from '../../pages/Quiz/Quiz';
import Animation from '../../pages/Animation/Animation';
import Game from '../../pages/Game/Game';
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes() {

    const location = useLocation();

  return (
    <>
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path="/level" element={<Level/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/animation" element={<Animation/>}/>
            <Route path="/game" element={<Game/>}/>
        </Routes>
    </AnimatePresence>

    </>
  )
}