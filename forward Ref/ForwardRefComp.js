import React, {Component} from "react";

const ForwardRefComp= React.forwardRef((props, ref)=>{
	return (
		<div>
			<input type="text" ref={ref}/>
		</div>
	)
});

export default ForwardRefComp;