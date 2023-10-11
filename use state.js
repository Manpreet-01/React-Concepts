import React, {useState} from "react";

// on any change component rerenders itself

const App = () => {
  const [count, setCount] = useState(0);

  // const handleClick =() => setCount(count+1);
  // or
  const handleClick =() => setCount(prev =>prev+1);
  
  return (
    <>
      <p>Count is: {count}</p>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default App;
