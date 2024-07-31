import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    AheadAppDesc : "Achieved seamless React integration for Ahead App using Next.js,leading development efforts. Enhanced user engagement on the web app through animations using Framer Motion.",
    AheadAppGithub : "https://github.com/heyujjwal/New-Ahead-app",
    AheadAppWebsite : "https://new-ahead-app.vercel.app/",

    NotYourMoveDesc : " • Engineered a highly scalable multiplayer chess application using Chess.js and Node.js/Express.js backend technologies, supporting up to 1000 concurrent game sessions." ,
    NotYourMoveGithub : "https://github.com/heyujjwal/NotYourMove-ChessGame",
    NotYourMoveWebsite : "https://notyourmove-chessgame.onrender.com/",

    TextEditorDesc:"A React and TypeScript text editor that supports Google fonts, font weight adjustments, italics, font size changes, dark/light mode, find and replace, and automatic saving to local storage.",
    TextEditorGithub:"https://github.com/heyujjwal/text-editor-punt",
    TextEditorWebsite:"https://text-editor-punt.vercel.app/",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"",
    WigglesWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="show";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox