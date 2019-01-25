import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  constructor() {
    super();
    console.log("I am constructure");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  deleteTheCounter = counterIndex => {
    console.log("Deleted:  " + counterIndex);
    this.setState(this.state.counters.splice(counterIndex, 1));
  };

  onIncrement = counter => {
    console.log("Incremented: ");
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  setAsDefault = () => {
    const counters = [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ];
    this.setState({ counters });
  };

  render() {
    console.log("I am render");
    return (
      <div>
        <Navbar
          totalNoCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.deleteTheCounter}
            onIncrement={this.onIncrement}
            onReset={this.handleReset}
            onSetDefault={this.setAsDefault}
          />
        </div>
      </div>
    );
  }
}

export default App;
