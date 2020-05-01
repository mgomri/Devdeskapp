import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    
    function closeNav() {
        let sideNav = document.getElementById("mySidenav");
        sideNav.style.width = "0";
      }

    function openNav() {
        document.getElementById("mySidenav").style.width = "16rem";
        
      }

    return (
        <div>
            <span className='open-btn' onClick={openNav} >&#9776; </span>
        
            <div id='mySidenav' className='side-nav'>
                
                <span className='closebtn' onClick={closeNav}>&times;</span>
                <div className='link-div'>
                <NavLink className='link' to='/'>Home</NavLink>
                <NavLink className='link' to='/login'>Login</NavLink>
                <NavLink className='link' to='/signup'>Signup</NavLink>
                <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
                </div>  
            </div>

        </div>
    );
};

export default Menu;