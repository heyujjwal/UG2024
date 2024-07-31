import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avtarr.png';
import {CiCoffeeCup} from "react-icons/ci";
import { CiPizza } from 'react-icons/ci';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hey I'm There!</h1>
          <h1>It's me <b className='name'>UJJWAL GUPTA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>Introduction</b></h1>
          <p style={{fontWeight:'500'}}>
          A Dynamic final year Computer Science Engineering student, capable of <b>superhuman coding</b>  binges and writing <b>algorithms</b> that could rival Einstein's theories! <br /> <br />  Driven by innovation and the undying belief that <b>'it compiled!'</b> is the most beautiful phrase in the English language. With an iron grip on programming languages, data structures, and the sacred art of <b>debugging,</b> <br /> <br />I'm destined to revolutionize the technological world... or at least build a really cool app that orders <b>pizza</b> <CiPizza style={{scale:"1.5", rotate:"1deg"}} />  (PS: Also, I love <b>coffee </b> )<CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>  <br /> <br /> Passionate about <b>cloud platforms</b>, where my code can live in the ethereal heavens, far from the judgment of my laptop. <br /> <br />
           <h2>Let's change the world, <b>one error at a time!</b></h2> <br />
             
          </p>
        </div>
        <Tilt>
          
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home