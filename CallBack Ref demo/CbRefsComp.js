import React, {Component} from "react";

// by default input field is focuced on reload
// input value is accessible using onClick and arrow function

class CbRefsComp extends Component{
	constructor(props){
		super(props);

		this.cbRef = null;
		
		this.setCbRef = (element) => {
			this.cbRef = element;
		}
	}
	
	componentDidMount(){
		if(this.cbRef){
			this.cbRef.focus();
		}
		
		console.log(this.cbRef)
	}
	
	clickHandler = () => {
		console.log(this.cbRef.value)
	}
	
	render(){
		return (
			<>
				<div>CbRefs Demo</div>
				<input ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</>
		);
	}
}

export default CbRefsComp;