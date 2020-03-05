import React from "react";
import "./styles.css";
import DateCountdown from "react-date-countdown-timer";

export default function App() {
  return (
    <div className="App">
      <h1>Count down to wedding</h1>
      <DateCountdown dateTo="June 1, 2020 00:00:00" />
    </div>
  );
}
