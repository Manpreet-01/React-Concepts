import React, { useEffect, useState , useMemo, useCallback} from 'react'
import '../styles/App.css';
import ChildA from "./ChildA"

// Memo => conditionally run a function => on changing of add state only
// refrential equality => when page rerenders , functions recreates

// Memo => return memoized value
// useCallback = return memoized function

let z=0;

const App = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
	
	function addFun(){
		setAdd(add+1)
	}
	
	// const fun=()=>{
		// console.log("***");
	// }
	
	const fun = useCallback(() => {
		console.log("***************** callback ", ++z);
	}, []);
	
	
	// const fun = useMemo(()=>{
		// console.log("************* memo", ++z);
	// }, []);
	
    return (
        <div>
			<button onClick={addFun}>Add {add}</button>		<br /><br/>
			
			<ChildA fun={fun} count={count}/>
			<button onClick={()=>setCount(count+1)}>Count++</button>		<br />			
        </div>
    )
}

export default App;