import {Component} from 'react'
import LifecycleA from "./LifecycleA.js";

// update lifecycle method execution order demo
//getDerivedStateFromProps
//shouldComponentUpdate
// render

// reverse order -  child to parent
//getSnapshotBeforeUpdate
// componentDidUpdate

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