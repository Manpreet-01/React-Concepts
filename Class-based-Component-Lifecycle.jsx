import React, { useState, useEffect } from 'react';
import '../styles/App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(()=>{
      this.tick();
    },1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    
  }

  render() {
    return (
      <div id='main'>
        <h1>Welcome to Newton School</h1>
        <div id='timer'>{this.state.date.toLocaleTimeString()}</div>
      </div>
    );
  }
}



function App()1 {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div id='main'>
      <h1>Welcome to Newton School</h1>
      <div id='timer'>{date.toLocaleTimeString()}</div>
    </div>
  );
}


export default App;