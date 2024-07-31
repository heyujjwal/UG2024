import React from 'react'; 
// import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaAws} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiCplusplus, SiExpress, SiFirebase, SiGooglecloud, SiHtml5, SiMongodb, SiNextdotjs, SiPostman, SiRedux, SiSelenium, SiTailwindcss, SiVercel, SiVisualstudiocode} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <SiCplusplus/>,
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Html:<SiHtml5/>,
        Javascript: <DiJavascript1/>,
        Python:<FaPython/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Nextjs: <SiNextdotjs/>,
        Firebase:<SiFirebase/>,
        TailwindCSS: <SiTailwindcss/>,
        Redux:<SiRedux/>,
        Selenium: <SiSelenium/>,
        VScode: <SiVisualstudiocode/>,
        AWS:<FaAws/>,
        GoogleCloud: <SiGooglecloud/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
      <br />
      <span class="icon-name"> <br /><br /><br /> <br /><br />{skill}</span>
    </div>
  )
}

export default Skills
