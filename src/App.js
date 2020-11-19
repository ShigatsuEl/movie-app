import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };
  plus = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    console.log("Goobye, Component");
  }
  render() {
    console.log("Rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
