import React from "react";
import "./Main.css";
export default function Main(props) {
  let currentTemp = "10";
  let city = "Crewe";
  let humidity = "20%";
  let wind = "20mph";
  let description = "freezing";
  return (
    <div className="Main">
      <div>
        <h1>The Weather in {city}</h1>
        <div className="row">
          <div className="col-5">
            <div className="current-info">
              <span className="current currentTemp">{currentTemp}</span>
              <span className="unit" id="currentUnit">
                °C
              </span>
            </div>
            <div className="details">
              <div className="humidity">Humidity:{humidity}</div>
              <div className="wind">Wind:{wind}</div>
            </div>
            <div className="WeatherDescription" id="description">
              Todays Weather will be {description}
            </div>
          </div>
          <div className="col-7">
            <img src="./rain.png" alt="weather" className="current-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
