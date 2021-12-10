import React from 'react'
import './Header.css';
import Flags from "country-flag-icons/react/3x2"

function Header() {
    return (
        <div className='header'>
         <div className='clearfix'>
           
           <img className="flag" src='flag-uae.png'></img>
       {/* <Flags.AE  className="flag"/> */}
       <h1> Business Management System</h1>
       </div>
        </div>
        
    )
}

export default Header
