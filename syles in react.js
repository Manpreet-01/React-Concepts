import React from "react";
import '../styles/App.css';

const App = () => {
  
  // JS object form
  const styles = {
      color: "white",
      fontSize: "30px",
      backgroundColor: "rgb(25,25,25)",
      padding: "15px",
      border: "1px solid red",
      borderRadius: "20px",
      width: "30%",
    }
    
  return (
  <>
    <p className="counter" style={styles}>Hello Styles</p>
  </>
  );
};

export default App;
