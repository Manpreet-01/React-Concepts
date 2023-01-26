import React, {Component} from "react";
import "../styles/App.css";

class ClassCounterOne extends Component{
	constructor(props){
		super(props);
		
		this.state={
			count:0,
			name:"",
		}
	}
	
	componentDidMount(){
		// console.log(" class mount..")
		document.title = `clicked ${this.state.count} times`;
	}
	
	componentDidUpdate(prevProps, prevState){
		if(prevState.count !== this.state.count){
			console.log("class update..")
			document.title = `clicked ${this.state.count} times`;
		}
	}
	
	onChangeHandler(e){
		console.log(e.target.value)
		this.setState({
			name: e.target.value,
		})
	}
	
	onClickHandler(){
		this.setState({
			count: 1+this.state.count,
		})
	}
	
	render(){
		// console.log("class render..")
		return (
			<div>
				<input type="text" value={this.state.name} onChange={e=>this.onChangeHandler(e)} />
				<br />
				<button onClick={()=>{this.onClickHandler()}}>{this.state.count}</button>
				class component
			</div>
		);
	}
};
export default ClassCounterOne;