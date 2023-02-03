import React from "react";
import {useNavigate} from "react-router-dom";


// useNavigation hook takes second argument as a object
// {replace :true}

const Home = () => {
	const navigate = useNavigate();
	
	function goTo(){
		let inp = document.getElementById("inp").value;
		navigate(inp);
	}
  return (
		<>
			<div>
				Home Page
			</div>
			
			<button onClick={()=>navigate('order-summary')}>Place order</button>
			<button onClick={()=>navigate('order-summary',{replace: true})}>Place order</button>
			<input placeholder="goto-url"  id="inp" />
			<button onClick={goTo} >Go To URL</button>
		</>
	);
};
export default Home;