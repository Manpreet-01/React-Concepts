import React, {useState, useEffect} from "react";

// useEffect called on any change happened.
// and return statement executed on 
// component unmounted may be ??

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(count + 1);
    },1000);

    return () => clearInterval(interval);
  });
  
  return (
  <>
    <p>Count is: {count}</p>
  </>
  );
};

export default App;
