import React, {Component} from 'react'
import FocusInput from "./FocusInput.js"

// parent call function of child component - using componentRef

class App extends Component {
	render () {
		return (
			<>
			<FocusInput />
			</>
		);
	}
}
export default App;