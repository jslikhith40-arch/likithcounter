import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        <h2>Counter Using Class Component</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );a
  }
}
export default App;
