import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button
        onClick={increase}
        style={{ fontSize: "20px", marginRight: "10px" }}
      >
        Increase
      </button>
      <button onClick={decrease} style={{ fontSize: "20px" }}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
