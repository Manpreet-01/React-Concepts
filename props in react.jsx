import React from 'react';

function Greeting(props) {
  return (
    <div>
      <p>Hello, {props.name}!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Prop Passing Demo</h1>
      <Greeting name="John" />
    </div>
  );
}

export default App;
