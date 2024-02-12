import React from 'react'
import pic2 from './Images/pic2.png';
import logo from './Images/html5.webp';
import logo2 from './Images/logo2.png';
import logo3 from './Images/logo3.png';
import logo4 from './Images/logo4.png';
import logo5 from './Images/logo5.png';
import logo6 from './Images/logo6.png';
import logo7 from './Images/logo7.png';
import logo8 from './Images/logo8.png';
import logo9 from './Images/logo9.svg';
import './Navbar.css'
import Contact from './Contact';

export const Skills = () => {
    return (
        <div>
            <div className='pic'>
                <img src={pic2} className='pic1' alt='' />
            </div>
            <div className='skills'>
                <h1 className='aaa'><span>S</span>kills</h1>
                
                <p className='aaa'>Here are some Skills on which i have  been working on for the past 3 months</p>
                <div className='box fadeInUp row'>
                    <div class="card car">
                        <h1 className='aaa'>Frontend</h1>
                        <div class="card-body body">
                        <button ><img src={logo} className='logo'/>  HTML</button>
                        <button><img src={logo2} className='logo'/>  CSS</button>
                        <button><img src={logo3} className='logo'/>  BOOTSTRAP</button>
                        <button><img src={logo4} className='logo'/>  JAVASCRIPT</button>
                        <button><img src={logo5} className='logo'/>  REACT JS</button>
                        </div>
                    </div>
                    <div class="card car">
                        <h1 className='aaa'>Backend</h1>
                        <div class="card-body body">
                        <button><img src={logo6} className='logo'/>   MySQL</button>
                        
                        </div>
                    </div>
                    <div class="card car">
                        <h1 className='aaa'>Others</h1>
                        <div class="card-body body">
                        <button><img src={logo7} className='logo'/>  GIT</button>
                        <button><img src={logo8} className='logo'/>  GITHUB</button>
                        <button><img src={logo9} className='logo'/>  NETLIFY</button>
                        <button>VERSAL</button>
                        
                        </div>
                    </div>
                   

                </div>

            </div>



        </div>
    )
}
export default Skills;