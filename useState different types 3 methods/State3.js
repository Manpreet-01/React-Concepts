import React, { Component } from "react";

//multiple state change  necessary to use callback
// useState(props, obj) is also used

class State2 extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		};
	}
	onClickHandler(){
		this.setState(prevState => ({count: 1+prevState.count+this.props.surplus}),
			()=> console.log("callback fired ",this.state.count)
		);
		console.log(this.state.count)
	}
	
	onClickHandlerFive(){
		this.onClickHandler();
		this.onClickHandler();
		this.onClickHandler();
		this.onClickHandler();
		this.onClickHandler();
	}
	render(props){
		return (
			<>
				<h1>component3 {this.state.count}</h1>
				<button onClick={() => this.onClickHandler()}>+1</button>
				<button onClick={() => this.onClickHandlerFive()}>+5</button>
			</>
		);
	}
}

export default State2;