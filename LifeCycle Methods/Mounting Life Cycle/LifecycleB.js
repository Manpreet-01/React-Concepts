import {Component} from 'react'

class LifecycleB extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			name: "rohan"
		}
		
		console.log("LifecycleB constructor");
	}
	
	componentDidMount(){
		console.log("LifecycleB componentDidMount");
	}
	
	static getDerivedStateFromProps(props, state){
		console.log("LifecycleB getDerivedStateFromProps");
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