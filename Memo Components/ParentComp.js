import React, {Component} from "react";
import MemoComp from "./MemoComp.js";
import RegComp from "./RegComp.js";

				// <RegComp name={this.state.name} />


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
				name: "aman"
			});
		}, 2000);
	}
	render(){
		console.log("****parent render****")
		return (
			<>
				<div>Parent Component</div>
				<MemoComp name={this.state.name} />
			</>
		);
	}
}

export default ParentComp;