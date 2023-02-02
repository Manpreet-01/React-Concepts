import React, {useReducer} from "react";

//const [state, dispatch] = userReducer(reducer, initialstate)
//const newState = reducer(currentState, action)


const initialState = 0;

const reducer = (state, action)=>{
	switch(action){
		case "Increment" : return state+1;
		case "Decrement" : return state-1;
		default : state;
	}
}


const Counter = () => {
	
	const [count, dispatch] = useReducer(reducer, initialState)
	
	return (
		<div>
			<p>{count}</p>
			<button onClick={()=>dispatch("Increment")}>Increment</button>
			<button onClick={()=>dispatch("Decrement")}>Decrement</button>
		</div>
	);
};

export default Counter;