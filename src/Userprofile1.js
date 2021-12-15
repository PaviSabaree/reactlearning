import React from 'react'
import { useState } from 'react/cjs/react.development';

function Userprofile1() {
    const [user,setUser]=useState({
        name:''
    });
    const [username,setUsername]=useState();

   function handleChange(e){
       const {name,value}=e.target
        setUser({user,[name]:value})
    }
     function handleClick(e){
            setUsername(user.name)
        }    
        

    return (
        <div className='userprofile-1'>
             <h1>Hello, {user.name} Welcome to Reactjs!</h1>
                <h4>Mrs.{username}</h4>
                <label>Full Name:</label>
                <input type='name' name='name' onChange={handleChange}></input>
                <button onClick={handleClick}>Save</button>
        </div>
    )
}

export default Userprofile1;
