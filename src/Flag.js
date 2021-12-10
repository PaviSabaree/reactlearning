import React from "react";
import './Flag.css'
import Flags from "country-flag-icons/react/3x2"

function Flag (){
    return (
        <div className="flag-container">
        <Flags.AE title="Flag" className="flag"/>
        </div>
    );

}
 
  

export default Flag;