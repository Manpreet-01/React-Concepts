import React, {Component} from "react";

// use arrow function in render function's onClick function

class Bind3 extends Component{
	constructor(){
		super();
		this.state={message:"welcome!"}
	}
	clickHandler(){
		this.setState({
			message:"good bye",
		})
		console.log("hi3.....", this);
	}
	render(){
		return (
			<>
				<h1>{this.state.message} from {this.props.name}</h1>
				<button onClick={()=>this.clickHandler()}>Click</button>
			</>
		);
	}
}

export default Bind3;