import React from "react";

function Session(props) {
  // Setting red color
  let color = {};
  if (props.minute === 0) {
    color = {
      color: "red"
    };
  }
  return (
    <div className="counter-container">
      <h2 className="session" id="timer-label">
        {props.isSession ? "Session" : "Break"}
      </h2>
      <p style={color ? color : null} className="time" id="time-left">
        <span>{props.minute < 10 ? "0" + props.minute : props.minute}</span>
        <span>:</span>
        <span>{props.second < 10 ? "0" + props.second : props.second}</span>
      </p>
    </div>
  );
}

export default Session;
