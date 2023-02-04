import React, { useEffect, useState , memo, useMemo} from 'react'
import ReactDOM from "react-dom";



function PortalComp(){
	return(
		<div>
			<h3>
				Portals Demo
			</h3>
		</div>
	);
}


const ChildA = ({fun, count}) => {
	
	return ReactDOM.createPortal(<PortalComp />, document.getElementById("portal-root")) ;
}

export default memo(ChildA);