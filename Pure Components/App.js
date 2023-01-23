import React, {Component} from 'react'
import ParentComp from "./ParentComp.js";

// Pure Component - re-render by Shallow Comparing prev and next state,props changes
// but regular components are always render when the state or props changes

// shallow comparing
// a = [1,2,3]
// b = [1,2,3]
// c = a
// a===b (false)
// a===c (true)

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