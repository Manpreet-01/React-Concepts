import React, {Component} from "react";
import Input from "./Input.js";

// parend call function of child component - using componentRef

class FocusInput extends Component{
	constructor(props){
		super(props);
		
		this.componentRef = React.createRef();
	}
	
	clickHandler = () => {
		this.componentRef.current.focusInput();
	}
	
	render() {
		return (
			<>
				<Input ref={this.componentRef} />
				<button onClick={this.clickHandler}>Focus Input</button>
			</>
		);
	}
}
export default FocusInput;