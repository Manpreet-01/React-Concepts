import React, { Component } from "react";
import State1 from "./State1";
import State2 from "./State2";
import State3 from "./State3";

class App extends Component{
	constructor(props){
		super(props)
		this.state={
			count:0
		};
	}
	componentDidMount(){}
	componentWillUnmount(){};

	render(props){
		return (
			<>
				<State3 surplus={2}/>
			</>
		);
	}
}


// in React we cannot change variable directly
// 1.state variables use :- when state variable is updated, UI updated
// render function is called again automatically
// to change variable setState method is used
// state is always Object
// pass those property that we want to change




// class App1 extends React.Component {
  // constructor() {
    // super();
    // this.state = {
      // selectedColor: "white"
    // };
  // }

  // render() {
    // const colors = ["Red", "black", "green", "yellow"];
    // return (
      // <div
        // className="color-container"
        // style={{ backgroundColor: this.state.selectedColor }}
      // >
        // <ul>
          // {colors.map((color) => {
            // return (
              // <div
                // className="color"
                // style={{ backgroundColor: color }}
                // onClick={() => {
                  // this.setState({
                    // selectedColor: color
                  // });
                // }}
              // ></div>
            // );
          // })}
        // </ul>
      // </div>
    // );
  // }
// }


export default App;
// export {App1};
