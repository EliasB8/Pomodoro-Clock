import React from "react";

function Session(props) {
  return (
    <div className="counter-container">
      <h2 className="session" id="timer-label">
        Session
      </h2>
      <p className="time" id="time-left">
        25:00
      </p>
    </div>
  );
}

export default Session;
