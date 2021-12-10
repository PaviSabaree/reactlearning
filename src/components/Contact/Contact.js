import React from 'react';
import './Contact.css'


function Contact(props){
  var nm=props.name.toUpperCase();
  return(
    <div className="test">
         
      <h1>Contact {nm}</h1>
<label>Email</label>
<input type='text'/><br/>
<label>Message</label>
<textarea></textarea>
<button>Send</button>
      </div>
  )
}
export default Contact;