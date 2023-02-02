import React, {useReducer} from "react";
import useCounter from "./useCounter.js"

const Counter1 = () => {
	
	const [count, increment, decrement] = useCounter(10);
	
	return (
		<div>
			<p>Count1 : {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};

export default Counter1;