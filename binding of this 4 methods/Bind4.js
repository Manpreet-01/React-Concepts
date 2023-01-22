import React, {Component} from "react";

// use arrow function as a class property

class Bind4 extends Component{
	constructor(){
		super();
		this.state={message:"welcome!"}
	}
	clickHandler = () => {
		this.setState({
			message:"good bye",
		})
		console.log("hi4.....", this);
	}
	render(){
		return (
			<>
				<h1>{this.state.message} from {this.props.name}</h1>
				<button onClick={this.clickHandler}>Click</button>
			</>
		);
	}
}

export default Bind4;