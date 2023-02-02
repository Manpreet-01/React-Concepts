import React, {useState} from "react";

const Child = (props) => {
	const [name, setName] = useState("");
	
	function handler(e){
		setName(e.target.value);
	}
	
	function handleSubmit(e){
		e.preventDefault();
		
		props.getName(name);
	}
	
	return (
		<div>
			<h1>{props.data}</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={name} onChange={handler} placeholder="name"/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Child;