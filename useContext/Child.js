import React, {useContext} from "react";
import "../styles/App.css";

import {dataName, dataAge} from "./App.js";


const Child = () => {
	
	const name = useContext(dataName);
	const age = useContext(dataAge) ;
	
  return (
		<div>
			{`I am`+name+` and my age is `+age}
		</div>
	);
};

export default Child;