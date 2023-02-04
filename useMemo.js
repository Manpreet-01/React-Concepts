import React, { useEffect, useState , useMemo} from 'react'
import '../styles/App.css';

// Memo = conditionally run a function => on changing of add state only

const App = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(10);
	
	const multiplication = useMemo(()=>{
		console.log("memo render", add*10)
		return add*10;
	}, [add]);
	
	function addFun(){
		setAdd(add+1)
	}
	
	function subFun(){
		setMinus(minus-1)
	}
	
    return (
        <div>
			Optimize = {multiplication}		 <br />
			
			<button onClick={addFun}>Add {add}</button>		<br />
			
			<button onClick={subFun}>Sub {minus}</button>
			
        </div>
    )
}

export default App;