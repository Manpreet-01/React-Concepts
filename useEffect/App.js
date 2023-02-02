import React from "react";
import "../styles/App.css";
import ClassCounterOne from "./ClassCounterOne.js"
import HookCounterOne from "./HookCounterOne.js"


// useEffect runs after every render and update, mount

const App = () => {
  return (
		<div>
			<ClassCounterOne />
			<HookCounterOne />
		</div>
	);
};
export default App;