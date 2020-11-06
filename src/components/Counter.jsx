import React, { Component } from "react";
export class Counter extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <span className={this.getBadegClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-outline-success btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          //() => this.props.onDelete
          className="btn btn-outline-danger btn-sm m-2"
        >
          Delete
        </button>
        <hr />
      </div>
    );
  }

  getBadegClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
// counter was prefixed where there is props. = this.props.counter
export default Counter;
