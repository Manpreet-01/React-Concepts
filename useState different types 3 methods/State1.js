import React, { Component } from "react";

// setState is ansynchronys so use 
// setState(obj, callback);
//callback is executed after the state is set

class State1 extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		};
	}
	onClickHandler(){
		this.setState(
			{count: 1+this.state.count},
			()=> console.log("callback fired ",this.state.count)
		);
		console.log(this.state.count)
	}
	render(props){
		return (
			<>
				<h1>component1 {this.state.count}</h1>
				<button onClick={() => this.onClickHandler()}>+1</button>
			</>
		);
	}
}

export default State1;