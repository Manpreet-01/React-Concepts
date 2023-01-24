import React, {Component} from 'react'
import ParentComp from "./ParentComp.js";

// memo function components are same as pure class components

class App extends Component {
	render () {
		return (
			<>
			<ParentComp />
			</>
		);
	}
}

export default App;