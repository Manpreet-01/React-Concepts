import React, {Component} from "react";
import PureComp from "./PureComp.js";
import RegComp from "./RegComp.js";

class ParentComp extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			name: "aman"
		}
	}
	
	componentDidMount(){
		setInterval(()=>{
			this.setState({
				name: "Aman"
			});
		}, 2000);
	}
	render(){
		console.log("****parent render****")
		return (
			<>
				<div>Parent Component</div>
				<RegComp name={this.state.name}></RegComp>
				<PureComp name={this.state.name}></PureComp>
			</>
		);
	}
}

export default ParentComp;