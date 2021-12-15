import React, { Component } from 'react'

class Userprofile extends Component {
    constructor(props){
        super(props);
        this.state = {
             name:'',
             username:''
        };
    }

handleChange=(e)=>{
    this.setState({
        name :e.target.value
    })}
handleClick=(e)=>{
    this.setState({
        username:this.state.name
    })
}    



    render() {
        return (
            <div className='userprofile'>
                <h1>Hello, {this.state.name} Welcome to Reactjs!</h1>
                <h4>Mrs.{this.state.username}</h4>
                <label>Full Name:</label>
                <input type='name' name='username' onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    }
}

export default Userprofile;
