import React from "react";

function TimeLengthController(props) {
  return (
    <div className="time-length-container">
      <div className="break-container">
        <h2 id="break-label">Break Length</h2>
        <button
          className="btn btn-break"
          id="break-increment"
          onClick={props.handleBreakIncrement}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
        <p className="length" id="break-length">
          {props.breakLength}
        </p>
        <button
          className="btn btn-break"
          id="break-decrement"
          onClick={props.handleBreakDecrement}
        >
          <i className="fas fa-minus-circle"></i>
        </button>
      </div>
      <div className="separator"></div>
      <div className="session-container">
        <h2 id="session-label">Session Length</h2>
        <button
          className="btn btn-session"
          id="session-increment"
          onClick={props.handleSessionIncrement}
        >
          <i className="fas fa-plus-circle"></i>
        </button>
        <p className="length" id="session-length">
          {props.sessionLength}
        </p>
        <button
          className="btn btn-session"
          id="session-decrement"
          onClick={props.handleSessionDecrement}
        >
          <i className="fas fa-minus-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default TimeLengthController;
