import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedIn = ()=> {
    return(
        <ul className= "right">
            <li><NavLink to='/CreateRecipe'>New Recipies</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating Blue ligthen-1'>PP</NavLink></li>
           
         </ul>
    )
}


export default SignedIn;