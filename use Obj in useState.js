import React, { Component , useState} from "react";

//use obj in  setStage

function App(){
	let [name, setName] = useState({
		firstName: "",
		lastName: ""
	});
	
	function onClickHandler(e){
		const currValue = e.target.value;
		const currId =e.target.id;
		
		if(currId === "first-name"){
			setName({...name, firstName: currValue});
		}
		else{
			setName({...name, lastName: currValue})
		}
	}
	
	return (
		<>
		<input onInput={onClickHandler} id="first-name" type="text" placeholder="Enter First Name" />
		<input onInput={onClickHandler} id="last-name" type="text" placeholder="Enter Last Name" />
		<h2>First Name : {name.firstName}</h2>
		<h2>Last Name : {name.lastName}</h2>
		<p>{JSON.stringify(name)}</p>
		</>
	)
}

export default App;