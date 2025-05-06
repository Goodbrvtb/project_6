import React from "react";

const CounterButton = ({ countChange }) => {
  const counter = () => {
    countChange((count) => count + 1);
  };
  console.log("render CounterButton");
  return <button onClick={counter}>Count</button>;
};

export default CounterButton;
