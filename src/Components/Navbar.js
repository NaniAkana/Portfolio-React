import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';



export const Navbar = () => {
    const openLoginProject = () => {
        window.open('https://github.com/NaniAkana?tab=repositories', '_blank');
    };
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" id='logo' to=''>Nani</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <NavLink class="nav-link" exact to='/' id='aa' activeClassName='active'>Home</NavLink>
                            <NavLink class="nav-link" to='/about' id='aa' activeClassName='active'>About</NavLink>
                            <NavLink class="nav-link" to='/skills' id='aa' activeClassName='active'>Skills</NavLink>
                            <NavLink class="nav-link" to='/projects' id='aa' activeClassName='active'>Projects</NavLink>
                            <NavLink class="nav-link" to='/contact' id='aa' activeClassName='active'>Contact Us</NavLink>
                            <div className='login'>
                                <button className='button' onClick={openLoginProject}>
                                   <a href={'https://github.com/NaniAkana?tab=repositories'} target='_blank'> GITHUB</a>
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </nav></div>
    )
}
export default Navbar;
