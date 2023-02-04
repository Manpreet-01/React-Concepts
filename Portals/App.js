import React, { useEffect, useState , useMemo, useCallback} from 'react'
import '../styles/App.css';
import ChildA from "./ChildA"

// Portals
// <div id="root"></div> render outside this div
// E.G. render inside => <div id="portal-root"></div>  


const App = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(0);
		
    return (
        <div>
			<ChildA />
        </div>
    )
}

export default App;