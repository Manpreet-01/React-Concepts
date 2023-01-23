import React, { Component } from "react";

const isLoggedIn = true;

class App extends React.Component {
  render() {
		if(isLoggedIn){
			return <h1>Welcome Harish</h1>
		}
		else{
			return <h1>Welcome Guest</h1>
		}
	}
}

export default App;