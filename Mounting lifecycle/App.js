import {Component} from 'react'
import LifecycleA from "./LifecycleA.js";

// mounting lifecycle method execution order demo

class App extends Component {
	render () {
		return (
			<>
				<LifecycleA />
			</>
		);
	}
}

export default App;