import React from "react";

class Buttoncounter extends React.Component {
    constructor (props){
        super(props);
this.state={
    count:0
};
    }

    handleClick=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

render() {
    return (
        <div className ='app'>
<h1>Button presses:{this.state.count} times</h1>
<button onClick={this.handleClick}>Add one</button>

        </div>
    )
}
}
export default Buttoncounter;