import React, { Component } from "react";

//use prevState
// setState((prev)=>(count: count+prev.count), callback);

class State2 extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		};
	}
	onClickHandler(){
		this.setState(prevState => ({count: 1+prevState.count}),
			()=> console.log("callback fired ",this.state.count)
		);
		console.log(this.state.count)
	}
	render(props){
		return (
			<>
				<h1>component2 {this.state.count}</h1>
				<button onClick={() => this.onClickHandler()}>+1</button>
			</>
		);
	}
}

export default State2;