import React, {useState,useEffect} from "react";
import "../styles/App.css";

function HookCounterOne (){
	const [count, setCount] = useState(0)
	console.log("HookCounterOne render..")
	
	useEffect(()=>{
		console.log("effect hook fired")
		document.title = count;
	})
	
	return (
		<div>
			<button onClick={()=>setCount(count+1)}> {count} </button>
			functional component
		</div>
	);
};
export default HookCounterOne;