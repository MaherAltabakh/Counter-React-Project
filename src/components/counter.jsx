import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";
export class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    const { id } = this.props.counter;

    return (
      <div className="row">
        <div className="col-1">
          <span style={{ fontSize: 15 }} className={this.addingClass()}>
            {this.countFormat()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary m-1"
          >
            +
          </button>

          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary m-1"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => {
              onDelete(id);
            }}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
        {/*   <table>
          <tbody>
            <tr>
              <td width="70 px" style={{ textAlign: "center" }}>
                <span style={{ fontSize: 15 }} className={this.addingClass()}>
                  {this.countFormat()}
                </span>
              </td>
              <td>
                <button
                  onClick={() => onIncrement(counter)}
                  className="btn btn-secondary"
                >
                  +
                </button>
              </td>
              <td>
                <button
                  onClick={() => onDecrement(counter)}
                  className="btn btn-secondary m-2"
                >
                  -
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    onDelete(id);
                  }}
                  className="btn btn-danger btn-sm m-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }

  countFormat() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  addingClass() {
    const { value } = this.props.counter;
    let desieredClasses = "badge m-2 bg-";
    return value === 0
      ? (desieredClasses += "warning text-dark ")
      : (desieredClasses += "primary");
  }
}
