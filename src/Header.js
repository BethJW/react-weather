import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <div>
      <div className="header">
        Today is {props.date} and the time is {props.time}
      </div>
      <hr />

      <form className="search" id="search">
        <input type="Submit" value="Search" className="search-btn" />
        <input
          type="text"
          placeholder="Enter a city..."
          className="search-bar"
          id="search-bar"
        />
      </form>
    </div>
  );
}
