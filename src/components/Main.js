import React from "react";
import TimeLengthController from "./TimeLengthController";
import Session from "./Session";
import Controller from "./Controller";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25
    };
  }
  render() {
    return (
      <div className="clock-container">
        <TimeLengthController
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
        />
        <Session />
        <Controller />
      </div>
    );
  }
}
export default Main;
