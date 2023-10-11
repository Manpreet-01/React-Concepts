import React from "react";
import '../styles/App.css';

const App = () => {
  const dataArr = [
    "MilK",
    "Biscuits",
    "Bread",
    "Eggs",
    "Pasteries",
    "Pasta",
    "Apple",
    "Orange",
    "Litchi",
  ];
  
  
  const listItems = dataArr.map(e => {
    return {
      value: e,
      id: dataArr.indexOf(e),
    };
  });
  
  let i = 0;
  const items = listItems.map(
    o => <p key={o.id} className="item">{i++}. {o.value}</p>
  )
  
  return (
  <>
    <h1 className="h1">List of foods available</h1>
    {items}
  </>
  );
};

export default App;
