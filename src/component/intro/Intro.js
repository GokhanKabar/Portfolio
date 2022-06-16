import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import logo from "../assets/moi.png"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay:1500,
            backSpeed:10,
        strings: ["Développeur Web" , "Développeur Mobile" ,"Développeur Logiciel"],
    });
 },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>Salut ! Je suis</h2>
                <h1>Gokhan Kabar</h1>
                <h3>Étudiant à l'Université Paris 8 </h3>
                <h3><span ref={textRef}></span></h3>
            </div>
            </div>
            <a href="#portfolio">
            </a>
        </div>
    )
}
