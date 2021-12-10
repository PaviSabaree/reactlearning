import React, { useState } from 'react';
import './App.css';
import Home from './components/home/home';
import Contact from './components/Contact/Contact';

function App() {
  const [name,setName]=useState();
  const [text,setText]=useState();
  
  function handleClick(event){
    setText(name)
    event.preventDefault();
  }
  
  function handleChange(event){
   setName(event.target.value)  
 }

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>Welcome {text}</h2>
     
      <form onSubmit={handleClick}>
        
        <label>Username:&ensp;</label>
        <input onChange={handleChange}
        type="text" name ="username" placeholder="Enter your name"/>
         
         <button type="submit"> Submit</button>
     
      </form>
    
      <Home name="PAVI">
  <p>Welcome to codesand</p>
</Home> 

<Contact name="Teachers"/>
<Contact name="Students"/>

    </div>
  );
}

export default App;
