import React from "react";
import TimeLengthController from "./TimeLengthController";
import Session from "./Session";
import Controller from "./Controller";
let counter;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      counting: false,
      minute: "25",
      second: "00"
    };
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.checkMinValue = this.checkMinValue.bind(this);
    this.checkMaxValue = this.checkMaxValue.bind(this);
  }

  checkMinValue(value) {
    return value > 1 ? true : false;
  }

  checkMaxValue(value) {
    return value <= 59 ? true : false;
  }

  handleBreakIncrement() {
    if (this.checkMaxValue(this.state.breakLength) && !this.state.counting) {
      this.setState((state) => ({
        breakLength: state.breakLength + 1
      }));
    }
  }

  handleBreakDecrement() {
    if (this.checkMinValue(this.state.breakLength) && !this.state.counting) {
      this.setState((state) => ({
        breakLength: state.breakLength - 1
      }));
    }
  }

  handleSessionIncrement() {
    if (this.checkMaxValue(this.state.sessionLength) && !this.state.counting) {
      this.setState((state) => ({
        sessionLength: state.sessionLength + 1,
        minute: Number(state.minute) + 1
      }));
    }
  }

  handleSessionDecrement() {
    if (this.checkMinValue(this.state.sessionLength) && !this.state.counting) {
      this.setState((state) => ({
        sessionLength: state.sessionLength - 1,
        minute:
          Number(state.minute) > 10
            ? Number(state.minute) - 1
            : "0" + (Number(state.minute) - 1)
      }));
    }
  }

  handleStartStop() {
    this.setState((state) => ({
      counting: !state.counting
    }));
    if (!this.state.counting) {
      let totalTime =
        Number(this.state.minute) * 60 + Number(this.state.second);
      counter = setInterval(() => {
        totalTime--;
        this.setState((state) => ({
          minute:
            Math.floor(totalTime / 60) >= 10
              ? Math.floor(totalTime / 60)
              : "0" + Math.floor(totalTime / 60),
          second: totalTime % 60 >= 10 ? totalTime % 60 : "0" + (totalTime % 60)
        }));
        if (totalTime === 0) {
          let breakTime = Number(this.state.breakLength) * 60;
        }
      }, 1000);
    } else {
      console.log("cleared");
      clearInterval(counter);
    }
  }

  handleReset() {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      start: false,
      minute: "25",
      second: "00"
    });
  }

  render() {
    return (
      <div className="clock-container">
        <TimeLengthController
          breakLength={this.state.breakLength}
          sessionLength={this.state.sessionLength}
          handleBreakDecrement={this.handleBreakDecrement}
          handleBreakIncrement={this.handleBreakIncrement}
          handleSessionDecrement={this.handleSessionDecrement}
          handleSessionIncrement={this.handleSessionIncrement}
        />
        <Session time={this.state.minute + ":" + this.state.second} />
        <Controller
          handleStartStop={this.handleStartStop}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
export default Main;
