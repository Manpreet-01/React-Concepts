import {Component} from 'react'

class LifecycleB extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			name: "rohan"
		}
		
		console.log("LifecycleB constructor");
	}
	
	static getDerivedStateFromProps(props, state){
		console.log("LifecycleB getDerivedStateFromProps");
		return null;
	}
	
	componentDidMount(){
		console.log("LifecycleB componentDidMount");
	}
	
	shouldComponentUpdate(){
		console.log("LifecycleB shouldComponentUpdate");
		return true;
	}
	
	componentDidUpdate(){
		console.log("LifecycleB componentDidUpdate");
	}
	
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("LifecycleB getSnapShotBeforeUpdate");
		return null;
	}
	
	render () {
		console.log("LifecycleB render");
		
		return (
			<div className="App">LifecycleB</div>
		);
	}
}

export default LifecycleB;