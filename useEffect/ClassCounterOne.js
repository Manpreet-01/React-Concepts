import React, {Component} from "react";
import "../styles/App.css";

class ClassCounterOne extends Component{
	constructor(props){
		super(props);
		
		this.state={
			count:0,
		}
	}
	
	componentDidMount(){
		console.log(" class mount..")
		document.title = this.state.count;
	}
	
	componentDidUpdate(prevProps, prevState){
		console.log("class update..")
		document.title = this.state.count;
	}
	
	render(){
		console.log("class render..")
		return (
			<div>
				<button onClick={()=>this.setState({count: this.state.count +1})}>{this.state.count}</button>
				class component
			</div>
		);
	}
};
export default ClassCounterOne;