import React from "react";

function Controller(props) {
  return (
    <div className="controller-container">
      <div
        id="start_stop"
        className="controller start-stop"
        onClick={props.handleStartStop}
      >
        <i className="fas fa-play"></i>
        <i className="fas fa-pause"></i>
      </div>
      <div id="reset" className="controller reset" onClick={props.handleReset}>
        <i className="fas fa-retweet"></i>
      </div>
    </div>
  );
}

export default Controller;
