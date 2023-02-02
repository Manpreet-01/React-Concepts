import React, {useRef,useState} from "react";
import "../styles/App.css";

const App = () => {
	const [inp, setInp] = useState("");
	
	const refEle = useRef("");
	
	console.log(refEle);
	
	const reseter = (e)=>{
		setInp("");
		refEle.current.focus();
	}
	const changer = (e)=>{
		setInp(e.target.value)
	}
  return (
		<div>
			<input ref={refEle} type="text" onChange={changer} value={inp}/>
			<button onClick={reseter}>Reset</button>
		</div>
	);
};
export default App;