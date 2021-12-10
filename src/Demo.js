import { render } from "@testing-library/react";
import React, {Component} from "react";


class Demo extends Component {

    constructor (props){
        super(props);
        this.state = {
            counter : 0,
            enable :false,
            textContent:""
        };
    }

    handleClickIncrement=()=>{
this.setState ((prev,props)=>(
    {counter:prev.counter+1}
));
    }

    handleClickDecrement=()=>{
        this.setState ((prev,props)=>(
            {counter:prev.counter-1}
        ));
            }

            test=()=>{
                this.setState((prev,props)=>({enable:!prev.enable})
                )}

      handleChange=(e)=>{
          
          this.setState({textContent:e.target.value})
      }          

    render(){

return (

    <div>
<button onClick={this.handleClickIncrement}>Click for +</button>
<button onClick={this.handleClickDecrement}>Click for -</button>
<p>You clicked {this.state.counter} times</p>

<input type="textbox" onChange={this.handleChange}/>

<p>{this.state.textContent}</p>

<label>Enable
<input type="checkbox" onClick={this.test}/>
</label>

<p>It is {this.state.enable?"enable":"disable"}</p>
    </div>
)
    }

}

// const test=()=>{
//     alert('Welcome ')
// }

// function Demo(){
//     return (
//         <div>
//             <button onClick={test}>Click</button>
//         </div>
//     )
// }
export default Demo;