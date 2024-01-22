import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import "./Header.css";
import Header from "./Header";
import Main from "./Main";
import Predicted from "./Predicted";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <body>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"
      ></script>

      <div className="container">
        <div className="card">
          <Header date="10th January" time="11:45" />
          <Main
            currentTemp={20}
            humidity=" 90%"
            wind=" 10mph"
            description="cold"
            city="Crewe"
          />
        </div>
      </div>
      <Predicted />
    </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
