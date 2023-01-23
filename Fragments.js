import React from "react";

//we can use only key attribute on Fragment

function Fragments(){
	const items = [
		{
			id:0,
			title: "item1"
		},
		{
			id:1,
			title: "item2",
		},
		{
			id:2,
			title: "item3"
		}
	];
	return (
		<>
			<h1>Fragments Demo</h1>
			<p>Fragments Demo Copnonent</p>
			{
				items.map(item => (
					<React.Fragment key={item.id}>
						<h1>{item.id}</h1>
						<p>{item.title}</p>
					</React.Fragment>
				))
			}
		</>
	);
}

export default Fragments;