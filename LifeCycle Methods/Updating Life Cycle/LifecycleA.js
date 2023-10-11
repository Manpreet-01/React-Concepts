import React, {Component, setState} from 'react'
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			name: "rohan"
		}
		
		console.log("LifecycleA constructor");
	}
	
	static getDerivedStateFromProps(props, state){
		console.log("LifecycleA getDerivedStateFromProps");
		return null;
	}
	
	componentDidMount(){
		console.log("LifecycleA componentDidMount");
	}
	
	shouldComponentUpdate(){
		console.log("LifecycleA shouldComponentUpdate");
		return true;
	}
	
	componentDidUpdate(){
		console.log("LifecycleA componentDidUpdate");
	}
	
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("LifecycleA getSnapShotBeforeUpdate");
		return null;
	}
	
	changeState(){
		this.setState({
			name: "sham",
		});
	}
	
	render () {
		console.log("LifecycleA render");

		return (
			<>
				<div className="App">LifecycleA</div>
				<button onClick={() => this.changeState()}>Change State of A</button>
				<LifecycleB />
			</>
		);
	}
}

export default LifecycleA;