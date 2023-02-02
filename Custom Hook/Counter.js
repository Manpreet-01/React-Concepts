import React, {useReducer} from "react";
import useCounter from "./useCounter.js"

const Counter = () => {
	
	const [count, increment, decrement] = useCounter();
	
	return (
		<div>
			<p>count : {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter;