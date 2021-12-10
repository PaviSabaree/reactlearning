import React from "react";

class Buttonevent extends React.Component {
    constructor(props){
        super(props);
this.state = {
    buttonText : "Clik me, please"
};
//this.handleClick = this.handleClick.bind(this);
    }

    handleClick (){
this.setState ({
    buttonText : "Thanks, been clicked"
})
    }

    render (){
// const {buttonText} = this.state;
        return (
            <div>
<button onClick={()=>this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default Buttonevent;