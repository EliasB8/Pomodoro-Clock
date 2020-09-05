import React from "react";
import TimeLengthController from "./TimeLengthController";
import Session from "./Session";
import Controller from "./Controller";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      time: "25:00"
    };
    // this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    // this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    // this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    // this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    // this.handleStartStop = this.handleStartStop.bind(this);
    // this.handleReset = this.handleReset.bind(this);
  }
  render() {
    return (
      <div className="clock-container">
        <TimeLengthController
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
        />
        <Session time={this.state.time} />
        <Controller />
      </div>
    );
  }
}
export default Main;
