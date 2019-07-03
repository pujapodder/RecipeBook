import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOut = ()=> {
    return(
        <ul className= "right">
            <li><NavLink to='/SignUp'>Sign Up</NavLink></li>
            <li><NavLink to='/Login'>Log In</NavLink></li>
           
           
         </ul>
    )
}


export default SignedOut;