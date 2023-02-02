import React, {createContext} from "react";
import "../styles/App.css";

import Child from "./Child.js";

const dataName = createContext();
const dataAge = createContext();


const App = () => {
	const name = "ram"
	const age = "33"
  return (
		<div>
			<dataAge.Provider value={age}>
			<dataName.Provider value={name}>
				<Child />
			</dataName.Provider>
			</dataAge.Provider>
		</div>
	);
};
export default App;
export {dataName, dataAge}