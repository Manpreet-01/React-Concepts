import {Component} from 'react'
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
	
	render () {
		console.log("LifecycleA render");

		return (
			<>
				<div className="App">LifecycleA</div>
				<LifecycleB />
			</>
		);
	}
}

export default LifecycleA;