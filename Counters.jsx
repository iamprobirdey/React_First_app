import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  styles = {
    fontSize: 15,
    fontWeight: "bold",
    padding: 20,
    margin: 10
  };

  constructor() {
    super();
    console.log("Countructor Counters");
  }

  componentDidMount() {
    console.log("Mounter Counters");
  }

  render() {
    const {
      onReset,
      onDelete,
      onIncrement,
      onSetDefault,
      counters
    } = this.props;
    console.log("Redered Counters");
    //Object Desctructuring
    return (
      <div>
        <button
          onClick={() => onReset()}
          className="btn btn-sm btn-success"
          style={this.styles}
        >
          Reset
        </button>
        <button onClick={onSetDefault} className="btn btn-sm btn-primary">
          Set As Default
        </button>
        {counters.map((counter, index) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            value={counter.value}
            id={counter.id}
            index={index}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

///Some LifeCycles Hooks

export default Counters;
