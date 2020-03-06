import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import DateCountdown from "react-date-countdown-timer";
import Part from "./particles";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Count down to wedding</h1>
        <DateCountdown dateTo="June 1, 2020 00:00:00" />
        <Part />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
