import"./Quiz.css"
import { Howl } from 'howler';
import clickSound from '../../assets/button_sound.wav';
import Wrong from "../../assets/wrong.mp3"
import Correct from "../../assets/correct.wav"
import { useState ,useRef } from "react"
import { data } from "../../assets/data"
import { useLocation, useNavigate } from "react-router-dom"
import {motion} from "framer-motion"


export default function Quiz(){

    let location = useLocation(); 
    const sound = new Howl({src: [clickSound]});
    const wrong = new Howl({src:[Wrong]})
    const correct = new Howl({src:[Correct]})
    const nav = useNavigate();

    let [index,setIndex] = useState(0)
    let [question,setQuestion] = useState(data[location.state.course][location.state.level][index])
    let [lock,setLock] = useState(false)
    let [score,setScore] = useState(0)
    let [result,setResult] = useState(false)
    let [fill,setFill] = useState(0)


    let Option1 = useRef();
    let Option2 = useRef();
    let Option3 = useRef();
    let Option4 = useRef();

    let Option_array = [Option1,Option2,Option3,Option4]

    const checkAns = (event,ans) =>{
        if(!lock){
            if(question.answer == ans){
                correct.play()
                event.target.classList.add("correct")
                setLock(true)
                setScore(prev => prev+1)
            }
            else{
                wrong.play()
                event.target.classList.add("wrong")
                setLock(true)
                Option_array[question.answer - 1].current.classList.add("correct");
            }
        }
    }

    const Next = () =>{
        if(lock){
            if(index === data[location.state.course][location.state.level].length -1){
                setFill(100)
                setResult(true);
                return 0;
            }
            setIndex(++index)
            setQuestion(data[location.state.course][location.state.level][index])
            setFill((index)*100/5)
            setLock(false)
            Option_array.map((option)=>{
                if(option.current != null){
                    option.current.classList.remove("wrong")
                    option.current.classList.remove("correct")
                    return null
                }
            })
        }
    }

    const Send = () =>{
        let result = null
        let per = (score*100)/5
        if(per > 0 && per < 40){
            result = 1
        }
        else if(per >= 40 && per <=80)
        {
            result = 2
        }
        else if(per> 80){
            result = 3
        }
        nav("/level")
        localStorage.setItem(location.state.level,result)
    }

    return(
        <>
        {/* <Navbar fill={fill}/> */}
        <motion.div 
            className="quiz_background"
            initial={{opacity:0 }}
            animate={{opacity:1}}
            transition={{ duration: 1 , delay:1}}
        >
            <div className ="q_container">
                {result?<></>:<>
                <h2>{index+1}. {question.question}</h2>
                <ul>
                    <li ref={Option1} onClick={(e) => checkAns(e,1)}>{question.option1}</li>
                    <li ref={Option2} onClick={(e) => checkAns(e,2)}>{question.option2}</li>
                    {question.option3 ? <li ref={Option3} onClick={(e) => checkAns(e,3)}>{question.option3}</li>:<></>}
                    {question.option4 ? <li ref={Option4} onClick={(e) => checkAns(e,4)}>{question.option4}</li>:<></>}
                </ul>
                <button onClick={Next}>Next</button>
                <div className ="index">{index+1} of {data[location.state.course][location.state.level].length} questions</div>
                </>}
                {result?<>
                {/* <div className="victory"></div> */}
                <h2 className="q_result">You Scored {score} out of {data[location.state.course][location.state.level].length} </h2>
                <button onClick={Send}>Next</button>
                </>:<></>}
            </div>
        </motion.div>
        </>
    )
}