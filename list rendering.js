import React, { Component } from "react";

let key = 0;

//every list items has a unique key
// key is reserved keyword in react
// it can't be used as props

class App extends React.Component {
	render() {
		const colors = ["Red", "black", "green", "yellow"]
		const colorsList = colors.map(currColor => <li key={key++}>{currColor}</li>);
		return (
			<>
				<ul>{colorsList}</ul>
			</>
		)
	}
}

export default App;