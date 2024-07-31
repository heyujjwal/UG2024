import React from 'react';
import ProjectBox from './ProjectBox';
import TextEditor from '../images/TextEditor.png';
import NotYourMove from '../images/NotYourMove.png';
import Ahead from '../images/Ahead.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={TextEditor} projectName="TextEditor" />
        <ProjectBox projectPhoto={NotYourMove} projectName="NotYourMove" />
        <ProjectBox projectPhoto={Ahead} projectName="AheadApp" />
      </div>

    </div>
  )
}

export default Projects