import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect'
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >
          <Typewriter
          options={{
            strings: ['ABOUT ME?',
              'KNOW ME MORE!'
             ],
            autoStart: true,
            loop: true,
          }}
        />
          </h1>
          <p>
Hey! I'm <b>Ujjwal Gupta</b> from Barabanki, Uttar Pradesh. As I embark on my final year of B.Tech in <b>Computer Science and Engineering</b> at <b>KNIT, Sultanpur</b>, I'm a <b>FullStack Developer</b> as well as <b>DSA Practioner</b>,I bring a fervent passion for innovation and a knack for turning raw ideas into impactful digital solutions. <br/><br/>

With a robust command over programming languages like <b>C++, C, Python, and JavaScript</b>, I excel in using frameworks and libraries such as <b>React.js, Node.js, Express.js, MongoDB, Next.js, Bootstrap, Tailwind CSS, and GSAP</b>. My enthusiasm for open-source development and cloud computing drives my exploration of <b>AWS and Google Cloud platforms</b>.
<br /><br />
As a <b>Frontend Intern</b> at Ineubytes Technology, I enhanced user engagement by 15% through dynamic features with React.js. As <b>Software Developer Intern</b> at Neuronexus Innovation, I optimized backend processes, reducing manual effort by 70% and improving system stability while developing user-friendly dashboards with Next.js and React.js.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography & different forms of art, To know me more you can check out my instagram <a href="https://www.instagram.com/ujjwal.gupta_411/" target='_blank'>here</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'><b className='techstack'>Tech Stack</b> </h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Nextjs'/>
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='Html'/>
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Typescript'/>
        <Skills skill='Javascript' />
        <Skills skill='Python'/>
        <Skills skill='TailwindCSS'/>
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Firebase'/>
        
        <Skills skill='Redux'/>
        <Skills skill='Selenium'/>
        <Skills skill='VScode'/>
        <Skills skill='AWS'/>
        <Skills skill='GoogleCloud'/>
      </div>
    </>
  )
}

export default About