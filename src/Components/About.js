import React from 'react';
import pic3 from './Images/IMG_20231024_214643_505.jpg';
import Contact from './Contact';

export const About = () => {
    
  return (
    <div>
        <div className='Home'>
                <div className='aboutpic fadeInLeft'>
                    <img src={pic3} className='pic3'/>

                </div>
                <div className='about'>
                    <h1>
                        <span>A</span>BOUT
                        <hr></hr>
                    </h1>
                    <h4><span>N</span>ani Akana Highly motivated Front End Developer with a solid understanding of front end techniques and tools. Seeking an entry-level position as a Web Developer to leverage my skills in Html, Css, Bootstrap, JavaScript, React JS and Problem-solving to provide actionable insights and support business decision-making.</h4>
                    <div className='icon'>
                        <ul>
                            <li><a href={'https://www.instagram.com/nani_akana/'} className='fa fa-instagram' target='_blank'> </a></li>
                            <li><a href={'https://www.instagram.com/nani_akana/'} className='fa fa-facebook' target='_blank'> </a></li>
                            <li><a href={'https://github.com/NaniAkana?tab=repositories'} className='fa fa-github' target='_blank'> </a></li>
                            <li><a href={'https://www.linkedin.com/in/nani-akana/'} className='fa fa-linkedin'   data-bs-toggle="tooltip" data-bs-title="Another tooltip"> </a></li>
                        </ul>
                        
                    </div>
                   


                </div>

            </div>
  
    </div>
    
  )
}
export default About;