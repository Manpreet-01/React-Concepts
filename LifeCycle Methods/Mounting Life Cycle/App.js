import {Component} from 'react'
import LifecycleA from "./LifecycleA.js";

// mounting lifecycle method execution order demo

/*
Order of execution  ->
LifecycleA constructor
LifecycleA getDerivedStateFromProps
LifecycleA render
LifecycleB constructor
LifecycleB getDerivedStateFromProps
LifecycleB render

LifecycleB componentDidMount
LifecycleA componentDidMount

*/

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