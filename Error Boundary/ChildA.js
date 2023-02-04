import React from 'react'

const ChildA = ({name}) => {
	if(name=="Joker"){
		throw new Error("Not a hero");
	}
	return <>
		<h1>{name}</h1>
	</>
}

export default ChildA;