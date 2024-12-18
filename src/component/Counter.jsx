import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  // let count = 0;
  function increment() {
    count + 2;
  }

  function decrement() {
    count--;
  }

  return (
    <div>
      <div className="Counter">
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
