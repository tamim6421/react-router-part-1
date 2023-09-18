import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           
            <nav>
                <span> This is my Website header </span>
               
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'> About</NavLink>
                <NavLink to='/post'> Post</NavLink>
                <NavLink to='/contact'> Contact Us</NavLink>
                <NavLink to='/user'>User</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;