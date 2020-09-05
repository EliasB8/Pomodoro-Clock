import React from "react";

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
        <div className="time-controller-container">
          <div className="break-container">
            <h2 id="break-label">Break Length</h2>
            <button className="btn btn-break" id="break-increment">
              <i className="fas fa-plus-circle"></i>
            </button>
            <p className="length" id="break-length">
              {this.state.breakLength}
            </p>
            <button className="btn btn-break" id="break-decrement">
              <i className="fas fa-minus-circle"></i>
            </button>
          </div>
          <div className="separator"></div>
          <div className="session-container">
            <h2 id="session-label">Session Length</h2>
            <button className="btn btn-session" id="session-increment">
              <i className="fas fa-plus-circle"></i>
            </button>
            <p className="length" id="session-length">
              {this.state.sessionLength}
            </p>
            <button className="btn btn-session" id="session-decrement">
              <i className="fas fa-minus-circle"></i>
            </button>
          </div>
        </div>
        <div className="counter-container">
          <h2 className="session" id="timer-label">
            Session
          </h2>
          <p className="time" id="time-left">
            25:00
          </p>
        </div>
        <div className="controller-container">
          <div id="start_stop" className="controller start-stop">
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>
          </div>
          <div id="reset" className="controller reset">
            <i className="fas fa-retweet"></i>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
