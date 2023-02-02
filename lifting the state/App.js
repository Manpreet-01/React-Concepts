import React, {useState} from "react";
import "../styles/App.css";

import Child from "./Child.js";

// 1 pass a function from parent to child
// 2 call function in child and pass a data a parameter
// 3 function is executed in parent

const App = () => {
	const [name, setName] = useState('User');
	
	function getNameFun(name){
		setName(name);
	}
	
	return (
		<div>
			<h1>Hello! {name}</h1>
			<Child getName={getNameFun} />
		</div>
	);
};

export default App;