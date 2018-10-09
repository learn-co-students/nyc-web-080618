import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const CounterDisplay = props => {
  return <p onClick={props.handleIncrement}>Current number {props.counter}</p>;
};

class App extends Component {
  constructor(props) {
    super(props);
    //this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    counter: 0
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   };
  // }

  handleIncrement = event => {
    //debugger;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
    // console.log("About to increment");
    // //new State should be {counter:1}
    // for (let i = 0; i < 1000; i++) {
    //   this.setState(
    //     preState => {
    //       return { counter: preState.counter + 1 };
    //     },
    //     () => console.log(this.state)
    //   );
    // }
  };

  render() {
    return (
      <>
        <h1>Counter app</h1>
        <CounterDisplay
          counter={this.state.counter}
          handleIncrement={this.handleIncrement}
        />
      </>
    );
  }
}

export default App;
