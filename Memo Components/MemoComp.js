import React, {PureComponent} from "react";

function MemoComp({name}){
	console.log("Memo render")
	return (
		<>
			<div>Pure Component {name}</div>
		</>
	);
}

export default React.memo(MemoComp);