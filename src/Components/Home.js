import React from 'react';
import './Navbar.css'
import pic1 from './Images/pic1.png';

import { About } from './About';
import { Skills } from './Skills';
import Project from './Project';
import Contact from './Contact';

export const Home = () => {
  // Empty dependency array ensures that this effect runs only once
  const openLoginProject = () => {
    window.open('https://github.com/NaniAkana?tab=repositories', '_blank');
  };

  return (
    <>
      <div className='nano'>
        <h1 className='fadeInLeft' id='nam'><span>I'M </span>NANI AKANA</h1>
        <h4 id='nam'><span>WEB </span>DEVELOPER</h4>
        <button className='button resume fadeInUp' onClick={openLoginProject}>
          <a href={'https://drive.google.com/file/d/1Uvq5V2ZDC2bewKeH2cKE9KfMQ5dMuGGT/view?usp=sharing'} target='_blank'> Check Resume</a>
        </button>

      </div>
      <div className='pic1'>
        <img src={pic1} className='pic1' alt='' />
      </div>
      <About></About>
      <Skills></Skills>
       <Project />
     <Contact></Contact>
    </>
  )
}
