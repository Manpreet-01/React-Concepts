import React, {Component} from 'react'
import CbRefsComp from "./CbRefsComp.js";

// Refs - access DOM node directly in react
// cbRefs - callback

class App extends Component {
	render () {
		return (
			<>
			<CbRefsComp />
			</>
		);
	}
}

export default App;