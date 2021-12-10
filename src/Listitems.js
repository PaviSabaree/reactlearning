import React from "react";
import { Component } from "react";

class Listitems extends Component {
    constructor (props) {
        super (props);
        this.state = {
            items : ["apple","banana","grapes"],
            data : [
                {name: "Pavi", age: 28},
                {name: "anu", age: 28}
            ]
           
        };
    }
    render () {
        return (
            <div>
                <tbody> 
                     
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                  {this.state.data.map((e,k)=>{
                      return (
                          <tr key={k}>
                              <td>{e.name}</td>
                              <td>{e.age}</td>
                          </tr>
                      )
                  })
                  } 
                </tbody>
                <ul>{this.state.items.map((i,k)=>
                <li key={k}>{i}</li>
                )}
                </ul>
                </div>
        )
    }
}

export default Listitems;