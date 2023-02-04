import React, { useEffect, useState , useMemo, useCallback} from 'react'
import '../styles/App.css';
import ChildA from "./ChildA"
import ErrorBoundary from "./ErrorBoundary"

const App = () => {
    return (
        <div>
			<ErrorBoundary>
				<ChildA name={"Batman"}/>
			</ErrorBoundary>
			
			<ErrorBoundary>
				<ChildA name={"Superman"}/>
			</ErrorBoundary>
			
			<ErrorBoundary>
				<ChildA name={"Joker"}/>
			</ErrorBoundary>
        </div>
    )
}

export default App;