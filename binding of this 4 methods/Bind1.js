import React, {Component} from "react";

// Bind in the constructor by use .bind(this)

class Bind1 extends Component{
	constructor(){
		super();
		this.state={message:"welcome!"}
		this.clickHandler = this.clickHandler.bind(this);
	}
	clickHandler(){
		this.setState({
			message:"good bye",
		})
		console.log("hi1.....", this);
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

export default Bind1;