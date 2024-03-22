import "./Level.css"
import { useNavigate } from "react-router-dom"
import { Howl } from "howler"
import clickSound from '../../assets/button_sound.wav';
import { FaStar } from "react-icons/fa";
import { useEffect , useRef } from "react";
import {easeIn, mirrorEasing, motion} from "framer-motion"

export default function Level(){

    const nav = useNavigate()
    const sound = new Howl({src:[clickSound]})

    const level1 = useRef();
    const level2 = useRef();
    const level3 = useRef();
    const level4 = useRef();
    const level5 = useRef();

    const levels = [level1,level2,level3,level4,level5]

    const Open =  (course,level) => {
        sound.play()
        nav('/quiz',{state:{course,'level':level}})
    }

    useEffect(() =>{
        // console.log("Hello");
        [...Array(localStorage.length)].map((ele,index)=>{
            // console.log(Object.keys(localStorage).sort())
            switch(parseInt(localStorage.getItem(Object.keys(localStorage).sort()[index]))){
                case 3 : levels[index].current.childNodes[3].classList.add("fill")
                case 2 : levels[index].current.childNodes[2].classList.add("fill")
                case 1 : levels[index].current.childNodes[1].classList.add("fill")
            }
        })
    },[localStorage])

    return(
        <>
        
        <motion.div className="game_background"
            initial={{x:-3000}}
            animate={{ x:[0,900,0]}}
            exit={{x:3000}}
            transition={{ ease: "easeIn", duration: 1.3 , delay:0}}
        >
            <div ref={level1} className="container_level1">
                <motion.button 
                    className="level1" 
                    onClick={() => Open('python','level1')}
                    initial={{y:-5000}}
                    animate={{y:0}}
                    transition={{duration:1,delay:0.5}}
                >
                1
                </motion.button>
                <FaStar className="star"  size={50}/>
                <FaStar className="star"  size={50}/>
                <FaStar className="star"  size={50}/>
            </div>
            <div ref={level2} className="container_level2" >
                <motion.button 
                    className="level2" 
                    onClick={() => Open('python','level2')}
                    initial={{y:-5000}}
                    animate={{y:0}}
                    transition={{duration:1,delay:0.5}}
                >
                2
                </motion.button>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
            </div>
            <div ref={level3} className="container_level3">
                <motion.button 
                    className="level3" 
                    onClick={() => Open('python','level3')}
                    initial={{y:-5000}}
                    animate={{y:0}}
                    transition={{duration:1,delay:0.5}}
                >
                3
                </motion.button>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
            </div>
            <div ref={level4} className="container_level4">
                <motion.button 
                    className="level4" 
                    onClick={() => Open('python','level4')}
                    initial={{y:-5000}}
                    animate={{y:0}}
                    transition={{duration:1,delay:0.5}}
                >
                4
                </motion.button>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
            </div>
            <div ref={level5} className="container_level5">
                <motion.button 
                    className="level5" 
                    onClick={() => Open('python','level5')}
                    initial={{y:-5000}}
                    animate={{y:0}}
                    transition={{duration:1,delay:0.5}}
                >
                5
                </motion.button>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
                <FaStar className="star" size={50}/>
            </div>
        </motion.div>
        </>
    )
}