import React, {Component} from "react";

// Bind in onClick function using .bind(this)

class Bind2 extends Component{
	constructor(){
		super();
		this.state={message:"welcome!"}
	}
	clickHandler(){
		this.setState({
			message:"good bye",
		})
		console.log("hi2.....", this);
	}
	render(){
		return (
			<>
				<h1>{this.state.message} from {this.props.name}</h1>
				<button onClick={this.clickHandler.bind(this)}>Click</button>
			</>
		);
	}
}

export default Bind2;