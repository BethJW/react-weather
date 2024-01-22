import React from "react";
import "./Predicted.css";
export default function Predicted() {
  return (
    <div>
      <div className="card-forecast">
        <h2>Predicted Forecast</h2>
        <div className="row" id="row"></div>
      </div>
      <div className="sign">
        Coded by{" "}
        <a href="https://github.com/BethJW/react-weather">Beth Williamson</a>
      </div>
    </div>
  );
}
