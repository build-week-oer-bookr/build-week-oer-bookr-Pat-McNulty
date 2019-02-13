import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    return (
        <div className='navBarCont'>
            <NavLink to='/books' activeClassName='link'>Home</NavLink>
        </div>
    );
}

export default NavBar;