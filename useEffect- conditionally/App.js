import React from "react";
import "../styles/App.css";
import ClassCounterOne from "./ClassCounterOne.js"
import HookCounterOne from "./HookCounterOne.js"


// useEffect runs after every render and update, mount
// conditionally run effect
// by pass values inside a dependency array
// in second argument of useEffect

const App = () => {
  return (
		<div>
			<ClassCounterOne />
			<HookCounterOne />
		</div>
	);
};
export default App;