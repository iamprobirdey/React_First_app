import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.value,
  //   imageUrl: "https://picsum.photos/200",
  //   tags: ["tag1", "tag2", "tag3"],
  //   id: this.props.id,
  //   index: this.props.index
  // };

  //   constructor() {
  //     super();
  //     console.log(this);
  //   }

  constructor() {
    super();
    console.log("Counter Contructor ----------");
  }

  componentDidMount() {
    console.log("Mounted Counter ----------");
  }
  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderAllThetags() {
    if (this.state.value === 0) return "There are no tags";
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgesClasses() {
    let classes = "badge badge-";
    classes += this.props.value === 0 ? "warning m-15" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  }

  incrementItem = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgesClasses();
    console.log("Redered Counter ----------");
    return (
      <div>
        <div style={{ diplay: "block", padding: 20, margin: 10 }}>
          <span style={this.styles} className={classes}>
            {this.formatCount()}
          </span>

          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            style={{ fontSize: 20, padding: 10, margin: 10 }}
            className="btn btn-outline-secondary btn-sm"
          >
            Increment
          </button>

          <button
            className="btn btn-outline-danger m-2 btn-sm"
            onClick={() => this.props.onDelete(this.props.index)}
          >
            Delete
          </button>
          {/* {this.renderAllThetags()} */}
        </div>
      </div>
    );
  }
}

export default Counter;
