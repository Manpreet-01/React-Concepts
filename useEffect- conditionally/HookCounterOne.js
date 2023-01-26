import React, {useState,useEffect} from "react";
import "../styles/App.css";

function HookCounterOne (){
	const [count, setCount] = useState(0)
	const [name, setName] = useState("");
	
	// console.log("function render..")
	
	useEffect(()=>{
		console.log("effect hook fired")
		document.title = count;
	},[name, count])
	
	const onChangeHandler = (e)=>{
		// console.log(e.target.value)
		
		setName(e.target.value)
	}
	
	return (
		<div>
			<input type="text" onChange={onChangeHandler}/>
			<br />
			<button onClick={()=>setCount(count+1)}> {count} </button>
			functional component
		</div>
	);
};
export default HookCounterOne;