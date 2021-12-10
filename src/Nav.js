import React from 'react'
import './Nav.css'

function Nav() {
    return (
      <>
    

      <ul>
        <img className='displayed' src='logo.png'></img>
        <h2>Alsiraj computer design</h2>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">Client</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
  <li class="dropdown">
    <a href="#dropdown"> 
    Dropdown
    </a>
  
   <ul>
   <div class="dropdown-content">
     <li><a href="#">Link 1</a>
       </li> 
     <li> <a href="#">Link 2</a>
       </li>
     <li> <a href="#">Link 3</a>
       </li>
    </div>
 
   </ul>
   </li> 
   
  
</ul> 
{/* <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  {/* <li class="dropdown">
   Dropdown
   <ul>
   <div class="dropdown-content">
     <li><a href="#">Link 1</a>
       </li> 
     <li> <a href="#">Link 2</a>
       </li>
     <li> <a href="#">Link 3</a>
       </li>
    </div>
 
   </ul>
   </li> 
   
 
</ul> */}
      </>
    )
}
export default Nav;