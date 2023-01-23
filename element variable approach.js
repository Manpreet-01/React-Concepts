import React, { Component } from "react";

const isLoggedIn = true;

class App extends React.Component {
  render() {
		
		let msg ="Welcome Guest";
		
		if(isLoggedIn){
			msg = "Welcome Harish"
		}
		
		return <h1>{msg}</h1>
	}
}

export default App;