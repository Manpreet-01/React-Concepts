import React, {createContext} from "react";
import "../styles/App.css";
import {data} from "./App.js";

const fun=(name)=>{
	return <p>My name is {name}</p>
}

const Child = () => {
  return (
		<div>
			<data.Consumer>
				{fun}
			</data.Consumer>
		</div>
	);
};

export default Child;