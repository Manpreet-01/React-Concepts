import React, {createContext} from "react";
import "../styles/App.css";

import Child from "./Child.js";

const data = createContext();


//Context Api = create context


const App = () => {
	const name = "ram"
  return (
		<div>
			<data.Provider value={name}>
				<Child />
			</data.Provider>
		</div>
	);
};
export default App;
export {data}