import React, { Component } from "react";
import { Counter } from "./counter";
class Counters extends Component {
  render() {
    const { counters, onReset, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((count) => (
          <Counter
            key={count.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={count}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
