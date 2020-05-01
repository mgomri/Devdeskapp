import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <div className='navbar' >
            <NavLink className='link' to='/'>Home</NavLink>
            <NavLink className='link' to='/login'>Login</NavLink>
            <NavLink className='link' to='/signup'>Signup</NavLink>
            <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
        </div>
    );
};

export default Navbar;