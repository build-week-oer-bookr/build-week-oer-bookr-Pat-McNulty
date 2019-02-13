import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    return (
        <div className='navBarCont'>
            <h1>OER Bookr</h1>
            <div className='linkCont'>
                <Link to='/books'>Home</Link>
                <Link to='/'>Login</Link>
                <Link to='/register'>Sign Up</Link>
            </div>
        </div>
    );
}

export default NavBar;