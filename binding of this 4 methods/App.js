import React, { Component } from "react";
import "../styles/App.css";
import Bind1 from "./Bind1";
import Bind2 from "./Bind2";
import Bind3 from "./Bind3";
import Bind4 from "./Bind4";

class App extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<>
				<Bind1 name="Bind 1"/>
				<Bind2 name="Bind 2"/>
				<Bind3 name="Bind 3"/>
				<Bind4 name="Bind 4"/>
			</>
		);
	}
}

export default App;
