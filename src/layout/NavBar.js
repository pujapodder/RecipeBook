import React from 'react'
import { Link } from 'react-router-dom';
import SignedIn from './SignedIn.js';
import SignedOut from './SignedOut.js';
const NavBar = ()=> {
    return(
        <nav className= "nav-wrapper pink darken-3">
            <div className="container" >
            <div className="left" >
                <Link to='/' className= "brand-logo"> <b>Recipe Book</b></Link> 
                </div>
                <SignedIn/>
                <SignedOut/>
                      
            
            </div>
            </nav>
    )
}


export default NavBar;