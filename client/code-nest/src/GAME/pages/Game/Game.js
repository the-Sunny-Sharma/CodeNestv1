import { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import clickSound from '../../assets/button_sound.wav';
import gameMusic from "../../assets/game_music.mp3"
import { Howl } from 'howler';
import {easeIn, motion} from "framer-motion"
import "./Game.css"


export default function Game(){

    const nav = useNavigate()
    // const location = useLocation()
    const sound = new Howl({src:[clickSound]})
        const Play =  (course) => {
        nav('/level')
        sound.play()
    }

    // useEffect(()=>{
    //         const game_music = new Howl({
    //             src:[gameMusic],
    //             autoplay:true,
    //             loop:true,
    //             volume:0.2
    //         })
    // },[])

    return(
        <>
        <motion.div 
            className="game_background" 
            initial={{opacity:0, scale: 0.5}}
            animate={{opacity:1, scale: 1}}
            transition={{ ease: "easeIn", duration: 1 , delay:0 }}
            >
            <motion.div className="btn_container">
                <motion.button 
                    className="game_btn" 
                    onClick={Play}
                    initial={{opacity:0 ,x:-5000}} 
                    animate={{opacity:1, x:0}}
                    transition={{ ease: "easeIn", duration: 1.2 , delay:0.5}}
                    >
                    Play
                </motion.button> 
                <motion.button 
                    className="game_btn"
                    initial={{opacity:0 ,x:-5000}} 
                    animate={{opacity:1, x:0}}
                    transition={{ ease: "easeIn", duration: 1.2 , delay:0.5}}
                >
                Settings
                </motion.button>
            </motion.div>
        </motion.div>
        {/* <audio controls autoplay>
          <source src={audio} type="audio/mpeg"/>
        </audio> */}
        </>
    )
}