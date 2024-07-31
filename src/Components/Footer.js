import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Spearheaded by Ujjwal Gupta</h4>
      <h4>Copyright &copy; 2024 UG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/heyujjwal" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ujjwal-gupta-a595811b9/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:guptaujjwal259@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/codeslayer001/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer