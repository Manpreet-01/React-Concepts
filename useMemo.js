import React, { useEffect, useState , useMemo} from 'react'
import '../styles/App.css';


// Memo = conditionally run a function => on changing of add state only

const App = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(10);
	
	const multiplication = useMemo(function multiply(){
		console.log("******** Optimize", add*10)
		return add*10;
	}, [add]);
	
	function addFun(){
		setAdd(add+1)
	}
	
	function subFun(){
		setMinus(minus-1)
	}
	
	function multiply1(){
		console.log("************unoptimize ", add*10)
		return add*10;
	}
	
    return (
        <div>
			Optimize = {multiplication}		 <br />
			UnOptimize = {multiply1()}						<br />
			<span>{add}</span>
			<button onClick={addFun}>Add</button>		<br />
			<span>{minus}</span>
			<button onClick={subFun}>Sub</button>
			
        </div>
    )
}
export default App;
