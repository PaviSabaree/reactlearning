import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";

function Listkeys () {
// const  Developer = [
//         {name: "Pavi", age: 28, 
//     skill : [
//         {field : 'Angular', type : 'Frontend'},
//         {field : 'Express', type : 'Backend'}
//     ]
// },
//         {name: "anu", age: 28,
//         skill : [
//             {field : 'React', type : 'Frontend'},
//             {field : 'Node', type : 'Backend'}
//         ]
//     }
//     ];

    const person ={
        name : 'Pavithra',
        email: 'pavithra@gmail.com',
        website : 'www.limat.com'
    }
 return (
//       <div>
//  {Developer.map((data,index)=>( 
//             <div key={index}>
// <h1 >{data.name} Skills </h1> 
// <div>
// {data.skill.map((d,index)=>(
//    <p key={index}>{d.field}-{d.type}</p>
// ))}
// </div>
// </div>
// ))}
// </div>

 <div>
   
    {Object.keys(person).map(k=>(
        <p>{person[k ]}</p>
           
    ))}
    
</div>
)
}
export default Listkeys;