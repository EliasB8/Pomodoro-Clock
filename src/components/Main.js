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
      isSession: true,
      minute: 25,
      second: 0,
      intervalId: 0,
      isPlay: false
    };
    this.handleBreakIncrement = this.handleBreakIncrement.bind(this);
    this.handleBreakDecrement = this.handleBreakDecrement.bind(this);
    this.handleSessionIncrement = this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement = this.handleSessionDecrement.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.toggleType = this.toggleType.bind(this);
    this.playTimer = this.playTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
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
        minute: state.minute - 1
      }));
    }
  }

  toggleType(session) {
    if (session) {
      this.setState((state) => ({
        minute: state.sessionLength
      }));
    } else {
      this.setState((state) => ({
        minute: state.breakLength
      }));
    }
    let playPromise = document.getElementById("beep").play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          console.log("audio played auto");
        })
        .catch((error) => {
          console.log("playback prevented");
        });
    }
  }

  handleStartStop() {
    this.setState(
      (state) => ({
        isPlay: !state.isPlay
      }),
      () => {
        this.state.isPlay ? this.playTimer() : this.pauseTimer();
      }
    );
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);

    this.setState({
      intervalId: intervalId
    });
  }

  pauseTimer() {
    clearInterval(this.state.intervalId);
  }

  decreaseTimer() {
    switch (this.state.second) {
      case 0:
        if (this.state.minute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false
            });
            this.toggleType(this.state.isSession);
          } else {
            this.setState({
              isSession: true
            });
            this.toggleType(this.state.isSession);
          }
        } else {
          this.setState((state) => ({
            second: 59,
            minute: state.minute - 1
          }));
        }
        break;
      default:
        this.setState((state) => ({
          second: state.second - 1
        }));
    }
  }

  handleReset() {
    this.pauseTimer();
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      isSession: true,
      minute: 25,
      second: 0,
      intervalId: 0,
      isPlay: false
    });
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
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
        <Session
          isSession={this.state.isSession}
          minute={this.state.minute}
          second={this.state.second}
        />
        <Controller
          handleStartStop={this.handleStartStop}
          handleReset={this.handleReset}
        />
      </div>
    );
  }
}
export default Main;
