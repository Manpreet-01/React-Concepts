import React, { Component , useState} from "react";

//use array in  setStage

function App(){
	let [values, setValues] = useState([]);
	
	function addItems(){
		let value = 1 + Math.floor(Math.random() *10);
		setValues([...values, {
			id: values.length,
			value:value
		}]);
	}
	return (
		<>
		<button onClick={addItems}>Add a number</button>
			<ol>Values List
			{values.map(curr => <li key={curr.id}>{curr.value}</li>)}
			</ol>
		</>
	)
}

export default App;