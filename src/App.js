import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    theCounter: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelReset = () => {
    const thecounter = this.state.theCounter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ thecounter });
  };

  handelDelete = (counterId) => {
    const newCounters = this.state.theCounter.filter((c) => c.id !== counterId);
    this.setState({ theCounter: newCounters });
  };

  handelIncrement = (counter) => {
    const newCounters = [...this.state.theCounter]; //here we are cloning theCounter array and make newCounters referring to it, which means any change in the newCounters will be reflected on the theCounter array.
    const index = newCounters.indexOf(counter); //here we are looking for the position of (index of) the counter (which we want to modify) in the newCounters array
    newCounters[index] = { ...counter };
    newCounters[index].value++;
    this.setState({ theCounter: newCounters });
  };

  handelDecrement = (counter) => {
    const newCounters = [...this.state.theCounter]; //here we are cloning theCounter array and make newCounters referring to it, which means any change in the newCounters will be reflected on the theCounter array.
    const index = newCounters.indexOf(counter);
    newCounters[index] = { ...counter };
    // if (newCounters[index].value === 0)
    //   return this.setState({ theCounter: newCounters });
    newCounters[index].value--;
    this.setState({ theCounter: newCounters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.theCounter.filter((c) => c.value > 0).length
          }
        />
        <main role="main" className="container">
          <Counters
            counters={this.state.theCounter}
            onReset={this.handelReset}
            onDelete={this.handelDelete}
            onIncrement={this.handelIncrement}
            onDecrement={this.handelDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
