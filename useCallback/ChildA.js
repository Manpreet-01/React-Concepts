import React, { useEffect, useState , memo, useMemo} from 'react'
import '../styles/App.css';



const ChildA = ({fun, count}) => {
	
	console.log("Child A component render");
	
    return (
        <div>
		{fun()}
			ChildA  {count};
        </div>
    )
}

export default memo(ChildA);