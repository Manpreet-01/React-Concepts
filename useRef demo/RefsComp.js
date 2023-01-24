import React, {Component} from "react";

// by default input field is focuced on reload
// input value is accessible using onClick and arrow function

class RefsComp extends Component{
	constructor(props){
		super(props);
		
		this.inputRef = React.createRef();
	}
	
	componentDidMount(){
		this.inputRef.current.focus();
		console.log(this.inputRef);
	}
	
	clickHandler = () => {
		console.log(this.inputRef.current.value)
	}
	
	render(){
		return (
			<>
				<div>Refs Demo</div>
				<input ref={this.inputRef} />
				<button onClick={this.clickHandler} >Click</button>
			</>
		);
	}
}

export default RefsComp;