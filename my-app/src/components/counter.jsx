import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeName()}>
          {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeName() {
    if (this.props.counter.value === 0) return "badge badge-warning m-2";
    return "badge badge-primary m-2";
  }
}

export default Counter;
